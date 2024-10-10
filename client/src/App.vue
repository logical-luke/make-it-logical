<script setup lang="ts">
import {ref, onMounted, computed, watch} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();

const navItems = ref([
  {id: 1, name: 'Services', path: '/services'},
  {id: 2, name: 'Process', path: '/process'},
  {id: 3, name: 'Contact', path: '/contact'},
]);

const mobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const isDarkTheme = ref(false);
const path = computed<string | undefined>(() => route.path as string | undefined);

const setDarkTheme = (value: boolean) => {
  isDarkTheme.value = value;
  localStorage.setItem('darkTheme', value.toString());
  if (value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const toggleTheme = () => {
  setDarkTheme(!isDarkTheme.value);
};

const initializeTheme = () => {
  const storedTheme = localStorage.getItem('darkTheme');
  if (storedTheme !== null) {
    setDarkTheme(storedTheme === 'true');
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkTheme(prefersDark);
  }
};

const lastScrollTop = ref(0);
const isNavVisible = ref(true);

const handleScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop === 0) {
    isNavVisible.value = true;
  } else if (scrollTop > lastScrollTop.value) {
    isNavVisible.value = false;
  } else {
    isNavVisible.value = true;
  }
  lastScrollTop.value = scrollTop <= 0 ? 0 : scrollTop;
};

onMounted(() => {
  initializeTheme();
  window.addEventListener('scroll', handleScroll);
});

watch(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches,
    (newValue) => {
      if (localStorage.getItem('darkTheme') === null) {
        setDarkTheme(newValue);
      }
    }
);
</script>

<template>
  <div class="min-h-[calc(100vh-100px)]">
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
          class="backdrop-blur-lg bg-white/30 dark:bg-black/30 py-6 px-6 fixed w-full z-40 h-20 transition-all duration-300">
        <div class="container mx-auto flex justify-between items-center">
          <RouterLink to="/">
            <div class="flex items-center space-x-2">
              <img src="@/assets/logo.svg" height="40" width="27" alt="Make IT Logical Logo" class="h-10 w-auto">
              <span class="text-2xl  hidden md:block text-black dark:text-white font-bold">Make IT Logical</span>
            </div>
          </RouterLink>
          <nav :class="{'hidden': !mobileMenuOpen, 'md:flex': true}">
            <ul class="flex md:flex-row flex-col space-y-6 md:space-y-0 md:space-x-6 items-center">
              <li v-for="item in navItems" :key="item.id">
                <RouterLink
                    :to="item.path"
                    class="text-2xl md:text-base transition-colors duration-300 hover:underline underline-offset-8"
                    :class="{ 'underline': route.path === item.path }"
                >
                  {{ item.name }}
                </RouterLink>
              </li>
              <li>
                <button
                    type="button"
                    aria-label="Toggle Theme"
                    @click="toggleTheme"
                >
                  <i class="text-xl" :class="isDarkTheme ? 'pi pi-sun' : 'pi pi-moon'"></i>
                </button>
              </li>
            </ul>
          </nav>
          <button
              type="button"
              aria-label="Open Menu"
              class="md:hidden"
              @click="toggleMobileMenu"
          >
            <i class="pi pi-bars text-xl"></i>
          </button>
        </div>
      </header>
    </Transition>
    <Transition
        enter-active-class="duration-300 ease-out"
        enter-from-class="transform -translate-y-full"
        enter-to-class="transform translate-y-0"
        leave-active-class="duration-200 ease-in"
        leave-from-class="transform translate-y-0"
        leave-to-class="transform -translate-y-full"
    >
      <div
          v-if="mobileMenuOpen"
          class="fixed inset-0 z-50 bg-white dark:bg-honolulu-blue-900 md:hidden transition-all duration-300">
        <div class="flex flex-col h-full">
          <div class="flex justify-end py-7 px-6">
            <div class="flex-1">
              <RouterLink class="flex items-center space-x-2" to="/" @click="toggleMobileMenu">
                <img src="@/assets/logo.svg" height="40" width="27" alt="Make IT Logical Logo" class="h-10 w-auto">
                <span class="text-2xl text-black hidden md:block dark:text-white font-bold">Make IT Logical</span>
              </RouterLink>
            </div>
            <button
                type="button"
                aria-label="Close Menu"
                @click="toggleMobileMenu"
            >
              <i class="pi pi-times text-xl"></i>
            </button>
          </div>
          <nav class="flex-grow flex px-6">
            <ul class="space-y-6">
              <li v-for="item in navItems" :key="item.id">
                <RouterLink
                    :to="item.path"
                    class="text-2xl md:text-base transition-colors duration-300 underline-offset-8 hover:underline"
                    :class="{ 'underline': route.path === item.path }"
                    @click="toggleMobileMenu"
                >
                  {{ item.name }}
                </RouterLink>
              </li>
              <li>
                <button
                    type="button"
                    aria-label="Toggle Theme"
                    @click="toggleTheme"
                >
                  <i class="text-xl" :class="isDarkTheme ? 'pi pi-sun' : 'pi pi-moon'"></i>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Transition>
    <main>
      <div class="container mx-auto py-32 px-8">
        <RouterView v-slot="{ Component }">
          <Transition
              enter-active-class="duration-500 ease-out"
              enter-from-class="transform opacity-0"
              enter-to-class="opacity-100"
              leave-active-class="duration-300 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="transform opacity-0"
          >
            <div :key="path">
              <Component :is="Component"></Component>
            </div>
          </Transition>
        </RouterView>
      </div>
    </main>
  </div>
  <footer class="bg-white/30 dark:bg-black/30 py-6 px-6">
    <div class="container mx-auto">
      <p>&copy; {{ new Date().getFullYear() }} <strong>Make IT Logical</strong>. All rights reserved.</p>
      <p class="mt-2 text-sm">Empowering businesses.</p>
    </div>
  </footer>
</template>