<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
import HomePageSection from "@/components/HomePageSection.vue";
</script>

<template>
  <HomePageSection
    title="Solve Your Problems Now"
    link-target="/contact"
    link-text="Let's Talk"
  >
    <div class="flex flex-col gap-4">
      <p class="md:text-lg mb-8 max-w-4xl">
        {{ t("Get digital solutions that don't just work – they") }}
        <span class="font-semibold">{{ t("wow") }}</span
        >.
      </p>
      <p class="text-lg md:text-2xl max-w-4xl">
        {{ t("Your vision, our expertise") }}
      </p>
      <p class="text-lg md:text-2xl max-w-4xl">
        {{ t("a perfect") }}
      </p>
      <p class="text-xl md:text-4xl mb-12 font-bold max-w-4xl">
        {{ t("harmony") }}
      </p>
    </div>
  </HomePageSection>
</template>

<style scoped></style>
