'use client';

import { motion } from 'framer-motion';

export default function PulseAnimation() {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: 'fit-content',
      }}
      className="my-14"
    >
      {/* Beating Circle */}
      <motion.div
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 0, 0, 0.5)', // Adjust color as needed
        }}
        animate={{ scale: [1, 1.2, 1, 1.4, 1] }} // More aggressive beating effect
        transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }} // Shorter duration for faster beat
      />

      {/* Pulse SVG */}
      <motion.svg
        width="313"
        height="245"
        viewBox="0 0 313 245"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }} // Centering the SVG
      >
        <motion.path
          d="M0 173.5H40.5L64 84.5L103.5 217L114 182.5H143L170 1L198 244L226 84.5L243.5 182.5H260.5L270.5 166L280.5 198.5L286.5 182.5H313"
          stroke="black"
          strokeWidth="5"
          strokeDasharray="1200" // Set to a value greater than the path length
          strokeDashoffset="1200" // Start hidden
          animate={{
            strokeDashoffset: [1200, 0], // Animate to visible
          }}
          transition={{
            duration: 5, // Duration of the animation
            repeat: Infinity, // Repeat indefinitely
            ease: 'linear', // Easing function
          }}
        />
      </motion.svg>
    </section>
  );
}
