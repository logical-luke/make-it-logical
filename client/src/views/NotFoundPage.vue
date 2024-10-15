<script setup lang="ts">
import { useI18n } from "vue-i18n";
import LinkItem from "@/components/LinkItem.vue";
import MainHeader from "@/components/MainHeader.vue";
import SubHeader from "@/components/SubHeader.vue";

const { t } = useI18n();
</script>

<template>
  <section id="not-found">
    <MainHeader>
      {{ t("404 - Page Not Found") }}
    </MainHeader>
    <SubHeader first="The page you're looking for doesn't exist." />
    <LinkItem to="/" text="Go To Homepage" />
  </section>
</template>
