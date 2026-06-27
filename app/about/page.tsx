import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { StatBar } from "@/components/StatBar";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow={`About ${site.name}`}
        title="Who we are"
        intro={site.about}
        center
      />

      <div className="container-x pb-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-xl border border-surface-200 bg-white p-8">
            <h2 className="text-xl font-bold text-gray-900">Our mission</h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              To provide the right talent at the right time — reducing hiring
              time, ensuring statutory compliance, and enabling businesses to
              focus on innovation and growth while we manage their people
              operations.
            </p>
          </div>
          <div className="rounded-xl border border-surface-200 bg-white p-8">
            <h2 className="text-xl font-bold text-gray-900">Our approach</h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              We partner with startups, enterprises and global organizations,
              offering flexible staffing models, skilled technology
              professionals and compliant payroll processing as a single,
              end-to-end workforce solution.
            </p>
          </div>
        </div>
      </div>

      <StatBar />
    </>
  );
}
