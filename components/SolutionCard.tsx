import type { Solution } from "@/data/solutions";

export function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <div className="card flex flex-col">
      <span className="inline-flex w-fit items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
        {solution.tag}
      </span>
      <h3 className="mt-4 text-lg font-bold text-gray-900">{solution.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        {solution.description}
      </p>
    </div>
  );
}
