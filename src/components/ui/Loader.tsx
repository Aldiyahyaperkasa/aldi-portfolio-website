import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[9997] bg-teal flex flex-col items-center justify-center gap-[28px]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 20, stiffness: 200, delay: 0.2 }}
            className="font-display text-[80px] text-white tracking-[0.06em]"
          >
            ALDI<span className="text-amber">.</span>
          </motion.div>
          <div className="w-[200px] h-[2px] bg-white/15 rounded-[2px] overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="h-full bg-amber rounded-[2px]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
