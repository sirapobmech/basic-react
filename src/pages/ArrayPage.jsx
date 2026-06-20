import CodeBlock from '../components/CodeBlock'
import { QASection } from '../components/QA'

const arrayBasicCode = `// map / filter / find / some / every

interface User {
  id: number
  name: string
  age: number
  active: boolean
}

const users: User[] = [
  { id: 1, name: 'Alice', age: 25, active: true },
  { id: 2, name: 'Bob',   age: 30, active: false },
  { id: 3, name: 'Carol', age: 22, active: true },
]

// map — แปลงแต่ละ item เป็น type ใหม่
const names: string[] = users.map(u => u.name)
// ['Alice', 'Bob', 'Carol']

// filter — กรองเฉพาะที่ตรงเงื่อนไข
const activeUsers: User[] = users.filter(u => u.active)
// [Alice, Carol]

// find — หา item แรกที่ตรง (return T | undefined)
const found: User | undefined = users.find(u => u.id === 2)
// { id: 2, name: 'Bob', ... }

// findIndex — หา index (return -1 ถ้าไม่เจอ)
const idx: number = users.findIndex(u => u.id === 2)
// 1

// some — มี item ไหนที่ตรงเงื่อนไขบ้าง? (return boolean)
const hasInactive: boolean = users.some(u => !u.active)
// true

// every — ทุก item ตรงเงื่อนไขไหม? (return boolean)
const allActive: boolean = users.every(u => u.active)
// false`

const arrayTransformCode = `// reduce / flat / flatMap

interface Order {
  id: number
  userId: number
  items: string[]
  total: number
}

const orders: Order[] = [
  { id: 1, userId: 1, items: ['book', 'pen'], total: 150 },
  { id: 2, userId: 2, items: ['bag'],          total: 500 },
  { id: 3, userId: 1, items: ['pen', 'paper'], total: 80  },
]

// reduce — รวม array เป็นค่าเดียว
const grandTotal: number = orders.reduce((sum, o) => sum + o.total, 0)
// 730

// reduce — group by userId
const byUser = orders.reduce<Record<number, Order[]>>((acc, o) => {
  acc[o.userId] = [...(acc[o.userId] ?? []), o]
  return acc
}, {})
// { 1: [order1, order3], 2: [order2] }

// flat — กระจาย array ซ้อน array ออกมาชั้นเดียว
const nested: string[][] = orders.map(o => o.items)
// [['book','pen'], ['bag'], ['pen','paper']]

const flat: string[] = nested.flat()
// ['book','pen','bag','pen','paper']

// flatMap — map + flat ในขั้นตอนเดียว
const allItems: string[] = orders.flatMap(o => o.items)
// ['book','pen','bag','pen','paper']`

const arraySortCode = `// sort / slice / includes / Set

const nums: number[] = [3, 1, 4, 1, 5, 9, 2, 6]

// sort — เรียงลำดับ ⚠️ แก้ไข array เดิม ต้อง spread ก่อน
const asc  = [...nums].sort((a, b) => a - b)  // [1,1,2,3,4,5,6,9]
const desc = [...nums].sort((a, b) => b - a)  // [9,6,5,4,3,2,1,1]

// sort object array
const users = [
  { name: 'Carol', age: 22 },
  { name: 'Alice', age: 25 },
  { name: 'Bob',   age: 30 },
]
const byAge = [...users].sort((a, b) => a.age - b.age)
// [Carol(22), Alice(25), Bob(30)]

// sort string
const byName = [...users].sort((a, b) => a.name.localeCompare(b.name))
// [Alice, Bob, Carol]

// slice — ตัด array ออกมา (ไม่แก้ array เดิม)
nums.slice(0, 3)   // [3, 1, 4]   → ตำแหน่ง 0,1,2
nums.slice(-2)     // [2, 6]      → 2 ตัวสุดท้าย

// includes — เช็คว่ามีค่าไหม
nums.includes(9)   // true
nums.includes(99)  // false

// Set — กรอง duplicate ออก
const withDupes = [1, 2, 2, 3, 3, 3]
const unique: number[] = [...new Set(withDupes)]
// [1, 2, 3]`

const arrayPatternCode = `// Pattern ที่ใช้บ่อยใน React State

interface Product {
  id: number
  name: string
  price: number
  category: string
}

// ✅ ทุก operation ต้องคืน array ใหม่ — ห้ามแก้ array เดิม
// เพราะ React ต้องการ reference ใหม่ถึงจะ re-render

// เพิ่ม item
const add = (list: Product[], item: Product): Product[] =>
  [...list, item]

// แก้ไข item ด้วย id
const update = (list: Product[], updated: Product): Product[] =>
  list.map(p => p.id === updated.id ? updated : p)

// ลบ item ด้วย id
const remove = (list: Product[], id: number): Product[] =>
  list.filter(p => p.id !== id)

// group by category
const groupBy = (list: Product[]): Record<string, Product[]> =>
  list.reduce<Record<string, Product[]>>((acc, p) => {
    acc[p.category] = [...(acc[p.category] ?? []), p]
    return acc
  }, {})

// ราคาสูงสุด / ต่ำสุด
const maxPrice = (list: Product[]) => Math.max(...list.map(p => p.price))
const minPrice = (list: Product[]) => Math.min(...list.map(p => p.price))

// pagination
const getPage = (list: Product[], page: number, size: number): Product[] =>
  list.slice((page - 1) * size, page * size)`

const qaItems = [
  {
    q: 'map กับ forEach ต่างกันอย่างไร?',
    a: `<strong>map</strong> — คืน array ใหม่ ใช้เมื่อต้องการผลลัพธ์<br>
    <strong>forEach</strong> — ไม่คืนค่า ใช้เมื่อต้องการทำ side effect เช่น log, push<br><br>
    ใน React ใช้ <code>map</code> เสมอตอน render list เพราะต้องการ JSX array กลับมา`
  },
  {
    q: 'ทำไมต้อง spread [...arr] ก่อน sort?',
    a: `<code>sort()</code> แก้ไข array เดิม (mutate) โดยตรง<br><br>
    ถ้าใช้กับ React state จะไม่ trigger re-render เพราะ reference เดิม<br><br>
    <code>[...arr].sort(...)</code> สร้าง array ใหม่ก่อน แล้วค่อย sort — ปลอดภัยเสมอ`
  },
  {
    q: 'find กับ filter ต่างกันอย่างไร?',
    a: `<strong>find</strong> — คืน item แรกที่เจอ (T | undefined) หยุดทันทีที่เจอ<br>
    <strong>filter</strong> — คืน array ของทุก item ที่ตรง วนทั้งหมดเสมอ<br><br>
    ถ้าต้องการแค่ item เดียว ใช้ <code>find</code> — เร็วกว่า`
  },
  {
    q: 'reduce ใช้ทำอะไรได้บ้าง?',
    a: `reduce ทำได้ทุกอย่างที่ array method อื่นทำได้ + งานซับซ้อนกว่านั้น:<br><br>
    • รวมตัวเลข (sum, total)<br>
    • Group by — จัด array เป็น object ตาม key<br>
    • แปลง array เป็น object/Map<br>
    • ทำ pipeline หลาย step ในรอบเดียว<br><br>
    ข้อระวัง: อ่านยากถ้าซับซ้อนเกิน — แยกเป็น step ถ้าทำได้`
  },
  {
    q: 'flatMap ต่างจาก map().flat() อย่างไร?',
    a: `ผลลัพธ์เหมือนกัน แต่ <code>flatMap</code> เร็วกว่า — วนรอบเดียว<br><br>
    <code>map().flat()</code> วน 2 รอบ (map ก่อน แล้วค่อย flat)<br><br>
    ใช้ <code>flatMap</code> เมื่อ map แต่ละ item คืน array และต้องการ flatten ออกมา`
  }
]

export default function ArrayPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-badge">JavaScript</div>
        <h1 className="page-title">การจัดการ Array</h1>
        <p className="page-desc">
          Array methods ที่ใช้บ่อยใน JavaScript/TypeScript
          พร้อม pattern การใช้งานจริงใน React
        </p>
      </div>

      <div className="section">
        <div className="section-title">map / filter / find / some / every</div>
        <CodeBlock code={arrayBasicCode} lang="typescript" />
      </div>

      <div className="section">
        <div className="section-title">reduce / flat / flatMap</div>
        <CodeBlock code={arrayTransformCode} lang="typescript" />
      </div>

      <div className="section">
        <div className="section-title">sort / slice / includes / Set</div>
        <div className="callout callout-warning">
          <span className="callout-icon">⚠️</span>
          <span><code>sort()</code> และ <code>splice()</code> แก้ไข array เดิมโดยตรง — ใช้ <code>[...arr].sort()</code> เสมอเมื่อทำงานกับ React state</span>
        </div>
        <CodeBlock code={arraySortCode} lang="typescript" />
      </div>

      <div className="section">
        <div className="section-title">Pattern ใน React (Immutable Update)</div>
        <div className="callout callout-tip">
          <span className="callout-icon">💡</span>
          <span>React ตรวจจาก reference — ถ้า array เดิมถูกแก้โดยตรงจะไม่ re-render ต้องสร้าง array ใหม่เสมอ</span>
        </div>
        <CodeBlock code={arrayPatternCode} lang="typescript" />
      </div>

      <div className="section">
        <div className="section-title">Interview Q&A</div>
        <QASection items={qaItems} />
      </div>
    </div>
  )
}
