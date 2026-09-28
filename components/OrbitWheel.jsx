"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import { orbitNodes } from "@/data/content";

export default function OrbitWheel() {
  const [active, setActive] = useState(null);
  const state = active !== null ? "paused" : "running";

  return (
    <>
    <div className="relative mx-auto h-[min(340px,88vw)] w-[min(340px,88vw)] [--r:calc(min(340px,88vw)*0.37)] md:h-[480px] md:w-[480px] md:[--r:185px]">
      {/* orbit ring */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-rose-300"
        style={{ width: "calc(var(--r) * 2)", height: "calc(var(--r) * 2)" }}
      />

      {/* centre card */}
      <div className="absolute left-1/2 top-1/2 z-10 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-rose-200 bg-white/80 text-center shadow-xl shadow-rose-300/50 backdrop-blur-md md:h-36 md:w-36">
        <div>
          <Heart className="mx-auto mb-1 animate-pulse fill-crimson text-crimson" size={22} />
          <p className="font-display text-xs leading-tight text-wine md:text-sm">
            MY
            <br />
            EVERYTHING
          </p>
        </div>
      </div>

      {/* rotating ring of nodes */}
      <div className="absolute inset-0 animate-orbit" style={{ animationPlayState: state }}>
        {orbitNodes.map((node, i) => {
          const angle = (360 / orbitNodes.length) * i;
          const open = active === i;
          return (
            <div
              key={node.label}
              className="absolute left-1/2 top-1/2 h-0 w-0"
              style={{ transform: `rotate(${angle}deg) translateX(var(--r))`, zIndex: open ? 40 : 20 }}
            >
              <div className="h-0 w-0" style={{ transform: `rotate(${-angle}deg)` }}>
                <div className="h-0 w-0 animate-orbit-reverse" style={{ animationPlayState: state }}>
                  <button
                    type="button"
                    aria-expanded={open}
                    onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
                    onPointerLeave={(e) => e.pointerType === "mouse" && setActive(null)}
                    onBlur={() => setActive(null)}
                    onClick={(e) =>
                      e.nativeEvent.pointerType === "mouse" ? setActive(i) : setActive(open ? null : i)
                    }
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                  >
                    <span
                      className={`grid h-14 w-14 place-items-center rounded-full border bg-white/90 text-2xl shadow-lg backdrop-blur transition md:h-16 md:w-16 ${
                        open ? "scale-125 border-crimson shadow-rose-400/60" : "border-rose-200 shadow-rose-200/60"
                      }`}
                    >
                      {node.emoji}
                    </span>
                    <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium tracking-wider text-wine">
                      {node.label}
                    </span>

                    <AnimatePresence>
                      {open && (
                        <span className="absolute bottom-full left-1/2 mb-4 hidden w-48 md:block -translate-x-1/2">
                          <motion.span
                            initial={{ opacity: 0, y: 8, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.9 }}
                            className="block rounded-2xl border border-rose-200 bg-white p-3 text-left font-script text-lg leading-snug text-crimson shadow-xl"
                          >
                            {node.note}
                          </motion.span>
                        </span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    {/* Phones: the note appears here so it never runs off-screen */}
    <div className="mx-auto mt-6 flex min-h-[5.5rem] max-w-xs items-center justify-center text-center md:hidden" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.p
          key={active ?? "hint"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="font-script text-2xl leading-snug text-crimson"
        >
          {active === null ? "Tap a memory ✨" : orbitNodes[active].note}
        </motion.p>
      </AnimatePresence>
    </div>
    </>
  );
}
