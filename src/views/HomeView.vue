<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import axios from 'axios'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import { defineProps } from 'vue'

const props = defineProps<{
  scrollTo: (href: string) => void
}>()

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const rules = {
  name: { required },
  email: { required, email },
  message: { required }
}

const v$ = useVuelidate(rules, form)

const isSending = ref(false)
const sent = ref(false)
const buttonText = ref('Send Message')
const submitted = ref(false)

const services = [
  {
    id: 1,
    icon: 'pi pi-desktop',
    title: 'Web Development',
    description:
      'Craft stunning, high-performance web applications that leave a lasting impression and drive conversions.',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Lightning Fast Load Times',
      'Intuitive User Experience'
    ]
  },
  {
    id: 2,
    icon: 'pi pi-mobile',
    title: 'Mobile Apps',
    description:
      'Create seamless, cross-platform mobile experiences that users love and keep coming back to.',
    features: [
      'Native Performance',
      'Offline Functionality',
      'Push Notifications',
      'Seamless Updates'
    ]
  },
  {
    id: 3,
    icon: 'pi pi-cog',
    title: 'API Development',
    description:
      'Build robust, scalable APIs that connect systems and unlock new possibilities for your business.',
    features: [
      'RESTful Design',
      'GraphQL Support',
      'Authentication & Security',
      'Comprehensive Documentation'
    ]
  },
  {
    id: 4,
    icon: 'pi pi-server',
    title: 'DevOps Solutions',
    description:
      'Streamline your development process with cutting-edge DevOps practices and tools.',
    features: [
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'Monitoring & Logging',
      'Scalable Cloud Architectures'
    ]
  },
  {
    id: 5,
    icon: 'pi pi-chart-line',
    title: 'Data Analytics',
    description:
      'Harness the power of your data with advanced analytics and visualization solutions.',
    features: [
      'Real-time Dashboards',
      'Predictive Analytics',
      'Big Data Processing',
      'Machine Learning Integration'
    ]
  },
  {
    id: 6,
    icon: 'pi pi-bolt',
    title: 'Performance Optimization',
    description:
      'Enhance the speed, responsiveness, and efficiency of your web applications for an optimal user experience.',
    features: [
      'Load Time Reduction',
      'Resource Optimization',
      'Caching Strategies',
      'Code Splitting and Lazy Loading'
    ]
  }
]

const processSteps = [
  {
    label: 'Discovery',
    icon: 'pi pi-search',
    description: 'We dive deep into your business goals and requirements.',
    fullDescription:
      'In the Discovery phase, we conduct thorough research to understand your business, target audience, and project objectives. We analyze your competitors and identify opportunities for innovation.'
  },
  {
    label: 'Planning',
    icon: 'pi pi-file',
    description: 'We create a detailed roadmap for your project.',
    fullDescription:
      'During Planning, we outline the project scope, create timelines, and allocate resources. We define key milestones and deliverables to ensure a smooth development process.'
  },
  {
    label: 'Design',
    icon: 'pi pi-palette',
    description: 'We craft intuitive and visually appealing interfaces.',
    fullDescription:
      'In the Design phase, we create wireframes and prototypes to visualize the user interface. We focus on user experience (UX) principles to ensure your application is both beautiful and functional.'
  },
  {
    label: 'Development',
    icon: 'pi pi-cog',
    description: 'We bring your vision to life with clean, efficient code.',
    fullDescription:
      'During Development, our expert programmers write high-quality, scalable code. We follow best practices and use cutting-edge technologies to build robust and performant applications.'
  },
  {
    label: 'Testing',
    icon: 'pi pi-check-square',
    description: 'We rigorously test to ensure quality and reliability.',
    fullDescription:
      'In the Testing phase, we conduct thorough quality assurance checks. This includes functional testing, performance testing, and security audits to ensure your application is bug-free and secure.'
  },
  {
    label: 'Deployment',
    icon: 'pi pi-upload',
    description: 'We launch your application and ensure smooth operation.',
    fullDescription:
      'During Deployment, we carefully launch your application to production servers. We monitor the process closely to ensure a seamless transition and minimal downtime.'
  },
  {
    label: 'Maintenance',
    icon: 'pi pi-refresh',
    description: 'We provide ongoing support and updates.',
    fullDescription:
      'In the Maintenance phase, we offer continuous support and regular updates. We monitor performance, implement new features, and ensure your application stays up-to-date with the latest technologies and security standards.'
  },
  {
    label: 'Scaling',
    icon: 'pi pi-arrow-up',
    description: 'We ensure your solution can grow with your business.',
    fullDescription:
      'In the Scaling phase, we optimize your application to handle increased load and user base. We implement strategies for horizontal and vertical scaling, ensuring your solution remains performant as your business grows.'
  },
  {
    label: 'Continuous Improvement',
    icon: 'pi pi-chart-line',
    description: 'We constantly refine and enhance your digital solution.',
    fullDescription:
      'The Continuous Improvement phase involves ongoing analysis, feedback collection, and iterative enhancements. We stay proactive in implementing new features, optimizing performance, and adapting to changing market needs.'
  }
]

const teamMembers = [
  {
    name: 'The Architect',
    role: 'Full-stack Mastermind',
    avatar: '🧙‍♂️',
    description:
      'Designs and implements robust, scalable solutions across the entire technology stack.'
  },
  {
    name: 'The Visionary',
    role: 'UX/UI Wizard',
    avatar: '🎨',
    description: 'Crafts intuitive and visually stunning user interfaces that captivate and engage.'
  },
  {
    name: 'The Guardian',
    role: 'Security Specialist',
    avatar: '🛡️',
    description:
      'Ensures the highest level of security and data protection in all our applications.'
  },
  {
    name: 'The Accelerator',
    role: 'Performance Guru',
    avatar: '🚀',
    description:
      'Optimizes applications for lightning-fast performance and seamless user experiences.'
  },
  {
    name: 'The Connector',
    role: 'API Virtuoso',
    avatar: '🔗',
    description:
      'Creates powerful, efficient APIs that connect systems and unlock new possibilities.'
  }
]

const techStack = [
  { name: 'Frontend Frameworks', icon: 'pi pi-desktop', color: 'bg-blue-500' },
  { name: 'Backend Technologies', icon: 'pi pi-server', color: 'bg-green-500' },
  { name: 'Database Systems', icon: 'pi pi-database', color: 'bg-yellow-500' },
  { name: 'DevOps Tools', icon: 'pi pi-cog', color: 'bg-red-500' },
  { name: 'Cloud Platforms', icon: 'pi pi-cloud', color: 'bg-purple-500' },
  { name: 'Mobile Development', icon: 'pi pi-mobile', color: 'bg-indigo-500' }
]

const submitForm = async () => {
  submitted.value = true
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) return

  isSending.value = true
  try {
    const response = await axios.post(import.meta.env.VITE_API_URL, {
      email: form.email,
      message: form.message,
      hash: import.meta.env.VITE_SENDGRID_HASH_KEY
    })

    if (response.status === 200) {
      buttonText.value = 'Message Sent!'
      sent.value = true
    } else {
      buttonText.value = 'Error. Please try again.'
    }
  } catch (error) {
    buttonText.value = 'Error. Please try again.'
  } finally {
    isSending.value = false
  }
}

const getColorClass = (index: number) => {
  const colors = [
    'bg-honolulu-blue-100',
    'bg-lapis-lazuli-100',
    'bg-midnight-green-100',
    'bg-cinereous-100',
    'bg-silver-100'
  ]
  return colors[index % colors.length]
}

const getServiceColorClass = (id: number) => {
  const colors = [
    'bg-honolulu-blue-100',
    'bg-lapis-lazuli-100',
    'bg-midnight-green-100',
    'bg-cinereous-100',
    'bg-silver-100',
    'bg-honolulu-blue-100'
  ]
  return colors[id % colors.length]
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
    <section id="home" class="py-20 md:py-32 relative overflow-hidden">
      <div class="absolute inset-0 bg-honolulu-blue-50 dark:bg-honolulu-blue-900 opacity-30"></div>
      <div class="absolute inset-0 overflow-hidden">
        <img
          src="@/assets/hero-image.svg"
          alt="Digital Transformation"
          class="absolute h-full w-auto min-w-full object-cover object-left opacity-70 dark:opacity-50"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-white to-transparent dark:from-black dark:to-transparent"
        ></div>
      </div>
      <div class="relative z-10 md:w-1/2 lg:w-3/5">
        <div
          class="bg-white dark:bg-midnight-green-900 bg-opacity-80 dark:bg-opacity-80 p-6 rounded-lg shadow-md"
        >
          <h1
            class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-honolulu-blue-600 dark:text-honolulu-blue-400 mb-6 transition-all duration-300 transform hover:scale-105"
          >
            Elevate Your Digital Presence
          </h1>
          <p
            class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-300 mb-4 transition-opacity duration-300 ease-in-out"
          >
            At <strong>Make IT Logical</strong>, we don't just build websites and apps.
          </p>
          <p
            class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-300 mb-4 transition-opacity duration-300 ease-in-out"
          >
            We craft digital experiences that captivate, engage, and convert.
          </p>
          <p
            class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-300 mb-8 transition-opacity duration-300 ease-in-out"
          >
            Your vision, our expertise – together, we'll redefine what's possible in the digital
            realm.
          </p>
          <Button
            label="Ignite Your Digital Journey"
            icon="pi pi-rocket"
            class="text-lg bg-honolulu-blue-600 hover:bg-honolulu-blue-700 dark:bg-honolulu-blue-500 dark:hover:bg-honolulu-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            @click="props.scrollTo('#contact')"
          />
        </div>
      </div>
    </section>

    <section id="services" class="py-20 mt-8">
      <h2
        class="text-3xl md:text-4xl font-bold text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-400 mb-6 transition-all duration-300 transform hover:scale-105"
      >
        Our Services
      </h2>
      <p
        class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-300 mb-4 transition-opacity duration-300 ease-in-out"
      >
        From concept to execution, we deliver cutting-edge solutions that drive your business
        forward.
      </p>
      <p
        class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-300 mb-12 transition-opacity duration-300 ease-in-out"
      >
        Our services are tailored to meet the unique challenges of the digital age.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.id"
          class="bg-white dark:bg-midnight-green-800 rounded-lg shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-silver-200 dark:border-midnight-green-700"
        >
          <div
            class="p-6 flex justify-center items-center bg-honolulu-blue-50 dark:bg-honolulu-blue-900"
          >
            <i
              :class="[service.icon, 'text-6xl text-honolulu-blue-600 dark:text-honolulu-blue-400']"
            ></i>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-lapis-lazuli-600 dark:text-lapis-lazuli-400 mb-4">
              {{ service.title }}
            </h3>
            <p class="text-midnight-green-700 dark:text-silver-300 mb-4">
              {{ service.description }}
            </p>
            <ul class="space-y-2">
              <li v-for="feature in service.features" :key="feature" class="flex items-center">
                <i
                  class="pi pi-check-circle text-honolulu-blue-500 dark:text-honolulu-blue-400 mr-2"
                ></i>
                <span class="text-midnight-green-700 dark:text-silver-300">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="process" class="py-20 mt-8 relative">
      <div class="absolute inset-0 bg-lapis-lazuli-50 dark:bg-lapis-lazuli-900 opacity-70"></div>
      <div class="absolute inset-0 overflow-hidden">
        <img
          src="@/assets/process.png"
          alt="Our Process"
          class="w-full h-full object-cover opacity-30 dark:opacity-20"
        />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto">
        <h2
          class="text-3xl md:text-4xl font-bold text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-400 mb-6 transition-all duration-300 transform hover:scale-105"
        >
          Our Proven Process
        </h2>
        <p
          class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-300 mb-2 transition-opacity duration-300 ease-in-out"
        >
          We've refined our approach to ensure every project is a success.
        </p>
        <p
          class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-300 mb-8 transition-opacity duration-300 ease-in-out"
        >
          Our process is designed to maximize efficiency, creativity, and results.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(step, index) in processSteps"
            :key="step.label"
            class="bg-white dark:bg-midnight-green-800 rounded-lg p-4 shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-silver-200 dark:border-midnight-green-700"
          >
            <div class="flex items-center mb-3">
              <div
                class="w-10 h-10 bg-honolulu-blue-50 dark:bg-honolulu-blue-900 rounded-full flex items-center justify-center text-honolulu-blue-600 dark:text-honolulu-blue-400 text-xl font-bold mr-4"
              >
                <i :class="step.icon"></i>
              </div>
              <h3 class="text-lg font-bold text-lapis-lazuli-600 dark:text-lapis-lazuli-400">
                {{ step.label }}
              </h3>
            </div>
            <p class="text-midnight-green-700 dark:text-silver-300 mb-2">{{ step.description }}</p>
            <p class="text-midnight-green-600 dark:text-silver-400 text-sm">
              {{ step.fullDescription }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="team" class="py-20 mt-8">
      <h2
        class="text-3xl md:text-4xl font-bold text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-400 mb-6 transition-all duration-300 transform hover:scale-105"
      >
        Our Team
      </h2>
      <p
        class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-300 mb-4 transition-opacity duration-300 ease-in-out"
      >
        At <strong>Make IT Logical</strong>, we're more than just developers – we're innovators,
        problem-solvers, and digital architects.
      </p>
      <p
        class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-300 mb-4 transition-opacity duration-300 ease-in-out"
      >
        Our passion for technology and commitment to excellence drive us to tackle the most complex
        challenges head-on.
      </p>
      <p
        class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-300 mb-12 transition-opacity duration-300 ease-in-out"
      >
        Our team combines diverse skills to deliver exceptional results. Each role is crucial in
        bringing your vision to life:
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div
          v-for="member in teamMembers"
          :key="member.name"
          class="bg-white dark:bg-midnight-green-800 rounded-lg shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-silver-200 dark:border-midnight-green-700"
        >
          <div class="text-5xl mb-4">{{ member.avatar }}</div>
          <h3 class="text-xl font-bold text-lapis-lazuli-600 dark:text-lapis-lazuli-400 mb-2">
            {{ member.name }}
          </h3>
          <p class="text-midnight-green-700 dark:text-silver-300">{{ member.role }}</p>
          <Button icon="pi pi-info-circle" class="mt-4" v-tooltip.top="member.description" />
        </div>
      </div>
    </section>

    <section id="contact" class="py-20 mt-8 relative">
      <div class="absolute inset-0 bg-silver-100 dark:bg-midnight-green-900 opacity-70"></div>
      <div class="absolute inset-0 overflow-hidden">
        <img
          src="@/assets/services.png"
          alt="Our Services"
          class="w-full h-full object-cover opacity-30 dark:opacity-20"
        />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto">
        <h2
          class="text-3xl md:text-4xl font-bold text-center text-lapis-lazuli-600 dark:text-lapis-lazuli-400 mb-6 transition-all duration-300 transform hover:scale-105"
        >
          Let's Create Something Amazing
        </h2>
        <p
          class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-300 mb-4 transition-opacity duration-300 ease-in-out"
        >
          Ready to take your digital presence to the next level?
        </p>
        <p
          class="text-lg md:text-xl text-midnight-green-700 dark:text-silver-300 mb-8 transition-opacity duration-300 ease-in-out"
        >
          We're here to turn your vision into reality. Let's start a conversation and explore the
          possibilities together.
        </p>
        <div class="max-w-7xl mx-auto transition-all duration-300 transform hover:scale-105">
          <Card
            class="bg-white dark:bg-midnight-green-800 shadow hover:shadow-md rounded-lg overflow-hidden border border-silver-200 dark:border-midnight-green-700"
          >
            <template #content>
              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      for="name"
                      class="block mb-2 font-semibold text-midnight-green-700 dark:text-silver-300"
                    >
                      Name
                    </label>
                    <InputText
                      id="name"
                      v-model="form.name"
                      class="w-full p-inputtext-lg border-2 border-silver-300 dark:border-silver-700 rounded-md focus:border-honolulu-blue-500 dark:focus:border-honolulu-blue-400 transition-colors duration-300"
                      :class="{ 'p-invalid': v$.name.$invalid && submitted }"
                    />
                    <small class="p-error" v-if="v$.name.$invalid && submitted">
                      Name is required
                    </small>
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block mb-2 font-semibold text-midnight-green-700 dark:text-silver-300"
                      >Email</label
                    >
                    <InputText
                      id="email"
                      v-model="form.email"
                      class="w-full border-2 border-silver-300 dark:border-silver-700 rounded-md focus:border-honolulu-blue-500 dark:focus:border-honolulu-blue-400 transition-colors duration-300"
                      :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                    />
                    <small class="p-error" v-if="v$.email.$invalid && submitted">{{
                      v$.email.$errors[0].$message
                    }}</small>
                  </div>
                </div>
                <div>
                  <label
                    for="message"
                    class="block mb-2 font-semibold text-midnight-green-700 dark:text-silver-300"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    v-model="form.message"
                    rows="5"
                    class="w-full border-2 border-silver-300 dark:border-silver-700 rounded-md focus:border-honolulu-blue-500 dark:focus:border-honolulu-blue-400 transition-colors duration-300"
                    :class="{ 'p-invalid': v$.message.$invalid && submitted }"
                  />
                  <small class="p-error" v-if="v$.message.$invalid && submitted"
                    >Message is required
                  </small>
                </div>
                <Button
                  type="submit"
                  :label="buttonText"
                  icon="pi pi-send"
                  class="w-full text-white bg-honolulu-blue-600 hover:bg-honolulu-blue-700 dark:bg-honolulu-blue-500 dark:hover:bg-honolulu-blue-600 transition-all duration-300 py-3 rounded-full"
                  :loading="isSending"
                  :disabled="isSending || sent"
                />
              </form>
            </template>
          </Card>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
section#home,
section#about,
section#process,
section#contact {
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  padding-left: calc(50vw - 50%);
  padding-right: calc(50vw - 50%);
}
</style>
