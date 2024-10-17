<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from "vue";
import paths from "@/assets/bulbPaths.json";
import precomputedValues from "@/assets/precomputedBulbValues.json";

// Precomputed constants
const drawDuration = 1500;
const glowInDuration = 300;
const pauseDuration = 12000;
const eraseDuration = 2500;
const finalPauseDuration = 1000;
const totalCycleDuration =
  drawDuration +
  glowInDuration +
  pauseDuration +
  eraseDuration +
  finalPauseDuration;
const glitchInterval = 200;

const pathLengths = ref<number[]>(precomputedValues.pathLengths);
const randomOrder: number[] = precomputedValues.randomOrder;
const glitchPatterns: number[][] = precomputedValues.glitchPatterns;
const glowIntensities: number[] = precomputedValues.glowIntensities;
const rotationValues: number[] = precomputedValues.rotationValues;

const animationProgress = ref<number[]>([...pathLengths.value]);
const glitchOpacity = ref<number[]>(paths.map(() => 1));
const rotation = ref(0);
const bulbVisible = ref(false);
const glowIntensity = ref(0);
const svgReady = ref(false);

const stopOpacity = computed(() => Math.sin(bulbVisible.value ? 0.45 : 0.1));
const glowRadius = computed(() => 430 * glowIntensity.value);

let animationFrameId: number | null = null;
let lastGlitchTime = 0;
let animationStartTime: number | null = null;
const animationDelay = 200;

const animate = (timestamp: number) => {
  if (!svgReady.value) {
    animationFrameId = requestAnimationFrame(animate);
    return;
  }

  if (animationStartTime === null) {
    animationStartTime = timestamp;
  }

  const elapsedTime = timestamp - animationStartTime;

  if (elapsedTime < animationDelay) {
    animationFrameId = requestAnimationFrame(animate);
    return;
  }

  const adjustedTimestamp = elapsedTime - animationDelay;
  const cycleTime = adjustedTimestamp % totalCycleDuration;
  const progress = cycleTime / drawDuration;
  const glowIndex = Math.floor(progress * (glowIntensities.length - 1));
  const glowProgress = (cycleTime - drawDuration) / glowInDuration;
  const eraseProgress =
    (cycleTime - (drawDuration + glowInDuration + pauseDuration)) /
    eraseDuration;
  switch (true) {
    case cycleTime < drawDuration:
      for (let i = 0; i < randomOrder.length; i++) {
        const index = randomOrder[i];
        const pathProgress = Math.max(
          0,
          Math.min(1, progress * paths.length - i * 0.1),
        );
        animationProgress.value[index] =
          pathLengths.value[index] *
          (1 -
            glowIntensities[
              Math.floor(pathProgress * (glowIntensities.length - 1))
            ]);
      }
      bulbVisible.value = progress > 0;
      glowIntensity.value = glowIntensities[glowIndex];
      break;
    case cycleTime < drawDuration + glowInDuration:
      animationProgress.value.fill(0);
      glowIntensity.value =
        glowIntensities[
          Math.floor(glowProgress * (glowIntensities.length - 1))
        ];
      break;
    case cycleTime < drawDuration + glowInDuration + pauseDuration:
      animationProgress.value.fill(0);
      glowIntensity.value = 1;
      break;
    case cycleTime <
      drawDuration + glowInDuration + pauseDuration + eraseDuration:
      for (let i = 0; i < randomOrder.length; i++) {
        const index = randomOrder[i];
        const pathProgress = Math.max(
          0,
          Math.min(1, eraseProgress * paths.length - i * 0.1),
        );
        animationProgress.value[index] =
          pathLengths.value[index] *
          glowIntensities[
            Math.floor(pathProgress * (glowIntensities.length - 1))
          ];
      }
      glowIntensity.value =
        glowIntensities[
          Math.floor((1 - eraseProgress) * (glowIntensities.length - 1))
        ];
      break;
    default:
      animationProgress.value = [...pathLengths.value];
      bulbVisible.value = false;
      glowIntensity.value = 0;
  }

  const rotationIndex =
    Math.floor((adjustedTimestamp / 15000) * rotationValues.length) %
    rotationValues.length;
  rotation.value = rotationValues[rotationIndex];

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
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        svgReady.value = true;
        observer.disconnect();

        if ("requestIdleCallback" in window) {
          requestIdleCallback(() => {
            animationFrameId = requestAnimationFrame(animate);
          });
        } else {
          setTimeout(() => {
            animationFrameId = requestAnimationFrame(animate);
          }, 0);
        }
      }
    },
    { threshold: 0.1 },
  );

  const svg = document.querySelector(".bulb-svg");
  if (svg) observer.observe(svg);
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
      class="bulb-svg text-black dark:text-gray-100"
      :style="{ transform: `rotate(${rotation}deg)` }"
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
            offset="10%"
            stop-color="currentColor"
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
  animation: pulse 2.3s cubic-bezier(0.4, 0.2, 0.6, 0.8) infinite;
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
</style>
