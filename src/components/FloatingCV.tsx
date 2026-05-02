import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export default function FloatingCV() {
  return (
    <motion.a
      href="https://drive.google.com/file/d/1Rsy47JiO9x8gkwp9rZFf1aUgM9u4POKM/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed left-[40px] bottom-[28px] z-[300] bg-white text-ink rounded-full pl-[24px] pr-[14px] py-[11px] flex items-center gap-[12px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-teal group cursor-none transition-all duration-300 hover:bg-teal hover:text-white max-md:left-[20px] max-md:pl-[18px] max-md:pr-[10px]"
    >
      <div className="flex flex-col">
        {/* <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-teal group-hover:text-amber transition-colors">Resume / Portfolio</span> */}
        <span className="font-display text-[16px] tracking-[0.02em] leading-none">DOWNLOAD CV</span>
      </div>
      <div className="w-[34px] h-[34px] bg-amber rounded-full flex items-center justify-center text-ink group-hover:bg-white group-hover:rotate-[360deg] transition-all duration-500">
        <Download size={16} />
      </div>
      
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full border-2 border-amber animate-ping opacity-20 pointer-events-none" />
    </motion.a>
  );
}
