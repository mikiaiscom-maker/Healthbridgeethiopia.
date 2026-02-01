import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f2ff",
          100: "#b3d9ff",
          200: "#80bfff",
          300: "#4da6ff",
          400: "#1a8cff",
          500: "#0073e6",
          600: "#005cb3",
          700: "#004580",
          800: "#002e4d",
          900: "#00171a",
        },
        medical: {
          blue: "#3b82f6",
          green: "#10b981",
          lightBlue: "#e0f2fe",
          lightGreen: "#d1fae5",
        },
      },
    },
  },
  plugins: [],
};
export default config;

