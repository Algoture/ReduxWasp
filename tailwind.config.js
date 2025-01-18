/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        accent: "#0B1215",
      },
    },
  },
  plugins: [],
};
