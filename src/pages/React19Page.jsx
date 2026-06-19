import { useState, useTransition } from 'react'
import CodeBlock from '../components/CodeBlock'
import { QASection } from '../components/QA'

const useHookCode = `// React 19: use() Hook
// ใช้แทน useEffect + useState สำหรับ async data

// ✅ React 19: use() hook
import { use, Suspense } from 'react'

// สร้าง promise ไว้นอก component
const userPromise = fetch('/api/user').then(r => r.json())

function UserProfile() {
  // use() suspend component จนกว่า promise จะ resolve
  const user = use(userPromise) // ไม่ต้องมี useEffect!

  return <div>{user.name}</div>
}

// ใช้กับ Suspense boundary
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserProfile />
    </Suspense>
  )
}

// use() ยังใช้กับ Context ได้ด้วย (แทน useContext)
function Component() {
  const theme = use(ThemeContext) // เหมือน useContext แต่เรียกใน condition ได้!
  if (someCondition) {
    const user = use(UserContext) // ✅ ได้!
  }
}`

const actionsCode = `// React 19: Actions — Form handling แบบใหม่
// ไม่ต้องมี onSubmit handler แยก

// ✅ React 19: Server Action / Client Action
function ContactForm() {
  async function submitAction(formData) {
    'use server' // หรือ 'use client'
    const name = formData.get('name')
    const email = formData.get('email')
    await sendEmail({ name, email })
  }

  return (
    <form action={submitAction}>
      <input name="name" />
      <input name="email" type="email" />
      <button type="submit">Send</button>
    </form>
  )
}

// useActionState — track pending state ของ Action
import { useActionState } from 'react'

function LoginForm() {
  const [error, submitAction, isPending] = useActionState(
    async (prevState, formData) => {
      const result = await login(formData)
      if (!result.ok) return result.error // return error message
      redirect('/dashboard')
    },
    null // initial state
  )

  return (
    <form action={submitAction}>
      {error && <p className="error">{error}</p>}
      <input name="email" type="email" />
      <input name="password" type="password" />
      <button disabled={isPending}>
        {isPending ? 'Logging in...' : 'Login'}
      </button>
    </form>
  )
}`

const useOptimisticCode = `// React 19: useOptimistic — Optimistic UI Updates
// อัปเดต UI ทันที ก่อน server response

import { useOptimistic } from 'react'

function TodoList({ todos }) {
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (currentTodos, newTodo) => [...currentTodos, newTodo]
  )

  async function addAction(formData) {
    const text = formData.get('text')
    const newTodo = { id: 'temp', text, done: false }

    // อัปเดต UI ทันที (optimistic)
    addOptimisticTodo(newTodo)

    // ส่งไป server (อาจใช้เวลา)
    await createTodo(text)
    // ถ้า server error → revert อัตโนมัติ!
  }

  return (
    <>
      <form action={addAction}>
        <input name="text" />
        <button>Add</button>
      </form>
      <ul>
        {optimisticTodos.map(todo => (
          <li key={todo.id} style={{ opacity: todo.id === 'temp' ? 0.5 : 1 }}>
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  )
}`

const compilerCode = `// React 19: React Compiler (Beta)
// Auto-memoization — ไม่ต้องเขียน useMemo/useCallback เอง!

// Before React Compiler (ต้อง optimize เอง)
function SearchResults({ query, results }) {
  const filtered = useMemo(
    () => results.filter(r => r.title.includes(query)),
    [results, query]
  )

  const handleClick = useCallback(
    (id) => console.log('clicked', id),
    []
  )

  return (
    <ul>
      {filtered.map(r => (
        <ResultItem key={r.id} item={r} onClick={handleClick} />
      ))}
    </ul>
  )
}

// After React Compiler (เขียน code ธรรมดา compiler จัดการให้)
function SearchResults({ query, results }) {
  const filtered = results.filter(r => r.title.includes(query))
  // Compiler auto-memoize filtered ให้!

  const handleClick = (id) => console.log('clicked', id)
  // Compiler auto-memoize handleClick ให้!

  return (
    <ul>
      {filtered.map(r => (
        <ResultItem key={r.id} item={r} onClick={handleClick} />
      ))}
    </ul>
  )
}`

const refAsPropsCode = `// React 19: ref เป็น regular prop แล้ว!
// ไม่ต้องใช้ forwardRef อีกต่อไป

// Before React 19 — ต้องใช้ forwardRef
const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />
})

// React 19 — ref เป็น prop ธรรมดา
function Input({ ref, ...props }) {
  return <input ref={ref} {...props} />
}

// ใช้งานเหมือนเดิม
function App() {
  const ref = useRef(null)
  return <Input ref={ref} placeholder="Hello" />
}`

const qaItems = [
  {
    q: 'React 19 มีอะไรใหม่ที่สำคัญบ้าง?',
    a: `<strong>1. use() Hook:</strong> ใช้แทน useEffect+useState สำหรับ async data และ Context<br>
    <strong>2. Actions:</strong> Form action ที่รองรับ async functions โดยตรง<br>
    <strong>3. useActionState:</strong> Track state ของ form action (error, pending)<br>
    <strong>4. useOptimistic:</strong> Optimistic UI updates ที่ revert อัตโนมัติ<br>
    <strong>5. ref as prop:</strong> ไม่ต้องใช้ forwardRef อีกต่อไป<br>
    <strong>6. React Compiler (Beta):</strong> Auto-memoization, ไม่ต้องเขียน useMemo/useCallback`
  },
  {
    q: 'useTransition คืออะไร?',
    a: `<code>useTransition</code> ช่วยให้ state update บางอย่าง "non-urgent" ทำให้ UI ยังตอบสนองได้ระหว่าง heavy update<br><br>
    <code>const [isPending, startTransition] = useTransition()</code><br><br>
    ใช้เมื่อ:<br>
    • Navigation ไปยังหน้าใหม่<br>
    • Search filter ที่ต้อง render หลาย items<br>
    • Tab switching ที่มี heavy content<br><br>
    React จะ render urgent updates (typing) ก่อน แล้วค่อย render transition updates`
  }
]

// useTransition Demo
function TransitionDemo() {
  const [tab, setTab] = useState('A')
  const [isPending, startTransition] = useTransition()

  const tabs = ['A', 'B', 'C']

  return (
    <div className="demo-content">
      <div className="demo-row" style={{ marginBottom: 12 }}>
        {tabs.map(t => (
          <button
            key={t}
            className="demo-btn-sm"
            style={{
              background: tab === t ? 'rgba(97,218,251,0.2)' : undefined,
              borderColor: tab === t ? '#61dafb' : undefined,
              opacity: isPending ? 0.6 : 1,
            }}
            onClick={() => startTransition(() => setTab(t))}
          >
            Tab {t}
          </button>
        ))}
        {isPending && <span className="demo-label">🔄 Loading...</span>}
      </div>
      <div className="demo-output">
        Tab {tab} content — startTransition ป้องกัน UI ค้างระหว่าง switch
      </div>
    </div>
  )
}

export default function React19Page() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-badge">React 19</div>
        <h1 className="page-title">React 19 New Features</h1>
        <p className="page-desc">
          ฟีเจอร์ใหม่ใน React 19 ที่ต้องรู้สำหรับ Frontend Developer ในปี 2025-2026
        </p>
      </div>

      <div className="callout callout-new">
        <span className="callout-icon">🆕</span>
        <span>Project นี้ใช้ React 19.2.6 — ฟีเจอร์ใหม่ทั้งหมดนี้พร้อมใช้งานได้เลย!</span>
      </div>

      <div className="section">
        <div className="section-title">use() Hook</div>
        <CodeBlock code={useHookCode} />
      </div>

      <div className="section">
        <div className="section-title">Actions & useActionState</div>
        <CodeBlock code={actionsCode} />
      </div>

      <div className="section">
        <div className="section-title">useOptimistic — Optimistic UI</div>
        <CodeBlock code={useOptimisticCode} />
        <div className="callout callout-tip">
          <span className="callout-icon">⚡</span>
          <span>useOptimistic ทำให้ UI ตอบสนองทันที แล้วค่อย sync กับ server — ถ้า server error จะ revert อัตโนมัติ</span>
        </div>
      </div>

      <div className="section">
        <div className="section-title">useTransition — Demo</div>
        <div className="demo-box">
          <div className="demo-box-header">useTransition Demo</div>
          <TransitionDemo />
        </div>
        <div className="callout callout-info">
          <span className="callout-icon">ℹ️</span>
          <span>useTransition ให้ React รู้ว่า update นี้ไม่ urgent — React จะ render urgent updates (เช่น typing) ก่อนเสมอ</span>
        </div>
      </div>

      <div className="section">
        <div className="section-title">ref as Regular Prop</div>
        <CodeBlock code={refAsPropsCode} />
      </div>

      <div className="section">
        <div className="section-title">React Compiler — Auto Memoization</div>
        <CodeBlock code={compilerCode} />
      </div>

      <div className="section">
        <div className="section-title">Interview Q&A</div>
        <QASection items={qaItems} />
      </div>
    </div>
  )
}
