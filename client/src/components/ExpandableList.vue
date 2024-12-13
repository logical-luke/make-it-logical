<script setup lang="ts">
import { ref } from "vue";
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

defineProps<{
  items: ListItem[] | Group[];
  additionalInfoLabel?: string;
  grouped?: boolean;
}>();

const expandedGroups = ref(new Set<string>());
const expandedItems = ref(new Set<string>());

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
</script>

<template>
  <div class="flex flex-col gap-12 max-w-4xl">
    <template v-if="grouped">
      <div
        v-for="(group, groupIndex) in items as Group[]"
        :key="group.name"
        class="flex flex-col gap-8 max-w-4xl"
      >
        <div
          class="max-w-4xl text-2xl md:text-3xl font-bold group flex items-center cursor-pointer"
          @click="toggleExpand(groupIndex.toString(), 'group')"
        >
          <div class="flex-shrink-0 mr-3">
            <ArrowRightIcon
              class="h-6 w-6 fill-gray-400 group-hover:fill-gray-800 dark:fill-gray-400 dark:group-hover:fill-gray-200 transition-all duration-200"
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
          enter-active-class="duration-200 transition-all ease-out"
          enter-from-class="transform translate-y-8 opacity-5"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="duration-200 transition-all ease-in"
          leave-from-class="transform translate-y-0 opacity-100"
          leave-to-class="transform translate-y-8 opacity-5"
        >
          <div
            v-if="isExpanded(groupIndex.toString(), 'group')"
            class="ml-8 flex flex-col gap-8"
          >
            <div v-for="(item, itemIndex) in group.items" :key="item.title">
              <div
                class="transform transition-all ease-in-out delay-100 group flex w-full md:w-fit items-center text-gray-400 dark:text-gray-600 cursor-pointer"
                @click="toggleExpand(`${groupIndex}-${itemIndex}`, 'item')"
              >
                <div class="flex-shrink-0 mr-3">
                  <ArrowRightIcon
                    class="h-5 w-5 fill-gray-400 group-hover:fill-gray-800 dark:fill-gray-400 dark:group-hover:fill-gray-200 transition-transform duration-200"
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
                    class="text-sm text-gray-600 dark:text-gray-400"
                  >
                    {{ item.tag }}
                  </span>
                </div>
              </div>
              <Transition
                enter-active-class="duration-200 transition-all ease-out"
                enter-from-class="transform translate-y-8 opacity-5"
                enter-to-class="transform translate-y-0 opacity-100"
                leave-active-class="duration-200 transition-all ease-in"
                leave-from-class="transform translate-y-0 opacity-100"
                leave-to-class="transform translate-y-8 opacity-5"
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
          class="group flex w-full md:w-fit items-center text-gray-400 dark:text-gray-600 cursor-pointer"
          @click="toggleExpand(index.toString(), 'item')"
        >
          <div class="flex-shrink-0 mr-3">
            <ArrowRightIcon
              class="h-5 w-5 fill-gray-400 group-hover:fill-gray-800 dark:fill-gray-400 dark:group-hover:fill-gray-200 transition-transform duration-200"
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
              class="text-sm text-gray-600 dark:text-gray-500"
            >
              {{ item.tag }}
            </span>
          </div>
        </div>
        <Transition
          enter-active-class="duration-200 transition-all ease-out"
          enter-from-class="transform translate-y-8 opacity-5"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="duration-200 transition-all ease-in"
          leave-from-class="transform translate-y-0 opacity-100"
          leave-to-class="transform translate-y-8 opacity-5"
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
