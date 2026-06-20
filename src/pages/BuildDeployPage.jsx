import CodeBlock from '../components/CodeBlock'

const writeCodeCode = `// src/App.jsx — สิ่งที่ developer เขียน
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>เพิ่ม</button>
    </div>
  )
}`

const jsxTransformCode = `// JSX ที่เขียน
return (
  <div>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>เพิ่ม</button>
  </div>
)

// SWC/Babel แปลงเป็น JS จริง
return _jsx('div', {
  children: [
    _jsx('h1', { children: count }),
    _jsx('button', {
      onClick: () => setCount(count + 1),
      children: 'เพิ่ม'
    })
  ]
})`

const bundleCode = `// ก่อน bundle — หลายไฟล์แยกกัน
src/main.jsx
src/App.jsx
src/pages/Home.jsx
src/components/Button.jsx
node_modules/react/...

// หลัง bundle — รวมเป็นก้อนเดียว
dist/assets/index-D4uMfRRk.js   ← JS ทั้งหมดรวมกัน
dist/assets/index-D4uMfRRk.css  ← CSS ทั้งหมดรวมกัน`

const optimizeCode = `// Minify — ลบ space, comment, ย่อชื่อตัวแปร
// ก่อน
function handleClick() {
  setCount(count + 1)
}
// หลัง
function h(){s(c+1)}

// Tree Shaking — ตัด code ที่ไม่ได้ใช้ทิ้ง
import { useState, useEffect, useRef } from 'react'
// ถ้าใช้แค่ useState → useEffect, useRef ถูกตัดออก

// ผลลัพธ์
// index.js 2MB → หลัง optimize → 200KB`

const distCode = `// โครงสร้าง dist/ หลัง build
dist/
  index.html               ← HTML หลัก (เกือบว่างเปล่า)
  assets/
    index-D4uMfRRk.js      ← JS ทั้งหมด
    index-D4uMfRRk.css     ← CSS ทั้งหมด

// hash ในชื่อไฟล์ เช่น D4uMfRRk
// ถ้า code เปลี่ยน → hash เปลี่ยน → browser โหลดไฟล์ใหม่
// ถ้า code เหมือนเดิม → hash เหมือนเดิม → browser ใช้ cache ได้เลย`

const htmlCode = `<!-- dist/index.html — สิ่งที่ browser ได้รับ -->
<html>
  <head>
    <link rel="stylesheet" href="/assets/index-D4uMfRRk.css">
  </head>
  <body>
    <div id="root"></div>  <!-- ว่างเปล่า React จะมาใส่เอง -->
    <script src="/assets/index-D4uMfRRk.js"></script>
  </body>
</html>`

const vdomCode = `// React รัน App() และได้ Virtual DOM
// Virtual DOM คือ JS object ธรรมดา — ไม่ใช่ DOM จริง

{
  type: 'div',
  children: [
    { type: 'h1', children: 0 },
    { type: 'button', onClick: fn, children: 'เพิ่ม' }
  ]
}

// ReactDOM แปลง Virtual DOM → DOM จริง
// แล้วใส่เข้าไปใน <div id="root">
<div id="root">
  <div>
    <h1>0</h1>
    <button>เพิ่ม</button>
  </div>
</div>`

const rerenderCode = `// ผู้ใช้กด button
onClick รัน → setCount(1)

// React สร้าง Virtual DOM ใหม่
{
  type: 'div',
  children: [
    { type: 'h1', children: 1 },   ← เปลี่ยน (0 → 1)
    { type: 'button', ... }         ← เหมือนเดิม
  ]
}

// Diffing — เปรียบ Virtual DOM ใหม่กับเก่า
// พบว่า h1 text เปลี่ยน, button ไม่เปลี่ยน

// แก้เฉพาะส่วนที่เปลี่ยนใน DOM จริง
document.querySelector('h1').textContent = '1'
// ไม่ได้ redraw ทั้งหน้า`

export default function BuildDeployPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-badge">DevOps</div>
        <h1 className="page-title">Build → Deploy → Browser</h1>
        <p className="page-desc">
          ขั้นตอนทั้งหมดตั้งแต่เขียน React code จนถึงผู้ใช้เห็นหน้าเว็บ
          และเกิดอะไรขึ้นเมื่อผู้ใช้กดปุ่ม
        </p>
      </div>

      {/* Overview */}
      <div className="section">
        <div className="section-title">ภาพรวม</div>
        <div className="flow-steps">
          {[
            { n: '1', label: 'เขียน Code', sub: 'JSX + Hooks' },
            { n: '2', label: 'npm run build', sub: 'Vite + SWC' },
            { n: '3', label: 'ได้ dist/', sub: 'JS + CSS + HTML' },
            { n: '4', label: 'Deploy', sub: 'Server / CDN' },
            { n: '5', label: 'Browser Request', sub: 'โหลด HTML' },
            { n: '6', label: 'React รัน', sub: 'สร้าง DOM' },
            { n: '7', label: 'ผู้ใช้เห็นหน้าเว็บ', sub: 'Paint' },
            { n: '8', label: 'กด / พิมพ์', sub: 'Re-render' },
          ].map((s, i, arr) => (
            <div key={s.n} className="flow-step-row">
              <div className="flow-step-box">
                <span className="flow-step-num">{s.n}</span>
                <div>
                  <div className="flow-step-label">{s.label}</div>
                  <div className="flow-step-sub">{s.sub}</div>
                </div>
              </div>
              {i < arr.length - 1 && <div className="flow-step-arrow">↓</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Step 1 */}
      <div className="section">
        <div className="section-title">ขั้นที่ 1 — เขียน Code</div>
        <p className="section-desc">
          Developer เขียน JSX และ Hooks ตามปกติ — แต่ browser อ่านไฟล์นี้ไม่ได้โดยตรง
          ทั้ง JSX syntax และ <code>import</code> แบบ ES Module ต้องผ่านการแปลงก่อน
        </p>
        <CodeBlock code={writeCodeCode} lang="jsx" />
      </div>

      {/* Step 2 */}
      <div className="section">
        <div className="section-title">ขั้นที่ 2 — npm run build</div>
        <p className="section-desc">
          Vite ทำงาน 3 อย่างพร้อมกัน — แปลง JSX, รวมไฟล์, และ optimize ขนาด
        </p>

        <div className="sub-section-title">แปลง JSX → JS</div>
        <p className="section-desc">
          SWC (หรือ Babel) แปลง JSX ให้เป็น JS ล้วนๆ เพราะ browser ไม่รู้จัก JSX
          แต่รู้จัก <code>_jsx()</code> ซึ่งเป็น function call ธรรมดา
        </p>
        <CodeBlock code={jsxTransformCode} lang="jsx" />

        <div className="sub-section-title">Bundle — รวมทุกไฟล์</div>
        <p className="section-desc">
          ไฟล์ที่เขียนแยกกันหลายร้อยไฟล์ + library ใน node_modules
          ถูกรวมเป็นไฟล์เดียว ให้ browser โหลดครั้งเดียว
        </p>
        <CodeBlock code={bundleCode} lang="js" />

        <div className="sub-section-title">Optimize — ลดขนาด</div>
        <p className="section-desc">
          Minify ย่อ code ให้สั้นที่สุด, Tree Shaking ตัด code ที่ import มาแต่ไม่ได้ใช้ทิ้ง
          ทำให้ไฟล์เล็กลงมาก โหลดเร็วขึ้น
        </p>
        <CodeBlock code={optimizeCode} lang="js" />
      </div>

      {/* Step 3 */}
      <div className="section">
        <div className="section-title">ขั้นที่ 3 — ผลลัพธ์ใน dist/</div>
        <p className="section-desc">
          หลัง build เสร็จได้โฟลเดอร์ <code>dist/</code> ที่มีแค่ HTML, JS, CSS
          hash ในชื่อไฟล์ช่วยให้ browser cache ได้อย่างถูกต้อง
          — ถ้า code เปลี่ยน hash เปลี่ยน browser โหลดใหม่ ถ้าไม่เปลี่ยนใช้ cache เดิม
        </p>
        <CodeBlock code={distCode} lang="bash" />
      </div>

      {/* Step 4 */}
      <div className="section">
        <div className="section-title">ขั้นที่ 4 — Deploy</div>
        <p className="section-desc">
          copy โฟลเดอร์ <code>dist/</code> ทั้งหมดขึ้น server — server มีหน้าที่แค่ส่งไฟล์เหล่านี้ให้ browser
          ไม่ต้องรัน Node.js หรือ logic อะไรเลย (เพราะเป็น static file ล้วน)
        </p>
        <div className="callout callout-info">
          <span className="callout-icon">📋</span>
          <div>
            ตัวเลือกยอดนิยม: <strong>GitHub Pages</strong> (ฟรี), <strong>Vercel</strong> (ฟรี + auto deploy),
            <strong> Netlify</strong> (ฟรี), <strong>nginx บน VPS</strong> (ควบคุมได้เต็ม)
          </div>
        </div>
      </div>

      {/* Step 5 */}
      <div className="section">
        <div className="section-title">ขั้นที่ 5 — Browser Request</div>
        <p className="section-desc">
          ผู้ใช้พิมพ์ URL → DNS แปลง domain เป็น IP → browser ส่ง request ไปที่ server
          → server ส่ง <code>index.html</code> กลับมา
          → browser เริ่มอ่าน HTML และโหลด JS/CSS ตามที่ระบุ
        </p>
        <CodeBlock code={htmlCode} lang="html" />
        <div className="callout callout-warning">
          <span className="callout-icon">⚠️</span>
          <span>
            ตอนนี้หน้าจอผู้ใช้ยังว่างเปล่า — <code>&lt;div id="root"&gt;</code> ไม่มีอะไรข้างใน
            ต้องรอ JS โหลดและรันก่อน นี่คือข้อเสียของ CSR (Client Side Rendering)
          </span>
        </div>
      </div>

      {/* Step 6 */}
      <div className="section">
        <div className="section-title">ขั้นที่ 6 — React เริ่มทำงาน</div>
        <p className="section-desc">
          JS โหลดเสร็จ React รัน <code>App()</code> และสร้าง Virtual DOM ก่อน
          — Virtual DOM คือ JS object ธรรมดาที่แทน HTML
          เบากว่าสร้าง DOM จริงมาก จากนั้น ReactDOM แปลงเป็น DOM จริงและใส่เข้า <code>#root</code>
        </p>
        <CodeBlock code={vdomCode} lang="js" />
      </div>

      {/* Step 7 */}
      <div className="section">
        <div className="section-title">ขั้นที่ 7 — ผู้ใช้เห็นหน้าเว็บ</div>
        <p className="section-desc">
          DOM พร้อม → browser วาดหน้าจอ (Paint) → ผู้ใช้เห็นหน้าเว็บครั้งแรก
          ทั้งกระบวนการตั้งแต่พิมพ์ URL จนเห็นหน้าเว็บ เรียกว่า <strong>First Contentful Paint (FCP)</strong>
          — ยิ่ง JS ขนาดเล็กและ server ตอบเร็ว FCP ยิ่งเร็ว
        </p>
      </div>

      {/* Step 8 */}
      <div className="section">
        <div className="section-title">ขั้นที่ 8 — ผู้ใช้กดปุ่ม (Re-render)</div>
        <p className="section-desc">
          เมื่อ state เปลี่ยน React ไม่ได้ redraw ทั้งหน้า — สร้าง Virtual DOM ใหม่
          แล้วเปรียบกับของเดิม (Diffing) แก้เฉพาะส่วนที่เปลี่ยนใน DOM จริง
          ทำให้ UI อัปเดตเร็วและไม่กระตุก
        </p>
        <CodeBlock code={rerenderCode} lang="js" />
      </div>

      {/* Key Points */}
      <div className="section">
        <div className="section-title">สรุปจุดสำคัญ</div>
        <table className="comparison-table">
          <thead>
            <tr><th>จุด</th><th>รายละเอียด</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Browser อ่าน JSX ไม่ได้</td>
              <td>ต้องผ่าน build ก่อนเสมอ — browser เห็นแค่ JS ล้วน</td>
            </tr>
            <tr>
              <td>index.html ว่างเปล่า</td>
              <td>CSR — content ถูกสร้างโดย JS หลังโหลด ไม่ใช่จาก server</td>
            </tr>
            <tr>
              <td>Virtual DOM</td>
              <td>JS object แทน HTML ช่วยให้รู้ว่าต้องแก้แค่ไหน ไม่ต้อง redraw ทั้งหน้า</td>
            </tr>
            <tr>
              <td>Hash ในชื่อไฟล์</td>
              <td>ป้องกัน browser ใช้ cache เก่า เมื่อ deploy version ใหม่</td>
            </tr>
            <tr>
              <td>dist/ คือ static file</td>
              <td>server ไม่ต้องรัน Node.js — แค่ส่งไฟล์ให้ browser</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
