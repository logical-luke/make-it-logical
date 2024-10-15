<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
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

interface Props {
  text: string;
}

defineProps<Props>();
</script>

<template>
  <BottomToTopSlideTransition duration="700">
    <h1
      class="text-3xl tracking-wider leading-10 md:text-5xl font-semibold mb-8 max-w-4xl"
    >
      {{ t(text) }}
    </h1>
  </BottomToTopSlideTransition>
</template>
