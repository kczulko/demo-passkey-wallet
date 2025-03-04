/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'destructive-red': '#db383e',
        'subtle-accent': '#e4e8f1',
        'send-pill': '#EAF2EB',
        'receive-pill': '#FFFAED'
      },
      minHeight: {
        'export-modal': 600,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
