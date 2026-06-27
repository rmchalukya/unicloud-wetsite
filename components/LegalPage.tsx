import type { ReactNode } from "react";

// Shared layout for legal/prose pages (Privacy, Terms).
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="container-x py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="display-2 text-gray-900">{title}</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: {updated}</p>
        <div className="mt-8 space-y-6 leading-relaxed text-gray-600 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-gray-900">
          {children}
        </div>
      </div>
    </div>
  );
}
