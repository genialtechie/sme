import { Inter } from 'next/font/google';
import { Anton } from 'next/font/google';
import localFont from 'next/font/local';
import { Dancing_Script } from 'next/font/google';

export const kalnia = localFont({
  src: './kalnia.ttf',
  display: 'swap',
  variable: '--font-kalnia',
});

export const garamond = localFont({
  src: './garamond.ttf',
  display: 'swap',
  variable: '--font-garamond',
});

export const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-inter',
});

export const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: 'variable',
  style: 'normal',
  display: 'swap',
  variable: '--font-dancing-script',
});
