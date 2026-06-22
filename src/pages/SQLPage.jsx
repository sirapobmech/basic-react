import CodeBlock from '../components/CodeBlock'
import { QASection } from '../components/QA'

const schemaCode = `CREATE TABLE users (
  id       INT PRIMARY KEY,
  name     VARCHAR(100),
  email    VARCHAR(100),
  age      INT,
  dept_id  INT
);

CREATE TABLE departments (
  id    INT PRIMARY KEY,
  name  VARCHAR(100)
);

CREATE TABLE orders (
  id         INT PRIMARY KEY,
  user_id    INT,
  product    VARCHAR(100),
  amount     DECIMAL(10,2),
  created_at DATE
);`

const dmlCode = `-- INSERT — เพิ่มข้อมูล
INSERT INTO users (name, email, age, dept_id)
VALUES ('Alice', 'alice@test.com', 28, 1);

-- เพิ่มหลายแถวพร้อมกัน
INSERT INTO users (name, email, age)
VALUES
  ('Bob',   'bob@test.com',   25),
  ('Carol', 'carol@test.com', 30);

-- INSERT แล้วได้แถวที่เพิ่งสร้างกลับมา (PostgreSQL)
INSERT INTO users (name, email) VALUES ('Dave', 'dave@test.com')
RETURNING *;

-- UPDATE — แก้ไขข้อมูล
UPDATE users SET age = 29 WHERE id = 1;

-- แก้หลายคอลัมน์พร้อมกัน
UPDATE users
SET age = 29, dept_id = 2
WHERE id = 1;

-- ⚠️ ถ้าลืม WHERE — แก้ทุกแถวในตาราง!
UPDATE users SET age = 0;  -- อันตราย

-- DELETE — ลบข้อมูล
DELETE FROM users WHERE id = 1;

-- ⚠️ ถ้าลืม WHERE — ลบทุกแถว!
DELETE FROM users;  -- อันตราย

-- ลบแบบมีเงื่อนไขซับซ้อน
DELETE FROM orders
WHERE created_at < '2023-01-01' AND amount < 100;`

const relationshipCode = `-- Database Relationship — ความสัมพันธ์ระหว่างตาราง

-- ONE-TO-MANY: user คนเดียวมีหลาย order
-- กำหนดด้วย FOREIGN KEY
CREATE TABLE users (
  id    SERIAL PRIMARY KEY,
  name  VARCHAR(100)
);

CREATE TABLE orders (
  id      SERIAL PRIMARY KEY,
  amount  DECIMAL(10,2),
  user_id INT REFERENCES users(id)  -- foreign key ชี้ไปที่ users
  -- ON DELETE CASCADE → ถ้าลบ user ให้ลบ order ของเขาด้วย
  -- ON DELETE SET NULL → ถ้าลบ user ให้ set user_id = NULL
);

-- ดึงข้อมูลรวมกัน
SELECT u.name, o.amount
FROM users u
JOIN orders o ON u.id = o.user_id;

-- -------------------------------------------
-- MANY-TO-MANY: student เรียนได้หลาย course
--               course มีได้หลาย student
-- ต้องมี Junction Table กลาง

CREATE TABLE students (id SERIAL PRIMARY KEY, name VARCHAR(100));
CREATE TABLE courses  (id SERIAL PRIMARY KEY, name VARCHAR(100));

CREATE TABLE student_courses (     -- Junction Table
  student_id INT REFERENCES students(id),
  course_id  INT REFERENCES courses(id),
  enrolled_at DATE DEFAULT NOW(),
  PRIMARY KEY (student_id, course_id)  -- ไม่ให้ลงซ้ำ
);

-- ดึง course ทั้งหมดของ student id=1
SELECT c.name
FROM courses c
JOIN student_courses sc ON c.id = sc.course_id
WHERE sc.student_id = 1;`

const nPlusOneCode = `-- N+1 Problem — query เกินความจำเป็น เกิดบ่อยมากกับ ORM

-- โจทย์: ดึง users ทั้งหมดพร้อม orders ของแต่ละคน

-- ❌ N+1 Problem
-- 1 query ดึง users ทั้งหมด
SELECT * FROM users;  -- ได้ 100 คน

-- แล้ว loop ดึง orders ทีละคน = 100 queries เพิ่ม!
SELECT * FROM orders WHERE user_id = 1;
SELECT * FROM orders WHERE user_id = 2;
SELECT * FROM orders WHERE user_id = 3;
-- ... 100 ครั้ง
-- รวม: 1 + 100 = 101 queries ← ช้ามาก

-- ✅ แก้ด้วย JOIN — query เดียวได้ทุกอย่าง
SELECT u.id, u.name, o.id AS order_id, o.amount
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;
-- 1 query เท่านั้น

-- ✅ แก้ใน Prisma ด้วย include
const users = await prisma.user.findMany({
  include: { orders: true }  -- Prisma JOIN ให้อัตโนมัติ
})
-- 1 query เท่านั้น (ไม่ใช่ loop)

-- ✅ แก้ใน Prisma ด้วย select เฉพาะที่ต้องการ
const users = await prisma.user.findMany({
  select: {
    name: true,
    orders: {
      select: { amount: true }
    }
  }
})`

const selectWhereCode = `-- ดึงทุกคอลัมน์
SELECT * FROM users;

-- ดึงเฉพาะบางคอลัมน์
SELECT name, email FROM users;

-- WHERE กรองแถวตามเงื่อนไข
SELECT * FROM users WHERE age > 25;
SELECT * FROM users WHERE age BETWEEN 20 AND 30;

-- LIKE ค้นหาด้วย pattern
-- % = ตัวอักษรกี่ตัวก็ได้   _ = หนึ่งตัวอักษร
SELECT * FROM users WHERE name LIKE 'A%';    -- ขึ้นต้นด้วย A
SELECT * FROM users WHERE name LIKE '%son';  -- ลงท้ายด้วย son

-- IN ตรวจหลายค่าในคราวเดียว
SELECT * FROM users WHERE dept_id IN (1, 2, 3);

-- IS NULL ตรวจค่าที่ว่าง (ใช้ = NULL ไม่ได้!)
SELECT * FROM users WHERE dept_id IS NULL;`

const orderLimitCode = `-- ORDER BY เรียงผลลัพธ์
SELECT * FROM users ORDER BY age ASC;          -- น้อยไปมาก
SELECT * FROM users ORDER BY age DESC;         -- มากไปน้อย
SELECT * FROM users ORDER BY dept_id, age DESC; -- เรียงหลายคอลัมน์

-- DISTINCT กรองผลซ้ำออก
SELECT DISTINCT dept_id FROM users;

-- LIMIT + OFFSET ใช้ทำ pagination
-- หน้า 1: LIMIT 10 OFFSET 0
-- หน้า 2: LIMIT 10 OFFSET 10
-- หน้า 3: LIMIT 10 OFFSET 20
SELECT * FROM users
ORDER BY id
LIMIT 10 OFFSET 20;  -- แถวที่ 21-30`

const joinConceptCode = `--  ตาราง users          ตาราง departments
--  +---------+-------+   +----+-----------+
--  | id|name |dept_id|   | id | name      |
--  +---+-----+-------+   +----+-----------+
--  | 1 |Alice|  1    |   |  1 | Engineer  |
--  | 2 |Bob  |  2    |   |  2 | Marketing |
--  | 3 |Carol| NULL  |   |  3 | HR        |
--  +---+-----+-------+   +----+-----------+

-- INNER JOIN — เอาเฉพาะที่ match ทั้งสองฝั่ง
-- Carol (dept_id = NULL) และ HR (ไม่มีใคร) จะหายไป
SELECT u.name, d.name AS dept
FROM users u
INNER JOIN departments d ON u.dept_id = d.id;
-- ผล: Alice-Engineer, Bob-Marketing

-- LEFT JOIN — เอาทุกแถวจากตารางซ้าย (users)
-- Carol จะยังแสดง แต่ dept = NULL
SELECT u.name, d.name AS dept
FROM users u
LEFT JOIN departments d ON u.dept_id = d.id;
-- ผล: Alice-Engineer, Bob-Marketing, Carol-NULL

-- RIGHT JOIN — เอาทุกแถวจากตารางขวา (departments)
-- HR จะยังแสดง แต่ name = NULL
SELECT u.name, d.name AS dept
FROM users u
RIGHT JOIN departments d ON u.dept_id = d.id;
-- ผล: Alice-Engineer, Bob-Marketing, NULL-HR`

const aggregateCode = `-- Aggregate Functions — คำนวณจากหลายแถว

SELECT COUNT(*)    FROM orders;  -- นับทุกแถว (รวม NULL)
SELECT COUNT(user_id) FROM orders;  -- นับเฉพาะที่ไม่ NULL
SELECT SUM(amount) FROM orders;  -- รวม
SELECT AVG(amount) FROM orders;  -- เฉลี่ย
SELECT MIN(amount) FROM orders;  -- น้อยสุด
SELECT MAX(amount) FROM orders;  -- มากสุด`

const groupByCode = `-- GROUP BY จัดกลุ่มแถวที่ค่าเท่ากันไว้ด้วยกัน
-- แล้ว aggregate แต่ละกลุ่ม

-- ยอดซื้อรวมของแต่ละ user
SELECT user_id,
       COUNT(*)     AS จำนวน_order,
       SUM(amount)  AS ยอดรวม,
       AVG(amount)  AS ค่าเฉลี่ย
FROM orders
GROUP BY user_id;

-- HAVING กรองกลุ่มหลัง GROUP BY
-- (ใช้ WHERE ไม่ได้เพราะ SUM ยังไม่มีก่อน group)
SELECT user_id, SUM(amount) AS total
FROM orders
GROUP BY user_id
HAVING SUM(amount) > 1000;  -- เอาเฉพาะคนที่ซื้อมากกว่า 1000

-- ⚠️ ลำดับการทำงาน SQL
-- FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT`

const subqueryCode = `-- Subquery คือ query ที่ซ้อนอยู่ใน query อื่น
-- ผลของ inner query จะถูกใช้โดย outer query

-- หา user ที่เคยสั่งของมากกว่า 1000
SELECT name FROM users
WHERE id IN (
  SELECT user_id FROM orders WHERE amount > 1000
);

-- EXISTS — เช็คว่ามีแถวไหนใน subquery ตรงเงื่อนไขไหม
-- เร็วกว่า IN เพราะหยุดทันทีที่เจอแถวแรก
SELECT name FROM users u
WHERE EXISTS (
  SELECT 1 FROM orders o WHERE o.user_id = u.id
);`

const cteCode = `-- CTE (Common Table Expression) คือการตั้งชื่อ query ชั่วคราว
-- ช่วยให้ query ซับซ้อนอ่านง่ายขึ้น แทน subquery ซ้อนหลายชั้น

-- เขียนแบบ subquery ซ้อน — อ่านยาก
SELECT u.name, t.total
FROM users u
JOIN (SELECT user_id, SUM(amount) AS total
      FROM orders GROUP BY user_id
      HAVING SUM(amount) > 1000) t
ON u.id = t.user_id;

-- เขียนแบบ CTE — อ่านง่ายกว่า
WITH high_spenders AS (
  SELECT user_id, SUM(amount) AS total
  FROM orders
  GROUP BY user_id
  HAVING SUM(amount) > 1000
)
SELECT u.name, hs.total
FROM users u
JOIN high_spenders hs ON u.id = hs.user_id;`

const windowCode = `-- Window Function คำนวณโดยไม่ยุบแถว
-- ต่างจาก GROUP BY ที่ทำให้แถวหายไป

-- GROUP BY ยุบเหลือแถวเดียวต่อกลุ่ม
SELECT dept_id, AVG(age) FROM users GROUP BY dept_id;
-- ผล: 3 แถว (ต่อ dept)

-- Window Function คำนวณแต่ยังคงทุกแถว
SELECT name, dept_id, age,
  AVG(age) OVER (PARTITION BY dept_id) AS avg_age_in_dept
FROM users;
-- ผล: ทุกแถว + คอลัมน์ avg_age_in_dept ของ dept ตัวเอง

-- ROW_NUMBER — ให้เลขลำดับในแต่ละ dept
SELECT name, dept_id,
  ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY age DESC) AS rank
FROM users;
-- ใช้หา top-N ต่อกลุ่ม เช่น คนอายุมากสุด 3 อันดับแรกในแต่ละ dept

-- Running Total — ยอดสะสม
SELECT created_at, amount,
  SUM(amount) OVER (ORDER BY created_at) AS ยอดสะสม
FROM orders;`

const indexCode = `-- Index คือโครงสร้างข้อมูลพิเศษที่ทำให้ค้นหาเร็วขึ้น
-- เปรียบเหมือน index ของหนังสือ — ไม่ต้องอ่านทุกหน้าเพื่อหาเนื้อหา

-- ไม่มี index: DB ต้องอ่านทุกแถว (Full Table Scan)
SELECT * FROM users WHERE email = 'alice@test.com';
-- มี 1,000,000 แถว → อ่าน 1,000,000 แถว

-- สร้าง index บน email
CREATE INDEX idx_users_email ON users(email);

-- มี index: DB กระโดดไปยังแถวที่ตรงได้เลย
SELECT * FROM users WHERE email = 'alice@test.com';
-- 1,000,000 แถว → อ่านไม่กี่แถว (เร็วกว่ามาก)

-- Composite Index — หลายคอลัมน์
-- เหมาะเมื่อ query กรองด้วยหลายคอลัมน์พร้อมกัน
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

-- ตรวจสอบว่า query ใช้ index ไหม
EXPLAIN SELECT * FROM users WHERE email = 'alice@test.com';`

const transactionCode = `-- Transaction คือการรวมหลาย query ให้เป็นหน่วยเดียว
-- ถ้า query ใดพลาด ทุกอย่างจะถูกยกเลิก ไม่มีสถานะค้างกลางๆ

-- ตัวอย่าง: โอนเงิน
-- ถ้าหักเงิน A แล้วระบบล่มก่อนเพิ่มเงิน B
-- โดยไม่มี transaction → เงินหายไป 500

BEGIN;
  UPDATE accounts SET balance = balance - 500 WHERE id = 1;
  UPDATE accounts SET balance = balance + 500 WHERE id = 2;
COMMIT;    -- สำเร็จทั้งคู่ → บันทึก

-- ถ้า error เกิดก่อน COMMIT
BEGIN;
  UPDATE accounts SET balance = balance - 500 WHERE id = 1;
  -- ระบบล่ม หรือ error อะไรก็ตาม
ROLLBACK;  -- ยกเลิกทุกอย่าง → เงิน A ไม่หายไป`

const dbDiffSyntaxCode = `-- ความแตกต่างที่เจอบ่อย

-- Auto Increment Primary Key
-- PostgreSQL
CREATE TABLE users (
  id SERIAL PRIMARY KEY,        -- หรือ BIGSERIAL สำหรับตัวเลขใหญ่
  name VARCHAR(100)
);

-- MySQL
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);

-- SQLite
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT
);

-- -----------------------------------------------
-- ดึง N แถวล่าสุด
-- PostgreSQL / MySQL / SQLite
SELECT * FROM orders ORDER BY created_at DESC LIMIT 5;

-- SQL Server
SELECT TOP 5 * FROM orders ORDER BY created_at DESC;

-- -----------------------------------------------
-- String Concatenation
-- PostgreSQL / SQLite
SELECT first_name || ' ' || last_name AS full_name FROM users;

-- MySQL / SQL Server
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;

-- -----------------------------------------------
-- ตรวจสอบวันที่ปัจจุบัน
-- PostgreSQL
SELECT NOW();              -- timestamp
SELECT CURRENT_DATE;       -- date เท่านั้น

-- MySQL
SELECT NOW();
SELECT CURDATE();

-- SQLite
SELECT datetime('now');
SELECT date('now');`

const sqlInjectionCode = `-- SQL Injection คือการที่ hacker แทรก SQL เข้ามาใน query

-- สมมติ login form — รับ email กับ password จาก user
-- แล้วนำไปต่อใน SQL ตรงๆ

-- ❌ อันตราย — ต่อ string ตรงๆ
const sql = "SELECT * FROM users WHERE email = '" + email + "'"

-- ถ้า hacker พิมพ์ email = ' OR '1'='1
-- SQL กลายเป็น:
SELECT * FROM users WHERE email = '' OR '1'='1'
-- '1'='1' เป็นจริงเสมอ → ได้ user ทุกคน → login ได้โดยไม่รู้ password ❌

-- ยิ่งร้ายกว่านั้น ถ้าพิมพ์ email = '; DROP TABLE users; --
-- SQL กลายเป็น:
SELECT * FROM users WHERE email = ''; DROP TABLE users; --'
-- ตาราง users ถูกลบทั้งหมด ❌

-- ✅ แก้ด้วย Placeholder — library จัดการ escape ให้
db.query('SELECT * FROM users WHERE email = $1', [email])
-- ไม่ว่า email จะมีค่าอะไร จะถูกแปลงเป็น string ธรรมดาเสมอ
-- ไม่มีทางรันเป็น SQL ได้

-- Prisma ปลอดภัยอัตโนมัติ — ไม่มี raw string ให้ inject
prisma.user.findUnique({ where: { email } })  // ✅ ปลอดภัยเสมอ`

const dbNodejsCode = `// เชื่อม Node.js กับแต่ละ Database

// PostgreSQL — ใช้ library 'pg'
import pg from 'pg'
const db = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const result = await db.query('SELECT * FROM users WHERE id = $1', [42])
// $1, $2, $3 — placeholder ป้องกัน SQL injection

// MySQL — ใช้ library 'mysql2'
import mysql from 'mysql2/promise'
const pool = mysql.createPool({ uri: process.env.DATABASE_URL })
const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [42])
// ? — placeholder ของ MySQL

// SQLite — ใช้ library 'better-sqlite3'
import Database from 'better-sqlite3'
const db = new Database('myapp.db')       // ไฟล์ .db บนเครื่อง
const users = db.prepare('SELECT * FROM users WHERE id = ?').all(42)
// Synchronous — ไม่ต้อง await

// Prisma — เขียน code เหมือนกันทุก DB แค่เปลี่ยน provider ใน schema
// schema.prisma:
//   provider = "postgresql"  หรือ "mysql"  หรือ "sqlite"
const users = await prisma.user.findMany()  // code ไม่เปลี่ยน`

const qaItems = [
  {
    q: 'WHERE กับ HAVING ต่างกันอย่างไร?',
    a: `ทั้งคู่ใช้กรองข้อมูล แต่ทำงานคนละช่วง<br><br>
    <strong>WHERE</strong> — กรองแถวก่อน GROUP BY ทำงานกับค่าในแต่ละแถว<br>
    <strong>HAVING</strong> — กรองหลัง GROUP BY ทำงานกับค่า aggregate เช่น SUM, COUNT<br><br>
    ตัวอย่าง: หา dept ที่มีพนักงานเฉลี่ยอายุ > 30<br>
    <code>WHERE age > 30</code> → กรองพนักงานออกก่อน (ผิด — เปลี่ยนคนที่นับ)<br>
    <code>HAVING AVG(age) > 30</code> → กรอง dept ที่ค่าเฉลี่ย > 30 (ถูก)`
  },
  {
    q: 'INNER JOIN กับ LEFT JOIN ต่างกันอย่างไร?',
    a: `<strong>INNER JOIN</strong> — คืนเฉพาะแถวที่ match ทั้งสองตาราง แถวที่ไม่มีคู่จะหายไป<br><br>
    <strong>LEFT JOIN</strong> — คืนทุกแถวจากตารางซ้ายเสมอ ถ้าไม่มี match ฝั่งขวาจะเป็น NULL<br><br>
    เลือกใช้: ถ้าต้องการ "user ทุกคน แม้ยังไม่มี order" → LEFT JOIN<br>
    ถ้าต้องการเฉพาะ "user ที่มี order" → INNER JOIN`
  },
  {
    q: 'Index คืออะไร ควรสร้างเมื่อไหร่?',
    a: `Index คือโครงสร้างข้อมูลพิเศษ ช่วยให้ DB ค้นหาเร็วขึ้น ไม่ต้องอ่านทุกแถว<br><br>
    <strong>ควรสร้างเมื่อ:</strong><br>
    • คอลัมน์ที่ใช้ใน WHERE, JOIN, ORDER BY บ่อย<br>
    • Foreign key เช่น user_id ใน orders<br><br>
    <strong>ไม่ควรสร้างเมื่อ:</strong><br>
    • ตารางเล็ก — full scan เร็วกว่า overhead ของ index<br>
    • คอลัมน์ที่ INSERT/UPDATE บ่อย เพราะ index ต้อง rebuild ทุกครั้ง ทำให้เขียนช้าลง`
  },
  {
    q: 'Window Function ต่างจาก GROUP BY อย่างไร?',
    a: `<strong>GROUP BY</strong> — ยุบหลายแถวเป็นแถวเดียวต่อกลุ่ม ข้อมูลรายแถวหายไป<br>
    <strong>Window Function</strong> — คำนวณค่า aggregate แต่ยังคงทุกแถวไว้<br><br>
    ตัวอย่าง: อยากรู้ว่าแต่ละคนมีอายุเท่าไหร่ เทียบกับค่าเฉลี่ยของ dept ตัวเอง<br>
    GROUP BY ทำไม่ได้เพราะยุบแถวไปแล้ว — Window Function ทำได้`
  },
  {
    q: 'Transaction คืออะไร ทำไมต้องใช้?',
    a: `Transaction คือการรวมหลาย query ให้เป็นหน่วยเดียว — สำเร็จทั้งหมดหรือล้มเหลวทั้งหมด<br><br>
    ทำไมต้องใช้: ป้องกันสถานะข้อมูลค้างกลางๆ<br>
    เช่น โอนเงิน: หักเงิน A แล้วระบบล่มก่อนเพิ่มให้ B → เงินหายไป<br>
    ถ้าใช้ Transaction: ระบบล่มก่อน COMMIT → ROLLBACK อัตโนมัติ → เงิน A ไม่หาย<br><br>
    ACID คือคุณสมบัติที่ transaction ต้องมี:<br>
    Atomicity · Consistency · Isolation · Durability`
  },
  {
    q: 'CTE กับ Subquery ต่างกันอย่างไร?',
    a: `ผลลัพธ์เหมือนกัน แต่ CTE อ่านง่ายกว่ามาก<br><br>
    <strong>Subquery</strong> — ซ้อนอยู่ใน query ถ้ามีหลายชั้นอ่านยากมาก<br>
    <strong>CTE (WITH)</strong> — ตั้งชื่อ query ชั่วคราว อ่านเป็นขั้นตอน ใช้ชื่อซ้ำได้<br><br>
    แนะนำ: ใช้ CTE แทน subquery ซ้อนเกิน 1 ชั้น ทีมอ่านง่ายกว่ามาก`
  }
]

export default function SQLPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-badge">Database</div>
        <h1 className="page-title">SQL</h1>
        <p className="page-desc">
          ทบทวน SQL ตั้งแต่พื้นฐานจนถึงขั้นสูง
          พร้อม pattern ที่เจอในการสัมภาษณ์งาน
        </p>
      </div>

      <div className="section">
        <div className="section-title">Schema ตัวอย่าง</div>
        <p className="section-desc">ใช้ 3 ตารางนี้เป็น reference ตลอดหน้า — <code>users</code> เชื่อมกับ <code>departments</code> ผ่าน <code>dept_id</code> และเชื่อมกับ <code>orders</code> ผ่าน <code>user_id</code></p>
        <CodeBlock code={schemaCode} lang="sql" />
      </div>

      <div className="section">
        <div className="section-title">INSERT / UPDATE / DELETE</div>
        <p className="section-desc">
          DML (Data Manipulation Language) — คำสั่งจัดการข้อมูลในตาราง
          ต้องระวัง UPDATE และ DELETE ที่ไม่มี WHERE จะกระทบทุกแถวในตาราง
        </p>
        <CodeBlock code={dmlCode} lang="sql" />
      </div>

      <div className="section">
        <div className="section-title">Database Relationship</div>
        <p className="section-desc">
          ความสัมพันธ์ระหว่างตารางมี 2 แบบหลัก — One-to-Many ใช้ Foreign Key,
          Many-to-Many ต้องมี Junction Table กลาง
        </p>
        <CodeBlock code={relationshipCode} lang="sql" />
      </div>

      <div className="section">
        <div className="section-title">N+1 Problem</div>
        <p className="section-desc">
          N+1 เกิดเมื่อ query ข้อมูล N รายการ แล้ว loop ดึงข้อมูลอีก N ครั้ง
          รวมเป็น N+1 queries — แก้ด้วย JOIN หรือ <code>include</code> ใน Prisma
        </p>
        <div className="callout callout-warning">
          <span className="callout-icon">⚠️</span>
          <span>
            N+1 เป็นปัญหาที่ถามบ่อยในสัมภาษณ์ fullstack
            และเป็นสาเหตุหลักที่ทำให้ API ช้าโดยไม่รู้ตัว
          </span>
        </div>
        <CodeBlock code={nPlusOneCode} lang="sql" />
      </div>

      <div className="section">
        <div className="section-title">SELECT / WHERE</div>
        <p className="section-desc"><code>SELECT</code> เลือกคอลัมน์, <code>WHERE</code> กรองแถวตามเงื่อนไข — ใช้ <code>LIKE</code> สำหรับ pattern matching และ <code>IS NULL</code> ตรวจค่าว่าง (ใช้ <code>= NULL</code> ไม่ได้)</p>
        <CodeBlock code={selectWhereCode} lang="sql" />
      </div>

      <div className="section">
        <div className="section-title">ORDER BY / LIMIT / DISTINCT</div>
        <p className="section-desc"><code>ORDER BY</code> เรียงผลลัพธ์, <code>LIMIT</code> + <code>OFFSET</code> ใช้ทำ pagination — หน้าที่ n ใช้ <code>OFFSET (n-1) * pageSize</code></p>
        <CodeBlock code={orderLimitCode} lang="sql" />
      </div>

      <div className="section">
        <div className="section-title">JOIN</div>
        <p className="section-desc">JOIN ใช้ดึงข้อมูลจากหลายตารางมารวมกัน โดยระบุเงื่อนไขการเชื่อม (<code>ON</code>) — ประเภทของ JOIN กำหนดว่าจะเอาแถวไหนบ้างเมื่อไม่มี match</p>
        <CodeBlock code={joinConceptCode} lang="sql" />
        <table className="comparison-table">
          <thead>
            <tr><th>JOIN</th><th>คืนอะไร</th></tr>
          </thead>
          <tbody>
            <tr><td>INNER JOIN</td><td>เฉพาะแถวที่ match ทั้งสองฝั่ง</td></tr>
            <tr><td>LEFT JOIN</td><td>ทุกแถวจากซ้าย + match จากขวา (NULL ถ้าไม่มี)</td></tr>
            <tr><td>RIGHT JOIN</td><td>ทุกแถวจากขวา + match จากซ้าย (NULL ถ้าไม่มี)</td></tr>
            <tr><td>FULL OUTER JOIN</td><td>ทุกแถวทั้งสองฝั่ง (NULL ถ้าไม่มี match)</td></tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <div className="section-title">Aggregate Functions</div>
        <p className="section-desc">Aggregate function คำนวณค่าจากหลายแถวให้เป็นค่าเดียว เช่น รวม นับ หาค่าเฉลี่ย — มักใช้คู่กับ <code>GROUP BY</code></p>
        <CodeBlock code={aggregateCode} lang="sql" />
      </div>

      <div className="section">
        <div className="section-title">GROUP BY / HAVING</div>
        <p className="section-desc"><code>GROUP BY</code> จัดกลุ่มแถวที่ค่าคอลัมน์เหมือนกันไว้ด้วยกัน แล้ว aggregate แต่ละกลุ่ม — <code>HAVING</code> ใช้กรองกลุ่มหลัง GROUP BY (ต่างจาก WHERE ที่กรองก่อน)</p>
        <CodeBlock code={groupByCode} lang="sql" />
      </div>

      <div className="section">
        <div className="section-title">Subquery</div>
        <p className="section-desc">Subquery คือ query ซ้อนใน query — ผลของ subquery ถูกใช้เป็น input ให้ outer query ใช้ใน WHERE, FROM, หรือ SELECT ก็ได้</p>
        <CodeBlock code={subqueryCode} lang="sql" />
      </div>

      <div className="section">
        <div className="section-title">CTE — WITH clause</div>
        <p className="section-desc">CTE คือการตั้งชื่อให้ query ชั่วคราว ทำให้อ่านง่ายกว่า subquery ซ้อนหลายชั้น — ผลของ CTE จะถูก reuse ได้ใน query เดียวกัน</p>
        <CodeBlock code={cteCode} lang="sql" />
      </div>

      <div className="section">
        <div className="section-title">Window Functions</div>
        <p className="section-desc">Window Function คำนวณค่าโดยพิจารณา "หน้าต่าง" ของแถวรอบข้าง (<code>OVER</code>) — ต่างจาก GROUP BY ตรงที่ไม่ยุบแถว ทุกแถวยังอยู่ครบ</p>
        <CodeBlock code={windowCode} lang="sql" />
      </div>

      <div className="section">
        <div className="section-title">Index</div>
        <p className="section-desc">Index คือโครงสร้างข้อมูลพิเศษที่สร้างขึ้นมาเพิ่มเติม ช่วยให้ DB กระโดดไปหาแถวที่ต้องการได้โดยตรง ไม่ต้องอ่านทุกแถว — แต่ทำให้ write ช้าลงเล็กน้อยเพราะต้อง update index ด้วย</p>
        <CodeBlock code={indexCode} lang="sql" />
      </div>

      <div className="section">
        <div className="section-title">Transaction & ACID</div>
        <p className="section-desc">Transaction รวม query หลายตัวให้เป็นหน่วยเดียว — ถ้า query ใดล้มเหลว ทุกอย่างถูกยกเลิก (ROLLBACK) ป้องกันข้อมูลค้างกลางๆ ระหว่างการทำงาน</p>
        <CodeBlock code={transactionCode} lang="sql" />
        <table className="comparison-table">
          <thead>
            <tr><th>ACID</th><th>หมายถึง</th></tr>
          </thead>
          <tbody>
            <tr><td>Atomicity</td><td>ทำครบหรือไม่ทำเลย ไม่มีครึ่งๆ กลางๆ</td></tr>
            <tr><td>Consistency</td><td>ข้อมูลถูกต้องตาม constraint ก่อนและหลัง transaction</td></tr>
            <tr><td>Isolation</td><td>หลาย transaction รันพร้อมกันต้องไม่กระทบกัน</td></tr>
            <tr><td>Durability</td><td>COMMIT แล้วข้อมูลถาวร แม้ระบบล่ม</td></tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <div className="section-title">SQL ยอดนิยมในปัจจุบัน</div>
        <p className="section-desc">
          SQL ที่นิยมในตลาดงานมี 4 ตัวหลัก แต่ละตัวเหมาะกับงานต่างกัน
          syntax ส่วนใหญ่เหมือนกัน มีต่างกันแค่บางส่วน
        </p>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Database</th>
              <th>เหมาะกับ</th>
              <th>นิยมใช้กับ</th>
              <th>ข้อเด่น</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>PostgreSQL</strong></td>
              <td>Web app, Data ซับซ้อน</td>
              <td>Node.js, Python, Rails</td>
              <td>Feature ครบ, JSON support, open source</td>
            </tr>
            <tr>
              <td><strong>MySQL</strong></td>
              <td>Web app ทั่วไป</td>
              <td>PHP, WordPress, Laravel</td>
              <td>เร็ว, ใช้งานง่าย, host ราคาถูก</td>
            </tr>
            <tr>
              <td><strong>SQLite</strong></td>
              <td>App เล็ก, Mobile, Testing</td>
              <td>React Native, Electron</td>
              <td>ไม่ต้องติดตั้ง server, เก็บเป็นไฟล์เดียว</td>
            </tr>
            <tr>
              <td><strong>SQL Server</strong></td>
              <td>Enterprise, .NET</td>
              <td>C#, .NET, Azure</td>
              <td>integrate กับ Microsoft stack ได้ดี</td>
            </tr>
          </tbody>
        </table>

        <div className="callout callout-info" style={{ marginTop: '16px' }}>
          <span className="callout-icon">💡</span>
          <span>
            ตลาดงาน Node.js ส่วนใหญ่ใช้ <strong>PostgreSQL</strong> —
            ถ้าเรียนได้ตัวเดียวให้เรียน PostgreSQL ก่อน
          </span>
        </div>

        <div className="sub-section-title">Syntax ที่ต่างกัน</div>
        <p className="section-desc">
          SQL มาตรฐาน (SELECT, JOIN, GROUP BY) เหมือนกันทุก database
          ที่ต่างคือ syntax เฉพาะตัว เช่น auto increment, date function, string concat
        </p>
        <CodeBlock code={dbDiffSyntaxCode} lang="sql" />

        <div className="sub-section-title">เชื่อมกับ Node.js</div>
        <p className="section-desc">
          แต่ละ database ใช้ library ต่างกัน แต่ถ้าใช้ Prisma
          เขียน code เหมือนกันหมด แค่เปลี่ยน provider ใน schema
        </p>
        <CodeBlock code={dbNodejsCode} lang="javascript" />

        <div className="sub-section-title">SQL Injection — ช่องโหว่ที่ต้องระวัง</div>
        <p className="section-desc">
          SQL Injection คือการที่ hacker แทรก SQL เข้าไปใน query ผ่าน input ของ user
          แก้ได้ด้วยการใช้ placeholder (<code>$1</code>, <code>?</code>) แทนการต่อ string ตรงๆ
        </p>
        <div className="callout callout-warning">
          <span className="callout-icon">⚠️</span>
          <span>
            ห้ามนำ input จาก user ต่อลงใน SQL string โดยตรงเด็ดขาด
            ให้ใช้ placeholder หรือ ORM เสมอ
          </span>
        </div>
        <CodeBlock code={sqlInjectionCode} lang="sql" />
      </div>

      <div className="section">
        <div className="section-title">Interview Q&A</div>
        <QASection items={qaItems} />
      </div>
    </div>
  )
}
