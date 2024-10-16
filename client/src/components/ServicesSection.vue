<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

import { ref } from "vue";
import HomePageSection from "@/components/HomePageSection.vue";
import ExpandableList from "@/components/ExpandableList.vue";

const services = ref([
  {
    title: t("Software Development & Engineering"),
    additionalInfo: t(
      "Your business needs more than just code – it requires tailored digital solutions. We craft scalable, high-performing software that evolves with your ambitions. By diving deep into your unique challenges, we create systems that not only streamline processes but revolutionize operations. Our focus on quality and security forms the bedrock of every solution, allowing you to concentrate on driving your business forward while we handle the complex engineering.",
    ),
    tag: t("Custom software to automate processes & boost productivity"),
  },
  {
    title: t("User Experience (UX) Design"),
    additionalInfo: t(
      "In the digital realm, user experience can make or break success. We begin by immersing ourselves in your users' world, uncovering their needs and pain points. This insight drives our design process, resulting in interfaces that feel tailor-made for your audience. Through ongoing collaboration and refinement, we ensure every interaction delights your users. The end product is a digital experience that not only meets expectations but fosters loyalty, setting you apart in a crowded market.",
    ),
    tag: t("Intuitive interfaces to increase user satisfaction & retention"),
  },
  {
    title: t("IT Operations & Maintenance"),
    additionalInfo: t(
      "A robust IT infrastructure is the backbone of business success. Our services transform potential technical challenges into operational strengths. We implement comprehensive systems for software delivery, updates, and proactive monitoring, all customized to your specific needs. This approach minimizes downtime, enhances security, and yields significant cost savings. Consider us your behind-the-scenes tech guardians, ensuring your systems run smoothly so you can focus on innovation and growth.",
    ),
    tag: t("Systems management to minimize downtime & reduce costs"),
  },
  {
    title: t("Technology Planning & Project Leadership"),
    additionalInfo: t(
      "Navigating the digital landscape requires a clear roadmap. Our technology planning and project leadership provide that crucial direction. We align your tech initiatives with business objectives, creating strategies that drive tangible results. Our experienced project leaders coordinate teams and ensure smooth delivery, leading to streamlined operations and faster time-to-market. By anticipating obstacles and driving innovation, we help you turn technological challenges into opportunities for growth.",
    ),
    tag: t("Strategic tech planning to accelerate growth & maximize ROI"),
  },
  {
    title: t("Software Optimization & Enhancements"),
    additionalInfo: t(
      "In today's fast-paced digital environment, static software quickly becomes obsolete. Our optimization services ensure your applications stay ahead of the curve. Through regular audits, we uncover hidden potential in your software and implement strategic enhancements. This proactive approach boosts performance, increases user satisfaction, and unlocks new capabilities. By aligning closely with your team, we transform your software into a dynamic asset that adapts to emerging market opportunities.",
    ),
    tag: t("Improvements to enhance user experience & business value"),
  },
  {
    title: t("System Modernization & Cloud Migration"),
    additionalInfo: t(
      "Don't let old systems hinder your progress. Our modernization and cloud migration services propel your infrastructure into the future. We begin by preserving valuable business logic while upgrading to cutting-edge architectures and cloud solutions. This transformation enhances performance, scalability, and efficiency. The move to cloud opens doors to advanced data analysis, seamless remote work, and rapid deployment. Together, we'll convert technological debt into a competitive advantage, positioning your business at the forefront of your industry.",
    ),
    tag: t("Upgrades to improve scalability & reduce costs"),
  },
  {
    title: t("Search Engine Optimization (SEO)"),
    additionalInfo: t(
      "In the vast digital landscape, effective SEO acts as your beacon, guiding potential customers to your business. Our strategies extend beyond basic keyword optimization, focusing on creating a robust online presence that resonates with both search engines and your target audience. Through in-depth research, content optimization, and technical enhancements, we elevate your website's visibility and authority. Our data-driven approach ensures your online presence remains strong and relevant, leading to increased organic traffic and establishing your brand as an industry authority.",
    ),
    tag: t("Traffic-boosting strategies to increase visibility & conversions"),
  },
]);

const serviceItems = services.value.map((service) => ({
  title: service.title,
  sublists: [],
  additionalInfo: service.additionalInfo,
  tag: service.tag,
}));
</script>

<template>
  <HomePageSection
    title="Custom Software & Web Solutions"
    link-target="/services"
    link-text="Explore Services"
  >
    <p class="flex flex-col gap-2 md:text-lg mb-12 max-w-4xl">
      <span>{{
        t("Uer-centric digital experiences that drives your business growth.")
      }}</span>
      <span>{{
        t(
          "Comprehensive suite of software and web development services to unlock new opportunities.",
        )
      }}</span>
    </p>
    <ExpandableList :items="serviceItems" />
  </HomePageSection>
</template>

<style scoped></style>
