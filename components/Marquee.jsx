import { marqueePhrases } from "@/data/content";

export default function Marquee() {
  const group = (suffix) => (
    <div className="flex shrink-0 items-center" aria-hidden={suffix === "b"}>
      {marqueePhrases.map((phrase) => (
        <span
          key={`${suffix}-${phrase}`}
          className="flex items-center gap-6 pr-6 font-display text-xl italic text-wine md:text-2xl"
        >
          {phrase} <span className="text-crimson">•</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden border-y border-rose-200/70 bg-white/50 py-4 backdrop-blur-sm">
      <div className="flex w-max animate-marquee">
        {group("a")}
        {group("b")}
      </div>
    </div>
  );
}
