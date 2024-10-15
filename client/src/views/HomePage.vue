<script setup lang="ts">
import ServicesSection from "@/components/ServicesSection.vue";
import HeroSection from "@/components/HeroSection.vue";
import ProcessSection from "@/components/ProcessSection.vue";
import ContactSection from "@/components/ContactSection.vue";
</script>

<template>
  <div class="flex flex-col gap-10 md:gap-24">
    <HeroSection />
    <ServicesSection />
    <ProcessSection />
    <ContactSection />
  </div>
</template>
