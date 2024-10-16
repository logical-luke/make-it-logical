import { type RouteLocationNormalized } from "vue-router";

export function getPageTitle(route: RouteLocationNormalized): string {
  const baseTitle = "Make IT Logical";
  switch (route.path) {
    case "/":
      return `${baseTitle} | We Build Websites & Web Apps`;
    case "/services":
      return `Services: Solutions for Businesses | ${baseTitle}`;
    case "/process":
      return `Process: Transformation Approach | ${baseTitle}`;
    case "/contact":
      return `Contact: Let's Talk | ${baseTitle}`;
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
      return "Skyrocket your business with custom apps. We build powerful solutions for all company sizes. Transform ideas into profit-driving realities.";
    case "/services":
      return "Supercharge your business with our digital services. Expert app development and UX design that boosts revenue and crushes goals.";
    case "/process":
      return "Accelerate your success with our proven process. We deliver high-impact solutions on time, every time. Maximize ROI, minimize hassle.";
    case "/contact":
      return "Ignite innovation now. Our experts create game-changing digital solutions to conquer your toughest business challenges. Let's talk.";
    case "/terms":
      return "Crystal-clear guidelines for our digital solutions. Know your rights, our duties, and ensure a bulletproof partnership from day one.";
    case "/tools":
      return "Harness cutting-edge tech for unstoppable growth. We build lightning-fast, scalable solutions tailored to dominate your market.";
    case "/privacy":
      return "Ironclad data protection guaranteed. See how we safeguard your information and exceed data law requirements. Trust assured.";
    default:
      return "Page not found. Discover game-changing digital solutions on our homepage. Fuel your growth, outpace competitors, boost profits.";
  }
}
