'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function EventsHoverAnimation() {
  return (
    <section>
      <Link
        href="/raves"
        className="md:hidden"
      >
        <div className="relative group transition-all duration-300 ease-in-out">
          <Image
            src={'/party.jpeg'}
            alt="parties"
            width={400}
            height={400}
            className="w-full relative z-10 h-[400px] object-cover filter sepia group-hover:filter-none transition-all duration-300 ease-in-out"
          />
          <Image
            src="/hover1.png"
            alt="hover"
            width={400}
            height={400}
            className="absolute z-20 w-full h-[400px] object-cover top-0 left-0 opacity-0 scale-50 group-hover:opacity-80 group-hover:scale-100 transition-all duration-300 ease-in-out"
          />
          <h1 className="absolute z-30 w-full top-1/3 text-center font-bold text-white text-7xl font-anton">
            RAVES
          </h1>
          <h3 className="absolute z-30 w-1/2 text-center inset-x-0 bottom-5 font-anton uppercase mx-auto text-white font-bold text-2xl">
            The best parties in the city
          </h3>
        </div>
      </Link>
    </section>
  );
}
