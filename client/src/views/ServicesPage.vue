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
    title: t("Technology Planning & Project Leadership"),
    descriptionPoints: [
      t("Defining clear technology roadmaps and project milestones"),
      t("Aligning digital initiatives with business goals and strategies"),
      t("Coordinating cross-functional teams for seamless software delivery"),
      t("Ensuring efficient, secure, and reliable software development"),
    ],
    benefits: [
      { text: t("Clear technology plan that meets business objectives") },
      {
        text: t(
          "Streamlined collaboration across technical and non-technical teams",
        ),
      },
      {
        text: t(
          "Optimized performance, reliability, and security of software solutions",
        ),
      },
      {
        text: t("Faster time-to-market for new digital products and features"),
      },
    ],
    deliverables: [
      { text: t("Comprehensive technology plan and project timeline") },
      { text: t("Effective communication and coordination between teams") },
      {
        text: t("Detailed technical specifications and software architecture"),
      },
      { text: t("Streamlined software development and deployment processes") },
    ],
    suitableFor: t(
      "Launching a new digital product or modernizing existing software systems.",
    ),
  },
  {
    title: t("User Experience (UX) Design"),
    descriptionPoints: [
      t("Creating visually appealing and user-friendly interfaces"),
      t(
        "Conducting in-depth user research to understand needs and pain points",
      ),
      t("Iterating on designs based on user feedback and usability testing"),
      t("Ensuring seamless interactions across all digital touchpoints"),
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
    suitableFor: t(
      "Designing a website, mobile app, or web application to boost user engagement and conversions.",
    ),
  },
  {
    title: t("Software Development & Engineering"),
    descriptionPoints: [
      t("Building scalable, high-performance software solutions"),
      t("Leveraging the latest technologies and industry best practices"),
      t("Ensuring smooth integration of all application components"),
      t(
        "Delivering high-quality code with thorough testing and quality assurance",
      ),
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
          "Faster time-to-market for new features, updates, and digital innovations",
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
      {
        text: t(
          "Seamless integration with the client's existing IT infrastructure",
        ),
      },
    ],
    suitableFor: t(
      "Building custom software solutions to automate processes, improve productivity, or create new revenue streams.",
    ),
  },
  {
    title: t("IT Operations & Maintenance"),
    descriptionPoints: [
      t(
        "Setting up efficient systems for software delivery, updates, and deployments",
      ),
      t(
        "Improving infrastructure reliability, performance, and resource utilization",
      ),
      t(
        "Implementing tools and processes to proactively monitor and fix issues",
      ),
      t(
        "Ensuring seamless integration with the client's existing IT environments",
      ),
    ],
    benefits: [
      { text: t("Faster, more reliable software updates and deployments") },
      {
        text: t(
          "Improved system uptime, performance, security, and compliance",
        ),
      },
      {
        text: t("Reduced operational costs and enhanced IT team productivity"),
      },
      {
        text: t(
          "Smooth integration with the client's current technology stack",
        ),
      },
    ],
    deliverables: [
      { text: t("Automated software delivery and deployment pipelines") },
      { text: t("Comprehensive monitoring and incident response processes") },
      {
        text: t(
          "Optimized infrastructure configuration and resource utilization",
        ),
      },
      {
        text: t("Seamless integration with the client's IT systems and tools"),
      },
    ],
    suitableFor: t(
      "Improving the reliability, security, and efficiency of critical IT operations.",
    ),
  },
  {
    title: t("Software Optimization & Enhancements"),
    descriptionPoints: [
      t("Ongoing performance, security, and user experience improvements"),
      t("Regular software updates and feature enhancements"),
      t("Improving code quality, efficiency, and maintainability"),
      t("Implementing proactive monitoring and issue prevention strategies"),
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
    suitableFor: t(
      "Enhancing existing software to handle increased user load, add new features, or improve overall user experience.",
    ),
  },
  {
    title: t("System Modernization & Cloud Migration"),
    descriptionPoints: [
      t("Refreshing outdated software systems with modern technologies"),
      t("Preserving critical business processes, data, and functionality"),
      t("Improving user experience, productivity, and operational efficiency"),
      t(
        "Ensuring seamless integration with new systems, tools, and cloud platforms",
      ),
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
      {
        text: t(
          "Smooth integration with the client's existing and future systems",
        ),
      },
    ],
    suitableFor: t(
      "Upgrading outdated software systems to improve efficiency, security, and reduce maintenance costs.",
    ),
  },
  {
    title: t("Search Engine Optimization (SEO)"),
    descriptionPoints: [
      t("Improving website visibility and ranking in search engine results"),
      t(
        "Optimizing website content, structure, and technical performance for better discoverability",
      ),
      t(
        "Implementing targeted strategies to attract more qualified website visitors",
      ),
      t(
        "Analyzing data-driven insights to continuously improve SEO and digital marketing efforts",
      ),
    ],
    benefits: [
      {
        text: t(
          "Higher search engine rankings and increased organic website traffic",
        ),
      },
      {
        text: t(
          "Better user engagement, lower bounce rates, and improved conversion rates",
        ),
      },
      {
        text: t(
          "Increased return on investment from the website and digital marketing initiatives",
        ),
      },
      {
        text: t(
          "Actionable data and insights to guide future content, marketing, and optimization strategies",
        ),
      },
    ],
    deliverables: [
      {
        text: t(
          "Optimized website structure, content, and technical performance for search engines",
        ),
      },
      {
        text: t(
          "Targeted SEO strategies to attract more qualified website visitors",
        ),
      },
      {
        text: t(
          "Comprehensive performance reports, analytics, and data-driven insights",
        ),
      },
      {
        text: t(
          "Ongoing recommendations and implementation of continuous website improvements",
        ),
      },
    ],
    suitableFor: t(
      "Increasing organic website traffic, improving online visibility, and driving more qualified leads for products or services.",
    ),
  },
]);

const sectionItems = [
  {
    title: "Comprehensive Solutions",
    description:
      "Cover all aspects of your digital needs, from planning to maintenance",
  },
  {
    title: "Results-Driven Approach",
    description:
      "Address directly your business challenges and drive measurable outcomes",
  },
  {
    title: "Scalable Architecture",
    description:
      "Own solutions that grow with your business, preventing future bottlenecks",
  },
  {
    title: "Efficiency-Focused Process",
    description:
      "Enjoy a development process that emphasizes simplicity and effectiveness, saving you time and resources",
  },
  {
    title: "Innovation-Led Craft",
    description:
      "Gain a competitive edge in your market with leveraging of cutting-edge technologies",
  },
];

const serviceItems = services.value.map((service) => ({
  title: service.title,
  sublists: [
    { items: service.descriptionPoints.map((point) => ({ text: point })) },
    { title: "Deliverables", items: service.deliverables, expandable: true },
    { title: "Key Benefits", items: service.benefits, expandable: true },
  ],
  additionalInfo: service.suitableFor,
}));
</script>

<template>
  <section id="services">
    <MainHeader text="Solutions for Businesses" />
    <SubHeader
      first="Streamline operations, drive innovation, and gain a competitive edge in your market."
      second="From custom software development to cloud migration and UX design, we tailored our services to unlock your full digital potential."
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
        class="text-3xl md:text-4xl font-bold mb-8 text-gray-500 dark:text-gray-400"
      >
        {{ t("Why Choose Our Services ?") }}
      </h2>
      <div class="flex flex-col gap-6">
        <div
          v-for="(item, index) in sectionItems"
          :key="index"
          class="py-6 max-w-4xl"
        >
          <BottomToTopSlideTransition>
            <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </BottomToTopSlideTransition>
        </div>
      </div>
    </section>
  </BottomToTopSlideTransition>
</template>
