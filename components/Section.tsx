import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  center = false,
  invert = false,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  center?: boolean;
  invert?: boolean;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className="container-x">
        {(eyebrow || title || intro) && (
          <div
            className={`max-w-2xl ${center ? "mx-auto text-center" : ""} ${
              center ? "[&_.eyebrow]:justify-center" : ""
            }`}
          >
            {eyebrow && (
              <span className={`eyebrow ${invert ? "eyebrow-invert" : ""}`}>
                {eyebrow}
              </span>
            )}
            {title && (
              <h2
                className={`display-2 mt-4 ${
                  invert ? "text-white" : "text-gray-900"
                }`}
              >
                {title}
              </h2>
            )}
            {intro && (
              <p
                className={`mt-4 text-base leading-relaxed ${
                  invert ? "text-brand-100/80" : "text-gray-600"
                }`}
              >
                {intro}
              </p>
            )}
          </div>
        )}
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}
