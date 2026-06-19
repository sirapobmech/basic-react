import { useReducer, useState } from 'react'
import CodeBlock from '../components/CodeBlock'
import { QASection } from '../components/QA'

const reducerBasicCode = `import { useReducer } from 'react'

// useReducer — alternative to useState สำหรับ complex state
// Pattern: (state, action) => newState

// 1. Define Reducer Function
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + (action.payload ?? 1) }
    case 'DECREMENT':
      return { count: state.count - 1 }
    case 'RESET':
      return { count: 0 }
    default:
      throw new Error(\`Unknown action: \${action.type}\`)
  }
}

// 2. ใช้ใน Component
function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 })

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>+5</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  )
}`

const todoReducerCode = `// Real-world example: Todo List with useReducer

const initialState = {
  todos: [],
  filter: 'all', // 'all' | 'active' | 'done'
}

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          text: action.payload,
          done: false
        }]
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, done: !todo.done }
            : todo
        )
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    case 'SET_FILTER':
      return { ...state, filter: action.payload }

    default:
      return state
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const add = (text) => dispatch({ type: 'ADD_TODO', payload: text })
  const toggle = (id) => dispatch({ type: 'TOGGLE_TODO', payload: id })
  const remove = (id) => dispatch({ type: 'DELETE_TODO', payload: id })

  const filtered = state.todos.filter(todo => {
    if (state.filter === 'active') return !todo.done
    if (state.filter === 'done') return todo.done
    return true
  })

  return <TodoUI todos={filtered} onAdd={add} onToggle={toggle} onDelete={remove} />
}`

const reducerVsStateCode = `// useReducer vs useState — เลือกอันไหน?

// ✅ useState เมื่อ:
const [count, setCount] = useState(0)
const [name, setName] = useState('')
// - State simple, แยกกัน
// - Logic ไม่ซับซ้อน

// ✅ useReducer เมื่อ:
// - State เป็น object ที่มีหลาย fields
// - State updates ซับซ้อน, ขึ้นอยู่กับกัน
// - Logic เยอะ ต้องการ centralize
// - ต้องการ test reducer logic แยก

// เปรียบ useReducer กับ Redux:
// useReducer = local Redux (ไม่มี global store)
// Redux = global store ที่แชร์ระหว่าง components`

const qaItems = [
  {
    q: 'useReducer คืออะไร เมื่อไหรควรใช้แทน useState?',
    a: `useReducer เป็น hook ที่ใช้ pattern <code>(state, action) => newState</code> แบบเดียวกับ Redux<br><br>
    ควรใช้ useReducer เมื่อ:<br>
    • State มีหลาย fields ที่เปลี่ยนพร้อมกัน<br>
    • State updates ซับซ้อน (เช่น todo: add, toggle, delete, filter)<br>
    • ต้องการ centralize logic และทดสอบแยก<br>
    • Next state ขึ้นอยู่กับ previous state หลายส่วน`
  },
  {
    q: 'Reducer function ต้องเป็น Pure Function คืออะไร?',
    a: `Pure function คือ function ที่:<br>
    • Input เดิมให้ output เดิมเสมอ (deterministic)<br>
    • ไม่มี side effects (ไม่เปลี่ยน external state, ไม่ fetch API)<br>
    • ไม่แก้ไข argument โดยตรง (immutable)<br><br>
    ❌ Wrong: <code>state.todos.push(newTodo)</code> — mutates state<br>
    ✅ Correct: <code>[...state.todos, newTodo]</code> — creates new array<br><br>
    React ใช้ strict mode run reducer 2 ครั้งเพื่อ detect side effects`
  }
]

// Todo Demo with useReducer
const initialTodos = { todos: [], filter: 'all' }

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      if (!action.payload.trim()) return state
      return { ...state, todos: [...state.todos, { id: Date.now(), text: action.payload, done: false }] }
    case 'TOGGLE':
      return { ...state, todos: state.todos.map(t => t.id === action.payload ? { ...t, done: !t.done } : t) }
    case 'DELETE':
      return { ...state, todos: state.todos.filter(t => t.id !== action.payload) }
    case 'FILTER':
      return { ...state, filter: action.payload }
    default:
      return state
  }
}

function TodoDemo() {
  const [state, dispatch] = useReducer(todoReducer, initialTodos)
  const [input, setInput] = useState('')

  const filtered = state.todos.filter(t => {
    if (state.filter === 'active') return !t.done
    if (state.filter === 'done') return t.done
    return true
  })

  const filters = ['all', 'active', 'done']

  return (
    <div className="demo-content">
      <div className="demo-row" style={{ marginBottom: 10 }}>
        <input
          className="demo-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              dispatch({ type: 'ADD', payload: input })
              setInput('')
            }
          }}
          placeholder="Add todo... (Enter)"
          style={{ flex: 1 }}
        />
        <button className="demo-btn-sm" onClick={() => {
          dispatch({ type: 'ADD', payload: input })
          setInput('')
        }}>Add</button>
      </div>
      <div className="demo-row" style={{ marginBottom: 10 }}>
        {filters.map(f => (
          <button
            key={f}
            className="demo-btn-sm"
            style={{
              background: state.filter === f ? 'rgba(97,218,251,0.2)' : undefined,
              borderColor: state.filter === f ? '#61dafb' : undefined,
            }}
            onClick={() => dispatch({ type: 'FILTER', payload: f })}
          >
            {f}
          </button>
        ))}
        <span className="demo-label">{state.todos.filter(t => !t.done).length} remaining</span>
      </div>
      <ul className="demo-list">
        {filtered.length === 0 && (
          <li className="demo-list-item" style={{ color: '#4b5563', justifyContent: 'center' }}>
            No todos
          </li>
        )}
        {filtered.map(todo => (
          <li key={todo.id} className="demo-list-item">
            <span
              style={{
                textDecoration: todo.done ? 'line-through' : 'none',
                color: todo.done ? '#4b5563' : '#e2e8f0',
                cursor: 'pointer',
                flex: 1,
              }}
              onClick={() => dispatch({ type: 'TOGGLE', payload: todo.id })}
            >
              {todo.done ? '✅' : '⬜'} {todo.text}
            </span>
            <button
              className="demo-btn-sm"
              style={{ background: 'rgba(248,113,113,0.1)', borderColor: 'rgba(248,113,113,0.3)', color: '#f87171' }}
              onClick={() => dispatch({ type: 'DELETE', payload: todo.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function UseReducerPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-badge">Hooks</div>
        <h1 className="page-title">useReducer</h1>
        <p className="page-desc">
          จัดการ complex state ด้วย Reducer pattern — เหมือน Redux แต่อยู่ใน component
        </p>
      </div>

      <div className="section">
        <div className="section-title">useReducer Basics</div>
        <div className="callout callout-info">
          <span className="callout-icon">🔄</span>
          <span>Pattern: <code>dispatch(action)</code> → <code>reducer(currentState, action)</code> → <code>newState</code></span>
        </div>
        <CodeBlock code={reducerBasicCode} />
      </div>

      <div className="section">
        <div className="section-title">Todo App — Real World Example</div>
        <CodeBlock code={todoReducerCode} />
        <div className="demo-box">
          <div className="demo-box-header">Todo Demo — useReducer</div>
          <TodoDemo />
        </div>
      </div>

      <div className="section">
        <div className="section-title">useReducer vs useState</div>
        <CodeBlock code={reducerVsStateCode} />
      </div>

      <div className="section">
        <div className="section-title">Interview Q&A</div>
        <QASection items={qaItems} />
      </div>
    </div>
  )
}
