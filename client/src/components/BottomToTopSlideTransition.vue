<script setup lang="ts">
import { ref, inject, watch } from "vue";

const show = ref(false);

const transitionTrigger = inject("transitionTrigger", ref(0));

const hasAnimated = ref(false);

watch(
  transitionTrigger,
  () => {
    if (!hasAnimated.value) {
      show.value = false;
      hasAnimated.value = true; // Mark as animated immediately
      setTimeout(() => {
        show.value = true;
      }, 0);
    }
  },
  { immediate: true },
);
</script>

<template>
  <div
    class="transition-all transform duration-300 ease-in"
    :class="[show ? 'opacity-100 translate-y-0' : 'opacity-5 translate-y-4']"
  >
    <slot></slot>
  </div>
</template>
