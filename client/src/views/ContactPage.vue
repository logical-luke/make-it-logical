<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

import LinkItem from "@/components/LinkItem.vue";
import MainHeader from "@/components/MainHeader.vue";
import SubHeader from "@/components/SubHeader.vue";
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";
</script>

<template>
  <section id="contact">
    <MainHeader>
      {{ t("Results are Driven by Action") }}
    </MainHeader>
    <SubHeader>
      {{ t("We just listen and transform your visions into reality.") }}
      <template #second>
        <span class="font-normal">{{ t("Start your success story.") }}</span>
        {{ t("Here and now.") }}
      </template>
      <template #third>
        <span class="font-normal">{{ t("It's that simple.") }}</span>
        {{ t("Share contact.") }}
      </template>
    </SubHeader>
    <BottomToTopSlideTransition duration="1300">
      <p class="text-sm">Spark Your</p>
      <div class="flex flex-col gap-4 w-full">
        <LinkItem
          :disable-icon="true"
          :external="true"
          to="mailto:vision@makeitlogical.io"
        >
          vision@makeitlogical.io
        </LinkItem>
      </div>
    </BottomToTopSlideTransition>
  </section>
</template>
