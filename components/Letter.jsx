import { letterParagraphs, letterSignature } from "@/data/content";
import Reveal from "./Reveal";

export default function Letter() {
  return (
    <section id="letter" className="px-4 py-16 md:py-24">
      <Reveal className="mx-auto max-w-3xl rounded-3xl border border-rose-200 bg-white/60 p-6 shadow-xl shadow-rose-200/50 backdrop-blur-md sm:p-8 md:p-14">
        <p className="mb-4 text-center text-[11px] font-medium tracking-[0.35em] text-rosegold">
          ✦ FROM THE BOTTOM OF MY HEART ✦
        </p>
        <h2 className="mb-10 text-center font-display text-4xl text-wine md:text-5xl">A Letter Written in Stars</h2>

        <div className="space-y-5 font-display text-base leading-7 sm:space-y-6 sm:text-lg sm:leading-8 text-rose-950/80">
          {letterParagraphs.map((text, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-crimson"
                  : ""
              }
            >
              {text}
            </p>
          ))}
        </div>

        <p className="mt-10 text-right font-script text-2xl text-crimson sm:text-3xl md:text-4xl">{letterSignature}</p>
      </Reveal>
    </section>
  );
}
