<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

import { ref, inject, watch } from "vue";
import LinkItem from "@/components/LinkItem.vue";
import MainHeader from "@/components/MainHeader.vue";
import SubHeader from "@/components/SubHeader.vue";
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";

const transitionTrigger = inject("transitionTrigger", ref(0));
const show = ref(false);

watch(
  transitionTrigger,
  () => {
    show.value = false;
    setTimeout(() => {
      show.value = true;
    }, 0);
  },
  { immediate: true },
);
</script>

<template>
  <section id="contact">
    <MainHeader>
      {{ t("Let's Connect") }}
    </MainHeader>
    <SubHeader>
      {{ t("We're here to listen and bring your boldest ideas to life.") }}
      <template #second>
        {{ t("Let's start your success story.") }}
      </template>
      <template #third>
        {{ t("Share contact, and we'll reach out.") }}
      </template>
    </SubHeader>
    <BottomToTopSlideTransition>
      <div v-if="show" class="flex flex-col gap-6 mx-auto mb-16">
        <div class="flex flex-col gap-4 w-full">
          <LinkItem
            :disable-icon="true"
            :external="true"
            to="mailto:office@makeitlogical.io"
          >
            office@makeitlogical.io
          </LinkItem>
          <LinkItem :disable-icon="true" :external="true" to="tel:+48696606391">
            +48 696 606 391
          </LinkItem>
        </div>
      </div>
    </BottomToTopSlideTransition>
  </section>
</template>
