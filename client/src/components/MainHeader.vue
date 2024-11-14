<script setup lang="ts">
interface Props {
  text: string;
}

defineProps<Props>();
</script>

<template>
  <h1
    class="text-2xl tracking-wider leading-10 md:text-4xl font-semibold mb-8 max-w-4xl"
  >
    {{ text }}
  </h1>
</template>
