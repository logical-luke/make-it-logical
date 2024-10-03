<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue';
import {useRouter} from 'vue-router';
import Button from 'primevue/button';
import TeamSection from "@/components/TeamSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import ServicesSection from "@/components/ServicesSection.vue";
import HomeSection from "@/components/HomeSection.vue";
import ProcessSection from "@/components/ProcessSection.vue";

const router = useRouter();

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

onMounted(() => {
  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
  });
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
    <header class="bg-white dark:bg-midnight-green-800 py-6 px-6 fixed w-full z-50 transition-colors duration-300 h-20">
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

    <main class="pt-20">
      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <HomeSection id="home" :scroll-to="scrollTo"/>
        <ServicesSection/>
        <ProcessSection/>
        <TeamSection/>
        <ContactSection/>
      </div>
    </main>

    <footer class="bg-honolulu-blue-600 dark:bg-lapis-lazuli-800 text-white py-8 px-6 transition-colors duration-300">
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
</style>