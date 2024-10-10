import { createRouter, createWebHistory } from "vue-router";
const HomePage = () => import("@/views/HomePage.vue");
const ServicesPage = () => import("@/views/ServicesPage.vue");
const ProcessPage = () => import("@/views/ProcessPage.vue");
const ContactPage = () => import("@/views/ContactPage.vue");

const routes = [
  { path: "/", component: HomePage },
  { path: "/services", component: ServicesPage },
  { path: "/process", component: ProcessPage },
  { path: "/contact", component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
