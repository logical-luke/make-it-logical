<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import MainHeader from "@/components/MainHeader.vue";
import SubHeader from "@/components/SubHeader.vue";
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";
import BulletList from "@/components/BulletList.vue";

interface ServiceTexts {
  mainHeader: string;
  subHeader: string;
  whyPartnerWithUs: string;
  services: Array<{
    title: string;
    descriptionPoints: string[];
    benefits: Array<{ text: string }>;
    deliverables: Array<{ text: string }>;
    applicationExamples: Array<{ text: string }>;
    suitableFor: string;
  }>;
  sectionItems: Array<{
    title: string;
    description: string;
  }>;
}

const texts = ref<ServiceTexts | null>(null);

onMounted(async () => {
  const response = await fetch('/servicesPageTexts.json');
  texts.value = await response.json();
});

const serviceItems = computed(() => {
  if (!texts.value) return [];

  return texts.value.services.map((service) => ({
    title: service.title,
    sublists: [
      { title: "Example projects", items: service.applicationExamples },
      {
        title: "What we do?",
        items: service.descriptionPoints.map((point) => ({ text: point })),
        expandable: true,
      },
      { title: "What you get?", items: service.deliverables, expandable: true },
      { title: "What is the result?", items: service.benefits, expandable: true },
    ],
    additionalInfo: service.suitableFor,
  }));
});
</script>

<template>
  <div v-if="texts">
    <section id="services">
      <MainHeader :text="texts.mainHeader" />
      <SubHeader :first="texts.subHeader" />
      <BottomToTopSlideTransition>
        <BulletList
          :items="serviceItems"
          :show-numbers="false"
          additional-info-label="Ideal for:"
        />
      </BottomToTopSlideTransition>
    </section>
    <section class="py-12 md:py-16">
      <h2
        class="text-xl md:text-2xl mb-4 max-w-4xl font-bold text-gray-500 dark:text-gray-400"
      >
        {{ texts.whyPartnerWithUs }}
      </h2>
      <div class="flex flex-col gap-6 text-lg md:text-xl">
        <div
          v-for="(item, index) in texts.sectionItems"
          :key="index"
          class="py-6 max-w-4xl"
        >
          <h3 class="font-bold mb-2">{{ item.title }}</h3>
          <p class="text-base">{{ item.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>