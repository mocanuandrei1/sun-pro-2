/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInClipDesktop: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(475px)" },
        },
        slideInClipMobile: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100px)" },
        },
      },
      animation: {
        slideInClipDesktop: "slideInClipDesktop 2s ease-out forwards",
        slideInClipMobile: "slideInClipMobile 2s ease-out forwards",
      },
      colors: {
        "custom-gray": "#1f2937",
      },
      fontFamily: {
        montserrat: "var(--font-montserrat)",
        inter: "var(--font-inter)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".clip-bottom-angled": {
          "clip-path":
            "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px))",
        },
        ".clip-bottom-right": {
          "clip-path":
            "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)",
        },
        ".clip-bottom-left-rounded": {
          "clip-path":
            "polygon(100% 0, 0 0, 0 51%, 0 76%, 3% 80%, 7% 85%, 12% 91%, 14% 93%, 17% 95%, 23% 98%, 26% 99%, 33% 100%, 100% 100%, 100% 55%)",
        },
        ".clip-hero": {
          "clip-path": "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
        },
        ".animate-slideInClipDesktop": {
          animation: "slideInClipDesktop 2s ease-out forwards",
        },
        ".animate-slideInClipMobile": {
          animation: "slideInClipMobile 2s ease-out forwards",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
