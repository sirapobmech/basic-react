const topics = [
  { icon: '⚛️', title: 'JSX & Components', desc: 'JSX syntax, Function components, Fragments', id: 'jsx' },
  { icon: '📦', title: 'Props & State', desc: 'Passing data, useState, controlled components', id: 'props' },
  { icon: '🎣', title: 'useEffect', desc: 'Side effects, cleanup, dependency array', id: 'useeffect' },
  { icon: '🔗', title: 'useContext', desc: 'Context API, sharing state globally', id: 'usecontext' },
  { icon: '📎', title: 'useRef', desc: 'DOM refs, mutable values without re-render', id: 'useref' },
  { icon: '⚡', title: 'useMemo & useCallback', desc: 'Memoization, performance optimization', id: 'memo' },
  { icon: '🔄', title: 'useReducer', desc: 'Complex state management, Redux-like pattern', id: 'usereducer' },
  { icon: '🪝', title: 'Custom Hooks', desc: 'Reusable logic, composition pattern', id: 'customhooks' },
  { icon: '🚀', title: 'React 19 Features', desc: 'use(), Actions, Compiler, Server Components', id: 'react19' },
  { icon: '📋', title: 'Array Methods', desc: 'map, filter, reduce, sort, flatMap, React patterns', id: 'array' },
  { icon: '📘', title: 'TypeScript', desc: 'Types, Interface, Generics, Utility Types, React+TS', id: 'typescript' },
  { icon: '🗄️', title: 'SQL', desc: 'SELECT, JOIN, GROUP BY, CTE, Window Functions, Index', id: 'sql' },
  { icon: '🐳', title: 'Docker', desc: 'Container, Image, Dockerfile, Compose, CI/CD', id: 'docker' },
  { icon: '❓', title: 'Interview Q&A', desc: 'คำถามสัมภาษณ์ที่พบบ่อย พร้อมคำตอบ', id: 'interview' },
]

export default function HomePage({ onNavigate }) {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-badge">React 19</div>
        <h1 className="page-title">React Interview Review</h1>
        <p className="page-desc">
          ทบทวนความรู้ React ที่จำเป็นสำหรับการสัมภาษณ์ Frontend Developer
          ครอบคลุมตั้งแต่พื้นฐานจนถึงฟีเจอร์ใหม่ใน React 19
        </p>
      </div>

      <div className="callout callout-info">
        <span className="callout-icon">💡</span>
        <span>
          เลือกหัวข้อที่ต้องการทบทวนจาก sidebar ด้านซ้าย หรือคลิกที่ card ด้านล่างได้เลย
          แต่ละหัวข้อมีตัวอย่าง code และ demo แบบ interactive
        </span>
      </div>

      <div className="home-grid">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="home-card"
            onClick={() => onNavigate(topic.id)}
          >
            <div className="home-card-icon">{topic.icon}</div>
            <div className="home-card-title">{topic.title}</div>
            <div className="home-card-desc">{topic.desc}</div>
          </div>
        ))}
      </div>

      <div className="section" style={{ marginTop: '40px' }}>
        <div className="section-title">React Version ที่ใช้ในโปรเจกต์นี้</div>
        <div className="tag-list">
          <span className="tag-item tag-blue">React 19.2.6</span>
          <span className="tag-item tag-green">Vite 8.0</span>
          <span className="tag-item tag-purple">Node 22</span>
          <span className="tag-item tag-orange">ESModule</span>
        </div>
      </div>
    </div>
  )
}
