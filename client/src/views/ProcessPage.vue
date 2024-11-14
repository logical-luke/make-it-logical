<script setup lang="ts">
import { ref, computed } from "vue";
import MainHeader from "@/components/MainHeader.vue";
import BulletList from "@/components/BulletList.vue";

interface ProcessPageTexts {
  mainHeader: string;
  processSteps: Array<{
    label: string;
    descriptionPoints: string[];
    details: string;
  }>;
}

const texts = ref<ProcessPageTexts | null>(null);

const response = await fetch("/processPageTexts.json");
texts.value = await response.json();

const processItems = computed(() => {
  if (!texts.value) return [];

  return texts.value.processSteps.map((step) => ({
    title: step.label,
    sublists: [
      { items: step.descriptionPoints.map((point) => ({ text: point })) }
    ],
    additionalInfo: step.details
  }));
});
</script>

<template>
  <section v-if="texts" id="process">
    <MainHeader :text="texts.mainHeader" />
    <div class="flex flex-col gap-4 max-w-4xl">
      <BulletList :items="processItems" :show-numbers="true" />
    </div>
  </section>
</template>