<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import SunIcon from "@/components/SunIcon.vue";
import MoonIcon from "@/components/MoonIcon.vue";
import FadeTransition from "@/components/FadeTransition.vue";

const isDarkTheme = ref(false);

const setDarkTheme = (value: boolean) => {
  isDarkTheme.value = value;
  localStorage.setItem("darkTheme", value.toString());
  if (value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const initializeTheme = () => {
  const storedTheme = localStorage.getItem("darkTheme");
  if (storedTheme !== null) {
    setDarkTheme(storedTheme === "true");
  } else {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setDarkTheme(prefersDark);
  }
};

const toggleTheme = () => {
  setDarkTheme(!isDarkTheme.value);
};

onMounted(() => {
  initializeTheme();
});

watch(
  () => window.matchMedia("(prefers-color-scheme: dark)").matches,
  (newValue) => {
    if (localStorage.getItem("darkTheme") === null) {
      setDarkTheme(newValue);
    }
  },
);
</script>

<template>
  <FadeTransition duration="1300">
    <button
      type="button"
      aria-label="Toggle Theme"
      class="flex items-center justify-center w-8 h-8"
      @click="toggleTheme"
    >
      <span class="relative w-6 h-6">
        <SunIcon
          v-if="!isDarkTheme"
          class="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out"
        />
        <MoonIcon
          v-else
          class="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out"
        />
      </span>
    </button>
  </FadeTransition>
</template>
