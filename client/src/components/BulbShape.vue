<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from "vue";
import paths from "@/assets/bulbPaths.json";
import precomputedValues from "@/assets/precomputedBulbValues.json";

const {
  pathLengths,
  glitchPatterns,
  animationStates,
  totalCycleDuration,
  glitchInterval,
} = precomputedValues;

const animationProgress = ref(animationStates[0].animationProgress);
const glitchOpacity = ref<number[]>(paths.map(() => 1));
const bulbVisible = ref(false);
const glowIntensity = ref(0);

const stopOpacity = computed(() => Math.sin(bulbVisible.value ? 0.65 : 0.05));
const glowRadius = computed(() => 410 * glowIntensity.value);

let animationFrameId: number | null = null;
let lastGlitchTime = 0;
let animationStartTime: number | null = null;

const animate = (timestamp: number) => {
  if (animationStartTime === null) {
    animationStartTime = timestamp;
  }

  const elapsedTime = timestamp - animationStartTime;
  const cycleTime = elapsedTime % totalCycleDuration;
  const stateIndex = Math.floor(
    (cycleTime / totalCycleDuration) * (animationStates.length - 1),
  );

  const currentState = animationStates[stateIndex];
  animationProgress.value = currentState.animationProgress;
  bulbVisible.value = currentState.bulbVisible;
  glowIntensity.value = currentState.glowIntensity;

  if (timestamp - lastGlitchTime >= glitchInterval) {
    lastGlitchTime = timestamp;
    if (bulbVisible.value && glowIntensity.value > 0) {
      const glitchIndex = Math.floor(Math.random() * glitchPatterns.length);
      glitchOpacity.value = glitchPatterns[glitchIndex];
    } else {
      glitchOpacity.value.fill(1);
    }
  }

  animationFrameId = requestAnimationFrame(animate);
};

onMounted(() => {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(() => {
      animationFrameId = requestAnimationFrame(animate);
    });
  } else {
    setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, 0);
  }
});

onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
});
</script>

<template>
  <div class="relative">
    <svg
      id="svg1"
      viewBox="0 0 1200 1200"
      xmlns="http://www.w3.org/2000/svg"
      class="bulb-svg dark:text-gray-100 rotate-animation origin-center"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient
          id="bulbGradient"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop
            stop-color="#ffd900"
            :stop-opacity="stopOpacity"
          />
          <stop offset="100%" stop-color="currentColor" stop-opacity="0" />
        </radialGradient>
      </defs>

      <circle
        cx="690"
        cy="410"
        :r="glowRadius"
        fill="url(#bulbGradient)"
        class="glow-effect"
        :style="{ opacity: glowIntensity }"
      />

      <g
        id="layer1"
        transform="translate(150, 1050) scale(0.09, -0.09)"
        filter="url(#glow)"
      >
        <path
          v-for="(path, index) in paths"
          :key="index"
          :d="path"
          :style="{
            strokeDasharray: `${pathLengths[index]} ${pathLengths[index]}`,
            strokeDashoffset: animationProgress[index],
            opacity: glitchOpacity[index],
          }"
          stroke="currentColor"
          fill="none"
          stroke-width="30"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="shadow-md"
        />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.bulb-svg {
  transition: transform 0.5s ease-in-out;
  shape-rendering: geometricPrecision;
  will-change: transform;
}

.glow-effect {
  animation: pulse 1.8s cubic-bezier(0.4, 0.2, 0.6, 0.8) infinite;
  transition: all 200ms ease-in-out;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.4;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(-15deg);
  }
  50% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(-15deg);
  }
}

.rotate-animation {
  animation: rotate 30s ease-in-out infinite;
}
</style>
