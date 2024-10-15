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
  duration: "500",
  useIntersectionObserver: true,
});

const show = ref(false);
const componentRef = ref<HTMLElement | null>(null);

const transitionTrigger = inject("transitionTrigger", ref(0));

const enterDurationClass = () => {
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

const leaveDurationClass = () => {
  const durations = {
    "2000": "duration-1500",
    "1500": "duration-1300",
    "1300": "duration-1000",
    "1000": "duration-700",
    "700": "duration-500",
    "500": "duration-400",
    "400": "duration-300",
    "300": "duration-200",
    "200": "duration-100",
    "100": "duration-100",
  };

  return durations[props.duration];
};

const hasAnimated = ref(false);

let observer: IntersectionObserver | null = null;

if (props.useIntersectionObserver) {
  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.value) {
            show.value = true;
            hasAnimated.value = true;
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
      if (!hasAnimated.value) {
        show.value = false;
        hasAnimated.value = true; // Mark as animated immediately
        setTimeout(() => {
          show.value = true;
        }, 0);
      }
    },
    { immediate: true },
  );
}
</script>

<template>
  <div ref="componentRef">
    <Transition
      :enter-active-class="`${enterDurationClass()} ease-in-out delay-100`"
      enter-from-class="transform translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      :leave-active-class="`${leaveDurationClass()} ease-in-out`"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-4 opacity-0"
    >
      <div v-if="show">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>
