<script setup lang="ts">
import { ref, provide } from "vue";
import router from "@/router";
import NavigationBar from "@/components/NavigationBar.vue";

const transitionTrigger = ref(0);

provide("transitionTrigger", transitionTrigger);

router.afterEach(() => {
  transitionTrigger.value++;
});
</script>

<template>
  <div class="min-h-[calc(100vh-44px)]">
    <NavigationBar/>
    <main>
      <div class="container mx-auto py-32 px-6 md:px-0">
        <RouterView v-slot="{ Component }">
          <Component :is="Component"></Component>
        </RouterView>
      </div>
    </main>
  </div>
  <footer class="pb-6 px-6 md:px-0">
    <div class="container mx-auto">
      <p class="text-gray-600 dark:text-gray-300 text-sm">
        &copy; {{ new Date().getFullYear() }}
        <strong>Make IT Logical</strong>.
      </p>
    </div>
  </footer>
</template>
