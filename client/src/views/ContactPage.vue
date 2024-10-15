<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

import MainHeader from "@/components/MainHeader.vue";
import SubHeader from "@/components/SubHeader.vue";
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";
import ContactLink from "@/components/ContactLink.vue";
</script>

<template>
  <section id="contact">
    <MainHeader>
      {{ t("Let's Start") }}
    </MainHeader>
    <SubHeader>
      <div class="flex flex-col gap-2">
        <span>{{ t("Results are driven by action.") }}</span>
        <span>{{ t("We listen and transform your goals into reality.") }}</span>
      </div>
      <template #second>
        <span class="font-normal">{{ t("Make your success story.") }}</span>
        {{ t("Here and now.") }}
      </template>
      <template #third>
        <span class="font-normal">{{ t("It's that simple.") }}</span>
        {{ t("Share contact.") }}
      </template>
    </SubHeader>
    <BottomToTopSlideTransition duration="1300">
      <ContactLink />
    </BottomToTopSlideTransition>
  </section>
</template>
