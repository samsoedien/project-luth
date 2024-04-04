import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import { luthTailwindPreset } from "@project-luth/core";

export default {
  content: ["./src/**/*.tsx"],
  preset: [luthTailwindPreset],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
