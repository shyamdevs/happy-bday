
"use client";

import { Music, Pause } from "lucide-react";
import { navLinks } from "@/data/content";
import { useAudio } from "./AudioProvider";

export default function Navbar() {
  const { playing, toggle } = useAudio();

  return (
    <header className="sticky top-0 z-40 border-b border-rose-200/60 bg-white/60 backdrop-blur-md">
      <nav
        className="
          mx-auto
          flex
          w-full
          max-w-6xl
          items-center
          justify-between
          px-4
          py-3
          sm:px-6
          md:py-4
        "
      >
        {/* Logo */}
        <a
          href="#home"
          className="font-display text-lg italic text-wine sm:text-xl"
        >
          For You ✦
        </a>

        {/* Navigation - Hidden on Mobile */}
        <ul className="hidden items-center gap-6 md:flex md:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="
                  text-[11px]
                  font-medium
                  tracking-[0.25em]
                  text-rose-900/70
                  transition
                  hover:text-crimson
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Music Button */}
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause music" : "Play music"}
          aria-pressed={playing}
          className="
            grid
            h-9
            w-9
            shrink-0
            place-items-center
            rounded-full
            border
            border-rose-200
            bg-white/70
            text-crimson
            transition
            hover:bg-rose-50
            sm:h-10
            sm:w-10
          "
        >
          {playing ? <Pause size={15} /> : <Music size={15} />}
        </button>
      </nav>
    </header>
  );
}
