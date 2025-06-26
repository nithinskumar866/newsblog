import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'

import './assets/css/main.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(MotionPlugin)

app.mount('#app')