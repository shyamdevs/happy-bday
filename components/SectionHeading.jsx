import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, script }) {
  return (
    <Reveal className="mb-10 md:mb-12 text-center">
      <p className="mb-4 text-[11px] font-medium tracking-[0.35em] text-rosegold">✦ {eyebrow} ✦</p>
      <h2 className="font-display text-4xl text-wine md:text-5xl">{title}</h2>
      {script && <p className="mt-2 font-script text-3xl text-crimson md:text-4xl">{script}</p>}
    </Reveal>
  );
}
