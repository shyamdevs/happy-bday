
"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "./Marquee";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  const closeLetter = () => {
    setIsLetterOpen(false);
  };

  // Lock background scrolling when letter is open
  useEffect(() => {
    if (!isLetterOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isLetterOpen]);

  const letterModal =
    isLetterOpen && typeof document !== "undefined"
      ? createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeLetter}
              className="fixed inset-0 z-[999999] flex h-dvh items-center justify-center bg-black/50 px-3 py-3 backdrop-blur-md sm:px-5 sm:py-5"
            >
              {/* LOVE LETTER */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.88,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.88,
                  y: 30,
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
                onClick={(event) => event.stopPropagation()}
                className="
                  relative
                  w-full
                  max-w-2xl
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-rose-200
                  bg-[#fffaf8]
                  p-5
                  shadow-[0_25px_80px_rgba(80,20,40,0.35)]
                  sm:rounded-[2rem]
                  sm:p-8
                  md:p-10
                "
              >
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-rose-200/40 blur-3xl sm:h-40 sm:w-40" />

                <div className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-pink-200/40 blur-3xl sm:h-40 sm:w-40" />

                {/* Close button */}
                <button
                  type="button"
                  onClick={closeLetter}
                  aria-label="Close love letter"
                  className="
                    absolute
                    right-3
                    top-3
                    z-10
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-rose-200
                    bg-white/80
                    text-lg
                    text-wine
                    transition
                    hover:bg-rose-100
                    sm:right-5
                    sm:top-5
                    sm:h-9
                    sm:w-9
                    sm:text-xl
                  "
                >
                  ×
                </button>

                {/* Letter content */}
                <div className="relative">
                  {/* Small heading */}
                  <p
                    className="
                      mb-2
                      text-center
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.22em]
                      text-crimson
                      sm:mb-3
                      sm:text-xs
                      sm:tracking-[0.3em]
                    "
                  >
                    A Little Letter For You
                  </p>

                  {/* Main heading */}
                  <h2
                    className="
                      px-6
                      text-center
                      font-script
                      text-4xl
                      leading-tight
                      text-wine
                      sm:px-8
                      sm:text-5xl
                      md:text-6xl
                    "
                  >
                    To My Beautiful Love
                  </h2>

                  {/* Divider */}
                  <div className="mx-auto mt-4 h-px w-14 bg-rose-300 sm:mt-6 sm:w-20" />

                  {/* Letter */}
                  <div
                    className="
                      mt-5
                      space-y-3
                      font-display
                      text-[13px]
                      leading-5
                      text-rose-950/80
                      sm:mt-7
                      sm:space-y-4
                      sm:text-base
                      sm:leading-7
                      md:mt-8
                      md:space-y-5
                      md:text-lg
                      md:leading-8
                    "
                  >
                    <p>My love,</p>

                    <p>
                      Today isn't just another day. It's the day the world got
                      a little more beautiful because you were born.
                    </p>

                    <p>
                      I hope you always remember how special you are. Your
                      smile has a way of making even an ordinary day feel
                      extraordinary.
                    </p>

                    <p>
                      I may not always have the perfect words, but having you
                      in my life is one of the most beautiful things I could
                      ever ask for.
                    </p>

                    <p>
                      So today, let yourself be celebrated. You deserve every
                      beautiful thing, every smile, and every little bit of
                      love this world has to offer.
                    </p>

                    <p
                      className="
                        pt-1
                        text-center
                        font-script
                        text-2xl
                        text-crimson
                        sm:pt-2
                        sm:text-3xl
                      "
                    >
                      Happy Birthday, my love. ❤️
                    </p>

                    <p
                      className="
                        pt-1
                        text-right
                        font-script
                        text-xl
                        text-wine
                        sm:pt-2
                        sm:text-2xl
                      "
                    >
                      — Yours, always
                    </p>
                  </div>

                  {/* Bottom decoration */}
                  <div className="mt-4 text-center text-lg sm:mt-7 sm:text-2xl">
                    🌸 ✦ 💌 ✦ 🌸
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body,
        )
      : null;

  return (
    <section id="home" className="relative">
      {/* HERO */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="
          mx-auto
          flex
          min-h-[80vh]
          max-w-4xl
          flex-col
          items-center
          justify-center
          px-5
          py-16
          text-center
          sm:px-6
          sm:py-20
        "
      >
        <motion.p
          variants={item}
          className="
            mb-6
            rounded-full
            border
            border-rose-300/70
            bg-white/60
            px-4
            py-2
            text-[9px]
            font-medium
            tracking-[0.22em]
            text-wine
            shadow-[0_0_20px_rgba(225,29,72,0.15)]
            backdrop-blur-sm
            sm:mb-8
            sm:px-5
            sm:text-[10px]
            sm:tracking-[0.3em]
            md:text-xs
          "
        >
          ✦ TODAY IS A VERY SPECIAL DAY ✦
        </motion.p>

        <motion.h1
          variants={item}
          className="
            font-display
            text-5xl
            leading-none
            text-wine
            sm:text-7xl
            md:text-8xl
          "
        >
          Happy Birthday
        </motion.h1>

        <motion.p
          variants={item}
          className="
            mt-3
            font-script
            text-4xl
            text-crimson
            sm:text-6xl
            md:text-7xl
          "
        >
          My Beautiful Love 🌸
        </motion.p>

        <motion.p
          variants={item}
          className="
            mt-5
            font-display
            text-base
            italic
            text-rose-900/70
            sm:mt-6
            sm:text-xl
          "
        >
          Today is entirely you
        </motion.p>

        <motion.button
          type="button"
          variants={item}
          onClick={() => setIsLetterOpen(true)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          className="
            mt-8
            rounded-full
            bg-gradient-to-r
            from-crimson
            to-wine
            px-6
            py-3.5
            text-[11px]
            font-semibold
            tracking-[0.12em]
            text-white
            shadow-lg
            shadow-rose-400/50
            transition
            hover:shadow-xl
            hover:shadow-rose-500/60
            sm:mt-10
            sm:px-8
            sm:py-4
            sm:text-sm
            sm:tracking-[0.15em]
          "
        >
          ✨ OPEN YOUR SURPRISE →
        </motion.button>
      </motion.div>

      <Marquee />

      {/* PORTAL MODAL */}
      {letterModal}
    </section>
  );
}

