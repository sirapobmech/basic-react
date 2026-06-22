import CodeBlock from '../components/CodeBlock'
import { QASection } from '../components/QA'

const whatIsNodeCode = `// Node.js คือ JavaScript runtime บน server
// ก่อนหน้านี้ JS รันได้แค่ใน browser
// Node.js ทำให้ JS รันบน server ได้

// ตัวอย่างง่ายสุด — server ที่ตอบ Hello World
const http = require('http')

const server = http.createServer((req, res) => {
  res.write('Hello World')
  res.end()
})

server.listen(3000)
// เปิด browser ไปที่ localhost:3000 → เห็น Hello World`

const blockingCode = `// ❌ Blocking — PHP / Python แบบดั้งเดิม
// แต่ละ request ต้องรอคิว

// request 1 เข้ามา → อ่านไฟล์ 100ms → ตอบกลับ
// request 2 ต้องรอ request 1 เสร็จก่อน
// request 3 ต้องรอ request 1, 2 เสร็จก่อน

// ถ้ามี 100 request พร้อมกัน → คนสุดท้ายรอ 10 วินาที

// Node.js แบบ Blocking (readFileSync) — มีปัญหาเหมือนกัน
const data = fs.readFileSync('bigfile.txt')  // หยุดรอ 500ms
console.log(data)
// ระหว่าง 500ms นั้น request อื่นเข้ามาก็ต้องค้างรอหมด`

const nonBlockingCode = `// ✅ Non-blocking — Node.js
// ส่งงานไปทำข้างหลัง แล้วทำอย่างอื่นต่อได้เลย

console.log('1. รับ request มา')

fs.readFile('bigfile.txt', (err, data) => {
  // callback นี้จะรันเมื่ออ่านเสร็จ (500ms ต่อมา)
  console.log('3. อ่านไฟล์เสร็จแล้ว')
})

// Node.js ไม่รอ readFile — วิ่งต่อได้เลย
console.log('2. รับ request อื่นระหว่างรอได้เลย')

// Output:
// 1. รับ request มา
// 2. รับ request อื่นระหว่างรอได้เลย
// 3. อ่านไฟล์เสร็จแล้ว  ← มาทีหลัง`

const asyncAwaitCode = `// async/await — เขียนง่ายกว่า callback แต่ยัง non-blocking

// แบบ callback — อ่านยากเมื่อซ้อนหลายชั้น (Callback Hell)
fs.readFile('a.txt', (err, a) => {
  fs.readFile('b.txt', (err, b) => {
    fs.readFile('c.txt', (err, c) => {
      console.log(a, b, c)  // ซ้อน 3 ชั้น อ่านยาก
    })
  })
})

// async/await — อ่านง่ายเหมือน synchronous แต่ยัง non-blocking
async function readFiles() {
  const a = await fs.promises.readFile('a.txt')
  const b = await fs.promises.readFile('b.txt')
  const c = await fs.promises.readFile('c.txt')
  console.log(a, b, c)
}

// อ่านพร้อมกันทั้งหมด (เร็วกว่า)
async function readAllAtOnce() {
  const [a, b, c] = await Promise.all([
    fs.promises.readFile('a.txt'),
    fs.promises.readFile('b.txt'),
    fs.promises.readFile('c.txt'),
  ])
  console.log(a, b, c)
}`

const eventLoopCode = `// Event Loop ทำงานยังไง

// Node.js มี thread เดียว แต่มี "คิว" ไว้เก็บงานที่รอ

// สมมติมี 3 request เข้ามาพร้อมกัน

// request A: ต้องอ่านไฟล์ใช้เวลา 300ms
// request B: ต้องอ่านไฟล์ใช้เวลา 100ms
// request C: คำนวณเลข ไม่ต้อง I/O

// Event Loop ทำงาน:
// t=0ms   รับ A → ส่งให้ OS อ่านไฟล์ → ไปรับ B
// t=0ms   รับ B → ส่งให้ OS อ่านไฟล์ → ไปรับ C
// t=0ms   รับ C → คำนวณเสร็จ → ตอบกลับ C ทันที
// t=100ms OS อ่านไฟล์ B เสร็จ → ตอบกลับ B
// t=300ms OS อ่านไฟล์ A เสร็จ → ตอบกลับ A

// รวมเวลา: 300ms (ไม่ใช่ 300+100 = 400ms)
// เพราะ A และ B อ่านพร้อมกัน ไม่ได้รอคิว

// เปรียบเหมือนพนักงานเสิร์ฟ 1 คน
// รับออเดอร์โต๊ะ 1 → ส่งครัว → รับออเดอร์โต๊ะ 2 → ส่งครัว
// ไม่ได้ยืนรอครัวทำอาหารโต๊ะ 1 เสร็จก่อน`

const expressBasicCode = `// Express — framework ยอดนิยมสำหรับทำ API

import express from 'express'
const app = express()

// Middleware — แปลง body จาก JSON string เป็น JS object
app.use(express.json())

// Route พื้นฐาน
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

// Route Parameter — รับค่าจาก URL
app.get('/users/:id', (req, res) => {
  const { id } = req.params    // /users/42 → id = '42'
  res.json({ userId: id })
})

// Query String — รับค่าจาก ?key=value
app.get('/users', (req, res) => {
  const { page = 1, limit = 10 } = req.query  // /users?page=2&limit=5
  res.json({ page, limit })
})

// POST — รับข้อมูลจาก body
app.post('/users', (req, res) => {
  const { name, email } = req.body
  res.status(201).json({ id: 1, name, email })
})

app.listen(3000, () => console.log('Server running on port 3000'))`

const restApiCode = `// REST API — มาตรฐานการออกแบบ API

// ใช้ HTTP Method บอกว่าจะทำอะไร
// GET    → ดึงข้อมูล  (อ่าน)
// POST   → สร้างใหม่  (เพิ่ม)
// PUT    → แก้ทั้งหมด (แทนที่)
// PATCH  → แก้บางส่วน (อัปเดต)
// DELETE → ลบ

// ตัวอย่าง User API
GET    /users          → ดึง user ทั้งหมด
GET    /users/:id      → ดึง user คนเดียว
POST   /users          → สร้าง user ใหม่
PUT    /users/:id      → แก้ไข user ทั้งหมด
PATCH  /users/:id      → แก้ไข user บางฟิลด์
DELETE /users/:id      → ลบ user

// HTTP Status Code ที่ใช้บ่อย
200 OK           → สำเร็จ
201 Created      → สร้างสำเร็จ
400 Bad Request  → ข้อมูลที่ส่งมาผิด
401 Unauthorized → ยังไม่ได้ login
403 Forbidden    → ไม่มีสิทธิ์
404 Not Found    → ไม่เจอข้อมูล
500 Server Error → server พัง`

const middlewareCode = `// Middleware — function ที่ทำงานระหว่าง request → response

// Middleware คือ function ที่รับ (req, res, next)
// next() = ส่งต่อให้ middleware ถัดไป

// ตัวอย่าง middleware log
function logger(req, res, next) {
  console.log(\`\${req.method} \${req.url}\`)
  next()   // ถ้าไม่เรียก next() request จะค้างตรงนี้
}

// Middleware ตรวจ token
function authMiddleware(req, res, next) {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({ error: 'No token' })
    // ไม่เรียก next() → หยุดตรงนี้เลย
  }

  req.user = { id: 1, name: 'Alice' }  // แนบข้อมูลไปกับ request
  next()
}

// ใช้ middleware
app.use(logger)                         // ทุก route ใช้

app.get('/profile', authMiddleware, (req, res) => {
  res.json(req.user)                    // เฉพาะ route นี้
})`

const routerCode = `// Router — แยก route ออกเป็นไฟล์ย่อย

// routes/users.js
import { Router } from 'express'
const router = Router()

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/', createUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router

// app.js — นำ router มาใช้
import userRouter from './routes/users.js'
import orderRouter from './routes/orders.js'

app.use('/users', userRouter)    // /users, /users/:id
app.use('/orders', orderRouter)  // /orders, /orders/:id`

const errorHandlingCode = `// Error Handling

// ใช้ try/catch กับ async route
app.get('/users/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.json(user)
  } catch (err) {
    next(err)   // ส่ง error ไปให้ error handler
  }
})

// Error Handler Middleware — ต้องมี 4 parameter (err, req, res, next)
// Express รู้ว่านี่คือ error handler จาก parameter 4 ตัว
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  })
})`

const envCode = `// Environment Variables — ค่าที่ต่างกันในแต่ละ env

// .env (ไม่ commit ขึ้น git!)
PORT=3000
DB_URL=postgres://localhost:5432/myapp
JWT_SECRET=supersecretkey
NODE_ENV=development

// ใช้ใน code
import 'dotenv/config'   // โหลด .env เข้า process.env

const port = process.env.PORT || 3000
const dbUrl = process.env.DB_URL
const secret = process.env.JWT_SECRET

// ทำไมต้องใช้ env var แทนใส่ตรงๆ ใน code
// ✅ dev ต่อ DB ทดสอบ, prod ต่อ DB จริง — เปลี่ยนแค่ .env
// ✅ password ไม่ขึ้น GitHub
// ✅ deploy บน server ต่างๆ ใช้ค่าต่างกันได้`

const jwtCode = `// JWT Authentication — ระบบ login ที่นิยมที่สุด

import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

// Login — ตรวจ password แล้วออก token
app.post('/login', async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) return res.status(401).json({ error: 'Invalid credentials' })

  // bcrypt เปรียบ password กับที่ hash เก็บไว้ใน DB
  const valid = await bcrypt.compare(password, user.password)
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' })

  // สร้าง token อายุ 7 วัน
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  )

  res.json({ token })
})

// Middleware ตรวจ token ทุก request
function authenticate(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token) return res.status(401).json({ error: 'No token' })

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = payload   // { userId, email }
    next()
  } catch {
    res.status(401).json({ error: 'Invalid token' })
  }
}

// Route ที่ต้อง login ก่อน
app.get('/me', authenticate, (req, res) => {
  res.json(req.user)
})`

const authDiffCode = `// Authentication — ตรวจว่าคุณเป็นใคร
// Authorization  — ตรวจว่าคุณทำอะไรได้บ้าง

// 1. Authentication Middleware — ตรวจ token ว่าถูกต้องไหม
function authenticate(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token) return res.status(401).json({ error: 'กรุณา login ก่อน' })

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET)
    // req.user = { id: 42, name: 'สมชาย', role: 'editor' }
    next()
  } catch {
    res.status(401).json({ error: 'Token ไม่ถูกต้อง' })
  }
}

// 2. Authorization Middleware — ตรวจว่า role มีสิทธิ์ไหม
function authorize(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'ไม่มีสิทธิ์ทำสิ่งนี้' })
    }
    next()
  }
}

// ใช้งาน — ลำดับสำคัญ: authenticate ก่อนเสมอ แล้วค่อย authorize
app.delete('/users/:id',
  authenticate,              // 1. รู้ก่อนว่าใคร
  authorize('admin'),        // 2. เช็คว่า admin ไหม
  deleteUser                 // 3. ถึงจะทำได้
)

app.patch('/posts/:id',
  authenticate,
  authorize('admin', 'editor'),   // admin หรือ editor ทำได้
  updatePost
)`

const authErrorCode = `// Error ที่ได้ต่างกัน

// 401 Unauthorized — ไม่รู้ว่าเป็นใคร (Authentication ล้มเหลว)
// เกิดเมื่อ: ไม่มี token, token หมดอายุ, token ผิด
res.status(401).json({ error: 'กรุณา login ก่อน' })

// 403 Forbidden — รู้ว่าเป็นใคร แต่ทำไม่ได้ (Authorization ล้มเหลว)
// เกิดเมื่อ: login แล้ว แต่ไม่มีสิทธิ์
res.status(403).json({ error: 'ไม่มีสิทธิ์ทำสิ่งนี้' })

// ตัวอย่าง:
// user ทั่วไป พยายามลบ post คนอื่น
// → authenticate ผ่าน (รู้ว่าเป็นใคร)
// → authorize ไม่ผ่าน (role ไม่ใช่ admin)
// → 403 Forbidden`

const qaItems = [
  {
    q: 'Node.js คืออะไร ต่างจาก Browser JavaScript ยังไง?',
    a: `Node.js คือ JavaScript runtime บน server — ทำให้ JS รันนอก browser ได้<br><br>
    <strong>Browser JS:</strong> เข้าถึง DOM, window, localStorage ได้ แต่เข้า filesystem ไม่ได้<br>
    <strong>Node.js:</strong> เข้าถึง filesystem, network, OS ได้ แต่ไม่มี DOM<br><br>
    ทั้งคู่ใช้ภาษา JavaScript เหมือนกัน แค่ environment ต่างกัน`
  },
  {
    q: 'Event Loop คืออะไร ทำไม Node.js ถึงรับ request หลายอันได้ทั้งที่ single thread?',
    a: `Node.js รัน thread เดียว แต่งาน I/O (อ่านไฟล์, query DB, เรียก API) จะถูกส่งไปทำข้างหลัง<br><br>
    ระหว่างรอ Node.js ไม่ได้ค้างอยู่ — Event Loop วนรับ request ใหม่ต่อไปเรื่อยๆ<br>
    พอ I/O เสร็จ Event Loop เอา callback มารันต่อ<br><br>
    เหมือนพนักงานคนเดียวรับ order หลายโต๊ะ ส่ง order ให้ครัวแล้วไปรับโต๊ะถัดไปได้เลย ไม่ต้องยืนรอครัว`
  },
  {
    q: 'Middleware คืออะไร?',
    a: `Middleware คือ function ที่นั่งอยู่ระหว่าง request กับ response<br><br>
    ทุก request ที่เข้ามาจะผ่าน middleware ก่อนถึง route handler<br><br>
    ใช้ทำ: log, ตรวจ token, validate input, จัดการ error<br><br>
    สำคัญ: ต้องเรียก <code>next()</code> เพื่อส่งต่อ ถ้าไม่เรียก request จะค้างตรงนั้น`
  },
  {
    q: 'JWT คืออะไร ทำงานยังไง?',
    a: `JWT (JSON Web Token) คือ token ที่ใช้ยืนยันตัวตน<br><br>
    <strong>flow:</strong><br>
    1. User login → server ตรวจ password → ออก JWT token ให้<br>
    2. User เก็บ token ไว้ (localStorage หรือ cookie)<br>
    3. ทุก request ส่ง token มาใน header<br>
    4. Server ตรวจ token → รู้ว่าใครส่งมา<br><br>
    Server ไม่ต้องเก็บ session — token มีข้อมูลครบในตัวเอง`
  },
  {
    q: 'ทำไมต้อง hash password ก่อนเก็บลง DB?',
    a: `ถ้าเก็บ password ตรงๆ และ DB โดน hack → password ทุกคนหลุดทันที<br><br>
    bcrypt hash password เป็น string ที่ย้อนกลับไม่ได้<br>
    ตอนล็อกอิน bcrypt เปรียบ password ที่พิมพ์กับ hash ที่เก็บไว้<br><br>
    แม้ DB โดน hack — ได้แค่ hash ไม่สามารถรู้ password จริงได้`
  },
  {
    q: 'Authentication กับ Authorization ต่างกันอย่างไร?',
    a: `<strong>Authentication</strong> — ตรวจว่าคุณเป็นใคร เช่น login, ตรวจ JWT token<br>
    <strong>Authorization</strong> — ตรวจว่าคุณมีสิทธิ์ทำสิ่งนั้นไหม เช่น role admin เท่านั้นลบได้<br><br>
    ต้องผ่าน Authentication ก่อนเสมอ เพราะถ้าไม่รู้ว่าเป็นใคร จะตรวจสิทธิ์ไม่ได้<br><br>
    <strong>Error ที่ได้:</strong><br>
    401 Unauthorized → Authentication ล้มเหลว (ยังไม่ได้ login)<br>
    403 Forbidden → Authorization ล้มเหลว (login แล้วแต่ไม่มีสิทธิ์)`
  },
  {
    q: 'PUT กับ PATCH ต่างกันยังไง?',
    a: `<strong>PUT</strong> — แทนที่ทั้ง resource ต้องส่งข้อมูลทุก field มา<br>
    ถ้าไม่ส่ง field ไหน field นั้นจะถูกลบ/reset<br><br>
    <strong>PATCH</strong> — อัปเดตแค่บางส่วน ส่งมาแค่ field ที่อยากเปลี่ยน<br>
    field ที่ไม่ส่งมาจะยังคงค่าเดิม<br><br>
    ในทางปฏิบัติส่วนใหญ่ใช้ PATCH เพราะ flexible กว่า`
  }
]

export default function NodeJSPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-badge">Backend</div>
        <h1 className="page-title">Node.js Backend</h1>
        <p className="page-desc">
          ทบทวน Node.js และ Express สำหรับทำ REST API
          พร้อม pattern ที่ใช้จริงในงาน
        </p>
      </div>

      <div className="section">
        <div className="section-title">Node.js คืออะไร</div>
        <p className="section-desc">
          Node.js คือ JavaScript runtime ที่ทำให้ JS รันบน server ได้
          ก่อนหน้านี้ JS รันได้แค่ใน browser เท่านั้น
        </p>
        <CodeBlock code={whatIsNodeCode} lang="javascript" />
      </div>

      <div className="section">
        <div className="section-title">Event Loop — Non-blocking I/O</div>
        <p className="section-desc">
          Node.js รัน thread เดียว แต่รับ request พร้อมกันได้เยอะ
          เพราะงาน I/O (อ่านไฟล์, query DB, เรียก API) จะถูกส่งให้ OS ทำแทน
          Node.js ไม่รอ — วิ่งรับ request ถัดไปได้เลย
        </p>

        <div className="sub-section-title">ปัญหาของ Blocking</div>
        <CodeBlock code={blockingCode} lang="javascript" />

        <div className="sub-section-title">Non-blocking แก้ยังไง</div>
        <CodeBlock code={nonBlockingCode} lang="javascript" />

        <div className="callout callout-tip">
          <span className="callout-icon">💡</span>
          <span>
            สังเกตว่า output ไม่ได้เรียงตามลำดับที่เขียน —
            เพราะ Node.js ไม่รอ <code>readFile</code> แต่วิ่งต่อไปก่อน
            แล้วค่อยกลับมารัน callback ทีหลังเมื่อเสร็จ
          </span>
        </div>

        <div className="sub-section-title">async/await — เขียนง่ายขึ้น</div>
        <CodeBlock code={asyncAwaitCode} lang="javascript" />

        <div className="sub-section-title">Event Loop ภาพรวม</div>
        <CodeBlock code={eventLoopCode} lang="javascript" />
      </div>

      <div className="section">
        <div className="section-title">Express — ทำ API</div>
        <p className="section-desc">
          Express คือ framework ยอดนิยมของ Node.js สำหรับทำ web server และ API
          ให้โครงสร้าง routing และ middleware ที่ใช้งานง่าย
        </p>
        <CodeBlock code={expressBasicCode} lang="javascript" />
      </div>

      <div className="section">
        <div className="section-title">REST API Design</div>
        <p className="section-desc">
          REST คือมาตรฐานการออกแบบ API โดยใช้ HTTP Method บอกว่าจะทำอะไร
          และ URL บอกว่าทำกับอะไร — ทำให้ API อ่านง่ายและคาดเดาได้
        </p>
        <CodeBlock code={restApiCode} lang="bash" />
      </div>

      <div className="section">
        <div className="section-title">Middleware</div>
        <p className="section-desc">
          Middleware คือ function ที่ทำงานระหว่าง request เข้ามาและ response ออกไป
          ทุก request ผ่าน middleware ตามลำดับก่อนถึง route handler
        </p>
        <CodeBlock code={middlewareCode} lang="javascript" />
      </div>

      <div className="section">
        <div className="section-title">Router — แยกไฟล์</div>
        <p className="section-desc">
          เมื่อโปรเจกต์ใหญ่ขึ้น ควรแยก route ออกเป็นไฟล์ย่อยตาม resource
          ทำให้ code อ่านง่ายและจัดการได้ง่ายขึ้น
        </p>
        <CodeBlock code={routerCode} lang="javascript" />
      </div>

      <div className="section">
        <div className="section-title">Error Handling</div>
        <p className="section-desc">
          ทุก async route ต้องมี try/catch และส่ง error ไปให้ error handler middleware
          Express มี error handler พิเศษที่รับ 4 parameter (err, req, res, next)
        </p>
        <CodeBlock code={errorHandlingCode} lang="javascript" />
      </div>

      <div className="section">
        <div className="section-title">Environment Variables</div>
        <p className="section-desc">
          ค่าที่ต่างกันในแต่ละ environment เช่น DB URL, API key, password
          ต้องเก็บใน .env ไม่ใส่ตรงๆ ใน code และไม่ commit ขึ้น Git
        </p>
        <CodeBlock code={envCode} lang="javascript" />
      </div>

      <div className="section">
        <div className="section-title">JWT Authentication</div>
        <p className="section-desc">
          JWT คือ token ที่ใช้ยืนยันตัวตน — server ออก token ให้หลัง login
          client ส่ง token มาทุก request แทนการ login ซ้ำ
        </p>
        <CodeBlock code={jwtCode} lang="javascript" />
      </div>

      <div className="section">
        <div className="section-title">Authentication vs Authorization</div>
        <p className="section-desc">
          Authentication คือ <strong>ตรวจว่าคุณเป็นใคร</strong> (login, ตรวจ token) —
          Authorization คือ <strong>ตรวจว่าคุณทำอะไรได้บ้าง</strong> (role, permission)
          ต้องผ่าน Authentication ก่อนเสมอ ถึงจะทำ Authorization ได้
        </p>

        <div className="callout callout-info">
          <span className="callout-icon">💡</span>
          <span>
            <strong>จำง่าย:</strong> Authentication = ยืนยันตัวตน (เป็นใคร) &nbsp;·&nbsp;
            Authorization = ยืนยันสิทธิ์ (ทำได้ไหม)
          </span>
        </div>

        <div className="sub-section-title">Middleware แยกหน้าที่ชัดเจน</div>
        <CodeBlock code={authDiffCode} lang="javascript" />

        <div className="sub-section-title">Error ที่ได้กลับมาต่างกัน</div>
        <CodeBlock code={authErrorCode} lang="javascript" />
      </div>

      <div className="section">
        <div className="section-title">Interview Q&A</div>
        <QASection items={qaItems} />
      </div>
    </div>
  )
}
