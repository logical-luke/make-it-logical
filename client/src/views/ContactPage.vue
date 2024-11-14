<script setup lang="ts">
import { ref, onMounted } from "vue";
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";
import ContactLink from "@/components/ContactLink.vue";

interface ContactPageTexts {
  mainText: string;
  callToAction: {
    prefix: string;
    main: string;
  };
}

const texts = ref<ContactPageTexts | null>(null);

onMounted(async () => {
  const response = await fetch('/contactPageTexts.json');
  texts.value = await response.json();
});
</script>

<template>
  <section v-if="texts" id="contact">
    <div class="flex flex-col gap-6">
      <BottomToTopSlideTransition>
        <p class="text-xl md:text-2xl max-w-4xl">
          {{ texts.mainText }}
        </p>
      </BottomToTopSlideTransition>
      <BottomToTopSlideTransition>
        <p class="text-xl md:text-2xl font-bold max-w-4xl">
          <span class="font-normal">{{ texts.callToAction.prefix }}</span>
          {{ texts.callToAction.main }}
        </p>
      </BottomToTopSlideTransition>
    </div>
    <div
      class="min-h-[calc(100vh-368px)] md:min-h-[calc(100vh-468px)] flex flex-col justify-center"
    >
      <BottomToTopSlideTransition>
        <ContactLink :bigger="true" />
      </BottomToTopSlideTransition>
    </div>
  </section>
</template>