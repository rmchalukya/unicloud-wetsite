import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="What we deliver"
        intro="From IT staffing and recruitment to outsourcing and payroll, we cover the full talent lifecycle so you can scale efficiently and compliantly."
      />

      <div className="container-x pb-24">
        <div className="space-y-6">
          {services.map((s, i) => (
            <div
              key={s.slug}
              id={s.slug}
              className="grid items-start gap-6 rounded-xl border border-surface-200 bg-white p-8 sm:grid-cols-[auto,1fr] lg:p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-3xl">
                <span aria-hidden>{s.icon}</span>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                  0{i + 1}
                </span>
                <h2 className="mt-1 text-2xl font-bold text-gray-900">
                  {s.title}
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">
                  {s.summary}
                </p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-primary">
            Discuss your project
          </Link>
        </div>
      </div>
    </>
  );
}

function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <Section eyebrow={eyebrow} title={title} intro={intro} center />
  );
}
