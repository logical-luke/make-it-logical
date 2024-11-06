<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

import { ref } from "vue";
import HomePageSection from "@/components/HomePageSection.vue";
import ExpandableList from "@/components/ExpandableList.vue";

const services = ref([
  {
    title: t("Web App & Website Development"),
    additionalInfo: t(
      "Scalable, high-performing solutions that evolve with your ambitions. We dive deep into your challenges, creating systems that streamline processes and revolutionize operations. Our focus on quality and security forms the bedrock of every product, freeing you to drive your business forward."
    ),
    tag: t("Automate processes & boost productivity"),
  },
  {
    title: t("User Experience (UX) Design"),
    additionalInfo: t(
      "We immerse in your users' world, uncovering needs and pain points. This insight drives our design process, resulting in interfaces tailored for your audience. Through collaboration and refinement, we ensure every interaction delights. The outcome? A digital experience that fosters loyalty, setting you apart in a crowded market."
    ),
    tag: t("Increase user satisfaction & retention"),
  },
  {
    title: t("Fixes & Enhancements"),
    additionalInfo: t(
      "Keep your applications ahead of the curve. Regular audits uncover hidden potential, leading to strategic enhancements. This proactive approach boosts performance, increases user satisfaction, and unlocks new capabilities. Your software becomes a dynamic asset, adapting to emerging market opportunities."
    ),
    tag: t("Continuous improvements for competitive edge"),
  },
  {
    title: t("System Modernization & Cloud Migration"),
    additionalInfo: t(
      "Propel your infrastructure into the future. We preserve valuable business logic while upgrading to cutting-edge architectures and cloud solutions. This transformation enhances performance, scalability, and efficiency. Gain access to advanced data analysis, seamless remote work, and rapid deployment. Convert technological debt into a competitive advantage."
    ),
    tag: t("Improve scalability & reduce costs"),
  },
]);

const serviceItems = services.value.map((service) => ({
  title: service.title,
  sublists: [],
  additionalInfo: service.additionalInfo,
  tag: service.tag,
}));
</script>

<template>
  <HomePageSection link-target="/services" link-text="Explore Services">
    <p class="flex flex-col gap-2 md:text-lg mb-12 max-w-4xl">
      {{ t("User-centric digital experiences drive business growth.") }}
    </p>
    <ExpandableList :items="serviceItems" />
  </HomePageSection>
</template>

<style scoped></style>
