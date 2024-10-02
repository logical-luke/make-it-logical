import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import "primeicons/primeicons.css";
import Lara from '@primevue/themes/lara';

const app = createApp(App)

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
app.mount('#app')
