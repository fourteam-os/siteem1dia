import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF6B00',
          'orange-light': '#FF8C33',
          'orange-dim': '#CC5500',
          dark: '#09090B',
          light: '#F7F7F5',
          gray: '#6B7280',
          green: '#22C55E',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(255,107,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.04) 1px, transparent 1px)',
        'circuit-pattern':
          "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FF6B00' stroke-width='0.5' opacity='0.12'%3E%3Cpath d='M0 40 H25 V15 H55'/%3E%3Cpath d='M80 40 H55 V65 H25'/%3E%3Ccircle cx='25' cy='40' r='2.5'/%3E%3Ccircle cx='55' cy='40' r='2.5'/%3E%3Cpath d='M55 15 H70 V5'/%3E%3Cpath d='M25 65 H10 V75'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        grid: '40px 40px',
        circuit: '80px 80px',
      },
      boxShadow: {
        'orange-glow': '0 0 40px rgba(255, 107, 0, 0.3)',
        'orange-glow-lg': '0 0 80px rgba(255, 107, 0, 0.2)',
        card: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
        'card-hover': '0 4px 24px rgba(0,0,0,0.15)',
        'card-dark': '0 2px 12px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}

export default config
