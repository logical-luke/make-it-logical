<script setup lang="ts">
import { ref } from "vue";
import ContactLink from "@/components/ContactLink.vue";

interface ContactPageTexts {
  mainText: string;
  callToAction: {
    prefix: string;
    main: string;
  };
}

const texts = ref<ContactPageTexts | null>(null);

const response = await fetch("/contactPageTexts.json");
texts.value = await response.json();
</script>

<template>
  <section v-if="texts" id="contact">
    <div class="flex flex-col gap-6">
      <p class="text-xl md:text-2xl max-w-4xl">
        {{ texts.mainText }}
      </p>
      <p class="text-xl md:text-2xl font-bold max-w-4xl">
        <span class="font-normal">{{ texts.callToAction.prefix }}</span>
        {{ texts.callToAction.main }}
      </p>
    </div>
    <div
      class="min-h-[calc(100vh-368px)] md:min-h-[calc(100vh-468px)] flex flex-col justify-center"
    >
      <ContactLink :bigger="true" />
    </div>
  </section>
</template>