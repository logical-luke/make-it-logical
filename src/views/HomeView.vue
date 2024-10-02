<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import axios from 'axios';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import Timeline from 'primevue/timeline';
import Dialog from 'primevue/dialog';

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
const buttonText = ref('Send Message');
const submitted = ref(false);

const displayProcessDetails = ref(false);
const selectedProcess = ref(null);

const services = [
  {
    id: 1,
    icon: 'pi pi-desktop',
    title: 'Web Development',
    description: 'Craft stunning, high-performance web applications that leave a lasting impression and drive conversions.',
    features: ['Responsive Design', 'SEO Optimization', 'Lightning Fast Load Times', 'Intuitive User Experience']
  },
  {
    id: 2,
    icon: 'pi pi-mobile',
    title: 'Mobile Apps',
    description: 'Create seamless, cross-platform mobile experiences that users love and keep coming back to.',
    features: ['Native Performance', 'Offline Functionality', 'Push Notifications', 'Seamless Updates']
  },
  {
    id: 3,
    icon: 'pi pi-cog',
    title: 'API Development',
    description: 'Build robust, scalable APIs that connect systems and unlock new possibilities for your business.',
    features: ['RESTful Design', 'GraphQL Support', 'Authentication & Security', 'Comprehensive Documentation']
  }
];

const processSteps = [
  {
    label: 'Discovery',
    icon: 'pi pi-search',
    description: 'We dive deep into your business goals and requirements.',
    fullDescription: 'In the Discovery phase, we conduct thorough research to understand your business, target audience, and project objectives. We analyze your competitors and identify opportunities for innovation.'
  },
  {
    label: 'Planning',
    icon: 'pi pi-file',
    description: 'We create a detailed roadmap for your project.',
    fullDescription: 'During Planning, we outline the project scope, create timelines, and allocate resources. We define key milestones and deliverables to ensure a smooth development process.'
  },
  {
    label: 'Design',
    icon: 'pi pi-palette',
    description: 'We craft intuitive and visually appealing interfaces.',
    fullDescription: 'In the Design phase, we create wireframes and prototypes to visualize the user interface. We focus on user experience (UX) principles to ensure your application is both beautiful and functional.'
  },
  {
    label: 'Development',
    icon: 'pi pi-cog',
    description: 'We bring your vision to life with clean, efficient code.',
    fullDescription: 'During Development, our expert programmers write high-quality, scalable code. We follow best practices and use cutting-edge technologies to build robust and performant applications.'
  },
  {
    label: 'Testing',
    icon: 'pi pi-check-square',
    description: 'We rigorously test to ensure quality and reliability.',
    fullDescription: 'In the Testing phase, we conduct thorough quality assurance checks. This includes functional testing, performance testing, and security audits to ensure your application is bug-free and secure.'
  },
  {
    label: 'Deployment',
    icon: 'pi pi-upload',
    description: 'We launch your application and ensure smooth operation.',
    fullDescription: 'During Deployment, we carefully launch your application to production servers. We monitor the process closely to ensure a seamless transition and minimal downtime.'
  },
  {
    label: 'Maintenance',
    icon: 'pi pi-refresh',
    description: 'We provide ongoing support and updates.',
    fullDescription: 'In the Maintenance phase, we offer continuous support and regular updates. We monitor performance, implement new features, and ensure your application stays up-to-date with the latest technologies and security standards.'
  }
];

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
      buttonText.value = 'Message Sent!';
      sent.value = true;
    } else {
      buttonText.value = 'Error. Please try again.';
    }
  } catch (error) {
    buttonText.value = 'Error. Please try again.';
  } finally {
    isSending.value = false;
  }
};

const showProcessDetails = (process) => {
  selectedProcess.value = process;
  displayProcessDetails.value = true;
};

const scrollTo = (href) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <section id="home" class="py-20 md:py-32">
      <div class="text-center">
        <h1 class="text-5xl md:text-7xl font-extrabold text-blue-600 dark:text-blue-400 mb-6">
          Elevate Your Digital Presence
        </h1>
        <p class="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          At Make IT Logical, we don't just build websites and apps. We craft digital experiences that captivate, engage, and convert. Your vision, our expertise – together, we'll redefine what's possible in the digital realm.
        </p>
        <Button label="Ignite Your Digital Journey" icon="pi pi-rocket" class="p-button-lg p-button-primary" @click="scrollTo('#contact')" />
      </div>
      <!-- todo-luke: Add image here -->
      <!-- <div class="mt-12">
        <img src="@/assets/hero-image.jpg" alt="Digital Transformation" class="rounded-lg shadow mx-auto">
      </div> -->
    </section>

    <section id="services" class="py-20">
      <h2 class="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">Our Expertise</h2>
      <p class="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto text-center">
        From concept to execution, we deliver cutting-edge solutions that drive your business forward. Our services are tailored to meet the unique challenges of the digital age.
      </p>
      <div class="grid md:grid-cols-3 gap-8">
        <Card v-for="service in services" :key="service.id" class="shadow hover:shadow transition-all duration-300 bg-white dark:bg-gray-800">
          <template #header>
            <div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 flex justify-center items-center">
              <i :class="[service.icon, 'text-5xl text-white']"></i>
            </div>
          </template>
          <template #title>
            <h3 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{{ service.title }}</h3>
          </template>
          <template #content>
            <p class="text-gray-700 dark:text-gray-300 mb-4">{{ service.description }}</p>
            <ul class="space-y-2">
              <li v-for="feature in service.features" :key="feature" class="flex items-center">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span class="text-gray-700 dark:text-gray-300">{{ feature }}</span>
              </li>
            </ul>
          </template>
        </Card>
      </div>
    </section>

    <section id="process" class="py-20 bg-gray-100 dark:bg-gray-900 rounded-lg shadow">
      <h2 class="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">Our Proven Process</h2>
      <p class="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto text-center">
        We've refined our approach to ensure every project is a success. Our process is designed to maximize efficiency, creativity, and results.
      </p>
      <div class="max-w-4xl mx-auto">
        <Timeline :value="processSteps" align="alternate" class="custom-timeline">
          <template #content="slotProps">
            <Card class="mb-4 bg-white dark:bg-gray-800">
              <template #title>
                <h3 class="text-xl font-bold text-blue-600 dark:text-blue-400">{{ slotProps.item.label }}</h3>
              </template>
              <template #content>
                <p class="text-gray-700 dark:text-gray-300">{{ slotProps.item.description }}</p>
              </template>
            </Card>
          </template>
          <template #opposite="slotProps">
            <Button :icon="slotProps.item.icon" class="p-button-rounded p-button-text" @click="showProcessDetails(slotProps.item)" />
          </template>
        </Timeline>
      </div>
      <!-- todo-luke: Add image here -->
      <!-- <div class="mt-12">
        <img src="@/assets/process-diagram.png" alt="Our Process" class="rounded-lg shadow mx-auto">
      </div> -->
    </section>

    <section id="contact" class="py-20">
      <h2 class="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">Let's Create Something Amazing</h2>
      <p class="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto text-center">
        Ready to take your digital presence to the next level? We're here to turn your vision into reality. Let's start a conversation and explore the possibilities together.
      </p>
      <div class="max-w-2xl mx-auto">
        <Card class="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-indigo-900 shadow">
          <template #content>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block mb-2 font-semibold text-gray-700 dark:text-gray-300">Name</label>
                  <InputText id="name" v-model="form.name" class="w-full p-inputtext-lg" :class="{'p-invalid': v$.name.$invalid && submitted}" />
                  <small class="p-error" v-if="v$.name.$invalid && submitted">Name is required</small>
                </div>
                <div>
                  <label for="email" class="block mb-2 font-semibold text-gray-700 dark:text-gray-300">Email</label>
                  <InputText id="email" v-model="form.email" class="w-full p-inputtext-lg" :class="{'p-invalid': v$.email.$invalid && submitted}" />
                  <small class="p-error" v-if="v$.email.$invalid && submitted">{{ v$.email.$errors[0].$message }}</small>
                </div>
              </div>
              <div>
                <label for="message" class="block mb-2 font-semibold text-gray-700 dark:text-gray-300">Your Vision</label>
                <Textarea id="message" v-model="form.message" rows="5" class="w-full p-inputtext-lg" :class="{'p-invalid': v$.message.$invalid && submitted}" />
                <small class="p-error" v-if="v$.message.$invalid && submitted">Message is required</small>
              </div>
              <Button type="submit" :label="buttonText" icon="pi pi-send" class="w-full p-button-lg p-button-primary" :loading="isSending" :disabled="isSending || sent" />
            </form>
          </template>
        </Card>
      </div>
    </section>

    <Dialog v-model:visible="displayProcessDetails" :header="selectedProcess?.label" :modal="true">
      <p>{{ selectedProcess?.fullDescription }}</p>
    </Dialog>
  </div>
</template>

<style scoped>
.custom-timeline :deep(.p-timeline-event-opposite) {
  flex: 0;
}
.custom-timeline :deep(.p-timeline-event-content) {
  flex: 1;
}
:deep(.p-inputtext),
:deep(.p-inputtextarea) {
  background: transparent;
}
:deep(.p-card) {
  background: transparent;
}
</style>