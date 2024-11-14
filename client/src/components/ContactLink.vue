<script setup lang="ts">
import LinkItem from "@/components/LinkItem.vue";
import { event } from "vue-gtag";

const sendConversionEvent = () =>
  event("conversion", {
    send_to: "AW-10875393244/uAJeCPaHyd0ZENyp5cEo",
    value: 1.0,
    currency: "PLN",
  });

interface Props {
  bigger?: boolean;
}

defineProps<Props>();
</script>

<template>
  <p
    class="text-accent-800 dark:text-accent-600 mb-2"
    :class="bigger ? 'text-5xl md:text-6xl' : 'text-3xl md:text-4xl'"
  >
    Let's Talk
  </p>
  <LinkItem
    :disable-icon="true"
    :external="true"
    :custom-link-size="bigger ? '2xl' : 'xl'"
    to="mailto:hey@makeitlogical.io"
    text="hey@makeitlogical.io"
    @click="sendConversionEvent"
  />
</template>
