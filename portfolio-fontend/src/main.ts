import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import { setupFontAwesome } from '@/components/FontAwesome/font_awesome.ts'

const app = createApp(App)

if (import.meta.env.MODE === 'production') {
  app.config.productionTip = false;
  app.config.devtools = false;
}

setupFontAwesome(app)

app.use(createPinia())
app.use(router)

app.mount('#app')
