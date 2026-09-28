import { relationshipStart, stats } from "@/data/content";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function daysSinceStart() {
  // Convert DD-MM-YYYY → Date
  const [day, month, year] = relationshipStart.split("-").map(Number);

  const startDate = new Date(year, month - 1, day);
  const today = new Date();

  // Remove time difference
  startDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diff = today.getTime() - startDate.getTime();

  return Math.max(0, Math.floor(diff / 86_400_000));
}

export default function LoveStats() {
  return (
    <section id="stats" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="BY THE NUMBERS"
          title="Love, Measured"
        />

        <Reveal
          className="
            grid
            grid-cols-2
            gap-x-2
            gap-y-10
            rounded-3xl
            border
            border-rose-200
            bg-white/60
            px-4
            py-12
            backdrop-blur-md
            md:grid-cols-4
            md:divide-x
            md:divide-rose-200
          "
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-5xl text-crimson md:text-6xl">
                {stat.type === "static" ? (
                  stat.display
                ) : (
                  <CountUp
                    to={
                      stat.type === "days"
                        ? daysSinceStart()
                        : stat.value
                    }
                  />
                )}
              </p>

              <p className="mt-3 text-[10px] font-medium tracking-[0.25em] text-rosegold md:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
