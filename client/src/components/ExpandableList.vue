<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import ArrowRightIcon from "@/components/ArrowRightIcon.vue";

interface ListItem {
  title: string;
  tag?: string;
  sublists: { title?: string; items: { text: string }[] }[];
  additionalInfo?: string;
}

interface Group {
  name: string;
  items: ListItem[];
}

const props = defineProps<{
  items: ListItem[] | Group[];
  additionalInfoLabel?: string;
  grouped?: boolean;
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

const expandedItems = ref(new Set<string>());
const activeItems = ref(new Set<string>());
const visibleItems = ref(new Set<string>());

const toggleExpand = (key: string) => {
  if (expandedItems.value.has(key)) {
    expandedItems.value.delete(key);
  } else {
    expandedItems.value.add(key);
  }

  if (activeItems.value.has(key)) {
    activeItems.value.delete(key);
  } else {
    activeItems.value.clear();
    activeItems.value.add(key);
  }

  setTimeout(() => {
    activeItems.value.clear();
  }, 100);
};

const isActive = (key: string) => activeItems.value.has(key);
const isExpanded = (key: string) => expandedItems.value.has(key);
const isVisible = (key: string) => visibleItems.value.has(key);

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
  <div class="flex flex-col gap-10 max-w-4xl">
    <template v-if="grouped">
      <div
        v-for="(group, groupIndex) in items as Group[]"
        :key="group.name"
        class="flex flex-col gap-8 max-w-4xl"
      >
        <h2
          :id="`group-${groupIndex}-title`"
          data-observe
          :class="[
            durationClass(),
            'transform transition-all ease-in-out delay-100 max-w-4xl text-gray-500 dark:text-gray-400 text-xl md:text-4xl font-bold',
            isVisible(`group-${groupIndex}-title`)
              ? 'translate-y-0 opacity-100'
              : 'translate-y-4 opacity-0',
          ]"
        >
          {{ group.name }}
        </h2>
        <div v-for="(item, itemIndex) in group.items" :key="item.title">
          <div>
            <div
              :id="`group-${groupIndex}-item-${itemIndex}-title`"
              data-observe
              :class="[
                durationClass(),
                'transform transition-all ease-in-out delay-100 group flex w-full md:w-fit items-center text-gray-400 dark:text-gray-600 cursor-pointer',
                isVisible(`group-${groupIndex}-item-${itemIndex}-title`)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0',
              ]"
              :data-active="isActive(`${groupIndex}-${itemIndex}`)"
              @click="toggleExpand(`${groupIndex}-${itemIndex}`)"
            >
              <div class="flex items-center">
                <ArrowRightIcon
                  class="h-4 w-4 mr-3 fill-gray-400 group-hover:fill-gray-800 dark:fill-gray-400 dark:group-hover:fill-gray-200 transition-transform duration-300"
                  :class="[
                    isExpanded(`${groupIndex}-${itemIndex}`)
                      ? '-rotate-90 group-hover:translate-y-0.5'
                      : 'rotate-90 group-hover:translate-y-0.5',
                  ]"
                />
              </div>
              <div class="flex flex-col">
                <h3
                  class="text-xl md:text-2xl text-gray-800 dark:text-gray-100 font-bold"
                >
                  {{ item.title }}
                </h3>
                <span
                  v-if="item.tag"
                  class="text-sm text-gray-500 dark:text-gray-400"
                >
                  {{ item.tag }}
                </span>
              </div>
            </div>
            <Transition
              :enter-active-class="`${durationClass()} transition-all ease-out`"
              :enter-from-class="'transform translate-y-8 opacity-0'"
              :enter-to-class="'transform translate-y-0 opacity-100'"
              :leave-active-class="`${durationClass()} transition-all ease-in`"
              :leave-from-class="'transform translate-y-0 opacity-100'"
              :leave-to-class="'transform translate-y-8 opacity-0'"
            >
              <div
                v-if="isExpanded(`${groupIndex}-${itemIndex}`)"
                class="flex flex-col gap-6 mt-4 ml-6"
              >
                <p v-if="item.additionalInfo">
                  <span v-if="additionalInfoLabel" class="font-bold"
                    >{{ additionalInfoLabel }}
                  </span>
                  {{ item.additionalInfo }}
                </p>
                <div v-for="sublist in item.sublists" :key="sublist.title">
                  <h4 v-if="sublist.title" class="font-bold mb-4">
                    {{ sublist.title }}
                  </h4>
                  <ul class="space-y-3 list-disc px-4">
                    <li v-for="subItem in sublist.items" :key="subItem.text">
                      {{ subItem.text }}
                    </li>
                  </ul>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div v-for="(item, index) in items as ListItem[]" :key="item.title">
        <div>
          <div
            :id="`item-${index}-title`"
            data-observe
            :class="[
              durationClass(),
              'transform transition-all ease-in-out delay-100 group flex w-full md:w-fit items-center text-gray-400 dark:text-gray-600 cursor-pointer',
              isVisible(`item-${index}-title`)
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0',
            ]"
            :data-active="isActive(index.toString())"
            @click="toggleExpand(index.toString())"
          >
            <div class="flex items-center">
              <ArrowRightIcon
                class="h-4 w-4 mr-3 fill-gray-400 group-hover:fill-gray-800 dark:fill-gray-400 dark:group-hover:fill-gray-200 transition-transform duration-300"
                :class="[
                  isExpanded(index.toString())
                    ? '-rotate-90 group-hover:translate-y-0.5'
                    : 'rotate-90 group-hover:translate-y-0.5',
                ]"
              />
            </div>
            <div class="flex flex-col">
              <h3
                class="text-xl md:text-2xl text-gray-800 dark:text-gray-100 font-bold"
              >
                {{ item.title }}
              </h3>
              <span
                v-if="item.tag"
                class="text-sm text-gray-500 dark:text-gray-400"
              >
                {{ item.tag }}
              </span>
            </div>
          </div>
          <Transition
            :enter-active-class="`${durationClass()} transition-all ease-out`"
            :enter-from-class="'transform translate-y-8 opacity-0'"
            :enter-to-class="'transform translate-y-0 opacity-100'"
            :leave-active-class="`${durationClass()} transition-all ease-in`"
            :leave-from-class="'transform translate-y-0 opacity-100'"
            :leave-to-class="'transform translate-y-8 opacity-0'"
          >
            <div
              v-if="isExpanded(index.toString())"
              class="flex flex-col gap-6 mt-4 ml-6"
            >
              <p v-if="item.additionalInfo">
                <span v-if="additionalInfoLabel" class="font-bold"
                  >{{ additionalInfoLabel }}
                </span>
                {{ item.additionalInfo }}
              </p>
              <div v-for="sublist in item.sublists" :key="sublist.title">
                <h4 v-if="sublist.title" class="font-bold mb-4">
                  {{ sublist.title }}
                </h4>
                <ul class="space-y-3 list-disc px-4">
                  <li v-for="subItem in sublist.items" :key="subItem.text">
                    {{ subItem.text }}
                  </li>
                </ul>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.group {
  @apply hover:text-gray-600 dark:hover:text-gray-100;
}

.group[data-active="true"] {
  @apply text-gray-600 dark:text-gray-100;
}

.svg-icon {
  @apply fill-gray-400;
}

.group:hover .svg-icon,
.group[data-active="true"] .svg-icon {
  @apply fill-gray-800 dark:fill-gray-200;
}

@media (hover: none) {
  .group:hover {
    @apply text-gray-400 dark:text-gray-600;
  }

  .group:hover .svg-icon {
    @apply fill-gray-400 dark:fill-gray-400;
  }
}
</style>
