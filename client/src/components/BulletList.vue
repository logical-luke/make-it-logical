<script setup lang="ts">
import { ref } from "vue";
import ArrowRightIcon from "@/components/ArrowRightIcon.vue";

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
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};
const isExpanded = (itemTitle: string, index: number) => {
  return expandedSublists.value.has(`${itemTitle}-${index}`);
};
</script>

<template>
  <div class="flex flex-col gap-12 max-w-4xl">
    <div v-for="(item, index) in items" :key="item.title">
      <div
        :id="`item-${index}-title`"
        data-observe
        class="transform transition-all ease-in-out delay-100 duration-1300"
      >
        <div
          class="group flex items-center hover:text-gray-600 dark:hover:text-gray-100 text-gray-400 dark:text-gray-600 pt-4 pb-2"
        >
          <div class="flex flex-col text-2xl md:text-3xl font-bold">
            <div v-if="showNumbers" class="text-gray-500 dark:text-gray-400">
              {{ index + 1 }}.
            </div>
            <h3
              :class="
                showNumbers
                  ? 'text-gray-800 dark:text-gray-100'
                  : 'text-gray-500 dark:text-gray-400'
              "
            >
              {{ item.title }}
            </h3>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-10 mt-4">
        <p v-if="item.additionalInfo">
          <span v-if="additionalInfoLabel" class="font-semibold">{{
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
            :class="[
              sublist.expandable ? 'cursor-pointer' : '',
              'roup flex items-center hover:text-gray-600 dark:hover:text-gray-100 text-gray-400 dark:text-gray-600',
            ]"
            @click="sublist.expandable && toggleExpand(item.title, subIndex)"
          >
            <ArrowRightIcon
              v-if="sublist.expandable"
              class="h-4 w-4 mr-3 fill-gray-400 group-hover:fill-gray-800 dark:fill-gray-400 dark:group-hover:fill-gray-200 transition-transform duration-300"
              :class="[
                isExpanded(item.title, subIndex)
                  ? '-rotate-90 group-hover:translate-y-0.5'
                  : 'rotate-90 group-hover:translate-y-0.5',
              ]"
            />
            <h4
              class="text-medium text-gray-800 dark:text-gray-100 font-semibold"
            >
              {{ sublist.title }}
            </h4>
          </div>

          <Transition
            enter-active-class="duration-400 transition-all ease-in-out"
            enter-from-class="transform translate-y-4 opacity-5"
            enter-to-class="transform translate-y-0 opacity-100"
            leave-active-class="duration-400 transition-all ease-in-out"
            leave-from-class="transform translate-y-0 opacity-100"
            leave-to-class="transform translate-y-4 opacity-5"
          >
            <ul
              v-if="!sublist.expandable || isExpanded(item.title, subIndex)"
              :class="['space-y-3 list-disc px-4 ml-6']"
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
