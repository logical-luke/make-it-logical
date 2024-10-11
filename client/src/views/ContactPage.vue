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
      {{ t("Results are Driven by Action") }}
    </MainHeader>
    <SubHeader>
      {{ t("We just listen and transform your visions into reality.") }}
      <template #second>
        <span class="font-normal">{{ t("Start your success story.") }}</span>
        {{ t("Here and now.") }}
      </template>
      <template #third>
        <span class="font-normal">{{ t("It's that simple. Share contact, and we'll reach out.") }}</span>
      </template>
    </SubHeader>
    <BottomToTopSlideTransition>
      <div v-if="show" class="flex flex-col gap-6 mx-auto mb-16">
        <div class="flex flex-col gap-4 w-full">
          <LinkItem
            :disable-icon="true"
            :external="true"
            to="mailto:vision@makeitlogical.io"
          >
            vision@makeitlogical.io
          </LinkItem>
        </div>
      </div>
    </BottomToTopSlideTransition>
  </section>
</template>
