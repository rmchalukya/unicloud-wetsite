import { site } from "@/lib/site";

// Site-wide notice strip. Hidden automatically when site.banner is empty.
export function Banner() {
  if (!site.banner) return null;
  return (
    <div className="bg-accent-500 text-brand-dark">
      <div className="container-x flex items-center justify-center gap-2 py-2 text-center text-xs font-semibold sm:text-sm">
        <p>{site.banner}</p>
      </div>
    </div>
  );
}
