// Decorative animated hero backdrop ported from the teksara.com look:
// navy radial-gradient base + masked dotted grid + spinning rings + floating
// dots + pulsing glows. Purely decorative, pointer-events disabled.

const dots = [
  { top: "22%", left: "65%", size: 4 },
  { top: "40%", left: "78%", size: 6 },
  { top: "60%", left: "58%", size: 3 },
  { top: "15%", left: "40%", size: 5 },
  { top: "72%", left: "82%", size: 4 },
  { top: "30%", left: "88%", size: 3 },
];

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base navy gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% -20%, rgba(52,102,255,0.15) 0%, transparent 50%)," +
            "radial-gradient(ellipse 80% 50% at 80% 60%, rgba(251,191,36,0.06) 0%, transparent 50%)," +
            "radial-gradient(ellipse 60% 40% at 20% 80%, rgba(52,102,255,0.08) 0%, transparent 50%)," +
            "radial-gradient(ellipse 90% 70% at 50% 50%, #1a3566 0%, #0d1f40 45%, #070e1f 100%)",
        }}
      />

      {/* Dotted grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(90,145,255,0.18) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 60% 40%, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 60% 40%, black 0%, transparent 72%)",
        }}
      />

      {/* Pulsing glow */}
      <div
        className="absolute left-1/2 top-[-10%] h-[500px] w-[800px] -translate-x-1/2 animate-glow-pulse"
        style={{
          background:
            "radial-gradient(ellipse, rgba(52,102,255,0.2) 0%, rgba(52,102,255,0.05) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[20%] right-[10%] h-[300px] w-[400px]"
        style={{
          background:
            "radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Spinning rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 animate-ring-spin rounded-full border border-[rgba(90,145,255,0.13)]" />
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 animate-ring-spin-rv rounded-full border border-[rgba(90,145,255,0.08)]" />
        <div className="absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 animate-ring-spin-slow rounded-full border border-dashed border-[rgba(90,145,255,0.09)]" />
      </div>

      {/* Floating dots */}
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute animate-dot-float rounded-full bg-[rgba(90,145,255,0.4)]"
          style={{
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size,
            animationDelay: `${i * 0.6}s`,
          }}
        />
      ))}
    </div>
  );
}
