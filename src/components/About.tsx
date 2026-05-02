import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto px-[52px] max-md:px-[20px]">
        <div className="grid grid-cols-[5fr_7fr] gap-[80px] items-center max-lg:grid-cols-1 max-lg:gap-[48px]">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[28px] overflow-hidden aspect-[3/4] bg-teal-pale relative shadow-[0_8px_40px_rgba(11,85,99,0.18)] group">
              <div className="w-full h-full flex flex-col items-center justify-center gap-[14px] text-muted-2 bg-[linear-gradient(140deg,var(--color-teal-pale)_0%,var(--color-teal-mid)_100%)]">
                <img 
                  src="%BASE_URL%assets/gambar/pass-foto.jpg" 
                  alt="Aldi Yahya Perkasa" 
                  className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full flex flex-col items-center justify-center text-teal/20">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="22" r="12" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M6 54c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke="currentColor" strokeWidth="1.2"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute top-[20px] left-[20px] z-[2] bg-amber text-ink rounded-full px-[18px] py-[7px] font-mono text-[11px] font-bold">
              ✦ Open for Work
            </div>
            {/* <div className="absolute bottom-[20px] right-[20px] z-[2] bg-ink/82 backdrop-blur-[10px] rounded-[16px] px-[22px] py-[16px]">
              <div className="font-display text-[40px] text-amber leading-none">3.55</div>
              <div className="font-mono text-[10px] text-white/50 uppercase tracking-[0.1em]">GPA / 4.00</div>
            </div> */}
            <div className="absolute bottom-[-24px] left-[-24px] w-[120px] h-[120px] rounded-full border-2 border-dashed border-teal-mid animate-[sp_16s_linear_infinite]" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="ar"
          >
            <div className="inline-flex items-center gap-[8px] font-mono text-[10px] text-teal uppercase tracking-[0.14em] mb-[12px]">
              <span className="w-[24px] h-[1.5px] bg-teal inline-block" />
              About Me
            </div>
            <h2 className="font-display text-[clamp(44px,6.5vw,88px)] leading-[0.92] tracking-[0.03em] text-ink mb-[28px]">
              BUILD<br/>SYSTEMS<br/><span className="text-teal">THAT</span> <span className="text-amber">WORK</span>
            </h2>
            <div className="mt-[28px]">
              <p className="text-[15px] text-muted leading-[1.8] mb-[18px]">
                Saya Fullstack Web Developer lulusan Teknik Informatika dari Sekolah Tinggi Teknologi Bontang. Terbiasa membangun sistem web end-to-end — dari analisis kebutuhan, perancangan database, integrasi API, hingga production deployment.
              </p>
              <p className="text-[15px] text-muted leading-[1.8] mb-[18px]">
                Portofolio mencakup sistem pemerintahan, event 5000+ peserta, payment gateway, QR Code, dan WhatsApp API integration untuk klien nyata.
              </p>
            </div>
            <div className="flex flex-wrap gap-[8px] mt-[28px]">
              {["Problem Solving", "System Analysis", "API Integration", "Payment Systems", "Fast Learner", "Team Collaborator", "Time Management", "Adaptibility"].map(skill => (
                <span key={skill} className="bg-teal-pale border-[1.5px] border-teal-mid text-teal px-[18px] py-[7px] rounded-full text-[12px] font-semibold cursor-none transition-all duration-250 hover:bg-teal hover:text-white hover:border-teal hover:-translate-y-[2px]">
                  {skill}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-[2px] mt-[44px]">
              <div className="bg-teal-pale border border-teal-mid p-[20px] text-center transition-all duration-300 cursor-none hover:bg-teal hover:-translate-y-[4px] hover:shadow-[0_8px_40px_rgba(11,85,99,0.18)] group rounded-l-[14px]">
                <div className="font-display text-[40px] text-teal leading-none group-hover:text-white transition-colors">8+</div>
                <div className="font-mono text-[10px] text-muted uppercase tracking-[0.1em] mt-[4px] group-hover:text-white transition-colors">Projects</div>
              </div>
              {/* <div className="bg-teal-pale border border-teal-mid p-[20px] text-center transition-all duration-300 cursor-none hover:bg-teal hover:-translate-y-[4px] hover:shadow-[0_8px_40px_rgba(11,85,99,0.18)] group">
                <div className="font-display text-[40px] text-teal leading-none group-hover:text-white transition-colors">5K+</div>
                <div className="font-mono text-[10px] text-muted uppercase tracking-[0.1em] mt-[4px] group-hover:text-white transition-colors">Users</div>
              </div> */}
              <div className="bg-teal-pale border border-teal-mid p-[20px] text-center transition-all duration-300 cursor-none hover:bg-teal hover:-translate-y-[4px] hover:shadow-[0_8px_40px_rgba(11,85,99,0.18)] group rounded-r-[14px]">
                <div className="font-display text-[40px] text-teal leading-none group-hover:text-white transition-colors">5000+</div>
                <div className="font-mono text-[10px] text-muted uppercase tracking-[0.1em] mt-[4px] group-hover:text-white transition-colors">Users</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
