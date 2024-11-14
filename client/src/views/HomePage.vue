<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ServicesSection from "@/components/ServicesSection.vue";
import HeroSection from "@/components/HeroSection.vue";
import ProcessSection from "@/components/ProcessSection.vue";

interface HomePageTexts {
  heroSection: {
    getSolutions: string;
    notConfusion: string;
    weBuild: string;
    webAppsAndWebsites: string;
  };
  servicesSection: {
    mainText: string;
    linkText: string;
    services: Array<{
      title: string;
      additionalInfo: string;
      tag: string;
    }>;
  };
  processSection: {
    mainText: string;
    linkText: string;
    processSteps: Array<{
      label: string;
      additionalInfo: string;
    }>;
  };
}

const texts = ref<HomePageTexts | null>(null);

onMounted(async () => {
  const response = await fetch('/homePageTexts.json');
  texts.value = await response.json();
});
</script>

<template>
  <div v-if="texts" class="flex flex-col gap-10 md:gap-24">
    <HeroSection :texts="texts.heroSection" />
    <ServicesSection :texts="texts.servicesSection" />
    <ProcessSection :texts="texts.processSection" />
  </div>
</template>