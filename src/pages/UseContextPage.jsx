import { useState, useContext, createContext } from 'react'
import CodeBlock from '../components/CodeBlock'
import { QASection } from '../components/QA'

const contextBasicCode = `import { createContext, useContext, useState } from 'react'

// 1. สร้าง Context
const ThemeContext = createContext('light') // default value

// 2. Provider — wrap components ที่ต้องการ access
function App() {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
      <Content />
    </ThemeContext.Provider>
  )
}

// 3. Consumer — ใช้ useContext hook
function Toolbar() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
      Toggle Theme (current: {theme})
    </button>
  )
}

// Component ลึกแค่ไหนก็ access ได้
function Content() {
  const { theme } = useContext(ThemeContext)
  return <div className={theme}>Content here</div>
}`

const contextPatternCode = `// Pattern: Custom Context Hook
// ป้องกัน useContext ถูกเรียกนอก Provider

// 1. สร้าง Context
const AuthContext = createContext(null)

// 2. Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = async (credentials) => {
    const userData = await api.login(credentials)
    setUser(userData)
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// 3. Custom Hook — ใช้แทน useContext โดยตรง
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

// 4. การใช้งาน
function Navbar() {
  const { user, logout } = useAuth() // สะอาดกว่า

  return user ? (
    <div>Welcome, {user.name} <button onClick={logout}>Logout</button></div>
  ) : (
    <a href="/login">Login</a>
  )
}`

const contextVsPropsCode = `// เมื่อไหรควรใช้ Context vs Props

// ✅ ใช้ Props เมื่อ:
// - ข้อมูลเปลี่ยนบ่อย (re-render ทุก consumer)
// - ส่งให้ component ใกล้ๆ (1-2 ชั้น)
// - Explicit data flow ดีกว่า

// ✅ ใช้ Context เมื่อ:
// - Prop drilling หลายชั้น (3+ levels)
// - Global state: theme, language, auth, cart
// - ข้อมูลที่ค่อนข้าง static

// ⚡ Performance Note:
// Context re-renders ทุก consumer เมื่อ value เปลี่ยน
// แก้ด้วยการ split context หรือใช้ memo

// Split Context Pattern
const UserContext = createContext(null)      // user info
const ThemeContext = createContext('light')  // theme only

// ไม่ re-render UserContext consumers เมื่อ theme เปลี่ยน`

const qaItems = [
  {
    q: 'Context API คืออะไร และใช้แก้ปัญหาอะไร?',
    a: `Context API ใช้แก้ปัญหา <strong>Prop Drilling</strong> — การส่ง props ผ่านหลาย level component ที่ไม่ได้ใช้ข้อมูลนั้นจริงๆ<br><br>
    ตัวอย่าง: App → Header → Nav → UserMenu ต้องการ user data<br>
    โดยไม่มี Context: ส่ง user prop ทุก level<br>
    มี Context: UserMenu เรียก <code>useContext(UserContext)</code> ได้เลย`
  },
  {
    q: 'Context API มีข้อเสียอะไรบ้าง?',
    a: `• ทุก component ที่ใช้ context จะ re-render เมื่อ value เปลี่ยน<br>
    • ทำให้ component reusability ลดลง (ต้องอยู่ใน Provider)<br>
    • Debug ยากกว่า props<br><br>
    สำหรับ complex state ควรพิจารณา:<br>
    • Split contexts (แยก context ตามความถี่ในการเปลี่ยน)<br>
    • Zustand / Jotai (lightweight state managers)<br>
    • Redux Toolkit (สำหรับ enterprise)`
  },
  {
    q: 'Context กับ Redux ต่างกันอย่างไร?',
    a: `<strong>Context API:</strong><br>
    • Built-in React ไม่ต้องติดตั้งเพิ่ม<br>
    • เหมาะกับ simple global state (theme, auth, language)<br>
    • ไม่มี middleware, devtools<br>
    • Re-render ทุก consumer เมื่อ value เปลี่ยน<br><br>
    <strong>Redux / Zustand:</strong><br>
    • Selective subscription — component re-render เฉพาะส่วนที่ใช้<br>
    • Devtools, middleware (logging, persistence)<br>
    • เหมาะกับ complex state, large apps<br><br>
    React 19+ แนะนำ: Context สำหรับ simple, Zustand/Jotai สำหรับ complex`
  }
]

// Demo: Theme Context
const DemoThemeContext = createContext(null)

function DemoThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')
  return (
    <DemoThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </DemoThemeContext.Provider>
  )
}

function ThemeButton() {
  const { theme, setTheme } = useContext(DemoThemeContext)
  return (
    <button
      className="demo-btn"
      onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  )
}

function ThemedCard() {
  const { theme } = useContext(DemoThemeContext)
  return (
    <div style={{
      padding: '16px',
      borderRadius: '8px',
      background: theme === 'dark' ? '#1e2535' : '#f1f5f9',
      color: theme === 'dark' ? '#e2e8f0' : '#1e293b',
      border: `1px solid ${theme === 'dark' ? '#2d3748' : '#cbd5e1'}`,
      marginTop: 10,
      fontSize: 14
    }}>
      🃏 Card component ใช้ theme จาก Context: <strong>{theme}</strong>
    </div>
  )
}

export default function UseContextPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-badge">Hooks</div>
        <h1 className="page-title">useContext — Context API</h1>
        <p className="page-desc">
          แชร์ state ข้าม component โดยไม่ต้องส่ง props ทุก level (แก้ Prop Drilling)
        </p>
      </div>

      <div className="section">
        <div className="section-title">Context Basics</div>
        <CodeBlock code={contextBasicCode} />
      </div>

      <div className="section">
        <div className="section-title">Context Pattern ที่แนะนำ</div>
        <CodeBlock code={contextPatternCode} />
      </div>

      <div className="section">
        <div className="section-title">Interactive Demo</div>
        <div className="demo-box">
          <div className="demo-box-header">Theme Context Demo</div>
          <div className="demo-content">
            <DemoThemeProvider>
              <ThemeButton />
              <ThemedCard />
            </DemoThemeProvider>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Context vs Props — เลือกอันไหน?</div>
        <CodeBlock code={contextVsPropsCode} />
      </div>

      <div className="section">
        <div className="section-title">Interview Q&A</div>
        <QASection items={qaItems} />
      </div>
    </div>
  )
}
