<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
import LinkItem from "@/components/LinkItem.vue";
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";
import BulbShape from "@/components/BulbShape.vue";

const features = [
  {
    icon: "pi pi-comments",
    title: t("Listen"),
    description: t("Your vis  ion is decoded into actionable tech plans.")
  },
  {
    icon: "pi pi-pencil",
    title: t("Design"),
    description: t("Intuitive solutions that users love are crafted.")
  },
  {
    icon: "pi pi-cog",
    title: t("Build"),
    description: t("Concepts are transformed into powerful digital realities.")
  },
  {
    icon: "pi pi-check-circle",
    title: t("Deliver"),
    description: t("Solutions that drive tangible results are launched.")
  },
  {
    icon: "pi pi-chart-line",
    title: t("Improve"),
    description: t("Optimize and refine for ongoing success.")
  }
];
</script>
<template>
  <div class="flex flex-col gap-24">
    <section
      class="md:min-h-[calc(100vh-44px)] flex flex-col md:flex-row">
      <div class="w-full md:w-1/2 z-10 mb-8 md:mb-0">
        <BottomToTopSlideTransition duration="300">
          <h2 class="flex flex-col text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span class="font-normal">{{ t("Web") }}</span>
            <span>{{ t("Simplified") }}</span>
            <span class="font-normal">{{ t("Humanity") }}</span>
            <span>{{ t("Amplified") }}</span>
          </h2>
        </BottomToTopSlideTransition>
      </div>
      <div class="w-full md:w-1/2 -mt-4 md:mt-0 -ml-8">
          <BulbShape/>
      </div>
    </section>
    <section>
      <BottomToTopSlideTransition>
        <h2
          class="text-gray-800 dark:text-gray-200 text-4xl md:text-5xl font-bold mb-12"
        >
          {{ t("Digital Alchemy") }}
        </h2>
      </BottomToTopSlideTransition>
      <BottomToTopSlideTransition>
        <div class="flex flex-col gap-8 mb-12">
          <div v-for="feature in features" :key="feature.title">
            <div class="py-6">
              <h3 class="text-2xl font-bold mb-4">{{ feature.title }}</h3>
              <p class="text-lg">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <LinkItem to="/process">
            {{ t("Unveil Process") }}
          </LinkItem>
        </div>
      </BottomToTopSlideTransition>
    </section>
    <BottomToTopSlideTransition>
      <section class="mt-16">
        <h2
          class="text-gray-800 dark:text-gray-200 text-4xl md:text-5xl font-bold mb-12 max-w-4xl"
        >
          {{ t("Solutions That Resonate") }}
        </h2>
        <p class="text-xl md:text-2xl mb-4 max-w-4xl">
          {{ t("We don't just build apps.") }}
        </p>
        <p class="text-xl md:text-2xl mb-12 max-w-4xl">
          {{ t("We craft experiences that connect, engage, and inspire.") }}
        </p>
        <div class="flex justify-center">
          <LinkItem to="/services">
            {{ t("Discover Magic") }}
          </LinkItem>
        </div>
      </section>
    </BottomToTopSlideTransition>
    <BottomToTopSlideTransition>
      <section class="mt-16">
        <h2
          class="text-gray-800 dark:text-gray-200 text-4xl md:text-5xl font-bold mb-12 max-w-4xl"
        >
          {{ t("Ready for a Journey?") }}
        </h2>
        <div class="flex flex-col gap-4">
          <p class="text-xl md:text-2xl mb-8 max-w-4xl">
            {{ t("Create experiences that don't just work – they") }}
            <span class="font-semibold">{{ t("wow") }}</span
            >.
          </p>
          <p class="text-xl md:text-2xl max-w-4xl">
            {{ t("Your vision, our expertise") }}
          </p>
          <p class="text-xl md:text-2xl max-w-4xl">
            {{ t("a perfect") }}
          </p>
          <p class="text-2xl md:text-4xl mb-12 font-bold max-w-4xl">
            {{ t("symphony") }}
          </p>
        </div>
        <div class="flex justify-center">
          <LinkItem to="/contact">
            {{ t("Ignite Journey") }}
          </LinkItem>
        </div>
      </section>
    </BottomToTopSlideTransition>
  </div>
</template>
