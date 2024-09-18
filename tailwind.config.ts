import type { Config } from 'tailwindcss';

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
      fontFamily: {
        serif: ['var(--font-kalnia)'],
        inter: ['var(--font-inter)'],
        kalnia: ['var(--font-kalnia)'],
        garamond: ['var(--font-garamond)'],
        anton: ['var(--font-anton)'],
        handwriting: ['var(--font-dancing-script)', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;
