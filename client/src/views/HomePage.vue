<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import {useRouter} from 'vue-router';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Panel from 'primevue/panel';
import StartupImage from "@/components/StartupImage.vue";
import TestingImage from "@/components/TestingImage.vue";
import GoodIdeaImage from "@/components/GoodIdeaImage.vue";

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
      class="relative text-center px-4 full-width-section bg-gradient-to-r from-silver-100 to-silver-300 dark:from-honolulu-blue-800 dark:to-lapis-lazuli-800 overflow-hidden">
    <div class="absolute inset-1 opacity-20">
      <StartupImage class="w-full h-full"/>
    </div>
    <div class="container mx-auto py-20 relative z-10">
      <h1 class="text-5xl md:text-7xl flex flex-col font-bold text-midnight-green-800 dark:text-silver-100 mb-8">
        {{ t('Web') }}
        <span class="highlight">{{ t('Simplified') }}</span>
        {{ t('Humanity') }}
        <span class="highlight">{{ t('Amplified') }}</span>
      </h1>
      <p class="text-2xl md:text-3xl mb-12 text-midnight-green-700 dark:text-silver-200 max-w-4xl mx-auto">
        {{ t('Bridging technology and human understanding.') }}
      </p>
      <p class="text-2xl md:text-3xl mb-12 text-midnight-green-700 dark:text-silver-200 max-w-4xl mx-auto">
        {{ t('Simplifying the web, for the people.') }}
      </p>
      <Button
          :label="t('Embark on Digital Evolution')"
          icon="pi pi-arrow-right"
          icon-pos="right"
          class="p-button-lg p-button-primary"
          @click="navigateTo('/contact')"
      />
    </div>
  </section>

  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-bold mb-12 text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-300">
        {{ t('Our Digital Alchemy') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card
            v-for="feature in features" :key="feature.title"
            class="outline-2 dark:outline-silver-200 outline-honolulu-blue-500 outline text-center shadow bg-white dark:bg-midnight-green-800">
          <template #header>
            <div
                class="bg-gradient-to-r from-honolulu-blue-100 to-honolulu-blue-200 dark:from-honolulu-blue-800 dark:to-honolulu-blue-700 rounded-md p-6 flex items-center justify-center">
              <i :class="[feature.icon, 'text-6xl text-honolulu-blue-500 dark:text-honolulu-blue-300']"></i>
            </div>
          </template>
          <template #title>
            <h3 class="text-2xl font-bold my-4 text-midnight-green-700 dark:text-silver-200">{{ feature.title }}</h3>
          </template>
          <template #content>
            <p class="text-lg text-midnight-green-600 dark:text-silver-300">{{ feature.description }}</p>
          </template>
        </Card>
      </div>
    </div>
  </section>

  <section
      class="px-4 full-width-section relative overflow-clip-y bg-cinereous-200 dark:bg-midnight-green-500">
    <div class="absolute inset-0 overflow-visible">
      <div class="absolute inset-0 opacity-10 -top-[10vh]">
        <GoodIdeaImage class="w-full h-full object-cover object-left scale-[2] md:scale-[1.75] lg:scale-150"/>
      </div>
    </div>
    <div class="container mx-auto py-16">
      <Panel header="Our Craft" class="text-center p-4 bg-white dark:bg-midnight-green-800 shadow">
        <template #icons>
          <i class="pi pi-star"></i>
        </template>
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
            :label="t('Discover Our Magic')"
            icon="pi pi-star"
            icon-pos="right"
            class="p-button-outlined p-button-rounded p-button-lg"
            @click="navigateTo('/services')"
        />
      </Panel>
    </div>
  </section>

  <section class="full-width-section py-16 dark:bg-midnight-green-800">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-bold mb-8 text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-300">
        {{ t('Our Symphony of Innovation') }}
      </h2>
      <p class="text-xl md:text-2xl mb-4 text-center text-midnight-green-700 dark:text-silver-200 max-w-4xl mx-auto">
        {{
          t('A harmonious blend of creativity, technology, and human-centric design.')
        }}
      </p>
      <p class="text-xl md:text-2xl mb-12 text-center text-midnight-green-700 dark:text-silver-200 max-w-4xl mx-auto">
        {{
          t('See how we orchestrate digital success.')
        }}
      </p>
      <div class="text-center">
        <Button
            :label="t('Unveil Our Process')"
            icon="pi pi-chart-line"
            icon-pos="right"
            class="p-button-outlined p-button-rounded p-button-lg"
            @click="navigateTo('/process')"
        />
      </div>
    </div>
  </section>

  <section
      class="full-width-section bg-lapis-lazuli-200 dark:bg-lapis-lazuli-800 py-20">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-8 text-midnight-green-800 dark:text-silver-100">
        {{ t('Ready for a Journey?') }}
      </h2>
      <p class="text-xl md:text-2xl mb-6 text-midnight-green-700 dark:text-silver-200 max-w-4xl mx-auto">
        {{
          t('Let\'s create experiences that don\'t just work – they wow.')
        }}
      </p>
      <p class="text-xl md:text-2xl mb-4 text-midnight-green-700 dark:text-silver-200 max-w-4xl mx-auto">
        {{
          t('Your vision, our expertise: a perfect')
        }}
      </p>
      <p class="text-2xl md:text-4xl mb-12 text-white font-bold dark:text-silver-200 max-w-4xl mx-auto">
        {{
          t('digital symphony')
        }}
      </p>
      <Button
          :label="t('Ignite Your Digital Journey')"
          icon="pi pi-send"
          icon-pos="right"
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