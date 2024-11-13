<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";

const { t } = useI18n();
import ArrowRightIcon from "@/components/ArrowRightIcon.vue";

interface Props {
  to: string;
  text: string;
  disableIcon?: boolean;
  external?: boolean;
  lessContrast?: boolean;
  customLinkSize?: "xl" | "2xl" | "lg" | "md" | "sm";
}

const props = defineProps<Props>();

const linkClass = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
};

const upperLinkClass = {
  sm: "md:text-md",
  md: "md:text-lg",
  lg: "md:text-xl",
  xl: "md:text-2xl",
  "2xl": "md:text-3xl",
};

const underLineClasses = "text-secondary dark:text-secondary-light decoration-secondary-300 dark:decoration-secondary-600 hover:decoration-secondary dark:hover:decoration-secondary-light";
const linkSize =
  typeof props.customLinkSize === "string"
    ? linkClass[props.customLinkSize] +
      " " +
      upperLinkClass[props.customLinkSize]
    : "text-xl md:text-2xl";
</script>

<template>
  <div>
    <RouterLink
      v-if="!external"
      :to="to"
      class="flex duration-300 transition-all gap-0 hover:gap-2 items-center"
      :class="[
        lessContrast
          ? 'fill-gray-300 hover:fill-gray-500 dark:fill-gray-600 dark:hover:fill-gray-400'
          : 'fill-gray-400 hover:fill-black dark:fill-gray-400 dark:hover:fill-gray-200',
      ]"
    >
      <span
        class="underline underline-offset-8 hover:decoration-3"
        :class="[
          linkSize,
          lessContrast
            ? 'text-gray-600 dark:text-gray-500 decoration-gray-300 dark:decoration-gray-600 hover:decoration-gray-600 dark:hover:decoration-gray-400'
            : underLineClasses,
        ]"
      >
        {{ t(text) }}
      </span>
      <ArrowRightIcon v-if="!disableIcon" class="h-5 -ml-3" />
    </RouterLink>
    <a
      v-else
      :href="to"
      target="_blank"
      rel="noopener noreferrer"
      class="flex duration-300 transition-all gap-2 hover:gap-4 items-center"
      :class="[
        lessContrast
          ? 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
          : 'text-gray-400 hover:text-black dark:hover:text-gray-100',
      ]"
    >
      <span
        class="underline underline-offset-8 hover:decoration-3"
        :class="[
          linkSize,
          lessContrast
            ? 'text-gray-600 dark:text-gray-500 decoration-gray-300 dark:decoration-gray-600 hover:decoration-gray-600 dark:hover:decoration-gray-400'
            : underLineClasses,
        ]"
      >
        {{ t(text) }}
      </span>
    </a>
  </div>
</template>
