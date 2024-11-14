<script setup lang="ts">
import { onMounted, watch, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
import NavigationBar from "@/components/NavigationBar.vue";

const route = useRoute();

const FooterSection = defineAsyncComponent(
  () => import("@/components/FooterSection.vue")
);

import {
  getPageTitle,
  getMetaDescription
} from "@/services/seoMetadataProvider";

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
      priceCurrency: "USD"
    }
  });
  document.head.appendChild(script);
});

watch(
  () => route.path,
  () => {
    document.title = getPageTitle(route);
    document
      .querySelector("meta[name=\"description\"]")
      ?.setAttribute("content", getMetaDescription(route));
  },
  { immediate: true }
);
</script>

<template>
  <div class="min-h-screen md:min-h-[calc(100vh-108px)]">
    <NavigationBar />
    <main>
      <div class="container mx-auto py-24 md:py-32 px-6 md:px-10">
        <RouterView v-slot="{ Component }">
          <Transition
            enter-active-class="transition-all transform duration-300 ease-in"
            enter-from-class="opacity-5 translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all transform duration-300 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-5 translate-y-4"
          >
            <Suspense>
              <Component :is="Component"></Component>
              <template #fallback>
              </template>
            </Suspense>
          </Transition>
        </RouterView>
      </div>
    </main>
  </div>
  <FooterSection />
</template>