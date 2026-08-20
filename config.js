/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "raja",
  photo: "./img/raja.jpeg",       // Place your photo in the img/ folder
  music: "./music/hbd.mp3",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "oi",
      subtitle: "sorry telat ler",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "ultah nieh!! :D",
    },
    {
      type: "chatbox",
      message:
        "selamat ultah ya ler, semoga panjang umur bla bla bla bla",
      buttonText: "kirim",
    },
    {
      type: "ideas",
      lines: [
        "tadinya mau gw kirim gitu",
        "tapi mau effort dikit lah ya",
        "jadi gw bikin ginian, <strong>js for u</strong>.",
        "no gay",
        "hbd ya nyet <span>:></span>",
      ],
      bigLetters: "SO",
    },
    {
      type: "quote",
      text: "lu pler terbaik di dunia ini ler, semoga jadi crazy rich daddy girl. doain gw dpt cwe juga ya le :v",
      author: "teuku gantenk",
    },
    {
      type: "stars",
      count: 500,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Happy Birthday!",
      wishText: "May u gf always be with you! ;)",
    },
    {
      type: "fireworks",
      count: 50,
    },
    {
      type: "confetti",
      count: 50,
    },
    {
      type: "closing",
      text: "jangan harap gede ya nyet, gw belum kerja https://link.dana.id/danakaget?c=s7us22aww&r=gUg2nn&orderId=20260820101214595815010300166116193176748",
      replayText: "Or click, if you want to watch it again.",
    },
  ],
};
