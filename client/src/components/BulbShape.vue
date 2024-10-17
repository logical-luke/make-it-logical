<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from "vue";
import paths from "@/assets/bulbPaths.json";

// Precomputed constants
const drawDuration = 2500;
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

// Reactive refs
const pathLengths = ref<number[]>([]);
const animationProgress = ref<number[]>([]);
const glitchOpacity = ref<number[]>(paths.map(() => 1));
const rotation = ref(0);
const bulbVisible = ref(false);
const glowIntensity = ref(0);
const svgReady = ref(false);

// Computed properties
const stopOpacity = computed(() => Math.sin(bulbVisible.value ? 0.45 : 0.1));
const glowRadius = computed(() => 430 * glowIntensity.value);

// Non-reactive variables
let randomOrder: number[] = [];
let animationFrameId: number | null = null;
let lastGlitchTime = 0;
let animationStartTime: number | null = null;
const animationDelay = 200;

// Easing function for smoother animation
const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

// Precompute path lengths
const precomputePathLengths = (): number[] => {
  const svgNS = "http://www.w3.org/2000/svg";
  const dummySvg = document.createElementNS(svgNS, "svg");
  dummySvg.style.position = "absolute";
  dummySvg.style.visibility = "hidden";
  document.body.appendChild(dummySvg);

  const lengths = paths.map((path) => {
    const dummyPath = document.createElementNS(svgNS, "path");
    dummyPath.setAttribute("d", path);
    dummySvg.appendChild(dummyPath);
    const length = dummyPath.getTotalLength();
    dummySvg.removeChild(dummyPath);
    return length;
  });

  document.body.removeChild(dummySvg);
  return lengths;
};

// Animation function
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
  const easedProgress = easeInOutCubic(progress);
  const eraseProgress =
    (cycleTime - (drawDuration + glowInDuration + pauseDuration)) /
    eraseDuration;
  const easedEraseProgress = easeInOutCubic(eraseProgress);
  switch (true) {
    case cycleTime < drawDuration:
      for (let i = 0; i < randomOrder.length; i++) {
        const index = randomOrder[i];
        const pathProgress = Math.max(
          0,
          Math.min(1, easedProgress * paths.length - i * 0.1),
        );
        animationProgress.value[index] =
          pathLengths.value[index] * (1 - easeInOutCubic(pathProgress));
      }
      bulbVisible.value = progress > 0;
      glowIntensity.value = easeInOutCubic(progress);
      break;
    case cycleTime < drawDuration + glowInDuration:
      animationProgress.value.fill(0);
      glowIntensity.value = easeInOutCubic(
        (cycleTime - drawDuration) / glowInDuration,
      );
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
          Math.min(1, easedEraseProgress * paths.length - i * 0.1),
        );
        animationProgress.value[index] =
          pathLengths.value[index] * easeInOutCubic(pathProgress);
      }
      glowIntensity.value = 1 - easedEraseProgress;
      break;
    default:
      animationProgress.value = [...pathLengths.value];
      bulbVisible.value = false;
      glowIntensity.value = 0;
  }

  rotation.value = Math.sin(adjustedTimestamp / 15000) * 35;

  // Glitch effect
  if (timestamp - lastGlitchTime >= glitchInterval) {
    lastGlitchTime = timestamp;
    const isDark = document.documentElement.classList.contains("dark");
    if (bulbVisible.value && glowIntensity.value > 0) {
      for (let i = 0; i < glitchOpacity.value.length; i++) {
        glitchOpacity.value[i] =
          Math.random() < 0.02 ? (isDark ? 0.4 : 0.2) : 1;
      }
    } else {
      glitchOpacity.value.fill(1);
    }
  }

  animationFrameId = requestAnimationFrame(animate);
};

// Initialization
onMounted(() => {
  pathLengths.value = precomputePathLengths();
  // Start with all paths hidden
  animationProgress.value = pathLengths.value.map((length) => length);
  randomOrder = paths.map((_, i) => i).sort(() => Math.random() - 0.5);

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
