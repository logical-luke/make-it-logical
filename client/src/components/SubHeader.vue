<script setup lang="ts">
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";

interface Props {
  first: string;
  second?: string;
}

defineProps<Props>();
</script>

<template>
  <BottomToTopSlideTransition>
    <div class="flex flex-col gap-6 py-6 mb-10">
      <h2
        class="text-xl md:text-2xl mb-4 max-w-4xl"
        :class="second ? 'font-semibold' : ''"
      >
        {{ first }}
      </h2>
      <p v-if="second" class="text-lg md:text-xl mb-2 max-w-4xl">
        {{ second }}
      </p>
    </div>
  </BottomToTopSlideTransition>
</template>
