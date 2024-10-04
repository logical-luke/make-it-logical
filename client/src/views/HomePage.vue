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
      class="relative mb-20 text-center px-4 full-width-section bg-gradient-to-r from-silver-100 to-silver-300 dark:from-honolulu-blue-800 dark:to-lapis-lazuli-800 overflow-hidden">
    <div class="absolute inset-0 opacity-20">
      <StartupImage class="w-full h-full object-left"/>
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

  <section class="mb-20 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-bold mb-12 text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-300">
        {{ t('Our Digital Alchemy') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card v-for="feature in features" :key="feature.title"
              class="outline-2 dark:outline-silver-200 outline-honolulu-blue-500 outline text-center shadow bg-white dark:bg-midnight-green-800">
          <template #header>
            <div class="bg-honolulu-blue-100 dark:bg-honolulu-blue-800 rounded-md p-4 flex items-center justify-center">
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
      class="mb-20 px-4 full-width-section bg-gradient-to-r from-silver-200 to-cinereous-200 dark:from-midnight-green-800 dark:to-lapis-lazuli-800">
    <div class="container mx-auto py-16">
      <Panel header="Our Craft" class="text-center p-4 bg-white dark:bg-midnight-green-900 shadow">
        <template #icons>
          <Button icon="pi pi-star" class="p-panel-header-icon p-link"/>
        </template>
        <h2 class="text-4xl md:text-5xl font-bold mb-8 text-lapis-lazuli-600 dark:text-lapis-lazuli-300">
          {{ t('Digital Experiences That Resonate') }}
        </h2>
        <p class="text-xl md:text-2xl mb-12 text-midnight-green-700 dark:text-silver-200 max-w-4xl mx-auto">
          {{ t('We don\'t just build apps. We craft digital experiences that connect, engage, and inspire.') }}
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

  <section class="mb-20 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-bold mb-8 text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-300">
        {{ t('Our Symphony of Innovation') }}
      </h2>
      <p class="text-xl md:text-2xl mb-12 text-center text-midnight-green-700 dark:text-silver-200 max-w-4xl mx-auto">
        {{
          t('A harmonious blend of creativity, technology, and human-centric design. See how we orchestrate digital success.')
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
      class="full-width-section bg-gradient-to-r from-lapis-lazuli-200 to-midnight-green-200 dark:from-lapis-lazuli-800 dark:to-midnight-green-800 py-20">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-8 text-midnight-green-800 dark:text-silver-100">
        {{ t('Ready to Redefine Digital?') }}
      </h2>
      <p class="text-xl md:text-2xl mb-12 text-midnight-green-700 dark:text-silver-200 max-w-4xl mx-auto">
        {{
          t('Let\'s create digital experiences that don\'t just work – they wow. Your vision, our expertise: a perfect digital symphony.')
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