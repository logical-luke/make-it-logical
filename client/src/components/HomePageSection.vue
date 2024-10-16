<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
import LinkItem from "@/components/LinkItem.vue";

interface Props {
  title?: string;
  linkTarget?: string;
  linkText?: string;
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
    <slot></slot>
    <div
      v-if="linkTarget && linkText"
      class="flex justify-center pt-14 pb-10 md:pt-20 md:pb-8"
    >
      <LinkItem :to="linkTarget" :text="linkText" />
    </div>
  </section>
</template>
