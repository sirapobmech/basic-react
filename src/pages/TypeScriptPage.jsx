import CodeBlock from '../components/CodeBlock'
import { QASection } from '../components/QA'

const basicTypesCode = `// Basic Types — ประเภทพื้นฐาน

// Primitive Types
let name: string = 'Sirapob'
let age: number = 25
let isAdmin: boolean = true

// Array
let tags: string[] = ['React', 'TypeScript']
let scores: Array<number> = [90, 85, 100]

// Tuple — array ที่กำหนดจำนวนและชนิดตายตัว
let pair: [string, number] = ['age', 25]

// Any — ปิด type checking (หลีกเลี่ยงถ้าทำได้)
let anything: any = 'hello'
anything = 42       // ไม่ error แต่เสียประโยชน์ TS

// Unknown — ปลอดภัยกว่า any ต้อง check type ก่อนใช้
let value: unknown = 'hello'
if (typeof value === 'string') {
  console.log(value.toUpperCase()) // ✅ ต้อง check ก่อน
}

// Never — function ที่ไม่มีวัน return
function throwError(msg: string): never {
  throw new Error(msg)
}

// Void — function ที่ไม่ return ค่า
function log(msg: string): void {
  console.log(msg)
}`

const typeVsInterfaceCode = `// Type vs Interface — ต่างกันยังไง?

// ==================== Interface ====================
interface User {
  id: number
  name: string
  email: string
  age?: number     // optional property
}

// extends — รับ property ทั้งหมดจาก User มา
interface Admin extends User {
  role: 'admin' | 'superadmin'
}
// Admin มี: id, name, email, age?, role

// ==================== Type ====================
// flexible กว่า — ใช้ได้กับทุกอย่าง
type ID = string | number       // Union (interface ทำไม่ได้)
type Status = 'on' | 'off'     // String Literal Union

// & (Intersection) — รับ property ทั้งหมดจากทุก type
type AdminUser = User & {
  role: 'admin' | 'superadmin'
}
// AdminUser มี: id, name, email, age?, role

// ==================== Declaration Merging ====================
// Interface พิเศษตรงที่ประกาศชื่อเดิมซ้ำได้ — TS จะ merge ให้อัตโนมัติ

interface Car {
  brand: string
}

interface Car {           // ประกาศซ้ำ — ไม่ error!
  color: string
}

// ผลลัพธ์: Car ได้ทั้ง brand และ color
const myCar: Car = {
  brand: 'Toyota',
  color: 'red'            // ✅ ต้องใส่ทั้งคู่
}

// ใช้จริงเมื่อไหร่? — extend library type ที่เราแก้ไม่ได้
// เช่น เพิ่ม property ให้ Window ของ browser
interface Window {
  analytics: { track: (event: string) => void }
}
// ตอนนี้ window.analytics ใช้ได้เลย ไม่มี TS error

// ❌ Type ทำแบบนี้ไม่ได้
type Car = { brand: string }
type Car = { color: string }  // Error: Duplicate identifier 'Car'`

const unionIntersectionCode = `// Union Type — ค่าเป็นได้หลาย type
type StringOrNumber = string | number
type Status = 'active' | 'inactive' | 'pending'  // String Literal Union

function formatId(id: string | number) {
  if (typeof id === 'string') {
    return id.toUpperCase()
  }
  return id.toFixed(0)
}

// Intersection Type — รวมทุก property เข้าด้วยกัน
type Employee = { name: string; salary: number }
type Manager = { department: string; reports: number }

type ManagerEmployee = Employee & Manager
// ต้องมีทั้ง name, salary, department, reports

// Discriminated Union — pattern ที่ใช้บ่อยมาก
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number }
  | { kind: 'rectangle'; width: number; height: number }

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle': return Math.PI * shape.radius ** 2
    case 'square': return shape.side ** 2
    case 'rectangle': return shape.width * shape.height
  }
}`

const genericsCode = `// Generics — เขียน code ที่ flexible แต่ยังมี type safety

// ❌ ไม่มี Generic — ต้องเขียน function แยกสำหรับแต่ละ type
function getFirstString(arr: string[]): string { return arr[0] }
function getFirstNumber(arr: number[]): number { return arr[0] }

// ✅ มี Generic — function เดียวรองรับทุก type
function getFirst<T>(arr: T[]): T {
  return arr[0]
}

getFirst<string>(['a', 'b', 'c'])  // return type: string
getFirst<number>([1, 2, 3])        // return type: number
getFirst([true, false])            // TS infer เอง → boolean

// Generic Interface
interface ApiResponse<T> {
  data: T
  status: number
  message: string
}

// ใช้งาน
const userResponse: ApiResponse<User> = {
  data: { id: 1, name: 'Sirapob', email: 'test@test.com' },
  status: 200,
  message: 'success'
}

// Generic Constraints — จำกัดว่า T ต้องมี property อะไร
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const user = { name: 'Sirapob', age: 25 }
getProperty(user, 'name')  // ✅ string
getProperty(user, 'xxx')   // ❌ Error: ไม่มี key นี้`

const utilityTypesCode = `// Utility Types — TypeScript built-in helpers

interface User {
  id: number
  name: string
  email: string
  password: string
  age: number
}

// Partial<T> — ทุก property เป็น optional
type UserUpdate = Partial<User>
// { id?: number; name?: string; email?: string; ... }

// Required<T> — ทุก property เป็น required
type UserRequired = Required<User>

// Pick<T, K> — เลือกเฉพาะ property ที่ต้องการ
type UserProfile = Pick<User, 'id' | 'name' | 'email'>
// { id: number; name: string; email: string }

// Omit<T, K> — เอาออกบาง property
type UserWithoutPassword = Omit<User, 'password'>
// { id: number; name: string; email: string; age: number }

// Record<K, V> — สร้าง object type จาก key และ value
type UserMap = Record<string, User>
// { [key: string]: User }

type StatusMap = Record<'active' | 'inactive', number>
// { active: number; inactive: number }

// Readonly<T> — ทุก property เปลี่ยนไม่ได้
type ReadonlyUser = Readonly<User>
const u: ReadonlyUser = { id: 1, name: 'A', email: '', password: '', age: 0 }
u.name = 'B'  // ❌ Error: Cannot assign to 'name'

// ReturnType<T> — ดึง return type ของ function
function getUser() { return { id: 1, name: 'Sirapob' } }
type UserReturn = ReturnType<typeof getUser>
// { id: number; name: string }`

const typeNarrowingCode = `// Type Narrowing — บอก TS ว่าตอนนี้ type คืออะไร

// 1. typeof
function process(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase()  // TS รู้ว่าเป็น string
  }
  return value.toFixed(2)       // TS รู้ว่าเป็น number
}

// 2. instanceof — ใช้กับ Class
// ตรวจว่า object นั้นถูกสร้างจาก Class ไหน

// ปัญหา: date เป็นได้ทั้ง Date object และ string
function formatDate(date: Date | string) {

  // instanceof ถามว่า "date ถูกสร้างจาก Date class ไหม?"
  if (date instanceof Date) {
    // ✅ ใน block นี้ TS รู้ว่า date เป็น Date object
    // จึงใช้ method ของ Date ได้เลย
    return date.toLocaleDateString()   // เช่น "20/6/2026"
  }

  // ถ้าไม่เข้า if → date ต้องเป็น string แน่นอน
  // TS narrow เหลือแค่ string อัตโนมัติ
  return new Date(date).toLocaleDateString() // แปลง string → Date ก่อน
}

// เรียกใช้งาน
formatDate(new Date())      // ส่ง Date object → เข้า if
formatDate('2026-06-20')    // ส่ง string → ข้าม if

// instanceof ใช้กับ class อื่นได้ด้วย
class ApiError {
  constructor(public status: number, public message: string) {}
}
class NetworkError {
  constructor(public code: string) {}
}

function handleError(err: ApiError | NetworkError) {
  if (err instanceof ApiError) {
    console.log(err.status)    // TS รู้ว่าเป็น ApiError
  } else {
    console.log(err.code)      // TS รู้ว่าเป็น NetworkError
  }
}

// ⚠️ instanceof ใช้กับ Class เท่านั้น
// ถ้าเป็น plain object ใช้ไม่ได้ → ต้องใช้ "in" แทน

// 3. in operator — ใช้กับ plain object
type Cat = { meow: () => string }
type Dog = { bark: () => string }

function makeSound(animal: Cat | Dog) {
  if ('meow' in animal) {
    animal.meow()   // TS รู้ว่าเป็น Cat
  } else {
    animal.bark()   // TS รู้ว่าเป็น Dog
  }
}

// 4. Type Guard — custom function
function isUser(obj: unknown): obj is User {
  return typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'name' in obj
}

// 5. Nullish check
function greet(name: string | null | undefined) {
  if (!name) return 'Hello, Guest'
  return \`Hello, \${name}\`    // TS รู้ว่า name เป็น string
}`

const reactTypesCode = `// TypeScript กับ React

import { useState, useEffect, useRef, FC } from 'react'

// Typing Props
interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  children?: React.ReactNode
}

// FC (Function Component) type
const Button: FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false
}) => (
  <button className={variant} onClick={onClick} disabled={disabled}>
    {label}
  </button>
)

// Typing useState
const [user, setUser] = useState<User | null>(null)
const [count, setCount] = useState<number>(0)
const [items, setItems] = useState<string[]>([])

// Typing useRef
const inputRef = useRef<HTMLInputElement>(null)
const divRef = useRef<HTMLDivElement>(null)

// Typing Event
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value)
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
}

const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e.currentTarget)
}

// Typing useEffect
useEffect(() => {
  const controller = new AbortController()

  async function fetchUser(): Promise<void> {
    const res = await fetch('/api/user', { signal: controller.signal })
    const data: User = await res.json()
    setUser(data)
  }

  fetchUser()
  return () => controller.abort()
}, [])`

const qaItems = [
  {
    q: 'TypeScript คืออะไร ทำไมต้องใช้?',
    a: `TypeScript คือ JavaScript + Static Type System<br><br>
    ทำไมต้องใช้:<br>
    • จับ bug ได้ตั้งแต่ตอน code ไม่ต้องรอ runtime<br>
    • IDE autocomplete ดีขึ้นมาก<br>
    • Code อ่านง่ายขึ้น — รู้ทันทีว่า function รับ/return อะไร<br>
    • Refactor ได้ปลอดภัย — TS บอกเมื่อเปลี่ยน type แล้วมีที่ไหนพัง<br><br>
    TS compile เป็น JS ธรรมดา — browser ไม่รู้จัก TS เลย`
  },
  {
    q: 'Type กับ Interface ต่างกันอย่างไร ใช้อันไหนดีกว่า?',
    a: `<strong>Interface:</strong><br>
    • เหมาะกับ Object shape<br>
    • extend ได้ด้วย <code>extends</code><br>
    • Declaration Merging ได้ (เพิ่ม property ทีหลังได้)<br><br>
    <strong>Type:</strong><br>
    • ใช้ได้กับทุกอย่าง — Union, Intersection, Primitive<br>
    • extend ได้ด้วย <code>&</code><br>
    • ทำ Declaration Merging ไม่ได้<br><br>
    แนะนำ: ใช้ <code>interface</code> สำหรับ Object, ใช้ <code>type</code> สำหรับ Union/Intersection`
  },
  {
    q: 'any กับ unknown ต่างกันอย่างไร?',
    a: `<strong>any:</strong><br>
    • ปิด type checking ทั้งหมด<br>
    • ใช้ได้เลยโดยไม่ต้อง check<br>
    • อันตราย — error อาจเกิดตอน runtime<br><br>
    <strong>unknown:</strong><br>
    • ปลอดภัยกว่า — ต้อง narrow type ก่อนใช้<br>
    • TS บังคับให้ check type ก่อนเสมอ<br><br>
    Rule: หลีกเลี่ยง <code>any</code> ให้มากที่สุด ใช้ <code>unknown</code> แทนเมื่อไม่รู้ type`
  },
  {
    q: 'Generics คืออะไร ใช้เมื่อไหร่?',
    a: `Generics คือ "type parameter" — ทำให้ function/class/interface flexible แต่ยังมี type safety<br><br>
    ใช้เมื่อ:<br>
    • Logic เหมือนกัน แต่ type ต่างกัน<br>
    • สร้าง reusable component/function<br>
    • ไม่อยากใช้ <code>any</code> แต่ไม่รู้ type ล่วงหน้า<br><br>
    ตัวอย่างที่เจอบ่อย: <code>useState&lt;User | null&gt;(null)</code>,
    <code>ApiResponse&lt;User[]&gt;</code>`
  },
  {
    q: 'Utility Types ที่ใช้บ่อยมีอะไรบ้าง?',
    a: `• <code>Partial&lt;T&gt;</code> — ทุก property เป็น optional (เหมาะกับ update API)<br>
    • <code>Required&lt;T&gt;</code> — ทุก property เป็น required<br>
    • <code>Pick&lt;T, K&gt;</code> — เลือกเฉพาะบาง property<br>
    • <code>Omit&lt;T, K&gt;</code> — เอาบาง property ออก<br>
    • <code>Record&lt;K, V&gt;</code> — สร้าง object type จาก key/value<br>
    • <code>Readonly&lt;T&gt;</code> — ป้องกันการแก้ไข property<br>
    • <code>ReturnType&lt;T&gt;</code> — ดึง return type ของ function`
  },
  {
    q: 'Type Narrowing คืออะไร?',
    a: `Type Narrowing คือการบอก TypeScript ว่า "ตอนนี้ type คือ X" ใน block นี้<br><br>
    วิธีที่ใช้บ่อย:<br>
    • <code>typeof</code> — check primitive type<br>
    • <code>instanceof</code> — check class instance<br>
    • <code>in</code> — check ว่ามี property ไหม<br>
    • Type Guard function — <code>obj is Type</code><br>
    • Nullish check — <code>if (value)</code><br><br>
    TS จะ narrow type ให้อัตโนมัติหลัง check`
  }
]

export default function TypeScriptPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-badge">TypeScript</div>
        <h1 className="page-title">TypeScript</h1>
        <p className="page-desc">
          ทบทวน TypeScript ตั้งแต่พื้นฐานจนถึงการใช้งานจริงใน React
          เพื่อเตรียมสัมภาษณ์ Frontend Developer
        </p>
      </div>

      <div className="section">
        <div className="section-title">Basic Types</div>
        <div className="callout callout-info">
          <span className="callout-icon">📘</span>
          <span>TypeScript = JavaScript + Type System — compile เป็น JS ธรรมดา browser ไม่รู้จัก TS เลย</span>
        </div>
        <CodeBlock code={basicTypesCode} lang="typescript" />
      </div>

      <div className="section">
        <div className="section-title">Type vs Interface</div>
        <CodeBlock code={typeVsInterfaceCode} lang="typescript" />
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Interface</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Object shape</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Union / Intersection</td>
              <td>❌</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>extends</td>
              <td>✅ extends</td>
              <td>✅ &amp;</td>
            </tr>
            <tr>
              <td>Declaration Merging</td>
              <td>✅</td>
              <td>❌</td>
            </tr>
            <tr>
              <td>Primitive alias</td>
              <td>❌</td>
              <td>✅</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <div className="section-title">Union & Intersection Types</div>
        <CodeBlock code={unionIntersectionCode} lang="typescript" />
      </div>

      <div className="section">
        <div className="section-title">Generics</div>
        <div className="callout callout-tip">
          <span className="callout-icon">💡</span>
          <span>Generics คือ "type parameter" — เหมือน function parameter แต่สำหรับ type ทำให้ reusable และ type-safe พร้อมกัน</span>
        </div>
        <CodeBlock code={genericsCode} lang="typescript" />
      </div>

      <div className="section">
        <div className="section-title">Utility Types</div>
        <CodeBlock code={utilityTypesCode} lang="typescript" />
      </div>

      <div className="section">
        <div className="section-title">Type Narrowing</div>
        <CodeBlock code={typeNarrowingCode} lang="typescript" />
      </div>

      <div className="section">
        <div className="section-title">TypeScript กับ React</div>
        <div className="callout callout-new">
          <span className="callout-icon">⚛️</span>
          <span>React 19 + TypeScript รองรับดีมาก — type ของ Props, Hooks, และ Events ครอบคลุมทุกอย่าง</span>
        </div>
        <CodeBlock code={reactTypesCode} lang="typescript" />
      </div>

      <div className="section">
        <div className="section-title">Interview Q&A</div>
        <QASection items={qaItems} />
      </div>
    </div>
  )
}
