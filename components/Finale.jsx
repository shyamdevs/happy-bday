"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function Finale({ unlocked, onOpen, onReplay }) {
  return (
    <section id="finale" className="px-4 pb-24 pt-6">
      <div className="mx-auto max-w-2xl">
        <AnimatePresence mode="wait">
          {unlocked ? (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", damping: 18 }}
              className="rounded-3xl border-2 border-rose-300 bg-white/70 p-6 text-center shadow sm:p-10-[0_0_40px_rgba(225,29,72,0.25)] backdrop-blur-md"
            >
              <Sparkles className="mx-auto mb-4 text-crimson" />
              <p className="text-[11px] font-medium tracking-[0.35em] text-rosegold">✦ YOUR WISH IS ON ITS WAY ✦</p>
              <h2 className="mt-4 font-display text-4xl text-wine md:text-5xl">The Grand Finale</h2>
              <p className="mt-3 font-script text-4xl text-crimson">I love you, always 💕</p>

              <button
                type="button"
                onClick={onOpen}
                className="mt-8 animate-glow rounded-full bg-gradient-to-r from-crimson to-wine px-8 py-4 text-sm font-semibold tracking-[0.12em] text-white transition hover:scale-105"
              >
                🎁 A Secret Message…
              </button>
              <div>
                <button
                  type="button"
                  onClick={onReplay}
                  className="mt-6 text-xs tracking-[0.2em] text-rosegold underline-offset-4 hover:underline"
                >
                  RELIGHT THE CANDLES
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="locked"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-3xl border border-dashed border-rose-300 bg-white/40 p-6 text-center backdrop-blur-sm sm:p-10"
            >
              <Heart className="mx-auto mb-3 text-rose-300" />
              <p className="font-display text-xl italic text-rose-900/60">
                Blow out the candles above to unlock your finale.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
