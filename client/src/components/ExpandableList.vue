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
  expandable?: boolean;
  description?: string;
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
const expandedGroups = ref(new Set<string>());
const expandedItems = ref(new Set<string>());
const visibleItems = ref(new Set<string>());

const toggleExpand = (key: string, type: "group" | "item") => {
  const targetSet =
    type === "group" ? expandedGroups.value : expandedItems.value;
  if (targetSet.has(key)) {
    targetSet.delete(key);
  } else {
    targetSet.add(key);
  }
};

const isExpanded = (key: string, type: "group" | "item") =>
  type === "group"
    ? expandedGroups.value.has(key)
    : expandedItems.value.has(key);
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
        <div
          :id="`group-${groupIndex}-title`"
          data-observe
          :class="[
            durationClass(),
            'transform transition-all ease-in-out delay-100 max-w-4xl text-2xl md:text-3xl font-bold group flex items-center cursor-pointer',
            isVisible(`group-${groupIndex}-title`)
              ? 'translate-y-0'
              : 'translate-y-4',
          ]"
          @click="toggleExpand(groupIndex.toString(), 'group')"
        >
          <div class="flex-shrink-0 mr-3">
            <ArrowRightIcon
              class="h-5 w-5 fill-gray-400 group-hover:fill-gray-800 dark:fill-gray-400 dark:group-hover:fill-gray-200 transition-transform duration-300"
              :class="[
                isExpanded(groupIndex.toString(), 'group')
                  ? '-rotate-90 group-hover:translate-y-0.5'
                  : 'rotate-90 group-hover:translate-y-0.5',
              ]"
            />
          </div>
          <h2 class="text-gray-800 dark:text-gray-100 break-words">
            {{ group.name }}
          </h2>
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
            v-if="isExpanded(groupIndex.toString(), 'group')"
            class="ml-8 flex flex-col gap-8"
          >
            <div v-for="(item, itemIndex) in group.items" :key="item.title">
              <div
                :id="`group-${groupIndex}-item-${itemIndex}-title`"
                data-observe
                :class="[
                  durationClass(),
                  'transform transition-all ease-in-out delay-100 group flex w-full md:w-fit items-center text-gray-400 dark:text-gray-600 cursor-pointer',
                ]"
                @click="toggleExpand(`${groupIndex}-${itemIndex}`, 'item')"
              >
                <div class="flex-shrink-0 mr-3">
                  <ArrowRightIcon
                    class="h-4 w-4 fill-gray-400 group-hover:fill-gray-800 dark:fill-gray-400 dark:group-hover:fill-gray-200 transition-transform duration-300"
                    :class="[
                      isExpanded(`${groupIndex}-${itemIndex}`, 'item')
                        ? '-rotate-90 group-hover:translate-y-0.5'
                        : 'rotate-90 group-hover:translate-y-0.5',
                    ]"
                  />
                </div>
                <div class="flex flex-col">
                  <h3
                    class="text-xl md:text-2xl text-gray-800 dark:text-gray-100 font-bold break-words"
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
                  v-if="isExpanded(`${groupIndex}-${itemIndex}`, 'item')"
                  class="flex flex-col gap-8 mt-6 ml-7"
                >
                  <p v-if="item.additionalInfo">
                    <span v-if="additionalInfoLabel" class="font-bold">
                      {{ additionalInfoLabel }}
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
        </Transition>
      </div>
    </template>
    <template v-else>
      <div v-for="(item, index) in items as ListItem[]" :key="item.title">
        <div
          :id="`item-${index}-title`"
          data-observe
          :class="[
            durationClass(),
            'transform transition-all ease-in-out delay-100 group flex w-full md:w-fit items-center text-gray-400 dark:text-gray-600 cursor-pointer',
          ]"
          @click="toggleExpand(index.toString(), 'item')"
        >
          <div class="flex-shrink-0 mr-3">
            <ArrowRightIcon
              class="h-4 w-4 fill-gray-400 group-hover:fill-gray-800 dark:fill-gray-400 dark:group-hover:fill-gray-200 transition-transform duration-300"
              :class="[
                isExpanded(index.toString(), 'item')
                  ? '-rotate-90 group-hover:translate-y-0.5'
                  : 'rotate-90 group-hover:translate-y-0.5',
              ]"
            />
          </div>
          <div class="flex flex-col">
            <h2
              class="text-xl md:text-2xl text-gray-800 dark:text-gray-100 font-bold break-words"
            >
              {{ item.title }}
            </h2>
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
            v-if="isExpanded(index.toString(), 'item')"
            class="flex flex-col gap-8 mt-4 ml-7"
          >
            <p v-if="item.additionalInfo">
              <span v-if="additionalInfoLabel" class="font-bold">
                {{ additionalInfoLabel }}
              </span>
              {{ item.additionalInfo }}
            </p>
            <div v-for="sublist in item.sublists" :key="sublist.title">
              <h3 v-if="sublist.title" class="font-bold mb-4">
                {{ sublist.title }}
              </h3>
              <ul class="space-y-3 list-disc px-4">
                <li v-for="subItem in sublist.items" :key="subItem.text">
                  {{ subItem.text }}
                </li>
              </ul>
            </div>
          </div>
        </Transition>
      </div>
    </template>
  </div>
</template>
