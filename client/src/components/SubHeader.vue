<script setup lang="ts">
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";
</script>

<template>
  <BottomToTopSlideTransition duration="500">
    <div class="flex flex-col gap-4 py-6">
      <p class="text-xl md:text-2xl mb-4 max-w-3xl">
        <slot></slot>
      </p>
      <p
        v-if="$slots.second"
        class="text-xl md:text-2xl mb-2 font-semibold max-w-3xl"
      >
        <slot name="second"></slot>
      </p>
      <p
        v-if="$slots.third"
        class="text-xl md:text-2xl mb-4 font-bold max-w-3xl"
      >
        <slot name="third"></slot>
      </p>
    </div>
  </BottomToTopSlideTransition>
</template>
