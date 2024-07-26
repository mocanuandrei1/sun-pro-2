const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
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
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
