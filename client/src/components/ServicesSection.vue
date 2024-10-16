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
      "Your business needs more than just code. We craft scalable, high-performing solutions that evolves with your ambitions. By diving deep into your challenges, we create systems that not only streamline processes but revolutionize operations. Our focus on quality and security forms the bedrock of every product, allowing you to concentrate on driving your business forward while we handle the complex engineering.",
    ),
    tag: t("Solutions to automate processes & boost productivity"),
  },
  {
    title: t("User Experience (UX) Design"),
    additionalInfo: t(
      "In the digital realm, user experience can make or break success. We begin by immersing ourselves in your users' world, uncovering their needs and pain points. This insight drives our design process, resulting in interfaces that feel tailor-made for your audience. Through ongoing collaboration and refinement, we ensure every interaction delights your users. The result is a digital experience that not only meets expectations but fosters loyalty, setting you apart in a crowded market.",
    ),
    tag: t("Intuitive interfaces to increase user satisfaction & retention"),
  },
  {
    title: t("Fixes & Enhancements"),
    additionalInfo: t(
      "Static software quickly becomes obsolete. Our optimization services ensure your applications stay ahead of the curve. Through regular audits, we uncover hidden potential in your software and implement strategic enhancements. This proactive approach boosts performance, increases user satisfaction, and unlocks new capabilities. By aligning closely with your team, we transform your software into a dynamic asset that adapts to emerging market opportunities.",
    ),
    tag: t("Continuous improvements to keep your products competitive"),
  },
  {
    title: t("System Modernization & Cloud Migration"),
    additionalInfo: t(
      "Don't let old systems hinder your progress. Modernization and cloud migration services propel your infrastructure into the future. We begin by preserving valuable business logic while upgrading to cutting-edge architectures and cloud solutions. This transformation enhances performance, scalability, and efficiency. The move to cloud opens doors to advanced data analysis, seamless remote work, and rapid deployment. Together, we'll convert technological debt into a competitive advantage, positioning your business at the forefront of your industry.",
    ),
    tag: t("Upgrades to improve scalability & reduce costs"),
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
      {{ t("User-centric digital experiences drives your business growth.") }}
    </p>
    <ExpandableList :items="serviceItems" />
  </HomePageSection>
</template>

<style scoped></style>
