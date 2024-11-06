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
      return `About Our Web Development Agency | ${baseTitle}`;
    case "/contact":
      return `Contact Us for Web Development Solutions | ${baseTitle}`;
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
      return "Empower your business with custom web apps and websites. We deliver tailored solutions that drive growth and innovation for companies of all sizes.";
    case "/services":
      return "Boost your digital presence with our web development and UX design services. We create powerful, user-centric solutions to meet your business goals.";
    case "/process":
      return "Discover our agile web development process. From concept to launch, we ensure efficient delivery of high-quality digital solutions tailored to your needs.";
    case "/about":
      return "Learn about our web development agency. We combine technical expertise with a client-centric approach to deliver innovative digital solutions.";
    case "/contact":
      return "Ready to transform your digital presence? Contact us for expert web development and UX design services tailored to your business needs.";
    case "/terms":
      return "Review our terms of service for web development projects. Clear guidelines ensure a smooth partnership and protect both parties' interests.";
    case "/tools":
      return "Explore our cutting-edge web development tech stack. We use the latest technologies to build fast, scalable, and secure digital solutions.";
    case "/privacy":
      return "Read our privacy policy. We're committed to protecting your data and ensuring compliance with data protection laws in all our operations.";
    default:
      return "Page not found. Explore our site for custom web development solutions that drive business growth and enhance user experiences.";
  }
}