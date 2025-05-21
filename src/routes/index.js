import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import MemberRegistration from "@/views/MemberRegistration.vue";
import MemberDashboard from "@/views/MemberDashboard.vue";
import MemberEventConfirmation from "@/views/MemberEventConfirmation.vue";
import MemberBookings from "@/views/MemberBookings.vue";


const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/registration', component: MemberRegistration},
    {path: '/member-dashboard', component: MemberDashboard},
    {path: '/member-event-confirmation', component: MemberEventConfirmation},
    {path: '/member-event-bookings', component: MemberBookings},

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;