import 'virtual:uno.css';
import "@/assets/main.css";
import '@unocss/reset/tailwind-compat.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
