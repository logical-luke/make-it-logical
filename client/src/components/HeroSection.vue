<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';

interface HeroSectionTexts {
  getSolutions: string;
  notConfusion: string;
  weBuild: string;
  webAppsAndWebsites: string;
}

defineProps<{
  texts: HeroSectionTexts;
}>();
</script>

<template>
  <section
    class="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center md:flex-row md:justify-between tracking-wider"
  >
    <div class="w-full md:w-1/2 flex flex-col items-start justify-center mt-20 md:-mt-40">
        <p
          class="flex flex-col text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 tracking-wider leading-10"
        >
          <span class="text-accent-700 dark:text-accent-600">{{ texts.getSolutions }}</span>
          <span class="line-through decoration-4">{{ texts.notConfusion }}</span>
        </p>
        <h1
          class="flex flex-col font-semibold text-lg md:text-3xl lg:text-4xl tracking-wider"
        >
          <span class="font-normal">{{ texts.weBuild }}</span>
          {{ texts.webAppsAndWebsites }}
        </h1>
    </div>
    <div class="w-full md:w-1/2 flex justify-center md:justify-end">
      <DotLottieVue :speed="1.4" class="w-auto h-64 md:h-96" autoplay src="/bulb.json" />
    </div>
  </section>
</template>