<template>
  <div class="h-[calc(100vh-0.4rem)] lg:h-[calc(100vh-10.9rem)] flex flex-col justify-center">
    <section class="bg-white -mt-72">
      <div class="container items-center mx-auto">
        <div class="max-w-xl mx-auto text-center">
          <span
              class="inline-flex mb-6 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm">Error 404</span>
          <h1 class="text-3xl sm:text-4xl xl:text-5xl font-extrabold font-heading mb-3">Page not found</h1>
          <p class="text-xl font-extrabold leading-7 lg:mb-6">We tried our best, but we couldn't find such page.</p>
          <div class="flex flex-wrap items-center justify-center">
            <router-link
              class="inline-block w-full md:w-auto py-4 px-6 mb-4 md:mb-0 md:mr-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
              to="/">Go back to Homepage</router-link></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import IconEmail from "@/components/icons/IconEmail.vue";
import IconLocation from "@/components/icons/IconLocation.vue";
import axios from "axios";
import SyncLoader from "vue-spinner/src/SyncLoader.vue";

export default {
  name: "HomeView",
  components: {
    IconEmail,
    IconLocation,
    SyncLoader
  },
  data() {
    return {
      email: '',
      isSending: false,
      sent: false,
      error: false,
      buttonText: 'Inspire Us',
      message: '',
    }
  },
  watch: {
    email() {
      this.error = false;
      this.buttonText = 'Inspire Us';
    },
    message() {
      this.error = false;
      this.buttonText = 'Inspire Us';
    },
  },
  methods: {
    async buttonClickHandler() {
      if (!this.email) {
        this.error = true;
        this.buttonText = 'Email cannot be empty';

        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        this.error = true;
        this.buttonText = 'Invalid email';

        return;
      }

      if (!this.message) {
        this.error = true;
        this.buttonText = 'Message cannot be empty';

        return;
      }

      this.isSending = true;
      const response = await axios.post(import.meta.env.VITE_API_URL,
          {
            email: this.email,
            message: this.message,
            hash: import.meta.env.VITE_SENDGRID_HASH_KEY // not an API key but a hash key for internal API
          }
      );

      if (response.status === 200) {
        this.buttonText = 'We will reply soon!';
        this.sent = true;
        this.error = false;
        this.isSending = false;
      } else {
        this.buttonText = 'Something went wrong :( Try again later';
        this.error = true;
        this.isSending = false;
      }
    }
  },
};
</script>
