<script setup lang="ts">
import { ref } from "vue";
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

defineProps<{
  items: ListItem[];
  showNumbers: boolean;
  additionalInfoLabel?: string;
}>();

const expandedSublists = ref(new Set<string>());

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
</script>

<template>
  <div class="flex flex-col gap-12 max-w-4xl">
    <div v-for="(item, index) in items" :key="item.title">
      <div>
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
        <div class="flex flex-col gap-10 mt-4">
          <p v-if="item.additionalInfo">
            <span v-if="additionalInfoLabel" class="font-bold">{{
              additionalInfoLabel
            }}</span>
            {{ item.additionalInfo }}
          </p>
          <div
            v-for="(sublist, index) in item.sublists"
            :key="sublist.title"
            class="flex flex-col gap-6"
          >
            <div
              v-if="sublist.title"
              class="group flex items-center hover:text-gray-600 dark:hover:text-gray-200 text-gray-400 dark:text-gray-600 cursor-pointer"
              @click="
                sublist.expandable && toggleExpand(item.title, index)
              "
            >
              <ArrowChevronRightIcon
                v-if="sublist.expandable"
                class="h-4 w-4 mr-3 fill-gray-400 group-hover:fill-gray-800 dark:fill-gray-400 dark:group-hover:fill-gray-200 transition-transform duration-300"
                :class="[
                  { 'rotate-180': isExpanded(item.title, index) },
                  isExpanded(item.title, index)
                    ? 'group-hover:translate-y-0.5'
                    : 'group-hover:translate-y-0.5',
                ]"
              />
              <h4
                class="text-medium text-gray-800 dark:text-gray-200 font-bold"
              >
                {{ sublist.title }}
              </h4>
            </div>
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="transform translate-y-4 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
              leave-active-class="transition-all duration-300 ease-in"
              leave-from-class="transform translate-y-0 opacity-100"
              leave-to-class="transform translate-y-4 opacity-0"
            >
              <ul
                v-if="
                  !sublist.expandable || isExpanded(item.title, index)
                "
                class="space-y-3 list-disc px-4 ml-6"
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
  </div>
</template>
