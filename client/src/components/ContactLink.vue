<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();

import LinkItem from "@/components/LinkItem.vue";
import { event } from "vue-gtag";

const sendConversionEvent = () => event("conversion", {
  "send_to": "AW-10875393244/uAJeCPaHyd0ZENyp5cEo",
  "value": 1.0,
  "currency": "PLN"
});
</script>

<template>
  <p class="text-gray-600 dark:text-gray-300 text-sm mb-2">
    {{ t("Ignite Your") }}
  </p>
  <LinkItem
    :disable-icon="true"
    :external="true"
    to="mailto:vision@makeitlogical.io"
    class="text-sm"
    text="vision@makeitlogical.io"
    @click="sendConversionEvent"
  />
</template>
