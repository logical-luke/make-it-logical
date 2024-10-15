<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import MainHeader from "@/components/MainHeader.vue";
import SubHeader from "@/components/SubHeader.vue";
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";
import LinkItem from "@/components/LinkItem.vue";

const { t } = useI18n();

const termsOfService = ref([
  {
    title: t("Introduction"),
    content: [
      t(
        "These terms and conditions outline the rules and regulations for using Make IT Logical's Website and Services.",
      ),
      t(
        "By accessing our Website or using our Services, we assume you accept these terms and conditions. Do not continue to use Make IT Logical if you do not agree to take all of the terms and conditions stated on this page.",
      ),
    ],
  },
  {
    title: t("Definitions"),
    content: [t("For the purposes of these Terms and Conditions:")],
    definitions: [
      {
        term: t("Company"),
        description: t(
          '(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) Make IT Logical, registered as Łukasz Ziaja, al. Wiśniowa 36a/304 53-137 Wrocław, Poland',
        ),
      },
      {
        term: t("Service"),
        description: t(
          "Refers to the Website https://makeitlogical.io and any software development services provided by the Company",
        ),
      },
      {
        term: t("Website"),
        description: t(
          "The website operated by Make IT Logical, accessible from https://makeitlogical.io",
        ),
      },
      {
        term: t("You"),
        description: t(
          "The individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service",
        ),
      },
    ],
  },
  {
    title: t("Use of Service"),
    content: [
      t(
        "Our Service may contain links to third-party web sites or services that are not owned or controlled by Make IT Logical. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.",
      ),
      t(
        "You further acknowledge and agree that Make IT Logical shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.",
      ),
    ],
  },
  {
    title: t("Intellectual Property"),
    content: [
      t(
        "Unless otherwise stated, Make IT Logical and/or its licensors own the intellectual property rights for all material on the Website and in the Services provided. All intellectual property rights are reserved.",
      ),
    ],
    list: [
      t(
        "You may view and/or print pages from the Website for your own personal use subject to restrictions set in these terms and conditions.",
      ),
      t(
        "You must not use any part of the content on our Website for commercial purposes without obtaining a license to do so from us or our licensors.",
      ),
    ],
  },
  {
    title: t("Limitation of Liability"),
    content: [
      t(
        "To the fullest extent permitted by applicable law, in no event will Make IT Logical, its affiliates, officers, directors, employees, agents, suppliers or licensors be liable for any indirect, special, incidental, punitive, exemplary or consequential damages of any kind arising from or relating to these terms or your use of the Services.",
      ),
    ],
  },
  {
    title: t("Changes to Service"),
    content: [
      t(
        "We reserve the right to withdraw or amend our Service, and any service or material we provide via the Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Service is unavailable at any time or for any period.",
      ),
    ],
  },
  {
    title: t("Amendments to Terms"),
    content: [
      t(
        "We may amend these Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.",
      ),
    ],
  },
]);
</script>

<template>
  <section id="terms-of-service">
    <MainHeader>
      {{ t("Terms and Conditions") }}
    </MainHeader>
    <SubHeader
      first="In our commitment to transparency and clarity, we present our comprehensive terms and conditions."
      second="These guidelines are designed to ensure a logical and straightforward understanding of our mutual obligations."
    />
    <BottomToTopSlideTransition duration="1300">
      <div class="flex flex-col gap-4 max-w-4xl">
        <BottomToTopSlideTransition>
          <div
            v-for="(section, index) in termsOfService"
            :key="index"
            class="mb-6"
          >
            <h2 class="text-xl font-bold mb-2">{{ section.title }}</h2>
            <p
              v-for="(paragraph, pIndex) in section.content"
              :key="pIndex"
              class="mb-2"
            >
              {{ paragraph }}
            </p>
            <ul v-if="section.list" class="list-disc pl-5 mb-2">
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
        </BottomToTopSlideTransition>
        <BottomToTopSlideTransition>
          <div class="flex flex-col gap-2">
            <h2 class="text-xl font-bold mb-2">{{ t("Contact Us") }}</h2>
            <p>
              {{
                t(
                  "If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us:",
                )
              }}
            </p>
            <ul class="list-disc pl-5 mb-2 space-y-4 mt-4">
              <li>
                {{ t("By email:") }}
                <LinkItem
                  class="mt-2"
                  :disable-icon="true"
                  :external="true"
                  to="mailto:office@makeitlogical.io"
                  text="office@makeitlogical.io"
                />
              </li>
              <li>
                {{ t("By phone:") }}
                <LinkItem
                  class="mt-2"
                  :disable-icon="true"
                  :external="true"
                  to="tel:+48696606391"
                  text="+48 696 606 391"
                />
              </li>
            </ul>
          </div>
        </BottomToTopSlideTransition>
      </div>
    </BottomToTopSlideTransition>
  </section>
</template>
