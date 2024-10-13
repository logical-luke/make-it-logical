<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import ArrowChevronRightIcon from "@/components/ArrowChevronRightIcon.vue";

interface ListItem {
  title: string;
  sublists: {
    title?: string;
    expandable?: boolean;
    items: { text: string }[];
  }[];
  additionalInfo?: string;
}

const props = defineProps<{
  items: ListItem[];
  showNumbers: boolean;
  additionalInfoLabel?: string;
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

const expandedSublists = ref(new Set<string>());
const visibleItems = ref(new Set<string>());

const toggleExpand = (itemTitle: string, index: number) => {
  const key = `${itemTitle}-${index}`;
  if (expandedSublists.value.has(key)) {
    expandedSublists.value.delete(key);
  } else {
    expandedSublists.value.add(key);
  }
};

const isExpanded = (itemTitle: string, index: number) => {
  return expandedSublists.value.has(`${itemTitle}-${index}`);
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
          }, 100); // Add a small delay before showing the item
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
  <div class="flex flex-col gap-12 max-w-4xl">
    <div v-for="(item, index) in items" :key="item.title">
      <div
        :id="`item-${index}-title`"
        data-observe
        :class="[
          durationClass(),
          'transform transition-all ease-in-out delay-100',
          isVisible(`item-${index}-title`)
            ? 'translate-y-0 opacity-100'
            : 'translate-y-4 opacity-0',
        ]"
      >
        <div
          class="group flex items-center hover:text-gray-600 dark:hover:text-gray-200 text-gray-400 dark:text-gray-600 cursor-pointer"
        >
          <div class="flex items-center">
            <div
              v-if="showNumbers"
              class="text-2xl font-bold mr-2 text-gray-800 dark:text-gray-200"
            >
              {{ index + 1 }}.
            </div>
          </div>
          <h3
            class="text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-bold"
          >
            {{ item.title }}
          </h3>
        </div>
      </div>

      <div class="flex flex-col gap-10 mt-4">
        <p
          v-if="item.additionalInfo"
          :id="`item-${index}-info`"
          data-observe
          :class="[
            durationClass(),
            'transform transition-all ease-in-out delay-100',
            isVisible(`item-${index}-info`)
              ? 'translate-y-0 opacity-100'
              : 'translate-y-4 opacity-0',
          ]"
        >
          <span v-if="additionalInfoLabel" class="font-bold">{{
            additionalInfoLabel
          }}</span>
          {{ item.additionalInfo }}
        </p>

        <div
          v-for="(sublist, subIndex) in item.sublists"
          :key="sublist.title"
          class="flex flex-col gap-6"
        >
          <div
            v-if="sublist.title"
            :id="`item-${index}-sublist-${subIndex}-title`"
            data-observe
            :class="[
              durationClass(),
              'transform transition-all ease-in-out delay-100 group flex items-center hover:text-gray-600 dark:hover:text-gray-200 text-gray-400 dark:text-gray-600 cursor-pointer',
              isVisible(`item-${index}-sublist-${subIndex}-title`)
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0',
            ]"
            @click="sublist.expandable && toggleExpand(item.title, subIndex)"
          >
            <ArrowChevronRightIcon
              v-if="sublist.expandable"
              class="h-4 w-4 mr-3 fill-gray-400 group-hover:fill-gray-800 dark:fill-gray-400 dark:group-hover:fill-gray-200 transition-transform duration-300"
              :class="[
                { 'rotate-180': isExpanded(item.title, subIndex) },
                isExpanded(item.title, subIndex)
                  ? 'group-hover:translate-y-0.5'
                  : 'group-hover:translate-y-0.5',
              ]"
            />
            <h4 class="text-medium text-gray-800 dark:text-gray-200 font-bold">
              {{ sublist.title }}
            </h4>
          </div>

          <Transition
            :enter-active-class="`${durationClass()} transition-all ease-in-out delay-100`"
            enter-from-class="transform translate-y-4 opacity-0"
            enter-to-class="transform translate-y-0 opacity-100"
            :leave-active-class="`${durationClass()} transition-all ease-in-out`"
            leave-from-class="transform translate-y-0 opacity-100"
            leave-to-class="transform translate-y-4 opacity-0"
          >
            <ul
              v-if="!sublist.expandable || isExpanded(item.title, subIndex)"
              :id="`item-${index}-sublist-${subIndex}-items`"
              data-observe
              :class="[
                durationClass(),
                'transform transition-all ease-in-out delay-100 space-y-3 list-disc px-4 ml-6',
                isVisible(`item-${index}-sublist-${subIndex}-items`)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0',
              ]"
            >
              <li v-for="subItem in sublist.items" :key="subItem.text">
                {{ subItem.text }}
              </li>
            </ul>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>
