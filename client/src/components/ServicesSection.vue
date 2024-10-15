<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

import { ref } from "vue";
import HomePageSection from "@/components/HomePageSection.vue";
import ExpandableList from "@/components/ExpandableList.vue";

const services = ref([
  {
    title: t("Technology Planning & Project Leadership"),
    additionalInfo: t(
      "We transform visions into actionable technology plans that align with your business goals. Our experienced project leadership coordinates cross-functional teams to ensure smooth, efficient delivery. The result? Streamlined operations, improved performance, and faster time-to-market. We don't just manage projects - we drive innovation and maximize your ROI.",
    ),
  },
  {
    title: t("User Experience (UX) Design"),
    additionalInfo: t(
      "Great design goes beyond aesthetics; it solves problems. We start with in-depth user research to uncover needs and pain points. This insight drives our design process, resulting in intuitive interfaces that users love. We iterate based on feedback, ensuring each design decision enhances engagement, retention, and your competitive edge.",
    ),
  },
  {
    title: t("Software Development & Engineering"),
    additionalInfo: t(
      "Code is the backbone of digital success. We build scalable, high-performing software solutions using cutting-edge technologies. Our development process emphasizes quality, security, and long-term flexibility. We create architectures that grow with your business, ensuring your software not only meets current needs but is primed for future challenges.",
    ),
  },
  {
    title: t("IT Operations & Maintenance"),
    additionalInfo: t(
      "Smooth IT operations are crucial for business continuity. We implement efficient systems for software delivery, updates, and proactive monitoring. This leads to reduced downtime, improved security, and significant cost savings. We turn potential technical headaches into operational strengths, ensuring your systems run reliably and efficiently.",
    ),
  },
  {
    title: t("Software Optimization & Enhancements"),
    additionalInfo: t(
      "In the digital world, standing still means falling behind. We provide regular software audits and implement updates that not only fix issues but add value. This keeps your applications at peak performance, consistently meeting and exceeding user expectations. Our approach ensures your software evolves with your business, unlocking new opportunities for growth and innovation.",
    ),
  },
  {
    title: t("System Modernization & Cloud Migration"),
    additionalInfo: t(
      "Legacy systems often hold untapped potential. Our modernization approach preserves valuable business logic while upgrading to modern architectures and cloud solutions. This not only extends the life of your software but opens new possibilities for innovation and growth. The outcome is revitalized systems that drive increased performance, scalability, and efficiency.",
    ),
  },
  {
    title: t("Search Engine Optimization (SEO)"),
    additionalInfo: t(
      "Visibility is key in the digital marketplace. Our SEO strategies go beyond keywords, focusing on creating valuable, relevant content. We optimize website structure and performance, enhancing user experience and search rankings. Our data-driven approach continuously refines strategies for maximum impact. The result is increased organic traffic, better user engagement, and improved conversion rates.",
    ),
  },
]);

const serviceItems = services.value.map((service) => ({
  title: service.title,
  sublists: [],
  additionalInfo: service.additionalInfo,
}));
</script>

<template>
  <HomePageSection
    title="Custom Software & Web Solutions"
    link-target="/services"
    link-text="Explore Services"
  >
    <p class="flex flex-col gap-2 md:text-lg mb-12 max-w-4xl">
      <span>{{
        t(
          "We create user-centric digital experiences that drive business growth.",
        )
      }}</span>
      <span>{{
        t(
          "Our comprehensive suite of software and web development services unlock new opportunities for your organization.",
        )
      }}</span>
    </p>
    <ExpandableList :items="serviceItems" />
  </HomePageSection>
</template>

<style scoped></style>
