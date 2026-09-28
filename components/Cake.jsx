"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Cake({ blown }) {
  return (
    <div
      role="img"
      aria-label={blown ? "A birthday cake with the candles blown out" : "A birthday cake with three lit candles"}
      className="mx-auto flex w-64 flex-col items-center"
    >
      {/* candles */}
      <div className="relative z-10 -mb-1 flex gap-7">
        {[0, 1, 2].map((i) => (
          <div key={i} className="relative flex flex-col items-center">
            <div className="flex h-7 items-end">
              <AnimatePresence>
                {!blown && (
                  <motion.span
                    key="flame"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: [1, 1.18, 0.95, 1.1, 1], rotate: [-4, 4, -3, 3, -4], opacity: 1 }}
                    exit={{ scale: 0, opacity: 0, y: -8, transition: { duration: 0.35 } }}
                    transition={{ repeat: Infinity, duration: 1.2 + i * 0.25 }}
                    style={{ transformOrigin: "bottom center" }}
                    className="block h-6 w-3.5 rounded-[50%_50%_50%_50%/70%_70%_30%_30%] bg-gradient-to-t from-amber-400 via-orange-300 to-yellow-100 shadow-[0_0_18px_6px_rgba(251,191,36,0.55)]"
                  />
                )}
              </AnimatePresence>
            </div>
            {blown && (
              <motion.span
                initial={{ opacity: 0.7, y: 0, scale: 0.5 }}
                animate={{ opacity: 0, y: -38, scale: 1.8 }}
                transition={{ duration: 1.8, delay: i * 0.15 }}
                className="absolute top-2 h-3 w-3 rounded-full bg-rose-200 blur-[2px]"
              />
            )}
            <span className="block h-12 w-2.5 rounded-sm bg-gradient-to-b from-rose-100 to-rose-400" />
          </div>
        ))}
      </div>

      {/* top tier */}
      <div className="relative h-14 w-36 rounded-t-3xl border-t-[10px] border-white bg-pink-200 shadow-inner">
        <span className="absolute inset-x-0 top-3 text-center text-lg">🌸 💕 🌸</span>
      </div>
      {/* bottom tier */}
      <div className="relative h-16 w-56 rounded-t-xl border-t-[10px] border-white bg-rose-300 shadow-inner">
        <span className="absolute inset-x-0 top-3 text-center text-lg">🍓 ✨ 🍓 ✨ 🍓</span>
      </div>
      {/* plate */}
      <div className="h-3 w-64 rounded-full bg-white shadow-lg shadow-rose-300/60" />
    </div>
  );
}
