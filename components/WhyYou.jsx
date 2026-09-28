import { Star } from "lucide-react";
import { reasons } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function WhyYou() {
  return (
    <section id="why-you" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="SIX OF A THOUSAND" title="Why You Are Extraordinary" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 3) * 0.1}>
              <article className="group h-full rounded-3xl border border-rose-200 bg-white/60 p-7 backdrop-blur-md transition duration-300 hover:scale-[1.04] hover:border-crimson hover:shadow-[0_0_28px_rgba(225,29,72,0.28)]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-display text-4xl italic text-rose-300 transition group-hover:text-crimson">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Star size={16} className="text-rosegold transition group-hover:fill-crimson group-hover:text-crimson" />
                </div>
                <h3 className="mb-2 font-display text-2xl text-wine">
                  <span aria-hidden="true">{reason.emoji} </span>
                  {reason.title}
                </h3>
                <p className="leading-7 text-rose-950/70">{reason.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
