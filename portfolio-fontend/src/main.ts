import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons' 
import {
  faArrowRight,
  faPen,
  faPhone,
  faEnvelope, 
} from '@fortawesome/free-solid-svg-icons' 
import './assets/tailwind.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

if (process.env.NODE_ENV === 'production') {
  app.config.devtools = false;
}

library.add(faGithub, faLinkedin, faFacebook, faArrowRight, faPen, faPhone, faEnvelope)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
