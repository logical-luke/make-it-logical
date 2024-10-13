<script setup lang="ts">
import { ref, inject, watch, onMounted, onUnmounted } from "vue";

interface Props {
  duration?:
    | "2000"
    | "1500"
    | "1300"
    | "1000"
    | "700"
    | "500"
    | "400"
    | "300"
    | "200"
    | "100";
  useIntersectionObserver?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  duration: "700",
  useIntersectionObserver: true,
});

const show = ref(false);
const componentRef = ref<HTMLElement | null>(null);

const transitionTrigger = inject("transitionTrigger", ref(0));

const durationClass = () => {
  const durations = {
    "2000": "duration-2000",
    "1500": "duration-1500",
    "1300": "duration-1300",
    "1000": "duration-1000",
    "700": "duration-700",
    "500": "duration-500",
    "400": "duration-400",
    "300": "duration-300",
    "200": "duration-200",
    "100": "duration-100",
  };

  return durations[props.duration];
};

let observer: IntersectionObserver | null = null;

if (props.useIntersectionObserver) {
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
} else {
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
}
</script>

<template>
  <div ref="componentRef">
    <Transition
      :enter-active-class="`${durationClass()} ease-in-out`"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      :leave-active-class="`${durationClass()} ease-in-out`"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="show">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>
