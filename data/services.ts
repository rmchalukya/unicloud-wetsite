// Core services. Copy is drafted from the company overview — review/refine the
// wording, then this is the single place that feeds the home + /services pages.

export type Service = {
  slug: string;
  icon: string; // emoji placeholder; swap for an SVG/icon later
  title: string;
  summary: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "it-staffing",
    icon: "👨‍💻",
    title: "IT Staffing",
    summary:
      "Skilled technology professionals on flexible models — scale your team up or down without the overhead.",
    bullets: [
      "Contract & contract-to-hire",
      "Niche & in-demand tech skills",
      "Rapid turnaround",
      "Pre-vetted candidates",
    ],
  },
  {
    slug: "recruitment",
    icon: "🎯",
    title: "Recruitment & Permanent Hiring",
    summary:
      "End-to-end recruitment that reduces time-to-hire and connects you with the right long-term talent.",
    bullets: [
      "Sourcing & screening",
      "Technical evaluation",
      "Permanent placement",
      "Executive search",
    ],
  },
  {
    slug: "outsourcing",
    icon: "🤝",
    title: "Outsourcing & Managed Teams",
    summary:
      "Dedicated, managed teams that own delivery so you can focus on innovation and growth.",
    bullets: [
      "Dedicated delivery teams",
      "Project-based staffing",
      "Managed workforce",
      "Scalable engagements",
    ],
  },
  {
    slug: "payroll",
    icon: "🧾",
    title: "Payroll Management",
    summary:
      "Accurate, compliant payroll and HR operations handled end-to-end, so your people operations just work.",
    bullets: [
      "Payroll processing",
      "Statutory compliance",
      "HR operations support",
      "Timely, error-free payouts",
    ],
  },
];
