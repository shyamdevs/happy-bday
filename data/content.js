// ✏️ Everything you might want to personalise lives in this one file.

export const audioConfig = {
  src: "/music/OurSong.mp3", // drop your song at public/music/song.mp3
  trackName: "OurSong",
};

// Used for the "Days Cherished" counter (YYYY-MM-DD)
export const relationshipStart = "14-04-2024";

export const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "LETTER", href: "#letter" },
  { label: "MOMENTS", href: "#moments" },
  { label: "WHY YOU", href: "#why-you" },
  { label: "CELEBRATE", href: "#celebrate" },
  { label: "FINALE", href: "#finale" },
];

export const marqueePhrases = [
  "Happy Birthday",
  "You Are Loved",
  "Forever Yours",
  "My Sunshine",
  "Dreams Come True",
];

export const letterParagraphs = [
  "Some people arrive in your life like a season changing. Quietly at first, and then all at once, everything is softer, warmer, and somehow brighter than before. That is what you did to my world.",
  "I have tried to find the right words for what you mean to me, and every draft falls short. So I wrote you this instead: a small corner of the internet where the stars spell out your name.",
  "Thank you for your laughter that fills the room, for your patience on my worst days, and for the way you love, completely, without keeping score. You make ordinary Tuesdays feel like holidays.",
  "On your birthday, I hope you feel even a fraction of the joy you give everyone around you. You deserve every wish, every candle, every sunrise. Today is entirely yours.",
];

export const letterSignature = "Forever yours, with all my love 🌸";

// Add photos as public/photos/moment-1.jpg ... moment-6.jpg. Missing ones show a soft placeholder.
export const moments = [
  {
    caption: "The girl who caught my heart",
    emoji: "🌸",
    src: "/photos/moment-1.jpeg",
  },
  {
    caption: "That smile I could never forget",
    emoji: "✨",
    src: "/photos/moment-2.jpeg",
  },
  {
    caption: "Beautiful, even back then",
    emoji: "🌷",
    src: "/photos/moment-3.jpeg",
  },
  {
    caption: "A face I could look at forever",
    emoji: "🤍",
    src: "/photos/moment-4.jpeg",
  },
  {
    caption: "Little moments, big memories",
    emoji: "🍃",
    src: "/photos/moment-5.jpeg",
  },
  {
    caption: "Still my favourite view",
    emoji: "💕",
    src: "/photos/moment-6.jpeg",
  },
];
export const orbitNodes = [
  {
    label: "The Girl I Adore",
    emoji: "🌸",
    note: "Somehow, without even trying, you became one of the most beautiful parts of my world.",
    src: "/photos/moment-1.jpeg",
  },
  {
    label: "Your Smile",
    emoji: "✨",
    note: "If happiness had a face, I think it would look a lot like you smiling.",
    src: "/photos/moment-2.jpeg",
  },
  {
    label: "A Little Piece of You",
    emoji: "🌷",
    note: "Every version of you is precious to me — even the one from before I knew your name.",
    src: "/photos/moment-3.jpeg",
  },
  {
    label: "Those Beautiful Eyes",
    emoji: "🤍",
    note: "There are a thousand beautiful things in this world, and somehow I keep choosing you.",
    src: "/photos/moment-4.jpeg",
  },
  {
    label: "My Kind of Peace",
    emoji: "🍃",
    note: "You don't have to do anything special. Just being you makes everything feel a little softer.",
    src: "/photos/moment-5.jpeg",
  },
];

export const reasons = [
  { title: "Your Smile", text: "Brightens every room and makes everyone feel safe.", emoji: "😊" },
  { title: "Your Kindness", text: "Genuine, selfless, and unconditional.", emoji: "🌷" },
  { title: "Your Spirit", text: "Resilient, radiant, and constantly blooming.", emoji: "🌸" },
  { title: "Your Creativity", text: "Sees beauty in the ordinary.", emoji: "🎨" },
  { title: "Your Love", text: "Deep, thoughtful, and transformative.", emoji: "💗" },
  { title: "Your Strength", text: "Powerful, radiant, and inspiring.", emoji: "✨" },
];

export const stats = [
  { label: "DAYS CHERISHED", type: "days" },
  { label: "REASONS I LOVE YOU", type: "count", value: 365 },
  { label: "YEARS I'LL LOVE YOU", type: "static", display: "∞" },
  { label: "YOU. ONLY YOU.", type: "count", value: 1 },
];

export const secretMessage = {
  title: "Just for you",
  lines: [
    "If I could gift you anything, it would be the ability to see yourself the way I do.",
    "You are my favourite person, my safest place, and my greatest adventure.",
    "Happy Birthday, my love. Here's to a thousand more.",
  ],
};
