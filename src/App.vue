<script setup lang="ts">
import { ref } from 'vue';
import HomeView from '@/views/HomeView.vue'
import Button from 'primevue/button';

const navItems = ref([
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'Services', href: '#services' },
  { id: 3, name: 'Process', href: '#process' },
  { id: 4, name: 'Team', href: '#team' },
  { id: 5, name: 'Contact', href: '#contact' },
]);

const mobileMenuOpen = ref(false);

const scrollTo = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  mobileMenuOpen.value = false;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-midnight-green-800 transition-colors duration-300">
    <header class="bg-white dark:bg-midnight-green-800 py-4 px-6 fixed w-full z-50 transition-colors duration-300">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <img src="@/assets/logo.svg" alt="Make IT Logical Logo" class="h-10 w-auto">
          <span class="text-2xl font-bold text-honolulu-blue-600 dark:text-honolulu-blue-400">Make IT Logical</span>
        </div>
        <nav class="hidden md:flex items-center">
          <ul class="flex space-x-6">
            <li v-for="item in navItems" :key="item.id">
              <a :href="item.href" class="text-midnight-green-600 dark:text-silver-300 hover:text-honolulu-blue-600 dark:hover:text-honolulu-blue-400 transition-colors duration-300" @click.prevent="scrollTo(item.href)">{{ item.name }}</a>
            </li>
          </ul>
        </nav>
        <Button icon="pi pi-bars" class="p-button-text md:hidden text-midnight-green-600 dark:text-silver-300" @click="toggleMobileMenu" />
      </div>
    </header>

    <div v-if="mobileMenuOpen" class="fixed inset-0 z-50 bg-white dark:bg-midnight-green-900 md:hidden">
      <div class="flex flex-col h-full">
        <div class="flex justify-end p-4">
          <Button icon="pi pi-times" class="p-button-text text-midnight-green-600 dark:text-silver-300" @click="toggleMobileMenu" />
        </div>
        <nav class="flex-grow flex items-center justify-center">
          <ul class="space-y-6 text-center">
            <li v-for="item in navItems" :key="item.id">
              <a :href="item.href" class="text-2xl text-midnight-green-600 dark:text-silver-300 hover:text-honolulu-blue-600 dark:hover:text-honolulu-blue-400 transition-colors duration-300" @click.prevent="scrollTo(item.href)">{{ item.name }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <main class="pt-20">
      <HomeView :scrollTo="scrollTo" />
    </main>

    <footer class="bg-honolulu-blue-600 dark:bg-lapis-lazuli-800 text-white py-8 px-6 transition-colors duration-300">
      <div class="max-w-7xl mx-auto text-center">
        <p>&copy; {{ new Date().getFullYear() }} Make IT Logical. All rights reserved.</p>
        <p class="mt-2 text-sm">Empowering businesses with innovative digital solutions.</p>
      </div>
    </footer>
  </div>
</template>