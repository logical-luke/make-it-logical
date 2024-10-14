<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
import { ref, onMounted, computed, onUnmounted } from "vue";

import typescriptLogo from "@/assets/tech/typescript-logo.svg";
import phpLogo from "@/assets/tech/php-logo.svg";
import vueLogo from "@/assets/tech/vue-logo.svg";
import kafkaLogo from "@/assets/tech/kafka-logo.svg";
import githubActionsLogo from "@/assets/tech/github-actions-logo.svg";
import awsLogo from "@/assets/tech/aws-logo.svg";
import gcpLogo from "@/assets/tech/gcp-logo.svg";
import pythonLogo from "@/assets/tech/python-logo.svg";
import nodejsLogo from "@/assets/tech/nodejs-logo.svg";
import tailwindLogo from "@/assets/tech/tailwindcss-logo.svg";
import gitLogo from "@/assets/tech/git-logo.svg";
import grafanaLogo from "@/assets/tech/grafana-logo.svg";
import kumaLogo from "@/assets/tech/kuma-logo.svg";
import prometheusLogo from "@/assets/tech/prometheus-logo.svg";
import openaiLogo from "@/assets/tech/openai-logo.svg";
import symfonyLogo from "@/assets/tech/symfony-logo.svg";
import laravelLogo from "@/assets/tech/laravel-logo.svg";
import cloudflareLogo from "@/assets/tech/cloudflare-logo.svg";
import sentryLogo from "@/assets/tech/sentry-logo.svg";
import rabbitMqLogo from "@/assets/tech/rabbitmq-logo.svg";
import dockerLogo from "@/assets/tech/docker-logo.svg";
import mysqlLogo from "@/assets/tech/mysql-logo.svg";
import analyticsLogo from "@/assets/tech/analytics-logo.svg";
import cypressLogo from "@/assets/tech/cypress-logo.svg";

const technologies = [
  { name: "TypeScript", logo: typescriptLogo },
  { name: "Vue.js", logo: vueLogo },
  { name: "PHP", logo: phpLogo },
  { name: "Docker", logo: dockerLogo },
  { name: "GitHub Actions", logo: githubActionsLogo },
  { name: "AWS", logo: awsLogo },
  { name: "GCP", logo: gcpLogo },
  { name: "Symfony", logo: symfonyLogo },
  { name: "Python", logo: pythonLogo },
  { name: "MySQL", logo: mysqlLogo },
  { name: "Apache Kafka", logo: kafkaLogo },
  { name: "Node.js", logo: nodejsLogo },
  { name: "Laravel", logo: laravelLogo },
  { name: "Tailwind CSS", logo: tailwindLogo },
  { name: "Google Analytics", logo: analyticsLogo },
  { name: "Git", logo: gitLogo },
  { name: "Grafana", logo: grafanaLogo },
  { name: "Uptime Kuma", logo: kumaLogo },
  { name: "Prometheus", logo: prometheusLogo },
  { name: "OpenAI", logo: openaiLogo },
  { name: "Cloudflare", logo: cloudflareLogo },
  { name: "Sentry", logo: sentryLogo },
  { name: "Cypress", logo: cypressLogo },
  { name: "RabbitMQ", logo: rabbitMqLogo },
];

const containerRef = ref<HTMLDivElement | null>(null);
const sliderRef = ref<HTMLDivElement | null>(null);
const scrollPosition = ref(0);
const scrollSpeed = 0.5;

const clonedTechnologies = computed(() => [...technologies, ...technologies]);

const isMouseDown = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);
const isAutoScrolling = ref(true);
let autoScrollTimeout: number | null = null;
let animationFrameId: number | null = null;

const targetScrollLeft = ref(0);
const velocity = ref(0);
const lastScrollLeft = ref(0);
const lastTimestamp = ref(0);
const autoScrollDelay = 1900;

const handleInteractionStart = (e: MouseEvent | TouchEvent) => {
  isMouseDown.value = true;
  isAutoScrolling.value = false;
  const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
  startX.value = pageX - (containerRef.value?.offsetLeft || 0);
  scrollLeft.value = containerRef.value?.scrollLeft || 0;
  lastScrollLeft.value = scrollLeft.value;
  lastTimestamp.value = Date.now();
  velocity.value = 0;

  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }

  if (autoScrollTimeout) {
    clearTimeout(autoScrollTimeout);
  }
};

const handleInteractionEnd = () => {
  isMouseDown.value = false;
  if (autoScrollTimeout) clearTimeout(autoScrollTimeout);
  autoScrollTimeout = window.setTimeout(() => {
    isAutoScrolling.value = true;
    if (containerRef.value) {
      scrollPosition.value = containerRef.value.scrollLeft;
    }
  }, autoScrollDelay);

  animateScroll();
};

const handleMouseMove = (e: MouseEvent | TouchEvent) => {
  if (!isMouseDown.value) return;
  e.preventDefault();
  const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
  const x = pageX - (containerRef.value?.offsetLeft || 0);
  const walk = (x - startX.value) * 2;
  if (containerRef.value) {
    const newScrollLeft = scrollLeft.value - walk;
    containerRef.value.scrollLeft = newScrollLeft;
    targetScrollLeft.value = newScrollLeft;

    const now = Date.now();
    const dt = now - lastTimestamp.value;
    const dx = newScrollLeft - lastScrollLeft.value;
    velocity.value = dx / dt;

    lastScrollLeft.value = newScrollLeft;
    lastTimestamp.value = now;
  }
};

const handleWheel = (e: WheelEvent) => {
  e.preventDefault();
  if (containerRef.value) {
    targetScrollLeft.value += e.deltaY;
    isAutoScrolling.value = false;
    if (autoScrollTimeout) clearTimeout(autoScrollTimeout);
    autoScrollTimeout = window.setTimeout(() => {
      isAutoScrolling.value = true;
    }, 5000);

    if (animationFrameId === null) {
      animateScroll();
    }
  }
};

const animateScroll = () => {
  if (!containerRef.value) return;

  const currentScrollLeft = containerRef.value.scrollLeft;
  const diff = targetScrollLeft.value - currentScrollLeft;

  if (Math.abs(diff) > 0.5 || Math.abs(velocity.value) > 0.1) {
    containerRef.value.scrollLeft += diff * 0.1 + velocity.value * 10;
    velocity.value *= 0.95;

    animationFrameId = requestAnimationFrame(animateScroll);
  } else {
    containerRef.value.scrollLeft = targetScrollLeft.value;
    velocity.value = 0;
    animationFrameId = null;
  }
};

const startAutoScroll = () => {
  let lastTime = 0;
  const animate = (time: number) => {
    if (isAutoScrolling.value && time - lastTime > 16) {
      if (containerRef.value && sliderRef.value) {
        scrollPosition.value += scrollSpeed;
        if (scrollPosition.value >= sliderRef.value.scrollWidth / 2) {
          scrollPosition.value -= sliderRef.value.scrollWidth / 2;
        }
        containerRef.value.scrollLeft = scrollPosition.value;
        targetScrollLeft.value = scrollPosition.value;
      }
      lastTime = time;
    }
    requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
};

const activeTechnologies = ref<Set<string>>(new Set());
let blinkInterval: number;
const blinkHistory = ref<Set<string>>(new Set());

const getVisibleLogos = () => {
  if (!containerRef.value) return [];

  const containerRect = containerRef.value.getBoundingClientRect();
  const logoElements = containerRef.value.querySelectorAll(".logo-wrapper");
  const visibleLogos: string[] = [];

  logoElements.forEach((logo) => {
    const logoRect = logo.getBoundingClientRect();
    const techName = logo.getAttribute("data-tech-name") || "";
    if (
      logoRect.left >= containerRect.left &&
      logoRect.right <= containerRect.right
    ) {
      visibleLogos.push(techName);
    }
  });

  return visibleLogos;
};

const updateBlinkHistory = () => {
  const visibleLogos = getVisibleLogos();
  const allLogos = technologies.map((tech) => tech.name);

  allLogos.forEach((logo) => {
    if (!visibleLogos.includes(logo)) {
      blinkHistory.value.delete(logo);
    }
  });
};

const startBlinkEffect = () => {
  const blinkLogo = () => {
    updateBlinkHistory();
    const visibleLogos = getVisibleLogos();
    const availableLogos = visibleLogos.filter(
      (logo) => !blinkHistory.value.has(logo),
    );

    if (availableLogos.length > 0 && Math.random() < 0.6) {
      const randomIndex = Math.floor(Math.random() * availableLogos.length);
      const techToActivate = availableLogos[randomIndex];

      activeTechnologies.value.add(techToActivate);
      blinkHistory.value.add(techToActivate);

      setTimeout(() => {
        activeTechnologies.value.delete(techToActivate);
      }, 1000);
    }
  };

  blinkInterval = window.setInterval(blinkLogo, 3000);
};
onMounted(() => {
  startAutoScroll();
  startBlinkEffect();
  if (containerRef.value) {
    containerRef.value.addEventListener("wheel", handleWheel, {
      passive: false,
    });
  }
});

onUnmounted(() => {
  if (blinkInterval) {
    clearInterval(blinkInterval);
  }
  if (containerRef.value) {
    containerRef.value.removeEventListener("wheel", handleWheel);
  }
  if (autoScrollTimeout) {
    clearTimeout(autoScrollTimeout);
  }
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
  }
});

const blackLogos = [
  "git",
  "kafka",
  "github-actions",
  "aws",
  "cypress",
  "sentry",
  "symfony",
  "openai",
];

const isBlackLogo = (name: string) =>
  blackLogos.some((logo) => name.toLowerCase().includes(logo));
</script>

<template>
  <div
    class="technology-slider-container relative px-4 md:px-6 lg:px-8 bg-gray-100 dark:bg-zinc-900"
  >
    <div class="relative">
      <div
        ref="containerRef"
        class="technology-slider overflow-x-hidden cursor-grab active:cursor-grabbing"
        @mousedown="handleInteractionStart"
        @touchstart="handleInteractionStart"
        @mouseup="handleInteractionEnd"
        @mouseleave="handleInteractionEnd"
        @touchend="handleInteractionEnd"
        @mousemove="handleMouseMove"
        @touchmove="handleMouseMove"
        @wheel="handleWheel"
      >
        <div ref="sliderRef" class="flex whitespace-nowrap">
          <div
            v-for="tech in clonedTechnologies"
            :key="tech.name"
            class="inline-flex flex-col items-center justify-center w-40 mx-4"
          >
            <div
              class="logo-wrapper w-24 h-24 flex items-center justify-center bg-transparent"
              :class="{ 'active-logo': activeTechnologies.has(tech.name) }"
              :data-tech-name="tech.name"
            >
              <img
                :src="tech.logo"
                :alt="tech.name"
                draggable="false"
                loading="lazy"
                :class="[
                  'max-w-full max-h-full object-contain transition-all duration-300 logo-svg bg-transparent',
                  {
                    'logo-default': !isBlackLogo(tech.name),
                    'logo-dark-mode': isBlackLogo(tech.name),
                  },
                ]"
              />
            </div>
            <p
              class="mt-2 text-xs md:text-sm font-medium text-gray-600 dark:text-gray-300 truncate w-full text-center"
            >
              {{ tech.name }}
            </p>
          </div>
        </div>
      </div>
      <div class="fade-left"></div>
      <div class="fade-right"></div>
    </div>

    <div class="mt-6 text-xs text-gray-700 dark:text-gray-300 text-center px-4">
      {{
        t(
          "The logos displayed are trademarks or registered trademarks of their respective owners. Their use here does not imply endorsement of our website or service by the trademark owners.",
        )
      }}
    </div>
  </div>
</template>

<style scoped>
.technology-slider-container {
  width: 100%;
}

.technology-slider {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.technology-slider img {
  pointer-events: none;
}

.logo-default {
  opacity: 0.7;
  filter: grayscale(100%);
}

.logo-dark-mode {
  opacity: 0.7;
  filter: grayscale(100%);
}

:root.dark .logo-dark-mode {
  filter: grayscale(100%) brightness(0) invert(1);
}

.logo-default:hover,
.logo-dark-mode:hover {
  opacity: 1;
  filter: grayscale(0%);
}

:root.dark .logo-dark-mode:hover {
  filter: grayscale(0%) brightness(0) invert(1);
}

.active-logo img {
  opacity: 0.3 !important;
  transform: scale(0.7);
}

:root.dark .active-logo .logo-dark-mode {
  filter: grayscale(0%) brightness(0) invert(1) !important;
}

@keyframes blink {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.03);
    opacity: 1;
  }
}

.active-logo {
  animation: blink 0.5s ease-in-out;
}

.technology-slider::-webkit-scrollbar {
  display: none;
}

.logo-wrapper {
  position: relative;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.logo-svg {
  transition: all 0.3s ease;
}

:root.dark .dark-mode-white-fill {
  filter: brightness(0) invert(1);
}

.fade-left,
.fade-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  pointer-events: none;
}

.fade-left {
  left: 0;
  background: linear-gradient(
    to right,
    rgb(243 244 246) 0%,
    rgba(243, 244, 246, 0) 100%
  );
}

.fade-right {
  right: 0;
  background: linear-gradient(
    to left,
    rgb(243 244 246) 0%,
    rgba(243, 244, 246, 0) 100%
  );
}

:root.dark .fade-left {
  background: linear-gradient(to right, rgb(24 24 27), rgba(24, 24, 27, 0));
}

:root.dark .fade-right {
  background: linear-gradient(to left, rgb(24 24 27), rgba(24, 24, 27, 0));
}
</style>
