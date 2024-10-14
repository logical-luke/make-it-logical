<script setup lang="ts">
import LinkItem from "@/components/LinkItem.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const isContact = computed(() => route.path === "/contact");

const navLinks = [
  { name: "Services", path: "/services" },
  { name: "Process", path: "/process" },
  { name: "Contact", path: "/contact" },
];

const legalLinks = [
  { name: "Terms", path: "/terms" },
  { name: "Privacy", path: "/privacy" },
];
</script>

<template>
  <footer class="py-8 px-6">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row justify-between gap-6">
        <div class="flex flex-col md:w-1/2 mb-8 md:mb-0">
          <div v-if="!isContact" class="mb-6">
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-2">
              Spark your
            </p>
            <LinkItem
              :disable-icon="true"
              :external="true"
              to="mailto:vision@makeitlogical.io"
              class="text-sm"
            >
              vision@makeitlogical.io
            </LinkItem>
          </div>
          <div class="flex gap-4 mt-6 md:mt-auto order-3 md:order-none">
            <LinkItem
              v-for="item in legalLinks"
              :key="item.name"
              :to="item.path"
              :disable-icon="true"
              :less-contrast="true"
            >
              {{ item.name }}
            </LinkItem>
          </div>
        </div>

        <div class="flex flex-col md:w-1/2 md:items-end">
          <nav class="order-2 md:order-none mb-6 md:mb-0">
            <ul
              class="flex flex-col md:flex-row gap-6 items-start md:items-end"
              :class="isContact ? 'md:hidden' : ''"
            >
              <li
                v-for="item in navLinks"
                :key="item.name"
                class="mb-4 md:mb-6"
              >
                <LinkItem :to="item.path" :disable-icon="true">
                  {{ item.name }}
                </LinkItem>
              </li>
            </ul>
          </nav>
          <div class="order-4 md:order-none mt-6">
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              &copy; 2024 <span class="font-bold">Make IT Logical</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
