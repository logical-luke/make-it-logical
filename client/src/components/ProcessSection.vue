<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import {ref} from 'vue';

const {t} = useI18n();

const processSteps = ref([
  {
    label: t('Discovery'),
    icon: 'pi pi-search',
    description: t('We dive deep into your business goals and requirements.'),
    fullDescription: t('In the Discovery phase, we conduct thorough research to understand your business, target audience, and project objectives. We analyze your competitors and identify opportunities for innovation.')
  },
  {
    label: t('Planning'),
    icon: 'pi pi-file',
    description: t('We create a detailed roadmap for your project.'),
    fullDescription: t('During Planning, we outline the project scope, create timelines, and allocate resources. We define key milestones and deliverables to ensure a smooth development process.')
  },
  {
    label: t('Design'),
    icon: 'pi pi-palette',
    description: t('We craft intuitive and visually appealing interfaces.'),
    fullDescription: t('In the Design phase, we create wireframes and prototypes to visualize the user interface. We focus on user experience (UX) principles to ensure your application is both beautiful and functional.')
  },
  {
    label: t('Development'),
    icon: 'pi pi-cog',
    description: t('We bring your vision to life with clean, efficient code.'),
    fullDescription: t('During Development, our expert programmers write high-quality, scalable code. We follow best practices and use cutting-edge technologies to build robust and performant applications.')
  },
  {
    label: t('Testing'),
    icon: 'pi pi-check-square',
    description: t('We rigorously test to ensure quality and reliability.'),
    fullDescription: t('In the Testing phase, we conduct thorough quality assurance checks. This includes functional testing, performance testing, and security audits to ensure your application is bug-free and secure.')
  },
  {
    label: t('Deployment'),
    icon: 'pi pi-upload',
    description: t('We launch your application and ensure smooth operation.'),
    fullDescription: t('During Deployment, we carefully launch your application to production servers. We monitor the process closely to ensure a seamless transition and minimal downtime.')
  },
  {
    label: t('Maintenance'),
    icon: 'pi pi-refresh',
    description: t('We provide ongoing support and updates.'),
    fullDescription: t('In the Maintenance phase, we offer continuous support and regular updates. We monitor performance, implement new features, and ensure your application stays up-to-date with the latest technologies and security standards.')
  },
  {
    label: t('Scaling'),
    icon: 'pi pi-arrow-up',
    description: t('We ensure your solution can grow with your business.'),
    fullDescription: t('In the Scaling phase, we optimize your application to handle increased load and user base. We implement strategies for horizontal and vertical scaling, ensuring your solution remains performant as your business grows.')
  },
  {
    label: t('Continuous Improvement'),
    icon: 'pi pi-chart-line',
    description: t('We constantly refine and enhance your digital solution.'),
    fullDescription: t('The Continuous Improvement phase involves ongoing analysis, feedback collection, and iterative enhancements. We stay proactive in implementing new features, optimizing performance, and adapting to changing market needs.')
  }
]);

</script>

<template>
  <section id="process" class="py-20 mt-8 relative">
    <div class="absolute inset-0 bg-lapis-lazuli-50 dark:bg-lapis-lazuli-900 opacity-70"></div>
    <div class="absolute inset-0 overflow-hidden">
      <picture>
        <source
            type="image/avif" srcset="
          ../assets/process-640x960.avif 640w,
          ../assets/process-1024x768.avif 1024w,
          ../assets/process-1920x1080.avif 1920w,
          ../assets/process-2560x1440.avif 2560w,
          ../assets/process-3840x2160.avif 3840w
        ">
        <source
            type="image/webp" srcset="
          ../assets/process-640x960.webp 640w,
          ../assets/process-1024x768.webp 1024w,
          ../assets/process-1920x1080.webp 1920w,
          ../assets/process-2560x1440.webp 2560w,
          ../assets/process-3840x2160.webp 3840w
        ">
        <img
            src="../assets/process-1920x1080.png"
            srcset="
            ../assets/process-640x960.png 640w,
            ../assets/process-1024x768.png 1024w,
            ../assets/process-1920x1080.png 1920w,
            ../assets/process-2560x1440.png 2560w,
            ../assets/process-3840x2160.png 3840w
          "
            sizes="100vw"
            alt="Our Process"
            class="w-full h-full object-cover opacity-30 dark:opacity-20"
            loading="lazy"
        >
      </picture>
    </div>
    <div class="relative z-10 max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-6 transition-all duration-300 transform hover:scale-105">
        {{ t('Our Proven Process') }}
      </h2>
      <p class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-200 mb-2 transition-opacity duration-300 ease-in-out">
        {{ t('We\'ve refined our approach to ensure every project is a success.') }}
      </p>
      <p class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-200 mb-8 transition-opacity duration-300 ease-in-out">
        {{ t('Our process is designed to maximize efficiency, creativity, and results.') }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
            v-for="(step) in processSteps" :key="step.label"
            class="bg-white dark:bg-midnight-green-800 rounded-lg p-4 shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-silver-200 dark:border-midnight-green-700">
          <div class="flex items-center mb-3">
            <div
                class="w-10 h-10 bg-honolulu-blue-50 dark:bg-honolulu-blue-900 rounded-full flex items-center justify-center text-honolulu-blue-600 dark:text-honolulu-blue-400 text-xl font-bold mr-4">
              <i :class="step.icon"></i>
            </div>
            <h3 class="text-lg font-bold text-lapis-lazuli-600 dark:text-lapis-lazuli-300">
              {{ t(step.label) }}
            </h3>
          </div>
          <p class="text-midnight-green-700 dark:text-silver-200 mb-2">{{ t(step.description) }}</p>
          <p class="text-midnight-green-600 dark:text-silver-400 text-sm">
            {{ t(step.fullDescription) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>