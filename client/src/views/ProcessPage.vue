<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import MainHeader from "@/components/MainHeader.vue";
import SubHeader from "@/components/SubHeader.vue";
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";

const { t } = useI18n();

const processSteps = ref([
  {
    label: t("Listen"),
    icon: "pi pi-comments",
    description: t("We decode your vision into actionable tech plans."),
    details: t(
      "Our experts dive deep into your business goals, target audience, and pain points. We ask the right questions to uncover the core of your digital needs.",
    ),
  },
  {
    label: t("Design"),
    icon: "pi pi-pencil",
    description: t("We craft intuitive solutions that users love."),
    details: t(
      "Our UX wizards create interfaces that captivate and convert. We blend aesthetics with functionality to deliver experiences that keep users coming back.",
    ),
  },
  {
    label: t("Build"),
    icon: "pi pi-cog",
    description: t("We transform concepts into powerful digital realities."),
    details: t(
      "Our developers breathe life into designs, using cutting-edge tech to build robust, scalable solutions that grow with your business.",
    ),
  },
  {
    label: t("Deliver"),
    icon: "pi pi-check-circle",
    description: t("We launch solutions that drive tangible results."),
    details: t(
      "We don't just deliver code; we deliver impact. Our launch process ensures your solution hits the ground running, driving immediate value for your business.",
    ),
  },
]);
</script>

<template>
  <section id="process">
    <MainHeader>
      {{ t("Vision into Reality") }}
    </MainHeader>
    <SubHeader>
      {{
        t(
          "Razor-sharp process cuts through complexity, delivering solutions that ignite growth and user engagement.",
        )
      }}
    </SubHeader>
    <BottomToTopSlideTransition>
      <div class="flex flex-col gap-4 max-w-3xl">
        <div v-for="(step, index) in processSteps" :key="step.label">
          <div class="flex py-4">
            <div class="text-2xl font-bold mr-2">{{ index + 1 }}.</div>
            <h3 class="text-2xl font-bold">
              {{ t(step.label) }}
            </h3>
          </div>
          <div class="py-6">
            <p class="text-lg mb-4">{{ t(step.description) }}</p>
            <p>{{ t(step.details) }}</p>
          </div>
        </div>
      </div>
    </BottomToTopSlideTransition>
  </section>
</template>
