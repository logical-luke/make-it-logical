<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import {ref} from 'vue';
import Panel from 'primevue/panel';
import Button from 'primevue/button';
import Card from 'primevue/card';
import {useRouter} from 'vue-router';
import TestingImage from "@/components/TestingImage.vue";

const {t} = useI18n();
const router = useRouter();

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
    icon: 'pi pi-link',
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
  <section id="services" class="relative overflow-clip-y">
    <div class="absolute inset-0 overflow-visible">
      <div class="absolute inset-0 opacity-20 -top-[140vh] md:-top-[90vh] lg:-top-[70vh]">
        <TestingImage class="w-full h-full object-cover object-left scale-[2] md:scale-[1.75] lg:scale-150"/>
      </div>
    </div>
    <div class="container mx-auto py-16 relative z-10">
      <h2 class="text-4xl md:text-5xl font-bold text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-8">
        Ignite Your <span class="text-honolulu-blue-500 dark:text-honolulu-blue-300 font-bold">Digital Potential</span>
      </h2>
      <p class="text-xl md:text-2xl text-midnight-green-700 dark:text-silver-200 mb-12 text-center max-w-3xl mx-auto">
        {{
          t('Our cutting-edge services are designed to solve your toughest challenges and unlock new opportunities.')
        }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Panel
            v-for="service in services" :key="service.title" :header="service.title"
            class="shadow bg-white dark:bg-midnight-green-700 outline outline-2 dark:outline-silver-200 outline-honolulu-blue-500">
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
        <Button
            label="Get in Touch"
            icon="pi pi-send"
            class="p-button-lg bg-midnight-green-700 text-white hover:bg-midnight-green-600 dark:bg-lapis-lazuli-600 dark:text-white dark:hover:bg-lapis-lazuli-500"
            @click="navigateToContact"
        />
      </div>
    </div>
  </section>

  <section
      class="full-width-section bg-cinereous-100 dark:bg-midnight-green-600 py-16">
    <div class="container mx-auto">
      <Card class="shadow">
        <template #title>
          <div class="flex items-center">
            <i class="pi pi-star mr-2"></i>
            <h3 class="text-2xl font-bold">Why Choose Our
              Services?</h3>
          </div>
        </template>
        <template #content>
          <ul class="list-disc pl-5">
            <li class="mb-2"><span class="text-honolulu-blue-500 dark:text-honolulu-blue-300 font-bold">Tailored</span>
              solutions for your unique challenges
            </li>
            <li class="mb-2"><span
                class="text-honolulu-blue-500 dark:text-honolulu-blue-300 font-bold">Cutting-edge</span> technology to
              keep you ahead
            </li>
            <li class="mb-2"><span class="text-honolulu-blue-500 dark:text-honolulu-blue-300 font-bold">Scalable</span>
              architecture for future growth
            </li>
            <li><span class="text-honolulu-blue-500 dark:text-honolulu-blue-300 font-bold">User-centric</span> design
              for maximum engagement
            </li>
          </ul>
        </template>
      </Card>
    </div>
  </section>
</template>

<style scoped>
:deep(.p-button) {
  padding: 1rem 2rem;
  font-size: 1.25rem;
}

:deep(.p-panel-header) {
  @apply bg-honolulu-blue-50 dark:bg-honolulu-blue-900;
}
</style>