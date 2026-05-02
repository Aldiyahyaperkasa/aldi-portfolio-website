import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../constants';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[600] bg-ink/70 backdrop-blur-[18px] flex items-center justify-center p-[32px]"
      >
        <motion.div
          initial={{ y: 30, scale: 0.97 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 30, scale: 0.97 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white max-w-[720px] w-full max-h-[88vh] overflow-y-auto rounded-[28px] shadow-[0_24px_80px_rgba(9,30,38,0.14)] relative"
        >
          <button 
            onClick={onClose}
            className="sticky top-[16px] float-right m-[16px] z-10 w-[38px] h-[38px] rounded-full bg-cream border-[1.5px] border-ink/18 flex items-center justify-center cursor-none text-[15px] text-muted transition-all duration-200 hover:bg-teal hover:border-teal hover:text-white"
          >
            ✕
          </button>
          
          <div className="clear-both p-[0_40px_44px] max-md:px-6 max-md:pb-10">
            <img className="w-full h-[240px] object-cover rounded-[20px] mb-[28px]" src={project.img} alt={project.title} />
            
            <div className="inline-flex items-center gap-[8px] bg-teal-pale border border-teal-mid text-teal rounded-full px-[16px] py-[5px] font-mono text-[10px] font-bold uppercase tracking-[0.08em] mb-[12px]">
              ✦ {project.cat} · {project.year}
            </div>
            
            <div className="font-display text-[44px] tracking-[0.03em] text-ink mb-[24px] line-height-[0.93] max-md:text-[32px]">{project.title}</div>
            
            <div className="mb-[22px]">
              <div className="font-mono text-[10px] text-muted-2 uppercase tracking-[0.14em] mb-[8px] flex items-center gap-[8px] after:content-[''] after:flex-1 after:h-[1px] after:bg-teal/10">Overview</div>
              <p className="text-[14px] text-muted leading-[1.75]">{project.long}</p>
            </div>

            <div className="mb-[22px]">
              <div className="font-mono text-[10px] text-muted-2 uppercase tracking-[0.14em] mb-[8px] flex items-center gap-[8px] after:content-[''] after:flex-1 after:h-[1px] after:bg-teal/10">The Problem</div>
              <p className="text-[14px] text-muted leading-[1.75]">{project.prob}</p>
            </div>

            <div className="mb-[22px]">
              <div className="font-mono text-[10px] text-muted-2 uppercase tracking-[0.14em] mb-[8px] flex items-center gap-[8px] after:content-[''] after:flex-1 after:h-[1px] after:bg-teal/10">The Solution</div>
              <p className="text-[14px] text-muted leading-[1.75]">{project.sol}</p>
            </div>

            <div className="mb-[22px]">
              <div className="font-mono text-[10px] text-muted-2 uppercase tracking-[0.14em] mb-[8px] flex items-center gap-[8px] after:content-[''] after:flex-1 after:h-[1px] after:bg-teal/10">Tech Stack</div>
              <div className="flex flex-wrap gap-[7px] mt-[10px]">
                {project.tech.map(t => (
                  <span key={t} className="bg-teal-pale border border-teal-mid text-teal rounded-full px-[16px] py-[5px] font-mono text-[10px] font-bold">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
