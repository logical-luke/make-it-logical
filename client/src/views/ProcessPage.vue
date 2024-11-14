<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import MainHeader from "@/components/MainHeader.vue";
import SubHeader from "@/components/SubHeader.vue";
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";
import BulletList from "@/components/BulletList.vue";

interface ProcessPageTexts {
  mainHeader: string;
  subHeader: string;
  processSteps: Array<{
    label: string;
    descriptionPoints: string[];
    details: string;
  }>;
}

const texts = ref<ProcessPageTexts | null>(null);

onMounted(async () => {
  const response = await fetch('/processPageTexts.json');
  texts.value = await response.json();
});

const processItems = computed(() => {
  if (!texts.value) return [];

  return texts.value.processSteps.map((step) => ({
    title: step.label,
    sublists: [
      { items: step.descriptionPoints.map((point) => ({ text: point })) },
    ],
    additionalInfo: step.details,
  }));
});
</script>

<template>
  <section v-if="texts" id="process">
    <MainHeader :text="texts.mainHeader" />
    <SubHeader :first="texts.subHeader" />
    <BottomToTopSlideTransition>
      <div class="flex flex-col gap-4 max-w-4xl">
        <BulletList :items="processItems" :show-numbers="true" />
      </div>
    </BottomToTopSlideTransition>
  </section>
</template>