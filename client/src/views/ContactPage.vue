<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";
import ContactLink from "@/components/ContactLink.vue";
</script>

<template>
  <section id="contact">
    <div class="flex flex-col gap-6">
      <BottomToTopSlideTransition>
        <p class="text-xl md:text-2xl max-w-4xl">
          {{ t("We listen and transform your goals into reality.") }}
        </p>
      </BottomToTopSlideTransition>
      <BottomToTopSlideTransition>
        <p class="text-xl md:text-2xl font-bold max-w-4xl">
          <span class="font-normal">{{ t("It's simple.") }}</span>
          {{ t("Share contact.") }}
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
