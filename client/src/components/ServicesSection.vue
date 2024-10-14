<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();

import { ref } from "vue";
import HomePageSection from "@/components/HomePageSection.vue";
import ExpandableList from "@/components/ExpandableList.vue";
import LinkItem from "@/components/LinkItem.vue";

const services = ref([
  {
    title: t("Planning & Leadership"),
    additionalInfo: t(
      "We transform visions into actionable plans. Our approach aligns technology with business goals, creating clear roadmaps for success. By coordinating cross-functional teams, we ensure smooth project delivery. The result? Streamlined operations, improved performance, and faster time-to-market. Our leadership doesn't just manage projects; it drives innovation and maximizes ROI.",
    ),
  },
  {
    title: t("User Experience Design"),
    additionalInfo: t(
      "Great design goes beyond aesthetics; it solves problems. We start with in-depth user research, uncovering needs and pain points. This insight drives our design process, resulting in intuitive interfaces that users love. We iterate based on feedback, ensuring each design decision enhances user satisfaction. The outcome is increased engagement, higher retention rates, and a strong competitive edge.",
    ),
  },
  {
    title: t("Development"),
    additionalInfo: t(
      "Code is the backbone of digital success. We build robust, scalable solutions using cutting-edge technologies. Our development process emphasizes quality, security, and performance. We create flexible architectures that grow with your business, ensuring long-term value. The result is software that not only meets current needs but is primed for future challenges.",
    ),
  },
  {
    title: t("Operations"),
    additionalInfo: t(
      "Smooth operations are crucial for business continuity. We implement efficient systems for software delivery and updates, enhancing reliability and performance. Our approach optimizes resource utilization and implements proactive monitoring. This leads to reduced downtime, improved security, and significant cost savings. We turn potential technical headaches into operational strengths.",
    ),
  },
  {
    title: t("Improvements"),
    additionalInfo: t(
      "In the digital world, standing still means falling behind. We provide continuous enhancements to keep your software at peak performance. Regular audits identify optimization opportunities in functionality, security, and user experience. We implement updates that not only fix issues but add value. The result is software that evolves with your business, consistently meeting and exceeding user expectations.",
    ),
  },
  {
    title: t("Modernization"),
    additionalInfo: t(
      "Legacy systems often hold untapped potential. Our modernization approach preserves valuable business logic while upgrading technology. We implement modern architectures and cloud solutions, enhancing performance and scalability. This process not only extends the life of your software but opens new possibilities for innovation. The outcome is revitalized systems that drive business growth and efficiency.",
    ),
  },
  {
    title: t("Search Engine Optimization"),
    additionalInfo: t(
      "Visibility is key in the digital marketplace. Our SEO strategies go beyond keywords, focusing on creating valuable, relevant content. We optimize website structure and performance, enhancing user experience and search rankings. Our data-driven approach continuously refines strategies for maximum impact. The result is increased organic traffic, better user engagement, and improved conversion rates.",
    ),
  },
]);

const serviceItems = services.value.map((service) => ({
  title: service.title,
  sublists: [],
  additionalInfo: service.additionalInfo,
}));
</script>

<template>
  <HomePageSection title="Solutions That Resonate">
    <p class="text-lg md:text-2xl mb-4 max-w-4xl">
      {{ t("We don't just build apps.") }}
    </p>
    <p class="text-lg md:text-2xl mb-12 max-w-4xl">
      {{ t("We craft experiences that connect, engage, and inspire.") }}
    </p>
    <ExpandableList :items="serviceItems" />
    <div class="flex justify-center mt-8">
      <LinkItem to="/services">
        {{ t("Explore Services") }}
      </LinkItem>
    </div>
  </HomePageSection>
</template>

<style scoped></style>
