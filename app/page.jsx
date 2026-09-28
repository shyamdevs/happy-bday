import FloatingStickers from "@/components/FloatingStickers";
import Navbar from "@/components/Navbar";
import AudioPlayer from "@/components/AudioPlayer";
import Hero from "@/components/Hero";
import Letter from "@/components/Letter";
import Moments from "@/components/Moments";
import WhyYou from "@/components/WhyYou";
import LoveStats from "@/components/LoveStats";
import Celebration from "@/components/Celebration";
import DateGate from "@/components/DateGate";

export default function Home() {
  return (
    <>
      <FloatingStickers />
      <DateGate>

      <Navbar />
      <AudioPlayer />
      <main className="relative z-10">
        <Hero />
        <Letter />
        <Moments />
        <WhyYou />
        <LoveStats />
        <Celebration />
      </main>
      <footer className="relative z-10 pb-28 pt-10 text-center font-script text-2xl text-rosegold">
        Made with all my love 💕
      </footer>
      </DateGate>
    </>
  );
}
