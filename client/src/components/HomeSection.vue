<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Button from 'primevue/button';
import VLazyImage from "v-lazy-image";

const { t } = useI18n();
const { scrollTo } = defineProps(['scrollTo']);

const imageSizes = [
  { width: 640, height: 960 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1920, height: 1080 },
  { width: 2560, height: 1440 },
  { width: 3440, height: 1440 },
  { width: 3840, height: 2160 }
];

const getImageUrl = (name: string, width: number, height: number, format: string) => {
  return new URL(`../assets/${name}-${width}x${height}.${format}`, import.meta.url).href;
};

const generateSrcSet = (imageName: string, format: string) => {
  return imageSizes.map(size =>
    `${getImageUrl(imageName, size.width, size.height, format)} ${size.width}w`
  ).join(', ');
};
</script>

<template>
  <section id="home" class="py-20 md:py-32 relative overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <VLazyImage
        :src="getImageUrl('hero-image', 1024, 768, 'png')"
        :src-placeholder="getImageUrl('hero-image', 32, 24, 'png')"
        :srcset="generateSrcSet('hero-image', 'png')"
        sizes="100vw"
        alt="Digital Transformation"
        class="absolute h-full w-auto min-w-full object-cover object-left"
      />
    </div>
    <div class="relative z-10 md:w-1/2 lg:w-3/5">
      <div class="bg-white dark:bg-midnight-green-900 bg-opacity-80 dark:bg-opacity-80 p-6 rounded-lg shadow-md">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-honolulu-blue-600 dark:text-honolulu-blue-300 mb-6 transition-all duration-300 transform hover:scale-105">
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
        <Button
            :label="t('Ignite Your Digital Journey')"
            icon="pi pi-rocket"
            class="text-lg bg-honolulu-blue-600 hover:bg-honolulu-blue-700 dark:bg-honolulu-blue-500 dark:hover:bg-honolulu-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            @click="scrollTo('#contact', '/contact')"
        />
      </div>
    </div>
  </section>
</template>