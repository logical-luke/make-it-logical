<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
import { ref } from "vue";
import HomePageSection from "@/components/HomePageSection.vue";
import ExpandableList from "@/components/ExpandableList.vue";

const processSteps = ref([
  {
    label: t("Listen"),
    additionalInfo: t(
      "Your vision sets our course. We start by immersing ourselves in your business, understanding your goals, challenges, and aspirations. Through comprehensive market research and stakeholder interviews, we analyze your competitive landscape and uncover opportunities. This phase culminates in a focused project roadmap that aligns technology initiatives with your business strategy, setting the stage for impactful solutions.",
    ),
  },
  {
    label: t("Design"),
    additionalInfo: t(
      "Effective design bridges user needs and business goals. We create detailed user personas and journey maps to guide our process. Our designs balance aesthetics with functionality, ensuring intuitive user experiences. Rapid prototyping and user testing allow us to validate concepts early. This approach leads to interfaces that not only look appealing but significantly enhance user satisfaction and task completion rates.",
    ),
  },
  {
    label: t("Build"),
    additionalInfo: t(
      "Quality development is an investment in your future. We employ agile methodologies to ensure flexibility and continuous delivery. Our coding standards emphasize cleanliness, efficiency, and security. Integrating robust testing frameworks maintains high quality throughout development. This meticulous approach results in reliable, scalable software that forms a solid foundation for your digital presence.",
    ),
  },
  {
    label: t("Deliver"),
    additionalInfo: t(
      "Launching marks the beginning of your solution's journey. We ensure a smooth transition from development to production with comprehensive testing and staged rollouts. Our process includes thorough documentation and user training to facilitate adoption. Proactive monitoring systems allow us to address potential issues swiftly. This phase culminates in the successful deployment of your solution, primed to deliver real-world value.",
    ),
  },
  {
    label: t("Improve"),
    additionalInfo: t(
      "Digital solutions thrive on continuous enhancement. We implement analytics to gather insights on user behavior and system performance. Regular feedback sessions with stakeholders guide our improvement strategies. Updates are prioritized based on business impact and user needs. This ongoing process ensures your solution remains cutting-edge, adapting to new challenges and capitalizing on emerging opportunities.",
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
  <HomePageSection
    title="Partnership Methodology"
    link-target="/process"
    link-text="Discover Process"
  >
    <p class="flex flex-col gap-2 md:text-lg mb-12 max-w-4xl">
      <span>{{
        t(
          "A comprehensive, end-to-end digital transformation process maximizes the full potential.",
        )
      }}</span>
      <span>{{
        t(
          "By harmonizing people, technologies, and business processes, you achieve sustainable growth and competitive advantage.",
        )
      }}</span>
    </p>
    <ExpandableList :items="processItems" />
  </HomePageSection>
</template>

<style scoped></style>
