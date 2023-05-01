import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["cupcake", "dark", "cmyk","dracula"],
  },
  plugins: [require('daisyui'),require('@tailwindcss/typography')],
} satisfies Config;
