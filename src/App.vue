<script setup xmlns="http://www.w3.org/1999/html">
import {RouterView} from 'vue-router'
</script>

<template>
  <div id="content">
    <header>
      <nav class="flex flex-row justify-between items-center py-6 px-10 lg:mb-10 relative">
        <a class="text-lg flex gap-4" href="#">
          <div>
            <img alt="Make IT Logical Logo" class="h-16" src="@/assets/logo.svg" width="auto"/>
          </div>
          <div class="flex flex-col">
            <h1>Full-Stack Web and Mobile App Development Agency</h1>
            <h2 class="font-bold">Make IT Logical</h2>
          </div>
        </a>
      </nav>
    </header>
    <section class="bg-white relative overflow-hidden">
      <div class="container px-10 mx-auto relative">
        <main>
          <RouterView/>
        </main>
      </div>
    </section>
    <footer class="flex flex-row mt-5 mb-0 justify-center items-center lg:items-end lg:justify-end lg:mr-6 ">
      <section>
        <div class="container justify-end mx-auto">
          <div class="flex flex-wrap justify-between">
            <div class="w-full lg:w-auto mb-6 lg:mb-0">
              <p class="text-center text-lg font-extrabold">© Make IT Logical. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>
