<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import {ref} from 'vue';
import Panel from 'primevue/panel';
import Button from 'primevue/button';
import Card from 'primevue/card';
import {useRouter} from 'vue-router';
import TechnologySlider from "@/components/TechnologySlider.vue";
import Divider from 'primevue/divider';
import Image from 'primevue/image';

const {t} = useI18n();
const router = useRouter();

const services = ref([
  {
    icon: 'pi pi-compass',
    title: t('Strategic Planning & Design'),
    description: t('We create the blueprint for your digital success. Our team analyzes your business needs, defines clear objectives, and designs intuitive user interfaces that drive engagement.'),
    expanded: false,
    details: t('Our strategic planning process involves in-depth market research, competitor analysis, and user behavior studies. We translate these insights into actionable plans and user-centric designs that set the foundation for successful digital products.'),
    benefits: [
      {icon: 'pi pi-check-circle', text: t('Clearly defined project roadmap aligned with business goals')},
      {icon: 'pi pi-users', text: t('User interfaces designed for maximum engagement and conversion')},
      {icon: 'pi pi-clock', text: t('Reduced development time and costs through thorough planning')},
      {icon: 'pi pi-shield', text: t('Mitigation of potential risks and roadblocks')}
    ],
    suitableFor: t('Startups launching new products, enterprises undertaking digital transformation, and businesses looking to revamp their existing digital presence.'),
    galleryImages: []
  },
  {
    icon: 'pi pi-cog',
    title: t('Full-Stack Development'),
    description: t('We build robust, scalable applications that work flawlessly from front-end to back-end. Our development team uses cutting-edge technologies to create responsive, feature-rich solutions that solve real business challenges.'),
    expanded: false,
    details: t('Our full-stack development approach ensures seamless integration between all layers of your application. We employ best practices in code architecture, security, and performance optimization to deliver high-quality, maintainable software.'),
    benefits: [
      {icon: 'pi pi-link', text: t('Cohesive end-to-end solutions that reduce integration headaches')},
      {icon: 'pi pi-bolt', text: t('Optimized performance across all application layers')},
      {icon: 'pi pi-chart-line', text: t('Flexible and scalable architecture that grows with your business')},
      {icon: 'pi pi-calendar', text: t('Shorter time-to-market with our efficient development processes')}
    ],
    suitableFor: t('Businesses of all sizes needing custom software solutions, from startups building their MVP to enterprises developing complex, mission-critical applications.'),
    galleryImages: []
  },
  {
    icon: 'pi pi-server',
    title: t('DevOps & Infrastructure'),
    description: t('We streamline your development workflow and optimize your infrastructure. Our DevOps practices and cloud solutions accelerate deployment cycles, enhance system reliability, and maximize resource efficiency.'),
    expanded: false,
    details: t('We implement robust CI/CD pipelines, set up comprehensive monitoring and alerting systems, and manage cloud infrastructure to ensure high availability and performance. Our approach emphasizes security, scalability, and cost-effectiveness.'),
    benefits: [
      {icon: 'pi pi-sync', text: t('Faster, more reliable software releases')},
      {icon: 'pi pi-chart-bar', text: t('Improved system uptime and performance')},
      {icon: 'pi pi-wallet', text: t('Reduced operational costs through optimized resource utilization')},
      {icon: 'pi pi-lock', text: t('Enhanced security posture with best practices and regular audits')}
    ],
    suitableFor: t('Companies looking to accelerate their development cycles, improve system reliability, or optimize their cloud infrastructure.'),
    galleryImages: []
  },
  {
    icon: 'pi pi-sliders-h',
    title: t('Application Optimization & Maintenance'),
    description: t('We keep your applications running at peak performance. Our team provides ongoing maintenance, performance tuning, security updates, and feature enhancements to ensure your software remains efficient and aligned with your evolving business needs.'),
    expanded: false,
    details: t('Our optimization process involves thorough code reviews, performance profiling, and systematic refactoring. We implement automated testing and monitoring to proactively identify and resolve issues, ensuring your applications remain robust and efficient.'),
    benefits: [
      {icon: 'pi pi-bolt', text: t('Improved application speed and responsiveness')},
      {icon: 'pi pi-clock', text: t('Reduced downtime and maintenance costs')},
      {icon: 'pi pi-star', text: t('Enhanced user satisfaction through continuous improvements')},
      {icon: 'pi pi-shield', text: t('Proactive issue resolution before they impact users')}
    ],
    suitableFor: t('Businesses with existing applications looking to improve performance, enhance security, or add new features.'),
    galleryImages: []
  },
  {
    icon: 'pi pi-refresh',
    title: t('Legacy System Modernization'),
    description: t('We breathe new life into outdated systems. Our team specializes in refactoring and modernizing legacy applications, making them more efficient, secure, and compatible with current technologies.'),
    expanded: false,
    details: t('Our modernization approach focuses on preserving critical business logic while improving overall system architecture. We employ modern design patterns, update technology stacks, and enhance user interfaces to extend the lifespan and value of your existing software investments.'),
    benefits: [
      {icon: 'pi pi-bolt', text: t('Improved system performance and reliability')},
      {icon: 'pi pi-link', text: t('Enhanced compatibility with modern technologies and third-party integrations')},
      {icon: 'pi pi-wallet', text: t('Reduced maintenance costs and technical debt')},
      {icon: 'pi pi-users', text: t('Improved user experience and productivity')}
    ],
    suitableFor: t('Organizations with aging software systems that are becoming difficult to maintain or are hindering business growth.'),
    galleryImages: []
  },
  {
    icon: 'pi pi-chart-line',
    title: t('SEO & Performance Optimization'),
    description: t('We boost your digital presence and application efficiency. Our team optimizes your web applications for search engines and performance, ensuring faster load times, better user experience, and improved search rankings.'),
    expanded: false,
    details: t('Our SEO and performance optimization process involves technical SEO audits, content optimization, site structure improvements, and performance tuning. We use advanced tools and techniques to identify and resolve issues that impact your search rankings and user experience.'),
    benefits: [
      {icon: 'pi pi-arrow-up', text: t('Higher search engine rankings and increased organic traffic')},
      {icon: 'pi pi-bolt', text: t('Faster page load times and improved Core Web Vitals scores')},
      {icon: 'pi pi-users', text: t('Enhanced user engagement and lower bounce rates')},
      {icon: 'pi pi-chart-bar', text: t('Increased conversions and ROI from your digital assets')}
    ],
    suitableFor: t('E-commerce businesses, content-driven websites, and any company looking to improve their online visibility and web application performance.'),
    galleryImages: []
  }
]);

const toggleExpand = (index: number) => {
  services.value[index].expanded = !services.value[index].expanded;
};

const navigateToContact = () => {
  router.push('/contact');
};
</script>

<template>
  <section
      id="services"
      class="full-width-section bg-gradient-to-b from-silver-50 to-silver-100 dark:from-midnight-green-800 dark:to-midnight-green-900 py-16">
    <div class="container">
      <h2 class="text-4xl md:text-5xl font-bold text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-8">
        Powerful <span class="text-honolulu-blue-500 dark:text-honolulu-blue-300">Solutions</span>
      </h2>
      <p class="text-xl md:text-2xl text-midnight-green-700 dark:text-silver-200 mb-4 text-center max-w-3xl mx-auto">
        {{ t('We deliver scalable, efficient solutions that solve real business challenges.') }}
      </p>
      <p class="text-xl md:text-2xl text-midnight-green-700 dark:text-silver-200 mb-16 text-center max-w-3xl mx-auto">
        {{ t('Our focus is on creating value through innovative technology and streamlined processes.') }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(service, index) in services" :key="service.title"
             class="bg-white dark:bg-midnight-green-700 rounded-lg shadow overflow-hidden transition-all duration-300 hover:shadow-md">
          <div class="p-6">
            <i :class="[service.icon, 'text-4xl text-honolulu-blue-500 dark:text-honolulu-blue-400 mb-4']"></i>
            <h3 class="text-2xl font-bold text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-4">{{
                service.title
              }}</h3>
            <p class="text-lg text-midnight-green-700 dark:text-silver-200 mb-4">{{ service.description }}</p>
            <p class="text-md text-midnight-green-600 dark:text-silver-300 mb-6">
              <strong class="text-honolulu-blue-500 dark:text-honolulu-blue-400">{{ t('Suitable for:') }}</strong>
              {{ service.suitableFor }}
            </p>
            <Button
                :label="service.expanded ? 'Show Less' : 'Discover More'"
                class="p-button-outlined text-sm p-button-rounded text-honolulu-blue-500 dark:text-honolulu-blue-400"
                @click="toggleExpand(index)"
            />
          </div>
          <div v-if="service.expanded" class="p-6 bg-silver-50 dark:bg-midnight-green-800">
            <p class="text-midnight-green-700 dark:text-silver-200 mb-4">{{ service.details }}</p>
            <h4 class="font-bold mb-4 text-lapis-lazuli-600 dark:text-lapis-lazuli-300">Key Benefits:</h4>
            <ul class="space-y-3">
              <li v-for="benefit in service.benefits" :key="benefit.text"
                  class="flex items-center text-midnight-green-600 dark:text-silver-300">
                <i :class="[benefit.icon, 'mr-3 text-honolulu-blue-500 dark:text-honolulu-blue-400']"></i>
                {{ benefit.text }}
              </li>
            </ul>
            <div v-if="service.galleryImages.length > 0" class="mt-6">
              <div class="flex flex-wrap gap-3">
                <Image v-for="(img, imgIndex) in service.galleryImages"
                       :key="imgIndex"
                       :src="img"
                       width="100"
                       preview
                       class="rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <Button
            label="Get in Touch"
            class="p-button-lg bg-honolulu-blue-500 text-white hover:bg-honolulu-blue-600 dark:bg-lapis-lazuli-600 dark:text-white dark:hover:bg-lapis-lazuli-500 shadow-lg hover:shadow-xl transition-all duration-300"
            @click="navigateToContact"
        />
      </div>
    </div>
  </section>

  <section class="full-width-section bg-white dark:bg-midnight-green-900 py-16">
    <div class="container mx-auto">
      <h3 class="text-3xl font-bold text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-8">
        Technologies We Work With
      </h3>
      <p class="text-xl text-midnight-green-700 dark:text-silver-200 mb-8 text-center max-w-3xl mx-auto">
        While these are our primary technologies, we're always open to exploring new tools that best fit your project
        needs.
      </p>
      <TechnologySlider/>
    </div>
  </section>

  <section class="full-width-section bg-cinereous-100 dark:bg-midnight-green-800 py-12 md:py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-8 text-center">
        Why Choose Our Services?
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
            class="bg-white dark:bg-midnight-green-700 rounded-lg shadow p-6 transition-transform duration-300 hover:shadow-md">
          <i class="pi pi-check-circle text-3xl text-honolulu-blue-500 dark:text-honolulu-blue-400 mb-4"></i>
          <h3 class="text-xl font-bold text-midnight-green-700 dark:text-silver-200 mb-2">Comprehensive Solutions</h3>
          <p class="text-midnight-green-600 dark:text-silver-300">We cover all aspects of your digital needs, from
            planning to maintenance</p>
        </div>
        <div
            class="bg-white dark:bg-midnight-green-700 rounded-lg shadow p-6 transition-transform duration-300 hover:shadow-md">
          <i class="pi pi-chart-line text-3xl text-honolulu-blue-500 dark:text-honolulu-blue-400 mb-4"></i>
          <h3 class="text-xl font-bold text-midnight-green-700 dark:text-silver-200 mb-2">Results-Driven Approach</h3>
          <p class="text-midnight-green-600 dark:text-silver-300">Our solutions directly address your business
            challenges and drive measurable outcomes</p>
        </div>
        <div
            class="bg-white dark:bg-midnight-green-700 rounded-lg shadow p-6 transition-transform duration-300 hover:shadow-md">
          <i class="pi pi-sitemap text-3xl text-honolulu-blue-500 dark:text-honolulu-blue-400 mb-4"></i>
          <h3 class="text-xl font-bold text-midnight-green-700 dark:text-silver-200 mb-2">Scalable Architecture</h3>
          <p class="text-midnight-green-600 dark:text-silver-300">We build solutions that grow with your business,
            preventing future bottlenecks</p>
        </div>
        <div
            class="bg-white dark:bg-midnight-green-700 rounded-lg shadow p-6 transition-transform duration-300 hover:shadow-md">
          <i class="pi pi-cog text-3xl text-honolulu-blue-500 dark:text-honolulu-blue-400 mb-4"></i>
          <h3 class="text-xl font-bold text-midnight-green-700 dark:text-silver-200 mb-2">Efficiency-Focused</h3>
          <p class="text-midnight-green-600 dark:text-silver-300">Our development process emphasizes simplicity and
            effectiveness, saving you time and resources</p>
        </div>
        <div
            class="bg-white dark:bg-midnight-green-700 rounded-lg shadow p-6 transition-transform duration-300 hover:shadow-md">
          <i class="pi pi-bolt text-3xl text-honolulu-blue-500 dark:text-honolulu-blue-400 mb-4"></i>
          <h3 class="text-xl font-bold text-midnight-green-700 dark:text-silver-200 mb-2">Innovation-Led</h3>
          <p class="text-midnight-green-600 dark:text-silver-300">We leverage cutting-edge technologies to give you a
            competitive edge in your market</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep(.p-button) {
  padding: 1rem 2rem;
  font-size: 1.25rem;
}

:deep(.p-panel-header) {
  @apply bg-honolulu-blue-50 dark:bg-honolulu-blue-900 border-b-2 border-honolulu-blue-200 dark:border-honolulu-blue-700;
}

:deep(.p-panel-content) {
  @apply bg-white dark:bg-midnight-green-700;
}
</style>