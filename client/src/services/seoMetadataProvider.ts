import { type RouteLocationNormalized } from "vue-router";

export function getPageTitle(route: RouteLocationNormalized): string {
  const baseTitle = "Make IT Logical";
  switch (route.path) {
    case "/":
      return `${baseTitle} | We Deliver Complete Digital Solutions`;
    case "/services":
      return `Services: Crafted Digital Solutions | ${baseTitle}`;
    case "/process":
      return `Process: Steps to Successful Delivery | ${baseTitle}`;
    case "/contact":
      return `Contact: Create Your Next Big Thing | ${baseTitle}`;
    case "/terms":
      return `Terms: Service Agreement | ${baseTitle}`;
    case "/privacy":
      return `Privacy: Data Protection Practices | ${baseTitle}`;
    default:
      return `Page Not Found | ${baseTitle}`;
  }
}

export function getMetaDescription(route: RouteLocationNormalized): string {
  switch (route.path) {
    case "/":
      return "Make IT Logical creates solutions driving business growth. We specialize in app development and digital product creation for companies of all sizes.";
    case "/services":
      return "Comprehensive digital services including app development, UX design, and technical operations. Tailored solutions to meet your specific business requirements.";
    case "/process":
      return "Our streamlined approach ensures efficient, high-quality results. From initial concept to final delivery, we align every step with your business objectives.";
    case "/contact":
      return "Ready to transform your business? Get in touch for solutions that drive growth. Let's create your next big thing together.";
    case "/terms":
      return "Our Terms of Service outline the rules and regulations for using our digital solutions. Understand your rights and obligations when engaging with our platform.";
    case "/privacy":
      return "Learn how we collect, use, and protect your personal information. Our Privacy Policy ensures transparency and compliance with data protection laws.";
    default:
      return "Page not found. Return to our homepage for solutions that power business growth and digital transformation.";
  }
}
