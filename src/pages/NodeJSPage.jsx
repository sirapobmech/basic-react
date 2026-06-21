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

const eventLoopCode = `// Event Loop — หัวใจของ Node.js

// Node.js รัน single thread (thread เดียว)
// แต่รับ request หลายอันพร้อมกันได้ด้วย Event Loop

// ❌ Blocking — thread ค้างรอ ทำอย่างอื่นไม่ได้
const data = fs.readFileSync('file.txt')  // หยุดรอจนอ่านเสร็จ
console.log(data)
// ระหว่างรอ request อื่นเข้ามาก็ต้องรอด้วย

// ✅ Non-blocking — ส่งงานไปทำแล้วทำอย่างอื่นต่อ
fs.readFile('file.txt', (err, data) => {
  console.log(data)  // callback รันเมื่ออ่านเสร็จ
})
// ระหว่างรอ Node.js รับ request อื่นได้เลย

// ✅ async/await — เขียนง่ายกว่า callback
async function readFile() {
  const data = await fs.promises.readFile('file.txt')
  console.log(data)
}`

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
          Node.js รัน thread เดียว แต่รับ request ได้เยอะเพราะงาน I/O
          (อ่านไฟล์, query DB) ถูกส่งไปทำข้างหลัง ไม่บล็อก thread หลัก
        </p>
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
        <div className="section-title">Interview Q&A</div>
        <QASection items={qaItems} />
      </div>
    </div>
  )
}
