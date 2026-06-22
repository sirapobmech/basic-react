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

const prismaSetupCode = `// 1. ติดตั้ง
// npm install prisma @prisma/client
// npx prisma init   ← สร้าง prisma/schema.prisma + .env

// prisma/schema.prisma — กำหนดโครงสร้าง DB
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  password  String
  role      String   @default("user")
  createdAt DateTime @default(now())
  posts     Post[]   // relation — User มีหลาย Post
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}

// 2. สร้าง DB และ generate client
// npx prisma migrate dev --name init   ← สร้างตาราง
// npx prisma generate                  ← generate Prisma Client`

const prismaCrudCode = `// prisma.js — สร้าง instance เดียวใช้ทั้งโปรเจกต์
import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()

// CREATE
const user = await prisma.user.create({
  data: {
    name:     'Alice',
    email:    'alice@example.com',
    password: hashedPassword,
  }
})

// READ — หาหลายคน
const users = await prisma.user.findMany({
  where:   { role: 'admin' },
  orderBy: { createdAt: 'desc' },
  select:  { id: true, name: true, email: true },  // ไม่ดึง password
})

// READ — หาคนเดียว
const user = await prisma.user.findUnique({
  where:   { id: 42 },
  include: { posts: true },   // JOIN กับ posts อัตโนมัติ
})

// UPDATE
const updated = await prisma.user.update({
  where: { id: 42 },
  data:  { name: 'Alice Smith' },
})

// DELETE
await prisma.user.delete({
  where: { id: 42 },
})

// นับ
const total = await prisma.user.count({
  where: { role: 'user' }
})`

const helmetCode = `// Helmet — ตั้งค่า HTTP Security Headers อัตโนมัติ
// npm install helmet

import helmet from 'helmet'

// ✅ บรรทัดเดียว ป้องกันช่องโหว่ได้หลายอย่าง
app.use(helmet())

// Helmet เพิ่ม header เหล่านี้ให้อัตโนมัติ:

// X-Content-Type-Options: nosniff
//   → ป้องกัน browser เดา content-type ผิด (ป้องกัน XSS ผ่าน file upload)

// X-Frame-Options: DENY
//   → ป้องกัน Clickjacking — ไม่ให้คนอื่น embed เว็บเราใน iframe

// Strict-Transport-Security
//   → บังคับใช้ HTTPS เท่านั้น

// Content-Security-Policy
//   → กำหนดว่าโหลด script/style ได้จาก domain ไหนบ้าง

// ✅ ลำดับการใช้ — Helmet ต้องอยู่บนสุด
app.use(helmet())
app.use(cors({ ... }))
app.use(express.json())
// ... routes`

const corsCode = `// CORS — อนุญาตให้ frontend domain อื่นเรียก API ได้
// ถ้าไม่ตั้ง CORS browser จะบล็อก request จาก frontend ทันที

import cors from 'cors'

// ❌ อนุญาตทุก origin — ไม่ปลอดภัยสำหรับ production
app.use(cors())

// ✅ ระบุ origin ที่อนุญาต
app.use(cors({
  origin: [
    'http://localhost:5173',        // dev
    'https://myapp.com',            // production
  ],
  methods:     ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true,                // อนุญาต cookie ข้าม domain
}))

// ทำไม browser ถึงบล็อก?
// Browser มีกฎ Same-Origin Policy — ป้องกัน website อื่น
// เรียก API ของเราโดยไม่ได้รับอนุญาต
// CORS คือการบอก browser ว่า "origin นี้ไว้ใจได้"`

const validationCode = `// Input Validation ด้วย Zod — ตรวจข้อมูลก่อนเข้า DB
import { z } from 'zod'

// กำหนด schema ว่าข้อมูลต้องเป็นแบบไหน
const createUserSchema = z.object({
  name:     z.string().min(2, 'ชื่อต้องมีอย่างน้อย 2 ตัวอักษร'),
  email:    z.string().email('รูปแบบ email ไม่ถูกต้อง'),
  password: z.string().min(8, 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร'),
  age:      z.number().min(18).optional(),
})

// ใช้ใน route
app.post('/users', async (req, res, next) => {
  try {
    // ถ้าข้อมูลผิด parse จะ throw error ทันที
    const data = createUserSchema.parse(req.body)
    // data ผ่านมาแล้วมั่นใจว่า type ถูกต้องทุก field

    const user = await prisma.user.create({ data })
    res.status(201).json(user)
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ errors: err.errors })
      // [{ path: ['email'], message: 'รูปแบบ email ไม่ถูกต้อง' }]
    }
    next(err)
  }
})

// Middleware แยกออกมาใช้ซ้ำ
function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body)
    if (!result.success) {
      return res.status(400).json({ errors: result.error.errors })
    }
    req.body = result.data   // ข้อมูลที่ผ่าน validate แล้ว
    next()
  }
}

app.post('/users', validate(createUserSchema), createUser)
app.patch('/users/:id', validate(updateUserSchema), updateUser)`

const loggingCode = `// Logging — บันทึก request และ error
import morgan from 'morgan'
import winston from 'winston'

// Morgan — log HTTP request อัตโนมัติ
app.use(morgan('dev'))
// output: GET /users 200 15ms - 2kb
// output: POST /login 401 8ms - 45b

// Winston — log ภายใน app (error, info, debug)
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),           // แสดงใน terminal
    new winston.transports.File({               // บันทึกลงไฟล์
      filename: 'logs/error.log',
      level: 'error'
    }),
  ]
})

// ใช้แทน console.log ใน production
logger.info('Server started on port 3000')
logger.error('DB connection failed', { error: err.message })

// Error handler — log error ทุกอันก่อนส่ง response
app.use((err, req, res, next) => {
  logger.error(err.message, {
    method: req.method,
    url:    req.url,
    stack:  err.stack,
  })
  res.status(500).json({ error: 'Internal Server Error' })
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

const cachingCode = `// Caching ด้วย Redis — อย่าดึงข้อมูลเดิมซ้ำทุก request
import Redis from 'ioredis'
const redis = new Redis(process.env.REDIS_URL)

// ❌ ไม่มี cache — ทุก request ไป query DB
app.get('/products', async (req, res) => {
  const products = await prisma.product.findMany()  // ~200ms ทุกครั้ง
  res.json(products)
})

// ✅ มี cache — ไปถึง DB เฉพาะครั้งแรก
app.get('/products', async (req, res, next) => {
  try {
    // 1. เช็ค cache ก่อน
    const cached = await redis.get('products')
    if (cached) return res.json(JSON.parse(cached))   // ~1ms

    // 2. ถ้าไม่มีใน cache ถึงจะไป DB
    const products = await prisma.product.findMany()  // ~200ms

    // 3. เก็บใน cache ไว้ 60 วินาที
    await redis.setex('products', 60, JSON.stringify(products))

    res.json(products)
  } catch (err) {
    next(err)
  }
})

// ถ้าแก้ข้อมูล ต้องล้าง cache ด้วย
app.post('/products', async (req, res, next) => {
  try {
    const product = await prisma.product.create({ data: req.body })
    await redis.del('products')   // ล้าง cache เพื่อให้ครั้งต่อไปดึงใหม่
    res.status(201).json(product)
  } catch (err) {
    next(err)
  }
})`

const rateLimitCode = `// Rate Limiting — จำกัดจำนวน request ต่อ IP
import rateLimit from 'express-rate-limit'

// กฎทั่วไป — ทุก route
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,   // ช่วงเวลา 15 นาที
  max:      100,               // รับได้สูงสุด 100 req ต่อ IP
  message:  { error: 'Too many requests, please try again later' }
})

// กฎเข้มงวดสำหรับ login — ป้องกัน brute force
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max:      5,                 // login ผิดได้แค่ 5 ครั้งใน 15 นาที
  message:  { error: 'Too many login attempts' }
})

// ใช้งาน
app.use('/api', generalLimiter)          // ทุก route ใน /api
app.post('/login', loginLimiter, login)  // เข้มงวดเฉพาะ login

// ถ้าเกิน limit — ได้รับ 429 Too Many Requests กลับมา`

const poolSetupCode = `// db.js — ตั้งค่า Pool ครั้งเดียวตอนเริ่ม server
import pg from 'pg'

const db = new pg.Pool({
  connectionString: process.env.DB_URL,
  max: 10,              // สูงสุด 10 connection พร้อมกัน
  idleTimeoutMillis: 30000,
})

export default db

// ทุกไฟล์ที่ต้องการ query แค่ import db มาใช้
// ไม่ต้องเปิด/ปิด connection เอง Pool จัดการให้`

const paginationRawCode = `// controllers/productController.js — raw SQL (pg)
import db from '../db.js'

export async function getProducts(req, res, next) {
  try {
    const page   = parseInt(req.query.page)  || 1
    const limit  = parseInt(req.query.limit) || 10
    const offset = (page - 1) * limit

    // ดึงข้อมูลและนับพร้อมกัน
    const [products, countResult] = await Promise.all([
      db.query(
        \`SELECT * FROM products
         ORDER BY created_at DESC
         LIMIT $1 OFFSET $2\`,
        [limit, offset]
      ),
      db.query('SELECT COUNT(*) FROM products'),
    ])

    const total = parseInt(countResult.rows[0].count)

    res.json({
      data:       products.rows,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    })
  } catch (err) {
    next(err)
  }
}`

const paginationPrismaCode = `// controllers/productController.js — Prisma
import { prisma } from '../prisma.js'

export async function getProducts(req, res, next) {
  try {
    const page  = parseInt(req.query.page)  || 1
    const limit = parseInt(req.query.limit) || 10
    const skip  = (page - 1) * limit

    // ดึงข้อมูลและนับพร้อมกัน
    const [products, total] = await Promise.all([
      prisma.product.findMany({
        skip,
        take:    limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.product.count(),
    ])

    res.json({
      data: products,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    })
  } catch (err) {
    next(err)
  }
}

// prisma.js — สร้างครั้งเดียว (Prisma มี pool built-in)
import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()`

const parallelQueryCode = `// ❌ รอทีละอัน — 330ms
const user    = await db.query('SELECT * FROM users WHERE id=$1', [id])
const orders  = await db.query('SELECT * FROM orders WHERE user_id=$1', [id])
const reviews = await db.query('SELECT * FROM reviews WHERE user_id=$1', [id])

// ✅ ทำพร้อมกัน — 150ms (แค่อันที่นานสุด)
const [userRes, ordersRes, reviewsRes] = await Promise.all([
  db.query('SELECT * FROM users WHERE id=$1', [id]),
  db.query('SELECT * FROM orders WHERE user_id=$1', [id]),
  db.query('SELECT * FROM reviews WHERE user_id=$1', [id]),
])

const user    = userRes.rows[0]
const orders  = ordersRes.rows
const reviews = reviewsRes.rows

// Prisma version
const [user, orders, reviews] = await Promise.all([
  prisma.user.findUnique({ where: { id } }),
  prisma.order.findMany({ where: { userId: id } }),
  prisma.review.findMany({ where: { userId: id } }),
])`

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
        <div className="section-title">Prisma ORM</div>
        <p className="section-desc">
          Prisma คือ ORM ยอดนิยมของ Node.js — แทน raw SQL ด้วย TypeScript-friendly API
          มี schema ที่อ่านง่าย, auto-generate migration, และ type-safe query
        </p>
        <div className="sub-section-title">Setup & Schema</div>
        <CodeBlock code={prismaSetupCode} lang="javascript" />
        <div className="sub-section-title">CRUD Operations</div>
        <CodeBlock code={prismaCrudCode} lang="javascript" />
      </div>

      <div className="section">
        <div className="section-title">Helmet — Security Headers</div>
        <p className="section-desc">
          Helmet ตั้งค่า HTTP header ที่เกี่ยวกับความปลอดภัยให้อัตโนมัติ
          ป้องกัน XSS, Clickjacking, และช่องโหว่พื้นฐานด้วยบรรทัดเดียว
        </p>
        <CodeBlock code={helmetCode} lang="javascript" />
      </div>

      <div className="section">
        <div className="section-title">CORS</div>
        <p className="section-desc">
          CORS คือการบอก browser ว่า frontend domain ไหนเรียก API นี้ได้บ้าง
          ถ้าไม่ตั้งค่า browser จะบล็อก request จาก frontend ทันที แม้ API ทำงานได้ปกติ
        </p>
        <CodeBlock code={corsCode} lang="javascript" />
      </div>

      <div className="section">
        <div className="section-title">Input Validation — Zod</div>
        <p className="section-desc">
          ตรวจข้อมูลที่ user ส่งมาก่อนนำเข้า DB เสมอ — ป้องกันข้อมูลผิด type, ค่าว่าง,
          หรือ format ผิด Zod เป็น library ยอดนิยมที่ตรวจ type และ validate พร้อมกันในขั้นตอนเดียว
        </p>
        <CodeBlock code={validationCode} lang="javascript" />
      </div>

      <div className="section">
        <div className="section-title">Logging — Morgan & Winston</div>
        <p className="section-desc">
          Morgan บันทึก HTTP request ทุกอันอัตโนมัติ — Winston บันทึก event ภายใน app
          ใช้ทั้งคู่เพื่อ debug และ monitor ปัญหาใน production โดยไม่ต้องเดา
        </p>
        <CodeBlock code={loggingCode} lang="javascript" />
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
        <div className="section-title">Performance — ทำให้ Backend เร็วขึ้น</div>
        <p className="section-desc">
          ปัญหาหลักของ backend ช้าคือ query DB ซ้ำ, รองาน I/O ทีละอัน,
          และส่งข้อมูลเยอะเกินจำเป็น — แก้ได้ด้วย Connection Pool, Pagination, และ Promise.all
        </p>

        <div className="sub-section-title">Caching — อย่าดึงข้อมูลเดิมซ้ำทุก request</div>
        <p className="section-desc">
          เก็บผลลัพธ์ที่ดึงมาแล้วไว้ใน Redis — request ถัดไปอ่านจาก cache แทน DB
          เร็วกว่าเกือบ 200 เท่า (~1ms vs ~200ms) ถ้าแก้ข้อมูลต้องล้าง cache ด้วยเสมอ
        </p>
        <CodeBlock code={cachingCode} lang="javascript" />

        <div className="sub-section-title">Rate Limiting — จำกัด request ต่อ IP</div>
        <p className="section-desc">
          ป้องกัน server ล่มเมื่อมีคนยิง request เยอะๆ และป้องกัน brute force login
          ใช้ express-rate-limit ตั้งค่าได้แยกตาม route
        </p>
        <CodeBlock code={rateLimitCode} lang="javascript" />

        <div className="sub-section-title">Connection Pool — ตั้งค่าครั้งเดียว ใช้ซ้ำได้เลย</div>
        <p className="section-desc">
          Pool คือกลุ่ม connection ที่เปิดรอไว้ล่วงหน้า ทุก query หยิบมาใช้แล้วคืนกลับ
          ไม่ต้องเปิด/ปิดทุก request — Prisma มี pool built-in อยู่แล้ว ไม่ต้องตั้งค่าเพิ่ม
        </p>
        <CodeBlock code={poolSetupCode} lang="javascript" />

        <div className="sub-section-title">Pagination — ส่งข้อมูลทีละหน้า</div>
        <p className="section-desc">
          ไม่ควรดึงข้อมูลทั้งหมดในครั้งเดียว ใช้ LIMIT/OFFSET (raw SQL) หรือ skip/take (Prisma)
          เพื่อส่งแค่ข้อมูลที่ user ต้องการในหน้านั้น
        </p>
        <div className="sub-section-title" style={{ fontSize: '12px' }}>Raw SQL (pg Pool)</div>
        <CodeBlock code={paginationRawCode} lang="javascript" />
        <div className="sub-section-title" style={{ fontSize: '12px' }}>Prisma</div>
        <CodeBlock code={paginationPrismaCode} lang="javascript" />

        <div className="sub-section-title">Promise.all — ทำงานพร้อมกัน</div>
        <p className="section-desc">
          ถ้า query หลายอันไม่ได้ depend กัน ให้รันพร้อมกันด้วย Promise.all
          เวลารวมเท่ากับอันที่นานที่สุด ไม่ใช่ผลรวมทั้งหมด
        </p>
        <CodeBlock code={parallelQueryCode} lang="javascript" />
      </div>

      <div className="section">
        <div className="section-title">Interview Q&A</div>
        <QASection items={qaItems} />
      </div>
    </div>
  )
}
