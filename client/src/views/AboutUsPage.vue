<script setup lang="ts">
import { ref, onMounted } from "vue";
import MainHeader from "@/components/MainHeader.vue";
import SubHeader from "@/components/SubHeader.vue";

interface AboutUsPageTexts {
  mainHeader: string;
  missionStatement: string;
  approach: {
    title: string;
    description: string;
  };
  coreValues: Array<{
    title: string;
    description: string;
  }>;
  philosophy: Array<{
    title: string;
    description: string;
  }>;
  whyChooseUs: {
    title: string;
    paragraphs: string[];
  };
}

const texts = ref<AboutUsPageTexts | null>(null);

onMounted(async () => {
  const response = await fetch("/aboutUsPageTexts.json");
  texts.value = await response.json();
});
</script>

<template>
  <section v-if="texts" class="about-page">
    <MainHeader :text="texts.mainHeader" />
    <SubHeader :first="texts.missionStatement" />

    <div class="mt-12 md:mt-16">
      <h2 class="mb-6 max-w-4xl text-2xl md:text-3xl font-bold text-gray-500 dark:text-gray-400">{{ texts.approach.title
        }}</h2>
      <p class="mb-8 text-base max-w-4xl">
        {{ texts.approach.description }}
      </p>
    </div>

    <div class="mt-12 md:mt-16">
      <h2 class="mb-6 max-w-4xl text-2xl md:text-3xl font-bold text-gray-500 dark:text-gray-400">Core Values</h2>
      <ul class="list-disc pl-6 space-y-6 max-w-4xl">
        <li v-for="value in texts.coreValues" :key="value.title" class="text-base">
          <strong>{{ value.title }}:</strong> {{ value.description }}
        </li>
      </ul>
    </div>

    <div class="mt-12 md:mt-16">
      <h2 class="mb-6 max-w-4xl text-2xl md:text-3xl font-bold text-gray-500 dark:text-gray-400">Our Philosophy</h2>
      <ul class="list-disc pl-6 space-y-6 max-w-4xl">
        <li v-for="item in texts.philosophy" :key="item.title" class="text-base">
          <strong>{{ item.title }}:</strong> {{ item.description }}
        </li>
      </ul>
    </div>

    <div class="mt-12 md:mt-16">
      <h2 class="mb-6 max-w-4xl text-2xl md:text-3xl font-bold text-gray-500 dark:text-gray-400">
        {{ texts.whyChooseUs.title }}</h2>
      <div class="space-y-6 max-w-4xl">
        <p v-for="(paragraph, index) in texts.whyChooseUs.paragraphs" :key="index" class="text-base">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>