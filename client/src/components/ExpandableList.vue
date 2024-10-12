<script setup lang="ts">
import { ref } from "vue";
import ArrowChevronRightIcon from "@/components/ArrowChevronRightIcon.vue";

interface ListItem {
  title: string;
  sublists: { title?: string; items: { text: string }[] }[];
  additionalInfo?: string;
}

defineProps<{
  items: ListItem[];
  showNumbers: boolean;
  additionalInfoLabel?: string;
}>();

const expandedItems = ref(new Set<number>());

const toggleExpand = (index: number) => {
  if (expandedItems.value.has(index)) {
    expandedItems.value.delete(index);
  } else {
    expandedItems.value.add(index);
  }
};

const isExpanded = (index: number) => expandedItems.value.has(index);
</script>

<template>
  <div class="flex flex-col gap-6 max-w-4xl">
    <div v-for="(item, index) in items" :key="item.title">
      <div>
        <div
          class="group flex w-fit items-center hover:text-gray-600 dark:hover:text-gray-200 text-gray-400 dark:text-gray-600 cursor-pointer"
          @click="toggleExpand(index)"
        >
          <div
            v-if="showNumbers"
            class="text-2xl font-bold mr-2 text-gray-800 dark:text-gray-200"
          >
            {{ index + 1 }}.
          </div>
          <h3
            class="text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-bold"
          >
            {{ item.title }}
          </h3>
          <ArrowChevronRightIcon
            class="h-4 -ml-2 fill-gray-400 group-hover:fill-gray-800 dark:fill-gray-400 dark:group-hover:fill-gray-200 transition-transform duration-300"
            :class="[
              { 'rotate-180': isExpanded(index) },
              isExpanded(index)
                ? 'group-hover:-translate-y-0.5'
                : 'group-hover:translate-y-0.5',
            ]"
          />
        </div>
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="transform translate-y-8 opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="transform translate-y-0 opacity-100"
          leave-to-class="transform translate-y-8 opacity-0"
        >
          <div v-if="isExpanded(index)" class="flex flex-col gap-6 mt-4">
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