<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import {ref} from 'vue';
import Panel from 'primevue/panel';
import Button from 'primevue/button';
import router from "@/router";
import Card from 'primevue/card';

const {t} = useI18n();

const services = ref([
  {
    icon: 'pi pi-desktop',
    title: t('Web Development'),
    description: t('High-performance web apps that drive results.'),
    benefits: [
      t('Lightning-fast load times for higher conversions'),
      t('Responsive designs that work flawlessly on all devices'),
      t('Scalable architecture that grows with your business')
    ]
  },
  {
    icon: 'pi pi-mobile',
    title: t('Mobile Apps'),
    description: t('User-centric mobile experiences across platforms.'),
    benefits: [
      t('Intuitive interfaces that users love to engage with'),
      t('Cross-platform compatibility for wider reach'),
      t('Offline capabilities for uninterrupted user experience')
    ]
  },
  {
    icon: 'pi pi-cog',
    title: t('API Development'),
    description: t('Robust APIs that unlock business potential.'),
    benefits: [
      t('Seamless integration with existing systems'),
      t('Enhanced data flow for better decision making'),
      t('Secure endpoints that protect your valuable data')
    ]
  },
  {
    icon: 'pi pi-server',
    title: t('DevOps Solutions'),
    description: t('Streamlined development for faster delivery.'),
    benefits: [
      t('Automated workflows that reduce time-to-market'),
      t('Continuous integration for better code quality'),
      t('Scalable infrastructure that adapts to demand')
    ]
  }
]);

const navigateToContact = () => {
  router.push('/contact');
};
</script>

<template>
  <section id="services">
    <div class="container mx-auto py-16">
      <h2 class="text-4xl md:text-5xl font-bold text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-8">
        Ignite Your <span class="highlight">Digital Potential</span>
      </h2>
      <p class="text-xl md:text-2xl text-midnight-green-700 dark:text-silver-200 mb-12 text-center max-w-3xl mx-auto">
        {{
          t('Our cutting-edge services are designed to solve your toughest challenges and unlock new opportunities.')
        }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Panel
v-for="service in services" :key="service.title" :header="service.title"
               class="shadow-md hover:shadow-lg transition-shadow duration-300">
          <template #icons>
            <i :class="[service.icon, 'text-2xl text-honolulu-blue-500 dark:text-honolulu-blue-400']"></i>
          </template>
          <p class="text-lg text-midnight-green-700 dark:text-silver-200 mb-4">{{ service.description }}</p>
          <ul class="list-disc pl-5 text-midnight-green-600 dark:text-silver-300">
            <li v-for="benefit in service.benefits" :key="benefit" class="mb-2">{{ benefit }}</li>
          </ul>
        </Panel>
      </div>
      <div class="mt-12 text-center">
        <Button label="Get in Touch" icon="pi pi-send" class="p-button-lg" @click="navigateToContact"/>
      </div>

      <Card class="mt-16 shadow-md">
        <template #title>
          <div class="flex items-center">
            <i class="pi pi-star mr-2 text-honolulu-blue-500"></i>
            <h3 class="text-2xl font-bold text-lapis-lazuli-600 dark:text-lapis-lazuli-300">Why Choose Our
              Services?</h3>
          </div>
        </template>
        <template #content>
          <ul class="list-disc pl-5">
            <li class="mb-2"><span class="highlight">Tailored</span> solutions for your unique challenges</li>
            <li class="mb-2"><span class="highlight">Cutting-edge</span> technology to keep you ahead</li>
            <li class="mb-2"><span class="highlight">Scalable</span> architecture for future growth</li>
            <li><span class="highlight">User-centric</span> design for maximum engagement</li>
          </ul>
        </template>
      </Card>
    </div>
  </section>
</template>