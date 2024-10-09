<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import {ref} from 'vue';
import Avatar from 'primevue/avatar';
import Card from 'primevue/card';
import Chip from 'primevue/chip';
import Button from 'primevue/button';

const {t} = useI18n();

import {useRouter} from 'vue-router';

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
  <section
      id="team"
      class="full-width-section bg-gradient-to-b from-silver-50 to-silver-100 dark:from-midnight-green-800 dark:to-midnight-green-900 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-bold text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-8">
        Meet <span class="text-honolulu-blue-500 dark:text-honolulu-blue-300">The Team</span>
      </h2>
      <p class="text-xl md:text-2xl text-midnight-green-700 dark:text-silver-200 mb-16 text-center max-w-3xl mx-auto">
        {{
          t('Our experts combine diverse skills and relentless passion to deliver solutions that don\'t just meet expectations – they shatter them.')
        }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="member in teamMembers" :key="member.name"
             class="bg-white dark:bg-midnight-green-700 rounded-lg shadow overflow-hidden transition-all duration-300 hover:shadow-md">
          <div :class="[member.color, 'p-6 flex items-center justify-center']">
            <Avatar :label="member.avatar" size="xlarge" shape="circle" class="text-4xl"/>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-2">{{ member.name }}</h3>
            <p class="text-honolulu-blue-600 dark:text-honolulu-blue-300 mb-4">{{ member.role }}</p>
            <p class="text-midnight-green-600 dark:text-silver-300 mb-4">{{ member.description }}</p>
            <div class="flex flex-wrap gap-2">
              <Chip
                  v-for="skill in member.skills" :key="skill" :label="skill"
                  class="bg-honolulu-blue-50 text-honolulu-blue-600 dark:bg-honolulu-blue-900 dark:text-honolulu-blue-200"/>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <p class="text-xl md:text-2xl text-midnight-green-700 dark:text-silver-200 mb-8 max-w-3xl mx-auto">
          Our team doesn't just build apps – we craft <span
            class="text-honolulu-blue-500 dark:text-honolulu-blue-300 font-bold">experiences</span> that transform
          businesses and delight users.
        </p>
        <Button
            label="Work With Us"
            class="p-button-lg bg-honolulu-blue-500 text-white hover:bg-honolulu-blue-600 dark:bg-lapis-lazuli-600 dark:text-white dark:hover:bg-lapis-lazuli-500 shadow hover:shadow-md transition-all duration-300"
            @click="navigateToContact"
        />
      </div>
    </div>
  </section>

  <section class="full-width-section bg-cinereous-100 dark:bg-midnight-green-800 py-16">
    <div class="container mx-auto px-4">
      <h3 class="text-3xl font-bold text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-12">Why Our Team
        Stands Out</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
            class="bg-white dark:bg-midnight-green-700 rounded-lg shadow p-6 text-center transition-all duration-300 hover:shadow-md">
          <i class="pi pi-users text-4xl text-honolulu-blue-500 dark:text-honolulu-blue-400 mb-4"></i>
          <h4 class="text-xl font-bold text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-2">Diverse</h4>
          <p class="text-midnight-green-600 dark:text-silver-300">Skillsets for comprehensive solutions</p>
        </div>
        <div
            class="bg-white dark:bg-midnight-green-700 rounded-lg shadow p-6 text-center transition-all duration-300 hover:shadow-md">
          <i class="pi pi-bolt text-4xl text-honolulu-blue-500 dark:text-honolulu-blue-400 mb-4"></i>
          <h4 class="text-xl font-bold text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-2">Innovative</h4>
          <p class="text-midnight-green-600 dark:text-silver-300">Approach to problem-solving</p>
        </div>
        <div
            class="bg-white dark:bg-midnight-green-700 rounded-lg shadow p-6 text-center transition-all duration-300 hover:shadow-md">
          <i class="pi pi-heart text-4xl text-honolulu-blue-500 dark:text-honolulu-blue-400 mb-4"></i>
          <h4 class="text-xl font-bold text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-2">Passionate</h4>
          <p class="text-midnight-green-600 dark:text-silver-300">About delivering excellence</p>
        </div>
        <div
            class="bg-white dark:bg-midnight-green-700 rounded-lg shadow p-6 text-center transition-all duration-300 hover:shadow-md">
          <i class="pi pi-check-circle text-4xl text-honolulu-blue-500 dark:text-honolulu-blue-400 mb-4"></i>
          <h4 class="text-xl font-bold text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-2">Committed</h4>
          <p class="text-midnight-green-600 dark:text-silver-300">To your long-term success</p>
        </div>
      </div>
    </div>
  </section>
</template>
