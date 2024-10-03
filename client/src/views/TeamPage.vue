<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Card from 'primevue/card';
import Chip from 'primevue/chip';
import Button from 'primevue/button';

const { t } = useI18n();

import { useRouter } from 'vue-router';

const router = useRouter();

const teamMembers = ref([
  {
    name: t('The Architect'),
    role: t('Full-stack Mastermind'),
    avatar: '🧙‍♂️',
    color: 'bg-gradient-to-br from-lapis-lazuli-300 to-lapis-lazuli-500',
    description: t('Designs robust, scalable solutions that stand the test of time and growth.'),
    skills: [t('System Design'), t('Cloud Architecture'), t('Performance Optimization')]
  },
  {
    name: t('The Visionary'),
    role: t('UX/UI Wizard'),
    avatar: '🎨',
    color: 'bg-gradient-to-br from-honolulu-blue-300 to-honolulu-blue-500',
    description: t('Crafts intuitive, engaging interfaces that captivate users and drive conversions.'),
    skills: [t('User-Centered Design'), t('Interaction Design'), t('Visual Storytelling')]
  },
  {
    name: t('The Guardian'),
    role: t('Security Specialist'),
    avatar: '🛡️',
    color: 'bg-gradient-to-br from-midnight-green-300 to-midnight-green-500',
    description: t('Ensures top-tier application security, protecting your data and user trust.'),
    skills: [t('Threat Modeling'), t('Encryption'), t('Security Audits')]
  },
  {
    name: t('The Accelerator'),
    role: t('Performance Guru'),
    avatar: '🚀',
    color: 'bg-gradient-to-br from-cinereous-300 to-cinereous-500',
    description: t('Optimizes for lightning-fast performance, ensuring smooth user experiences.'),
    skills: [t('Load Balancing'), t('Caching Strategies'), t('Database Optimization')]
  }
]);
const navigateToContact = () => {
  router.push('/contact');
};
</script>

<template>
  <section id="team">
    <div class="container mx-auto py-16">
      <h2 class="text-4xl md:text-5xl font-bold text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-8">
        Meet Your <span class="highlight">Digital Dream Team</span>
      </h2>
      <p class="text-xl md:text-2xl text-midnight-green-700 dark:text-silver-200 mb-12 text-center max-w-3xl mx-auto">
        {{ t('Our experts combine diverse skills and relentless passion to deliver solutions that don\'t just meet expectations – they shatter them.') }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card v-for="member in teamMembers" :key="member.name" class="shadow-md hover:shadow-lg transition-shadow duration-300">
          <template #header>
            <div :class="[member.color, 'p-6 flex items-center justify-center']">
              <Avatar :label="member.avatar" size="xlarge" shape="circle" class="text-4xl" />
            </div>
          </template>
          <template #title>
            <h3 class="text-2xl font-bold text-lapis-lazuli-600 dark:text-lapis-lazuli-300">{{ member.name }}</h3>
          </template>
          <template #subtitle>
            <p class="text-honolulu-blue-600 dark:text-honolulu-blue-300">{{ member.role }}</p>
          </template>
          <template #content>
            <p class="text-midnight-green-600 dark:text-silver-300 mb-4">{{ member.description }}</p>
            <div class="flex flex-wrap gap-2">
              <Chip v-for="skill in member.skills" :key="skill" :label="skill" />
            </div>
          </template>
        </Card>
      </div>

      <div class="mt-12 text-center">
        <p class="text-xl md:text-2xl text-midnight-green-700 dark:text-silver-200 mb-6 max-w-3xl mx-auto">
          Our team doesn't just build apps – we craft <span class="highlight">digital experiences</span> that transform businesses and delight users.
        </p>
        <Button label="Work With Us" icon="pi pi-users" class="p-button-lg" @click="navigateToContact" />
      </div>

      <Card class="mt-16 shadow-md">
        <template #title>
          <div class="flex items-center">
            <i class="pi pi-bolt mr-2 text-honolulu-blue-500"></i>
            <h3 class="text-2xl font-bold text-lapis-lazuli-600 dark:text-lapis-lazuli-300">Why Our Team Stands Out</h3>
          </div>
        </template>
        <template #content>
          <ul class="list-disc pl-5">
            <li class="mb-2"><span class="highlight">Diverse</span> skillsets for comprehensive solutions</li>
            <li class="mb-2"><span class="highlight">Innovative</span> approach to problem-solving</li>
            <li class="mb-2"><span class="highlight">Passionate</span> about delivering excellence</li>
            <li><span class="highlight">Committed</span> to your long-term success</li>
          </ul>
        </template>
      </Card>
    </div>
  </section>
</template>