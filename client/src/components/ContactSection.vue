<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import axios from 'axios';

const { t } = useI18n();

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const rules = {
  name: { required },
  email: { required, email },
  message: { required }
};

const v$ = useVuelidate(rules, form);

const isSending = ref(false);
const sent = ref(false);
const buttonText = ref(t('Send Message'));
const submitted = ref(false);

const submitForm = async () => {
  submitted.value = true;
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) return;

  isSending.value = true;
  try {
    const response = await axios.post(import.meta.env.VITE_API_URL, {
      email: form.email,
      message: form.message,
      hash: import.meta.env.VITE_SENDGRID_HASH_KEY
    });

    if (response.status === 200) {
      buttonText.value = t('Message Sent!');
      sent.value = true;
    } else {
      buttonText.value = t('Error. Please try again.');
    }
  } catch (error) {
    console.log(error);
    buttonText.value = t('Error. Please try again.');
  } finally {
    isSending.value = false;
  }
};
</script>

<template>
  <section id="contact" class="py-20 mt-8 relative bg-gradient-to-b from-silver-100 to-silver-200 dark:from-midnight-green-800 dark:to-midnight-green-900">
    <div class="absolute inset-0 bg-silver-100 dark:bg-midnight-green-900 opacity-70"></div>
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-6 transition-all duration-300 transform hover:scale-105">
        {{ t('Let\'s Create Something Amazing') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-200 mb-4">
            {{ t('Ready to take your digital presence to the next level? We\'re here to turn your vision into reality.') }}
          </p>
          <p class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-200 mb-4">
            {{ t('Our team of experts is passionate about crafting tailored solutions that meet your unique needs and exceed your expectations.') }}
          </p>
          <p class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-200 mb-4">
            {{ t('Whether you\'re looking to build a cutting-edge web application, optimize your existing systems, or need guidance on your digital strategy, we\'re here to help.') }}
          </p>
          <p class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-200 mb-4">
            {{ t('Let\'s start a conversation and explore the possibilities together. Your success is our priority, and we\'re excited to be part of your journey.') }}
          </p>
          <p class="text-lg md:text-xl font-semibold text-honolulu-blue-600 dark:text-honolulu-blue-300 mb-4">
            {{ t('Fill out the form, and let\'s begin crafting your digital success story!') }}
          </p>
        </div>
        <div class="bg-white dark:bg-midnight-green-700 shadow-xl rounded-lg p-6">
          <form class="space-y-6" @submit.prevent="submitForm">
            <div>
              <label for="name" class="block mb-2 font-semibold text-midnight-green-700 dark:text-silver-200">
                {{ t('Name') }}
              </label>
              <input id="name" v-model="form.name" type="text" class="w-full p-2 border-2 border-silver-300 dark:border-silver-700 rounded-md focus:border-honolulu-blue-500 dark:focus:border-honolulu-blue-400 bg-silver-50 dark:bg-midnight-green-800 text-midnight-green-800 dark:text-silver-100" :class="{ 'border-red-500': v$.name.$error }" />
              <small v-if="v$.name.$error" class="text-red-500">{{ t('Name is required') }}</small>
            </div>
            <div>
              <label for="email" class="block mb-2 font-semibold text-midnight-green-700 dark:text-silver-200">
                {{ t('Email') }}
              </label>
              <input id="email" v-model="form.email" type="email" class="w-full p-2 border-2 border-silver-300 dark:border-silver-700 rounded-md focus:border-honolulu-blue-500 dark:focus:border-honolulu-blue-400 bg-silver-50 dark:bg-midnight-green-800 text-midnight-green-800 dark:text-silver-100" :class="{ 'border-red-500': v$.email.$error }" />
              <small v-if="v$.email.$error" class="text-red-500">{{ t('Valid email is required') }}</small>
            </div>
            <div>
              <label for="message" class="block mb-2 font-semibold text-midnight-green-700 dark:text-silver-200">
                {{ t('Message') }}
              </label>
              <textarea id="message" v-model="form.message" rows="5" class="w-full p-2 border-2 border-silver-300 dark:border-silver-700 rounded-md focus:border-honolulu-blue-500 dark:focus:border-honolulu-blue-400 bg-silver-50 dark:bg-midnight-green-800 text-midnight-green-800 dark:text-silver-100" :class="{ 'border-red-500': v$.message.$error }"></textarea>
              <small v-if="v$.message.$error" class="text-red-500">{{ t('Message is required') }}</small>
            </div>
            <button type="submit" class="w-full py-3 px-4 bg-honolulu-blue-600 hover:bg-honolulu-blue-700 dark:bg-honolulu-blue-500 dark:hover:bg-honolulu-blue-600 text-white font-bold rounded-full transition-colors duration-300" :disabled="isSending || sent">
              {{ buttonText }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>