import { useState } from 'react'
import CodeBlock from '../components/CodeBlock'
import { QASection } from '../components/QA'

const propsCode = `// Props คือ read-only data ที่ส่งจาก parent ไป child

// Parent Component
function App() {
  return (
    <UserCard
      name="Sirapob"
      age={25}
      isAdmin={true}
      tags={['React', 'TypeScript']}
      onDelete={() => console.log('deleted')}
    />
  )
}

// Child Component - รับ props ผ่าน destructuring
function UserCard({ name, age, isAdmin, tags, onDelete }) {
  return (
    <div>
      <h2>{name} {isAdmin && '⭐'}</h2>
      <p>Age: {age}</p>
      <ul>
        {tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

// Default Props ด้วย default parameter values
function Button({ label = 'Click', variant = 'primary', disabled = false }) {
  return <button className={variant} disabled={disabled}>{label}</button>
}`

const useStateCode = `import { useState } from 'react'

// useState returns [currentValue, setterFunction]
function Counter() {
  const [count, setCount] = useState(0) // initial value = 0

  return (
    <div>
      <p>Count: {count}</p>
      {/* Direct value */}
      <button onClick={() => setCount(count + 1)}>+</button>

      {/* Functional update (แนะนำเมื่อ state ใหม่ขึ้นอยู่กับ state เก่า) */}
      <button onClick={() => setCount(prev => prev - 1)}>-</button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

// Object State
function UserForm() {
  const [user, setUser] = useState({ name: '', email: '' })

  const updateField = (field, value) => {
    // ต้อง spread เพราะ setState แทนที่ทั้ง object
    setUser(prev => ({ ...prev, [field]: value }))
  }

  return (
    <form>
      <input
        value={user.name}
        onChange={e => updateField('name', e.target.value)}
      />
      <input
        value={user.email}
        onChange={e => updateField('email', e.target.value)}
      />
    </form>
  )
}`

const batchingCode = `// React 18+ batches multiple setState calls automatically!
// ทุก setState ใน event handler จะถูก batch เป็น 1 re-render

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  const handleClick = () => {
    setCount(c => c + 1) // ไม่ re-render ทันที
    setText('updated')   // ไม่ re-render ทันที
    // React batch ทั้งสองเป็น 1 re-render
  }

  // ถ้าต้องการ state ใหม่ทันที ใช้ flushSync
  import { flushSync } from 'react-dom'

  const handleSync = () => {
    flushSync(() => setCount(c => c + 1)) // re-render ทันที
    flushSync(() => setText('updated'))   // re-render อีกครั้ง
  }
}`

const liftingCode = `// Lifting State Up - เมื่อหลาย Component ต้องใช้ state เดียวกัน
// ย้าย state ขึ้นไปที่ parent แล้วส่งลงมาผ่าน props

function Parent() {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <>
      <ItemList
        selectedId={selectedId}
        onSelect={setSelectedId}
      />
      <ItemDetail id={selectedId} />
    </>
  )
}

function ItemList({ selectedId, onSelect }) {
  return items.map(item => (
    <div
      key={item.id}
      className={item.id === selectedId ? 'active' : ''}
      onClick={() => onSelect(item.id)}
    >
      {item.name}
    </div>
  ))
}`

const qaItems = [
  {
    q: 'Props และ State ต่างกันอย่างไร?',
    a: `<strong>Props:</strong><br>
    • ส่งจาก parent ไป child<br>
    • Read-only — child ห้ามแก้ไข props โดยตรง<br>
    • เปลี่ยนได้เมื่อ parent re-render ด้วย props ใหม่<br><br>
    <strong>State:</strong><br>
    • เป็น "memory" ของ component ตัวเอง<br>
    • เปลี่ยนได้ด้วย setter function (setState)<br>
    • การเปลี่ยน state ทำให้ component re-render`
  },
  {
    q: 'ทำไม setState ถึงไม่ควรแก้ state โดยตรง?',
    a: `React track การเปลี่ยนแปลงผ่าน setter function เท่านั้น<br><br>
    ❌ Wrong: <code>state.name = "new"</code> — React ไม่รู้ว่า state เปลี่ยน, ไม่ re-render<br>
    ✅ Correct: <code>setState({ ...state, name: "new" })</code> — React detect การเปลี่ยน, re-render<br><br>
    State ต้อง immutable — สร้าง object ใหม่เสมอ ไม่แก้ของเดิม`
  },
  {
    q: 'Controlled Component กับ Uncontrolled Component ต่างกันอย่างไร?',
    a: `<strong>Controlled Component:</strong><br>
    • React เป็น "single source of truth" ของ input value<br>
    • ใช้ <code>value</code> prop + <code>onChange</code> handler<br>
    • ข้อมูลถูก store ใน state<br>
    <code>&lt;input value={text} onChange={e => setText(e.target.value)} /&gt;</code><br><br>
    <strong>Uncontrolled Component:</strong><br>
    • DOM จัดการ state เอง<br>
    • ใช้ <code>ref</code> เพื่อดึงค่า เช่น <code>inputRef.current.value</code><br>
    • เหมาะกับ file input หรือกรณีที่ไม่ต้องการ validation`
  }
]

// Interactive Demo Component
function CounterDemo() {
  const [count, setCount] = useState(0)
  return (
    <div className="demo-content">
      <div className="demo-row">
        <button className="demo-btn" onClick={() => setCount(c => c - 1)}>−</button>
        <span className="demo-value">{count}</span>
        <button className="demo-btn" onClick={() => setCount(c => c + 1)}>+</button>
        <button className="demo-btn-sm" onClick={() => setCount(0)}>Reset</button>
      </div>
      <p className="demo-label" style={{ marginTop: 12 }}>
        {count === 0 ? 'Start counting!' : count > 0 ? `Positive: ${count}` : `Negative: ${count}`}
      </p>
    </div>
  )
}

function FormDemo() {
  const [form, setForm] = useState({ name: '', email: '' })

  return (
    <div className="demo-content">
      <div className="demo-row" style={{ marginBottom: 10 }}>
        <span className="demo-label">Name:</span>
        <input
          className="demo-input"
          value={form.name}
          onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
          placeholder="กรอกชื่อ..."
        />
      </div>
      <div className="demo-row" style={{ marginBottom: 10 }}>
        <span className="demo-label">Email:</span>
        <input
          className="demo-input"
          value={form.email}
          onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
          placeholder="กรอก email..."
        />
      </div>
      <div className="demo-output">
        {form.name || form.email
          ? `👤 ${form.name || '...'} | 📧 ${form.email || '...'}`
          : 'กรอกข้อมูลเพื่อดูผลลัพธ์'}
      </div>
    </div>
  )
}

export default function PropsStatePage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-badge">Core Concepts</div>
        <h1 className="page-title">Props & State</h1>
        <p className="page-desc">
          การส่งข้อมูลระหว่าง component ด้วย Props และการจัดการ state ด้วย useState
        </p>
      </div>

      <div className="section">
        <div className="section-title">Props — การส่งข้อมูล</div>
        <CodeBlock code={propsCode} />
      </div>

      <div className="section">
        <div className="section-title">useState Hook</div>
        <CodeBlock code={useStateCode} />

        <div className="demo-box">
          <div className="demo-box-header">Counter Demo — useState</div>
          <CounterDemo />
        </div>
      </div>

      <div className="section">
        <div className="section-title">Controlled Form Demo</div>
        <div className="callout callout-info">
          <span className="callout-icon">📝</span>
          <span>Controlled Component: React state เป็น single source of truth ของ input</span>
        </div>
        <div className="demo-box">
          <div className="demo-box-header">Form Demo — Controlled Component</div>
          <FormDemo />
        </div>
      </div>

      <div className="section">
        <div className="section-title">State Batching (React 18+)</div>
        <CodeBlock code={batchingCode} />
        <div className="callout callout-tip">
          <span className="callout-icon">⚡</span>
          <span>React 18+ batch setState calls ทั้งใน event handlers, async functions, setTimeout, และ Promise — ลด re-renders โดยอัตโนมัติ</span>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Lifting State Up</div>
        <CodeBlock code={liftingCode} />
      </div>

      <div className="section">
        <div className="section-title">Interview Q&A</div>
        <QASection items={qaItems} />
      </div>
    </div>
  )
}
