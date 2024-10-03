<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import Avatar from 'primevue/avatar';

const { t } = useI18n();

const teamMembers = ref([
  {
    name: t('The Architect'),
    role: t('Full-stack Mastermind'),
    avatar: '🧙‍♂️',
    color: 'bg-gradient-to-br from-lapis-lazuli-300 to-lapis-lazuli-500',
    description: t('Designs and implements robust, scalable solutions across the entire technology stack.'),
    skills: [t('System Design'), t('Cloud Architecture'), t('DevOps')]
  },
  {
    name: t('The Visionary'),
    role: t('UX/UI Wizard'),
    avatar: '🎨',
    color: 'bg-gradient-to-br from-honolulu-blue-300 to-honolulu-blue-500',
    description: t('Crafts intuitive and visually stunning user interfaces that captivate and engage.'),
    skills: [t('User-Centered Design'), t('Interaction Design'), t('Prototyping')]
  },
  {
    name: t('The Guardian'),
    role: t('Security Specialist'),
    avatar: '🛡️',
    color: 'bg-gradient-to-br from-midnight-green-300 to-midnight-green-500',
    description: t('Ensures the highest level of security and data protection in all our applications.'),
    skills: [t('Threat Modeling'), t('Security Audits'), t('Encryption Strategies')]
  },
  {
    name: t('The Accelerator'),
    role: t('Performance Guru'),
    avatar: '🚀',
    color: 'bg-gradient-to-br from-cinereous-300 to-cinereous-500',
    description: t('Optimizes applications for lightning-fast performance and seamless user experiences.'),
    skills: [t('Performance Profiling'), t('Load Testing'), t('Caching Strategies')]
  },
  {
    name: t('The Connector'),
    role: t('API Virtuoso'),
    avatar: '🔗',
    color: 'bg-gradient-to-br from-silver-300 to-silver-500',
    description: t('Creates powerful, efficient APIs that connect systems and unlock new possibilities.'),
    skills: [t('API Design'), t('Microservices Architecture'), t('Data Modeling')]
  }
]);
</script>

<template>
  <section id="team" class="py-20 mt-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-6 transition-all duration-300 transform hover:scale-105">
        {{ t('Our Team') }}
      </h2>
      <p class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-200 mb-4 text-center max-w-3xl mx-auto">
        {{ t('At Make IT Logical, we\'re more than just developers – we\'re innovators, problem-solvers, and digital architects.') }}
      </p>
      <p class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-200 mb-12 text-center max-w-3xl mx-auto">
        {{ t('Our passion for technology and commitment to excellence drive us to tackle the most complex challenges head-on.') }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="member in teamMembers" :key="member.name" class="bg-white dark:bg-midnight-green-700 rounded-lg shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
          <div :class="[member.color, 'p-6 flex items-center justify-center']">
            <Avatar :label="member.avatar" size="xlarge" shape="circle" class="text-4xl" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-2">{{ member.name }}</h3>
            <p class="text-honolulu-blue-600 dark:text-honolulu-blue-300 mb-4">{{ member.role }}</p>
            <p class="mb-4 text-midnight-green-600 dark:text-silver-300">{{ member.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in member.skills" :key="skill" class="px-2 py-1 bg-lapis-lazuli-100 dark:bg-lapis-lazuli-700 text-lapis-lazuli-800 dark:text-lapis-lazuli-200 rounded-full text-sm">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <p class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-200 mb-4 max-w-3xl mx-auto">
          {{ t('Our team combines diverse skills to deliver exceptional results. Each role is crucial in bringing your vision to life.') }}
        </p>
        <p class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-200 max-w-3xl mx-auto">
          {{ t('Ready to work with our dream team? Let\'s turn your ideas into reality!') }}
        </p>
      </div>
    </div>
  </section>
</template>