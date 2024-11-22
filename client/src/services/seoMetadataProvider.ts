import { type RouteLocationNormalized } from "vue-router";

export function getPageTitle(route: RouteLocationNormalized): string {
  const baseTitle = "Make IT Logical";
  switch (route.path) {
    case "/":
      return `${baseTitle} | Custom Web Apps & Websites Development`;
    case "/services":
      return `Web Development & UX Design Services | ${baseTitle}`;
    case "/process":
      return `Agile Web Development Process | ${baseTitle}`;
    case "/about":
      return `About My Web Development Approach | ${baseTitle}`;
    case "/contact":
      return `Contact Me for Web Development Solutions | ${baseTitle}`;
    case "/terms":
      return `Terms of Service | ${baseTitle}`;
    case "/tools":
      return `Cutting-Edge Web Development Tech Stack | ${baseTitle}`;
    case "/privacy":
      return `Privacy Policy | ${baseTitle}`;
    default:
      return `Page Not Found | ${baseTitle}`;
  }
}

export function getMetaDescription(route: RouteLocationNormalized): string {
  switch (route.path) {
    case "/":
      return "Empower your business with custom web apps and websites. I deliver tailored solutions that drive growth and innovation for companies of all sizes.";
    case "/services":
      return "Boost your digital presence with my web development and UX design services. I create powerful, user-centric solutions to meet your business goals.";
    case "/process":
      return "Discover my agile web development process. From concept to launch, I ensure efficient delivery of high-quality digital solutions tailored to your needs.";
    case "/about":
      return "Learn about my web development approach. I combine technical expertise with a client-centric focus to deliver innovative digital solutions.";
    case "/contact":
      return "Ready to transform your digital presence? Contact me for expert web development and UX design services tailored to your business needs.";
    case "/terms":
      return "Review my terms of service for web development projects. Clear guidelines ensure a smooth partnership and protect both parties' interests.";
    case "/tools":
      return "Explore the cutting-edge web development tech stack I use. I leverage the latest technologies to build fast, scalable, and secure digital solutions.";
    case "/privacy":
      return "Read my privacy policy. I'm committed to protecting your data and ensuring compliance with data protection laws in all my operations.";
    default:
      return "Page not found. Explore my site for custom web development solutions that drive business growth and enhance user experiences.";
  }
}