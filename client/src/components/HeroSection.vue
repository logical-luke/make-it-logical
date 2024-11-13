<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";
</script>

<template>
  <section
    class="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center md:flex-row md:justify-between tracking-wider"
  >
    <div class="w-full md:w-1/2 flex flex-col items-start justify-center mt-20 md:-mt-40">
      <BottomToTopSlideTransition>
        <p
          class="flex flex-col text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 tracking-wider leading-10"
        >
          <span class="text-accent-700 dark:text-accent-600">{{ t("Get Solutions") }}</span>
          <span class="line-through decoration-4">{{ t("Not Confusion") }}</span>
        </p>
      </BottomToTopSlideTransition>
      <BottomToTopSlideTransition>
        <h1
          class="flex flex-col font-semibold text-lg md:text-3xl lg:text-4xl tracking-wider"
        >
          <span class="font-normal">{{ t("We build") }}</span>
          {{ t("web apps & websites") }}
        </h1>
      </BottomToTopSlideTransition>
    </div>
    <div class="w-full md:w-1/2 flex">
      <DotLottieVue :speed="1.4" class="w-auto h-96" autoplay src="/bulb.json" />
    </div>
  </section>
</template>

<style scoped></style>
