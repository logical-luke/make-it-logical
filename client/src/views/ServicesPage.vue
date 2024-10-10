<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import TechnologySlider from "@/components/TechnologySlider.vue";

const { t } = useI18n();

const services = ref([
  {
    icon: "pi pi-compass",
    title: t("Strategic Planning & Design"),
    description: t(
      "We create the blueprint for your digital success. Our team analyzes your business needs, defines clear objectives, and designs intuitive user interfaces that drive engagement.",
    ),
    expanded: false,
    details: t(
      "Our strategic planning process involves in-depth market research, competitor analysis, and user behavior studies. We translate these insights into actionable plans and user-centric designs that set the foundation for successful digital products.",
    ),
    benefits: [
      {
        icon: "pi pi-check-circle",
        text: t("Clearly defined project roadmap aligned with business goals"),
      },
      {
        icon: "pi pi-users",
        text: t(
          "User interfaces designed for maximum engagement and conversion",
        ),
      },
      {
        icon: "pi pi-clock",
        text: t("Reduced development time and costs through thorough planning"),
      },
      {
        icon: "pi pi-shield",
        text: t("Mitigation of potential risks and roadblocks"),
      },
    ],
    suitableFor: t(
      "Startups launching new products, enterprises undertaking digital transformation, and businesses looking to revamp their existing digital presence.",
    ),
  },
  {
    icon: "pi pi-cog",
    title: t("Full-Stack Development"),
    description: t(
      "We build robust, scalable applications that work flawlessly from front-end to back-end. Our development team uses cutting-edge technologies to create responsive, feature-rich solutions that solve real business challenges.",
    ),
    expanded: false,
    details: t(
      "Our full-stack development approach ensures seamless integration between all layers of your application. We employ best practices in code architecture, security, and performance optimization to deliver high-quality, maintainable software.",
    ),
    benefits: [
      {
        icon: "pi pi-link",
        text: t(
          "Cohesive end-to-end solutions that reduce integration headaches",
        ),
      },
      {
        icon: "pi pi-bolt",
        text: t("Optimized performance across all application layers"),
      },
      {
        icon: "pi pi-chart-line",
        text: t(
          "Flexible and scalable architecture that grows with your business",
        ),
      },
      {
        icon: "pi pi-calendar",
        text: t(
          "Shorter time-to-market with our efficient development processes",
        ),
      },
    ],
    suitableFor: t(
      "Businesses of all sizes needing custom software solutions, from startups building their MVP to enterprises developing complex, mission-critical applications.",
    ),
  },
  {
    icon: "pi pi-server",
    title: t("DevOps & Infrastructure"),
    description: t(
      "We streamline your development workflow and optimize your infrastructure. Our DevOps practices and cloud solutions accelerate deployment cycles, enhance system reliability, and maximize resource efficiency.",
    ),
    expanded: false,
    details: t(
      "We implement robust CI/CD pipelines, set up comprehensive monitoring and alerting systems, and manage cloud infrastructure to ensure high availability and performance. Our approach emphasizes security, scalability, and cost-effectiveness.",
    ),
    benefits: [
      {
        icon: "pi pi-sync",
        text: t("Faster, more reliable software releases"),
      },
      {
        icon: "pi pi-chart-bar",
        text: t("Improved system uptime and performance"),
      },
      {
        icon: "pi pi-wallet",
        text: t(
          "Reduced operational costs through optimized resource utilization",
        ),
      },
      {
        icon: "pi pi-lock",
        text: t(
          "Enhanced security posture with best practices and regular audits",
        ),
      },
    ],
    suitableFor: t(
      "Companies looking to accelerate their development cycles, improve system reliability, or optimize their cloud infrastructure.",
    ),
  },
  {
    icon: "pi pi-sliders-h",
    title: t("Application Optimization & Maintenance"),
    description: t(
      "We keep your applications running at peak performance. Our team provides ongoing maintenance, performance tuning, security updates, and feature enhancements to ensure your software remains efficient and aligned with your evolving business needs.",
    ),
    expanded: false,
    details: t(
      "Our optimization process involves thorough code reviews, performance profiling, and systematic refactoring. We implement automated testing and monitoring to proactively identify and resolve issues, ensuring your applications remain robust and efficient.",
    ),
    benefits: [
      {
        icon: "pi pi-bolt",
        text: t("Improved application speed and responsiveness"),
      },
      {
        icon: "pi pi-clock",
        text: t("Reduced downtime and maintenance costs"),
      },
      {
        icon: "pi pi-star",
        text: t("Enhanced user satisfaction through continuous improvements"),
      },
      {
        icon: "pi pi-shield",
        text: t("Proactive issue resolution before they impact users"),
      },
    ],
    suitableFor: t(
      "Businesses with existing applications looking to improve performance, enhance security, or add new features.",
    ),
  },
  {
    icon: "pi pi-refresh",
    title: t("Legacy System Modernization"),
    description: t(
      "We breathe new life into outdated systems. Our team specializes in refactoring and modernizing legacy applications, making them more efficient, secure, and compatible with current technologies.",
    ),
    expanded: false,
    details: t(
      "Our modernization approach focuses on preserving critical business logic while improving overall system architecture. We employ modern design patterns, update technology stacks, and enhance user interfaces to extend the lifespan and value of your existing software investments.",
    ),
    benefits: [
      {
        icon: "pi pi-bolt",
        text: t("Improved system performance and reliability"),
      },
      {
        icon: "pi pi-link",
        text: t(
          "Enhanced compatibility with modern technologies and third-party integrations",
        ),
      },
      {
        icon: "pi pi-wallet",
        text: t("Reduced maintenance costs and technical debt"),
      },
      {
        icon: "pi pi-users",
        text: t("Improved user experience and productivity"),
      },
    ],
    suitableFor: t(
      "Organizations with aging software systems that are becoming difficult to maintain or are hindering business growth.",
    ),
  },
  {
    icon: "pi pi-chart-line",
    title: t("SEO & Performance Optimization"),
    description: t(
      "We boost your digital presence and application efficiency. Our team optimizes your web applications for search engines and performance, ensuring faster load times, better user experience, and improved search rankings.",
    ),
    expanded: false,
    details: t(
      "Our SEO and performance optimization process involves technical SEO audits, content optimization, site structure improvements, and performance tuning. We use advanced tools and techniques to identify and resolve issues that impact your search rankings and user experience.",
    ),
    benefits: [
      {
        icon: "pi pi-arrow-up",
        text: t("Higher search engine rankings and increased organic traffic"),
      },
      {
        icon: "pi pi-bolt",
        text: t("Faster page load times and improved Core Web Vitals scores"),
      },
      {
        icon: "pi pi-users",
        text: t("Enhanced user engagement and lower bounce rates"),
      },
      {
        icon: "pi pi-chart-bar",
        text: t("Increased conversions and ROI from your digital assets"),
      },
    ],
    suitableFor: t(
      "E-commerce businesses, content-driven websites, and any company looking to improve their online visibility and web application performance.",
    ),
  },
]);

const sectionItems = [
  {
    icon: "pi pi-check-circle",
    title: "Comprehensive Solutions",
    description:
      "We cover all aspects of your digital needs, from planning to maintenance",
  },
  {
    icon: "pi pi-chart-line",
    title: "Results-Driven Approach",
    description:
      "Our solutions directly address your business challenges and drive measurable outcomes",
  },
  {
    icon: "pi pi-sitemap",
    title: "Scalable Architecture",
    description:
      "We build solutions that grow with your business, preventing future bottlenecks",
  },
  {
    icon: "pi pi-cog",
    title: "Efficiency-Focused",
    description:
      "Our development process emphasizes simplicity and effectiveness, saving you time and resources",
  },
  {
    icon: "pi pi-bolt",
    title: "Innovation-Led",
    description:
      "We leverage cutting-edge technologies to give you a competitive edge in your market",
  },
];

const toggleExpand = (index: number) => {
  services.value[index].expanded = !services.value[index].expanded;
};
</script>

<template>
  <section id="services">
    <h1 class="text-6xl leading-1 md:leading-24 font-bold mb-8 max-w-xl">
      {{ t("Powerful Solutions At Reach of Your Hand") }}
    </h1>
    <div class="flex flex-col gap-6 mb-16">
      <p class="text-xl md:text-2xl">
        {{
          t(
            "We deliver scalable, efficient solutions that solve real business challenges.",
          )
        }}
      </p>
      <p class="text-xl md:text-2xl">
        {{
          t(
            "Our focus is on creating value through innovative technology and streamlined processes.",
          )
        }}
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="(service, index) in services" :key="service.title">
        <div>
          <i
            :class="[
              service.icon,
              'text-4xl text-honolulu-blue-500 dark:text-honolulu-blue-400 mb-4',
            ]"
          ></i>
          <h3 class="text-2xl font-bold mb-4">{{ service.title }}</h3>
          <p class="text-lg mb-4">{{ service.description }}</p>
          <p class="text-md mb-6">
            <strong
              class="text-honolulu-blue-500 dark:text-honolulu-blue-400"
              >{{ t("Suitable for:") }}</strong
            >
            {{ service.suitableFor }}
          </p>
          <button
            type="button"
            class="p-button-outlined text-sm p-button-rounded text-honolulu-blue-500 dark:text-honolulu-blue-400"
            @click="toggleExpand(index)"
          >
            {{ service.expanded ? "Show Less" : "Discover More" }}
          </button>
        </div>
        <div v-if="service.expanded" class="p-6">
          <p class="mb-4">{{ service.details }}</p>
          <h4
            class="font-bold mb-4 text-honolulu-blue-600 dark:text-honolulu-blue-300"
          >
            Key Benefits:
          </h4>
          <ul class="space-y-3">
            <li
              v-for="benefit in service.benefits"
              :key="benefit.text"
              class="flex items-center"
            >
              <i
                :class="[
                  benefit.icon,
                  'mr-3 text-honolulu-blue-500 dark:text-honolulu-blue-400',
                ]"
              ></i>
              {{ benefit.text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16">
    <h2 class="text-3xl md:text-4xl font-bold mb-8">
      {{ t("Technologies We Work With") }}
    </h2>
    <p class="text-xl mb-8">
      {{
        t(
          "While these are our primary technologies, we're always open to exploring new tools that best fit your project needs.",
        )
      }}
    </p>
    <TechnologySlider />
  </section>

  <section class="py-12 md:py-16">
    <h2 class="text-3xl md:text-4xl font-bold mb-8">
      {{ t("Why Choose Our Services ?") }}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(item, index) in sectionItems"
        :key="index"
        class="rounded-lg p-6"
      >
        <i
          :class="[
            item.icon,
            'text-3xl text-honolulu-blue-500 dark:text-honolulu-blue-400 mb-4',
          ]"
        ></i>
        <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>
