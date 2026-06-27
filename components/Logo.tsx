import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={site.name}>
      {/* Cloud mark cropped from the brand logo; white tile keeps it crisp on
          both the white navbar and the dark footer. */}
      <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-mark.png"
          alt={`${site.name} logo`}
          className="h-9 w-9 object-contain"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-lg font-bold tracking-tight ${
            invert ? "text-white" : "text-gray-900"
          }`}
        >
          {site.name}
        </span>
        <span
          className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.15em] ${
            invert ? "text-brand-100/60" : "text-gray-400"
          }`}
        >
          Software Solutions
        </span>
      </span>
    </Link>
  );
}
