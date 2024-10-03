<script setup lang="ts">
import {computed, ref} from 'vue';
import {useRoute} from 'vue-router';
import Button from 'primevue/button';

const route = useRoute();
const path = computed<string | undefined>(() => route.name as string | undefined);

const navItems = ref([
  {id: 1, name: 'Home', path: '/'},
  {id: 2, name: 'Services', path: '/services'},
  {id: 3, name: 'Process', path: '/process'},
  {id: 4, name: 'Team', path: '/team'},
  {id: 5, name: 'Contact', path: '/contact'},
]);

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-midnight-green-800 transition-colors duration-300">
    <header
        class="bg-white dark:bg-midnight-green-800 py-6 px-6 fixed w-full z-40 transition-colors duration-300 h-20"
    >
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <img src="@/assets/logo.svg" height="40" width="27" alt="Make IT Logical Logo" class="h-10 w-auto">
          <span class="text-2xl font-bold text-honolulu-blue-600 dark:text-honolulu-blue-400">Make IT Logical</span>
        </div>
        <nav :class="{'hidden': !mobileMenuOpen, 'md:flex': true}">
          <ul class="flex md:flex-row flex-col space-y-6 md:space-y-0 md:space-x-6 items-center">
            <li v-for="item in navItems" :key="item.id">
              <RouterLink
                  :to="item.path"
                  class="text-2xl md:text-base transition-colors duration-300 text-midnight-green-600 dark:text-silver-300 hover:text-honolulu-blue-600 dark:hover:text-honolulu-blue-400"
                  :class="{ 'font-bold text-honolulu-blue-400': route.path === item.path }"
              >
                {{ item.name }}
              </RouterLink>
            </li>
          </ul>
        </nav>
        <Button
            icon="pi pi-bars"
            class="p-button-text md:hidden text-midnight-green-600 dark:text-silver-300"
            @click="toggleMobileMenu"
        />
      </div>
    </header>
    <div v-if="mobileMenuOpen" class="fixed inset-0 z-50 bg-white dark:bg-midnight-green-900 md:hidden">
      <div class="flex flex-col h-full">
        <div class="flex justify-end p-4">
          <Button
              icon="pi pi-times" class="p-button-text text-midnight-green-600 dark:text-silver-300"
              @click="toggleMobileMenu"
          />
        </div>
        <nav class="flex-grow flex items-center justify-center">
          <ul class="space-y-6 text-center">
            <li v-for="item in navItems" :key="item.id">
              <RouterLink
                  :to="item.path"
                  class="text-2xl md:text-base transition-colors duration-300 text-midnight-green-600 dark:text-silver-300 hover:text-honolulu-blue-600 dark:hover:text-honolulu-blue-400"
                  :class="{ 'font-bold text-honolulu-blue-400': route.path === item.path }"
                  @click="toggleMobileMenu"
              >
                {{ item.name }}
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <main class="pt-20">
      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <RouterView v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <div :key="path">
              <Component :is="Component"></Component>
            </div>
          </Transition>
        </RouterView>
      </div>
    </main>

    <footer
        class="bg-honolulu-blue-600 dark:bg-lapis-lazuli-800 text-white py-8 px-6 transition-colors duration-300"
    >
      <div class="max-w-7xl mx-auto text-center">
        <p>&copy; {{ new Date().getFullYear() }} Make IT Logical. All rights reserved.</p>
        <p class="mt-2 text-sm">Empowering businesses with innovative digital solutions.</p>
      </div>
    </footer>
  </div>
</template>

<style>
.full-width-section {
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  padding-left: calc(50vw - 50%);
  padding-right: calc(50vw - 50%);
}

.highlight {
  @apply text-honolulu-blue-500 dark:text-honolulu-blue-300 font-bold;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.p-button {
  @apply font-bold py-2 px-4 rounded transition-colors duration-300;
}

.p-button-lg {
  @apply text-lg py-3 px-6;
}

.p-button-primary {
  @apply bg-honolulu-blue-600 text-white hover:bg-honolulu-blue-700;
  @apply dark:bg-lapis-lazuli-500 dark:text-white dark:hover:bg-lapis-lazuli-600;
}

.p-button-secondary {
  @apply bg-midnight-green-600 text-white hover:bg-midnight-green-700;
  @apply dark:bg-silver-700 dark:text-midnight-green-100 dark:hover:bg-silver-600;
}

.p-button-outlined {
  @apply border-2 border-honolulu-blue-600 text-honolulu-blue-600 hover:bg-honolulu-blue-100 hover:text-honolulu-blue-700;
  @apply dark:border-lapis-lazuli-200 dark:text-lapis-lazuli-200 dark:hover:bg-lapis-lazuli-600 dark:hover:text-lapis-lazuli-100;
}
</style>