<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const show = ref(false);
const componentRef = ref<HTMLElement | null>(null);

let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          show.value = true;
          observer?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  if (componentRef.value) {
    observer.observe(componentRef.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div ref="componentRef">
    <div
      class="transition-opacity duration-300 ease-in-out"
      :class="[show ? 'opacity-100 translate-y-0' : 'opacity-5 translate-y-4']"
    >
      <slot></slot>
    </div>
  </div>
</template>
