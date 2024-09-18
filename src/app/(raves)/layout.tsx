import Image from 'next/image';
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
import Link from 'next/link';

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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${kalnia.variable} ${garamond.variable} ${anton.variable} ${dancingScript.variable}`}
      >
        <Nav className="fixed top-0 left-0 right-0 z-50" />
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Seniormen Entertainment Logo"
            width={65}
            height={65}
            className="fixed top-1 inset-x-0 mx-auto md:hidden"
          />
        </Link>
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
