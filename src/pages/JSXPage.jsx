import CodeBlock from '../components/CodeBlock'
import { QASection } from '../components/QA'

const jsxBasicCode = `// JSX คือ syntax extension ของ JavaScript
// ถูกแปลงโดย Babel เป็น React.createElement()

// JSX
const element = <h1 className="title">Hello World</h1>

// เทียบเท่ากับ
const element = React.createElement(
  'h1',
  { className: 'title' },
  'Hello World'
)`

const componentCode = `// Function Component (แนะนำ - modern React)
function Greeting({ name }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Welcome to React</p>
    </div>
  )
}

// Arrow Function Component
const Button = ({ onClick, children, disabled = false }) => (
  <button onClick={onClick} disabled={disabled}>
    {children}
  </button>
)

// การใช้งาน
function App() {
  return (
    <>
      <Greeting name="Sirapob" />
      <Button onClick={() => alert('clicked!')}>
        Click me
      </Button>
    </>
  )
}`

const fragmentCode = `// Fragment ใช้เมื่อต้องการ return หลาย element
// โดยไม่ต้องมี wrapper div

// วิธีที่ 1: React.Fragment
function List() {
  return (
    <React.Fragment>
      <li>Item 1</li>
      <li>Item 2</li>
    </React.Fragment>
  )
}

// วิธีที่ 2: Short syntax (แนะนำ)
function List() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
    </>
  )
}

// Fragment กับ key (ต้องใช้ React.Fragment)
function KeyedList({ items }) {
  return items.map((item) => (
    <React.Fragment key={item.id}>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </React.Fragment>
  ))
}`

const conditionalCode = `function UserStatus({ isLoggedIn, username }) {
  return (
    <div>
      {/* Ternary operator */}
      {isLoggedIn ? (
        <p>Welcome back, {username}!</p>
      ) : (
        <p>Please log in</p>
      )}

      {/* Short-circuit (&&) */}
      {isLoggedIn && <button>Logout</button>}

      {/* Nullish - ซ่อน element */}
      {isLoggedIn && username && (
        <span>👤 {username}</span>
      )}
    </div>
  )
}`

const jsxRulesCode = `// JSX Rules ที่ต้องจำ

// 1. ต้อง return element เดียว (ใช้ Fragment ถ้าต้องการหลาย)
// ❌ Wrong
return <h1>Title</h1><p>Content</p>
// ✅ Correct
return <><h1>Title</h1><p>Content</p></>

// 2. ใช้ className แทน class
// ❌ Wrong
return <div class="box">...</div>
// ✅ Correct
return <div className="box">...</div>

// 3. Self-closing tags ต้องมี /
// ❌ Wrong
return <img src="photo.jpg">
// ✅ Correct
return <img src="photo.jpg" />

// 4. camelCase สำหรับ attributes
// ❌ Wrong
return <div onclick={fn} tabindex="0">...</div>
// ✅ Correct
return <div onClick={fn} tabIndex={0}>...</div>

// 5. JavaScript expression ใน {}
const name = "React"
return <h1>Hello {name.toUpperCase()}!</h1>`

const qaItems = [
  {
    q: 'JSX คืออะไร และทำไม React ถึงใช้ JSX?',
    a: `JSX (JavaScript XML) คือ syntax extension ที่ทำให้เราเขียน HTML-like syntax ใน JavaScript ได้
    <br><br>
    React ใช้ JSX เพราะ:<br>
    • ทำให้ UI code อ่านเข้าใจง่ายขึ้น มองเห็น structure ได้ชัด<br>
    • รวม logic และ UI ไว้ในที่เดียวกัน (component)<br>
    • Babel จะ compile JSX เป็น <code>React.createElement()</code> calls<br><br>
    JSX ไม่ใช่ HTML แต่คล้ายกัน ต้องใช้ <code>className</code> แทน <code>class</code> และ <code>htmlFor</code> แทน <code>for</code>`
  },
  {
    q: 'ความแตกต่างระหว่าง Function Component และ Class Component คืออะไร?',
    a: `<strong>Function Component</strong> (แนะนำใน modern React):<br>
    • เขียนง่ายกว่า เป็น plain function<br>
    • ใช้ Hooks (useState, useEffect, etc.)<br>
    • ไม่มี <code>this</code> keyword ทำให้ logic ง่ายขึ้น<br>
    • Performance ดีกว่าเล็กน้อย<br><br>
    <strong>Class Component</strong> (legacy):<br>
    • ต้อง extend <code>React.Component</code><br>
    • มี lifecycle methods (componentDidMount, etc.)<br>
    • ใช้ <code>this.state</code> และ <code>this.setState()</code><br>
    • ยังใช้ได้แต่ไม่แนะนำสำหรับ code ใหม่`
  },
  {
    q: 'React Fragment คืออะไร ใช้เมื่อไหร่?',
    a: `Fragment คือ wrapper พิเศษที่ไม่สร้าง DOM element จริงๆ<br><br>
    ใช้เมื่อ:<br>
    • Component ต้อง return หลาย element แต่ไม่อยาก wrap ด้วย <code>&lt;div&gt;</code><br>
    • อยู่ใน table (ไม่สามารถมี div กลางได้)<br>
    • ต้องการหลีกเลี่ยง extra DOM nodes<br><br>
    วิธีใช้: <code>&lt;&gt;...&lt;/&gt;</code> หรือ <code>&lt;React.Fragment&gt;...&lt;/React.Fragment&gt;</code><br>
    ถ้าต้องการ <code>key</code> prop ต้องใช้ <code>React.Fragment</code> ยาว`
  }
]

export default function JSXPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-badge">Fundamentals</div>
        <h1 className="page-title">JSX & Components</h1>
        <p className="page-desc">
          พื้นฐานของ React: JSX syntax, การสร้าง Component, และกฎต่างๆ ที่ต้องรู้
        </p>
      </div>

      <div className="section">
        <div className="section-title">JSX คืออะไร?</div>
        <div className="callout callout-info">
          <span className="callout-icon">⚛️</span>
          <span>JSX ถูก compile โดย Babel เป็น <code>React.createElement()</code> — ไม่ใช่ HTML และไม่ใช่ string</span>
        </div>
        <CodeBlock code={jsxBasicCode} />
      </div>

      <div className="section">
        <div className="section-title">Function Components</div>
        <CodeBlock code={componentCode} />
        <div className="callout callout-tip">
          <span className="callout-icon">✅</span>
          <span>ใช้ Function Component เสมอในโปรเจกต์ใหม่ — ทำงานได้ดีกับ Hooks และอ่านง่ายกว่า Class Component</span>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Fragments</div>
        <CodeBlock code={fragmentCode} />
      </div>

      <div className="section">
        <div className="section-title">Conditional Rendering</div>
        <CodeBlock code={conditionalCode} />
      </div>

      <div className="section">
        <div className="section-title">JSX Rules ที่ต้องจำ</div>
        <CodeBlock code={jsxRulesCode} />
      </div>

      <div className="section">
        <div className="section-title">Interview Q&A</div>
        <QASection items={qaItems} />
      </div>
    </div>
  )
}
