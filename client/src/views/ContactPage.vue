<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import {ref, reactive} from 'vue';
import {useVuelidate} from '@vuelidate/core';
import {required, email, helpers} from '@vuelidate/validators';
import axios from 'axios';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import SuccessImage from "@/components/SuccessImage.vue";

const {t} = useI18n();

const form = reactive({
  name: '',
  email: '',
  phone: ''
});

const rules = {
  name: {required},
  $lazy: true,
  $externalResults: helpers.withMessage(
      t('Either email or phone is required'),
      (value) => (value.email === null || value.email === '') || (value.phone === '' || value.phone === null)
  ),
  email: {email: helpers.withMessage(t('Please enter a valid email'), email)},
  phone: {
    phoneNumber: helpers.withMessage(
        t('Please enter a valid phone number'),
        helpers.regex(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)
    )
  }
};

const v$ = useVuelidate(rules, form);

const isSending = ref(false);
const sent = ref(false);
const buttonText = ref(t('Request Contact'));

const submitForm = async () => {
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) return;

  isSending.value = true;
  try {
    const response = await axios.post(import.meta.env.VITE_API_URL, {
      name: form.name,
      email: form.email,
      phone: form.phone,
      hash: import.meta.env.VITE_SENDGRID_HASH_KEY
    });

    if (response.status === 200) {
      buttonText.value = t('We\'ll be in touch!');
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
           class="full-width-section relative overflow-clip-y bg-gradient-to-b from-silver-100 to-silver-200 dark:from-midnight-green-800 dark:to-midnight-green-900">
    <div class="absolute inset-0 overflow-visible">
      <div class="absolute inset-0 opacity-20 dark:opacity-10 -left-1/5 -top-[50vh] md:-top-[20vh] lg:-top-[5vh]">
        <SuccessImage class="w-full h-full scale-[2] md:scale-[1.75] lg:scale-150"/>
      </div>
    </div>
    <div class="container mx-auto py-16 relative z-10">
      <h2 class="text-4xl md:text-5xl font-bold text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-8">
        Your <span class="text-honolulu-blue-500 dark:text-honolulu-blue-300 font-bold">Vision</span>, Our <span
          class="text-honolulu-blue-500 dark:text-honolulu-blue-300 font-bold">Expertise</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <p class="text-xl md:text-2xl text-midnight-green-800 dark:text-silver-200 mb-6">
            {{ t('We\'re here to listen and bring your boldest ideas to life.') }}
          </p>
          <p class="text-xl mb-4 md:text-2xl font-semibold text-honolulu-blue-600 dark:text-honolulu-blue-300">
            {{ t('Let\'s start your success story.') }}
          </p>
          <p class="text-xl md:text-2xl font-semibold text-honolulu-blue-600 dark:text-honolulu-blue-300 mb-6">
            {{ t('Share contact, and we\'ll reach out.') }}
          </p>
          <div class="flex flex-col space-y-4">
            <a href="mailto:office@makeitlogical.io">
              <div class="flex items-center space-x-2">
                <i class="pi pi-envelope text-2xl text-honolulu-blue-500"></i>
                <span class="text-lg text-midnight-green-800 dark:text-silver-200">
                  office@makeitlogical.io
              </span>
              </div>
            </a>
            <a href="tel:+48696606391">
              <div class="flex items-center space-x-2">
                <i class="pi pi-phone text-2xl text-honolulu-blue-500"></i>
                <span class="text-lg text-midnight-green-800 dark:text-silver-200">+48 696 606 391</span>
              </div>
            </a>
          </div>
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
              <small v-if="v$.email.$error" class="text-red-500">{{ v$.email.$errors[0].$message }}</small>
            </div>
            <div class="w-full">
            <Divider type="solid" layout="horizontal"><b>OR</b></Divider>
              </div>
            <div>
              <label for="phone" class="block mb-2 font-semibold text-midnight-green-700 dark:text-silver-200">
                {{ t('Phone') }}
              </label>
              <input
                  id="phone" v-model="form.phone" type="tel"
                  class="w-full p-2 border-2 border-silver-300 dark:border-silver-700 rounded-md focus:border-honolulu-blue-500 dark:focus:border-honolulu-blue-400 bg-silver-50 dark:bg-midnight-green-800 text-midnight-green-800 dark:text-silver-100"
                  :class="{ 'border-red-500': v$.phone.$error }"/>
              <small v-if="v$.phone.$error" class="text-red-500">{{ v$.phone.$errors[0].$message }}</small>
            </div>
            <small v-if="v$.$error && !form.email && !form.phone" class="text-red-500 block">
              {{ t('Either email or phone is required') }}
            </small>
            <div class="flex items-center space-x-2 text-midnight-green-700 dark:text-silver-200">
              <i class="pi pi-info-circle text-2xl"></i>
              <p class="font-medium">
                {{
                  t('We don\'t believe your vision can fit into a small message field. Let us contact you and listen to your ideas so we can apply the best solution.')
                }}
              </p>
            </div>
            <Button
                type="submit"
                :label="buttonText"
                icon="pi pi-send"
                class="w-full py-3 px-4 bg-honolulu-blue-600 hover:bg-honolulu-blue-700 dark:bg-honolulu-blue-500 dark:hover:bg-honolulu-blue-600 text-white font-bold rounded-full transition-colors duration-300"
                :disabled="isSending || sent"
            />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
