import Link from "next/link";
import { HeroBackground } from "@/components/HeroBackground";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { SolutionCard } from "@/components/SolutionCard";
import { StatBar } from "@/components/StatBar";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <HeroBackground />
        <div className="container-x relative z-10 flex min-h-[600px] flex-col items-center justify-center py-24 text-center">
          <span className="eyebrow eyebrow-invert justify-center">
            {site.tagline}
          </span>
          <h1 className="display-1 mt-6 max-w-4xl text-white">
            Your End-to-End IT Staffing, Outsourcing &amp; Payroll Partner
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-100/80">
            {site.description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn-accent">
              Start a conversation
            </Link>
            <Link href="/services" className="btn-outline-invert">
              See our services
            </Link>
          </div>
        </div>
      </section>

      {/* What we do */}
      <Section
        eyebrow="What we do"
        title="End-to-end workforce solutions"
        intro="From sourcing skilled technology professionals to running compliant payroll, we cover the full talent lifecycle so you can focus on growth."
        center
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/services" className="btn-outline">
            Explore all services
          </Link>
        </div>
      </Section>

      {/* Stats */}
      <StatBar />

      {/* Solutions (anchor) */}
      <Section
        id="solutions"
        eyebrow="Solutions"
        title="Workforce models tailored to your needs"
        intro="Contract, permanent, contract-to-hire or fully managed — pick the engagement that fits how you grow."
        center
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s) => (
            <SolutionCard key={s.slug} solution={s} />
          ))}
        </div>
      </Section>

      {/* Who we serve */}
      <Section
        eyebrow="Who we serve"
        title="Trusted across industries"
        center
        className="bg-surface-50"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {site.serves.map((s) => (
            <span
              key={s}
              className="rounded-full border border-surface-200 bg-white px-5 py-2 text-sm font-medium text-gray-700"
            >
              {s}
            </span>
          ))}
        </div>
      </Section>

      {/* CTA band */}
      <section className="bg-brand-600">
        <div className="container-x py-16 text-center">
          <h2 className="display-2 text-white">
            Ready to build your team?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-100">
            Tell us about your hiring or payroll needs and we&apos;ll help you
            find the right talent — fast.
          </p>
          <Link href="/contact" className="btn-accent mt-8">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
