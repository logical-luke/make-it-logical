<script setup lang="ts">
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";

interface Props {
  title: string;
}

defineProps<Props>();
</script>

<template>
  <BottomToTopSlideTransition>
    <section>
      <h2
        class="text-gray-500 dark:text-gray-400 text-xl md:text-4xl font-bold mb-6"
      >
        {{ title }}
      </h2>
      <slot></slot>
    </section>
  </BottomToTopSlideTransition>
</template>
