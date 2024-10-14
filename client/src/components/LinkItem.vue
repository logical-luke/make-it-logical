<script setup lang="ts">
import ArrowRightIcon from "@/components/ArrowRightIcon.vue";

interface Props {
  to: string;
  disableIcon?: boolean;
  external?: boolean;
  lessContrast?: boolean;
}

defineProps<Props>();
</script>

<template>
  <RouterLink
    v-if="!external"
    :to="to"
    class="flex duration-300 transition-all gap-0 hover:gap-2 items-center text-xl"
    :class="
      lessContrast
        ? 'fill-gray-300 hover:fill-gray-500 dark:fill-gray-600 dark:hover:fill-gray-400'
        : 'fill-gray-400 hover:fill-black dark:fill-gray-400 dark:hover:fill-gray-200'
    "
  >
    <span
      class="underline underline-offset-8 hover:decoration-3"
      :class="
        lessContrast
          ? 'text-gray-500 dark:text-gray-400 decoration-gray-300 dark:decoration-gray-600 hover:decoration-gray-600 dark:hover:decoration-gray-400'
          : 'text-black dark:text-gray-100 decoration-gray-400 dark:decoration-gray-600 hover:decoration-black dark:hover:decoration-gray-100'
      "
      ><slot></slot
    ></span>
    <ArrowRightIcon v-if="!disableIcon" class="h-5 -ml-3" />
  </RouterLink>
  <a
    v-else
    :href="to"
    target="_blank"
    rel="noopener noreferrer"
    class="flex duration-300 transition-all gap-2 hover:gap-4 items-center text-xl"
    :class="
      lessContrast
        ? 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
        : 'text-gray-400 hover:text-black dark:hover:text-gray-100'
    "
  >
    <span
      class="underline underline-offset-8 hover:decoration-3"
      :class="
        lessContrast
          ? 'text-gray-500 dark:text-gray-400 decoration-gray-300 dark:decoration-gray-600 hover:decoration-gray-600 dark:hover:decoration-gray-400'
          : 'text-black dark:text-gray-100 decoration-gray-400 dark:decoration-gray-600 hover:decoration-black dark:hover:decoration-gray-100'
      "
      ><slot></slot
    ></span>
  </a>
</template>
