import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/views/HomePage.vue";

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior() {
        return {top: 0};
    },
    routes: [
        {
            path: "/",
            name: "HomePage",
            component: HomePage,
        }
    ]
});

export default router;