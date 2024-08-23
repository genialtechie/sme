'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { VideoComponent } from '@/components/VideoComponent';
import Image from 'next/image';

const HorizontalScrollText = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 0.5], ['-80%', '0%']);

  return (
    <div className="sticky items-center h-screen w-screen flex overflow-hidden z-40">
      <motion.p
        ref={targetRef}
        style={{ x }}
        className="uppercase text-black/80 m-5 font-serif text-6xl font-bold tracking-widest whitespace-nowrap"
      >
        Seniormen Ent. Website coming soon!
      </motion.p>
    </div>
  );
};

export default function Landing() {
  const { scrollYProgress } = useScroll();
  const textRef = useRef(null);
  const opacity = useTransform(scrollYProgress, [0, 0.5], ['100%', '0%']);
  const [position, setPosition] = useState('fixed');

  useEffect(() => {
    scrollYProgress.on('change', (value) => {
      setPosition(value < 0.45 ? 'fixed' : 'relative');
    });
  }, [scrollYProgress]);

  return (
    <section className="flex min-h-screen flex-col items-center justify-between">
      <motion.div className={`${position} top-0 left-0 w-fit h-fit`}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={60}
          height={60}
          className="scale-125 md:scale-150 lg:scale-200 absolute z-40 top-5 inset-x-0 mx-auto"
        />
        <HorizontalScrollText />
        <div className="absolute bottom-0 inset-x-0 mx-auto z-40 h-fit w-fit p-5">
          <motion.p
            className="uppercase font-inter text-sm text-white/20 font-bold"
            animate={{
              y: [0, -15, 0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: 'easeInOut',
              repeatDelay: 1.25,
            }}
            style={{
              opacity: opacity,
            }}
            ref={textRef}
          >
            Scroll down
          </motion.p>
        </div>

        <VideoComponent />
      </motion.div>
    </section>
  );
}
