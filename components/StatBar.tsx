import { stats } from "@/data/stats";

export function StatBar() {
  return (
    <section className="bg-brand-dark">
      <div className="container-x py-12">
        <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-white sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-brand-100/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
