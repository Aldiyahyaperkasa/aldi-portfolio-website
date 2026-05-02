import { motion } from 'motion/react';
import { PROJECTS, Project } from '../constants';
import { useRef, useState, useEffect } from 'react';

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

export default function Projects({ onProjectClick }: ProjectsProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -carouselRef.current.clientWidth * 0.8 : carouselRef.current.clientWidth * 0.8;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.clientWidth * 0.7));
        setActiveIndex(Math.min(index, PROJECTS.length - 1));
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll, { passive: true });
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="projects" className="py-[100px] pb-0 bg-white">
      <div className="max-w-[1200px] mx-auto px-[52px] max-md:px-[20px]">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-[52px]"
        >
          <div>
            <div className="inline-flex items-center gap-[8px] font-mono text-[10px] text-teal uppercase tracking-[0.14em] mb-[12px]">
              Selected Work
            </div>
            <h2 className="font-display text-[clamp(44px,6.5vw,88px)] leading-[0.92] tracking-[0.03em] text-ink">
              PROJECTS <span className="text-teal">&amp;</span> WORK
            </h2>
          </div>
          <div className="font-display text-[100px] text-teal-mid leading-none max-md:hidden">08</div>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden h-[80vh] min-h-[520px] bg-ink flex flex-col">
        <div 
          ref={carouselRef}
          className="flex-1 flex items-center gap-[24px] px-[52px] overflow-x-auto snap-x snap-mandatory scrollbar-none max-md:px-[20px]"
        >
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onProjectClick(project)}
              className="flex-shrink-0 w-[min(680px,85vw)] h-[75%] rounded-[24px] overflow-hidden relative cursor-none snap-center group transition-all duration-500 hover:shadow-[0_32px_80px_rgba(9,30,38,0.5)]"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 saturate-[0.65] brightness-[0.75] group-hover:scale-[1.06] group-hover:saturate-[1] group-hover:brightness-[0.9]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-b from-ink/10 to-ink/85 pointer-events-none" />
              <button 
                className="absolute top-[22px] left-1/2 -translate-x-1/2 bg-amber text-ink w-[40px] h-[40px] rounded-full border-none cursor-none flex items-center justify-center text-[16px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                ↗
              </button>
              <div className="absolute top-[22px] right-[22px] bg-white/10 backdrop-blur-[8px] border border-white/12 text-white/70 rounded-full px-[16px] py-[5px] font-mono text-[10px]">
                {project.year}
              </div>
              <div className="absolute top-[22px] left-[22px] bg-amber/15 border border-amber/30 text-amber-2 rounded-full px-[16px] py-[5px] font-mono text-[10px] uppercase tracking-[0.08em]">
                ✦ {project.cat}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-[32px]">
                <div className="font-display text-[clamp(26px,3vw,44px)] text-white tracking-[0.03em] leading-[0.93] mb-[10px]">{project.title}</div>
                <div className="text-[13px] text-white/60 leading-[1.6] mb-[16px] font-light">{project.desc}</div>
                <div className="flex flex-wrap gap-[6px]">
                  {project.tech.slice(0, 4).map(t => (
                    <span key={t} className="font-mono text-[9px] bg-white/8 border border-white/10 text-white/50 rounded-full px-[12px] py-[3px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pb-[40px] px-[52px] max-md:px-[20px] flex flex-col items-center gap-[16px]">
          <div className="flex items-center gap-[12px]">
            <button onClick={() => scroll('left')} className="w-[42px] h-[42px] rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-all hover:bg-amber hover:text-ink hover:border-amber ring-0 outline-none">←</button>
            <button onClick={() => scroll('right')} className="w-[42px] h-[42px] rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-all hover:bg-amber hover:text-ink hover:border-amber ring-0 outline-none">→</button>
          </div>
          
          <div className="flex gap-[6px]">
            {PROJECTS.map((_, i) => (
              <div 
                key={i} 
                className={`w-[8px] h-[8px] rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-amber w-[20px]' : 'bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Grid List */}
      {/* <div className="max-w-[1200px] mx-auto px-[52px] max-md:px-[20px]">
        <div className="grid grid-cols-3 gap-[16px] py-[48px] pb-[100px] max-lg:grid-cols-2 max-md:grid-cols-1">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => onProjectClick(project)}
              className="bg-white border border-teal/10 rounded-[20px] overflow-hidden cursor-none transition-all duration-400 hover:-translate-y-[8px] hover:shadow-[0_8px_40px_rgba(11,85,99,0.18)] hover:border-teal-mid group"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 saturate-[0.7] group-hover:scale-[1.06] group-hover:saturate-[1]" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-ink/70 to-transparent p-[12px_16px_10px]">
                  <div className="font-mono text-[9px] text-amber-2 uppercase tracking-[0.1em]">✦ {project.cat} · {project.year}</div>
                </div>
              </div>
              <div className="p-[20px]">
                <div className="font-display text-[22px] tracking-[0.02em] text-ink mb-[6px]">{project.title}</div>
                <div className="text-[12px] text-muted leading-[1.6]">{project.desc}</div>
                <div className="flex flex-wrap gap-[5px] mt-[12px]">
                  {project.tags.map(t => (
                    <span key={t} className="bg-teal-pale border border-teal-mid text-teal px-[12px] py-[3px] rounded-full font-mono text-[9px] font-bold">{t}</span>
                  ))}
                </div>
              </div>
              <div className="p-[14px_20px] flex items-center justify-between">
                <div className="font-mono text-[10px] text-muted-2">{project.tech.slice(0, 3).join(' · ')}</div>
                <div className="w-[32px] h-[32px] rounded-full border border-ink/18 flex items-center justify-center text-[13px] text-muted-2 transition-all duration-250 group-hover:bg-teal group-hover:border-teal group-hover:text-white">→</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
