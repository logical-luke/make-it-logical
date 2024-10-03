I apologize for the confusion. The spinning loader should only be visible while the page is loading. Let's modify the App.vue to ensure the loader disappears once everything is loaded. Here's an updated version of the App.vue file:
<script setup lang="ts">
import {defineAsyncComponent, nextTick, onMounted, onUnmounted, ref, watch} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import Button from 'primevue/button';

const isLoading = ref(true);
const componentsLoaded = ref(0);
const totalComponents = 5;
const heroImageLoaded = ref(false);

const incrementLoadedComponents = () => {
  componentsLoaded.value++;
  checkAllLoaded();
};

const checkAllLoaded = () => {
  if (componentsLoaded.value === totalComponents && heroImageLoaded.value) {
    // Add a small delay to ensure smooth transition
    setTimeout(() => {
      isLoading.value = false;
    }, 300);
  }
};

// Async component imports
const HomeSection = defineAsyncComponent({
  loader: () => import("@/components/HomeSection.vue").then((module) => {
    incrementLoadedComponents();
    return module;
  }),
  loadingComponent: {template: '<div></div>'},
});
const ServicesSection = defineAsyncComponent({
  loader: () => import("@/components/ServicesSection.vue").then((module) => {
    incrementLoadedComponents();
    return module;
  }),
  loadingComponent: {template: '<div></div>'},
});
const ProcessSection = defineAsyncComponent({
  loader: () => import("@/components/ProcessSection.vue").then((module) => {
    incrementLoadedComponents();
    return module;
  }),
  loadingComponent: {template: '<div></div>'},
});
const TeamSection = defineAsyncComponent({
  loader: () => import("@/components/TeamSection.vue").then((module) => {
    incrementLoadedComponents();
    return module;
  }),
  loadingComponent: {template: '<div></div>'},
});
const ContactSection = defineAsyncComponent({
  loader: () => import("@/components/ContactSection.vue").then((module) => {
    incrementLoadedComponents();
    return module;
  }),
  loadingComponent: {template: '<div></div>'},
});

const router = useRouter();
const route = useRoute();

const navItems = ref([
  {id: 1, name: 'Home', href: '/', path: '/'},
  {id: 2, name: 'Services', href: '#services', path: '/services'},
  {id: 3, name: 'Process', href: '#process', path: '/process'},
  {id: 4, name: 'Team', href: '#team', path: '/team'},
  {id: 5, name: 'Contact', href: '#contact', path: '/contact'},
]);

const activeSection = ref<string | null>(null);
const mobileMenuOpen = ref(false);
const isScrolling = ref(false);

const scrollTo = (href: string, path: string) => {
  isScrolling.value = true;
  mobileMenuOpen.value = false;

  observer.disconnect();

  if (href === '/') {
    window.scrollTo({top: 0, behavior: 'smooth'});
    activeSection.value = null;
  } else {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
      activeSection.value = href.slice(1);
    }
  }

  setTimeout(() => {
    router.push(path).catch(err => console.error('Router update failed:', err));
    isScrolling.value = false;

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });
  }, 1000); // Adjust this delay if needed
};

const observer = new IntersectionObserver(
    (entries) => {
      if (!isScrolling.value) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            activeSection.value = sectionId === 'home' ? null : sectionId;
            const navItem = navItems.value.find(item =>
                item.href === `#${sectionId}` || (item.href === '/' && sectionId === 'home')
            );
            if (navItem) {
              router.replace(navItem.path).catch(err => console.error('Router replace failed:', err));
            }
          }
        });
      }
    },
    {threshold: 0.7}
);

onMounted(async () => {
  // Set up observer
  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
  });

  // Scroll to the appropriate section on initial load
  await nextTick();
  if (route.meta.scrollTo) {
    const target = typeof route.meta.scrollTo === 'string'
        ? document.querySelector(route.meta.scrollTo)
        : null;
    if (target) {
      target.scrollIntoView({behavior: 'smooth'});
    } else if (typeof route.meta.scrollTo === 'number') {
      window.scrollTo({top: route.meta.scrollTo, behavior: 'smooth'});
    }
  }
});

watch(() => heroImageLoaded.value, (newValue) => {
  if (newValue) {
    checkAllLoaded();
  }
});

onUnmounted(() => {
  observer.disconnect();
});

const isActive = (href: string) => {
  if (href === '/') {
    return activeSection.value === null;
  }
  return activeSection.value === href.slice(1);
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-midnight-green-800 transition-colors duration-300">
    <div
v-if="isLoading"
         class="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-midnight-green-800">
      <i class="pi pi-spinner animate-spin text-6xl text-honolulu-blue-600 dark:text-honolulu-blue-400"></i>
    </div>

    <header
v-show="!isLoading"
            class="bg-white dark:bg-midnight-green-800 py-6 px-6 fixed w-full z-40 transition-colors duration-300 h-20">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <img src="@/assets/logo.svg" alt="Make IT Logical Logo" class="h-10 w-auto">
          <span class="text-2xl font-bold text-honolulu-blue-600 dark:text-honolulu-blue-400">Make IT Logical</span>
        </div>
        <nav :class="{'hidden': !mobileMenuOpen, 'md:flex': true}">
          <ul class="flex md:flex-row flex-col space-y-6 md:space-y-0 md:space-x-6 items-center">
            <li v-for="item in navItems" :key="item.id">
              <RouterLink
                  :to="item.path"
                  class="text-2xl md:text-base transition-colors duration-300 text-midnight-green-600 dark:text-silver-300 hover:text-honolulu-blue-600 dark:hover:text-honolulu-blue-400"
                  :class="{ 'font-bold text-honolulu-blue-400': isActive(item.href) }"
                  @click.prevent="scrollTo(item.href, item.path)"
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
                  :class="{ 'font-bold text-honolulu-blue-400': isActive(item.href) }"
                  @click.prevent="scrollTo(item.href, item.path)"
              >
                {{ item.name }}
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <main v-show="!isLoading" class="pt-20">
      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <HomeSection id="home" :scroll-to="scrollTo" @hero-image-loaded="heroImageLoaded = true"/>
        <ServicesSection/>
        <ProcessSection/>
        <TeamSection/>
        <ContactSection/>
      </div>
    </main>

    <footer
v-show="!isLoading"
            class="bg-honolulu-blue-600 dark:bg-lapis-lazuli-800 text-white py-8 px-6 transition-colors duration-300">
      <div class="max-w-7xl mx-auto text-center">
        <p>&copy; {{ new Date().getFullYear() }} Make IT Logical. All rights reserved.</p>
        <p class="mt-2 text-sm">Empowering businesses with innovative digital solutions.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
section#home,
section#process,
section#contact {
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  padding-left: calc(50vw - 50%);
  padding-right: calc(50vw - 50%);
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>