import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { SolutionCard } from "@/components/SolutionCard";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = { title: "Solutions" };

export default function SolutionsPage() {
  return (
    <>
      <Section
        eyebrow="Solutions"
        title="Workforce models tailored to your needs"
        intro="Contract, permanent, contract-to-hire or fully managed — choose the engagement model that fits how your business grows."
        center
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <SolutionCard key={s.slug} solution={s} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-primary">
            Talk to our team
          </Link>
        </div>
      </Section>
    </>
  );
}
