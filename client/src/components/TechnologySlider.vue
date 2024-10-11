<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
import { ref, onMounted, computed } from "vue";

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
const scrollSpeed = 0.2; // Reduced speed (adjust as needed)

const clonedTechnologies = computed(() => [...technologies, ...technologies]);

const startAutoScroll = () => {
  const animate = () => {
    if (containerRef.value && sliderRef.value) {
      scrollPosition.value += scrollSpeed;
      if (scrollPosition.value >= sliderRef.value.scrollWidth / 2) {
        scrollPosition.value = 0;
      }
      containerRef.value.scrollLeft = scrollPosition.value;
    }
    requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
};

onMounted(() => {
  startAutoScroll();
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
  <div class="technology-slider-container relative px-4 md:px-6 lg:px-8">
    <div class="relative">
      <div ref="containerRef" class="technology-slider overflow-x-hidden">
        <div ref="sliderRef" class="flex whitespace-nowrap">
          <div
            v-for="tech in clonedTechnologies"
            :key="tech.name"
            class="inline-flex flex-col items-center justify-center w-40 mx-4"
          >
            <div
              class="logo-wrapper w-24 h-24 flex items-center justify-center"
            >
              <img
                :src="tech.logo"
                :alt="tech.name"
                :class="[
                  'max-w-full max-h-full object-contain transition-all grayscale opacity-70 duration-300 logo-svg',
                  { 'dark-mode-white-fill': isBlackLogo(tech.name) },
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

    <div class="mt-6 text-xs text-gray-500 dark:text-gray-300 text-center px-4">
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
  width: 100%;
  overflow: hidden;
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
  z-index: 1;
}

.fade-left {
  left: 0;
  background: linear-gradient(to right, white, rgba(255, 255, 255, 0));
}

.fade-right {
  right: 0;
  background: linear-gradient(to left, white, rgba(255, 255, 255, 0));
}

/* Dark mode styles */
:root.dark .fade-left {
  background: linear-gradient(to right, rgb(24 24 27), rgba(24, 24, 27, 0));
}

:root.dark .fade-right {
  background: linear-gradient(to left, rgb(24 24 27), rgba(24, 24, 27, 0));
}
</style>
