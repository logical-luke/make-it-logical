import { createI18n } from "vue-i18n";
import './tailwind/main.css'

import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App)

const messages = {};

const i18n = createI18n({
  legacy: false,
  locale: "en-US",
  messages: messages,
  silentTranslationWarn: true
});

app.use(i18n);
app.use(router);
import router from "@/router";
import Lara from '@primevue/themes/lara';
import PrimeVue from 'primevue/config'
app.use(PrimeVue, {
    theme: {
        preset: Lara,
        options: {
            darkModeSelector: '.dark',
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            }
        }
    }
});

app.mount('#app')
