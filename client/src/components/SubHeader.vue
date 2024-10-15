<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";

interface Props {
  first: string;
  second?: string;
}

defineProps<Props>();
</script>

<template>
  <BottomToTopSlideTransition duration="1300">
    <div class="flex flex-col gap-6 py-6 mb-10 md:mb-24">
      <h2 class="text-xl md:text-2xl mb-4 font-bold max-w-4xl">
        {{ t(first) }}
      </h2>
      <p v-if="second" class="text-xl md:text-2xl mb-2 max-w-4xl">
        {{ t(second) }}
      </p>
    </div>
  </BottomToTopSlideTransition>
</template>
