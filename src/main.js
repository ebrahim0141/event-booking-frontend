import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import ToastPlugin from 'vue-toast-notification';

import ('bootstrap/dist/css/bootstrap.min.css')
import 'vue-toast-notification/dist/theme-bootstrap.css';
import ('bootstrap/dist/js/bootstrap.min.js')

import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'f23e2507243090f0b73d',
    cluster: 'ap2',
    forceTLS: true
})

const app =createApp(App)
app.use(router)
app.use(ToastPlugin)
app.mount('#app')
