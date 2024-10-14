<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import LinkItem from "@/components/LinkItem.vue";
import BottomToTopSlideTransition from "@/components/BottomToTopSlideTransition.vue";
import BulbShape from "@/components/BulbShape.vue";
import ExpandableList from "@/components/ExpandableList.vue";
import TechnologySlider from "@/components/TechnologySlider.vue";

const { t } = useI18n();

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

const processSteps = ref([
  {
    label: t("Listen"),
    additionalInfo: t(
      "Understanding is the foundation of success. We begin by deeply exploring your business goals, challenges, and vision. This phase involves comprehensive market research and stakeholder interviews. We analyze competitors, identify opportunities, and define clear, measurable objectives. The outcome is a well-defined project roadmap that aligns technology initiatives with business strategy, setting the stage for impactful solutions.",
    ),
  },
  {
    label: t("Design"),
    additionalInfo: t(
      "Good design bridges user needs and business goals. We create user personas and journey maps to guide our process. Our designs balance aesthetics with functionality, ensuring intuitive user experiences. We use rapid prototyping and user testing to validate concepts early. This approach leads to interfaces that not only look great but significantly enhance user satisfaction and task completion rates.",
    ),
  },
  {
    label: t("Build"),
    additionalInfo: t(
      "Quality development is an investment in your future. We employ agile methodologies to ensure flexibility and continuous delivery. Our coding standards emphasize cleanliness, efficiency, and security. We integrate robust testing frameworks to maintain high quality throughout development. The result is reliable, scalable software that forms a solid foundation for your digital presence.",
    ),
  },
  {
    label: t("Deliver"),
    additionalInfo: t(
      "Launching is just the beginning of the journey. We ensure a smooth transition from development to production with comprehensive testing and staged rollouts. Our process includes thorough documentation and user training to facilitate adoption. We set up monitoring systems for proactive issue resolution. This phase culminates in the successful deployment of your solution, ready to deliver real-world value.",
    ),
  },
  {
    label: t("Improve"),
    additionalInfo: t(
      "Digital solutions thrive on continuous improvement. We implement analytics to gather insights on user behavior and system performance. Regular feedback sessions with users and stakeholders guide our enhancement strategies. We prioritize updates based on business impact and user needs. This ongoing process ensures your solution remains cutting-edge, continuously adapting to new challenges and opportunities.",
    ),
  },
]);

const serviceItems = services.value.map((service) => ({
  title: service.title,
  sublists: [],
  additionalInfo: service.additionalInfo,
}));

const processItems = processSteps.value.map((step) => ({
  title: step.label,
  sublists: [],
  additionalInfo: step.additionalInfo,
}));
</script>

<template>
  <div class="flex flex-col gap-24">
    <section class="min-h-[calc(100vh-80px)] flex flex-col md:flex-row">
      <div class="w-full md:w-1/2 mb-8 md:mb-0">
        <BottomToTopSlideTransition duration="700">
          <h1
            class="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight"
          >
            {{ t("Get Software") }}<br />
            {{ t("Not Confusion") }}
          </h1>
        </BottomToTopSlideTransition>
        <BottomToTopSlideTransition duration="1300">
          <h2
            class="flex flex-col font-semibold text-lg md:text-3xl lg:text-4xl leading-tight"
          >
            <span class="text-primary font-normal">{{
              t("We simply deliver complete")
            }}</span>
            {{ t("digital solutions") }}
          </h2>
        </BottomToTopSlideTransition>
      </div>
      <div class="w-full md:w-1/2 mt-10 md:mt-0 -ml-7">
        <BulbShape />
      </div>
    </section>

    <BottomToTopSlideTransition>
      <section>
        <h2
          class="text-gray-500 dark:text-gray-400 text-2xl md:text-5xl font-bold mb-12"
        >
          {{ t("Solutions That Resonate") }}
        </h2>
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
      </section>
    </BottomToTopSlideTransition>
    <BottomToTopSlideTransition>
      <section>
        <h2
          class="text-gray-500 dark:text-gray-400 text-xl md:text-4xl font-bold mb-6"
        >
          {{ t("Technologies We Work With") }}
        </h2>
        <p class="text-lg md:text-2xl mb-8 max-w-4xl">
          {{
            t(
              "While these are our primary technologies, we're always open to exploring new tools that best fit your project needs.",
            )
          }}
        </p>
        <TechnologySlider />
      </section>
    </BottomToTopSlideTransition>
    <BottomToTopSlideTransition>
      <section>
        <h2
          class="text-gray-500 dark:text-gray-400 text-2xl md:text-5xl font-bold mb-12 max-w-4xl"
        >
          {{ t("Digital Orchestra") }}
        </h2>
        <ExpandableList :items="processItems" />
        <div class="flex justify-center mt-8">
          <LinkItem to="/process">
            {{ t("Discover Process") }}
          </LinkItem>
        </div>
      </section>
    </BottomToTopSlideTransition>
    <BottomToTopSlideTransition>
      <section>
        <h2
          class="text-gray-500 dark:text-gray-400 text-2xl md:text-5xl font-bold mb-12 max-w-4xl"
        >
          {{ t("Ready for a Journey?") }}
        </h2>
        <div class="flex flex-col gap-4">
          <p class="md:text-2xl mb-8 max-w-4xl">
            {{ t("Get solutions that don't just work – they") }}
            <span class="font-semibold">{{ t("wow") }}</span
            >.
          </p>
          <p class="text-lg md:text-2xl max-w-4xl">
            {{ t("Your vision, our expertise") }}
          </p>
          <p class="text-lg md:text-2xl max-w-4xl">
            {{ t("a perfect") }}
          </p>
          <p class="text-xl md:text-4xl mb-12 font-bold max-w-4xl">
            {{ t("symphony") }}
          </p>
        </div>
        <div class="flex justify-center">
          <LinkItem to="/contact">
            {{ t("Ignite Success") }}
          </LinkItem>
        </div>
      </section>
    </BottomToTopSlideTransition>
  </div>
</template>
