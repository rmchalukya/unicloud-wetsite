import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" updated="27 June 2026">
      <p>
        These Terms &amp; Conditions govern your access to and use of the{" "}
        {site.legalName} (&ldquo;{site.name}&rdquo;) website and services. Please
        read them carefully.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing our website or using our services, you agree to be bound by
        these Terms &amp; Conditions. If you do not agree, please do not use our
        website or services.
      </p>

      <h2>2. About UniCloud</h2>
      <p>
        {site.legalName} is a registered Indian company providing IT staffing,
        recruitment, outsourcing and payroll management services to startups,
        enterprises and global organizations.
      </p>

      <h2>3. Services</h2>
      <p>
        Our recruitment, staffing and payroll services are provided in
        accordance with applicable Indian labour laws. Outsourcing and managed
        engagements are governed by the specific project or service agreement
        entered into with each client. Placements are made on a best-effort
        basis and are subject to candidate availability and client requirements.
      </p>

      <h2>4. User Obligations</h2>
      <p>
        You agree to provide accurate and complete information, not to
        misrepresent your qualifications or identity, to use our services
        lawfully, and not to interfere with or disrupt our website or systems.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        All content on this website is the property of {site.name} and is
        protected by copyright and other intellectual property laws. Reproduction
        or use without our prior written consent is prohibited.
      </p>

      <h2>6. Payment Terms</h2>
      <p>
        Fees for services are payable as set out in the applicable agreement or
        invoice. Unless otherwise stated, fees are non-refundable, and late
        payments may incur interest.
      </p>

      <h2>7. Confidentiality</h2>
      <p>
        Both parties agree to maintain the confidentiality of proprietary
        information disclosed in the course of the engagement. These obligations
        survive the termination of the relationship.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, our total liability for any
        claim arising from the services is limited to the amount paid by you for
        the relevant service.
      </p>

      <h2>9. Disclaimer</h2>
      <p>
        Our services are provided &ldquo;as is&rdquo; without warranties of any
        kind, whether express or implied, including any guarantee of placement
        or specific results.
      </p>

      <h2>10. Indemnification</h2>
      <p>
        You agree to indemnify and hold {site.name} harmless from any claims,
        damages or expenses arising from your use of our services or breach of
        these Terms.
      </p>

      <h2>11. Termination</h2>
      <p>
        We may suspend or terminate your access to our website or services at
        any time, with or without notice, for any conduct that we believe
        violates these Terms.
      </p>

      <h2>12. Governing Law</h2>
      <p>
        These Terms are governed by the laws of India, and any disputes are
        subject to the exclusive jurisdiction of the courts of India.
      </p>

      <h2>13. Modifications</h2>
      <p>
        We may update these Terms at any time. Continued use of our website or
        services after changes are posted constitutes acceptance of the revised
        Terms.
      </p>

      <h2>14. Contact Us</h2>
      <p>
        For questions about these Terms, reach us via our{" "}
        <a className="text-brand-600 hover:underline" href="/contact">
          contact page
        </a>{" "}
        or on WhatsApp at {site.whatsappDisplay}.
      </p>
    </LegalPage>
  );
}
