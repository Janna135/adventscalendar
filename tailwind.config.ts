import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "rgba(139, 0, 0, 0.8)",
        secondary: "#DAA520",
        tertiary: "rgba(85, 107, 47, 1)",
        quartiary:"#778899",
        background: "rgb(226,231,234)",
      },
      fontSize: {
        xl: "32px"
      },
      keyframes: {
        grow: {
          '0%': {
            transform: 'scale(0)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        shrink: {
          '0%': {
            transform: 'scale(1)'
          },
          '100%': {
            transform: 'scale(0)'
          }
        }
      }
    },
  },
  plugins: [],
}
export default config
