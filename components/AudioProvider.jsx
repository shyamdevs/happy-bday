"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

import { audioConfig } from "@/data/content";

const AudioContext = createContext({
  playing: false,
  missing: false,
  play: async () => {},
  pause: () => {},
  toggle: async () => {},
});

export const useAudio = () => useContext(AudioContext);

export default function AudioProvider({ children }) {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [missing, setMissing] = useState(false);

  // Play music
  const play = useCallback(async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      setMissing(false);

      await audio.play();

      setPlaying(true);
    } catch (error) {
      console.error("Audio could not be played:", error);

      setPlaying(false);
    }
  }, []);

  // Pause music
  const pause = useCallback(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();
    setPlaying(false);
  }, []);

  // Toggle music
  const toggle = useCallback(async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      await play();
    } else {
      pause();
    }
  }, [play, pause]);

  return (
    <AudioContext.Provider
      value={{
        playing,
        missing,
        play,
        pause,
        toggle,
      }}
    >
      <audio
        ref={audioRef}
        src={audioConfig.src}
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => {
          console.error(
            `Could not load audio: ${audioConfig.src}`
          );

          setMissing(true);
          setPlaying(false);
        }}
      />

      {children}
    </AudioContext.Provider>
  );
}