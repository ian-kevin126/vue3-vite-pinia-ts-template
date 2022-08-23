import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import pinia from './store'
import router from './router'
import '@/assets/styles/global.less'

const app = createApp(App)
app.use(router)
app.use(pinia)

app.mount('#app')
