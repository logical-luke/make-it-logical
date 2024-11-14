import "./tailwind/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import VueGtag from "vue-gtag";

const app = createApp(App);

app.use(VueGtag, {
  config: { id: "G-CYEFZ0M938" },
});

app.use(router);

app.mount("#app");
