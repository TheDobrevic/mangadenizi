// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6',   // mavi tonları
          DEFAULT: '#2563EB',
          dark: '#1E40AF',
        },
        accent: {
          light: '#FDBA74',   // turuncu tonları
          DEFAULT: '#F97316',
          dark: '#C2410C',
        },
      },
    },
  },
  plugins: [],
};
