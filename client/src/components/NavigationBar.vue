<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import ThemeToggleButton from "@/components/ThemeToggleButton.vue";
import LinkItem from "@/components/LinkItem.vue";

const route = useRoute();
const lastScrollTop = ref(0);
const isNavVisible = ref(true);
const scrollThreshold = 3;
const mobileMenuOpen = ref(false);
const navItems = ref([
  { id: 1, name: "Services", path: "/services" },
  { id: 2, name: "Process", path: "/process" },
  { id: 3, name: "Contact", path: "/contact" }
]);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const handleScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollDifference = scrollTop - lastScrollTop.value;

  if (scrollTop === 0) {
    isNavVisible.value = true;
  } else if (scrollDifference > scrollThreshold) {
    isNavVisible.value = false;
  } else if (scrollDifference < -scrollThreshold) {
    isNavVisible.value = true;
  }

  lastScrollTop.value = scrollTop <= 0 ? 0 : scrollTop;
};

const isMainPage = computed(() => route.path === "/");

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<template>
  <Transition
    enter-active-class="duration-300 ease-out"
    enter-from-class="transform -translate-y-full"
    enter-to-class="transform translate-y-0"
    leave-active-class="duration-200 ease-in"
    leave-from-class="transform translate-y-0"
    leave-to-class="transform -translate-y-full"
  >
    <header
      v-if="isNavVisible"
      class="bg-white dark:bg-zinc-900 py-6 px-6 fixed w-full z-40 h-20"
    >
      <div class="container mx-auto flex justify-between items-center">
        <RouterLink to="/">
          <div class="flex items-center md:gap-4">
            <img
              src="@/assets/logo.svg"
              height="40"
              width="27"
              alt="Make IT Logical Logo"
              class="h-10 w-auto"
            />
            <Component
              :is="isMainPage ? 'h1' : 'span'"
              class="text-2xl hidden md:block text-black dark:text-gray-200 font-bold"
            >
              Make IT Logical
            </Component>
          </div>
        </RouterLink>
        <nav :class="{ hidden: !mobileMenuOpen, 'md:flex': true }">
          <ul
            class="flex md:flex-row flex-col space-y-6 md:space-y-0 md:space-x-6 items-center"
          >
            <li v-for="item in navItems" :key="item.id">
              <RouterLink
                :to="item.path"
                class="text-2xl md:text-base transition-colors duration-300 hover:underline underline-offset-8"
                :class="{ underline: route.path === item.path }"
              >
                {{ item.name }}
              </RouterLink>
            </li>
            <li>
              <ThemeToggleButton />
            </li>
          </ul>
        </nav>
        <button
          type="button"
          aria-label="Open Menu"
          class="md:hidden"
          @click="toggleMobileMenu"
        >
          <i class="pi pi-bars text-2xl"></i>
        </button>
      </div>
    </header>
  </Transition>
  <Transition
    enter-active-class="duration-200 ease-out"
    enter-from-class="transform -translate-y-full"
    enter-to-class="transform translate-y-0"
    leave-active-class="duration-100 ease-in"
    leave-from-class="transform translate-y-0"
    leave-to-class="transform -translate-y-full"
  >
    <div
      v-if="mobileMenuOpen"
      class="fixed inset-0 z-50 bg-white dark:bg-zinc-900 md:hidden transition-all duration-300"
    >
      <div class="flex flex-col h-full">
        <div class="py-6 px-6">
          <div class="flex justify-between items-center">
            <RouterLink
              class="flex items-center"
              to="/"
              @click="toggleMobileMenu"
            >
              <img
                src="@/assets/logo.svg"
                height="40"
                width="27"
                alt="Make IT Logical Logo"
                class="h-10 w-auto"
              />
            </RouterLink>
            <button
              type="button"
              aria-label="Close Menu"
              @click="toggleMobileMenu"
            >
              <i class="pi pi-times text-2xl"></i>
            </button>
          </div>
          <nav class="mt-8">
            <ul class="space-y-6">
              <li v-for="item in navItems" :key="item.id">
                <RouterLink
                  :to="item.path"
                  class="text-2xl transition-colors duration-300 underline-offset-8 hover:underline"
                  :class="{ underline: route.path === item.path }"
                  @click="toggleMobileMenu"
                >
                  {{ item.name }}
                </RouterLink>
              </li>
            </ul>
          </nav>
        </div>
        <div class="mt-auto pb-6 px-6 flex justify-between items-center">
          <LinkItem
            :disable-icon="true"
            :external="true"
            to="mailto:vision@makeitlogical.io"
            class="text-sm"
          >
            vision@makeitlogical.io
          </LinkItem>
          <ThemeToggleButton />
        </div>
      </div>
    </div>
  </Transition>
</template>