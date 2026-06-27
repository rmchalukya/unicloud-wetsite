import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Let's talk"
      intro="Tell us about your hiring or payroll needs and our team will get back to you shortly."
    >
      <div className="grid gap-12 lg:grid-cols-[1fr,360px]">
        <div className="rounded-xl border border-surface-200 bg-white p-8">
          <ContactForm />
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              WhatsApp / Phone
            </h3>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-brand-600 hover:underline"
            >
              {site.whatsappDisplay}
            </a>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Address
            </h3>
            <p className="mt-2 text-gray-700">{site.address}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
