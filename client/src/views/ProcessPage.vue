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
    label: t("Listen"),
    descriptionPoints: [
      t("Dive deep into business goals and objectives"),
      t("Analyze target audience and market positioning"),
      t("Identify pain points and growth opportunities"),
      t("Translate vision into concrete technical requirements"),
    ],
    details: t(
      "This stage transforms vision into concrete, actionable technology plans. Every aspect of the business needs is understood and addressed.",
    ),
  },
  {
    label: t("Design"),
    descriptionPoints: [
      t("Create user-centric interface designs"),
      t("Develop intuitive information architecture"),
      t("Optimize user flows for maximum engagement"),
      t("Ensure consistency across all touchpoints"),
    ],
    details: t(
      "The design phase focuses on creating interfaces that not only look great but also work seamlessly. User experience is prioritized to keep the audience engaged and coming back.",
    ),
  },
  {
    label: t("Build"),
    description: t("Transform concepts into powerful digital realities."),
    descriptionPoints: [
      t("Develop robust and scalable software solutions"),
      t("Implement secure and efficient backend systems"),
      t("Create responsive and performant frontend interfaces"),
      t("Integrate third-party services and APIs as needed"),
    ],
    details: t(
      "During this phase, designs are brought to life, creating powerful digital solutions. The focus is on building systems that can grow and adapt with business needs.",
    ),
  },
  {
    label: t("Deliver"),
    descriptionPoints: [
      t("Conduct thorough testing and quality assurance"),
      t("Implement smooth deployment processes"),
      t("Provide comprehensive user training and documentation"),
      t("Ensure seamless transition and launch support"),
    ],
    details: t(
      "The delivery stage focuses on impactful launches, ensuring the solution is ready to deliver value from day one. The process is designed to maximize the immediate and long-term benefits of the digital investment.",
    ),
  },
  {
    label: t("Improve"),
    descriptionPoints: [
      t("Continuously monitor system performance and user behavior"),
      t("Gather and analyze user feedback for improvements"),
      t("Implement data-driven optimizations and new features"),
      t("Provide ongoing maintenance and security updates"),
    ],
    details: t(
      "The commitment extends beyond the initial launch. Continuous refinement and optimization ensure the solution remains effective and at the cutting edge of technology.",
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
    <MainHeader text="Transformation Process" />
    <SubHeader
      first="Makes your goals measurable success."
      second="We're committed to maximizing your potential and driving sustainable growth, from initial concept through continuous improvement."
    />
    <BottomToTopSlideTransition duration="1300">
      <div class="flex flex-col gap-4 max-w-4xl">
        <BulletList :items="processItems" :show-numbers="true" />
      </div>
    </BottomToTopSlideTransition>
  </section>
</template>
