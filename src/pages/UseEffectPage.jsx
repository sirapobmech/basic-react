import { useState, useEffect } from 'react'
import CodeBlock from '../components/CodeBlock'
import { QASection } from '../components/QA'

const basicEffectCode = `import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  // 1. ทำงานทุกครั้งที่ render (ไม่มี dependency array)
  useEffect(() => {
    console.log('Rendered!')
  })

  // 2. ทำงานครั้งเดียว (dependency array ว่าง)
  useEffect(() => {
    console.log('Mounted!')
    // เช่น fetch initial data, add event listeners
  }, [])

  // 3. ทำงานเมื่อ dependency เปลี่ยน
  useEffect(() => {
    console.log('count changed:', count)
    document.title = \`Count: \${count}\`
  }, [count]) // ทำงานเมื่อ count เปลี่ยน

  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}`

const cleanupCode = `// Cleanup Function — ป้องกัน memory leak
// React เรียก cleanup ก่อน effect ครั้งถัดไป และตอน unmount

function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1)
    }, 1000)

    // Cleanup: clear interval เมื่อ component unmount
    return () => clearInterval(interval)
  }, [])

  return <p>Time: {seconds}s</p>
}

// Event Listener cleanup
function MouseTracker() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handler = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handler)

    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return <p>Mouse: {pos.x}, {pos.y}</p>
}`

const fetchCode = `// Data Fetching Pattern ที่ถูกต้อง
function UserProfile({ userId }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Abort controller ป้องกัน race condition
    const controller = new AbortController()

    async function fetchUser() {
      try {
        setLoading(true)
        const res = await fetch(\`/api/users/\${userId}\`, {
          signal: controller.signal
        })
        const data = await res.json()
        setUser(data)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchUser()

    // Cleanup: abort request เมื่อ userId เปลี่ยน หรือ unmount
    return () => controller.abort()
  }, [userId]) // refetch เมื่อ userId เปลี่ยน

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  return <div>{user?.name}</div>
}`

const effectOrderCode = `// useEffect ลำดับการทำงาน:
// 1. React render UI
// 2. Browser paint (อัปเดต DOM จริง)
// 3. useEffect cleanup (ถ้ามี effect เก่า)
// 4. useEffect callback ทำงาน

// ⚠️ useLayoutEffect ทำงานก่อน browser paint
// ใช้เมื่อต้องการวัด DOM หรือ animate ก่อนที่ user เห็น

useLayoutEffect(() => {
  // ทำงานหลัง DOM update แต่ก่อน browser paint
  const width = divRef.current.getBoundingClientRect().width
  setWidth(width)
}, [])`

const qaItems = [
  {
    q: 'Dependency Array ใน useEffect คืออะไร?',
    a: `Dependency Array บอก React ว่าให้ run effect เมื่อค่าใดค่าหนึ่งเปลี่ยน<br><br>
    • <code>useEffect(fn)</code> — run ทุก render<br>
    • <code>useEffect(fn, [])</code> — run ครั้งเดียวตอน mount<br>
    • <code>useEffect(fn, [a, b])</code> — run เมื่อ <code>a</code> หรือ <code>b</code> เปลี่ยน<br><br>
    ⚠️ ต้องใส่ทุก value ที่ใช้ใน effect เป็น dependency (ESLint จะเตือนถ้าลืม)`
  },
  {
    q: 'Cleanup function ใน useEffect คืออะไร ใช้เมื่อไหร่?',
    a: `Cleanup function คือ function ที่ return ออกจาก useEffect<br>
    React จะเรียกมันก่อน run effect ครั้งถัดไป และตอน component unmount<br><br>
    ใช้เพื่อ:<br>
    • Clear timers (<code>clearInterval</code>, <code>clearTimeout</code>)<br>
    • Remove event listeners<br>
    • Cancel API requests (AbortController)<br>
    • Unsubscribe from subscriptions<br><br>
    ถ้าไม่ cleanup → memory leak และ unexpected behavior`
  },
  {
    q: 'useEffect กับ useLayoutEffect ต่างกันอย่างไร?',
    a: `<strong>useEffect:</strong><br>
    • ทำงานหลัง browser paint (async)<br>
    • ใช้กับ data fetching, subscriptions, timers<br>
    • ไม่ block browser paint — UI ไม่กระตุก<br><br>
    <strong>useLayoutEffect:</strong><br>
    • ทำงานหลัง DOM update แต่ก่อน browser paint (sync)<br>
    • ใช้เมื่อต้องวัด DOM, animate, scroll position<br>
    • อาจทำให้ UI กระตุกถ้าใช้ผิดที่<br><br>
    Rule of thumb: ใช้ <code>useEffect</code> ก่อนเสมอ switch ไป <code>useLayoutEffect</code> เมื่อมีปัญหา flickering`
  }
]

// Timer Demo
function TimerDemo() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return
    const interval = setInterval(() => setSeconds(s => s + 1), 1000)
    return () => clearInterval(interval)
  }, [running])

  return (
    <div className="demo-content">
      <div className="demo-row">
        <span className="demo-value" style={{ fontSize: 24, minWidth: 80 }}>
          {String(Math.floor(seconds / 60)).padStart(2, '0')}:
          {String(seconds % 60).padStart(2, '0')}
        </span>
        <button className="demo-btn" onClick={() => setRunning(r => !r)}>
          {running ? '⏸ Pause' : '▶ Start'}
        </button>
        <button className="demo-btn-sm" onClick={() => { setSeconds(0); setRunning(false) }}>
          Reset
        </button>
      </div>
      <p className="demo-label" style={{ marginTop: 10 }}>
        useEffect cleanup ป้องกัน interval leak
      </p>
    </div>
  )
}

export default function UseEffectPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-badge">Hooks</div>
        <h1 className="page-title">useEffect</h1>
        <p className="page-desc">
          จัดการ side effects: data fetching, subscriptions, timers, และ DOM manipulation
        </p>
      </div>

      <div className="section">
        <div className="section-title">useEffect Basics</div>
        <div className="callout callout-info">
          <span className="callout-icon">🎣</span>
          <span>useEffect ทำงานหลัง render เสมอ ใช้สำหรับ side effects ที่ไม่ใช่ rendering เช่น API calls, subscriptions</span>
        </div>
        <CodeBlock code={basicEffectCode} />
      </div>

      <div className="section">
        <div className="section-title">Cleanup Function</div>
        <CodeBlock code={cleanupCode} />
        <div className="demo-box">
          <div className="demo-box-header">Timer Demo — useEffect + Cleanup</div>
          <TimerDemo />
        </div>
      </div>

      <div className="section">
        <div className="section-title">Data Fetching Pattern</div>
        <div className="callout callout-warn">
          <span className="callout-icon">⚠️</span>
          <span>ใน React 19 ควรพิจารณาใช้ <code>use()</code> hook หรือ library เช่น TanStack Query แทนการ fetch ใน useEffect เพื่อจัดการ loading/error states ได้ดีกว่า</span>
        </div>
        <CodeBlock code={fetchCode} />
      </div>

      <div className="section">
        <div className="section-title">Effect Execution Order</div>
        <CodeBlock code={effectOrderCode} />
      </div>

      <div className="section">
        <div className="section-title">Interview Q&A</div>
        <QASection items={qaItems} />
      </div>
    </div>
  )
}
