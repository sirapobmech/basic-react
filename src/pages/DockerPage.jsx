import CodeBlock from '../components/CodeBlock'
import { QASection } from '../components/QA'

const dockerConceptCode = `# Docker มี 3 ส่วนหลักที่ต้องรู้

# 1. Dockerfile — สูตรสร้าง image
# 2. Image — template ที่ build จาก Dockerfile
# 3. Container — instance ที่รันจาก image

# เปรียบเหมือน:
# Dockerfile = สูตรอาหาร
# Image      = อาหารที่ปรุงเสร็จแล้ว
# Container  = อาหารที่กำลังเสิร์ฟอยู่`

const dockerfileCode = `# ==================== Stage 1: Build ====================
FROM node:22-alpine AS builder
# FROM    = เริ่มจาก base image ไหน
# alpine  = Linux ขนาดเล็ก (~5MB)
# AS builder = ตั้งชื่อ stage นี้

WORKDIR /app
# กำหนด folder ทำงานใน container
# เหมือนพิม cd /app

COPY package*.json ./
# copy เฉพาะ package.json ก่อน
# เพื่อ cache — ถ้า package.json ไม่เปลี่ยน
# Docker จะใช้ cache แทน npm install ใหม่

RUN npm install
# ติดตั้ง dependencies
# RUN = รันคำสั่งตอน build

COPY . .
# copy โค้ดที่เหลือทั้งหมด
# ทำหลัง npm install เพื่อ cache optimization

RUN npm run build
# build React → ได้ไฟล์ HTML/CSS/JS ใน dist/

# ==================== Stage 2: Serve ====================
FROM nginx:alpine
# เริ่ม stage ใหม่ด้วย nginx
# ทิ้ง Node.js ไว้ใน stage 1 → image เล็กลงมาก

COPY --from=builder /app/dist /usr/share/nginx/html
# copy เฉพาะ dist/ จาก stage builder
# ใส่ใน folder ที่ nginx เสิร์ฟไฟล์

EXPOSE 80
# บอกว่า container เปิด port 80
# แค่ documentation — ต้องใช้ -p ตอน run`

const dockerIgnoreCode = `# .dockerignore — บอก Docker ว่าอย่า copy อะไรเข้า container
# เหมือน .gitignore แต่สำหรับ Docker

node_modules   # มีแสนไฟล์ Docker install ใหม่เองอยู่ดี
dist           # Docker build ใหม่เอง
.git           # git history ไม่จำเป็น
*.md           # README ไม่จำเป็น
.env           # ไม่ควร copy secret เข้า image!`

const dockerCommandsCode = `# ==================== Image ====================

# Build image จาก Dockerfile
docker build -t my-app .
#             ↑          ↑
#          ชื่อ image   Dockerfile อยู่ที่นี่

# ดู image ทั้งหมดในเครื่อง
docker images

# ลบ image
docker rmi my-app

# ==================== Container ====================

# รัน container
docker run -p 8080:80 my-app
#           ↑    ↑
#     เครื่องเรา container

# รัน background (ไม่ค้าง terminal)
docker run -d -p 8080:80 my-app

# ดู container ที่รันอยู่
docker ps

# ดูทั้งหมด (รวมที่หยุดแล้ว)
docker ps -a

# หยุด container
docker stop <container_id>

# ลบ container
docker rm <container_id>

# ดู log
docker logs <container_id>

# เข้าไปใน container (เหมือน SSH)
docker exec -it <container_id> sh`

const portMappingCode = `# Port Mapping — เชื่อม port เครื่องเรากับ container

docker run -p 8080:80 my-app
#           ↑     ↑
#     เครื่องเรา  container

# เครื่องเรา              Container
# ┌──────────┐            ┌──────────┐
# │          │            │          │
# │  :8080───┼────────────┼──► :80   │
# │          │            │  nginx   │
# └──────────┘            └──────────┘
#        ↑
# Browser เปิด localhost:8080

# รัน 3 container จาก image เดียวกัน
docker run -p 8080:80 my-app   # container 1
docker run -p 8081:80 my-app   # container 2
docker run -p 8082:80 my-app   # container 3
# แต่ละตัวใช้ port 80 ใน container — ไม่ชนกัน!`

const composeCode = `# docker-compose.yml — รันหลาย container พร้อมกัน

services:

  frontend:                    # container 1: React
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend                # รอ backend ขึ้นก่อน

  backend:                     # container 2: Node API
    build: ./backend
    ports:
      - "4000:4000"
    environment:
      - DB_HOST=database       # ชื่อ service ใช้เป็น hostname ได้เลย
      - DB_PORT=5432
    depends_on:
      - database               # รอ database ขึ้นก่อน

  database:                    # container 3: PostgreSQL
    image: postgres:16         # ใช้ image สำเร็จรูปจาก Docker Hub
    environment:
      - POSTGRES_PASSWORD=secret
    volumes:
      - db_data:/var/lib/postgresql/data  # เก็บข้อมูลถาวร

volumes:
  db_data:                     # named volume`

const composeCommandsCode = `# คำสั่ง Docker Compose

docker compose up          # เปิดทุก container
docker compose up -d       # เปิด background
docker compose down        # ปิดทุก container
docker compose up --build  # rebuild แล้วเปิด
docker compose logs        # ดู log ทุก container
docker compose ps          # ดูสถานะทุก container`

const volumeCode = `# Volume — เก็บข้อมูลถาวร

# ปัญหา: Container ถูกลบ → ข้อมูลหายหมด!
docker rm my-db    # ← ข้อมูล database หายเลย 😱

# แก้ด้วย Volume
docker run -v db_data:/var/lib/postgresql/data postgres
#              ↑                    ↑
#         ชื่อ volume          path ใน container

# ข้อมูลเก็บอยู่ใน volume — ลบ container ไม่หาย ✅

# ดู volume ทั้งหมด
docker volume ls

# ลบ volume
docker volume rm db_data`

const cicdCode = `# CI/CD Flow กับ Docker

# 1. Developer push code
git push origin main

# 2. GitHub Actions ทำงานอัตโนมัติ
# .github/workflows/deploy.yml:

name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Build Docker image
        run: docker build -t my-app .

      - name: Push to Docker Hub
        run: |
          docker login -u $\{{ secrets.DOCKER_USER }} -p $\{{ secrets.DOCKER_TOKEN }}
          docker push my-app

# 3. Server pull image มารัน
# docker pull my-app
# docker run -p 80:80 my-app`

const qaItems = [
  {
    q: 'Docker คืออะไร แก้ปัญหาอะไร?',
    a: `Docker คือ platform สำหรับ package และ run application ใน container<br><br>
    ปัญหาที่แก้:<br>
    • "รันได้บนเครื่องฉัน แต่เครื่องเพื่อนพัง" — environment ต่างกัน<br>
    • ติดตั้ง environment ยาก — ใช้แค่ <code>docker compose up</code><br>
    • Deploy บน server ยาก — build ครั้งเดียว รันได้ทุกที่<br>
    • App หลายตัวชนกัน — แยก container อิสระจากกัน`
  },
  {
    q: 'Image กับ Container ต่างกันอย่างไร?',
    a: `<strong>Image:</strong><br>
    • Template หรือ blueprint ของ app<br>
    • Immutable — เปลี่ยนแปลงไม่ได้<br>
    • เหมือน Class ใน OOP<br><br>
    <strong>Container:</strong><br>
    • Instance ที่รันจาก image<br>
    • Mutable — เปลี่ยนแปลงได้ระหว่างรัน<br>
    • ข้อมูลหายเมื่อหยุด (ถ้าไม่มี volume)<br>
    • เหมือน Object ใน OOP<br><br>
    1 Image → สร้าง Container ได้ไม่จำกัด`
  },
  {
    q: 'Multi-stage Build คืออะไร ทำไมต้องใช้?',
    a: `Multi-stage Build แบ่ง Dockerfile เป็นหลาย stage<br><br>
    ตัวอย่าง project นี้:<br>
    • <strong>Stage 1 (builder):</strong> ใช้ Node.js build React app → ได้ dist/<br>
    • <strong>Stage 2 (serve):</strong> ใช้ nginx เสิร์ฟเฉพาะ dist/<br><br>
    ทำไมต้องใช้:<br>
    • Image สุดท้ายไม่มี Node.js ติดมาด้วย<br>
    • ขนาดเล็กลงมาก: Node ~300MB → nginx ~25MB<br>
    • ปลอดภัยขึ้น: ไม่มี build tools ใน production`
  },
  {
    q: 'Docker Compose ใช้เมื่อไหร่?',
    a: `ใช้เมื่อ project มีมากกว่า 1 service<br><br>
    ตัวอย่าง:<br>
    • React + Node API + PostgreSQL<br>
    • App + Redis cache<br>
    • Microservices หลายตัว<br><br>
    ข้อดี:<br>
    • รันทุก service ด้วย <code>docker compose up</code> คำสั่งเดียว<br>
    • สร้าง network ให้ container คุยกันอัตโนมัติ<br>
    • กำหนด depends_on เพื่อควบคุมลำดับการขึ้น`
  },
  {
    q: 'Volume คืออะไร ทำไมต้องใช้?',
    a: `Volume คือพื้นที่เก็บข้อมูลถาวรนอก container<br><br>
    ปัญหา: container ถูกลบ → ข้อมูลทั้งหมดหาย<br><br>
    Volume แก้ปัญหานี้โดย:<br>
    • เก็บข้อมูลไว้นอก container<br>
    • ลบ container ไปก็ยังมีข้อมูล<br>
    • หลาย container แชร์ข้อมูลกันได้<br><br>
    ใช้กับ: database, file uploads, logs`
  },
  {
    q: '.dockerignore คืออะไร ทำไมต้องมี?',
    a: `เหมือน <code>.gitignore</code> แต่สำหรับ Docker<br><br>
    บอก Docker ว่าอย่า copy ไฟล์ไหนเข้า container<br><br>
    ไฟล์ที่ควรใส่:<br>
    • <code>node_modules</code> — มีแสนไฟล์ ทำให้ build ช้ามาก<br>
    • <code>dist</code> — Docker build ใหม่เองอยู่ดี<br>
    • <code>.git</code> — git history ไม่จำเป็น<br>
    • <code>.env</code> — ห้าม copy secret เข้า image เด็ดขาด!`
  }
]

const buildFlowCode = `# ขั้นตอนที่ 1: docker build -t interview-react .
# Docker อ่าน Dockerfile ทีละ step:

Step 1: FROM node:22-alpine AS builder
  → โหลด Node.js 22 image จาก Docker Hub

Step 2: WORKDIR /app
  → สร้าง folder /app ใน container

Step 3: COPY package*.json ./
  → /app/package.json
  → /app/package-lock.json

Step 4: RUN npm install
  → ติดตั้ง react, vite และ library ทั้งหมด
  → /app/node_modules/ (มีแสนไฟล์)

Step 5: COPY . .
  → /app/src/
  → /app/index.html
  → /app/vite.config.js

Step 6: RUN npm run build
  → vite build → ได้ไฟล์ที่ /app/dist/
  → /app/dist/index.html
  → /app/dist/assets/index-xxx.js   (React ทั้งหมดรวมเป็นไฟล์เดียว)
  → /app/dist/assets/index-xxx.css

# ==================== เปลี่ยน Stage ====================

Step 7: FROM nginx:alpine
  → เริ่มใหม่ด้วย nginx
  → ทิ้ง Node.js + node_modules ทั้งหมด (~300MB → ~25MB)

Step 8: COPY --from=builder /app/dist /usr/share/nginx/html
  → copy เฉพาะ dist/ มาใส่ nginx`

const imageContentCode = `# Image ที่ได้หลัง build เสร็จ
# ดูได้ด้วย: docker images

REPOSITORY        TAG      SIZE
interview-react   latest   25MB   ← เล็กมาก ไม่มี Node.js ติดมา

# ข้างใน image มีแค่:
interview-react (image)
├── Linux alpine
├── nginx
└── /usr/share/nginx/html/
    ├── index.html              ← หน้าเว็บหลัก
    └── assets/
        ├── index-xxx.js        ← React ทั้งหมด
        │   (รวม HomePage, DockerPage,
        │    JSXPage, PropsStatePage ฯลฯ)
        └── index-xxx.css       ← Style ทั้งหมด

# ไม่มี: src/, node_modules/, package.json`

const runFlowCode = `# ขั้นตอนที่ 2: docker run -p 8080:80 interview-react

1. Docker หา image ชื่อ "interview-react" ในเครื่อง
2. สร้าง Container จาก image นั้น
3. nginx เริ่มทำงาน listen port 80
4. เจาะรู port 8080 (เครื่องเรา) → 80 (container)
5. พร้อมรับ request ✅

# Container ที่รันอยู่มีหน้าตาแบบนี้:
┌──────────────────────────────────────┐
│  nginx (process กำลังทำงาน)          │
│                                      │
│  /usr/share/nginx/html/              │
│  ├── index.html                      │
│  └── assets/                         │
│      ├── index-xxx.js  (React app)   │
│      └── index-xxx.css               │
│                                      │
│  port 80 ──────────────► port 8080   │
│        (ใน container)    (เครื่องเรา) │
└──────────────────────────────────────┘

# ดู container ที่รันอยู่
docker ps

CONTAINER ID   IMAGE             STATUS        PORTS
a1b2c3d4e5f6   interview-react   Up 5 minutes  0.0.0.0:8080->80/tcp`

const browserFlowCode = `# เปิด Browser localhost:8080 — เกิดอะไรขึ้น?

Browser พิม localhost:8080
       │
       ▼
Docker mapping 8080 → 80
       │
       ▼
nginx รับ request
       │
       ├── ขอ /             → ส่ง index.html
       ├── ขอ /assets/xx.js → ส่ง React bundle
       └── ขอ /assets/xx.css → ส่ง CSS
       │
       ▼
Browser รัน React
       │
       ├── แสดง Sidebar
       ├── แสดง HomePage
       └── คลิก Docker → แสดง DockerPage ✅`

export default function DockerPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-badge">DevOps</div>
        <h1 className="page-title">Docker</h1>
        <p className="page-desc">
          ทำความเข้าใจ Docker ตั้งแต่ concept พื้นฐาน จนถึงการใช้งานจริงใน project
        </p>
      </div>

      <div className="section">
        <div className="section-title">Docker คืออะไร?</div>
        <div className="callout callout-info">
          <span className="callout-icon">🐳</span>
          <span>Docker แก้ปัญหา <strong>"รันได้บนเครื่องฉัน แต่เครื่องเพื่อนพัง"</strong> ด้วยการ package app พร้อม environment ทุกอย่างไว้ใน container</span>
        </div>
        <CodeBlock code={dockerConceptCode} lang="bash" />

        <table className="comparison-table">
          <thead>
            <tr>
              <th>Docker</th>
              <th>เปรียบเหมือน</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>Dockerfile</code></td><td>สูตรอาหาร</td></tr>
            <tr><td><code>Image</code></td><td>อาหารที่ปรุงเสร็จแล้ว</td></tr>
            <tr><td><code>Container</code></td><td>อาหารที่กำลังเสิร์ฟอยู่</td></tr>
            <tr><td><code>Docker Hub</code></td><td>ร้านสูตรอาหารสำเร็จรูป (online)</td></tr>
            <tr><td><code>Volume</code></td><td>กล่องเก็บของที่อยู่นอกร้าน</td></tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <div className="section-title">Dockerfile — อธิบายทุกบรรทัด</div>
        <div className="callout callout-tip">
          <span className="callout-icon">✅</span>
          <span>Project นี้ใช้ <strong>Multi-stage Build</strong> — แบ่งเป็น 2 stage ทำให้ image สุดท้ายเล็กมาก (~25MB แทนที่จะเป็น ~300MB)</span>
        </div>
        <CodeBlock code={dockerfileCode} lang="dockerfile" />
      </div>

      <div className="section">
        <div className="section-title">.dockerignore</div>
        <CodeBlock code={dockerIgnoreCode} lang="bash" />
      </div>

      <div className="section">
        <div className="section-title">คำสั่งที่ใช้บ่อย</div>
        <CodeBlock code={dockerCommandsCode} lang="bash" />
      </div>

      <div className="section">
        <div className="section-title">Port Mapping</div>
        <div className="callout callout-info">
          <span className="callout-icon">🔌</span>
          <span>Container เป็น "โลกปิด" — ต้องเจาะรูเชื่อม port เครื่องเรากับ container ด้วย <code>-p เครื่องเรา:container</code></span>
        </div>
        <CodeBlock code={portMappingCode} lang="bash" />
      </div>

      <div className="section">
        <div className="section-title">Volume — เก็บข้อมูลถาวร</div>
        <div className="callout callout-warn">
          <span className="callout-icon">⚠️</span>
          <span>ข้อมูลใน container หายเมื่อหยุด — ต้องใช้ Volume ถ้าต้องการเก็บข้อมูลถาวร เช่น database</span>
        </div>
        <CodeBlock code={volumeCode} lang="bash" />
      </div>

      <div className="section">
        <div className="section-title">Docker Compose — รันหลาย Service</div>
        <CodeBlock code={composeCode} lang="yaml" />
        <CodeBlock code={composeCommandsCode} lang="bash" />
      </div>

      <div className="section">
        <div className="section-title">CI/CD กับ Docker</div>
        <CodeBlock code={cicdCode} lang="yaml" />
      </div>

      <div className="section">
        <div className="section-title">Build Flow — ทีละ Step</div>
        <div className="callout callout-info">
          <span className="callout-icon">🔨</span>
          <span>ทุกครั้งที่รัน <code>docker build</code> Docker ทำตาม Dockerfile ทีละบรรทัด จนได้ image สำเร็จ</span>
        </div>
        <CodeBlock code={buildFlowCode} lang="bash" />
      </div>

      <div className="section">
        <div className="section-title">Image ที่ได้ — มีอะไรข้างใน?</div>
        <CodeBlock code={imageContentCode} lang="bash" />
        <div className="callout callout-tip">
          <span className="callout-icon">✅</span>
          <span>Multi-stage Build ทำให้ image เล็กมาก — มีแค่ nginx + ไฟล์ที่ต้องใช้จริงๆ ไม่มี Node.js หรือ node_modules ติดมา</span>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Run Flow — Container ทำงานยังไง?</div>
        <CodeBlock code={runFlowCode} lang="bash" />
      </div>

      <div className="section">
        <div className="section-title">Browser → Container — Flow ทั้งหมด</div>
        <CodeBlock code={browserFlowCode} lang="bash" />
      </div>

      <div className="section">
        <div className="section-title">Interview Q&A</div>
        <QASection items={qaItems} />
      </div>
    </div>
  )
}
