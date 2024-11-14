<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import MainHeader from "@/components/MainHeader.vue";
import SubHeader from "@/components/SubHeader.vue";
import ExpandableList from "@/components/ExpandableList.vue";
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";

interface Technology {
  name: string;
  category: string;
  description: string;
  useCases: string[];
  tag: string;
}

interface ToolsPageTexts {
  mainHeader: string;
  subHeader: {
    first: string;
  };
  technologies: Technology[];
}

const texts = ref<ToolsPageTexts | null>(null);

onMounted(async () => {
  const response = await fetch('/toolsPageTexts.json');
  texts.value = await response.json();
});

const groupedTechnologies = computed(() => {
  if (!texts.value) return [];

  const groups = {
    "Programming Languages": ["JavaScript", "TypeScript", "PHP", "Python"],
    "Web Development Frameworks": ["Symfony", "Laravel", "Vue.js"],
    "Runtime Environments": ["Node.js"],
    "Content Management Systems": ["WordPress", "WooCommerce"],
    "Web Design Tools": ["Bootstrap", "Tailwind CSS"],
    "Databases and Messaging": ["MySQL", "Apache Kafka", "RabbitMQ"],
    "Web Analytics": ["Google Analytics", "Google Search Console"],
    "Search and Log Analysis": ["Elasticsearch", "Kibana"],
    "Container Technologies": ["Docker", "Kubernetes"],
    "Infrastructure Management": [
      "Terraform",
      "AWS",
      "GCP",
      "On-Premise Infrastructure"
    ],
    "Development Collaboration": ["GitHub Actions", "Git"],
    "Web Performance and Security": ["Cloudflare"],
    "System Monitoring": ["Grafana", "Uptime Kuma", "Prometheus", "Sentry"],
    "Automated Testing": ["Cypress"],
    "AI and Automation": ["OpenAI", "Claude"]
  };

  return Object.entries(groups).map(([groupName, techNames]) => ({
    name: groupName,
    items: techNames.map((name) => {
      const tech = texts.value?.technologies.find((t) => t.name === name);
      if (!tech) return null;
      return {
        title: tech.name,
        tag: tech.tag,
        additionalInfo: tech.description,
        sublists: [{
          title: "Use Cases",
          items: tech.useCases.map(uc => ({ text: uc }))
        }]
      };
    }).filter((item) => item !== null)
  }));
});
</script>

<template>
  <div v-if="texts">
    <MainHeader :text="texts.mainHeader" />
    <SubHeader :first="texts.subHeader.first" />
    <BottomToTopSlideTransition>
      <div v-for="group in groupedTechnologies" :key="group.name" class="mb-8 flex flex-col gap-8">
        <h2 class="max-w-4xl text-2xl md:text-3xl font-bold text-gray-500 dark:text-gray-400">{{ group.name }}</h2>
        <ExpandableList :items="group.items" :grouped="false" />
      </div>
    </BottomToTopSlideTransition>
  </div>
</template>