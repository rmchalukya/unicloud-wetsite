import { site } from "@/lib/site";

// Huge floating notice. Hidden automatically when site.banner is empty.
export function Banner() {
  if (!site.banner) return null;
  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-[60] flex justify-center px-4">
      <div className="pointer-events-auto w-full max-w-4xl rounded-2xl bg-red-600 px-8 py-6 text-center shadow-2xl ring-1 ring-black/10 sm:px-12 sm:py-8">
        <p className="text-xl font-extrabold leading-snug text-white sm:text-3xl">
          {site.banner}
        </p>
      </div>
    </div>
  );
}
