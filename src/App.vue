<template>
  <div :class="{ 'dark': isDarkTheme }" class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <header class="bg-white dark:bg-gray-800 shadow py-4 px-6 fixed w-full z-50 transition-colors duration-300">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <img src="@/assets/logo.svg" alt="Make IT Logical Logo" class="h-10 w-auto">
          <span class="text-2xl font-bold text-blue-600 dark:text-blue-400">Make IT Logical</span>
        </div>
        <nav class="flex items-center">
          <ul class="flex space-x-6 mr-6">
            <li v-for="item in navItems" :key="item.id">
              <a :href="item.href" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" @click.prevent="scrollTo(item.href)">{{ item.name }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="pt-20">
      <HomeView />
    </main>

    <footer class="bg-blue-600 dark:bg-blue-800 text-white py-8 px-6 transition-colors duration-300">
      <div class="max-w-7xl mx-auto text-center">
        <p>&copy; {{ new Date().getFullYear() }} Make IT Logical. All rights reserved.</p>
        <p class="mt-2 text-sm">Empowering businesses with innovative digital solutions.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HomeView from '@/views/HomeView.vue'

const navItems = ref([
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'Services', href: '#services' },
  { id: 3, name: 'Process', href: '#process' },
  { id: 4, name: 'Contact', href: '#contact' },
]);

const scrollTo = (href) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>