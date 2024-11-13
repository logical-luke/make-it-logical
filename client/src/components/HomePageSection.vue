<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
import LinkItem from "@/components/LinkItem.vue";

interface Props {
  title?: string;
  linkTarget?: string;
  linkText?: string;
  imagePosition?: "left" | "right";
}

defineProps<Props>();
</script>

<template>
  <section>
    <h2
      v-if="title"
      class="max-w-4xl text-gray-500 dark:text-gray-400 text-2xl md:text-4xl font-bold mb-8"
    >
      {{ t(title) }}
    </h2>
    <div :class="['flex', 'flex-col', imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row', 'md:items-start', 'md:justify-between']">
      <div class="flex flex-col gap-4 md:gap-6 md:text-lg mb-6 max-w-4xl">
        <slot></slot>
        <div
          v-if="linkTarget && linkText"
          class="flex justify-center pt-6 pb-4 md:hidden"
        >
          <LinkItem :to="linkTarget" :text="linkText" />
        </div>
      </div>
      <div :class="['w-full', 'md:w-1/3', 'mt-4', 'md:mt-0']">
        <slot name="image"></slot>
      </div>
    </div>
    <div
      v-if="linkTarget && linkText"
      class="hidden md:flex justify-center pt-6 pb-4 md:pt-8 md:pb-6"
    >
      <LinkItem :to="linkTarget" :text="linkText" />
    </div>
  </section>
</template>