/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#173F35",
          hover: "#12322a",
          light: "#eaf1ee",
        },
        secondary: {
          DEFAULT: "#2F6955",
          hover: "#255343",
          light: "#eef4f1",
        },
        accent: {
          DEFAULT: "#D5A85B",
          hover: "#c39648",
          light: "#faf4e8",
        },
        background: "#F7F8F5",
        card: "#FFFFFF",
        primaryText: "#202923",
        secondaryText: "#737D76",
        border: "#E5EAE5",
        success: {
          DEFAULT: "#32845B",
          light: "#edf7f1",
        },
        warning: {
          DEFAULT: "#D69A35",
          light: "#fdf8ee",
        },
        error: {
          DEFAULT: "#C74D4D",
          light: "#fdf1f1",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(23, 63, 53, 0.05), 0 1px 2px rgba(23, 63, 53, 0.03)",
        card: "0 2px 8px -2px rgba(23, 63, 53, 0.08), 0 1px 4px -1px rgba(23, 63, 53, 0.04)",
        dropdown: "0 10px 25px -5px rgba(23, 63, 53, 0.1), 0 8px 10px -6px rgba(23, 63, 53, 0.06)",
      },
    },
  },
  plugins: [],
};
