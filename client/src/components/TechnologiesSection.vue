<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { ref } from "vue";
import HomePageSection from "@/components/HomePageSection.vue";
import TechnologyList from "@/components/TechnologyList.vue";
import FadeTransition from "@/components/FadeTransition.vue";

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
</script>

<template>
  <HomePageSection title="Technologies We Work With">
    <p class="text-lg md:text-2xl mb-8 max-w-4xl">
      {{
        t(
          "While these are our primary technologies, we're always open to exploring new tools that best fit your project needs.",
        )
      }}
    </p>
    <FadeTransition duration="1300">
      <TechnologyList :technologies="technologies" animation-duration="500" />
    </FadeTransition>
  </HomePageSection>
</template>

<style scoped></style>
