import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-cyan-400 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: useSpring(useMotionValue(0), springConfig),
          y: useSpring(useMotionValue(0), springConfig),
        }}
        animate={{
          x: cursorX.get() + 13,
          y: cursorY.get() + 13
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-[200px] h-[200px] bg-cyan-400/5 blur-[100px] rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{
          x: cursorXSpring.get() - 100,
          y: cursorYSpring.get() - 100,
        }}
      />
    </>
  );
}
