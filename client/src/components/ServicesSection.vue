<script setup lang="ts">
import { computed } from 'vue';
import HomePageSection from "@/components/HomePageSection.vue";
import ExpandableList from "@/components/ExpandableList.vue";
import CodingImage from "@/components/CodingImage.vue";

interface ServicesSectionTexts {
  mainText: string;
  linkText: string;
  services: Array<{
    title: string;
    additionalInfo: string;
    tag: string;
  }>;
}

const props = defineProps<{
  texts: ServicesSectionTexts;
}>();

const serviceItems = computed(() =>
  props.texts.services.map((service) => ({
    title: service.title,
    sublists: [],
    additionalInfo: service.additionalInfo,
    tag: service.tag
  }))
);
</script>

<template>
  <HomePageSection :link-target="'/services'" :link-text="texts.linkText" image-position="right">
    <p class="flex flex-col gap-2 md:text-lg mb-12 max-w-4xl">
      {{ texts.mainText }}
    </p>
    <ExpandableList :items="serviceItems" />
    <template #image>
      <CodingImage />
    </template>
  </HomePageSection>
</template>