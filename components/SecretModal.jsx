"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { secretMessage } from "@/data/content";

const bursts = ["💕", "🌸", "✨", "💖", "🌷", "⭐", "💗", "🌸"];

export default function SecretModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center bg-rose-950/40 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={secretMessage.title}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            className="relative max-h-[90svh] w-full max-w-md overflow-y-auto rounded-3xl border-2 border-rose-300 bg-blush p-6 sm:p-8 text-center shadow-[0_0_50px_rgba(225,29,72,0.4)]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close secret message"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white text-wine shadow transition hover:bg-rose-100"
            >
              <X size={16} />
            </button>

            <p className="mb-2 text-3xl" aria-hidden="true">🎁</p>
            <h3 className="font-script text-5xl text-crimson">{secretMessage.title}</h3>
            <div className="mt-5 space-y-4 font-display text-lg leading-8 text-rose-950/80">
              {secretMessage.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            {bursts.map((emoji, i) => (
              <motion.span
                key={i}
                aria-hidden="true"
                className="pointer-events-none absolute bottom-6 text-2xl"
                style={{ left: `${8 + i * 12}%` }}
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: -220 - (i % 3) * 50, opacity: [0, 1, 0] }}
                transition={{ duration: 2.4, delay: 0.3 + i * 0.12, repeat: Infinity, repeatDelay: 1 }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
