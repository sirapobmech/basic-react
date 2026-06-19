# ==================== Stage 1: Build ====================
# ใช้ Node 22 เพื่อ build project
FROM node:22-alpine AS builder

# กำหนด folder ทำงานใน container
WORKDIR /app

# copy package.json ก่อน (trick: ถ้า package.json ไม่เปลี่ยน จะใช้ cache)
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# copy โค้ดที่เหลือทั้งหมด
COPY . .

# build project ได้ไฟล์ HTML/CSS/JS ที่ dist/
RUN npm run build

# ==================== Stage 2: Serve ====================
# ใช้ nginx เพื่อ serve ไฟล์ที่ build แล้ว (เล็กกว่า Node มาก)
FROM nginx:alpine

# copy ไฟล์ที่ build แล้วจาก Stage 1 ไปไว้ใน nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# เปิด port 80
EXPOSE 80

# nginx จะ start อัตโนมัติ
