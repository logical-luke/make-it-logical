<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import {useRouter} from 'vue-router';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Panel from 'primevue/panel';
import StartupImage from "@/components/StartupImage.vue";

const {t} = useI18n();
const router = useRouter();

const features = [
  {icon: 'pi pi-comments', title: t('Listen'), description: t('We decode your vision into actionable tech plans.')},
  {icon: 'pi pi-pencil', title: t('Design'), description: t('We craft intuitive solutions that users love.')},
  {icon: 'pi pi-cog', title: t('Build'), description: t('We transform concepts into powerful digital realities.')},
  {icon: 'pi pi-check-circle', title: t('Deliver'), description: t('We launch solutions that drive tangible results.')},
];

const navigateTo = (path: string) => {
  router.push(path);
};
</script>

<template>
  <section
      class="relative px-4 full-width-section bg-gradient-to-r from-silver-100 to-silver-300 dark:from-honolulu-blue-800 dark:to-lapis-lazuli-800 overflow-hidden">
    <div class="container mx-auto py-12 md:py-20 relative z-10">
      <div class="flex flex-col md:flex-row items-center">
        <div class="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <div class="aspect-w-16 aspect-h-9 md:aspect-w-1 md:aspect-h-1 overflow-hidden">
            <StartupImage class="w-full h-full object-cover"/>
          </div>
        </div>
        <div class="w-full md:w-1/2 text-center md:text-left">
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-midnight-green-800 dark:text-silver-100 mb-8">
            <span class="block">{{ t('Web') }}</span>
            <span class="block highlight">{{ t('Simplified') }}</span>
            <span class="block">{{ t('Humanity') }}</span>
            <span class="block highlight">{{ t('Amplified') }}</span>
          </h1>
          <p class="text-xl sm:text-2xl md:text-3xl mb-6 text-midnight-green-700 dark:text-silver-200">
            {{ t('Bridging technology and human understanding.') }}
          </p>
          <p class="text-xl sm:text-2xl md:text-3xl mb-8 text-midnight-green-700 dark:text-silver-200">
            {{ t('Simplifying the web, for the people.') }}
          </p>
          <Button
              :label="t('Embark on Evolution')"
              class="p-button-lg p-button-primary"
              @click="navigateTo('/contact')"
          />
        </div>
      </div>
    </div>
  </section>

  <section class="full-width-section py-16 bg-silver-50 dark:bg-midnight-green-900">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-bold mb-12 text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-300">
        {{ t('Our Digital Alchemy') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div
            v-for="feature in features" :key="feature.title"
            class="bg-white dark:bg-midnight-green-800 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
        >
          <div
              class="bg-gradient-to-r from-honolulu-blue-100 to-honolulu-blue-200 dark:from-honolulu-blue-800 dark:to-honolulu-blue-700 rounded-t-lg p-6 flex items-center justify-center">
            <i :class="[feature.icon, 'text-6xl text-honolulu-blue-500 dark:text-honolulu-blue-300']"></i>
          </div>
          <div class="p-6 text-center">
            <h3 class="text-2xl font-bold mb-4 text-midnight-green-700 dark:text-silver-200">{{ feature.title }}</h3>
            <p class="text-lg text-midnight-green-600 dark:text-silver-300">{{ feature.description }}</p>
          </div>
        </div>
      </div>
      <div class="text-center">
        <Button
            :label="t('Unveil Process')"
            class="p-button-outlined p-button-rounded p-button-lg"
            @click="navigateTo('/process')"
        />
      </div>
    </div>
  </section>

  <section
      class="px-4 full-width-section relative overflow-clip-y bg-cinereous-200 dark:bg-midnight-green-500">
    <div class="container mx-auto py-16">
      <Panel class="text-center p-4 bg-white dark:bg-midnight-green-800 shadow">
        <h2 class="text-4xl md:text-5xl font-bold mb-8 text-lapis-lazuli-600 dark:text-lapis-lazuli-300">
          {{ t('Solutions That Resonate') }}
        </h2>
        <p class="text-xl md:text-2xl mb-4 text-midnight-green-700 dark:text-silver-200 max-w-4xl mx-auto">
          {{ t('We don\'t just build apps.') }}
        </p>
        <p class="text-xl md:text-2xl mb-12 text-midnight-green-700 dark:text-silver-200 max-w-4xl mx-auto">
          {{ t('We craft experiences that connect, engage, and inspire.') }}
        </p>
        <Button
            :label="t('Discover Magic')"
            class="p-button-outlined p-button-rounded p-button-lg"
            @click="navigateTo('/services')"
        />
      </Panel>
    </div>
  </section>

  <section
      class="full-width-section py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-bold mb-8 text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-300">
        {{ t('Digital Maestros') }}
      </h2>
      <p class="text-xl md:text-2xl mb-4 text-center text-midnight-green-700 dark:text-silver-200 max-w-4xl mx-auto">
        {{ t('A talented ensemble of innovators, creators, and problem-solvers.') }}
      </p>
      <p class="text-xl md:text-2xl mb-12 text-center text-midnight-green-700 dark:text-silver-200 max-w-4xl mx-auto">
        {{ t('Discover the faces behind our digital symphonies.') }}
      </p>
      <div class="text-center">
        <Button
            :label="t('Meet The Team')"
            class="p-button-outlined"
            @click="navigateTo('/team')"
        />
      </div>
    </div>
  </section>

  <section
      class="full-width-section bg-silver-100 dark:bg-lapis-lazuli-800 py-20">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-8 text-midnight-green-800 dark:text-silver-100">
        {{ t('Ready for a Journey?') }}
      </h2>
      <p class="text-xl md:text-2xl mb-8 text-midnight-green-700 dark:text-silver-200 max-w-4xl mx-auto">
        {{
          t('Let\'s create experiences that don\'t just work – they wow.')
        }}
      </p>
      <p class="text-xl md:text-2xl mb-6 text-midnight-green-700 dark:text-silver-200 max-w-4xl mx-auto">
        {{
          t('Your vision, our expertise')
        }}
      </p>
      <p class="text-xl md:text-2xl mb-4text-midnight-green-700 dark:text-silver-200 max-w-4xl mx-auto">
        {{
          t('a perfect')
        }}
      </p>
      <p class="text-2xl md:text-4xl mb-12 text-honolulu-blue-600 font-bold dark:text-lapis-lazuli-200 max-w-4xl mx-auto">
        {{
          t('symphony')
        }}
      </p>
      <Button
          :label="t('Ignite Journey')"
          class="p-button-lg p-button-primary"
          @click="navigateTo('/contact')"
      />
    </div>
  </section>
</template>

<style scoped>
.full-width-section {
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  padding-left: calc(50vw - 50%);
  padding-right: calc(50vw - 50%);
}

:deep(.p-card) {
  background-color: var(--surface-card);
  color: var(--text-color);
}

:deep(.p-card-content) {
  padding-top: 1rem;
}

:deep(.p-panel .p-panel-header) {
  background: var(--surface-ground);
  color: var(--text-color);
  border: none;
  padding: 1.5rem;
}

:deep(.p-panel .p-panel-content) {
  background: var(--surface-section);
  color: var(--text-color);
  border: none;
  padding: 2rem;
}

:deep(.p-panel-header-icon) {
  color: var(--primary-color);
}

:deep(.p-button) {
  padding: 1rem 2rem;
  font-size: 1.25rem;
}
</style>