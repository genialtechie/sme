'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { VideoComponent } from '@/components/VideoComponent';
import Logo from '@/components/Logo';

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
        className="uppercase m-5 font-serif text-6xl text-white font-bold tracking-widest whitespace-nowrap"
      >
        Seniormen Ent. Website coming soon!
      </motion.p>
    </div>
  );
};

export default function Landing() {
  const { scrollYProgress } = useScroll();
  const textRef = useRef(null);
  //make text fade out as user scrolls down
  const opacity = useTransform(scrollYProgress, [0, 0.5], ['100%', '0%']);

  return (
    <section className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative top-0 left-0 w-fit h-fit">
        <Logo />
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
      </div>
    </section>
  );
}
