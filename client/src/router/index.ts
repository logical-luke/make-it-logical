import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ServicesPage from "@/views/ServicesPage.vue";
import ProcessPage from "@/views/ProcessPage.vue";
import TeamPage from "@/views/TeamPage.vue";
import ContactPage from "@/views/ContactPage.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/services', component: ServicesPage },
    { path: '/process', component: ProcessPage },
    { path: '/team', component: TeamPage },
    { path: '/contact', component: ContactPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {top: 0};
    },
});

export default router;