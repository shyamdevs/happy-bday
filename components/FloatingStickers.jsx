// Fixed, deterministic positions so server and client render identically.
const stickers = [
  { e: "🌸", x: 6, y: 12, s: 34, d: 0 },
  { e: "💕", x: 88, y: 9, s: 30, d: 1.2 },
  { e: "🌷", x: 14, y: 38, s: 36, d: 2.1 },
  { e: "✨", x: 92, y: 34, s: 26, d: 0.6 },
  { e: "⭐", x: 5, y: 62, s: 24, d: 1.8 },
  { e: "🌸", x: 90, y: 58, s: 32, d: 2.7 },
  { e: "💕", x: 10, y: 84, s: 28, d: 0.9 },
  { e: "🌷", x: 86, y: 82, s: 34, d: 1.5 },
  { e: "✨", x: 48, y: 6, s: 22, d: 2.4 },
  { e: "⭐", x: 52, y: 92, s: 22, d: 0.3 },
  { e: "🌸", x: 30, y: 72, s: 26, d: 3 },
  { e: "💕", x: 70, y: 24, s: 24, d: 1.1 },
];

export default function FloatingStickers() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* ambient glows */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-rose-300/30 blur-3xl" />
      <div className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl" />

      {stickers.map((st, i) => (
        <span
          key={i}
          className={`absolute animate-floaty opacity-60 drop-shadow-sm sm:opacity-70 ${i % 2 ? "hidden sm:block" : ""}`}
          style={{
            left: `${st.x}%`,
            top: `${st.y}%`,
            fontSize: st.s,
            animationDelay: `${st.d}s`,
            animationDuration: `${5 + (i % 4)}s`,
          }}
        >
          {st.e}
        </span>
      ))}
    </div>
  );
}
