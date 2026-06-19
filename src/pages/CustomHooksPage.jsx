import { useState, useEffect, useRef, useCallback } from 'react'
import CodeBlock from '../components/CodeBlock'
import { QASection } from '../components/QA'

const rulesCode = `// Rules of Hooks — ต้องทำตามเสมอ!

// ✅ Rule 1: เรียก Hooks ที่ top level เท่านั้น
// ❌ Wrong — Hook ใน condition
function App() {
  if (isLoggedIn) {
    const [user, setUser] = useState(null) // ❌ Error!
  }
}

// ✅ Correct
function App() {
  const [user, setUser] = useState(null) // top level
  if (isLoggedIn) {
    // ใช้ user ได้ตรงนี้
  }
}

// ✅ Rule 2: เรียก Hooks จาก Function Component หรือ Custom Hook เท่านั้น
// ❌ Wrong — Hook ใน regular function
function helper() {
  const [value] = useState(0) // ❌ ใช้ไม่ได้
}

// ✅ Custom Hook (ชื่อต้องขึ้นต้นด้วย "use")
function useHelper() {
  const [value] = useState(0) // ✅ ใช้ได้
  return value
}`

const useLocalStorageCode = `// Custom Hook: useLocalStorage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    // Lazy init — อ่านจาก localStorage ครั้งเดียว
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  const setStoredValue = useCallback((newValue) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }, [key])

  return [value, setStoredValue]
}

// การใช้งาน
function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')
  const [user, setUser] = useLocalStorage('user', null)

  return (
    <button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}>
      Theme: {theme}
    </button>
  )
}`

const useFetchCode = `// Custom Hook: useFetch
function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) return
    const controller = new AbortController()

    setLoading(true)
    setError(null)

    fetch(url, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`)
        return res.json()
      })
      .then(data => setData(data))
      .catch(err => {
        if (err.name !== 'AbortError') setError(err.message)
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [url])

  return { data, loading, error }
}

// การใช้งาน
function UserProfile({ id }) {
  const { data: user, loading, error } = useFetch(\`/api/users/\${id}\`)

  if (loading) return <Spinner />
  if (error) return <Error message={error} />
  return <div>{user.name}</div>
}`

const useDebounceCode = `// Custom Hook: useDebounce
// ทำให้ค่าเปลี่ยนหลังจากผู้ใช้หยุดพิมพ์ (ไม่ call API ทุกตัวอักษร)

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer) // cancel เมื่อ value เปลี่ยนก่อน delay
  }, [value, delay])

  return debouncedValue
}

// การใช้งาน
function SearchBox() {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    if (debouncedQuery) {
      console.log('Searching for:', debouncedQuery)
      // fetch('/api/search?q=' + debouncedQuery)
    }
  }, [debouncedQuery]) // เรียกเฉพาะเมื่อ debouncedQuery เปลี่ยน

  return (
    <input
      value={query}
      onChange={e => setQuery(e.target.value)} // อัปเดตทันที
      placeholder="Search..."
    />
  )
}`

const qaItems = [
  {
    q: 'Custom Hook คืออะไร และต้องตั้งชื่ออย่างไร?',
    a: `Custom Hook คือ JavaScript function ที่:<br>
    • ชื่อขึ้นต้นด้วย <code>use</code> (เช่น <code>useLocalStorage</code>, <code>useFetch</code>)<br>
    • เรียกใช้ React hooks อื่นๆ ภายใน<br>
    • Extract reusable stateful logic ออกจาก component<br><br>
    ทำไมต้องขึ้นต้นด้วย <code>use</code>: เพื่อให้ React (และ ESLint plugin) รู้ว่าเป็น Hook และ enforce Rules of Hooks`
  },
  {
    q: 'Rules of Hooks คืออะไร ทำไมต้องตาม?',
    a: `<strong>Rule 1:</strong> เรียก Hooks ที่ top level เท่านั้น ห้ามใน loops, conditions, nested functions<br>
    <strong>Rule 2:</strong> เรียก Hooks จาก React Function Component หรือ Custom Hook เท่านั้น<br><br>
    ทำไม: React track ลำดับการเรียก Hook ด้วย linked list ทุก render ถ้าลำดับเปลี่ยน React จะ map state ผิดตัว<br><br>
    ถ้าต้องการ conditional logic ใส่ condition ภายใน Hook แทน ไม่ใช่ wrap Hook ด้วย condition`
  }
]

// useDebounce Demo
function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])
  return debouncedValue
}

function DebounceDemo() {
  const [query, setQuery] = useState('')
  const [callCount, setCallCount] = useState(0)
  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    if (debouncedQuery) {
      setCallCount(c => c + 1)
    }
  }, [debouncedQuery])

  return (
    <div className="demo-content">
      <div className="demo-row" style={{ marginBottom: 10 }}>
        <input
          className="demo-input"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="พิมพ์เพื่อค้นหา..."
          style={{ flex: 1 }}
        />
      </div>
      <div className="demo-label">
        Input (live): <strong style={{ color: '#e2e8f0' }}>{query || '...'}</strong>
      </div>
      <div className="demo-label" style={{ marginTop: 6 }}>
        Debounced (หลังหยุด 500ms): <strong style={{ color: '#61dafb' }}>{debouncedQuery || '...'}</strong>
      </div>
      <div className="demo-label" style={{ marginTop: 6 }}>
        API calls ที่จะถูกเรียก: <strong style={{ color: '#4ade80' }}>{callCount} ครั้ง</strong>
        <span style={{ color: '#4b5563', marginLeft: 8 }}>(ประหยัดกว่าเรียกทุก keystroke)</span>
      </div>
    </div>
  )
}

export default function CustomHooksPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-badge">Advanced</div>
        <h1 className="page-title">Custom Hooks</h1>
        <p className="page-desc">
          สร้าง reusable logic ด้วย Custom Hooks และ Rules of Hooks ที่ต้องรู้
        </p>
      </div>

      <div className="section">
        <div className="section-title">Rules of Hooks</div>
        <div className="callout callout-warn">
          <span className="callout-icon">⚠️</span>
          <span>Rules of Hooks ละเมิดไม่ได้! React ใช้ call order ของ hooks ในการ map state — ถ้าลำดับเปลี่ยน state จะผิดตัว</span>
        </div>
        <CodeBlock code={rulesCode} />
      </div>

      <div className="section">
        <div className="section-title">useLocalStorage</div>
        <CodeBlock code={useLocalStorageCode} />
      </div>

      <div className="section">
        <div className="section-title">useFetch</div>
        <CodeBlock code={useFetchCode} />
      </div>

      <div className="section">
        <div className="section-title">useDebounce</div>
        <CodeBlock code={useDebounceCode} />
        <div className="demo-box">
          <div className="demo-box-header">useDebounce Demo</div>
          <DebounceDemo />
        </div>
      </div>

      <div className="section">
        <div className="section-title">Interview Q&A</div>
        <QASection items={qaItems} />
      </div>
    </div>
  )
}
