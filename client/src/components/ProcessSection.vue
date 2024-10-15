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
      "Understanding is the foundation of success. We begin by deeply exploring your business goals, challenges, and vision. This phase involves comprehensive market research and stakeholder interviews. We analyze competitors, identify opportunities, and define clear, measurable objectives. The outcome is a well-defined project roadmap that aligns technology initiatives with business strategy, setting the stage for impactful solutions.",
    ),
  },
  {
    label: t("Design"),
    additionalInfo: t(
      "Good design bridges user needs and business goals. We create user personas and journey maps to guide our process. Our designs balance aesthetics with functionality, ensuring intuitive user experiences. We use rapid prototyping and user testing to validate concepts early. This approach leads to interfaces that not only look great but significantly enhance user satisfaction and task completion rates.",
    ),
  },
  {
    label: t("Build"),
    additionalInfo: t(
      "Quality development is an investment in your future. We employ agile methodologies to ensure flexibility and continuous delivery. Our coding standards emphasize cleanliness, efficiency, and security. We integrate robust testing frameworks to maintain high quality throughout development. The result is reliable, scalable software that forms a solid foundation for your digital presence.",
    ),
  },
  {
    label: t("Deliver"),
    additionalInfo: t(
      "Launching is just the beginning of the journey. We ensure a smooth transition from development to production with comprehensive testing and staged rollouts. Our process includes thorough documentation and user training to facilitate adoption. We set up monitoring systems for proactive issue resolution. This phase culminates in the successful deployment of your solution, ready to deliver real-world value.",
    ),
  },
  {
    label: t("Improve"),
    additionalInfo: t(
      "Digital solutions thrive on continuous improvement. We implement analytics to gather insights on user behavior and system performance. Regular feedback sessions with users and stakeholders guide our enhancement strategies. We prioritize updates based on business impact and user needs. This ongoing process ensures your solution remains cutting-edge, continuously adapting to new challenges and opportunities.",
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
    title="Proven Partnership Methodology"
    link-target="/process"
    link-text="Discover Process"
  >
    <p class="flex flex-col gap-2 md:text-lg mb-12 max-w-4xl">
      <span>{{
        t(
          "A comprehensive, end-to-end digital transformation process is the foundation for unlocking the full potential of your technology initiatives.",
        )
      }}</span>
      <span>{{
        t(
          "By harmonizing innovative technologies, optimized business processes, and engaged people, we drive sustainable growth and competitive advantage.",
        )
      }}</span>
    </p>
    <ExpandableList :items="processItems" />
  </HomePageSection>
</template>

<style scoped></style>
