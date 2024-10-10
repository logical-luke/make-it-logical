<script setup lang="ts">
import { useI18n } from "vue-i18n";
import LinkItem from "@/components/LinkItem.vue";

const { t } = useI18n();
</script>

<template>
  <section id="contact">
    <h2 class="text-4xl flex flex-col gap-2 md:text-5xl font-bold mb-8">
      <span>Your Vision</span>
      <span>Our Expertise</span>
    </h2>
    <div class="flex flex-col gap-6 mx-auto mb-16">
      <p class="text-xl md:text-2xl mb-4">
        {{ t("We're here to listen and bring your boldest ideas to life.") }}
      </p>
      <p class="text-xl md:text-2xl mb-2 font-semibold">
        {{ t("Let's start your success story.") }}
      </p>
      <p class="text-xl md:text-2xl mb-4 font-bold">
        {{ t("Share contact, and we'll reach out.") }}
      </p>
      <div class="flex flex-col md:flex-row gap-2 w-full">
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
  </section>
</template>
