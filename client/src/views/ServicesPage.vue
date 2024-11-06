<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import MainHeader from "@/components/MainHeader.vue";
import SubHeader from "@/components/SubHeader.vue";
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";
import BulletList from "@/components/BulletList.vue";

const { t } = useI18n();

const services = ref([
  {
    title: t("Web App & Website Development"),
    descriptionPoints: [
      t("Build scalable, high-performance solutions"),
      t("Leverage latest technologies and best practices"),
      t("Ensure seamless component integration"),
      t("Deliver quality code with thorough testing"),
      t("Implement robust security measures"),
      t("Optimize for performance and maintainability"),
      t("Develop cross-platform applications"),
    ],
    benefits: [
      { text: t("Future-ready software that scales with your business") },
      { text: t("Optimized performance and reduced maintenance costs") },
      { text: t("Faster time-to-market for features and updates") },
      { text: t("Enhanced security, compliance, and reliability") },
    ],
    deliverables: [
      { text: t("Scalable codebase with clean architecture") },
      { text: t("Comprehensive testing and QA reports") },
      { text: t("Detailed documentation and user training materials") },
      { text: t("Seamless integration with existing IT infrastructure") },
    ],
    applicationExamples: [
      { text: t("Custom business management system for manufacturers") },
      { text: t("Online store with live inventory tracking") },
      { text: t("Order and delivery app for food services") },
      { text: t("AI-powered data analysis tool for fintech") },
      { text: t("Blockchain-based supply chain tracking system") },
      { text: t("Automated software testing tool for healthcare") },
      { text: t("Customer database and communication system for finance") },
      { text: t("Booking and sales management for hospitality") },
    ],
    suitableFor: t(
      "Automating processes, boosting productivity, or creating new revenue streams."
    ),
  },
  {
    title: t("User Experience (UX) Design"),
    descriptionPoints: [
      t("Create appealing, user-friendly interfaces"),
      t("Conduct in-depth user research"),
      t("Iterate designs based on feedback and testing"),
      t("Ensure seamless cross-platform interactions"),
      t("Implement accessibility best practices"),
      t("Develop comprehensive design systems"),
    ],
    benefits: [
      { text: t("Improved customer satisfaction and loyalty") },
      { text: t("Reduced development time and costs") },
      { text: t("Increased user adoption and retention") },
      { text: t("Competitive edge through superior UX") },
    ],
    deliverables: [
      { text: t("Wireframes, mockups, and interactive prototypes") },
      { text: t("User research insights, personas, and journey maps") },
      { text: t("Design specifications, style guides, and UI kits") },
      { text: t("Seamless user flows across all devices") },
    ],
    applicationExamples: [
      { text: t("Educational portal redesign") },
      { text: t("Healthcare consultation app design") },
      { text: t("Hospitality website design") },
      { text: t("Financial web app usability enhancement") },
      { text: t("E-learning platform design system") },
      { text: t("E-commerce UX audit and improvement") },
      { text: t("Accessible public services website redesign") },
      { text: t("Fitness tracking app interface design") },
      { text: t("Team collaboration tool workflow optimization") },
      { text: t("VR employee training program demo") },
    ],
    suitableFor: t(
      "Boosting user engagement and conversions in websites or web apps."
    ),
  },
  {
    title: t("Fixes & Enhancements"),
    descriptionPoints: [
      t("Ongoing performance, security, and UX improvements"),
      t("Regular software updates and feature enhancements"),
      t("Code quality and efficiency optimization"),
      t("Proactive monitoring and issue prevention"),
      t("Database performance optimization"),
      t("UI enhancements based on feedback and analytics"),
    ],
    benefits: [
      { text: t("Faster, more responsive applications") },
      { text: t("Reduced downtime and security risks") },
      { text: t("Improved user satisfaction and engagement") },
      { text: t("Proactive problem-solving") },
    ],
    deliverables: [
      { text: t("Optimized app performance and scalability") },
      { text: t("Enhanced security and compliance") },
      { text: t("Improved UI, UX, and accessibility") },
      { text: t("Proactive monitoring and issue prevention strategies") },
    ],
    applicationExamples: [
      { text: t("High-traffic website speed optimization") },
      { text: t("Online banking security reinforcement") },
      { text: t("Database efficiency boost for analytics") },
      { text: t("Food ordering app responsiveness upgrade") },
      { text: t("Legacy system code modernization") },
    ],
    suitableFor: t(
      "Improving existing apps to handle increased load, add features, or enhance UX."
    ),
  },
  {
    title: t("System Modernization & Cloud Migration"),
    descriptionPoints: [
      t("Refresh legacy systems with modern tech"),
      t("Preserve critical business processes and data"),
      t("Enhance UX, productivity, and operational efficiency"),
      t("Ensure seamless integration with new systems and cloud platforms"),
      t("Implement scalable cloud architectures"),
      t("Provide staff training on new technologies"),
    ],
    benefits: [
      { text: t("Improved system performance and reliability") },
      { text: t("Better compatibility with current and future tech") },
      { text: t("Reduced maintenance costs and increased efficiency") },
      { text: t("Enhanced UX and competitive advantage") },
    ],
    deliverables: [
      { text: t("Modernized software architecture") },
      { text: t("Seamless data and process migration") },
      { text: t("Improved UIs and productivity features") },
      { text: t("Smooth integration with existing and future systems") },
    ],
    applicationExamples: [
      { text: t("Manufacturing software cloud migration") },
      { text: t("Government agency system modernization") },
      { text: t("Law firm case management cloud transition") },
      { text: t("Hybrid cloud setup for retail chains") },
      { text: t("Credit union member management system upgrade") },
      { text: t("E-commerce platform scalability improvement") },
      { text: t("Logistics tracking system cloud overhaul") },
    ],
    suitableFor: t(
      "Upgrading outdated systems to boost efficiency, security, and reduce costs."
    ),
  },
]);

const sectionItems = [
  {
    title: "End-to-End Solutions",
    description: "Comprehensive digital services from planning to maintenance",
  },
  {
    title: "Results-Driven Approach",
    description: "Tackle business challenges with measurable outcomes",
  },
  {
    title: "Future-Proof Architecture",
    description: "Scalable solutions that grow with your business",
  },
  {
    title: "Efficient Development",
    description: "Streamlined processes saving time and resources",
  },
  {
    title: "Innovative Technology",
    description: "Cutting-edge solutions for competitive advantage",
  },
];

const serviceItems = services.value.map((service) => ({
  title: service.title,
  sublists: [
    { title: "Example projects", items: service.applicationExamples },
    {
      title: "What we do?",
      items: service.descriptionPoints.map((point) => ({ text: point })),
      expandable: true,
    },
    { title: "What you get?", items: service.deliverables, expandable: true },
    { title: "What is the result?", items: service.benefits, expandable: true },
  ],
  additionalInfo: service.suitableFor,
}));
</script>

<template>
  <section id="services">
    <MainHeader text="Digital Solutions for Business Growth" />
    <SubHeader
      first="Custom web development, UX design, system upgrades, and cloud migration."
    />
    <BottomToTopSlideTransition>
      <BulletList
        :items="serviceItems"
        :show-numbers="false"
        additional-info-label="Ideal for:"
      />
    </BottomToTopSlideTransition>
  </section>
  <section class="py-12 md:py-16">
    <h2
      class="text-xl md:text-2xl mb-4 max-w-4xl font-bold text-gray-500 dark:text-gray-400"
    >
      {{ t("Why Partner With Us?") }}
    </h2>
    <div class="flex flex-col gap-6 text-lg md:text-xl">
      <div
        v-for="(item, index) in sectionItems"
        :key="index"
        class="py-6 max-w-4xl"
      >
        <h3 class="font-bold mb-2">{{ item.title }}</h3>
        <p class="text-base">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>
