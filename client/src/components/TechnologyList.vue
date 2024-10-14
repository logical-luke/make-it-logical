<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
import { ref, onMounted, onUnmounted } from "vue";
import ArrowChevronRightIcon from "@/components/ArrowChevronRightIcon.vue";
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";

interface Technology {
  name: string;
  category: string;
  description: string;
  useCases: string[];
}

const props = defineProps<{
  technologies: Technology[];
  animationDuration?:
    | "2000"
    | "1500"
    | "1300"
    | "1000"
    | "700"
    | "500"
    | "400"
    | "300"
    | "200"
    | "100";
}>();

const animationDuration = props.animationDuration || "500";

const expandedTechs = ref(new Set<string>());
const visibleItems = ref(new Set<string>());

const toggleExpand = (techName: string) => {
  if (expandedTechs.value.has(techName)) {
    expandedTechs.value.delete(techName);
  } else {
    expandedTechs.value.add(techName);
  }
};

const isExpanded = (techName: string) => {
  return expandedTechs.value.has(techName);
};

const isVisible = (key: string) => {
  return visibleItems.value.has(key);
};

const durationClass = () => {
  const durations = {
    "2000": "duration-2000",
    "1500": "duration-1500",
    "1300": "duration-1300",
    "1000": "duration-1000",
    "700": "duration-700",
    "500": "duration-500",
    "400": "duration-400",
    "300": "duration-300",
    "200": "duration-200",
    "100": "duration-100",
  };

  return durations[animationDuration];
};

let observer: IntersectionObserver;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            visibleItems.value.add(entry.target.id);
          }, 100);
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll("[data-observe]").forEach((el) => {
    observer.observe(el);
  });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div class="flex flex-col gap-8 max-w-4xl">
    <div v-for="(tech, index) in technologies" :key="tech.name">
      <div
        :id="`tech-${index}`"
        data-observe
        :class="[
          durationClass(),
          'transform transition-all ease-in-out delay-100',
          isVisible(`tech-${index}`)
            ? 'translate-y-0 opacity-100'
            : 'translate-y-4 opacity-0',
        ]"
      >
        <div
          class="group flex items-center hover:text-gray-600 dark:hover:text-gray-100 text-gray-400 dark:text-gray-600 cursor-pointer"
          @click="toggleExpand(tech.name)"
        >
          <ArrowChevronRightIcon
            class="h-4 w-4 mr-3 fill-gray-400 group-hover:fill-gray-800 dark:fill-gray-400 dark:group-hover:fill-gray-200 transition-transform duration-300"
            :class="[
              { 'rotate-180': isExpanded(tech.name) },
              isExpanded(tech.name)
                ? 'group-hover:translate-y-0.5'
                : 'group-hover:translate-y-0.5',
            ]"
          />
          <h3
            class="text-xl md:text-2xl text-gray-800 dark:text-gray-100 font-bold"
          >
            {{ tech.name }}
          </h3>
          <span class="ml-2 text-sm text-gray-500 dark:text-gray-400">{{
            tech.category
          }}</span>
        </div>
      </div>

      <Transition
        :enter-active-class="`${durationClass()} transition-all ease-in-out delay-100`"
        enter-from-class="transform translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        :leave-active-class="`${durationClass()} transition-all ease-in-out`"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform translate-y-4 opacity-0"
      >
        <div v-if="isExpanded(tech.name)" class="mt-6 ml-7">
          <p class="mb-4">{{ tech.description }}</p>
          <h4 class="font-semibold mb-2">Use Cases</h4>
          <ul class="list-disc space-y-2 px-4">
            <li v-for="useCase in tech.useCases" :key="useCase">
              {{ useCase }}
            </li>
          </ul>
        </div>
      </Transition>
    </div>
    <BottomToTopSlideTransition duration="700">
      <p class="mt-6 text-xs text-gray-700 dark:text-gray-300">
        {{
          t(
            "The technologies listed are for informational purposes only and do not imply any official association or endorsement.",
          )
        }}
      </p>
    </BottomToTopSlideTransition>
  </div>
</template>
