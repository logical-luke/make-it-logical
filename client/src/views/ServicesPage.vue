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
      t("Build scalable, high-performance software solutions"),
      t("Leverage latest technologies and industry best practices"),
      t("Ensure smooth integration of all application components"),
      t("Deliver high-quality code with thorough testing"),
      t("Implement robust security measures"),
      t("Optimize for performance and maintainability"),
      t("Develop cross-platform applications"),
    ],
    benefits: [
      {
        text: t(
          "Adaptable and future-ready software that grows with the business",
        ),
      },
      {
        text: t(
          "Optimized application performance and reduced maintenance costs",
        ),
      },
      {
        text: t(
          "Faster time-to-market for new features, updates, and innovations",
        ),
      },
      {
        text: t(
          "Improved security, compliance, and reliability of software systems",
        ),
      },
    ],
    deliverables: [
      { text: t("Scalable and maintainable codebase with clean architecture") },
      { text: t("Comprehensive testing and quality assurance reports") },
      {
        text: t("Detailed documentation and training materials for end-users"),
      },
      { text: t("Seamless integration with the existing IT infrastructure") },
    ],
    applicationExamples: [
      {
        text: t(
          "Custom business management system for a growing furniture manufacturer",
        ),
      },
      {
        text: t(
          "Online store with live inventory tracking for a multi-location bookshop",
        ),
      },
      { text: t("Order and delivery app for a bakery chain") },
      {
        text: t(
          "Data analysis tool using artificial intelligence (AI) for a financial advisory startup",
        ),
      },
      {
        text: t(
          "Supply chain tracking system using blockchain for a coffee bean distributor",
        ),
      },
      {
        text: t("Automated software testing tool for a medical device company"),
      },
      {
        text: t(
          "Customer database and communication system for a community credit union",
        ),
      },
      {
        text: t(
          "Table booking and sales management system for a family-owned restaurant group",
        ),
      },
    ],
    suitableFor: t(
      "Building custom application to automate processes, improve productivity, or create new revenue streams.",
    ),
  },
  {
    title: t("User Experience (UX) Design"),
    descriptionPoints: [
      t("Create visually appealing and user-friendly interfaces"),
      t("Conduct in-depth user research to understand needs and pain points"),
      t("Iterate on designs based on user feedback and usability testing"),
      t("Ensure seamless interactions across all touchpoints"),
      t("Implement accessibility best practices"),
      t("Develop comprehensive design systems"),
    ],
    benefits: [
      { text: t("Improved customer satisfaction, engagement, and loyalty") },
      {
        text: t("Reduced development time and costs through efficient design"),
      },
      { text: t("Increased user adoption and retention for digital products") },
      { text: t("Competitive advantage through superior user experience") },
    ],
    deliverables: [
      {
        text: t(
          "Wireframes, mockups, and high-fidelity interactive prototypes",
        ),
      },
      {
        text: t(
          "Comprehensive user research insights, personas, and journey maps",
        ),
      },
      { text: t("Detailed design specifications, style guides, and UI kits") },
      {
        text: t(
          "Seamless user flows and interaction patterns across all devices",
        ),
      },
    ],
    applicationExamples: [
      {
        text: t(
          "Redesign of an international school's staff and student portal",
        ),
      },
      { text: t("User research and design for a doctor consultation app") },
      { text: t("Website design for a boutique bed and breakfast chain") },
      {
        text: t(
          "Usability testing and design improvements for a credit union's web app",
        ),
      },
      {
        text: t("Unified design system for a global online learning platform"),
      },
      {
        text: t(
          "User experience audit and enhancement for an online marketplace",
        ),
      },
      {
        text: t(
          "Accessibility-focused redesign of a city's public services website",
        ),
      },
      {
        text: t(
          "Web app interface design for a personal fitness tracking startup",
        ),
      },
      { text: t("Workflow optimization for a team collaboration tool") },
      {
        text: t(
          "Interactive demo for a virtual reality (VR) employee training program",
        ),
      },
    ],
    suitableFor: t(
      "Designing a website, or web application to boost user engagement and conversions.",
    ),
  },
  {
    title: t("Fixes & Enhancements"),
    descriptionPoints: [
      t(
        "Conduct ongoing performance, security, and user experience improvements",
      ),
      t("Implement regular software updates and feature enhancements"),
      t("Improve code quality, efficiency, and maintainability"),
      t("Implement proactive monitoring and issue prevention strategies"),
      t("Optimize database performance and query efficiency"),
      t("Enhance user interfaces based on feedback and analytics"),
    ],
    benefits: [
      { text: t("Faster, more responsive, and user-friendly applications") },
      { text: t("Reduced downtime, maintenance costs, and security risks") },
      { text: t("Improved user satisfaction, loyalty, and engagement") },
      { text: t("Proactive problem-solving before issues affect end-users") },
    ],
    deliverables: [
      {
        text: t(
          "Optimized application performance, stability, and scalability",
        ),
      },
      { text: t("Enhanced security, compliance, and regulatory standards") },
      { text: t("Improved user interface, experience, and accessibility") },
      {
        text: t(
          "Proactive monitoring, issue prevention, and remediation strategies",
        ),
      },
    ],
    applicationExamples: [
      { text: t("Speed improvements for a high-traffic recipe website") },
      { text: t("Security reinforcement for an online banking service") },
      { text: t("Database efficiency boost for a customer insights company") },
      {
        text: t("Web app responsiveness upgrade for a food ordering service"),
      },
      {
        text: t(
          "Code cleanup and modernization for a school district's student information system",
        ),
      },
    ],
    suitableFor: t(
      "Enhancing existing applications to handle increased user load, add new features, or improve overall user experience.",
    ),
  },
  {
    title: t("System Modernization & Cloud Migration"),
    descriptionPoints: [
      t("Refresh outdated software systems with modern technologies"),
      t("Preserve critical business processes, data, and functionality"),
      t("Improve user experience, productivity, and operational efficiency"),
      t(
        "Ensure seamless integration with new systems, tools, and cloud platforms",
      ),
      t("Implement scalable and flexible cloud architectures"),
      t("Provide staff training on new technologies and best practices"),
    ],
    benefits: [
      {
        text: t(
          "Improved system performance, reliability, scalability, and availability",
        ),
      },
      {
        text: t(
          "Better compatibility with current and future technologies and platforms",
        ),
      },
      {
        text: t(
          "Reduced maintenance costs and increased operational efficiency",
        ),
      },
      {
        text: t(
          "Enhanced user experience, productivity, and competitive advantage",
        ),
      },
    ],
    deliverables: [
      { text: t("Modernized software architecture and technology stack") },
      { text: t("Seamless migration of critical business data and processes") },
      {
        text: t("Improved user interfaces and productivity-enhancing features"),
      },
      { text: t("Smooth integration with the existing and future systems") },
    ],
    applicationExamples: [
      {
        text: t(
          "Moving business software from local servers to cloud for a toy manufacturer",
        ),
      },
      { text: t("Updating internal systems for a state environmental agency") },
      {
        text: t("Cloud transition for a law firm's case management software"),
      },
      {
        text: t(
          "Setting up mixed local and cloud systems for a supermarket chain",
        ),
      },
      { text: t("Modernizing member management system for a credit union") },
      { text: t("Restructuring online store system for better scalability") },
      {
        text: t(
          "Cloud-based overhaul of a logistics company's package tracking",
        ),
      },
    ],
    suitableFor: t(
      "Upgrading outdated systems to improve efficiency, security, and reduce maintenance costs.",
    ),
  },
]);
const sectionItems = [
  {
    title: "Comprehensive Solutions",
    description: "Cover all digital needs, from planning to maintenance",
  },
  {
    title: "Results-Driven Approach",
    description: "Address business challenges and drive measurable outcomes",
  },
  {
    title: "Scalable Architecture",
    description: "Build solutions that grow with your business",
  },
  {
    title: "Efficiency-Focused Process",
    description:
      "Emphasize simplicity and effectiveness, saving time and resources",
  },
  {
    title: "Innovation-Led Craft",
    description: "Leverage cutting-edge technologies for competitive advantage",
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
    <MainHeader text="Solutions for Businesses" />
    <SubHeader
      first="From custom apps development to cloud migration and UX design."
    />
    <BottomToTopSlideTransition duration="1300">
      <BulletList
        :items="serviceItems"
        :show-numbers="false"
        additional-info-label="Best for:"
      />
    </BottomToTopSlideTransition>
  </section>
  <BottomToTopSlideTransition>
    <section class="py-12 md:py-16">
      <h2
        class="text-xl md:text-2xl mb-4 max-w-4xl font-bold text-gray-500 dark:text-gray-400"
      >
        {{ t("Why Choose Our Services?") }}
      </h2>
      <div class="flex flex-col gap-6 text-lg md:text-xl">
        <div
          v-for="(item, index) in sectionItems"
          :key="index"
          class="py-6 max-w-4xl"
        >
          <BottomToTopSlideTransition>
            <h3 class="font-bold mb-2">{{ item.title }}</h3>
            <p class="text-base">{{ item.description }}</p>
          </BottomToTopSlideTransition>
        </div>
      </div>
    </section>
  </BottomToTopSlideTransition>
</template>
