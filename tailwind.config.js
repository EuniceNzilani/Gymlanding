/**
 * Tailwind configuration mapping theme colors to CSS variables
 * Colors are provided via `app/globals.css` so the screenshot-derived
 * palette can be adjusted in one place (CSS variables).
 */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        card: 'var(--card-bg)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--color-primary-start)',
          start: 'var(--color-primary-start)',
          end: 'var(--color-primary-end)'
        },
        accent: 'var(--color-accent)',
        success: 'var(--color-success)',
        muted: 'var(--color-muted)'
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, var(--color-primary-start), var(--color-primary-end))'
      }
    }
  },
  plugins: []
};
