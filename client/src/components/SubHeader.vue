<script setup lang="ts">
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";
</script>

<template>
  <BottomToTopSlideTransition duration="500">
    <div class="flex flex-col gap-6 py-6 mb-10 md:mb-24">
      <p class="text-xl md:text-2xl mb-4 max-w-4xl">
        <slot></slot>
      </p>
      <p
        v-if="$slots.second"
        class="text-xl md:text-2xl mb-2 font-semibold max-w-4xl"
      >
        <slot name="second"></slot>
      </p>
      <p
        v-if="$slots.third"
        class="text-xl md:text-2xl mb-4 font-bold max-w-4xl"
      >
        <slot name="third"></slot>
      </p>
    </div>
  </BottomToTopSlideTransition>
</template>
