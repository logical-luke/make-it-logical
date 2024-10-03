<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { ref, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import axios from 'axios';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';

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
  } catch (error: unknown) {
    console.log(error);
    buttonText.value = t('Error. Please try again.');
  } finally {
    isSending.value = false;
  }
};
</script>

<template>
  <section id="contact" class="py-20 mt-8 relative">
    <div class="absolute inset-0 bg-silver-100 dark:bg-midnight-green-900 opacity-70"></div>
    <div class="absolute inset-0 overflow-hidden">
      <picture>
        <source srcset="@/assets/services.webp" type="image/webp" />
        <source srcset="@/assets/services.png" type="image/png" />
        <img src="@/assets/services.png" alt="Our Services" class="w-full h-full object-cover opacity-30 dark:opacity-20" />
      </picture>
    </div>
    <div class="relative z-10 max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-300 mb-6 transition-all duration-300 transform hover:scale-105">
        {{ t('Let\'s Create Something Amazing') }}
      </h2>
      <p class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-200 mb-4 transition-opacity duration-300 ease-in-out">
        {{ t('Ready to take your digital presence to the next level?') }}
      </p>
      <p class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-200 mb-8 transition-opacity duration-300 ease-in-out">
        {{ t('We\'re here to turn your vision into reality. Let\'s start a conversation and explore the possibilities together.') }}
      </p>
      <div class="max-w-7xl mx-auto transition-all duration-300 transform hover:scale-105">
        <Card class="bg-white dark:bg-midnight-green-800 shadow hover:shadow-md rounded-lg overflow-hidden border border-silver-200 dark:border-midnight-green-700">
          <template #content>
            <form class="space-y-6" @submit.prevent="submitForm">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block mb-2 font-semibold text-midnight-green-700 dark:text-silver-200">
                    {{ t('Name') }}
                  </label>
                  <InputText id="name" v-model="form.name" class="w-full p-inputtext-lg border-2 border-silver-300 dark:border-silver-700 rounded-md focus:border-honolulu-blue-500 dark:focus:border-honolulu-blue-400 transition-colors duration-300" :class="{ 'p-invalid': v$.name.$invalid && submitted }" />
                  <small v-if="v$.name.$invalid && submitted" class="p-error">
                    {{ t('Name is required') }}
                  </small>
                </div>
                <div>
                  <label for="email" class="block mb-2 font-semibold text-midnight-green-700 dark:text-silver-200">
                    {{ t('Email') }}
                  </label>
                  <InputText id="email" v-model="form.email" class="w-full border-2 border-silver-300 dark:border-silver-700 rounded-md focus:border-honolulu-blue-500 dark:focus:border-honolulu-blue-400 transition-colors duration-300" :class="{ 'p-invalid': v$.email.$invalid && submitted }" />
                  <small v-if="v$.email.$invalid && submitted" class="p-error">
                    {{ v$.email.$errors[0].$message }}
                  </small>
                </div>
              </div>
              <div>
                <label for="message" class="block mb-2 font-semibold text-midnight-green-700 dark:text-silver-200">
                  {{ t('Message') }}
                </label>
                <Textarea id="message" v-model="form.message" rows="5" class="w-full border-2 border-silver-300 dark:border-silver-700 rounded-md focus:border-honolulu-blue-500 dark:focus:border-honolulu-blue-400 transition-colors duration-300" :class="{ 'p-invalid': v$.message.$invalid && submitted }" />
                <small v-if="v$.message.$invalid && submitted" class="p-error">
                  {{ t('Message is required') }}
                </small>
              </div>
              <Button type="submit" :label="buttonText" icon="pi pi-send" class="w-full text-white bg-honolulu-blue-600 hover:bg-honolulu-blue-700 dark:bg-honolulu-blue-500 dark:hover:bg-honolulu-blue-600 transition-all duration-300 py-3 rounded-full" :loading="isSending" :disabled="isSending || sent" />
            </form>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>