<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
import StartupImage from "@/components/StartupImage.vue";
import LinkItem from "@/components/LinkItem.vue";
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";
import FadeTransition from "@/components/FadeTransition.vue";

const features = [
  {
    icon: "pi pi-comments",
    title: t("Listen"),
    description: t("Your vision is decoded into actionable tech plans.")
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
  }
];
</script>

<template>
  <div class="flex flex-col gap-24">
    <section class="md:min-h-[calc(100vh-280px)]">
      <div class="flex flex-col md:flex-row items-center">
        <div class="w-full md:w-1/2">
          <BottomToTopSlideTransition duration="300">
            <h2
              class="flex flex-col text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
            >
              <span>{{ t("Web") }}</span>
              <span
                class="text-honolulu-blue-500 dark:text-honolulu-blue-300"
              >{{ t("Simplified") }}</span
              >
              <span>{{ t("Humanity") }}</span>
              <span
                class="text-honolulu-blue-500 dark:text-honolulu-blue-300"
              >{{ t("Amplified") }}</span
              >
            </h2>
          </BottomToTopSlideTransition>
          <BottomToTopSlideTransition duration="500">
            <p class="text-xl sm:text-2xl md:text-3xl mb-6">
              {{ t("Bridging technology and human understanding.") }}
            </p>
            <p class="text-xl sm:text-2xl md:text-3xl mb-12">
              {{ t("Simplifying the web, for the people.") }}
            </p>
            <LinkItem to="/contact">
              {{ t("Embark on Evolution") }}
            </LinkItem>
          </BottomToTopSlideTransition>
        </div>
        <div class="w-full md:w-1/2 mt-12">
          <div
            class="aspect-w-16 opacity-80 dark:opacity-70 aspect-h-9 md:aspect-w-1 md:aspect-h-1 overflow-hidden"
          >
            <FadeTransition>
              <StartupImage class="w-full h-full object-cover" />
            </FadeTransition>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-20">
      <BottomToTopSlideTransition>
        <h2
          class="text-gray-800 dark:text-gray-100 text-4xl md:text-5xl font-bold mb-12"
        >
          {{ t("Our Digital Alchemy") }}
        </h2>
      </BottomToTopSlideTransition>
      <BottomToTopSlideTransition>
        <div class="flex flex-col gap-8 mb-12">
          <div v-for="feature in features" :key="feature.title">
            <div class="py-6">
              <i
                :class="[
                  feature.icon,
                  'text-5xl py-4 text-gray-400 dark:text-gray-600',
                ]"
              ></i>
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
          class="text-gray-800 dark:text-gray-100 text-4xl md:text-5xl font-bold mb-12 max-w-3xl"
        >
          {{ t("Solutions That Resonate") }}
        </h2>
        <p class="text-xl md:text-2xl mb-4 max-w-3xl">
          {{ t("We don't just build apps.") }}
        </p>
        <p class="text-xl md:text-2xl mb-12 max-w-3xl">
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
          class="text-gray-800 dark:text-gray-100 text-4xl md:text-5xl font-bold mb-12 max-w-3xl"
        >
          {{ t("Ready for a Journey?") }}
        </h2>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl">
          {{ t("Let's create experiences that don't just work – they wow.") }}
        </p>
        <p class="text-xl md:text-2xl mb-6 max-w-3xl">
          {{ t("Your vision, our expertise") }}
        </p>
        <p class="text-xl md:text-2xl mb-4 max-w-3xl">
          {{ t("a perfect") }}
        </p>
        <p class="text-2xl md:text-4xl mb-12 font-bold max-w-3xl">
          {{ t("symphony") }}
        </p>
        <div class="flex justify-center">
          <LinkItem to="/contact">
            {{ t("Ignite Journey") }}
          </LinkItem>
        </div>
      </section>
    </BottomToTopSlideTransition>
  </div>
</template>
