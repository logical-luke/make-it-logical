<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import LinkItem from "@/components/LinkItem.vue";
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";
import BulbShape from "@/components/BulbShape.vue";
import ExpandableList from "@/components/ExpandableList.vue";
import FadeTransition from "@/components/FadeTransition.vue";
import TechnologyList from "@/components/TechnologyList.vue";

const { t } = useI18n();

const services = ref([
  {
    title: t("Planning & Leadership"),
    additionalInfo: t(
      "We transform visions into actionable plans. Our approach aligns technology with business goals, creating clear roadmaps for success. By coordinating cross-functional teams, we ensure smooth project delivery. The result? Streamlined operations, improved performance, and faster time-to-market. Our leadership doesn't just manage projects; it drives innovation and maximizes ROI.",
    ),
  },
  {
    title: t("User Experience Design"),
    additionalInfo: t(
      "Great design goes beyond aesthetics; it solves problems. We start with in-depth user research, uncovering needs and pain points. This insight drives our design process, resulting in intuitive interfaces that users love. We iterate based on feedback, ensuring each design decision enhances user satisfaction. The outcome is increased engagement, higher retention rates, and a strong competitive edge.",
    ),
  },
  {
    title: t("Development"),
    additionalInfo: t(
      "Code is the backbone of digital success. We build robust, scalable solutions using cutting-edge technologies. Our development process emphasizes quality, security, and performance. We create flexible architectures that grow with your business, ensuring long-term value. The result is software that not only meets current needs but is primed for future challenges.",
    ),
  },
  {
    title: t("Operations"),
    additionalInfo: t(
      "Smooth operations are crucial for business continuity. We implement efficient systems for software delivery and updates, enhancing reliability and performance. Our approach optimizes resource utilization and implements proactive monitoring. This leads to reduced downtime, improved security, and significant cost savings. We turn potential technical headaches into operational strengths.",
    ),
  },
  {
    title: t("Improvements"),
    additionalInfo: t(
      "In the digital world, standing still means falling behind. We provide continuous enhancements to keep your software at peak performance. Regular audits identify optimization opportunities in functionality, security, and user experience. We implement updates that not only fix issues but add value. The result is software that evolves with your business, consistently meeting and exceeding user expectations.",
    ),
  },
  {
    title: t("Modernization"),
    additionalInfo: t(
      "Legacy systems often hold untapped potential. Our modernization approach preserves valuable business logic while upgrading technology. We implement modern architectures and cloud solutions, enhancing performance and scalability. This process not only extends the life of your software but opens new possibilities for innovation. The outcome is revitalized systems that drive business growth and efficiency.",
    ),
  },
  {
    title: t("Search Engine Optimization"),
    additionalInfo: t(
      "Visibility is key in the digital marketplace. Our SEO strategies go beyond keywords, focusing on creating valuable, relevant content. We optimize website structure and performance, enhancing user experience and search rankings. Our data-driven approach continuously refines strategies for maximum impact. The result is increased organic traffic, better user engagement, and improved conversion rates.",
    ),
  },
]);

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

const technologies = ref([
  {
    name: "JavaScript",
    category: "Web Interactivity",
    description: "Powers interactive features on websites and web applications",
    useCases: [
      "Create dynamic content that updates without reloading the page",
      "Build interactive forms with real-time validation",
      "Develop responsive user interfaces for web applications",
      "Create browser-based games and entertainment applications",
      "Implement client-side data processing and visualization",
    ],
  },
  {
    name: "TypeScript",
    category: "Code Quality",
    description:
      "Enhances JavaScript with additional features for larger projects",
    useCases: [
      "Develop complex web applications with fewer errors",
      "Create more maintainable code for large-scale business software",
      "Build robust APIs for mobile and web applications",
      "Implement advanced type checking for improved code quality",
      "Enhance team collaboration on large JavaScript projects",
    ],
  },
  {
    name: "PHP",
    category: "Web Development",
    description:
      "Powers websites and web applications with server-side functionality",
    useCases: [
      "Build custom e-commerce platforms tailored to your specific business needs",
      "Create content management systems for easily updating website information",
      "Develop forum or community platforms to engage with customers",
      "Implement user authentication and authorization systems",
      "Create dynamic web pages that interact with databases",
    ],
  },
  {
    name: "Python",
    category: "Data and Automation",
    description:
      "Versatile language for automation, data analysis, and web development",
    useCases: [
      "Automate repetitive tasks like data entry or report generation",
      "Analyze and visualize business data to inform decision-making",
      "Develop machine learning models for predictive analytics",
      "Create web scraping tools to gather market intelligence",
      "Build backend systems for web applications",
    ],
  },
  {
    name: "Vue.js",
    category: "User Interface",
    description:
      "Builds interactive websites and applications that respond quickly to user actions",
    useCases: [
      "Create dynamic product catalogs that update in real-time",
      "Build responsive dashboards for monitoring business metrics",
      "Develop user-friendly interfaces for complex business applications",
      "Create single-page applications for improved user experience",
      "Implement progressive web apps for mobile-like experiences on the web",
    ],
  },
  {
    name: "Symfony",
    category: "Web Application",
    description:
      "Provides tools for building complex web applications efficiently",
    useCases: [
      "Develop custom business management systems tailored to your workflow",
      "Create secure online platforms for financial transactions",
      "Build scalable web services that can grow with your business",
      "Implement RESTful APIs for mobile and web applications",
      "Create modular and reusable components for faster development",
    ],
  },
  {
    name: "Laravel",
    category: "Web Application",
    description: "Simplifies the process of building web applications with PHP",
    useCases: [
      "Rapidly develop and launch web applications to test business ideas",
      "Create custom CRM systems tailored to your sales process",
      "Build secure authentication systems for user accounts",
      "Develop e-commerce platforms with built-in features",
      "Create APIs for mobile applications quickly and efficiently",
    ],
  },
  {
    name: "Node.js",
    category: "Server Technology",
    description:
      "Runs JavaScript on servers to build fast, scalable network applications",
    useCases: [
      "Create real-time collaboration tools like shared document editors",
      "Build high-performance web applications that can handle many users",
      "Develop efficient backend services for mobile apps",
      "Create scalable microservices architectures",
      "Build data streaming applications for real-time analytics",
    ],
  },
  {
    name: "Tailwind CSS",
    category: "Design System",
    description:
      "Speeds up the process of designing and building responsive web interfaces",
    useCases: [
      "Quickly create professional-looking landing pages for marketing campaigns",
      "Design consistent user interfaces across different web applications",
      "Build responsive email templates that look good on all devices",
      "Rapidly prototype and iterate on UI designs",
      "Create custom design systems for large-scale web projects",
    ],
  },
  {
    name: "MySQL",
    category: "Data Storage",
    description: "Stores and manages structured data for applications",
    useCases: [
      "Store customer information and order history for e-commerce platforms",
      "Manage inventory and sales data across multiple store locations",
      "Power dynamic content on websites, like user accounts or product listings",
      "Implement complex data relationships for business intelligence applications",
      "Store and retrieve large volumes of transactional data efficiently",
    ],
  },
  {
    name: "Apache Kafka",
    category: "Real-time Data",
    description:
      "Processes and analyzes data in real-time for immediate insights",
    useCases: [
      "Monitor and react to customer actions on your website in real-time",
      "Process and analyze logs from multiple systems for quick problem detection",
      "Build real-time dashboards for monitoring business metrics",
      "Implement event-driven architectures for microservices",
      "Create data pipelines for real-time analytics and machine learning",
    ],
  },
  {
    name: "RabbitMQ",
    category: "System Communication",
    description:
      "Message broker for implementing communication between distributed systems",
    useCases: [
      "Decouple different parts of your application for better scalability",
      "Implement asynchronous processing for improved performance",
      "Create reliable job queues for background tasks",
      "Build event-driven architectures",
      "Manage microservices communication efficiently",
    ],
  },
  {
    name: "Docker",
    category: "Application Deployment",
    description:
      "Packages applications to run consistently across different computing environments",
    useCases: [
      "Ensure your web services work the same way in development and live environments",
      "Quickly set up and tear down test environments for new features",
      "Easily move applications between different cloud providers or servers",
      "Simplify the deployment process for complex applications",
      "Isolate applications for improved security and resource management",
    ],
  },
  {
    name: "GitHub Actions",
    category: "Workflow Automation",
    description:
      "Automates software workflows to improve development efficiency",
    useCases: [
      "Automatically test new code changes to catch issues before they affect customers",
      "Deploy website updates automatically when changes are approved",
      "Generate reports on code quality and project status automatically",
      "Automate the release process for software updates",
      "Implement continuous integration and delivery pipelines",
    ],
  },
  {
    name: "Git",
    category: "Code Management",
    description:
      "Tracks changes in code to manage software development projects",
    useCases: [
      "Collaborate on software projects without overwriting each other's work",
      "Maintain different versions of your software for different clients",
      "Easily roll back changes if new features cause problems",
      "Create separate branches to develop and test new features",
      "Track and manage code changes across large development teams",
    ],
  },
  {
    name: "AWS",
    category: "Cloud Services",
    description:
      "Provides scalable cloud computing services for hosting and running applications",
    useCases: [
      "Host websites that can handle sudden spikes in traffic without crashing",
      "Store and process large amounts of data securely and cost-effectively",
      "Run complex business applications without maintaining physical servers",
      "Implement disaster recovery and backup solutions for critical data",
      "Deploy global content delivery networks for faster website performance",
    ],
  },
  {
    name: "GCP",
    category: "Cloud Services",
    description:
      "Offers cloud computing services with a focus on data analysis and machine learning",
    useCases: [
      "Analyze large datasets to gain insights into customer behavior",
      "Implement AI-powered features like product recommendations or chatbots",
      "Host applications that can serve users globally with low latency",
      "Process and analyze big data using managed services",
      "Implement machine learning models at scale for business predictions",
    ],
  },
  {
    name: "Google Analytics",
    category: "Web Analytics",
    description:
      "Tracks and reports website traffic to understand user behavior",
    useCases: [
      "Understand which products or services are most popular with your online visitors",
      "Track the effectiveness of your digital marketing campaigns",
      "Identify usability issues on your website to improve user experience",
      "Analyze user journeys to optimize conversion rates",
      "Monitor real-time traffic during promotional events or product launches",
    ],
  },
  {
    name: "Grafana",
    category: "Business Intelligence",
    description: "Platform for monitoring and observability",
    useCases: [
      "Create custom dashboards for visualizing application metrics",
      "Monitor system performance in real-time",
      "Set up alerts for critical issues",
      "Analyze logs and traces for troubleshooting",
      "Visualize business KPIs for data-driven decision making",
    ],
  },
  {
    name: "Uptime Kuma",
    category: "Service Monitoring",
    description: "Self-hosted monitoring tool for websites and services",
    useCases: [
      "Monitor website uptime and performance",
      "Receive alerts for service outages",
      "Track response times across different regions",
      "Monitor SSL certificate expiration",
      "Create status pages for your services",
    ],
  },
  {
    name: "Prometheus",
    category: "Performance Monitoring",
    description: "Open-source monitoring and alerting toolkit",
    useCases: [
      "Collect and store time-series data for system and application metrics",
      "Implement alerting rules for proactive issue detection",
      "Monitor containerized environments",
      "Create custom metrics for business-specific monitoring",
      "Integrate with Grafana for advanced visualizations",
    ],
  },
  {
    name: "Sentry",
    category: "Error Tracking",
    description:
      "Monitors applications for errors and performance issues in real-time",
    useCases: [
      "Automatically detect and alert on errors in web and mobile applications",
      "Track application performance to identify bottlenecks and slow-loading pages",
      "Gain insights into user experiences and app crashes on different devices",
      "Monitor release deployments to catch new issues quickly",
      "Prioritize bug fixes based on impact and frequency of errors",
    ],
  },
  {
    name: "Cypress",
    category: "Quality Assurance",
    description: "JavaScript-based end-to-end testing framework",
    useCases: [
      "Automate browser-based functional testing",
      "Simulate user interactions to test UI flows",
      "Perform integration testing of web applications",
      "Create visual regression tests",
      "Test responsive designs across different screen sizes",
    ],
  },
  {
    name: "OpenAI",
    category: "Artificial Intelligence",
    description:
      "Provides advanced AI models and APIs for various applications",
    useCases: [
      "Implement natural language processing in applications",
      "Create AI-powered chatbots for customer service",
      "Generate human-like text for content creation",
      "Analyze and summarize large amounts of text data",
      "Develop AI-assisted coding tools",
    ],
  },
  {
    name: "Cloudflare",
    category: "Web Performance",
    description: "Content Delivery Network and security services provider",
    useCases: [
      "Improve website loading speeds globally",
      "Protect websites from DDoS attacks",
      "Implement SSL/TLS encryption easily",
      "Optimize image delivery for faster page loads",
      "Provide edge computing capabilities for faster data processing",
    ],
  },
]);

const serviceItems = services.value.map((service) => ({
  title: service.title,
  sublists: [],
  additionalInfo: service.additionalInfo,
}));

const processItems = processSteps.value.map((step) => ({
  title: step.label,
  sublists: [],
  additionalInfo: step.additionalInfo,
}));
</script>

<template>
  <div class="flex flex-col gap-24">
    <section class="min-h-[calc(100vh-80px)] flex flex-col md:flex-row">
      <div class="w-full md:w-1/2 mb-8 md:mb-0">
        <BottomToTopSlideTransition duration="700">
          <h1
            class="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight"
          >
            {{ t("Get Software") }}<br />
            {{ t("Not Confusion") }}
          </h1>
        </BottomToTopSlideTransition>
        <BottomToTopSlideTransition duration="1300">
          <h2
            class="flex flex-col font-semibold text-lg md:text-3xl lg:text-4xl leading-tight"
          >
            <span class="text-primary font-normal">{{
              t("We simply deliver complete")
            }}</span>
            {{ t("digital solutions") }}
          </h2>
        </BottomToTopSlideTransition>
      </div>
      <div class="w-full md:w-1/2 mt-10 md:mt-0 -ml-7">
        <BulbShape />
      </div>
    </section>

    <BottomToTopSlideTransition duration="500">
      <section>
        <h2
          class="text-gray-500 dark:text-gray-400 text-2xl md:text-5xl font-bold mb-12"
        >
          {{ t("Solutions That Resonate") }}
        </h2>
        <p class="text-lg md:text-2xl mb-4 max-w-4xl">
          {{ t("We don't just build apps.") }}
        </p>
        <p class="text-lg md:text-2xl mb-12 max-w-4xl">
          {{ t("We craft experiences that connect, engage, and inspire.") }}
        </p>
        <ExpandableList :items="serviceItems" />
        <div class="flex justify-center mt-8">
          <LinkItem to="/services">
            {{ t("Explore Services") }}
          </LinkItem>
        </div>
      </section>
    </BottomToTopSlideTransition>
    <BottomToTopSlideTransition>
      <section>
        <h2
          class="text-gray-500 dark:text-gray-400 text-xl md:text-4xl font-bold mb-6"
        >
          {{ t("Technologies We Work With") }}
        </h2>
        <p class="text-lg md:text-2xl mb-8 max-w-4xl">
          {{
            t(
              "While these are our primary technologies, we're always open to exploring new tools that best fit your project needs.",
            )
          }}
        </p>
        <FadeTransition duration="1300">
          <TechnologyList
            :technologies="technologies"
            animation-duration="500"
          />
        </FadeTransition>
      </section>
    </BottomToTopSlideTransition>
    <BottomToTopSlideTransition>
      <section>
        <h2
          class="text-gray-500 dark:text-gray-400 text-2xl md:text-5xl font-bold mb-12 max-w-4xl"
        >
          {{ t("Digital Orchestra") }}
        </h2>
        <ExpandableList :items="processItems" />
        <div class="flex justify-center mt-8">
          <LinkItem to="/process">
            {{ t("Discover Process") }}
          </LinkItem>
        </div>
      </section>
    </BottomToTopSlideTransition>
    <BottomToTopSlideTransition>
      <section>
        <h2
          class="text-gray-500 dark:text-gray-400 text-2xl md:text-5xl font-bold mb-12 max-w-4xl"
        >
          {{ t("Ready for a Journey?") }}
        </h2>
        <div class="flex flex-col gap-4">
          <p class="md:text-2xl mb-8 max-w-4xl">
            {{ t("Get solutions that don't just work – they") }}
            <span class="font-semibold">{{ t("wow") }}</span
            >.
          </p>
          <p class="text-lg md:text-2xl max-w-4xl">
            {{ t("Your vision, our expertise") }}
          </p>
          <p class="text-lg md:text-2xl max-w-4xl">
            {{ t("a perfect") }}
          </p>
          <p class="text-xl md:text-4xl mb-12 font-bold max-w-4xl">
            {{ t("symphony") }}
          </p>
        </div>
        <div class="flex justify-center">
          <LinkItem to="/contact">
            {{ t("Ignite Success") }}
          </LinkItem>
        </div>
      </section>
    </BottomToTopSlideTransition>
  </div>
</template>
