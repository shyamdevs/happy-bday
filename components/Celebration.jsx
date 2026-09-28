"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Cake from "./Cake";
import Confetti from "./Confetti";
import Finale from "./Finale";
import SecretModal from "./SecretModal";
import SectionHeading from "./SectionHeading";

export default function Celebration() {
  const [blown, setBlown] = useState(false);
  const [confettiKey, setConfettiKey] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const blowOut = () => {
    setBlown(true);
    setConfettiKey((k) => k + 1);
  };

  const clearConfetti = useCallback(() => setConfettiKey(0), []);

  return (
    <>
      <section id="celebrate" className="px-4 py-16 md:py-24">
        <SectionHeading eyebrow="TIME FOR A WISH" title="Close Your Eyes & Wish" script="make it a big one" />

        <Cake blown={blown} />

        <div className="mt-12 text-center">
          <motion.button
            type="button"
            onClick={blowOut}
            disabled={blown}
            whileHover={blown ? undefined : { scale: 1.06 }}
            whileTap={blown ? undefined : { scale: 0.96 }}
            className="rounded-full bg-gradient-to-r from-crimson to-wine px-8 py-4 text-sm font-semibold tracking-[0.15em] text-white shadow-lg shadow-rose-400/50 transition disabled:cursor-default disabled:opacity-60"
          >
            {blown ? "🎉 WISH MADE!" : "🎂 BLOW OUT THE CANDLES!"}
          </motion.button>
        </div>
      </section>

      <Finale unlocked={blown} onOpen={() => setModalOpen(true)} onReplay={() => setBlown(false)} />

      {confettiKey > 0 && <Confetti key={confettiKey} onDone={clearConfetti} />}
      <SecretModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
