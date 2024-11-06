<script setup lang="ts">
import { ref, computed } from "vue";
import MainHeader from "@/components/MainHeader.vue";
import SubHeader from "@/components/SubHeader.vue";
import ExpandableList from "@/components/ExpandableList.vue";
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";

interface Technology {
  name: string;
  category: string;
  description: string;
  useCases: string[];
  tag: string;
}

const technologies = ref<Technology[]>([
  {
    name: "JavaScript",
    category: "Programming Language",
    description:
      "Powers dynamic, interactive websites and web applications.",
    useCases: [
      "Create responsive, real-time user interfaces",
      "Build interactive forms with instant validation",
      "Develop browser-based games and applications",
      "Implement client-side data processing and visualization",
      "Enable seamless user experiences without page reloads"
    ],
    tag: "Dynamic UIs • Interactive Web Apps"
  },
  {
    name: "TypeScript",
    category: "Programming Language",
    description:
      "Enhances JavaScript for building robust, large-scale web applications.",
    useCases: [
      "Develop complex web applications with improved reliability",
      "Create maintainable code for enterprise-level software",
      "Build robust APIs for mobile and web applications",
      "Implement advanced type checking for superior code quality",
      "Facilitate team collaboration on extensive JavaScript projects"
    ],
    tag: "Enterprise Apps • Scalable Solutions"
  },
  {
    name: "PHP",
    category: "Programming Language",
    description:
      "A server-side language used to develop dynamic websites and web-based software.",
    useCases: [
      "Build custom e-commerce platforms tailored to your specific business needs",
      "Create content management systems for easily updating website information",
      "Develop forum or community platforms to engage with customers",
      "Implement user authentication and authorization systems",
      "Create dynamic web pages that interact with databases"
    ],
    tag: "E-commerce • CMS"
  },
  {
    name: "Python",
    category: "Programming Language",
    description:
      "A versatile language used for automating tasks, analyzing data, and building web applications.",
    useCases: [
      "Automate repetitive tasks like data entry or report generation",
      "Analyze and visualize business data to inform decision-making",
      "Develop machine learning models for predictive analytics",
      "Create web scraping tools to gather market intelligence",
      "Build backend systems for web applications"
    ],
    tag: "Automation • Data Analysis • Machine Learning"
  },
  {
    name: "Vue.js",
    category: "JavaScript Framework",
    description:
      "A framework that helps create responsive, user-friendly interfaces for web applications.",
    useCases: [
      "Create dynamic product catalogs that update in real-time",
      "Build responsive dashboards for monitoring business metrics",
      "Develop user-friendly interfaces for complex business applications",
      "Create single-page applications for improved user experience",
      "Implement progressive web apps for mobile-like experiences on the web"
    ],
    tag: "SPAs • Dashboards"
  },
  {
    name: "Symfony",
    category: "PHP Framework",
    description:
      "A powerful PHP framework that streamlines the development of advanced web applications.",
    useCases: [
      "Develop custom business management systems tailored to your workflow",
      "Create secure online platforms for financial transactions",
      "Build scalable web services that can grow with your business",
      "Implement RESTful APIs for mobile and web applications",
      "Create modular and reusable components for faster development"
    ],
    tag: "Business Systems • APIs"
  },
  {
    name: "Laravel",
    category: "PHP Framework",
    description:
      "A popular PHP framework that simplifies the process of building custom web applications.",
    useCases: [
      "Rapidly develop and launch web applications to test business ideas",
      "Create custom CRM systems tailored to your sales process",
      "Build secure authentication systems for user accounts",
      "Develop e-commerce platforms with built-in features",
      "Create APIs for mobile applications quickly and efficiently"
    ],
    tag: "Rapid Development • CRM • E-commerce"
  },
  {
    name: "Node.js",
    category: "JavaScript Runtime",
    description:
      "A runtime environment that allows JavaScript to be used on the server-side.",
    useCases: [
      "Create real-time collaboration tools like shared document editors",
      "Build high-performance web applications that can handle many users",
      "Develop efficient backend services for mobile apps",
      "Create scalable microservices architectures",
      "Build data streaming applications for real-time analytics"
    ],
    tag: "Real-time Apps • Backend Services"
  },
  {
    name: "Tailwind CSS",
    category: "CSS Framework",
    description:
      "A utility-focused CSS framework that speeds up the design and development of responsive web interfaces.",
    useCases: [
      "Quickly create professional-looking landing pages for marketing campaigns",
      "Design consistent user interfaces across different web applications",
      "Build responsive email templates that look good on all devices",
      "Rapidly prototype and iterate on UI designs",
      "Create custom design systems for large-scale web projects"
    ],
    tag: "Responsive Design • Prototyping"
  },
  {
    name: "MySQL",
    category: "Database",
    description:
      "A widely-used database system for securely storing and managing structured data for web applications.",
    useCases: [
      "Store customer information and order history for e-commerce platforms",
      "Manage inventory and sales data across multiple store locations",
      "Power dynamic content on websites, like user accounts or product listings",
      "Implement complex data relationships for business intelligence applications",
      "Store and retrieve large volumes of transactional data efficiently"
    ],
    tag: "Data Storage • E-commerce"
  },
  {
    name: "Apache Kafka",
    category: "Message Broker",
    description:
      "A distributed platform for building real-time data pipelines and applications.",
    useCases: [
      "Monitor and react to customer actions on your website in real-time",
      "Process and analyze logs from multiple systems for quick problem detection",
      "Build real-time dashboards for monitoring business metrics",
      "Implement event-driven architectures for microservices",
      "Create data pipelines for real-time analytics and machine learning"
    ],
    tag: "Real-time Data • Event-driven Architectures"
  },
  {
    name: "RabbitMQ",
    category: "Message Broker",
    description:
      "A message broker that enables communication between different parts of an application.",
    useCases: [
      "Decouple different parts of your application for better scalability",
      "Implement asynchronous processing for improved performance",
      "Create reliable job queues for background tasks",
      "Build event-driven architectures",
      "Manage microservices communication efficiently"
    ],
    tag: "Scalability • Asynchronous Processing"
  },
  {
    name: "Docker",
    category: "Container Platform",
    description:
      "A tool that packages applications and their dependencies into containers for consistent deployment.",
    useCases: [
      "Ensure your web services work the same way in development and live environments",
      "Quickly set up and tear down test environments for new features",
      "Easily move applications between different cloud providers or servers",
      "Simplify the deployment process for complex applications",
      "Isolate applications for improved security and resource management"
    ],
    tag: "Consistent Deployment • Test Environments"
  },
  {
    name: "GitHub Actions",
    category: "Workflow Automation",
    description:
      "An automation platform that helps streamline software development workflows and deployment.",
    useCases: [
      "Automatically test new code changes to catch issues before they affect customers",
      "Deploy website updates automatically when changes are approved",
      "Generate reports on code quality and project status automatically",
      "Automate the release process for software updates",
      "Implement continuous integration and delivery pipelines"
    ],
    tag: "CI/CD • Automated Testing"
  },
  {
    name: "Git",
    category: "Version Control System",
    description:
      "A distributed system for tracking and managing changes in source code during development.",
    useCases: [
      "Collaborate on software projects without overwriting each other's work",
      "Maintain different versions of your software for different clients",
      "Easily roll back changes if new features cause problems",
      "Create separate branches to develop and test new features",
      "Track and manage code changes across large development teams"
    ],
    tag: "Version Control • Collaboration"
  },
  {
    name: "AWS",
    category: "Cloud Computing Platform",
    description:
      "A comprehensive cloud service that provides a wide range of on-demand computing resources.",
    useCases: [
      "Host websites that can handle sudden spikes in traffic without crashing",
      "Store and process large amounts of data securely and cost-effectively",
      "Run complex business applications without maintaining physical servers",
      "Implement disaster recovery and backup solutions for critical data",
      "Deploy global content delivery networks for faster website performance"
    ],
    tag: "Scalable Hosting • Data Storage"
  },
  {
    name: "GCP",
    category: "Cloud Computing Platform",
    description:
      "A cloud platform from Google, with a focus on data analysis, machine learning, and artificial intelligence.",
    useCases: [
      "Analyze large datasets to gain insights into customer behavior",
      "Implement AI-powered features like product recommendations or chatbots",
      "Host applications that can serve users globally with low latency",
      "Process and analyze big data using managed services",
      "Implement machine learning models at scale for business predictions"
    ],
    tag: "Data Analysis • AI Features"
  },
  {
    name: "Google Analytics",
    category: "Web Analytics",
    description:
      "A service that tracks and reports website traffic and user behavior.",
    useCases: [
      "Understand which products or services are most popular with your online visitors",
      "Track the effectiveness of your digital marketing campaigns",
      "Identify usability issues on your website to improve user experience",
      "Analyze user journeys to optimize conversion rates",
      "Monitor real-time traffic during promotional events or product launches"
    ],
    tag: "Traffic Analysis • Marketing Insights"
  },
  {
    name: "Grafana",
    category: "Monitoring and Observability Platform",
    description:
      "An open-source platform for monitoring, visualizing, and analyzing application metrics and logs.",
    useCases: [
      "Create custom dashboards for visualizing application metrics",
      "Monitor system performance in real-time",
      "Set up alerts for critical issues",
      "Analyze logs and traces for troubleshooting",
      "Visualize business KPIs for data-driven decision making"
    ],
    tag: "Dashboards • Real-time Monitoring"
  },
  {
    name: "Uptime Kuma",
    category: "Uptime Monitoring Tool",
    description:
      "A self-hosted tool for tracking the availability and performance of websites and online services.",
    useCases: [
      "Monitor website uptime and performance",
      "Receive alerts for service outages",
      "Track response times across different regions",
      "Monitor SSL certificate expiration",
      "Create status pages for your services"
    ],
    tag: "Uptime Monitoring • Alerts"
  },
  {
    name: "Prometheus",
    category: "Performance Monitoring",
    description: "An open-source monitoring and alerting toolkit.",
    useCases: [
      "Collect and store time-series data for system and application metrics",
      "Implement alerting rules for proactive issue detection",
      "Monitor containerized environments",
      "Create custom metrics for business-specific monitoring",
      "Integrate with Grafana for advanced visualizations"
    ],
    tag: "Metrics Collection • Alerting"
  },
  {
    name: "Sentry",
    category: "Error Tracking",
    description:
      "A tool that monitors applications for errors and performance issues in real-time.",
    useCases: [
      "Automatically detect and alert on errors in web and mobile applications",
      "Track application performance to identify bottlenecks and slow-loading pages",
      "Gain insights into user experiences and app crashes on different devices",
      "Monitor release deployments to catch new issues quickly",
      "Prioritize bug fixes based on impact and frequency of errors"
    ],
    tag: "Error Detection • Performance Tracking"
  },
  {
    name: "Cypress",
    category: "Quality Assurance",
    description: "A JavaScript-based end-to-end testing framework.",
    useCases: [
      "Automate browser-based functional testing",
      "Simulate user interactions to test UI flows",
      "Perform integration testing of web applications",
      "Create visual regression tests",
      "Test responsive designs across different screen sizes"
    ],
    tag: "E2E Testing • UI Flows"
  },
  {
    name: "OpenAI",
    category: "Artificial Intelligence",
    description:
      "Provides advanced AI models and APIs for various applications.",
    useCases: [
      "Implement natural language processing in applications",
      "Create AI-powered chatbots for customer service",
      "Generate human-like text for content creation",
      "Analyze and summarize large amounts of text data",
      "Develop AI-assisted coding tools"
    ],
    tag: "NLP • AI Chatbots"
  },
  {
    name: "Cloudflare",
    category: "Web Performance",
    description: "A content delivery network and security services provider.",
    useCases: [
      "Improve website loading speeds globally",
      "Protect websites from DDoS attacks",
      "Implement SSL/TLS encryption easily",
      "Optimize image delivery for faster page loads",
      "Provide edge computing capabilities for faster data processing"
    ],
    tag: "CDN • Security"
  },
  {
    name: "Bootstrap",
    category: "CSS Framework",
    description:
      "A popular front-end framework for building responsive, mobile-first websites.",
    useCases: [
      "Quickly create professional-looking web pages with pre-built UI components",
      "Develop responsive and mobile-friendly user interfaces",
      "Customize the design and layout of websites and web applications",
      "Integrate Bootstrap with other front-end technologies like JavaScript and Vue.js",
      "Leverage the extensive ecosystem of Bootstrap plugins and themes"
    ],
    tag: "Responsive UI • Mobile-first Design"
  },
  {
    name: "WordPress",
    category: "Content Management System",
    description:
      "A flexible, open-source platform for building websites, blogs, and web applications.",
    useCases: [
      "Create and manage content-driven websites and blogs",
      "Develop custom websites and web applications using WordPress as a foundation",
      "Extend WordPress functionality with a vast library of plugins and themes",
      "Power e-commerce websites and online stores with the WooCommerce plugin",
      "Provide an easy-to-use content management system for non-technical users"
    ],
    tag: "Websites • Blogs"
  },
  {
    name: "WooCommerce",
    category: "E-commerce Platform",
    description:
      "An open-source e-commerce plugin for WordPress, enabling you to sell products and services online.",
    useCases: [
      "Build custom, feature-rich e-commerce websites on top of WordPress",
      "Manage product catalogs, inventory, orders, and customer information",
      "Implement secure payment processing and checkout flows",
      "Extend the functionality of an e-commerce store with a wide range of WooCommerce plugins",
      "Provide a user-friendly platform for non-technical users to manage their online store"
    ],
    tag: "E-commerce • Payment Processing"
  },
  {
    name: "On-Premise Infrastructure",
    category: "Servers Technology",
    description:
      "The hardware and software components that are physically located and maintained on the company's own premises.",
    useCases: [
      "Host and manage mission-critical applications and data on-site",
      "Maintain full control over the IT infrastructure and security",
      "Integrate on-premise systems with cloud-based services and applications",
      "Comply with industry regulations and data sovereignty requirements",
      "Provide reliable and low-latency access to local resources"
    ],
    tag: "Local Hosting • Security Control"
  },
  {
    name: "Claude",
    category: "Artificial Intelligence",
    description:
      "An advanced language model that can assist with a variety of tasks, from content creation to problem-solving.",
    useCases: [
      "Generate human-like text for articles, marketing copy, and other content",
      "Provide intelligent responses and solutions to questions and problems",
      "Assist with research and data analysis by summarizing key insights",
      "Enhance productivity by automating repetitive writing and brainstorming tasks",
      "Collaborate with humans to ideate, iterate, and refine ideas"
    ],
    tag: "Content Creation • Problem Solving"
  },
  {
    name: "Google Search Console",
    category: "Web Analytics",
    description:
      "A free tool provided by Google that helps website owners monitor and maintain their site's presence in Google Search.",
    useCases: [
      "Identify and fix issues that could prevent your website from appearing in Google Search",
      "Understand how Google views and crawls your website",
      "Monitor your website's search performance and track key metrics",
      "Submit sitemaps and individual URLs to Google for faster indexing",
      "Receive notifications about security issues and other problems with your site"
    ],
    tag: "SEO • Search Performance"
  },
  {
    name: "Kibana",
    category: "Analytics",
    description:
      "A data visualization and exploration tool that is part of the Elastic Stack (ELK), used for analyzing and monitoring data.",
    useCases: [
      "Visualize and explore data from various sources, including logs, metrics, and application data",
      "Create custom dashboards and reports to gain insights into system performance and user behavior",
      "Perform advanced data analysis and troubleshooting using the powerful query language",
      "Monitor and alert on critical events and anomalies in real-time",
      "Integrate with other Elastic Stack components for a comprehensive observability solution"
    ],
    tag: "Data Visualization • Alerts"
  },
  {
    name: "Elasticsearch",
    category: "Search Engine",
    description:
      "A powerful search and analytics engine that can index and search large amounts of data, including text, logs, and metrics.",
    useCases: [
      "Quickly search and analyze vast amounts of information to find relevant data",
      "Implement real-time search and recommendation features for your applications",
      "Gain insights and identify patterns in your data through advanced analytics",
      "Integrate with other tools to create a comprehensive data platform",
      "Build custom search-powered applications and solutions"
    ],
    tag: "Search • Data Analysis"
  },
  {
    name: "Kubernetes",
    category: "Container Management",
    description:
      "An open-source platform that helps automate the deployment, scaling, and management of containerized applications.",
    useCases: [
      "Run and scale your applications in a reliable and efficient way, even as they grow",
      "Ensure high availability and fault tolerance for your mission-critical services",
      "Manage the resources used by your applications to optimize performance and costs",
      "Implement automated deployment and update processes for your software",
      "Integrate with other tools to create a comprehensive DevOps workflow"
    ],
    tag: "Scaling • Deployment Automation"
  },
  {
    name: "Terraform",
    category: "Infrastructure Automation",
    description:
      "A tool that allows you to define and manage your cloud infrastructure as code, making it easier to provision and update.",
    useCases: [
      "Automatically create and configure your cloud resources, such as servers, databases, and networks",
      "Ensure consistency and repeatability in how your infrastructure is deployed",
      "Track and manage changes to your infrastructure using version control",
      "Integrate with other tools to streamline your entire development and deployment process",
      "Provision infrastructure for your applications in a reliable and scalable way"
    ],
    tag: "Infrastructure as Code • Consistency"
  }
]);
const groupedTechnologies = computed(() => {
  const groups = {
    "Programming Languages": ["JavaScript", "TypeScript", "PHP", "Python"],
    "Web Development Frameworks": ["Symfony", "Laravel", "Vue.js"],
    "Runtime Environments": ["Node.js"],
    "Content Management Systems": ["WordPress", "WooCommerce"],
    "Web Design Tools": ["Bootstrap", "Tailwind CSS"],
    "Databases and Messaging": ["MySQL", "Apache Kafka", "RabbitMQ"],
    "Web Analytics": ["Google Analytics", "Google Search Console"],
    "Search and Log Analysis": ["Elasticsearch", "Kibana"],
    "Container Technologies": ["Docker", "Kubernetes"],
    "Infrastructure Management": [
      "Terraform",
      "AWS",
      "GCP",
      "On-Premise Infrastructure"
    ],
    "Development Collaboration": ["GitHub Actions", "Git"],
    "Web Performance and Security": ["Cloudflare"],
    "System Monitoring": ["Grafana", "Uptime Kuma", "Prometheus", "Sentry"],
    "Automated Testing": ["Cypress"],
    "AI and Automation": ["OpenAI", "Claude"]
  };
  return Object.entries(groups).map(([groupName, techNames]) => ({
    name: groupName,
    items: techNames.map((name) => {
      const tech = technologies.value.find((t) => t.name === name);
      if (!tech) return null;
      return {
        title: tech.name,
        tag: tech.tag,
        additionalInfo: tech.description,
        sublists: [{
          title: "Use Cases",
          items: tech.useCases.map(uc => ({ text: uc }))
        }]
      };
    }).filter((item) => item !== null)
  }));
});
</script>

<template>
  <MainHeader text="Cutting-Edge Tech Stack" />
  <SubHeader
    first="Empowering your digital vision with a comprehensive suite of modern technologies and platforms."
  />
  <BottomToTopSlideTransition duration="1300">
    <div v-for="group in groupedTechnologies" :key="group.name" class="mb-8 flex flex-col gap-8">
      <h2 class="max-w-4xl text-2xl md:text-3xl font-bold text-gray-500 dark:text-gray-400">{{ group.name }}</h2>
      <ExpandableList :items="group.items" :grouped="false" />
    </div>
  </BottomToTopSlideTransition>
</template>