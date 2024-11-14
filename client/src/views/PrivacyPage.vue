<script setup lang="ts">
import { ref, onMounted } from "vue";
import MainHeader from "@/components/MainHeader.vue";
import SubHeader from "@/components/SubHeader.vue";
import LinkItem from "@/components/LinkItem.vue";

interface PrivacyPageTexts {
  mainHeader: string;
  subHeader: {
    first: string;
    second: string;
  };
  privacyPolicy: Array<{
    title: string;
    content: string[];
    definitions?: Array<{ term: string; description: string }>;
    list?: string[];
  }>;
  contactUs: {
    title: string;
    content: string;
    email: { label: string; value: string };
    phone: { label: string; value: string };
  };
}

const texts = ref<PrivacyPageTexts | null>(null);

onMounted(async () => {
  const response = await fetch("/privacyPageTexts.json");
  texts.value = await response.json();
});
</script>

<template>
  <section v-if="texts" id="privacy-policy">
    <MainHeader :text="texts.mainHeader" />
    <SubHeader
      :first="texts.subHeader.first"
      :second="texts.subHeader.second"
    />
    <div class="flex flex-col gap-6 max-w-4xl">
      <div v-for="(section, index) in texts.privacyPolicy" :key="index">
        <div class="mb-6">
          <h2 class="text-xl font-bold mb-2">{{ section.title }}</h2>
          <p
            v-for="(paragraph, pIndex) in section.content"
            :key="pIndex"
            class="mb-2"
          >
            {{ paragraph }}
          </p>
          <ul v-if="section.list" class="list-disc pl-5 mb-4">
            <li v-for="(item, iIndex) in section.list" :key="iIndex">
              {{ item }}
            </li>
          </ul>
          <div v-if="section.definitions" class="space-y-4">
            <div
              v-for="(def, dIndex) in section.definitions"
              :key="dIndex"
              class="mb-2"
            >
              <strong>{{ def.term }}:</strong> {{ def.description }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h2 class="text-xl font-bold mb-2">{{ texts.contactUs.title }}</h2>
        <p>
          {{ texts.contactUs.content }}
        </p>
        <ul class="list-disc pl-5 mb-2 space-y-4 mt-4">
          <li>
            {{ texts.contactUs.email.label }}
            <LinkItem
              class="mt-2"
              :disable-icon="true"
              :external="true"
              :to="`mailto:${texts.contactUs.email.value}`"
              :text="texts.contactUs.email.value"
            />
          </li>
          <li>
            {{ texts.contactUs.phone.label }}
            <LinkItem
              class="mt-2"
              :disable-icon="true"
              :external="true"
              :to="`tel:${texts.contactUs.phone.value}`"
              :text="texts.contactUs.phone.value"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>