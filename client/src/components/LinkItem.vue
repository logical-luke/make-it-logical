<script setup lang="ts">
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
    class="flex duration-300 transition-all gap-2 hover:gap-4 items-center text-xl text-gray-400 hover:text-black dark:hover:text-white"
  >
    <span
      class="underline text-black dark:text-white decoration-gray-400 dark:hover:decoration-white hover:decoration-black underline-offset-8 hover:decoration-3"
      ><slot></slot
    ></span>
    <i v-if="!disableIcon" class="pi pi-arrow-right"></i>
  </RouterLink>
  <a
    v-else
    :href="to"
    target="_blank"
    rel="noopener noreferrer"
    class="flex duration-300 transition-all gap-2 hover:gap-4 items-center text-xl text-gray-400 hover:text-black dark:hover:text-white"
  >
    <span
      class="underline text-black dark:text-white decoration-gray-400 dark:hover:decoration-white hover:decoration-black underline-offset-8 hover:decoration-3"
      ><slot></slot
    ></span>
    <i v-if="!disableIcon" class="pi pi-external-link"></i>
  </a>
</template>
