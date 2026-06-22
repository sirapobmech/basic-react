import { useState } from "react";
import "./App.css";

import ArrayPage from "./pages/ArrayPage";
import BuildDeployPage from "./pages/BuildDeployPage";
import CustomHooksPage from "./pages/CustomHooksPage";
import DockerPage from "./pages/DockerPage";
import HomePage from "./pages/HomePage";
import InterviewQAPage from "./pages/InterviewQAPage";
import JSXPage from "./pages/JSXPage";
import MemoPage from "./pages/MemoPage";
import PropsStatePage from "./pages/PropsStatePage";
import React19Page from "./pages/React19Page";
import SQLPage from "./pages/SQLPage";
import NodeJSPage from "./pages/NodeJSPage";
import TypeScriptPage from "./pages/TypeScriptPage";
import UseContextPage from "./pages/UseContextPage";
import UseEffectPage from "./pages/UseEffectPage";
import UseReducerPage from "./pages/UseReducerPage";
import UseRefPage from "./pages/UseRefPage";
import VuePage from "./pages/VuePage";

const navItems = [
  { id: "home", label: "หน้าหลัก", icon: "🏠" },
  { section: "พื้นฐาน" },
  { id: "jsx", label: "JSX & Components", icon: "⚛️" },
  { id: "props", label: "Props & State", icon: "📦" },
  { section: "Hooks" },
  { id: "useeffect", label: "useEffect", icon: "🎣" },
  { id: "usecontext", label: "useContext", icon: "🔗" },
  { id: "useref", label: "useRef", icon: "📎" },
  { id: "memo", label: "useMemo & useCallback", icon: "⚡" },
  { id: "usereducer", label: "useReducer", icon: "🔄" },
  { section: "Advanced" },
  { id: "customhooks", label: "Custom Hooks", icon: "🪝" },
  { id: "react19", label: "React 19 Features", icon: "🚀" },
  { section: "JavaScript" },
  { id: "array", label: "Array Methods", icon: "📋" },
  { section: "Backend" },
  { id: "nodejs", label: "Node.js", icon: "🟩" },
  { section: "Database" },
  { id: "sql", label: "SQL", icon: "🗄️" },
  { section: "TypeScript" },
  { id: "typescript", label: "TypeScript", icon: "📘" },
  { section: "DevOps" },
  { id: "builddeploy", label: "Build → Deploy → Browser", icon: "🚢" },
  { id: "docker", label: "Docker", icon: "🐳" },
  { section: "Vue.js" },
  { id: "vue", label: "Vue 3", icon: "💚" },
  { section: "สัมภาษณ์" },
  { id: "interview", label: "Interview Q&A", icon: "❓" },
];

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
  array: ArrayPage,
  nodejs: NodeJSPage,
  sql: SQLPage,
  builddeploy: BuildDeployPage,
  typescript: TypeScriptPage,
  docker: DockerPage,
  vue: VuePage,
  interview: InterviewQAPage,
};

export default function App() {
  const [activePage, setActivePage] = useState("home");

  const navigate = (id) => {
    setActivePage(id);
    window.scrollTo(0, 0);
  };

  const ActivePage = pages[activePage] || HomePage;

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-title">
            <span>⚛️</span> React Interview
          </div>
          <div className="sidebar-subtitle">
            Welcome to Basic Web Developer Prep · React
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item, i) => {
            if (item.section) {
              return (
                <div key={i} className="nav-section-label">
                  {item.section}
                </div>
              );
            }
            return (
              <div
                key={item.id}
                className={`nav-item ${activePage === item.id ? "active" : ""}`}
                onClick={() => navigate(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            );
          })}
        </nav>
      </aside>

      <main className="main-content">
        <ActivePage onNavigate={navigate} />
      </main>
    </div>
  );
}
