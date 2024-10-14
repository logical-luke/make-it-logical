<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
import HomePageSection from "@/components/HomePageSection.vue";
import LinkItem from "@/components/LinkItem.vue";
</script>

<template>
  <HomePageSection title="Ready for a Journey?">
    <div class="flex flex-col gap-4">
      <p class="md:text-2xl mb-8 max-w-4xl">
        {{ t("Get solutions that don't just work – they") }}
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
        {{ t("symphony") }}
      </p>
    </div>
    <div class="flex justify-center">
      <LinkItem to="/contact">
        {{ t("Ignite Success") }}
      </LinkItem>
    </div>
  </HomePageSection>
</template>

<style scoped></style>
