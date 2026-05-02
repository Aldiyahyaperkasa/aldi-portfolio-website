import { motion } from 'motion/react';

export default function Experience() {
  return (
    <section id="experience" className="py-[100px] bg-teal">
      <div className="max-w-[1200px] mx-auto px-[52px] max-md:px-[20px]">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-[8px] font-mono text-[10px] text-amber uppercase tracking-[0.14em] mb-[12px]">
            <span className="w-[24px] h-[1.5px] bg-amber inline-block" />
            Work History
          </div>
          <h2 className="font-display text-[clamp(44px,6.5vw,88px)] leading-[0.92] tracking-[0.03em] text-white">
            EXPERIENCE<br/><span className="text-amber">&amp; JOURNEY</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-[1fr_1.8fr] gap-[80px] mt-[64px] items-start max-lg:grid-cols-1 max-lg:gap-[48px]">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[15px] text-white/55 leading-[1.8] font-light mb-[32px]">Building real-world systems for government, events, and private clients — end-to-end, from analysis to production.</p>
            <div className="bg-white/6 border border-white/10 rounded-[20px] padding-[24px] p-6">
              <div className="font-display text-[60px] text-amber leading-none">2</div>
              <div className="font-mono text-[11px] text-white/40 uppercase tracking-[0.1em] mt-[4px]">Years of Experience</div>
            </div>
          </motion.div>

          <div className="flex flex-col">
            {[
              { date: 'Jun 2025 - Present', title: 'FULLSTACK DEVELOPER', company: 'Self-Employed — Freelance', desc: 'Developing 9+ web applications for clients, events, and government agencies. End-to-end delivery: analysis → database design → API integration → production deployment and maintenance.', status: 'Active' },
              { date: 'Mar 2023 - Jun 2023', title: 'IT INTERN', company: 'PT. Kaltim Methanol Industri — ICT Section', desc: 'Supported IT operations and device management. Conducted needs analysis and developed web applications for internal operational support.', status: 'Done' },
              { date: 'Aug 2021 - May 2022', title: 'STAFF ADMINISTRASI', company: 'BPJS Ketenagakerjaan — Bidang Kepesertaan', desc: 'Validated membership data, managed construction registrations, and supported claim processing with strong data accuracy.', status: 'Done' },
              { date: '2021 - 2022', title: 'KETUA DIVISI PROGRAMMING', company: 'CPANEL — Computer, Programming, and Network Layer', desc: 'Led programming division. Monthly algorithm training. Organized Kodular mobile dev workshops for OSIS Bontang.', status: 'Org' }
            ].map((ex, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-t border-white/8 py-[32px] grid grid-cols-[140px_1fr_auto] gap-[24px] items-start cursor-none relative group max-md:grid-cols-1 max-md:gap-[8px]"
              >
                <div className="absolute -left-[52px] right-0 top-0 bottom-0 bg-white/4 opacity-0 transition-opacity duration-300 border-l-[3px] border-amber group-hover:opacity-100" />
                <div className="font-mono text-[11px] text-white/35 tracking-[0.05em] pt-[4px] relative z-1">{ex.date}</div>
                <div className="relative z-1">
                  <div className="font-display text-[26px] tracking-[0.03em] text-white mb-[4px]">{ex.title}</div>
                  <div className="text-[13px] text-amber-2 font-semibold mb-[12px]">{ex.company}</div>
                  <div className="text-[13px] text-white/50 leading-[1.7] font-light">{ex.desc}</div>
                </div>
                <div className="bg-amber/12 border border-amber/25 text-amber-2 rounded-full px-[16px] py-[5px] font-mono text-[10px] whitespace-nowrap self-start relative z-1">{ex.status}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-[64px] border-t border-white/10 pt-[40px] flex items-center justify-between flex-wrap gap-[24px]">
          <div>
            <div className="font-mono text-[12px] text-white/35">Education · Sep 2020 – Jan 2025</div>
            <div className="font-display text-[38px] text-white tracking-[0.03em]">S1 TEKNIK INFORMATIKA</div>
            <div className="font-mono text-[12px] text-white/35 mt-[6px]">Sekolah Tinggi Teknologi Bontang</div>
          </div>
          <div className="flex gap-[48px]">
            <div>
              <div className="font-display text-[46px] text-amber leading-none">3.55</div>
              <div className="font-mono text-[10px] text-white/35 uppercase tracking-[0.1em]">GPA / 4.00</div>
            </div>
            <div>
              <div className="font-display text-[46px] text-amber leading-none">2025</div>
              <div className="font-mono text-[10px] text-white/35 uppercase tracking-[0.1em]">Graduated</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
