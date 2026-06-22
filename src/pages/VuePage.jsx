import CodeBlock from '../components/CodeBlock'
import { QASection } from '../components/QA'

const sfcCode = `<!-- Single File Component (.vue) — โครงสร้างพื้นฐาน -->
<!-- ทุกอย่างอยู่ในไฟล์เดียว แยกเป็น 3 ส่วน -->

<template>
  <!-- HTML ของ component นี้ -->
  <h1>{{ message }}</h1>
  <button @click="changeMessage">เปลี่ยน</button>
</template>

<script setup>
// JavaScript — ใช้ Composition API
import { ref } from 'vue'

const message = ref('Hello Vue!')

function changeMessage() {
  message.value = 'สวัสดี Vue!'
}
</script>

<style scoped>
/* CSS เฉพาะ component นี้ — ไม่รั่วออกไปนอก */
h1 { color: #42b883; }
</style>`

const refReactiveCode = `// ref — ใช้กับค่าเดี่ยว (primitive)
import { ref, reactive } from 'vue'

const count  = ref(0)          // number
const name   = ref('Alice')    // string
const isOpen = ref(false)      // boolean
const items  = ref([])         // array

// ต้องใช้ .value ใน script
count.value++
name.value = 'Bob'
items.value = [...items.value, 'new item']

// ใน template ไม่ต้องใส่ .value — Vue แกะให้อัตโนมัติ
// <p>{{ count }}</p>   → แสดงค่า count ได้เลย

// reactive — ใช้กับ object ที่มีหลาย property
const form = reactive({
  username: '',
  password: '',
  remember: false
})

// แก้ตรงได้เลย ไม่มี .value
form.username = 'alice'
form.remember = true`

const templateCode = `<!-- Template Syntax — วิธีเขียน HTML ใน Vue -->

<template>
  <!-- แสดงค่าตัวแปร -->
  <p>{{ message }}</p>
  <p>{{ count * 2 }}</p>
  <p>{{ isAdmin ? 'Admin' : 'User' }}</p>

  <!-- v-bind — bind ค่าให้ attribute (:คือ shorthand) -->
  <img :src="imageUrl" :alt="imageAlt">
  <button :disabled="isLoading">Submit</button>
  <div :class="{ active: isActive, hidden: !isVisible }">...</div>

  <!-- v-on — bind event (@คือ shorthand) -->
  <button @click="handleClick">คลิก</button>
  <button @click="count++">เพิ่ม</button>
  <input @keyup.enter="submit">

  <!-- v-model — two-way binding (แทน value + onChange ใน React) -->
  <input v-model="name">
  <input type="checkbox" v-model="isChecked">
  <select v-model="selected">
    <option value="a">A</option>
    <option value="b">B</option>
  </select>

  <!-- v-if / v-else — แสดง/ซ่อน (ลบออกจาก DOM) -->
  <p v-if="count > 0">มีค่า</p>
  <p v-else-if="count === 0">เป็นศูนย์</p>
  <p v-else>ติดลบ</p>

  <!-- v-show — แสดง/ซ่อน (แค่ display:none ยังอยู่ใน DOM) -->
  <p v-show="isVisible">ยังอยู่ใน DOM แค่ซ่อน</p>

  <!-- v-for — loop (ต้องมี :key เสมอ) -->
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>`

const computedWatchCode = `// Computed — คำนวณค่าจาก reactive data (เหมือน useMemo ใน React)
import { ref, computed, watch, watchEffect } from 'vue'

const firstName = ref('John')
const lastName  = ref('Doe')

// computed คำนวณใหม่เมื่อ dependency เปลี่ยน
// cache ไว้ — ถ้า firstName/lastName ไม่เปลี่ยน ไม่คำนวณซ้ำ
const fullName = computed(() => \`\${firstName.value} \${lastName.value}\`)

// ใน template: {{ fullName }}  → 'John Doe'

const items = ref([1, 2, 3, 4, 5])
const evenItems = computed(() => items.value.filter(i => i % 2 === 0))

// watch — ดูการเปลี่ยนแปลงของ reactive value (เหมือน useEffect ใน React)
const count = ref(0)

// รันเมื่อ count เปลี่ยน
watch(count, (newVal, oldVal) => {
  console.log(\`เปลี่ยนจาก \${oldVal} → \${newVal}\`)
})

// watchEffect — track อัตโนมัติ ไม่ต้องระบุ dependency
watchEffect(() => {
  console.log('count ตอนนี้คือ:', count.value)
  // Vue รู้เองว่า depend on count
})`

const lifecycleCode = `// Lifecycle Hooks — เหมือน useEffect แต่แยกชัดเจน
import {
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount
} from 'vue'

// onMounted — หลัง DOM พร้อม (เหมือน useEffect(() => {}, []))
onMounted(() => {
  console.log('component mount แล้ว DOM พร้อม')
  fetchData()   // เหมาะกับการดึงข้อมูลครั้งแรก
})

// onUpdated — หลัง reactive data เปลี่ยนและ DOM update แล้ว
onUpdated(() => {
  console.log('มีอะไรเปลี่ยนและ DOM update แล้ว')
})

// onUnmounted — ก่อน component ถูกลบออกจาก DOM
// ใช้ cleanup เช่น clearInterval, removeEventListener
onUnmounted(() => {
  clearInterval(timer)
  console.log('component ถูกลบออกแล้ว')
})

// เปรียบกับ React
// onMounted    ≈ useEffect(() => {}, [])
// onUpdated    ≈ useEffect(() => {})
// onUnmounted  ≈ return () => {} ใน useEffect`

const propsEmitCode = `<!-- Parent Component -->
<template>
  <UserCard
    :name="userName"
    :age="userAge"
    @delete="handleDelete"
    @update="handleUpdate"
  />
</template>

<script setup>
import UserCard from './UserCard.vue'
const userName = ref('Alice')
const userAge  = ref(25)

function handleDelete(id) { console.log('ลบ user:', id) }
function handleUpdate(data) { console.log('อัปเดต:', data) }
</script>

<!-- UserCard.vue — Child Component -->
<template>
  <div class="card">
    <h2>{{ name }}</h2>
    <p>อายุ: {{ age }}</p>
    <button @click="emit('delete', userId)">ลบ</button>
    <button @click="emit('update', { name, age })">บันทึก</button>
  </div>
</template>

<script setup>
// defineProps — รับ props จาก parent (เหมือน interface Props ใน React)
const props = defineProps({
  name: { type: String, required: true },
  age:  { type: Number, default: 0 }
})

// defineEmits — ประกาศ event ที่ส่งออกไปหา parent
const emit = defineEmits(['delete', 'update'])

// เข้าถึง props
console.log(props.name)
</script>`

const composableCode = `// Composable — เหมือน Custom Hook ใน React
// แยก logic ที่ใช้ซ้ำออกเป็นไฟล์

// composables/useFetch.js
import { ref } from 'vue'

export function useFetch(url) {
  const data    = ref(null)
  const loading = ref(false)
  const error   = ref(null)

  async function fetch() {
    loading.value = true
    try {
      const res  = await window.fetch(url)
      data.value = await res.json()
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  fetch()   // เรียกทันทีที่ composable ถูกใช้

  return { data, loading, error, refetch: fetch }
}

// ใช้งานใน component
import { useFetch } from '@/composables/useFetch'

const { data: users, loading, error } = useFetch('/api/users')

// เปรียบกับ React Custom Hook
// const { data, loading, error } = useFetch('/api/users')`

const vuexPiniaCode = `// Pinia — Global State (เหมือน Zustand ใน React)

// stores/userStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  // State
  const user    = ref(null)
  const isLogin = ref(false)

  // Getter (computed)
  const displayName = computed(() =>
    user.value ? user.value.name : 'Guest'
  )

  // Action
  async function login(email, password) {
    const res  = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    })
    user.value    = await res.json()
    isLogin.value = true
  }

  function logout() {
    user.value    = null
    isLogin.value = false
  }

  return { user, isLogin, displayName, login, logout }
})

// ใช้งานใน component
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
userStore.login('alice@test.com', '1234')
console.log(userStore.displayName)`

const vueRouterCode = `// Vue Router — จัดการ URL (เหมือน React Router)

// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',         component: HomePage },
    { path: '/about',    component: AboutPage },
    { path: '/users/:id', component: UserDetailPage },

    // Protected route — ต้อง login ก่อน
    {
      path: '/dashboard',
      component: DashboardPage,
      meta: { requiresAuth: true }
    }
  ]
})

// Navigation Guard — ตรวจก่อนเข้า route
router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !isLoggedIn()) {
    return '/login'   // redirect ไป login
  }
})

export default router

<!-- ใช้ใน template -->
<template>
  <RouterLink to="/">หน้าหลัก</RouterLink>
  <RouterLink :to="\`/users/\${userId}\`">Profile</RouterLink>
  <RouterView />   <!-- render component ของ route ปัจจุบัน -->
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route  = useRoute()

console.log(route.params.id)    // ค่าจาก URL
router.push('/dashboard')       // navigate ด้วย code
</script>`

const qaItems = [
  {
    q: 'Vue 3 กับ React ต่างกันอย่างไร?',
    a: `<strong>ความเหมือน:</strong> Component-based, Virtual DOM, Reactivity, Lifecycle<br><br>
    <strong>Vue:</strong> Template แยกจาก JS, <code>v-model</code> two-way binding, Reactivity อัตโนมัติ (Proxy)<br>
    <strong>React:</strong> JSX รวม JS กับ HTML, one-way data flow, ต้องเรียก setter เอง<br><br>
    Vue เรียนรู้ง่ายกว่าสำหรับคนใหม่ React flexible กว่าสำหรับโปรเจกต์ซับซ้อน`
  },
  {
    q: 'ref กับ reactive ต่างกันอย่างไร?',
    a: `<strong>ref</strong> — ใช้กับ primitive (number, string, boolean, array) ต้องใช้ <code>.value</code> ใน script<br>
    <strong>reactive</strong> — ใช้กับ object แก้ property ตรงได้เลยไม่มี <code>.value</code><br><br>
    ทั้งคู่ใช้ Vue Proxy ดัก property เหมือนกัน แค่ API ต่างกัน<br>
    หลายทีมเลือกใช้ <code>ref</code> อย่างเดียวเพื่อความ consistent`
  },
  {
    q: 'v-if กับ v-show ต่างกันอย่างไร?',
    a: `<strong>v-if</strong> — ลบ element ออกจาก DOM เลย ถ้าเงื่อนไขเป็น false<br>
    render ใหม่ทุกครั้งที่เงื่อนไขเปลี่ยน — cost สูงกว่า<br><br>
    <strong>v-show</strong> — element ยังอยู่ใน DOM แค่เพิ่ม <code>display: none</code><br>
    toggle เร็วกว่า เพราะไม่ต้อง create/destroy element<br><br>
    ใช้ <code>v-if</code> เมื่อเงื่อนไขไม่ค่อยเปลี่ยน<br>
    ใช้ <code>v-show</code> เมื่อต้อง toggle บ่อย เช่น dropdown, modal`
  },
  {
    q: 'Composable คืออะไร ต่างจาก Component ยังไง?',
    a: `<strong>Component</strong> — มี template (UI) + logic รวมกัน<br>
    <strong>Composable</strong> — มีแค่ logic ไม่มี UI ใช้ซ้ำได้ในหลาย component<br><br>
    เหมือน Custom Hook ใน React — แยก logic ออกมาเป็นฟังก์ชัน<br>
    เช่น <code>useFetch</code>, <code>useLocalStorage</code>, <code>useWindowSize</code>`
  },
  {
    q: 'Props กับ Emit คืออะไร?',
    a: `การสื่อสารระหว่าง component<br><br>
    <strong>Props</strong> — parent ส่งข้อมูลลงไปหา child (one-way, read-only)<br>
    <strong>Emit</strong> — child ส่ง event ขึ้นไปหา parent<br><br>
    เหมือน React ที่ส่ง props ลง แต่แทนที่จะส่ง callback function เป็น prop
    Vue ใช้ event system แยก (<code>emit('eventName', data)</code>)`
  },
  {
    q: 'Pinia คืออะไร ใช้เมื่อไหร่?',
    a: `Pinia คือ global state management ของ Vue 3 (ทำงานคล้าย Zustand)<br><br>
    ใช้เมื่อ:<br>
    • ข้อมูลต้องแชร์ระหว่างหลาย component ที่ไม่ได้เป็น parent-child กัน<br>
    • เช่น ข้อมูล user ที่ login, ตะกร้าสินค้า, theme<br><br>
    ถ้าข้อมูลใช้แค่ใน component เดียวหรือ parent-child → ใช้ props/emit ธรรมดาพอ`
  }
]

export default function VuePage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-badge">Frontend</div>
        <h1 className="page-title">Vue 3</h1>
        <p className="page-desc">
          เรียนรู้ Vue 3 Composition API สำหรับ React developer
          แนวคิดเหมือนกัน แค่ syntax และวิธีคิดต่างออกไป
        </p>
      </div>

      <div className="section">
        <div className="section-title">Single File Component (SFC)</div>
        <p className="section-desc">
          Vue ใช้ไฟล์ <code>.vue</code> ที่รวม HTML, JS, CSS ไว้ในไฟล์เดียว
          แบ่งเป็น 3 ส่วนชัดเจน — ต่างจาก React ที่รวม HTML ไว้ใน JS ผ่าน JSX
        </p>
        <CodeBlock code={sfcCode} lang="html" />
      </div>

      <div className="section">
        <div className="section-title">ref & reactive — Reactivity System</div>
        <p className="section-desc">
          Vue track การเปลี่ยนแปลงด้วย Proxy — ต้องห่อค่าด้วย <code>ref</code> หรือ <code>reactive</code>
          ก่อน Vue จึงจะรู้ว่าค่าเปลี่ยนและ re-render ให้อัตโนมัติ
        </p>
        <CodeBlock code={refReactiveCode} lang="javascript" />
      </div>

      <div className="section">
        <div className="section-title">Template Syntax</div>
        <p className="section-desc">
          Vue ใช้ directive (<code>v-if</code>, <code>v-for</code>, <code>v-model</code>) แทน JSX expression —
          <code>v-model</code> พิเศษตรงที่ bind ค่าเข้า-ออกในบรรทัดเดียว ไม่ต้องเขียน onChange เอง
        </p>
        <CodeBlock code={templateCode} lang="html" />
      </div>

      <div className="section">
        <div className="section-title">Computed & Watch</div>
        <p className="section-desc">
          <code>computed</code> คำนวณค่าจาก reactive data แล้ว cache ไว้ (เหมือน useMemo) —
          <code>watch</code> ดูการเปลี่ยนแปลงแล้วทำ side effect (เหมือน useEffect)
        </p>
        <CodeBlock code={computedWatchCode} lang="javascript" />
      </div>

      <div className="section">
        <div className="section-title">Lifecycle Hooks</div>
        <p className="section-desc">
          Vue มี lifecycle hook แยกชัดเจนแต่ละจังหวะ ต่างจาก React ที่ใช้ <code>useEffect</code>
          ทำทุกอย่างโดยควบคุมผ่าน dependency array
        </p>
        <CodeBlock code={lifecycleCode} lang="javascript" />
      </div>

      <div className="section">
        <div className="section-title">Props & Emit</div>
        <p className="section-desc">
          Props ส่งข้อมูลจาก parent → child, Emit ส่ง event จาก child → parent —
          แทนที่จะส่ง callback function เป็น prop แบบ React, Vue ใช้ event system แยก
        </p>
        <CodeBlock code={propsEmitCode} lang="html" />
      </div>

      <div className="section">
        <div className="section-title">Composables</div>
        <p className="section-desc">
          Composable คือ function ที่แยก logic ที่ใช้ซ้ำออกมา — เหมือน Custom Hook ใน React
          ตั้งชื่อขึ้นต้นด้วย <code>use</code> เสมอ
        </p>
        <CodeBlock code={composableCode} lang="javascript" />
      </div>

      <div className="section">
        <div className="section-title">Pinia — Global State</div>
        <p className="section-desc">
          Pinia คือ state management ของ Vue 3 ทำงานคล้าย Zustand —
          ใช้เมื่อข้อมูลต้องแชร์ระหว่าง component ที่ไม่ได้เป็น parent-child กัน
        </p>
        <CodeBlock code={vuexPiniaCode} lang="javascript" />
      </div>

      <div className="section">
        <div className="section-title">Vue Router</div>
        <p className="section-desc">
          Vue Router จัดการ URL และ navigation — คล้าย React Router
          มี Navigation Guard ไว้ตรวจสอบสิทธิ์ก่อนเข้า route
        </p>
        <CodeBlock code={vueRouterCode} lang="javascript" />
      </div>

      <div className="section">
        <div className="section-title">Interview Q&A</div>
        <QASection items={qaItems} />
      </div>
    </div>
  )
}
