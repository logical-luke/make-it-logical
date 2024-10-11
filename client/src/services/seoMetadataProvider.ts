import { type RouteLocationNormalized } from "vue-router";

export function getPageTitle(route: RouteLocationNormalized): string {
  const baseTitle = "Make IT Logical";
  switch (route.path) {
    case "/":
      return `${baseTitle} | Software Solutions`;
    case "/services":
      return `Services | ${baseTitle}`;
    case "/process":
      return `Process | ${baseTitle}`;
    case "/contact":
      return `Contact | ${baseTitle}`;
    default:
      return `Page Not Found | ${baseTitle}`;
  }
}

export function getMetaDescription(route: RouteLocationNormalized): string {
  switch (route.path) {
    case "/":
      return "Make IT Logical: App development and digital product creation. Software solutions driving business growth.";
    case "/services":
      return "App development, UX design, and technical operations for your business needs.";
    case "/process":
      return "Efficient development process from concept to delivery.";
    case "/contact":
      return "Let's connect about software solutions that drive growth.";
    default:
      return "Page not found. Return to Make IT Logical for software solutions.";
  }
}
