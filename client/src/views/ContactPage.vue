<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import {ref, reactive} from 'vue';
import {useVuelidate} from '@vuelidate/core';
import {required, email} from '@vuelidate/validators';
import axios from 'axios';
import Card from 'primevue/card';

const {t} = useI18n();

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const rules = {
  name: {required},
  email: {required, email},
  message: {required}
};

const v$ = useVuelidate(rules, form);

const isSending = ref(false);
const sent = ref(false);
const buttonText = ref(t('Send Message'));

const submitForm = async () => {
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
    console.error(error);
    buttonText.value = t('Error. Please try again.');
  } finally {
    isSending.value = false;
  }
};
</script>

<template>
  <section
id="contact"
           class="full-width-section bg-gradient-to-b from-silver-100 to-silver-200 dark:from-midnight-green-800 dark:to-midnight-green-900">
    <div class="container mx-auto py-16">
      <h2 class="text-4xl md:text-5xl font-bold text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-8">
        Let's Craft Your <span class="highlight">Digital Masterpiece</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Card class="mb-6">
            <template #title>
              <h3 class="text-2xl font-bold text-lapis-lazuli-600 dark:text-lapis-lazuli-300">{{
                  t('Why Choose Us?')
                }}</h3>
            </template>
            <template #content>
              <ul class="list-disc pl-5 text-midnight-green-700 dark:text-silver-200">
                <li class="mb-2">{{ t('Tailored solutions that address your unique challenges') }}</li>
                <li class="mb-2">{{ t('Cutting-edge technology that keeps you ahead of the curve') }}</li>
                <li class="mb-2">{{ t('Transparent communication throughout the development process') }}</li>
                <li>{{ t('Ongoing support to ensure your continued success') }}</li>
              </ul>
            </template>
          </Card>
          <p class="text-xl md:text-2xl text-midnight-green-700 dark:text-silver-200 mb-6">
            {{ t('We\'re here to turn your boldest ideas into reality.') }}
          </p>
          <p class="text-xl md:text-2xl font-semibold text-honolulu-blue-600 dark:text-honolulu-blue-300 mb-6">
            {{
              t('Let\'s start your digital success story today. Reach out and let\'s create something extraordinary together.')
            }}
          </p>
        </div>
        <div class="bg-white dark:bg-midnight-green-700 shadow rounded-lg p-6">
          <form class="space-y-6" @submit.prevent="submitForm">
            <div>
              <label for="name" class="block mb-2 font-semibold text-midnight-green-700 dark:text-silver-200">
                {{ t('Name') }}
              </label>
              <input
id="name" v-model="form.name" type="text"
                     class="w-full p-2 border-2 border-silver-300 dark:border-silver-700 rounded-md focus:border-honolulu-blue-500 dark:focus:border-honolulu-blue-400 bg-silver-50 dark:bg-midnight-green-800 text-midnight-green-800 dark:text-silver-100"
                     :class="{ 'border-red-500': v$.name.$error }"/>
              <small v-if="v$.name.$error" class="text-red-500">{{ t('Name is required') }}</small>
            </div>
            <div>
              <label for="email" class="block mb-2 font-semibold text-midnight-green-700 dark:text-silver-200">
                {{ t('Email') }}
              </label>
              <input
id="email" v-model="form.email" type="email"
                     class="w-full p-2 border-2 border-silver-300 dark:border-silver-700 rounded-md focus:border-honolulu-blue-500 dark:focus:border-honolulu-blue-400 bg-silver-50 dark:bg-midnight-green-800 text-midnight-green-800 dark:text-silver-100"
                     :class="{ 'border-red-500': v$.email.$error }"/>
              <small v-if="v$.email.$error" class="text-red-500">{{ t('Valid email is required') }}</small>
            </div>
            <div>
              <label for="message" class="block mb-2 font-semibold text-midnight-green-700 dark:text-silver-200">
                {{ t('Message') }}
              </label>
              <textarea
id="message" v-model="form.message" rows="5"
                        class="w-full p-2 border-2 border-silver-300 dark:border-silver-700 rounded-md focus:border-honolulu-blue-500 dark:focus:border-honolulu-blue-400 bg-silver-50 dark:bg-midnight-green-800 text-midnight-green-800 dark:text-silver-100"
                        :class="{ 'border-red-500': v$.message.$error }"></textarea>
              <small v-if="v$.message.$error" class="text-red-500">{{ t('Message is required') }}</small>
            </div>
            <button
type="submit"
                    class="w-full py-3 px-4 bg-honolulu-blue-600 hover:bg-honolulu-blue-700 dark:bg-honolulu-blue-500 dark:hover:bg-honolulu-blue-600 text-white font-bold rounded-full transition-colors duration-300"
                    :disabled="isSending || sent">
              {{ buttonText }}
            </button>
          </form>
        </div>
      </div>
      <Card class="mt-16 shadow-md">
        <template #title>
          <div class="flex items-center">
            <i class="pi pi-check-circle mr-2 text-honolulu-blue-500"></i>
            <h3 class="text-2xl font-bold text-lapis-lazuli-600 dark:text-lapis-lazuli-300">Ready to Get Started?</h3>
          </div>
        </template>
        <template #content>
          <p class="text-lg text-midnight-green-700 dark:text-silver-200">
            Take the first step towards digital excellence. Reach out today and let's discuss how we can <span
              class="highlight">transform</span> your ideas into reality.
          </p>
        </template>
      </Card>
    </div>
  </section>
</template>