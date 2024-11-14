<script setup lang="ts">
import { computed } from 'vue';
import HomePageSection from "@/components/HomePageSection.vue";
import ExpandableList from "@/components/ExpandableList.vue";
import ProcessImage from "@/components/ProcessImage.vue";

interface ProcessSectionTexts {
  mainText: string;
  linkText: string;
  processSteps: Array<{
    label: string;
    additionalInfo: string;
  }>;
}

const props = defineProps<{
  texts: ProcessSectionTexts;
}>();

const processItems = computed(() =>
  props.texts.processSteps.map((step) => ({
    title: step.label,
    sublists: [],
    additionalInfo: step.additionalInfo
  }))
);
</script>

<template>
  <HomePageSection :link-target="'/process'" :link-text="texts.linkText">
    <p class="flex flex-col gap-2 md:text-lg mb-12 max-w-4xl">
      {{ texts.mainText }}
    </p>
    <ExpandableList :items="processItems" />
    <template #image>
      <ProcessImage />
    </template>
  </HomePageSection>
</template>