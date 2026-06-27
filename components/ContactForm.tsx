"use client";

import { useState } from "react";
import { site } from "@/lib/site";

// Placeholder contact form. Until a backend/form service is wired up, it
// opens WhatsApp to site.whatsapp with the entered details pre-filled.
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi ${site.name}, I'd like to get in touch.\n\n` +
        `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`,
    );
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank");
  };

  const field =
    "w-full rounded-lg border border-surface-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className={field}
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className={field}
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <input
        className={field}
        placeholder="Company (optional)"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <textarea
        className={`${field} min-h-[140px] resize-y`}
        placeholder="How can we help?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send via WhatsApp
      </button>
    </form>
  );
}
