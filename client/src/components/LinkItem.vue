<script setup lang="ts">
import ArrowRightIcon from "@/components/ArrowRightIcon.vue";

interface Props {
  to: string;
  disableIcon?: boolean;
  external?: boolean;
}

defineProps<Props>();
</script>

<template>
  <RouterLink
    v-if="!external"
    :to="to"
    class="flex duration-300 transition-all gap-0 hover:gap-2 items-center text-xl fill-gray-400 hover:fill-black dark:fill-gray-400 dark:hover:fill-gray-200"
  >
    <span
      class="underline text-black dark:text-gray-200 decoration-gray-400 dark:hover:decoration-white hover:decoration-black underline-offset-8 hover:decoration-3"
      ><slot></slot
    ></span>
    <ArrowRightIcon v-if="!disableIcon" class="h-5 -ml-3" />
  </RouterLink>
  <a
    v-else
    :href="to"
    target="_blank"
    rel="noopener noreferrer"
    class="flex duration-300 transition-all gap-2 hover:gap-4 items-center text-xl text-gray-400 hover:text-black dark:hover:text-white"
  >
    <span
      class="underline text-black dark:text-gray-200 decoration-gray-400 dark:hover:decoration-white hover:decoration-black underline-offset-8 hover:decoration-3"
      ><slot></slot
    ></span>
  </a>
</template>
