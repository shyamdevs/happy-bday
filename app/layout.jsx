import { Playfair_Display, Great_Vibes, Inter } from "next/font/google";
import AudioProvider from "@/components/AudioProvider";
import "./globals.css";

const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const script = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-script", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata = {
  title: "Happy Birthday, My Beautiful Love 🌸",
  description: "A little corner of the internet, made just for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${script.variable} ${body.variable}`}>
      <body className="bg-grid-small min-h-screen overflow-x-hidden">
        <AudioProvider>{children}</AudioProvider>
      </body>
    </html>
  );
}
