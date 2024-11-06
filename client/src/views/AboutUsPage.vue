<script setup lang="ts">
import { ref } from "vue";
import MainHeader from "@/components/MainHeader.vue";
import SubHeader from "@/components/SubHeader.vue";
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";

const missionStatement = ref(
  "Empowering businesses with tailored digital solutions that drive growth and innovation."
);

const coreValues = ref([
  {
    title: "Client-Centric Approach",
    description: "Prioritizing client success through solutions aligned with unique business needs and goals."
  },
  {
    title: "Technical Excellence",
    description: "Staying at the forefront of web technologies to build solid, future-proof foundations."
  },
  {
    title: "Transparency",
    description: "Fostering trust and productive partnerships through clear communication and honest feedback."
  },
  {
    title: "Continuous Improvement",
    description: "Commitment to ongoing learning, refining skills to deliver ever-improving solutions."
  }
]);

const philosophy = ref([
  {
    title: "Quality Over Quantity",
    description: "Delivering high-quality, impactful solutions with full attention and expertise for each project."
  },
  {
    title: "Collaborative Partnership",
    description: "Viewing clients as partners, working closely to realize visions and meet goals."
  },
  {
    title: "Adaptability",
    description: "Quickly adapting to new challenges and opportunities in the fast-paced world of web technology."
  },
  {
    title: "Sustainable Solutions",
    description: "Creating scalable and maintainable solutions that meet current needs and future demands."
  }
]);

</script>

<template>
  <section class="about-page">
    <MainHeader text="About Us" />
    <SubHeader :first="missionStatement" />

    <BottomToTopSlideTransition>
      <div class="mt-12 md:mt-16">
        <h2 class="mb-6 max-w-4xl text-2xl md:text-3xl font-bold text-gray-500 dark:text-gray-400">Our Approach</h2>
        <p class="mb-8 text-base max-w-4xl">
          Specializing in bespoke web solutions, this agency addresses unique challenges and opportunities for each client. A lean, agile approach delivers high-quality results efficiently, without the overhead of larger agencies.
        </p>
      </div>
    </BottomToTopSlideTransition>

    <BottomToTopSlideTransition>
      <div class="mt-12 md:mt-16">
        <h2 class="mb-6 max-w-4xl text-2xl md:text-3xl font-bold text-gray-500 dark:text-gray-400">Core Values</h2>
        <ul class="list-disc pl-6 space-y-6 max-w-4xl">
          <li v-for="value in coreValues" :key="value.title" class="text-base">
            <strong>{{ value.title }}:</strong> {{ value.description }}
          </li>
        </ul>
      </div>
    </BottomToTopSlideTransition>

    <BottomToTopSlideTransition>
      <div class="mt-12 md:mt-16">
        <h2 class="mb-6 max-w-4xl text-2xl md:text-3xl font-bold text-gray-500 dark:text-gray-400">Our Philosophy</h2>
        <ul class="list-disc pl-6 space-y-6 max-w-4xl">
          <li v-for="item in philosophy" :key="item.title" class="text-base">
            <strong>{{ item.title }}:</strong> {{ item.description }}
          </li>
        </ul>
      </div>
    </BottomToTopSlideTransition>

    <BottomToTopSlideTransition>
      <div class="mt-12 md:mt-16">
        <h2 class="mb-6 max-w-4xl text-2xl md:text-3xl font-bold text-gray-500 dark:text-gray-400">Why Choose Us?</h2>
        <div class="space-y-6 max-w-4xl">
          <p class="text-base">
            Offering personalized attention and flexibility of a boutique agency, combined with technical prowess for complex projects. The focus on long-term relationships ensures investment in client success beyond product delivery.
          </p>
          <p class="text-base">
            From startups establishing digital presence to established businesses modernizing web infrastructure, the skills and dedication are here to turn visions into reality.
          </p>
        </div>
      </div>
    </BottomToTopSlideTransition>
  </section>
</template>