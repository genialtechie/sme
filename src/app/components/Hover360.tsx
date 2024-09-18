import { motion } from 'framer-motion';
import { useState } from 'react';

const Hover360 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`h-fit w-fit inline-block overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isHovered ? ['0%', '100%', '-100%', '0%'] : '0%', // Moves down and back up
          opacity: isHovered ? [1, 0, 0, 1] : 1, // Fades out and back in
        }}
        transition={{
          duration: 0.8,
          times: [0, 0.4, 0.4, 0.8], // Adjusted timing for smoother animation
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Hover360;
