<script setup lang="ts">
import LinkItem from "@/components/LinkItem.vue";
import MainHeader from "@/components/MainHeader.vue";
import SubHeader from "@/components/SubHeader.vue";
</script>

<template>
  <section id="not-found">
    <MainHeader text="404 - Page Not Found" />
    <SubHeader first="The page you're looking for doesn't exist." />
    <LinkItem to="/" text="Go To Homepage" />
  </section>
</template>
