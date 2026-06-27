// Single source of truth for brand + contact details.
// Edit THIS file (and data/*.ts) when the real UniCloud content is ready —
// components read from here, so no JSX needs to change.

export const site = {
  // Short brand name used for the wordmark, nav and page titles
  name: "Unicloud",
  // Full legal name used in the footer copyright
  legalName: "Unicloud Software Solutions Pvt Ltd",
  domain: "unicloud.com",
  url: "https://unicloud.com",
  tagline: "Connecting Talent. Powering Business.",
  description:
    "UniCloud Software Solutions Pvt. Ltd. is a trusted IT staffing and workforce solutions company specializing in IT recruitment, contract staffing, permanent hiring, outsourcing, and payroll management. We connect businesses with exceptional technology talent while delivering seamless HR and payroll services that help organizations scale efficiently and compliantly.",
  // Full overview used on the About page
  about:
    "UniCloud Software Solutions Pvt. Ltd. helps organizations build, manage, and scale their workforce through comprehensive IT staffing, outsourcing, recruitment, and payroll management services. We partner with startups, enterprises, and global organizations to deliver skilled technology professionals, flexible staffing models, compliant payroll processing, and end-to-end workforce solutions. Our focus is on providing the right talent, reducing hiring time, ensuring statutory compliance, and enabling businesses to concentrate on innovation and growth while we manage their people operations.",

  // Contact emails (label + address). Edit/extend here — footer & contact page
  // map over this list.
  emails: [
    { label: "General", address: "billaunicloud@gmail.com" },
    { label: "HR & Recruitment", address: "hr@unicloud.ind.in" },
    { label: "Support (24/7)", address: "support.247@unicloud.ind.in" },
  ],
  // WhatsApp / phone — stored without symbols for wa.me & tel: links
  whatsapp: "918884567672",
  whatsappDisplay: "+91 88845 67672",
  phone: "918884567672",
  phoneDisplay: "+91 88845 67672",
  address: "#34, MK Habitat, 3rd Floor, 301, Doddanakundi, Bangalore, KA 560037",

  // Primary navigation (used by Navbar + Footer)
  nav: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/solutions", label: "Solutions" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],

  // Footer legal links
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],

  // Who the company serves (placeholder chips)
  serves: [
    "Startups",
    "Enterprises",
    "SaaS Companies",
    "Government",
    "E-commerce",
    "FinTech",
  ],
};

export type Site = typeof site;
