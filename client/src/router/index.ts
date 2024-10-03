import { createRouter, createWebHistory } from "vue-router";

const App = () => import("@/App.vue");

const routes = [
  { path: '/', component: App, meta: { scrollTo: 0 } },
  { path: '/services', component: App, meta: { scrollTo: '#services' } },
  { path: '/process', component: App, meta: { scrollTo: '#process' } },
  { path: '/team', component: App, meta: { scrollTo: '#team' } },
  { path: '/contact', component: App, meta: { scrollTo: '#contact' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.meta.scrollTo !== undefined) {
      if (typeof to.meta.scrollTo === 'number') {
        return { top: to.meta.scrollTo, behavior: 'smooth' };
      }
      return { el: to.meta.scrollTo, behavior: 'smooth' };
    }
    return { top: 0 };
  },
});

export default router;