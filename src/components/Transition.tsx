import { motion } from 'framer-motion';
import { useEffect } from 'react';

export const Transition = ({
  children,
  ...props
}: {
  children?: React.ReactNode;
}) => {
  //remove transition div after 0.5s
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.transition-element')?.remove();
    }, 600);
  }, []);

  return (
    <motion.div
      {...props}
      // transition btw pages
      // make a #1d2023 full screen rectangular div slide in the screen from right and off the screen to the left
      animate={{ x: [400, 200, 0, -200, -1500] }}
      transition={{ ease: 'linear', duration: 0.5 }}
      className="flex h-screen w-screen bg-[#1d2023] relative z-50 transition-element"
    >
      {children}
    </motion.div>
  );
};
