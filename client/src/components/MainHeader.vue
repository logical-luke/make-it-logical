<script setup lang="ts">
import { ref, inject, watch } from "vue";
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";

const transitionTrigger = inject("transitionTrigger", ref(0));
const show = ref(false);

watch(
  transitionTrigger,
  () => {
    show.value = false;
    setTimeout(() => {
      show.value = true;
    }, 0);
  },
  { immediate: true },
);
</script>

<template>
  <BottomToTopSlideTransition duration="700">
    <h1
      class="text-3xl md:text-5xl leading-1 md:leading-24 font-semibold mb-8 max-w-4xl"
    >
      <slot></slot>
    </h1>
  </BottomToTopSlideTransition>
</template>
