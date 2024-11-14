import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/HomePage.vue") },
  { path: "/services", component: () => import("@/views/ServicesPage.vue") },
  { path: "/process", component: () => import("@/views/ProcessPage.vue") },
  { path: "/contact", component: () => import("@/views/ContactPage.vue") },
  { path: "/terms", component: () => import("@/views/TermsPage.vue") },
  { path: "/privacy", component: () => import("@/views/PrivacyPage.vue") },
  { path: "/tools", component: () => import("@/views/ToolsPage.vue") },
  { path: "/about", component: () => import("@/views/AboutUsPage.vue") },
  { path: "/:pathMatch(.*)*", component: () => import("@/views/NotFoundPage.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;