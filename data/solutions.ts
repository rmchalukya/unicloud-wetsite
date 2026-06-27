// Engagement models / offerings. Drafted from the company overview — review and
// refine. Feeds the home grid + /solutions page.

export type Solution = {
  slug: string;
  title: string;
  description: string;
  tag: string; // small label, e.g. category
};

export const solutions: Solution[] = [
  {
    slug: "contract-staffing",
    title: "Contract Staffing",
    description:
      "Flexible, on-demand technology talent for project peaks and short-term needs.",
    tag: "Staffing",
  },
  {
    slug: "permanent-hiring",
    title: "Permanent Hiring",
    description:
      "Full-cycle recruitment for long-term roles, from sourcing to onboarding.",
    tag: "Recruitment",
  },
  {
    slug: "contract-to-hire",
    title: "Contract-to-Hire",
    description:
      "Evaluate talent on the job before converting to a permanent role.",
    tag: "Staffing",
  },
  {
    slug: "rpo",
    title: "Recruitment Process Outsourcing",
    description:
      "Offload all or part of your hiring to a dedicated recruitment team.",
    tag: "Outsourcing",
  },
  {
    slug: "payroll-processing",
    title: "Payroll Processing",
    description:
      "Accurate, on-time payroll runs with full record-keeping and reporting.",
    tag: "Payroll",
  },
  {
    slug: "statutory-compliance",
    title: "Statutory Compliance",
    description:
      "PF, ESI, TDS and labour-law compliance handled correctly, every cycle.",
    tag: "Compliance",
  },
  {
    slug: "managed-workforce",
    title: "Managed Workforce",
    description:
      "Dedicated teams managed end-to-end against your delivery goals.",
    tag: "Outsourcing",
  },
  {
    slug: "hr-operations",
    title: "HR Operations",
    description:
      "Onboarding, attendance, leave and employee lifecycle support.",
    tag: "HR",
  },
];
