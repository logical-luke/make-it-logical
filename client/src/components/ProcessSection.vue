<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
import { ref } from "vue";
import HomePageSection from "@/components/HomePageSection.vue";
import ExpandableList from "@/components/ExpandableList.vue";

const processSteps = ref([
  {
    label: t("Discover"),
    additionalInfo: t(
      "Your vision becomes actionable tech strategy. Dive deep into business goals, market position, and user needs. Uncover growth opportunities and challenges. Emerge with clear, focused technical requirements aligned with your objectives."
    ),
  },
  {
    label: t("Design"),
    additionalInfo: t(
      "Captivating interfaces that drive conversions. User-centric designs meet intuitive information architecture. Optimized flows and cross-platform consistency maximize engagement. Early prototyping and testing ensure satisfaction and efficiency."
    ),
  },
  {
    label: t("Develop"),
    additionalInfo: t(
      "Witness designs transform into powerful digital realities. Scalable, robust solutions take shape with secure backends and responsive frontends. Seamless third-party integrations create flexible systems, ready to grow alongside your business."
    ),
  },
  {
    label: t("Deploy"),
    additionalInfo: t(
      "Experience impactful launches delivering immediate value. Rigorous testing and smooth deployment processes set the stage. Comprehensive training ensures adoption. Proactive monitoring safeguards against issues, maximizing your digital investment from day one."
    ),
  },
  {
    label: t("Optimize"),
    additionalInfo: t(
      "Keep your solution at the cutting edge. Continuous monitoring of performance and user behavior drives data-driven enhancements. Regular updates prioritize business impact and user needs, ensuring your digital assets evolve with market demands."
    ),
  },
]);

const processItems = processSteps.value.map((step) => ({
  title: step.label,
  sublists: [],
  additionalInfo: step.additionalInfo,
}));
</script>

<template>
  <HomePageSection link-target="/process" link-text="Discover Process">
    <p class="flex flex-col gap-2 md:text-lg mb-12 max-w-4xl">
      {{
        t(
          "A comprehensive transformation process maximizes your potential."
        )
      }}
    </p>
    <ExpandableList :items="processItems" />
  </HomePageSection>
</template>

<style scoped></style>