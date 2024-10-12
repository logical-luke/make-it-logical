<script setup lang="ts">
import { ref, inject, watch } from "vue";

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
}

const props = defineProps<Props>();

const duration = props.duration || "700";

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

  return durations[duration];
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

  return durations[duration];
};
</script>

<template>
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
</template>
