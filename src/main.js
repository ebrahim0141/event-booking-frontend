import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import ToastPlugin from 'vue-toast-notification';

import ('bootstrap/dist/css/bootstrap.min.css')
import 'vue-toast-notification/dist/theme-bootstrap.css';
import ('bootstrap/dist/js/bootstrap.min.js')

const app =createApp(App)
app.use(router)
app.use(ToastPlugin)
app.mount('#app')
