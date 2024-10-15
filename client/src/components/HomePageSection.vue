<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";
import LinkItem from "@/components/LinkItem.vue";

interface Props {
  title: string;
  linkTarget?: string;
  linkText?: string;
}

defineProps<Props>();
</script>

<template>
  <BottomToTopSlideTransition>
    <section>
      <h2
        class="max-w-4xl text-gray-500 dark:text-gray-400 text-xl md:text-4xl font-bold mb-8"
      >
        {{ t(title) }}
      </h2>
      <slot></slot>
      <div v-if="linkTarget && linkText" class="flex justify-center mt-12">
        <LinkItem :to="linkTarget">
          {{ t(linkText) }}
        </LinkItem>
      </div>
    </section>
  </BottomToTopSlideTransition>
</template>
