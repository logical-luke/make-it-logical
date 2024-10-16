<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
import BulbShape from "@/components/BulbShape.vue";
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";
</script>

<template>
  <section
    class="min-h-[calc(100vh-80px)] flex flex-col md:flex-row tracking-wider"
  >
    <div class="w-full md:w-1/2 mb-8 md:mb-0">
      <BottomToTopSlideTransition duration="700">
        <p
          class="flex flex-col text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 tracking-wider leading-10"
        >
          <span>{{ t("Get Solutions") }}</span>
          <span class="line-through decoration-4">{{
            t("Not Confusion")
          }}</span>
        </p>
      </BottomToTopSlideTransition>
      <BottomToTopSlideTransition duration="1300">
        <h1
          class="flex flex-col font-semibold text-lg md:text-3xl lg:text-4xl tracking-wider"
        >
          <span class="text-primary font-normal">{{ t("We build") }}</span>
          {{ t("websites & web apps") }}
        </h1>
      </BottomToTopSlideTransition>
    </div>
    <div class="w-full md:w-1/2 mt-10 md:mt-0 -ml-7">
      <BulbShape />
    </div>
  </section>
</template>

<style scoped></style>
