<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import Button from 'primevue/button';
</script>

<template>
  <section id="home" class="py-20 md:py-32 relative overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <picture>
        <source srcset="@/assets/hero-image.webp" type="image/webp">
        <source srcset="@/assets/hero-image.png" type="image/png">
        <img src="@/assets/hero-image.png" alt="Digital Transformation" class="absolute h-full w-auto min-w-full object-cover object-left">
      </picture>
    </div>
    <div class="absolute inset-0 bg-honolulu-blue-50 dark:bg-honolulu-blue-900 opacity-30"></div>
    <div class="relative z-10 md:w-1/2 lg:w-3/5">
      <div class="bg-white dark:bg-midnight-green-900 bg-opacity-80 dark:bg-opacity-80 p-6 rounded-lg shadow-md">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-honolulu-blue-600 dark:text-honolulu-blue-400 mb-6 transition-all duration-300 transform hover:scale-105">
          {{ t('Elevate Your Digital Presence') }}
        </h1>
        <p class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-200 mb-4 transition-opacity duration-300 ease-in-out">
          {{ t('At Make IT Logical, we don\'t just build websites and apps.') }}
        </p>
        <p class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-200 mb-4 transition-opacity duration-300 ease-in-out">
          {{ t('We craft digital experiences that captivate, engage, and convert.') }}
        </p>
        <p class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-200 mb-8 transition-opacity duration-300 ease-in-out">
          {{ t('Your vision, our expertise – together, we\'ll redefine what\'s possible in the digital realm.') }}
        </p>
        <RouterLink
            to="/contact"
        >
          <Button :label="t('Ignite Your Digital Journey')" icon="pi pi-rocket" class="text-lg bg-honolulu-blue-600 hover:bg-honolulu-blue-700 dark:bg-honolulu-blue-500 dark:hover:bg-honolulu-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-md" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>