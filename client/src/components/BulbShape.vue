<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

const animationDuration = 700;
const pauseDuration = 5700;

const paths = [
  "M 7466.21,3888.71 H 4533.79 L 3244.08,5251.82 2510.1,7244.04 3055.35,9487.92 4753.98,10730.4 H 7246.02 L 8944.66,9487.92 9489.89,7244.04 8755.92,5251.82 7466.21,3888.71",
  "m 4510.81,3888.71 382.95,-1095.2 h 2184.49 l 382.95,1095.2",
  "m 7207.68,2793.51 c 0,-71.49 -57.95,-129.43 -129.43,-129.43 -71.47,0 -129.42,57.94 -129.42,129.43 0,71.47 57.95,129.41 129.42,129.41 71.48,0 129.43,-57.94 129.43,-129.41",
  "m 3047.21,9490.98 2689.32,-241.35 1426.02,1502.87 1059.03,-2956.84 736.15,1695.32 29.28,17.3 L 4748.47,7491.58 3244.08,5251.82",
  "M 2534.99,7223.07 5447.6,5735.86 8797.77,5365.44 7083.33,6714.5 l 27.96,51.26 1110.29,1029.9 -3407.76,2945.24",
  "M 4813.82,10699 5736.53,9249.63 7083.33,6714.5 9489.89,7244.04",
  "M 8797.77,5365.44 8221.58,7795.66",
  "M 3273.83,5296.1 5401,5793.7 7083.33,6714.5",
  "M 2567.61,7223.07 5736.53,9249.63",
  "m 3145.47,9519.93 1603,-2028.35 953.32,1812.63",
  "M 4719.49,7448.43 5447.6,5735.86 4613.43,3923.05",
  "M 5447.6,5735.86 7498.09,3888.71",
  "m 2639.53,7223.07 c 0,-71.47 -57.95,-129.42 -129.43,-129.42 -71.47,0 -129.42,57.95 -129.42,129.42 0,71.48 57.95,129.43 129.42,129.43 71.48,0 129.43,-57.95 129.43,-129.43",
  "m 3176.63,9490.98 c 0,-71.48 -57.94,-129.42 -129.42,-129.42 -71.48,0 -129.42,57.94 -129.42,129.42 0,71.48 57.94,129.42 129.42,129.42 71.48,0 129.42,-57.94 129.42,-129.42",
  "m 9087.16,9490.98 c 0,-71.48 -57.95,-129.42 -129.43,-129.42 -71.47,0 -129.42,57.94 -129.42,129.42 0,71.48 57.95,129.42 129.42,129.42 71.48,0 129.43,-57.94 129.43,-129.42",
  "m 7372.19,10730.4 c 0,-71.5 -57.94,-129.5 -129.43,-129.5 -71.47,0 -129.41,58 -129.41,129.5 0,71.4 57.94,129.4 129.41,129.4 71.49,0 129.43,-58 129.43,-129.4",
  "m 4877.89,10730.4 c 0,-71.5 -57.94,-129.5 -129.42,-129.5 -71.48,0 -129.42,58 -129.42,129.5 0,71.4 57.94,129.4 129.42,129.4 71.48,0 129.42,-58 129.42,-129.4",
  "m 9619.32,7223.07 c 0,-71.47 -57.94,-129.42 -129.43,-129.42 -71.47,0 -129.41,57.95 -129.41,129.42 0,71.48 57.94,129.43 129.41,129.43 71.49,0 129.43,-57.95 129.43,-129.43",
  "m 3368.92,5239.55 c 0,-71.47 -57.95,-129.41 -129.42,-129.41 -71.48,0 -129.42,57.94 -129.42,129.41 0,71.49 57.94,129.42 129.42,129.42 71.47,0 129.42,-57.93 129.42,-129.42",
  "m 8897.19,5239.55 c 0,-71.47 -57.94,-129.41 -129.43,-129.41 -71.47,0 -129.41,57.94 -129.41,129.41 0,71.49 57.94,129.42 129.41,129.42 71.49,0 129.43,-57.93 129.43,-129.42",
  "m 5577.03,5793.7 c 0,-71.47 -57.95,-129.42 -129.43,-129.42 -71.47,0 -129.42,57.95 -129.42,129.42 0,71.48 57.95,129.43 129.42,129.43 71.48,0 129.43,-57.95 129.43,-129.43",
  "m 4881.25,7491.58 c 0,-71.48 -57.95,-129.42 -129.42,-129.42 -71.48,0 -129.43,57.94 -129.43,129.42 0,71.48 57.95,129.42 129.43,129.42 71.47,0 129.42,-57.94 129.42,-129.42",
  "m 5831.21,9249.63 c 0,-71.47 -57.94,-129.41 -129.42,-129.41 -71.47,0 -129.42,57.94 -129.42,129.41 0,71.48 57.95,129.43 129.42,129.43 71.48,0 129.42,-57.95 129.42,-129.43",
  "m 8351,7769.77 c 0,-71.47 -57.94,-129.42 -129.42,-129.42 -71.48,0 -129.42,57.95 -129.42,129.42 0,71.48 57.94,129.42 129.42,129.42 71.48,0 129.42,-57.94 129.42,-129.42",
  "m 7212.74,6714.49 c 0,-71.47 -57.94,-129.42 -129.41,-129.42 -71.47,0 -129.42,57.95 -129.42,129.42 0,71.48 57.95,129.43 129.42,129.43 71.47,0 129.41,-57.95 129.41,-129.43",
  "m 4663.21,3888.71 c 0,-71.47 -57.95,-129.42 -129.42,-129.42 -71.48,0 -129.42,57.95 -129.42,129.42 0,71.48 57.94,129.42 129.42,129.42 71.47,0 129.42,-57.94 129.42,-129.42",
  "m 7595.63,3888.71 c 0,-71.47 -57.95,-129.42 -129.42,-129.42 -71.47,0 -129.42,57.95 -129.42,129.42 0,71.48 57.95,129.42 129.42,129.42 71.47,0 129.42,-57.94 129.42,-129.42",
  "m 5023.18,2793.51 c 0,-71.49 -57.94,-129.43 -129.42,-129.43 -71.47,0 -129.42,57.94 -129.42,129.43 0,71.47 57.95,129.41 129.42,129.41 71.48,0 129.42,-57.94 129.42,-129.41",
  "m 5023.18,2033.95 c 0,-71.45 -57.94,-129.45 -129.42,-129.45 -71.47,0 -129.42,58 -129.42,129.45 0,71.47 57.95,129.41 129.42,129.41 71.48,0 129.42,-57.94 129.42,-129.41",
  "m 5640.93,1364.5 c 105.52,-138.6 -51.08,-295.2 -189.6,-189.7 -105.51,138.6 51.08,295.2 189.6,189.7",
  "m 6359.06,1364.5 c -105.51,-138.6 51.09,-295.2 189.61,-189.7 105.51,138.6 -51.07,295.2 -189.61,189.7",
  "m 7207.68,2033.95 c 0,-71.45 -57.95,-129.45 -129.43,-129.45 -71.47,0 -129.42,58 -129.42,129.45 0,71.47 57.95,129.41 129.42,129.41 71.48,0 129.43,-57.94 129.43,-129.41",
];

const pathLengths = computed(() => {
  return paths.map((path) => {
    const dummyPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    );
    dummyPath.setAttribute("d", path);
    return dummyPath.getTotalLength();
  });
});

const animationProgress = ref(pathLengths.value.map((length) => length));
const glitchOpacity = ref(paths.map(() => 1));
const rotation = ref(0);

const animate = async () => {
  const randomOrder = paths.map((_, i) => i).sort(() => Math.random() - 0.5);

  for (const index of randomOrder) {
    animationProgress.value[index] = 0;
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  await new Promise((resolve) => setTimeout(resolve, animationDuration));

  await new Promise((resolve) => setTimeout(resolve, pauseDuration));

  for (const index of randomOrder.reverse()) {
    animationProgress.value[index] = pathLengths.value[index];
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  await new Promise((resolve) => setTimeout(resolve, animationDuration));

  await new Promise((resolve) => setTimeout(resolve, pauseDuration / 4));

  requestAnimationFrame(animate);
};

const glitchEffect = () => {
  setInterval(() => {
    const isDark = document.documentElement.classList.contains("dark");
    glitchOpacity.value = paths.map(() =>
      Math.random() < 0.02 ? (isDark ? 0.7 : 0.2) : 1,
    );
  }, 200);
};

const rotateEffect = () => {
  let rotateInterval: number;
  const rotate = () => {
    rotation.value = Math.sin(Date.now() / 1000) * 7; // Increased amplitude
    rotateInterval = requestAnimationFrame(rotate);
  };
  rotate();
  return () => cancelAnimationFrame(rotateInterval);
};

onMounted(() => {
  animationProgress.value = pathLengths.value.map((length) => length);

  setTimeout(() => {
    animate();
    glitchEffect();
    rotateEffect();
  }, 200);
});
</script>

<template>
  <div class="relative">
    <svg
      id="svg1"
      viewBox="0 0 1200 1200"
      xmlns="http://www.w3.org/2000/svg"
      class="bulb-svg text-black dark:text-gray-200"
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
          <stop offset="10%" stop-color="currentColor" stop-opacity="0.25" />
          <stop offset="100%" stop-color="currentColor" stop-opacity="0" />
        </radialGradient>
      </defs>

      <circle
        cx="690"
        cy="410"
        r="410"
        fill="url(#bulbGradient)"
        class="glow-effect"
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
            transition: `stroke-dashoffset ${animationDuration}ms ease-in-out ${index * 50}ms`,
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
