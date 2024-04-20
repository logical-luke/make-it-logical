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
          <template v-if="!sent">
          <div class="mb-8">
            <label class="block mb-2 font-extrabold" for="">Email You At</label>
            <input
                class="inline-block w-full p-4 text-lg font-extrabold placeholder-indigo-900 shadow border-2 border-indigo-900 rounded outline-none"
                type="email"
                v-model="email"
                placeholder="your@email.com"
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
                v-model="message"
                placeholder="Imagine the Possibilities..."
            ></textarea>
          </div>
          </template>
          <button
              :class="[ error ? 'bg-red-500 hover:bg-red-700' : (sent ? 'bg-green-500' : 'bg-indigo-500 hover:bg-indigo-700') ]"
              :disabled="isSending || sent"
              class="inline-block w-full py-4 px-6 text-center text-lg leading-6 text-white font-extrabold border-3 border-indigo-900 shadow rounded transition duration-200"
              @click="buttonClickHandler"
          >
            <sync-loader v-if="isSending" color="white" />
            <template v-else>
              {{  this.buttonText }}
            </template>

          </button>
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
            <a class="text-xl underline sm:text-2xl font-bold text-gray-400" href="mailto: contact@makeitlogical.io">contact@makeitlogical.io</a>
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
