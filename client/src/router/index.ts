import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ServicesPage from "@/views/ServicesPage.vue";
import ProcessPage from "@/views/ProcessPage.vue";
import ContactPage from "@/views/ContactPage.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/services", component: ServicesPage },
  { path: "/process", component: ProcessPage },
  { path: "/contact", component: ContactPage },
  { path: "/:pathMatch(.*)*", component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
