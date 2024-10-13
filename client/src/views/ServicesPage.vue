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
    title: t("Planning & Leadership"),
    descriptionPoints: [
      t("Defining clear project roadmaps and milestones"),
      t("Aligning digital projects with business goals"),
      t("Coordinating cross-functional teams for seamless delivery"),
      t("Ensuring efficient and secure software development"),
    ],
    benefits: [
      { text: t("Clear project plan that meets business objectives") },
      { text: t("Streamlined collaboration across teams") },
      { text: t("Optimized performance and reliability of the software") },
      { text: t("Faster time-to-market for new products and features") },
    ],
    deliverables: [
      { text: t("Comprehensive project plan and timeline") },
      { text: t("Effective communication and coordination between teams") },
      { text: t("Detailed technical specifications and architecture") },
      { text: t("Streamlined software development and deployment processes") },
    ],
    suitableFor: t(
      "Launching a new digital product or overhauling existing systems.",
    ),
  },
  {
    title: t("User Experience Design"),
    descriptionPoints: [
      t("Creating intuitive and visually appealing user interfaces"),
      t("Conducting user research to understand needs and pain points"),
      t("Iterating on designs based on user feedback"),
      t("Ensuring seamless interactions across all touchpoints"),
    ],
    benefits: [
      { text: t("Improved customer satisfaction and engagement") },
      { text: t("Reduced development time and costs") },
      { text: t("Increased user adoption and retention") },
      { text: t("Competitive advantage through superior user experience") },
    ],
    deliverables: [
      { text: t("Wireframes, mockups, and high-fidelity prototypes") },
      { text: t("Comprehensive user research insights and personas") },
      { text: t("Detailed design specifications and style guides") },
      { text: t("Seamless user flows and interaction patterns") },
    ],
    suitableFor: t(
      "Designing a website or app to boost user engagement and conversions.",
    ),
  },
  {
    title: t("Development"),
    descriptionPoints: [
      t("Building reliable and scalable software solutions"),
      t("Leveraging the latest technologies and best practices"),
      t("Ensuring smooth integration of all application components"),
      t("Delivering high-quality code with thorough testing"),
    ],
    benefits: [
      { text: t("Robust and adaptable software that grows with the business") },
      { text: t("Optimized performance and reduced maintenance costs") },
      { text: t("Faster time-to-market for new features and updates") },
      { text: t("Improved security and compliance with industry standards") },
    ],
    deliverables: [
      { text: t("Scalable and maintainable codebase") },
      { text: t("Comprehensive testing and quality assurance reports") },
      { text: t("Detailed documentation and training materials") },
      { text: t("Seamless integration with the client's existing systems") },
    ],
    suitableFor: t(
      "Building custom software to automate processes or create new revenue streams.",
    ),
  },
  {
    title: t("Operations"),
    descriptionPoints: [
      t("Setting up efficient systems for software delivery and updates"),
      t("Improving infrastructure reliability and resource utilization"),
      t("Implementing tools and processes to catch and fix issues quickly"),
      t("Ensuring seamless integration with existing IT environments"),
    ],
    benefits: [
      { text: t("Faster, more reliable software updates and deployments") },
      { text: t("Improved system uptime, performance, and security") },
      { text: t("Reduced operational costs and enhanced productivity") },
      { text: t("Smooth integration with the client's technology stack") },
    ],
    deliverables: [
      { text: t("Automated software delivery and deployment pipelines") },
      { text: t("Comprehensive monitoring and incident response processes") },
      {
        text: t(
          "Optimized infrastructure configuration and resource utilization",
        ),
      },
      { text: t("Seamless integration with the client's existing IT systems") },
    ],
    suitableFor: t(
      "Improving system reliability and reducing downtime in critical operations.",
    ),
  },
  {
    title: t("Improvements"),
    descriptionPoints: [
      t("Ongoing enhancements to keep software running smoothly"),
      t(
        "Regular updates for better performance, security, and user experience",
      ),
      t("Improving existing code for efficiency and maintainability"),
      t("Implementing proactive monitoring and issue prevention"),
    ],
    benefits: [
      { text: t("Faster and more responsive applications") },
      { text: t("Reduced downtime and maintenance costs") },
      { text: t("Improved user satisfaction and loyalty") },
      { text: t("Proactive problem-solving before issues affect users") },
    ],
    deliverables: [
      { text: t("Optimized application performance and stability") },
      { text: t("Improved security and compliance with industry standards") },
      { text: t("Enhanced user interface and experience") },
      { text: t("Proactive monitoring and issue prevention strategies") },
    ],
    suitableFor: t(
      "Enhancing existing software to handle increased user load or add new features.",
    ),
  },
  {
    title: t("Modernization"),
    descriptionPoints: [
      t("Refreshing outdated software systems with modern technologies"),
      t("Preserving critical business processes and data"),
      t("Improving user experience and productivity"),
      t("Ensuring seamless integration with new systems and tools"),
    ],
    benefits: [
      { text: t("Improved system performance, reliability, and scalability") },
      { text: t("Better compatibility with current and future technologies") },
      {
        text: t(
          "Reduced maintenance costs and increased operational efficiency",
        ),
      },
      { text: t("Enhanced user experience and productivity gains") },
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
      "Upgrading outdated systems to improve efficiency, security and reduce maintenance costs.",
    ),
  },
  {
    title: t("Search Engine Optimization"),
    descriptionPoints: [
      t("Improving website visibility and ranking in search results"),
      t("Optimizing content and website structure for better discoverability"),
      t("Implementing strategies to attract more qualified website visitors"),
      t(
        "Analyzing and acting on data-driven insights to drive continuous improvements",
      ),
    ],
    benefits: [
      {
        text: t("Higher search engine rankings and increased organic traffic"),
      },
      {
        text: t(
          "Better user engagement, lower bounce rates, and improved conversion rates",
        ),
      },
      {
        text: t(
          "Increased return on investment from the website and digital marketing efforts",
        ),
      },
      {
        text: t(
          "Actionable data and insights to guide future marketing and content strategies",
        ),
      },
    ],
    deliverables: [
      { text: t("Optimized website structure and content for search engines") },
      {
        text: t(
          "Targeted strategies to attract more qualified website visitors",
        ),
      },
      { text: t("Comprehensive performance reports and data-driven insights") },
      {
        text: t("Ongoing recommendations for continuous website improvements"),
      },
    ],
    suitableFor: t(
      "Increasing organic traffic and improving online visibility for products or services.",
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
    <MainHeader>
      {{ t("Empowering Businesses") }}
    </MainHeader>
    <SubHeader>
      {{
        t(
          "We deliver scalable, efficient solutions that solve real business challenges.",
        )
      }}
      <template #second>
        {{ t("Creating value through technology and streamlined processes.") }}
      </template>
    </SubHeader>

    <BulletList
      :items="serviceItems"
      :show-numbers="false"
      additional-info-label="Best for:"
    />
  </section>
  <BottomToTopSlideTransition>
    <section class="py-12 md:py-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-8">
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
