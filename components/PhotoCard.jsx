"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";

export default function PhotoCard({ moment, index }) {
  const [failed, setFailed] = useState(false);
  const tilt = index % 2 === 0 ? "-rotate-2" : "rotate-2";

  return (
    <figure
      className={`group ${tilt} rounded-md border border-rose-100 bg-white p-3 pb-5 shadow-lg shadow-rose-200/60 transition duration-300 hover:rotate-0 hover:-translate-y-2`}
    >
      <div className="relative aspect-square overflow-hidden rounded-sm bg-gradient-to-br from-rose-100 via-pink-50 to-rose-200">
        {failed ? (
          <div className="grid h-full w-full place-items-center text-6xl" aria-hidden="true">
            {moment.emoji}
          </div>
        ) : (
          <img
            src={moment.src}
            alt={moment.caption}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
        )}
        <span className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-wine backdrop-blur">
          <Calendar size={10} /> {moment.date}
        </span>
      </div>
      <figcaption className="mt-4 text-center font-script text-2xl text-crimson">{moment.caption}</figcaption>
    </figure>
  );
}
