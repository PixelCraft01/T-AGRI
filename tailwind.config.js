/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Legacy named brand palette (static) */
        forest: '#075B3A',
        deep: '#043D2A',
        emerald: '#087A4B',
        teal: '#2E8C82',
        leaf: '#72B943',
        lightGreen: '#E8F3EA',
        gold: '#E7B84B',
        warmGold: '#DDA83B',
        offWhite: '#F7F7F2',
        charcoal: '#151918',
        dark: '#0B1210',
        muted: '#737A76',
        border: '#DDE3DE',

        /* Theme-aware semantic tokens (consume CSS variables) */
        brand: 'rgb(var(--brand) / <alpha-value>)',
        brandFill: 'rgb(var(--brand-fill) / <alpha-value>)',
        brandDeep: 'rgb(var(--brand-deep) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        pageBg: 'rgb(var(--bg) / <alpha-value>)',
        pageAlt: 'rgb(var(--bg-alt) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        surfaceHover: 'rgb(var(--surface-hover) / <alpha-value>)',
        tint: 'rgb(var(--surface-tint) / <alpha-value>)',
        ink: 'rgb(var(--text) / <alpha-value>)',
        inkMuted: 'rgb(var(--text-muted) / <alpha-value>)',
        inkSoft: 'rgb(var(--text-soft) / <alpha-value>)',
        line: 'rgb(var(--border) / <alpha-value>)',
        lineStrong: 'rgb(var(--border-strong) / <alpha-value>)'
      },
      boxShadow: {
        soft: '0 20px 40px rgb(var(--shadow-brand) / 0.08)',
        card: '0 10px 30px rgb(var(--shadow-ink) / 0.06)'
      },
      screens: {
        xs: '375px'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif']
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(7, 91, 58, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(7, 91, 58, 0.08) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
}