<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

import MainHeader from "@/components/MainHeader.vue";
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";
import ContactLink from "@/components/ContactLink.vue";
</script>

<template>
  <section id="contact">
    <MainHeader text="Let's Start" />
    <div class="flex flex-col gap-6 py-6 mb-6 md:mb-10">
      <BottomToTopSlideTransition duration="1000">
        <p class="text-xl md:text-2xl max-w-4xl">
          {{ t("We listen and transform your goals into reality.") }}
        </p>
      </BottomToTopSlideTransition>
      <BottomToTopSlideTransition duration="1500">
        <p class="text-xl md:text-2xl font-bold max-w-4xl">
          <span class="font-normal">{{ t("It's simple.") }}</span>
          {{ t("Share contact.") }}
        </p>
      </BottomToTopSlideTransition>
    </div>
    <BottomToTopSlideTransition duration="1300">
      <ContactLink />
    </BottomToTopSlideTransition>
  </section>
</template>
