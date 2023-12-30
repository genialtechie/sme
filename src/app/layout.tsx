import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
const kalnia = localFont({
  src: './kalnia.ttf',
  display: 'swap',
  variable: '--font-kalnia',
});

export const metadata: Metadata = {
  title: 'Seniormen Ent. | Immaculate vibes',
  description: 'Seniormen Entertainment. Events, Music, Merch and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${inter.variable} ${kalnia.variable}`}>{children}</body>
    </html>
  );
}
