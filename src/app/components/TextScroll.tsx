'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function TextScroll() {
  const unlimitedScrollRefTop = useRef(null);
  const isInView = useInView(unlimitedScrollRefTop, {
    once: false,
  });
  const animationControlsTop = useAnimation();
  const animationControlsBottom = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControlsTop.start({
        x: ['80%', '60%', '40%', '20%', '0%', '-40%', '-80%', '-100%'],
      });
      animationControlsBottom.start({
        x: ['-80%', '-60%', '-40%', '-20%', '0%', '40%', '80%', '100%'],
      });
    }
  }, [isInView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="w-full my-10 text-4xl md:text-6xl font-anton font-bold whitespace-nowrap overflow-hidden">
      <motion.h1
        animate={animationControlsTop}
        ref={unlimitedScrollRefTop}
        transition={{
          duration: 4,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="mb-8 h-fit"
      >
        INTERNATIONAL SATURDAYS | SENIORMEN ENT.
      </motion.h1>
      <motion.h1
        animate={animationControlsBottom}
        transition={{
          duration: 4,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="h-fit"
      >
        @ VODS LOUNGE - 10PM - 4AM
      </motion.h1>
    </section>
  );
}
