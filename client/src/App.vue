<script setup lang="ts">
import { ref, provide, onMounted, watch } from "vue";
import router from "@/router";
import { useRoute } from "vue-router";

const route = useRoute();
import NavigationBar from "@/components/NavigationBar.vue";
import FooterSection from "@/components/FooterSection.vue";

const transitionTrigger = ref(0);

import {
  getPageTitle,
  getMetaDescription,
} from "@/services/seoMetadataProvider";
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";

provide("transitionTrigger", transitionTrigger);

router.afterEach(() => {
  transitionTrigger.value++;
});

onMounted(() => {
  const link = document.createElement("link");
  link.rel = "canonical";
  link.href = `https://makeitlogical.io${route.path}`;
  document.head.appendChild(link);

  const script = document.createElement("script");
  script.setAttribute("type", "application/ld+json");
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Make IT Logical",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  });
  document.head.appendChild(script);
});

watch(
  () => route.path,
  () => {
    document.title = getPageTitle(route);
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", getMetaDescription(route));
  },
  { immediate: true },
);
</script>

<template>
  <div class="min-h-[calc(100vh-108px)]">
    <NavigationBar />
    <main>
      <div class="container mx-auto py-24 md:py-32 px-6 md:px-0">
        <RouterView v-slot="{ Component }">
          <Component :is="Component"></Component>
        </RouterView>
      </div>
    </main>
  </div>
  <BottomToTopSlideTransition
    duration="1500"
    :use-intersection-observer="false"
  >
    <FooterSection />
  </BottomToTopSlideTransition>
</template>
