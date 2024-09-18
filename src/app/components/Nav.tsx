'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Hover360 from '@/app/components/Hover360';

export default function Nav({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Effect to handle body overflow
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  // Effect to close nav on page change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className={className}>
      {/* Mobile Nav */}
      <div className="flex justify-between p-3 py-5 text-2xl md:hidden">
        <Hover360>
          <button
            onClick={() => setIsOpen(true)}
            className="font-semibold font-serif"
          >
            menu
          </button>
        </Hover360>
        <Hover360>
          <a
            href="https://www.instagram.com/seniormen_ent"
            target="_blank"
            className="font-semibold font-serif"
          >
            follow +
          </a>
        </Hover360>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '-100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`uppercase text-6xl font-extrabold fixed top-0 left-0 w-full h-full p-5 bg-black text-white bg-opacity-90 z-50 flex flex-col transition-all duration-300 ease-in-out`}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="self-end text-5xl mb-8"
              >
                <span className="inline-block mb-4 mr-2">[</span>
                <Hover360 className="mt-10">
                  close <span className="font-inter">x</span>
                </Hover360>
                <span className="inline-block mb-4 ml-2">]</span>
              </button>
              <Hover360>
                <Link
                  href="/"
                  className="mb-2"
                >
                  home
                </Link>
              </Hover360>
              <Hover360>
                <Link
                  href="/raves"
                  className="mb-2"
                >
                  raves
                </Link>
              </Hover360>
              <Hover360>
                <Link
                  href="/merch"
                  className="mb-2"
                >
                  merch
                </Link>
              </Hover360>
              <Hover360>
                <Link
                  href="/subscribe"
                  className="mb-2"
                >
                  subscribe
                </Link>
              </Hover360>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Nav */}

      <div className="hidden md:flex justify-between p-5 font-serif text-2xl font-bold">
        <Hover360>
          <Link href="/">home</Link>
        </Hover360>
        <Hover360>
          <Link href="/raves">raves</Link>
        </Hover360>
        <Hover360>
          <Link href="/merch">merch</Link>
        </Hover360>
        <Hover360>
          <Link href="/subscribe">subscribe</Link>
        </Hover360>
      </div>
    </nav>
  );
}
