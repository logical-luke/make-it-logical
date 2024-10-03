<script setup lang="ts">
import {useI18n} from 'vue-i18n';

const {t} = useI18n();
import {ref} from 'vue';

const services = ref([
  {
    id: 1,
    icon: 'pi pi-desktop',
    title: t('Web Development'),
    description: t('Craft stunning, high-performance web applications that leave a lasting impression and drive conversions.'),
    features: [
      t('Responsive Design'),
      t('SEO Optimization'),
      t('Lightning Fast Load Times'),
      t('Intuitive User Experience')
    ]
  },
  {
    id: 2,
    icon: 'pi pi-mobile',
    title: t('Mobile Apps'),
    description: t('Create seamless, cross-platform mobile experiences that users love and keep coming back to.'),
    features: [
      t('Native Performance'),
      t('Offline Functionality'),
      t('Push Notifications'),
      t('Seamless Updates')
    ]
  },
  {
    id: 3,
    icon: 'pi pi-cog',
    title: t('API Development'),
    description: t('Build robust, scalable APIs that connect systems and unlock new possibilities for your business.'),
    features: [
      t('RESTful Design'),
      t('GraphQL Support'),
      t('Authentication & Security'),
      t('Comprehensive Documentation')
    ]
  },
  {
    id: 4,
    icon: 'pi pi-server',
    title: t('DevOps Solutions'),
    description: t('Streamline your development process with cutting-edge DevOps practices and tools.'),
    features: [
      t('CI/CD Pipelines'),
      t('Infrastructure as Code'),
      t('Monitoring & Logging'),
      t('Scalable Cloud Architectures')
    ]
  },
  {
    id: 5,
    icon: 'pi pi-chart-line',
    title: t('Data Analytics'),
    description: t('Harness the power of your data with advanced analytics and visualization solutions.'),
    features: [
      t('Real-time Dashboards'),
      t('Predictive Analytics'),
      t('Big Data Processing'),
      t('Machine Learning Integration')
    ]
  },
  {
    id: 6,
    icon: 'pi pi-bolt',
    title: t('Performance Optimization'),
    description: t('Enhance the speed, responsiveness, and efficiency of your web applications for an optimal user experience.'),
    features: [
      t('Load Time Reduction'),
      t('Resource Optimization'),
      t('Caching Strategies'),
      t('Code Splitting and Lazy Loading')
    ]
  }
]);
</script>

<template>
  <section id="services" class="py-20 mt-8">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-6 transition-all duration-300 transform hover:scale-105">
      {{ t('Our Services') }}
    </h2>
    <p class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-200 mb-4 transition-opacity duration-300 ease-in-out">
      {{ t('From concept to execution, we deliver cutting-edge solutions that drive your business forward.') }}
    </p>
    <p class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-200 mb-12 transition-opacity duration-300 ease-in-out">
      {{ t('Our services are tailored to meet the unique challenges of the digital age.') }}
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
v-for="service in services" :key="service.id"
           class="bg-white dark:bg-midnight-green-800 rounded-lg shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-silver-200 dark:border-midnight-green-700">
        <div class="p-6 flex justify-center items-center bg-honolulu-blue-50 dark:bg-honolulu-blue-900">
          <i :class="[service.icon, 'text-6xl text-honolulu-blue-600 dark:text-honolulu-blue-400']"></i>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-4">
            {{ t(service.title) }}
          </h3>
          <p class="text-midnight-green-700 dark:text-silver-200 mb-4">
            {{ t(service.description) }}
          </p>
          <ul class="space-y-2">
            <li v-for="feature in service.features" :key="feature" class="flex items-center">
              <i class="pi pi-check-circle text-honolulu-blue-500 dark:text-honolulu-blue-400 mr-2"></i>
              <span class="text-midnight-green-700 dark:text-silver-200">{{ t(feature) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>