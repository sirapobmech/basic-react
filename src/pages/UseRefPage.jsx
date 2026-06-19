import { useState, useRef, useEffect } from 'react'
import CodeBlock from '../components/CodeBlock'
import { QASection } from '../components/QA'

const refBasicCode = `import { useRef } from 'react'

// useRef returns mutable object: { current: initialValue }
// การเปลี่ยน ref.current ไม่ทำให้ re-render!

// 1. DOM Reference
function InputFocus() {
  const inputRef = useRef(null)

  const focus = () => inputRef.current.focus()
  const clear = () => { inputRef.current.value = '' }

  return (
    <>
      <input ref={inputRef} placeholder="Click button to focus" />
      <button onClick={focus}>Focus</button>
      <button onClick={clear}>Clear</button>
    </>
  )
}

// 2. Mutable value (ไม่ trigger re-render)
function Timer() {
  const [running, setRunning] = useState(false)
  const intervalRef = useRef(null)

  const start = () => {
    setRunning(true)
    intervalRef.current = setInterval(() => {
      // update something
    }, 1000)
  }

  const stop = () => {
    setRunning(false)
    clearInterval(intervalRef.current) // ใช้ ref เพื่อ clear interval
  }

  return (
    <button onClick={running ? stop : start}>
      {running ? 'Stop' : 'Start'}
    </button>
  )
}`

const refVsStateCode = `// useRef vs useState

// useState:
// ✅ Re-renders component เมื่อค่าเปลี่ยน
// ✅ ใช้เมื่อ UI ต้องแสดงค่านั้น
// ❌ ไม่ควรเก็บค่าที่เปลี่ยนบ่อยโดยไม่ต้อง render

// useRef:
// ✅ ไม่ re-render เมื่อค่าเปลี่ยน
// ✅ เก็บ DOM reference
// ✅ เก็บ previous value, timers, intervals
// ❌ อย่าใช้เพื่อแสดงค่าใน UI

// ตัวอย่าง: render count (ต้องการไม่ re-render)
function RenderTracker() {
  const renderCount = useRef(0)
  renderCount.current++ // เพิ่มทุก render ไม่ trigger re-render เพิ่ม

  return <p>Rendered {renderCount.current} times</p>
}

// ตัวอย่าง: previous value
function PreviousValue({ value }) {
  const prevRef = useRef(value)

  useEffect(() => {
    prevRef.current = value // อัปเดต ref หลัง render
  })

  return (
    <p>
      Current: {value} | Previous: {prevRef.current}
    </p>
  )
}`

const forwardRefCode = `import { forwardRef, useImperativeHandle } from 'react'

// forwardRef — ส่ง ref จาก parent ไปถึง child component
const FancyInput = forwardRef((props, ref) => {
  return <input ref={ref} className="fancy" {...props} />
})

// Parent ใช้งาน
function App() {
  const ref = useRef(null)
  return (
    <>
      <FancyInput ref={ref} placeholder="Fancy input" />
      <button onClick={() => ref.current.focus()}>Focus</button>
    </>
  )
}

// useImperativeHandle — กำหนด API ที่ expose ให้ parent
const VideoPlayer = forwardRef((props, ref) => {
  const videoRef = useRef(null)

  useImperativeHandle(ref, () => ({
    play: () => videoRef.current.play(),
    pause: () => videoRef.current.pause(),
    // expose เฉพาะ method ที่ต้องการ ไม่ expose ทั้ง DOM element
  }))

  return <video ref={videoRef} {...props} />
})`

const qaItems = [
  {
    q: 'useRef กับ useState ต่างกันอย่างไร?',
    a: `<strong>useState:</strong> เมื่อ setter ถูกเรียก React จะ re-render component<br>
    <strong>useRef:</strong> การเปลี่ยน <code>ref.current</code> ไม่ trigger re-render เลย<br><br>
    ใช้ <code>useRef</code> เมื่อต้องการ:<br>
    • Reference ไปยัง DOM element<br>
    • เก็บ interval/timeout ID<br>
    • เก็บค่า previous state<br>
    • มีข้อมูลที่ต้องการระหว่าง renders แต่ไม่ต้องแสดงใน UI`
  },
  {
    q: 'forwardRef คืออะไร?',
    a: `<code>forwardRef</code> ช่วยให้ parent component ส่ง ref เข้าไปใน child component ได้<br><br>
    ปกติ React ไม่อนุญาตให้ส่ง <code>ref</code> เป็น prop — ต้องใช้ <code>forwardRef</code> wrapper<br><br>
    Use case: Custom input, button, หรือ component ที่ parent ต้องการ access DOM หรือ methods ภายใน<br><br>
    ใน React 19: ไม่จำเป็นต้องใช้ <code>forwardRef</code> อีกต่อไป!<br>
    <code>ref</code> กลายเป็น regular prop ได้เลย`
  }
]

// DOM Ref Demo
function RefDemo() {
  const inputRef = useRef(null)
  const renderCount = useRef(0)
  const [inputValue, setInputValue] = useState('')

  renderCount.current++

  return (
    <div className="demo-content">
      <div className="demo-row" style={{ marginBottom: 10 }}>
        <input
          ref={inputRef}
          className="demo-input"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Type something..."
        />
        <button className="demo-btn-sm" onClick={() => inputRef.current.focus()}>
          Focus
        </button>
        <button className="demo-btn-sm" onClick={() => setInputValue('')}>
          Clear
        </button>
      </div>
      <div className="demo-label">
        Render count (via ref, no re-render): <strong style={{ color: '#61dafb' }}>{renderCount.current}</strong>
      </div>
    </div>
  )
}

export default function UseRefPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-badge">Hooks</div>
        <h1 className="page-title">useRef</h1>
        <p className="page-desc">
          เก็บค่า mutable และ DOM references โดยไม่ trigger re-render
        </p>
      </div>

      <div className="section">
        <div className="section-title">useRef Basics</div>
        <div className="callout callout-info">
          <span className="callout-icon">📎</span>
          <span><code>useRef</code> คือ "กล่อง" ที่เก็บค่า — เปลี่ยนค่าใน <code>.current</code> ได้ตลอดเวลาโดยไม่ทำให้ re-render</span>
        </div>
        <CodeBlock code={refBasicCode} />
      </div>

      <div className="section">
        <div className="section-title">useRef vs useState</div>
        <CodeBlock code={refVsStateCode} />

        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>useState</th>
              <th>useRef</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Triggers re-render</td>
              <td>✅ Yes</td>
              <td>❌ No</td>
            </tr>
            <tr>
              <td>Mutable</td>
              <td>No (use setter)</td>
              <td>✅ Yes (.current)</td>
            </tr>
            <tr>
              <td>DOM access</td>
              <td>❌ No</td>
              <td>✅ Yes</td>
            </tr>
            <tr>
              <td>Persists across renders</td>
              <td>✅ Yes</td>
              <td>✅ Yes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <div className="section-title">Interactive Demo</div>
        <div className="demo-box">
          <div className="demo-box-header">DOM Ref + Render Counter</div>
          <RefDemo />
        </div>
      </div>

      <div className="section">
        <div className="section-title">forwardRef & useImperativeHandle</div>
        <div className="callout callout-new">
          <span className="callout-icon">🆕</span>
          <span>React 19: <code>forwardRef</code> ไม่จำเป็นแล้ว! สามารถส่ง <code>ref</code> เป็น regular prop ได้เลย</span>
        </div>
        <CodeBlock code={forwardRefCode} />
      </div>

      <div className="section">
        <div className="section-title">Interview Q&A</div>
        <QASection items={qaItems} />
      </div>
    </div>
  )
}
