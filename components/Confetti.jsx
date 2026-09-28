"use client";

import { useEffect, useMemo, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const colors = ["#E11D48", "#F9A8D4", "#FBCFE8", "#FDE68A", "#BE123C", "#FDA4AF", "#FFFFFF"];
const flyers = ["💕", "💖", "🌸", "💗", "✨", "🌷"];
const rand = (min, max) => min + Math.random() * (max - min);

// Full-screen celebration burst. Only mounted after a click, so Math.random is safe here.
export default function Confetti({ onDone }) {
  const reduce = useReducedMotion();
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  const pieces = useMemo(
    () =>
      Array.from({ length: 90 }, (_, i) => ({
        id: i,
        left: rand(0, 100),
        size: rand(6, 13),
        color: colors[i % colors.length],
        delay: rand(0, 0.7),
        duration: rand(3, 5.5),
        drift: rand(-90, 90),
        spin: rand(360, 1080),
        round: Math.random() > 0.5,
      })),
    []
  );

  const hearts = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        emoji: flyers[i % flyers.length],
        left: rand(4, 96),
        size: rand(20, 40),
        delay: rand(0, 1.2),
        duration: rand(3.5, 5.5),
        sway: rand(-40, 40),
      })),
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => doneRef.current?.(), 7000);
    return () => clearTimeout(timer);
  }, []);

  if (reduce) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          className="absolute top-0 block"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.round ? p.size : p.size * 1.6,
            background: p.color,
            borderRadius: p.round ? "50%" : 2,
          }}
          initial={{ y: -30, x: 0, rotate: 0, opacity: 1 }}
          animate={{ y: "110vh", x: p.drift, rotate: p.spin, opacity: [1, 1, 0] }}
          transition={{ duration: p.duration, delay: p.delay, ease: "easeIn" }}
        />
      ))}
      {hearts.map((h) => (
        <motion.span
          key={h.id}
          className="absolute bottom-0"
          style={{ left: `${h.left}%`, fontSize: h.size }}
          initial={{ y: 40, x: 0, opacity: 0 }}
          animate={{ y: "-105vh", x: h.sway, opacity: [0, 1, 1, 0] }}
          transition={{ duration: h.duration, delay: h.delay, ease: "easeOut" }}
        >
          {h.emoji}
        </motion.span>
      ))}
    </div>
  );
}
