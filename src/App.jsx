import { useState } from 'react'
import './App.css'

import HomePage from './pages/HomePage'
import JSXPage from './pages/JSXPage'
import PropsStatePage from './pages/PropsStatePage'
import UseEffectPage from './pages/UseEffectPage'
import UseContextPage from './pages/UseContextPage'
import UseRefPage from './pages/UseRefPage'
import MemoPage from './pages/MemoPage'
import UseReducerPage from './pages/UseReducerPage'
import CustomHooksPage from './pages/CustomHooksPage'
import React19Page from './pages/React19Page'
import InterviewQAPage from './pages/InterviewQAPage'

const navItems = [
  { id: 'home', label: 'หน้าหลัก', icon: '🏠' },
  { section: 'พื้นฐาน' },
  { id: 'jsx', label: 'JSX & Components', icon: '⚛️' },
  { id: 'props', label: 'Props & State', icon: '📦' },
  { section: 'Hooks' },
  { id: 'useeffect', label: 'useEffect', icon: '🎣' },
  { id: 'usecontext', label: 'useContext', icon: '🔗' },
  { id: 'useref', label: 'useRef', icon: '📎' },
  { id: 'memo', label: 'useMemo & useCallback', icon: '⚡' },
  { id: 'usereducer', label: 'useReducer', icon: '🔄' },
  { section: 'Advanced' },
  { id: 'customhooks', label: 'Custom Hooks', icon: '🪝' },
  { id: 'react19', label: 'React 19 Features', icon: '🚀' },
  { section: 'สัมภาษณ์' },
  { id: 'interview', label: 'Interview Q&A', icon: '❓' },
]

const pages = {
  home: HomePage,
  jsx: JSXPage,
  props: PropsStatePage,
  useeffect: UseEffectPage,
  usecontext: UseContextPage,
  useref: UseRefPage,
  memo: MemoPage,
  usereducer: UseReducerPage,
  customhooks: CustomHooksPage,
  react19: React19Page,
  interview: InterviewQAPage,
}

export default function App() {
  const [activePage, setActivePage] = useState('home')

  const navigate = (id) => {
    setActivePage(id)
    window.scrollTo(0, 0)
  }

  const ActivePage = pages[activePage] || HomePage

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-title">
            <span>⚛️</span> React Interview
          </div>
          <div className="sidebar-subtitle">Frontend Developer Prep · React 19</div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item, i) => {
            if (item.section) {
              return <div key={i} className="nav-section-label">{item.section}</div>
            }
            return (
              <div
                key={item.id}
                className={`nav-item ${activePage === item.id ? 'active' : ''}`}
                onClick={() => navigate(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            )
          })}
        </nav>
      </aside>

      <main className="main-content">
        <ActivePage onNavigate={navigate} />
      </main>
    </div>
  )
}
