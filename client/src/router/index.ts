import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ServicesPage from "@/views/ServicesPage.vue";
import ProcessPage from "@/views/ProcessPage.vue";
import ContactPage from "@/views/ContactPage.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";
import TermsPage from "@/views/TermsPage.vue";
import PrivacyPage from "@/views/PrivacyPage.vue";
import ToolsPage from "@/views/ToolsPage.vue";
import AboutUsPage from "@/views/AboutUsPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/services", component: ServicesPage },
  { path: "/process", component: ProcessPage },
  { path: "/contact", component: ContactPage },
  { path: "/terms", component: TermsPage },
  { path: "/privacy", component: PrivacyPage },
  { path: "/tools", component: ToolsPage },
  { path: "/about", component: AboutUsPage },
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
