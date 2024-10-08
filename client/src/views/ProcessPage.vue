<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";

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
    <h2 class="text-4xl md:text-5xl font-bold mb-8">
      Transforming Vision into Reality
    </h2>
    <p class="text-xl md:text-2xl mb-16">
      {{
        t(
          "Our razor-sharp process cuts through complexity, delivering solutions that ignite growth and user engagement.",
        )
      }}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <div v-for="(step, index) in processSteps" :key="step.label">
        <div class="flex items-center p-4">
          <div
            class="w-12 h-12 bg-honolulu-blue-500 dark:bg-honolulu-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4"
          >
            {{ index + 1 }}
          </div>
          <h3 class="text-2xl font-bold">
            {{ t(step.label) }}
          </h3>
        </div>
        <div class="p-6">
          <p class="text-lg mb-4">{{ t(step.description) }}</p>
          <p class="mb-6">{{ t(step.details) }}</p>
          <div class="flex justify-center">
            <i
              :class="[
                step.icon,
                'text-4xl text-honolulu-blue-500 dark:text-honolulu-blue-400',
              ]"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
