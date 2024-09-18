import type { Metadata, Viewport } from 'next';
import '../globals.css';
import Nav from '@/app/components/Nav';
import {
  kalnia,
  garamond,
  anton,
  inter,
  dancingScript,
} from '@/app/fonts/fontLoader';

export const metadata: Metadata = {
  title: 'Seniormen Ent. | Immaculate vibes',
  description: 'Seniormen Entertainment. Raves, Music, Merch and more.',
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  height: 'device-height',
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${kalnia.variable} ${garamond.variable} ${anton.variable} ${dancingScript.variable}`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
