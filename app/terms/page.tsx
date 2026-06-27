import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" updated="[date]">
      <p>
        [Placeholder] These Terms &amp; Conditions govern your use of the{" "}
        {site.name} website and services. Replace this content with your real
        terms before launch.
      </p>
      <h2>Use of the site</h2>
      <p>[Placeholder] Describe acceptable use.</p>
      <h2>Limitation of liability</h2>
      <p>[Placeholder] Describe liability limits.</p>
      <h2>Contact</h2>
      <p>
        [Placeholder] For questions about these terms, reach us via our{" "}
        <a className="text-brand-600 hover:underline" href="/contact">
          contact page
        </a>
        .
      </p>
    </LegalPage>
  );
}
