import { createI18n } from "vue-i18n";
import "./tailwind/main.css";
import "primeicons/primeicons.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import VueGtag from "vue-gtag";

const app = createApp(App);

const messages = {};

const i18n = createI18n({
  legacy: false,
  locale: "en-US",
  messages: messages,
  silentTranslationWarn: true,
});

app.use(VueGtag, {
  config: { id: "G-CYEFZ0M938" }
});

app.use(i18n);
app.use(router);

app.mount("#app");
