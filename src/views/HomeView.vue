<script setup>
import IconEmail from "@/components/icons/IconEmail.vue";
import IconLocation from "@/components/icons/IconLocation.vue";
</script>

<template>
  <div>
    <div>
          <span class="text-lg font-extrabold text-indigo-500">
              Simplifying the Expierence, Together
          </span>

      <h2 class="text-3xl md:text-4xl font-extrabold font-heading mt-3 mb-3">
        We want to hear about YOUR VISION OF INTERNET!
      </h2>
      <h2 class="text-xl leading-8 mb-2">
        Have an idea for an app? <span class="font-bold">Tell us about it!</span>
      </h2>
      <h3 class="text-xl leading-8">
        At <span class="font-bold">Make IT Logical</span>, we bridge tech and human insights to bring your goals to
        life as an intuitive online
        experience for everyone.
      </h3>
    </div>
    <div class="py-2">
      <div class="w-full mt-4 lg:w-1/2 pt-2 border-3 bg-white border-indigo-900 rounded-2xl shadow-md">
        <div
            class="px-6 py-12 md:px-12"
        >
          <form action="">
            <div class="mb-8">
              <label class="block mb-2 font-extrabold" for="">Email You At</label>
              <input
                  class="inline-block w-full p-4 text-lg font-extrabold placeholder-indigo-900 shadow border-2 border-indigo-900 rounded outline-none"
                  type="email"
                  placeholder="youremail@awesomeideas.com"
              />
            </div>
            <div class="mb-8">
              <label class="block mb-2 font-extrabold" for="">Your Innovative Concept</label>
              <textarea
                  class="w-full p-4 text-lg font-extrabold placeholder-indigo-900 shadow border-2 border-indigo-900 rounded resize-none"
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  placeholder="Imagine the Possibilities..."
              ></textarea>
            </div>
            <button
                class="inline-block w-full py-4 px-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
            >
              Inspire Us
            </button>
          </form>
        </div>
      </div>
      <div class="mt-10">
        <div class="flex flex-col lg:flex-row">
          <div class="w-full mb-12">
            <div
                class="inline-flex mb-8 w-20 h-20 items-center justify-center bg-white text-indigo-900 border-3 border-indigo-900 rounded-full shadow-md"
            >
              <icon-email/>
            </div>
            <h3 class="text-2xl font-extrabold mb-3">Email</h3>
            <a class="text-xl underline sm:text-2xl font-bold text-gray-400" href= "mailto: contact@makeitlogical.io">contact@makeitlogical.io</a>
          </div>
          <div class="w-full px-4 mb-12 sm:mb-0">
            <div
                class="inline-flex mb-8 w-20 h-20 items-center justify-center bg-white text-indigo-900 border-3 border-indigo-900 rounded-full shadow-md"
            >
              <icon-location/>
            </div>
            <h3 class="text-2xl font-extrabold mb-3">Office</h3>
            <p class="text-xl sm:text-2xl font-bold text-gray-400">al. Wiśniowa 36a/304</p>
            <p class="text-xl sm:text-2xl font-bold text-gray-400">53-137 Wrocław</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
