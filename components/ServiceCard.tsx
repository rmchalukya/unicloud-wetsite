import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="card group">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-2xl">
        <span aria-hidden>{service.icon}</span>
      </div>
      <h3 className="mt-5 text-lg font-bold text-gray-900">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        {service.summary}
      </p>
      <ul className="mt-4 space-y-2">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-500" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
