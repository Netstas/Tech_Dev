import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

//libary
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fab, fas, far)

import App from './layout/index.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app')
