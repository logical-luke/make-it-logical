<script setup lang="ts">
import { ref, watch, onMounted } from "vue";

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
  <button
    type="button"
    aria-label="Toggle Theme"
    class="flex items-center"
    @click="toggleTheme"
  >
    <i
      class="text-2xl md:text-xl transition-all duration-300 ease-in-out transform'"
      :class="isDarkTheme ? 'pi pi-sun' : 'pi pi-moon'"
    ></i>
  </button>
</template>
