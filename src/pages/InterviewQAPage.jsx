import { useState } from 'react'
import { QASection } from '../components/QA'

const fundamentalQA = [
  {
    q: 'Virtual DOM คืออะไร และทำงานอย่างไร?',
    a: `Virtual DOM คือ representation ของ UI ที่เก็บใน memory ในรูปแบบ JavaScript object<br><br>
    กระบวนการทำงาน (Reconciliation):<br>
    1. เมื่อ state เปลี่ยน React สร้าง Virtual DOM ใหม่<br>
    2. Diff กับ Virtual DOM เก่า (Diffing algorithm)<br>
    3. Calculate minimum changes ที่ต้องทำกับ Real DOM<br>
    4. Batch apply changes ไปยัง Real DOM (Commit phase)<br><br>
    ข้อดี: Real DOM manipulation แพง (reflow, repaint) — Virtual DOM ช่วยลด DOM operations ที่ไม่จำเป็น`
  },
  {
    q: 'React Reconciliation คืออะไร?',
    a: `Reconciliation คือ process ที่ React ใช้เปรียบเทียบ Virtual DOM tree ใหม่กับเก่า แล้วอัปเดตเฉพาะส่วนที่เปลี่ยน<br><br>
    React ใช้ Heuristics:<br>
    • Elements ต่าง type → destroy ทิ้ง สร้างใหม่ทั้งหมด<br>
    • Elements type เดิม → update attributes เฉพาะที่เปลี่ยน<br>
    • Lists → ใช้ <code>key</code> prop เพื่อ track แต่ละ element<br><br>
    React Fiber (React 16+) ทำให้ reconciliation สามารถ pause/resume ได้ → ไม่ block main thread`
  },
  {
    q: 'key prop ใน list คืออะไร และทำไมต้องใส่?',
    a: `<code>key</code> ช่วย React ระบุ element ใน list ว่า element ไหนเปลี่ยน ถูกเพิ่ม หรือถูกลบ<br><br>
    ❌ ไม่ควรใช้ array index เป็น key เมื่อ list อาจ reorder:<br>
    → State ของ component อาจ map ผิดตัว เช่น input value อยู่ผิด item<br><br>
    ✅ ใช้ unique, stable ID:<br>
    <code>{items.map(item => &lt;Item key={item.id} /&gt;)}</code><br><br>
    ถ้าไม่มี ID: ใช้ crypto.randomUUID() ตอนสร้าง item (ไม่ใช่ตอน render!)`
  },
  {
    q: 'React Re-render เกิดเมื่อไหร่?',
    a: `Component re-render เมื่อ:<br>
    1. <strong>State เปลี่ยน</strong> — ผ่าน setState หรือ dispatch<br>
    2. <strong>Props เปลี่ยน</strong> — parent ส่ง prop ใหม่<br>
    3. <strong>Context เปลี่ยน</strong> — value ของ Provider เปลี่ยน<br>
    4. <strong>Parent re-render</strong> — ทุก child re-render ด้วย (ถ้าไม่มี memo)<br><br>
    ลด unnecessary re-renders:<br>
    • <code>React.memo</code> — memoize component<br>
    • <code>useMemo/useCallback</code> — stable references<br>
    • Split context — แยก context ที่เปลี่ยนบ่อย`
  }
]

const hooksQA = [
  {
    q: 'useState vs useReducer — เลือกอันไหน?',
    a: `<strong>useState:</strong> เหมาะกับ state simple, เป็น primitive (string, number, boolean) หรือ object ที่ logic ไม่ซับซ้อน<br><br>
    <strong>useReducer:</strong> เหมาะกับ:<br>
    • State object ที่มีหลาย fields เปลี่ยนพร้อมกัน<br>
    • Logic update ซับซ้อน (ขึ้นอยู่กับ action หลายประเภท)<br>
    • ต้องการ test logic แยกออกจาก component<br>
    • State ถัดไปขึ้นอยู่กับ state ปัจจุบันหลายๆ ส่วน`
  },
  {
    q: 'Closure ใน Hook เป็นปัญหาอย่างไร (Stale Closure)?',
    a: `Stale Closure เกิดเมื่อ Hook closure จับค่าเก่าของ state หรือ props<br><br>
    ตัวอย่าง:<br>
    <code>useEffect(() => {<br>
    &nbsp;&nbsp;const id = setInterval(() => console.log(count), 1000)<br>
    &nbsp;&nbsp;return () => clearInterval(id)<br>
    }, []) // count ถูก capture ค่า 0 ตลอดเวลา!</code><br><br>
    แก้ด้วย:<br>
    • ใส่ dependency ให้ครบ: <code>}, [count])</code><br>
    • Functional update: <code>setCount(prev => prev + 1)</code><br>
    • useRef เก็บ latest value`
  },
  {
    q: 'ความแตกต่างระหว่าง useEffect และ useLayoutEffect?',
    a: `<strong>useEffect:</strong><br>
    • ทำงานหลัง browser paint (asynchronous)<br>
    • UI แสดงผลก่อน effect ทำงาน<br>
    • ใช้กับ: fetch, subscriptions, timers<br><br>
    <strong>useLayoutEffect:</strong><br>
    • ทำงานหลัง DOM update แต่ก่อน browser paint (synchronous)<br>
    • Block browser จน effect เสร็จ<br>
    • ใช้กับ: วัด DOM size/position, animation ที่ต้องไม่กระพริบ<br><br>
    Rule: ใช้ useEffect เป็น default, switch เป็น useLayoutEffect เมื่อเห็น flickering`
  }
]

const performanceQA = [
  {
    q: 'Code Splitting คืออะไร ทำใน React อย่างไร?',
    a: `Code Splitting แบ่ง JavaScript bundle เป็นหลายไฟล์ โหลดเฉพาะที่ต้องการ<br><br>
    ใน React ใช้ <code>React.lazy</code> + <code>Suspense</code>:<br>
    <code>const Dashboard = React.lazy(() => import('./Dashboard'))</code><br><br>
    <code>function App() {<br>
    &nbsp;&nbsp;return (<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Suspense fallback={&lt;Loading /&gt;}&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Dashboard /&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Suspense&gt;<br>
    &nbsp;&nbsp;)<br>
    }</code><br><br>
    ผลลัพธ์: Dashboard.js โหลดเฉพาะเมื่อ component ถูก render ครั้งแรก`
  },
  {
    q: 'ทำไม prop เป็น object/array ถึงทำให้ React.memo ไม่ทำงาน?',
    a: `เพราะ JavaScript เปรียบเทียบ object/array ด้วย reference ไม่ใช่ value<br><br>
    <code>{ a: 1 } === { a: 1 } // false! คนละ reference</code><br><br>
    ทุก render parent สร้าง object ใหม่ → memo เห็นว่า props "เปลี่ยน" → re-render<br><br>
    แก้ด้วย:<br>
    • <code>useMemo</code> สำหรับ object/array<br>
    • <code>useCallback</code> สำหรับ function<br>
    • ย้าย constant ออกนอก component (ถ้าไม่ขึ้นกับ state)`
  }
]

const architectureQA = [
  {
    q: 'Controlled vs Uncontrolled Component คืออะไร?',
    a: `<strong>Controlled Component:</strong><br>
    • React state เป็น "source of truth" ของ input<br>
    • ต้องมี <code>value</code> + <code>onChange</code><br>
    • ทำ validation, formatting ได้ทันที<br>
    • Code เยอะกว่าเล็กน้อย<br><br>
    <strong>Uncontrolled Component:</strong><br>
    • DOM จัดการ state เอง<br>
    • ใช้ ref เพื่อดึงค่า<br>
    • เหมาะกับ file input, หรือ integrate กับ non-React library<br>
    • Code น้อยกว่า แต่ control น้อยกว่า`
  },
  {
    q: 'Compound Component Pattern คืออะไร?',
    a: `Pattern ที่ component หลายตัวทำงานร่วมกันผ่าน shared state (ผ่าน Context)<br><br>
    เช่น HTML <code>&lt;select&gt;</code> + <code>&lt;option&gt;</code><br><br>
    <code>// การใช้งาน<br>
    &lt;Tabs&gt;<br>
    &nbsp;&nbsp;&lt;Tabs.List&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Tabs.Tab&gt;Home&lt;/Tabs.Tab&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Tabs.Tab&gt;Settings&lt;/Tabs.Tab&gt;<br>
    &nbsp;&nbsp;&lt;/Tabs.List&gt;<br>
    &nbsp;&nbsp;&lt;Tabs.Panel&gt;Home content&lt;/Tabs.Panel&gt;<br>
    &lt;/Tabs&gt;</code><br><br>
    ข้อดี: Flexible API, consumer control layout เอง, state ซ่อนอยู่ใน parent`
  },
  {
    q: 'Error Boundary คืออะไร?',
    a: `Error Boundary คือ Class Component ที่ catch JavaScript errors ใน subtree<br><br>
    ใช้ <code>componentDidCatch</code> และ <code>getDerivedStateFromError</code><br><br>
    ในปัจจุบันต้องเป็น Class Component (ยังไม่มี Hook version)<br>
    แต่ library เช่น <code>react-error-boundary</code> ทำให้ใช้ง่ายขึ้น<br><br>
    React 19 มี <code>useErrorBoundary</code> Hook ที่ยังอยู่ในการพัฒนา`
  }
]

const categories = [
  { id: 'fundamental', label: '⚛️ Fundamentals', items: fundamentalQA },
  { id: 'hooks', label: '🎣 Hooks', items: hooksQA },
  { id: 'performance', label: '⚡ Performance', items: performanceQA },
  { id: 'architecture', label: '🏗️ Architecture', items: architectureQA },
]

export default function InterviewQAPage() {
  const [activeCategory, setActiveCategory] = useState('fundamental')
  const active = categories.find(c => c.id === activeCategory)

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-badge">Interview Prep</div>
        <h1 className="page-title">Interview Q&A</h1>
        <p className="page-desc">
          คำถามสัมภาษณ์ Frontend Developer ที่พบบ่อย พร้อมคำตอบที่ครอบคลุม
        </p>
      </div>

      <div className="callout callout-tip">
        <span className="callout-icon">💡</span>
        <span>คลิกที่คำถามเพื่อดูคำตอบ ลองตอบเองก่อนเปิดดู</span>
      </div>

      <div className="tag-list" style={{ marginBottom: 24 }}>
        {categories.map(cat => (
          <button
            key={cat.id}
            className="tag-item"
            style={{
              cursor: 'pointer',
              background: activeCategory === cat.id
                ? 'rgba(97,218,251,0.15)'
                : 'rgba(97,218,251,0.05)',
              color: activeCategory === cat.id ? '#61dafb' : '#4b5563',
              border: activeCategory === cat.id
                ? '1px solid rgba(97,218,251,0.4)'
                : '1px solid #1e2535',
              fontFamily: 'inherit',
              fontSize: 13,
              padding: '6px 14px',
              transition: 'all 0.15s',
            }}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <QASection items={active.items} />

      <div className="section" style={{ marginTop: 40 }}>
        <div className="section-title">Tips สำหรับการสัมภาษณ์</div>
        <div className="callout callout-info">
          <span className="callout-icon">🎯</span>
          <div>
            <strong>STAR Method:</strong> Situation → Task → Action → Result<br />
            อธิบายด้วยตัวอย่างจากประสบการณ์จริงเสมอ ไม่ใช่แค่ theory
          </div>
        </div>
        <div className="callout callout-tip">
          <span className="callout-icon">✅</span>
          <div>
            <strong>ถ้าไม่แน่ใจ:</strong> พูดสิ่งที่รู้ก่อน แล้วบอกว่า "ถ้าผมจำไม่ผิด..." หรือ "ผมจะต้องตรวจสอบเพิ่มเติม"<br />
            Interviewer ประเมิน thinking process ไม่ใช่แค่คำตอบ
          </div>
        </div>
        <div className="callout callout-warn">
          <span className="callout-icon">⚠️</span>
          <div>
            <strong>Avoid:</strong> ท่อง API โดยไม่เข้าใจ concept — Interviewer จะถามต่อเสมอ<br />
            ควรเข้าใจ "ทำไม" มากกว่า "อย่างไร"
          </div>
        </div>
      </div>
    </div>
  )
}
