<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import MainHeader from "@/components/MainHeader.vue";
import SubHeader from "@/components/SubHeader.vue";
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";
import BulletList from "@/components/BulletList.vue";

const { t } = useI18n();

const processSteps = ref([
  {
    label: t("Discover"),
    descriptionPoints: [
      t("Analyze business goals and market position"),
      t("Identify growth opportunities and challenges"),
      t("Define target audience and user needs"),
      t("Translate vision into technical requirements"),
    ],
    details: t(
      "Transform your vision into actionable tech strategies. We align every aspect of the solution with your business objectives."
    ),
  },
  {
    label: t("Design"),
    descriptionPoints: [
      t("Create user-centric interface designs"),
      t("Develop intuitive information architecture"),
      t("Optimize user flows for engagement"),
      t("Ensure cross-platform consistency"),
    ],
    details: t(
      "Craft interfaces that captivate and convert. We prioritize user experience to boost engagement and retention."
    ),
  },
  {
    label: t("Develop"),
    descriptionPoints: [
      t("Build scalable, robust software solutions"),
      t("Implement secure, efficient backend systems"),
      t("Create responsive, high-performance frontends"),
      t("Integrate necessary third-party services"),
    ],
    details: t(
      "Transform designs into powerful digital realities. We build flexible systems that grow with your business."
    ),
  },
  {
    label: t("Deploy"),
    descriptionPoints: [
      t("Conduct thorough testing and quality assurance"),
      t("Implement smooth deployment processes"),
      t("Provide user training and documentation"),
      t("Ensure seamless launch support"),
    ],
    details: t(
      "Execute impactful launches that deliver immediate value. We maximize the ROI of your digital investment from day one."
    ),
  },
  {
    label: t("Optimize"),
    descriptionPoints: [
      t("Monitor system performance and user behavior"),
      t("Analyze feedback for continuous improvement"),
      t("Implement data-driven enhancements"),
      t("Provide ongoing maintenance and security updates"),
    ],
    details: t(
      "Continuously refine and evolve your solution. We ensure your digital assets remain cutting-edge and effective."
    ),
  },
]);

const processItems = processSteps.value.map((step) => ({
  title: step.label,
  sublists: [
    { items: step.descriptionPoints.map((point) => ({ text: point })) },
  ],
  additionalInfo: step.details,
}));
</script>

<template>
  <section id="process">
    <MainHeader text="Agile Web Development Process" />
    <SubHeader
      first="From concept to continuous improvement, we drive sustainable growth through innovative digital solutions."
    />
    <BottomToTopSlideTransition>
      <div class="flex flex-col gap-4 max-w-4xl">
        <BulletList :items="processItems" :show-numbers="true" />
      </div>
    </BottomToTopSlideTransition>
  </section>
</template>