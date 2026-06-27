import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="[date]">
      <p>
        [Placeholder] This Privacy Policy explains how {site.name} collects,
        uses and protects your information. Replace this content with your real
        policy before launch.
      </p>
      <h2>Information we collect</h2>
      <p>[Placeholder] Describe the data collected.</p>
      <h2>How we use information</h2>
      <p>[Placeholder] Describe how data is used.</p>
      <h2>Contact</h2>
      <p>
        [Placeholder] For privacy questions, reach us via our{" "}
        <a className="text-brand-600 hover:underline" href="/contact">
          contact page
        </a>
        .
      </p>
    </LegalPage>
  );
}
