import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function Cursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isSelectable = target.closest('a, button, .ps, .pg, .skc, .exc, .tc, .av, .ac');
      setIsHovered(!!isSelectable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]">
      {/* Dot */}
      <motion.div
        className="fixed w-[10px] h-[10px] bg-amber rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          width: isHovered ? 5 : 10,
          height: isHovered ? 5 : 10,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400, mass: 0.5 }}
      />
      {/* Circle */}
      <motion.div
        className="fixed w-[36px] h-[36px] border-[1.5px] border-teal rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-50"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          scale: isHovered ? 2.2 : 1,
          opacity: isHovered ? 0.12 : 0.5,
          borderColor: isHovered ? '#E8A838' : '#0B5563',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 1 }}
      />
    </div>
  );
}
