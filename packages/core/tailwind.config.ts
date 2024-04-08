import type { Config } from 'tailwindcss'
import { luthTailwindPreset } from './src/themes/tailwind-preset'

export default {
  presets: [luthTailwindPreset],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
} satisfies Config
