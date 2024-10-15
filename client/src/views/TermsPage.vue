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
        "These terms and conditions outline the rules and regulations for using Make IT Logical's Website, located at https://makeitlogical.io.",
      ),
      t(
        "By accessing this Website, we assume you accept these terms and conditions. Only continue to use Make IT Logical if you agree to take all the terms and conditions stated on this page.",
      ),
    ],
  },
  {
    title: t("Cookies"),
    content: [
      t(
        "We employ the use of cookies. By accessing Make IT Logical, you agree to use cookies in agreement with Make IT Logical's Privacy Policy.",
      ),
      t(
        "Most interactive websites use cookies to let us retrieve the user's details for each visit. Our Website uses cookies to enable the functionality of certain areas to make it easier for people visiting our Website. Some of our affiliate/advertising partners may also use cookies.",
      ),
    ],
  },
  {
    title: t("License"),
    content: [
      t(
        "Unless otherwise stated, Make IT Logical and/or its licensors own the intellectual property rights for all material on Make IT Logical. All intellectual property rights are reserved. You may access this from Make IT Logical for your personal use, subject to restrictions set in these terms and conditions.",
      ),
    ],
    list: [
      t("Republish material from Make IT Logical"),
      t("Sell, rent, or sub-license material from Make IT Logical"),
      t("Reproduce, duplicate, or copy material from Make IT Logical"),
      t("Redistribute content from Make IT Logical"),
    ],
  },
  {
    title: t("Hyperlinking to our Content"),
    content: [
      t(
        "Any organizations may link to our home page, publications, or other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.",
      ),
    ],
  },
  {
    title: t("Content Liability"),
    content: [
      t(
        "We shall not be held responsible for any content on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal or which infringes, otherwise violates, or advocates the infringement or other violation of any third-party rights.",
      ),
    ],
  },
  {
    title: t("Reservation of Rights"),
    content: [
      t(
        "We reserve the right to request that you remove all links or any particular link to our Website. You approve to remove all links to our Website upon request immediately. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.",
      ),
    ],
  },
  {
    title: t("Disclaimer"),
    content: [
      t(
        "To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our Website and the use of this Website.",
      ),
    ],
    list: [
      t(
        "limit or exclude our or your liability for fraud or fraudulent misrepresentation;",
      ),
      t(
        "modify any of our or your liabilities in any way that is not permitted under applicable law; or",
      ),
      t(
        "exclude any of our or your liabilities that may not be excluded under applicable law.",
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
    <SubHeader>
      {{
        t(
          "In our commitment to transparency and clarity, we present our comprehensive terms and conditions.",
        )
      }}
      <template #second>
        {{
          t(
            "These guidelines are designed to ensure a logical and straightforward understanding of our mutual obligations.",
          )
        }}
      </template>
    </SubHeader>
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
            <ul class="list-disc pl-5 mb-2 space-y-4">
              <li>
                {{ t("By email:") }}
                <LinkItem
                  :disable-icon="true"
                  :external="true"
                  to="mailto:office@makeitlogical.io"
                >
                  office@makeitlogical.io
                </LinkItem>
              </li>
              <li>
                {{ t("By phone:") }}
                <LinkItem
                  :disable-icon="true"
                  :external="true"
                  to="tel:+48696606391"
                >
                  +48 696 606 391
                </LinkItem>
              </li>
            </ul>
          </div>
        </BottomToTopSlideTransition>
      </div>
    </BottomToTopSlideTransition>
  </section>
</template>
