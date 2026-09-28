"use client";

import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Calendar, Heart } from "lucide-react";
import { gateHint, relationshipStart } from "@/data/content";
import { useAudio } from "./AudioProvider";

export default function DateGate({ children }) {
  const { play } = useAudio();
  const shake = useAnimationControls();

  // Always ask for the date after every reload
  const [status, setStatus] = useState("locked");
  const [value, setValue] = useState("");
  const [tries, setTries] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Input type="date" gives YYYY-MM-DD
    // Convert it to DD-MM-YYYY
    const [year, month, day] = value.split("-");

    const formattedDate = `${day}-${month}-${year}`;

    if (formattedDate === relationshipStart) {
      // Start music after the user's click
      play();

      // Reset page position
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });

      // Unlock the website
      setStatus("open");
    } else {
      setTries((t) => t + 1);

      shake.start({
        x: [0, -12, 12, -8, 8, 0],
        transition: {
          duration: 0.4,
        },
      });
    }
  };

  // Show website after correct date
  if (status === "open") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <section className="relative z-10 grid min-h-screen place-items-center px-4 py-10">
      <motion.div animate={shake} className="w-full max-w-md">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-rose-200 bg-white/65 p-7 text-center shadow-xl shadow-rose-200/60 backdrop-blur-md sm:p-10"
        >
          {/* Icon */}
          <Heart
            className="mx-auto mb-4 animate-pulse fill-crimson text-crimson"
            size={30}
          />

          {/* Eyebrow */}
          <p className="text-[10px] font-medium tracking-[0.3em] text-rosegold sm:text-[11px]">
            ✦ ONE LITTLE KEY ✦
          </p>

          {/* Heading */}
          <h1 className="mt-3 font-display text-3xl text-wine sm:text-4xl">
            Before we begin…
          </h1>

          <p className="mt-2 font-script text-3xl text-crimson sm:text-4xl">
            when did our story start?
          </p>

          {/* Date label */}
          <label
            htmlFor="story-date"
            className="mt-8 flex items-center justify-center gap-2 text-xs text-rosegold"
          >
            <Calendar size={14} />
            Pick the date
          </label>

          {/* Date input */}
          <input
            id="story-date"
            type="date"
            required
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-rose-200 bg-white/80 px-4 py-3 text-center font-display text-xl text-wine [color-scheme:light] focus:border-crimson focus:outline-none"
          />

          {/* Error */}
          {tries > 0 && (
            <p
              role="alert"
              className="mt-4 text-sm text-crimson"
            >
              Hmm, that&apos;s not our day 💔 Try again, my love.
            </p>
          )}

          {/* Hint */}
          {tries >= 3 && (
            <p className="mt-2 font-script text-xl text-rosegold">
              Hint: {gateHint}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="mt-7 w-full rounded-full bg-gradient-to-r from-crimson to-wine px-6 py-4 text-sm font-semibold tracking-[0.12em] text-white shadow-lg shadow-rose-400/50 transition hover:scale-[1.03] active:scale-95"
          >
            💕 UNLOCK MY SURPRISE
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}