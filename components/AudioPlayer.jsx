"use client";

import { Music, Pause, Play, Volume2 } from "lucide-react";
import { audioConfig } from "@/data/content";
import { useAudio } from "./AudioProvider";

export default function AudioPlayer() {
  const { playing, missing, toggle } = useAudio();

  return (
    <div className="fixed bottom-3 right-3 z-50 sm:bottom-4 sm:right-4 flex flex-col items-end gap-2">
      {!playing && (
        <span className="animate-glow rounded-full bg-crimson px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-white">
          {missing ? "ADD public/music/song.mp3" : "CLICK TO PLAY 🎵"}
        </span>
      )}

      <div className="flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 py-1.5 pl-1.5 pr-3 sm:gap-3 sm:py-2 sm:pl-2 sm:pr-4 shadow-lg shadow-rose-200/60 backdrop-blur-md">
        {/* Spinning vinyl */}
        <div
          className={`relative grid h-9 w-9 place-items-center sm:h-11 sm:w-11 rounded-full bg-gradient-to-br from-rose-900 to-black ${
            playing ? "animate-spin-slow" : ""
          }`}
          aria-hidden="true"
        >
          <span className="absolute inset-1 rounded-full border border-white/10" />
          <span className="absolute inset-2.5 rounded-full border border-white/10" />
          <span className="grid h-4 w-4 place-items-center rounded-full bg-crimson">
            <Music size={8} className="text-white" />
          </span>
        </div>

        <div className="leading-tight">
          <p className="flex items-center gap-1 text-[9px] tracking-[0.25em] text-rosegold">
            {playing && <Volume2 size={10} />} NOW PLAYING
          </p>
          <p className="font-display text-sm italic text-wine">{audioConfig.trackName}</p>
        </div>

        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause music" : "Play music"}
          className="grid h-8 w-8 place-items-center rounded-full bg-crimson text-white sm:h-9 sm:w-9 transition hover:scale-110 hover:bg-wine"
        >
          {playing ? <Pause size={16} /> : <Play size={16} className="translate-x-px" />}
        </button>
      </div>
    </div>
  );
}
