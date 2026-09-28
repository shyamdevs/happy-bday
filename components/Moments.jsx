import { moments } from "@/data/content";
import PhotoCard from "./PhotoCard";
import OrbitWheel from "./OrbitWheel";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Moments() {
  return (
    <section id="moments" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="OUR STORY SO FAR" title="Cherished Moments" script="every one a favourite" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {moments.map((moment, i) => (
            <Reveal key={moment.date} delay={(i % 3) * 0.1}>
              <PhotoCard moment={moment} index={i} />
            </Reveal>
          ))}
        </div>

        <div className="mt-20 md:mt-28">
          <Reveal className="mb-6 text-center">
            <h3 className="font-display text-3xl text-wine md:text-4xl">Our Little Universe</h3>
            <p className="mt-2 text-sm text-rose-900/60">Hover or tap a memory to read its secret note</p>
          </Reveal>
          <OrbitWheel />
        </div>
      </div>
    </section>
  );
}
