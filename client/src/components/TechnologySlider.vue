<script setup lang="ts">
import {ref, onMounted, onUnmounted, computed} from 'vue';

import typescriptLogo from '@/assets/tech/typescript-logo.svg';
import phpLogo from '@/assets/tech/php-logo.svg';
import vueLogo from '@/assets/tech/vue-logo.svg';
import kafkaLogo from '@/assets/tech/kafka-logo.svg';
import githubActionsLogo from '@/assets/tech/github-actions-logo.svg';
import awsLogo from '@/assets/tech/aws-logo.svg';
import gcpLogo from '@/assets/tech/gcp-logo.svg';
import pythonLogo from '@/assets/tech/python-logo.svg';
import nodejsLogo from '@/assets/tech/nodejs-logo.svg';
import tailwindLogo from '@/assets/tech/tailwindcss-logo.svg';
import gitLogo from '@/assets/tech/git-logo.svg';
import grafanaLogo from '@/assets/tech/grafana-logo.svg';
import kumaLogo from '@/assets/tech/kuma-logo.svg';
import prometheusLogo from '@/assets/tech/prometheus-logo.svg';
import openaiLogo from '@/assets/tech/openai-logo.svg';
import symfonyLogo from '@/assets/tech/symfony-logo.svg';
import laravelLogo from '@/assets/tech/laravel-logo.svg';
import cloudflareLogo from '@/assets/tech/cloudflare-logo.svg';
import sentryLogo from '@/assets/tech/sentry-logo.svg';
import rabbitMqLogo from '@/assets/tech/rabbitmq-logo.svg';
import dockerLogo from '@/assets/tech/docker-logo.svg';
import mysqlLogo from '@/assets/tech/mysql-logo.svg';
import analyticsLogo from '@/assets/tech/analytics-logo.svg';
import cypressLogo from '@/assets/tech/cypress-logo.svg';

const technologies = [
  {name: 'TypeScript', logo: typescriptLogo},
  {name: 'Vue.js', logo: vueLogo},
  {name: 'PHP', logo: phpLogo},
  {name: 'Docker', logo: dockerLogo},
  {name: 'GitHub Actions', logo: githubActionsLogo},
  {name: 'AWS', logo: awsLogo},
  {name: 'GCP', logo: gcpLogo},
  {name: 'Symfony', logo: symfonyLogo},
  {name: 'Python', logo: pythonLogo},
  {name: 'MySQL', logo: mysqlLogo},
  {name: 'Apache Kafka', logo: kafkaLogo},
  {name: 'Node.js', logo: nodejsLogo},
  {name: 'Laravel', logo: laravelLogo},
  {name: 'Tailwind CSS', logo: tailwindLogo},
  {name: 'Google Analytics', logo: analyticsLogo},
  {name: 'Git', logo: gitLogo},
  {name: 'Grafana', logo: grafanaLogo},
  {name: 'Uptime Kuma', logo: kumaLogo},
  {name: 'Prometheus', logo: prometheusLogo},
  {name: 'OpenAI', logo: openaiLogo},
  {name: 'Cloudflare', logo: cloudflareLogo},
  {name: 'Sentry', logo: sentryLogo},
  {name: 'Cypress', logo: cypressLogo},
  {name: 'RabbitMQ', logo: rabbitMqLogo},
];

const position = ref(0);
const intervalId = ref<number | null>(null);
const visibleLogos = ref(2);

const totalSlides = computed(() => Math.ceil(technologies.length / visibleLogos.value));

const slide = (direction: 'next' | 'prev') => {
  if (direction === 'next') {
    position.value = (position.value + 1) % totalSlides.value;
  } else {
    position.value = (position.value - 1 + totalSlides.value) % totalSlides.value;
  }
};

const startAutoSlide = () => {
  intervalId.value = setInterval(() => slide('next'), 7000) as unknown as number;
};

const stopAutoSlide = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
  }
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});

const handleNavigation = (direction: 'next' | 'prev') => {
  stopAutoSlide();
  slide(direction);
  startAutoSlide();
};

const disclaimer = ref(`The logos displayed are trademarks or registered trademarks of their respective owners.
Their use here does not imply endorsement of our website or service by the trademark owners.`);

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    visibleLogos.value = 6;
  } else if (window.innerWidth >= 768) {
    visibleLogos.value = 4;
  } else {
    visibleLogos.value = 2;
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
  startAutoSlide();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  stopAutoSlide();
});

const blackLogos = ['git', 'kafka', 'github-actions', 'aws', 'cypress', 'sentry', 'symfony', 'openai'];

const isBlackLogo = (name: string) => blackLogos.some(logo => name.toLowerCase().includes(logo));
</script>


<template>
  <div class="technology-slider-container relative px-4 md:px-6 lg:px-8">
    <div class="technology-slider overflow-hidden">
      <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${position * 100}%)` }">
        <div
            v-for="tech in technologies" :key="tech.name"
            class="flex-none w-1/2 md:w-1/4 lg:w-1/6 px-2 md:px-3 lg:px-4">
          <div class="text-center">
            <div class="logo-wrapper">
              <img
                  :src="tech.logo"
                  :alt="tech.name"
                  :class="[
                  'w-full h-12 md:h-14 lg:h-16 object-contain transition-all duration-300 logo-svg',
                  { 'dark-mode-white-fill': isBlackLogo(tech.name) }
                ]"
              >
            </div>
            <p class="mt-2 text-xs md:text-sm font-medium text-gray-600 dark:text-gray-300 truncate">{{ tech.name }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 text-xs text-gray-500 dark:text-gray-300 text-center px-4">
      {{ disclaimer }}
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

.slider-nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7) !important;
  color: #333 !important;
  border: none !important;
  z-index: 10;
}

.slider-nav-button:hover {
  background-color: rgba(255, 255, 255, 0.9) !important;
}

.slider-nav-button-left {
  left: 0;
}

.slider-nav-button-right {
  right: 0;
}

:deep(.p-button) {
  padding: 0.3rem !important;
}

:deep(.p-button .p-button-icon) {
  font-size: 1rem;
}

@media (min-width: 768px) {
  :deep(.p-button) {
    padding: 0.4rem !important;
  }

  :deep(.p-button .p-button-icon) {
    font-size: 1.25rem;
  }
}

@media (min-width: 1024px) {
  :deep(.p-button) {
    padding: 0.5rem !important;
  }

  :deep(.p-button .p-button-icon) {
    font-size: 1.5rem;
  }
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
</style>