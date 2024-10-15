import { type RouteLocationNormalized } from "vue-router";

export function getPageTitle(route: RouteLocationNormalized): string {
  const baseTitle = "Make IT Logical";
  switch (route.path) {
    case "/":
      return `${baseTitle} | We Deliver Complete Digital Solutions`;
    case "/services":
      return `Services: Digital Solutions for Businesses | ${baseTitle}`;
    case "/process":
      return `Process: Step-by-Step Transformation | ${baseTitle}`;
    case "/contact":
      return `Contact: Create Your Next Big Thing | ${baseTitle}`;
    case "/terms":
      return `Terms: Service Agreement | ${baseTitle}`;
    case "/tools":
      return `Tools: Technologies & Platforms | ${baseTitle}`;
    case "/privacy":
      return `Privacy: Data Protection Practices | ${baseTitle}`;
    default:
      return `Page Not Found | ${baseTitle}`;
  }
}

export function getMetaDescription(route: RouteLocationNormalized): string {
  switch (route.path) {
    case "/":
      return "Boost your business with custom digital solutions. We develop apps and products that drive growth for companies of all sizes. Transform your ideas into reality.";
    case "/services":
      return "Elevate your business with our tailored digital services. From app development to UX design, we deliver solutions that meet your specific needs and drive results.";
    case "/process":
      return "Achieve your business goals with our efficient, results-driven approach. Our step-by-step process ensures high-quality solutions aligned with your objectives.";
    case "/contact":
      return "Ready to innovate? Contact us to create your next big thing. Our expert team will help transform your ideas into powerful digital solutions for your business.";
    case "/terms":
      return "Understand your rights and obligations when using our digital solutions. Our Terms of Service provide clear guidelines for a smooth partnership.";
    case "/tools":
      return "Leverage cutting-edge tech for your business success. We use the latest platforms to build scalable, high-performing solutions tailored to your unique needs.";
    case "/privacy":
      return "Your data security is our priority. Learn how we protect your information and ensure compliance with data protection laws in our transparent Privacy Policy.";
    default:
      return "Page not found. Explore our homepage for innovative digital solutions that power business growth and drive successful transformations.";
  }
}