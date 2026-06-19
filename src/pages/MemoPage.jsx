import { useState, useMemo, useCallback, memo } from 'react'
import CodeBlock from '../components/CodeBlock'
import { QASection } from '../components/QA'

const memoCode = `import { memo } from 'react'

// React.memo — memoize component
// ป้องกัน re-render เมื่อ props ไม่เปลี่ยน

// ❌ ไม่มี memo — re-render ทุกครั้งที่ parent render
function ExpensiveList({ items }) {
  return <ul>{items.map(i => <li key={i.id}>{i.name}</li>)}</ul>
}

// ✅ มี memo — re-render เฉพาะเมื่อ items เปลี่ยน
const ExpensiveList = memo(function ExpensiveList({ items }) {
  return <ul>{items.map(i => <li key={i.id}>{i.name}</li>)}</ul>
})

// memo กับ comparison function (custom equality)
const Component = memo(MyComponent, (prevProps, nextProps) => {
  // return true = props same = ไม่ re-render
  // return false = props changed = re-render
  return prevProps.id === nextProps.id
})`

const useMemoCode = `import { useMemo } from 'react'

// useMemo — memoize expensive calculation result
// Re-calculate เฉพาะเมื่อ dependencies เปลี่ยน

function FilteredList({ items, query }) {
  // ❌ ไม่มี useMemo — คำนวณใหม่ทุก render
  const filtered = items.filter(i =>
    i.name.toLowerCase().includes(query.toLowerCase())
  )

  // ✅ มี useMemo — คำนวณใหม่เฉพาะเมื่อ items หรือ query เปลี่ยน
  const filtered = useMemo(() => {
    console.log('Filtering...')
    return items.filter(i =>
      i.name.toLowerCase().includes(query.toLowerCase())
    )
  }, [items, query])

  return <ul>{filtered.map(i => <li key={i.id}>{i.name}</li>)}</ul>
}

// useMemo ยัง stable reference ของ object/array ด้วย
// ป้องกัน child re-render เมื่อ parent สร้าง object ใหม่ทุก render
function Parent() {
  const [count, setCount] = useState(0)

  // ❌ สร้าง object ใหม่ทุก render → child ที่รับ options จะ re-render เสมอ
  const options = { theme: 'dark', lang: 'th' }

  // ✅ object เดิมทุก render → child ไม่ re-render โดยไม่จำเป็น
  const options = useMemo(() => ({ theme: 'dark', lang: 'th' }), [])

  return <Child options={options} />
}`

const useCallbackCode = `import { useCallback } from 'react'

// useCallback — memoize function reference
// ป้องกัน function ถูกสร้างใหม่ทุก render

function Parent() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([])

  // ❌ สร้าง function ใหม่ทุก render
  // MemoChild จะ re-render ทุกครั้งที่ Parent render
  const handleAdd = (item) => {
    setItems(prev => [...prev, item])
  }

  // ✅ function เดิมทุก render (ไม่มี deps เปลี่ยน)
  const handleAdd = useCallback((item) => {
    setItems(prev => [...prev, item])
  }, []) // ไม่มี dep เพราะใช้ functional update

  const handleRemove = useCallback((id) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }, [])

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Re-render parent</button>
      <MemoChild onAdd={handleAdd} onRemove={handleRemove} />
    </>
  )
}

const MemoChild = memo(function Child({ onAdd, onRemove }) {
  console.log('Child rendered') // ไม่ log เมื่อ parent re-render เพราะ props เหมือนเดิม
  return <div>...</div>
})`

const whenToUseCode = `// เมื่อไหรควรใช้ useMemo / useCallback?

// ✅ ใช้เมื่อ:
// 1. Expensive computation (sorting, filtering ข้อมูลเยอะ)
// 2. ส่ง function ให้ memo() component
// 3. ส่งเป็น dependency ของ useEffect

// ❌ ไม่จำเป็นเมื่อ:
// 1. Computation เร็วอยู่แล้ว (add 2 numbers)
// 2. Component ไม่ได้ wrap ด้วย memo()
// 3. Re-render ไม่ส่งผลต่อ performance จริงๆ

// 🎯 React 19: React Compiler ทำ memoization อัตโนมัติ!
// ในอนาคต อาจไม่ต้องเขียน useMemo/useCallback เองอีกต่อไป`

const qaItems = [
  {
    q: 'useMemo กับ useCallback ต่างกันอย่างไร?',
    a: `<code>useMemo</code> — memoize <strong>value</strong> (ผลลัพธ์ของ function)<br>
    <code>useCallback</code> — memoize <strong>function</strong> (reference ของ function เอง)<br><br>
    <code>useCallback(fn, deps)</code> เทียบเท่ากับ <code>useMemo(() => fn, deps)</code><br><br>
    ใช้ useMemo เมื่อต้องการ cache ผลการคำนวณ<br>
    ใช้ useCallback เมื่อต้องการ stable function reference (ส่งให้ child component)`
  },
  {
    q: 'React.memo คืออะไร แตกต่างจาก useMemo อย่างไร?',
    a: `<code>React.memo</code> — HOC ที่ wrap <strong>component</strong> ป้องกัน re-render เมื่อ props เหมือนเดิม<br>
    <code>useMemo</code> — Hook ที่ใช้ใน <strong>function body</strong> cache ผลการคำนวณ<br><br>
    React.memo ใช้ shallow comparison ของ props<br>
    ถ้า props เป็น object/function ต้องใช้ร่วมกับ useMemo/useCallback`
  },
  {
    q: 'Over-optimization คืออะไร ทำไมถึงเป็นปัญหา?',
    a: `การใส่ useMemo/useCallback ทุกที่โดยไม่จำเป็น<br><br>
    ปัญหา:<br>
    • Code อ่านยากขึ้น<br>
    • Overhead ของ useMemo เอง (เก็บ deps array, compare)<br>
    • ถ้า deps เปลี่ยนทุก render ก็ไม่ได้ประโยชน์<br><br>
    แนวทาง: Profile ก่อน Optimize ด้วย React DevTools Profiler<br>
    และใน React 19 React Compiler จะ optimize ให้อัตโนมัติ`
  }
]

// Memo Demo
const HeavyChild = memo(function HeavyChild({ onIncrement }) {
  const renders = useMemo(() => {
    let count = 0
    return () => ++count
  }, [])

  return (
    <div style={{
      padding: '12px 16px',
      background: '#1e2535',
      borderRadius: 8,
      fontSize: 13,
      color: '#9ca3af',
      marginTop: 10
    }}>
      <span style={{ color: '#4ade80' }}>MemoChild</span> (ไม่ re-render เมื่อ parent count เปลี่ยน)
      <button className="demo-btn-sm" style={{ marginLeft: 12 }} onClick={onIncrement}>
        Add Item
      </button>
    </div>
  )
})

function MemoDemo() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([])

  const handleIncrement = useCallback(() => {
    setItems(prev => [...prev, `Item ${prev.length + 1}`])
  }, [])

  return (
    <div className="demo-content">
      <div className="demo-row">
        <button className="demo-btn" onClick={() => setCount(c => c + 1)}>
          Re-render Parent ({count})
        </button>
      </div>
      <HeavyChild onIncrement={handleIncrement} />
      {items.length > 0 && (
        <ul className="demo-list" style={{ marginTop: 8 }}>
          {items.map((item, i) => (
            <li key={i} className="demo-list-item" style={{ padding: '6px 12px' }}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function MemoPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-badge">Performance</div>
        <h1 className="page-title">useMemo & useCallback</h1>
        <p className="page-desc">
          Memoization เพื่อลด unnecessary re-renders และ expensive calculations
        </p>
      </div>

      <div className="section">
        <div className="section-title">React.memo — Component Memoization</div>
        <CodeBlock code={memoCode} />
      </div>

      <div className="section">
        <div className="section-title">useMemo — Value Memoization</div>
        <CodeBlock code={useMemoCode} />
      </div>

      <div className="section">
        <div className="section-title">useCallback — Function Memoization</div>
        <CodeBlock code={useCallbackCode} />
      </div>

      <div className="section">
        <div className="section-title">Interactive Demo</div>
        <div className="demo-box">
          <div className="demo-box-header">memo + useCallback Demo</div>
          <MemoDemo />
        </div>
      </div>

      <div className="section">
        <div className="section-title">เมื่อไหรควรใช้?</div>
        <CodeBlock code={whenToUseCode} />
        <div className="callout callout-new">
          <span className="callout-icon">🚀</span>
          <span>React 19 มี <strong>React Compiler</strong> ที่ memoize code อัตโนมัติ — ในอนาคตอาจไม่ต้องเขียน useMemo/useCallback เองเลย</span>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Interview Q&A</div>
        <QASection items={qaItems} />
      </div>
    </div>
  )
}
