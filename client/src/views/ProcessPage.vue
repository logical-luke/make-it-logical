<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import { useRouter } from 'vue-router';

const router = useRouter();

const { t } = useI18n();

const processSteps = ref([
  {
    label: t('Listen'),
    icon: 'pi pi-comments',
    description: t('We decode your vision into actionable tech plans.'),
    details: t('Our experts dive deep into your business goals, target audience, and pain points. We ask the right questions to uncover the core of your digital needs.')
  },
  {
    label: t('Design'),
    icon: 'pi pi-pencil',
    description: t('We craft intuitive solutions that users love.'),
    details: t('Our UX wizards create interfaces that captivate and convert. We blend aesthetics with functionality to deliver experiences that keep users coming back.')
  },
  {
    label: t('Build'),
    icon: 'pi pi-cog',
    description: t('We transform concepts into powerful digital realities.'),
    details: t('Our developers breathe life into designs, using cutting-edge tech to build robust, scalable solutions that grow with your business.')
  },
  {
    label: t('Deliver'),
    icon: 'pi pi-check-circle',
    description: t('We launch solutions that drive tangible results.'),
    details: t('We don\'t just deliver code; we deliver impact. Our launch process ensures your solution hits the ground running, driving immediate value for your business.')
  }
]);

const navigateToServices = () => {
  router.push('/services');
};
</script>

<template>
  <section id="process">
    <div class="container mx-auto py-16">
      <h2 class="text-4xl md:text-5xl font-bold text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-8">
        Transforming Vision into <span class="text-honolulu-blue-500 dark:text-honolulu-blue-300 font-bold">Digital Reality</span>
      </h2>
      <p class="text-xl md:text-2xl text-midnight-green-700 dark:text-silver-200 mb-12 text-center max-w-3xl mx-auto">
        {{ t('Our razor-sharp process cuts through complexity, delivering solutions that ignite growth and user engagement.') }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card v-for="(step, index) in processSteps" :key="step.label" class="shadow-lg">
          <template #header>
            <div class="flex items-center p-4 bg-honolulu-blue-50 dark:bg-honolulu-blue-900">
              <div class="w-12 h-12 bg-honolulu-blue-500 dark:bg-honolulu-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                {{ index + 1 }}
              </div>
              <h3 class="text-2xl font-bold text-lapis-lazuli-600 dark:text-lapis-lazuli-300">
                {{ t(step.label) }}
              </h3>
            </div>
          </template>
          <template #content>
            <p class="text-lg text-midnight-green-700 dark:text-silver-200 mb-4">{{ t(step.description) }}</p>
            <p class="text-midnight-green-600 dark:text-silver-300">{{ t(step.details) }}</p>
          </template>
          <template #footer>
            <div class="flex justify-center">
              <i :class="[step.icon, 'text-4xl text-honolulu-blue-500 dark:text-honolulu-blue-400']"></i>
            </div>
          </template>
        </Card>
      </div>
      <div class="mt-12 text-center">
        <Button
          label="Explore Our Services"
          icon="pi pi-arrow-right"
          class="p-button-lg bg-midnight-green-700 text-white hover:bg-midnight-green-600 dark:bg-lapis-lazuli-600 dark:text-white dark:hover:bg-lapis-lazuli-500"
          @click="navigateToServices"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep(.p-button) {
  padding: 1rem 2rem;
  font-size: 1.25rem;
}
</style>