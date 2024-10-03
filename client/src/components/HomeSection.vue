<script setup lang="ts">
import {useI18n} from 'vue-i18n';

const {t} = useI18n();
import Button from 'primevue/button';

const {scrollTo} = defineProps(['scrollTo']);
</script>

<template>
  <section id="home" class="py-20 md:py-32 relative overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <picture>
        <!-- AVIF format -->
        <source
            media="(max-width: 640px)"
            srcset="@/assets/hero-image-640x960.avif"
            type="image/avif"
        >
        <source
            media="(max-width: 768px)"
            srcset="@/assets/hero-image-768x1024.avif"
            type="image/avif"
        >
        <source
            media="(max-width: 1024px)"
            srcset="@/assets/hero-image-1024x768.avif"
            type="image/avif"
        >
        <source
            srcset="@/assets/hero-image-1920x1080.avif 1920w,
            @/assets/hero-image-2560x1440.avif 2560w,
            @/assets/hero-image-3440x1440.avif 3440w,
            @/assets/hero-image-3840x2160.avif 3840w"
            sizes="100vw"
            type="image/avif"
        >

        <!-- WebP format (fallback for browsers that don't support AVIF) -->
        <source
            media="(max-width: 640px)"
            srcset="@/assets/hero-image-640x960.webp"
            type="image/webp"
        >
        <source
            media="(max-width: 768px)"
            srcset="@/assets/hero-image-768x1024.webp"
            type="image/webp"
        >
        <source
            media="(max-width: 1024px)"
            srcset="@/assets/hero-image-1024x768.webp"
            type="image/webp"
        >
        <source
            srcset="@/assets/hero-image-1920x1080.webp 1920w,
            @/assets/hero-image-2560x1440.webp 2560w,
            @/assets/hero-image-3440x1440.webp 3440w,
            @/assets/hero-image-3840x2160.webp 3840w"
            sizes="100vw"
            type="image/webp"
        >

        <!-- PNG format (final fallback) -->
        <img
            src="@/assets/hero-image-1024x768.png"
            srcset="@/assets/hero-image-640x960.png 640w,
            @/assets/hero-image-768x1024.png 768w,
            @/assets/hero-image-1024x768.png 1024w,
            @/assets/hero-image-1920x1080.png 1920w,
            @/assets/hero-image-2560x1440.png 2560w,
            @/assets/hero-image-3440x1440.png 3440w,
            @/assets/hero-image-3840x2160.png 3840w"
            sizes="100vw"
            alt="Digital Transformation"
            class="absolute h-full w-auto min-w-full object-cover object-left"
        >
      </picture>
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