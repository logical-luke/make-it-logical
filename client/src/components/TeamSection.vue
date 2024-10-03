<script setup lang="ts">
import {useI18n} from 'vue-i18n';

const {t} = useI18n();
import {ref} from 'vue';

const teamMembers = ref([
      {
        name: t('The Architect'),
        role: t('Full-stack Mastermind'),
        avatar: '🧙‍♂️',
        description: t('Designs and implements robust, scalable solutions across the entire technology stack.')
      },
      {
        name: t('The Visionary'),
        role: t('UX/UI Wizard'),
        avatar: '🎨',
        description: t('Crafts intuitive and visually stunning user interfaces that captivate and engage.')
      },
      {
        name: t('The Guardian'),
        role: t('Security Specialist'),
        avatar: '🛡️',
        description: t('Ensures the highest level of security and data protection in all our applications.')
      },
      {
        name: t('The Accelerator'),
        role: t('Performance Guru'),
        avatar: '🚀',
        description: t('Optimizes applications for lightning-fast performance and seamless user experiences.')
      },
      {
        name: t('The Connector'),
        role: t('API Virtuoso'),
        avatar: '🔗',
        description: t('Creates powerful, efficient APIs that connect systems and unlock new possibilities.')
      }
    ]
);
</script>

<template>
  <section id="team" class="py-20 mt-8">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-6 transition-all duration-300 transform hover:scale-105">
      {{ t('Our Team') }}
    </h2>
    <p class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-200 mb-4 transition-opacity duration-300 ease-in-out">
      {{
        t('At Make IT Logical, we\'re more than just developers – we\'re innovators, problem-solvers, and digital architects.')
      }}
    </p>
    <p class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-200 mb-4 transition-opacity duration-300 ease-in-out">
      {{
        t('Our passion for technology and commitment to excellence drive us to tackle the most complex challenges head-on.')
      }}
    </p>
    <p class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-200 mb-12 transition-opacity duration-300 ease-in-out">
      {{
        t('Our team combines diverse skills to deliver exceptional results. Each role is crucial in bringing your vision to life:')
      }}
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
      <div
          v-for="member in teamMembers" :key="member.name"
          class="bg-white dark:bg-midnight-green-800 rounded-lg shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-silver-200 dark:border-midnight-green-700"
      >
        <div class="text-5xl mb-4">{{ member.avatar }}</div>
        <h3 class="text-xl font-bold text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-2">
          {{ t(member.name) }}
        </h3>
        <p class="text-midnight-green-700 dark:text-silver-200">{{ t(member.role) }}</p>
        <Button v-tooltip.top="t(member.description)" icon="pi pi-info-circle" class="mt-4"/>
      </div>
    </div>
  </section>
</template>