import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="27 June 2026">
      <p>
        {site.legalName} (&ldquo;{site.name}&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo; or &ldquo;our&rdquo;) is committed to protecting your
        privacy. This Privacy Policy explains how we collect, use, disclose and
        safeguard your information when you visit our website or use our IT
        staffing, recruitment, outsourcing and payroll services.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect information in two ways:</p>
      <p>
        <strong>Information you provide directly:</strong> name, email address,
        phone number, resume/CV, employment history, qualifications, company
        details and payment information where relevant.
      </p>
      <p>
        <strong>Information collected automatically:</strong> IP address,
        browser type, operating system, pages visited, session duration and
        similar data gathered through cookies and tracking technologies.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use your information to deliver our recruitment, staffing,
        outsourcing and payroll services; to respond to your inquiries; to
        process payroll and payments; to send service-related notices; to
        improve our website and services; and to comply with our legal
        obligations.
      </p>

      <h2>3. Information Sharing</h2>
      <p>
        We do not sell your personal data. We may share information with client
        companies for recruitment purposes (with your consent), with trusted
        service providers who support our operations, with legal or regulatory
        authorities where required by law, and in connection with a merger,
        acquisition or business transfer.
      </p>

      <h2>4. Data Security</h2>
      <p>
        We implement appropriate technical and organisational measures to
        protect your personal information. However, no method of transmission
        over the internet or electronic storage is completely secure, and we
        cannot guarantee absolute security.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain personal information only for as long as necessary to fulfil
        the purposes described in this policy. Candidate data submitted for
        recruitment is retained for up to 3 years unless you request earlier
        deletion.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Our website uses cookies to enhance your browsing experience and for
        analytics. You can adjust your browser settings to refuse cookies,
        though this may limit some website functionality.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        Subject to applicable law, you may access, correct or request deletion
        of your personal data, withdraw consent, object to processing, and
        request data portability.
      </p>

      <h2>8. Third-Party Links</h2>
      <p>
        Our website may contain links to external sites. We are not responsible
        for the privacy practices or content of those third-party websites.
      </p>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        Our services are not intended for minors, and we do not knowingly
        collect personal data from minors.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with a revised &ldquo;Last updated&rdquo; date.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        For privacy-related questions, reach us via our{" "}
        <a className="text-brand-600 hover:underline" href="/contact">
          contact page
        </a>{" "}
        or on WhatsApp at {site.whatsappDisplay}.
      </p>
    </LegalPage>
  );
}
