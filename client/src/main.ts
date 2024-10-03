import { createI18n } from "vue-i18n";
import './tailwind/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Lara from '@primevue/themes/lara';
import Tooltip from 'primevue/tooltip';
import router from "@/router";
import VueLazyload from "vue-lazyload";

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
app.use(PrimeVue, {
    theme: {
        preset: Lara,
        options: {
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            }
        }
    }
});

app.use(VueLazyload);

app.directive('tooltip', Tooltip);

app.mount('#app')
