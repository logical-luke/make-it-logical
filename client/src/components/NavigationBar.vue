<script setup lang="ts">
import { ref, onMounted, watch, inject } from "vue";
import { useRoute } from "vue-router";
import ThemeToggleButton from "@/components/ThemeToggleButton.vue";
import LinkItem from "@/components/LinkItem.vue";

const route = useRoute();
const lastScrollTop = ref(0);
const isNavVisible = ref(true);
const scrollThreshold = 3;
const mobileMenuOpen = ref(false);
const isAtTop = ref(true);
const transitionTrigger = inject("transitionTrigger", ref(0));

watch(
  transitionTrigger,
  () => {
    mobileMenuOpen.value = false;
  },
  { immediate: true },
);

const checkScrollPosition = () => {
  isAtTop.value = window.scrollY === 0;
};

const navItems = ref([
  { id: 1, name: "Services", path: "/services" },
  { id: 2, name: "Process", path: "/process" },
  { id: 3, name: "Contact", path: "/contact" },
]);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  isNavVisible.value = true;
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

  checkScrollPosition();
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  checkScrollPosition();
});

const lockScroll = () => {
  document.body.style.overflow = "hidden";
};

const unlockScroll = () => {
  document.body.style.overflow = "";
};

watch(mobileMenuOpen, (newValue) => {
  if (newValue) {
    lockScroll();
  } else {
    unlockScroll();
  }
});
</script>

<template>
  <header
    v-show="isNavVisible"
    :class="[
      'bg-gray-100 dark:bg-zinc-900 py-6 px-6 fixed w-full z-40 h-20',
      'transition-shadow duration-700 ease-in-out',
      { 'shadow-md': !isAtTop && !mobileMenuOpen },
    ]"
  >
    <div class="container mx-auto flex justify-between items-center">
      <RouterLink to="/" class="flex-shrink-0">
        <div class="flex items-center gap-4">
          <img
            src="@/assets/logo.svg"
            height="40"
            width="27"
            alt="Make IT Logical Logo"
            class="h-10 w-auto"
          />
          <span
            class="text-lg md:text-2xl text-black dark:text-gray-200 font-bold"
          >
            Make IT Logical
          </span>
        </div>
      </RouterLink>

      <div class="flex items-center space-x-6">
        <nav class="hidden md:flex">
          <ul class="flex space-x-6 items-center">
            <li v-for="item in navItems" :key="item.id">
              <RouterLink
                :to="item.path"
                class="text-base transition-colors duration-300 hover:underline underline-offset-8"
                :class="{ underline: route.path === item.path }"
              >
                {{ item.name }}
              </RouterLink>
            </li>
          </ul>
        </nav>
        <Transition
          enter-active-class="duration-500 ease-in-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="duration-500 ease-in-out"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ThemeToggleButton v-if="mobileMenuOpen" />
        </Transition>
        <button
          type="button"
          :aria-label="mobileMenuOpen ? 'Close Menu' : 'Open Menu'"
          class="md:hidden z-50 w-8 h-8 flex items-center justify-center"
          @click="toggleMobileMenu"
        >
          <i
            :class="[
              'text-2xl transition-all duration-300 ease-in-out transform',
              mobileMenuOpen ? 'pi pi-times rotate-90' : 'pi pi-bars',
            ]"
          ></i>
        </button>
      </div>
    </div>
  </header>

  <Transition
    enter-active-class="duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-100 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="mobileMenuOpen"
      class="fixed inset-0 z-30 bg-gray-100 dark:bg-zinc-900 md:hidden"
    >
      <div class="flex flex-col h-full pt-20 px-6">
        <nav class="mt-8">
          <ul class="space-y-6">
            <li v-for="item in navItems" :key="item.id">
              <RouterLink
                :to="item.path"
                class="text-2xl transition-colors duration-300 underline-offset-8 hover:underline"
                :class="{ underline: route.path === item.path }"
              >
                {{ item.name }}
              </RouterLink>
            </li>
          </ul>
        </nav>
        <div class="mt-auto pb-6 flex justify-between items-center">
          <LinkItem
            :disable-icon="true"
            :external="true"
            to="mailto:vision@makeitlogical.io"
            class="text-sm"
          >
            vision@makeitlogical.io
          </LinkItem>
        </div>
      </div>
    </div>
  </Transition>
</template>
