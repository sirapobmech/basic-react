import { useState } from 'react'

export function QAItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="qa-item">
      <div
        className={`qa-question ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <span>💬 {question}</span>
        <span className={`qa-chevron ${open ? 'open' : ''}`}>▼</span>
      </div>
      {open && (
        <div className="qa-answer" dangerouslySetInnerHTML={{ __html: answer }} />
      )}
    </div>
  )
}

export function QASection({ items }) {
  return (
    <div>
      {items.map((item, i) => (
        <QAItem key={i} question={item.q} answer={item.a} />
      ))}
    </div>
  )
}
