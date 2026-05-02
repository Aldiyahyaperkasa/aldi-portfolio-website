import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  CreditCard, 
  MessageCircle, 
  Box, 
  Mail, 
  Server, 
  Github, 
  Terminal, 
  Database, 
  Zap, 
  Triangle, 
  Atom, 
  Wind,
  Layers,
  Layout,
  Cpu
} from 'lucide-react';

type Tab = 'cards' | 'bars' | 'tools';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<Tab>('cards');

  return (
    <section id="skills" className="py-[100px] bg-cream">
      <div className="max-w-[1200px] mx-auto px-[52px] max-md:px-[20px]">
        <div className="flex items-end justify-between mb-[56px] max-md:flex-col max-md:items-start max-md:gap-8">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-[8px] font-mono text-[10px] text-teal uppercase tracking-[0.14em] mb-[12px]">
              <span className="w-[24px] h-[1.5px] bg-teal inline-block" />
              Skills & Expertise
            </div>
            <h2 className="font-display text-[clamp(44px,6.5vw,88px)] leading-[0.92] tracking-[0.03em] text-ink">
              WHAT I <span className="text-teal">BRING</span>
            </h2>
          </motion.div>
          <div className="flex gap-[6px]">
            {(['overview', 'proficiency', 'tools'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab === 'overview' ? 'cards' : tab === 'proficiency' ? 'bars' : 'tools')}
                className={`border-[1.5px] border-ink/18 px-[20px] py-[8px] rounded-full font-mono text-[11px] uppercase tracking-[0.06em] transition-all duration-200 cursor-none ${
                  (activeTab === 'cards' && tab === 'overview') || 
                  (activeTab === 'bars' && tab === 'proficiency') || 
                  (activeTab === 'tools' && tab === 'tools') 
                    ? 'bg-teal text-white border-teal' 
                    : 'bg-white text-muted hover:bg-teal hover:border-teal hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'cards' && (
          <div className="grid grid-cols-4 gap-[12px] max-lg:grid-cols-2 max-md:grid-cols-1">
            {[
              { icon: <Cpu className="w-5 h-5" />, title: 'System Architecture', items: ['System Analysis & ERD', 'Database Design', 'DFD & Flowcharts', 'SAW & Borda Algorithm', 'Business Logic Design'] },
              { icon: <Layout className="w-5 h-5" />, title: 'Frontend Engineering', items: ['React.js & Next.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Responsive UI/UX'] },
              { icon: <Database className="w-5 h-5" />, title: 'Backend & Data', items: ['PHP — CodeIgniter & Laravel', 'MySQL Database', 'REST API Integration', 'Midtrans Payment', 'WhatsApp API (Fonnte)'] },
              { icon: <Layers className="w-5 h-5" />, title: 'Deployment & Tools', items: ['CPanel & Hosting', 'Git / GitHub', 'QR Code Systems', 'SMTP / PHP Mailer', 'Linux Server'] },
            ].map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-teal/10 rounded-[20px] p-[28px_24px] transition-all duration-350 hover:-translate-y-[6px] hover:shadow-[0_8px_40px_rgba(11,85,99,0.18)] hover:border-teal-mid relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-linear-to-r from-teal to-teal-3 scale-x-0 origin-left transition-transform duration-350 group-hover:scale-x-100" />
                <div className="w-[44px] h-[44px] rounded-[12px] bg-teal-pale border border-teal-mid flex items-center justify-center text-teal mb-[18px] transition-all group-hover:bg-teal group-hover:text-white">
                  {skill.icon}
                </div>
                <h3 className="text-[15px] font-bold mb-[16px] text-ink">{skill.title}</h3>
                <ul className="list-none flex flex-col gap-[8px]">
                  {skill.items.map((item) => (
                    <li key={item} className="font-mono text-[11px] text-muted flex items-center gap-[8px] before:content-['▸'] before:text-teal before:text-[9px] before:flex-shrink-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        )}

        {/* ... bars tab remains largely same, just checking for spacing ... */}
        {activeTab === 'bars' && (
          <div className="grid grid-cols-2 gap-[40px] max-lg:grid-cols-1">
            <div className="bg4">
              <h4 className="text-[14px] font-bold text-ink mb-[20px] pb-[12px] border-bottom border-teal/10">Backend & Database</h4>
              {[
                { name: 'PHP — CodeIgniter & Laravel', level: 92 },
                { name: 'MySQL & Database Design', level: 90 },
                { name: 'REST API Integration', level: 86 },
                { name: 'System Analysis & ERD', level: 88 },
              ].map((skill) => (
                <div key={skill.name} className="mb-[18px]">
                  <div className="flex justify-between mb-[8px]">
                    <span className="text-[13px] text-ink-2 font-medium">{skill.name}</span>
                    <span className="font-mono text-[11px] text-muted-2">{skill.level}%</span>
                  </div>
                  <div className="h-[5px] bg-cream-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
                      className="h-full rounded-full bg-linear-to-r from-teal to-teal-3"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="bg4">
              <h4 className="text-[14px] font-bold text-ink mb-[20px] pb-[12px] border-bottom border-teal/10">Frontend & Tools</h4>
              {[
                { name: 'Tailwind CSS & Bootstrap', level: 88 },
                { name: 'JavaScript & TypeScript', level: 80 },
                { name: 'React.js & Next.js', level: 72 },
                { name: 'Git & Deployment', level: 84 },
              ].map((skill) => (
                <div key={skill.name} className="mb-[18px]">
                  <div className="flex justify-between mb-[8px]">
                    <span className="text-[13px] text-ink-2 font-medium">{skill.name}</span>
                    <span className="font-mono text-[11px] text-muted-2">{skill.level}%</span>
                  </div>
                  <div className="h-[5px] bg-cream-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
                      className="h-full rounded-full bg-linear-to-r from-teal to-teal-3"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="grid grid-cols-4 gap-[10px] max-lg:grid-cols-3 max-md:grid-cols-2">
            {[
              { icon: <CreditCard className="w-6 h-6" />, name: 'Midtrans', type: 'Payment' },
              { icon: <MessageCircle className="w-6 h-6" />, name: 'WhatsApp API', type: 'Integration' },
              { icon: <Box className="w-6 h-6" />, name: 'QR Code', type: 'System' },
              { icon: <Mail className="w-6 h-6" />, name: 'SMTP Mailer', type: 'Email' },
              { icon: <Server className="w-6 h-6" />, name: 'CPanel', type: 'Hosting' },
              { icon: <Github className="w-6 h-6" />, name: 'GitHub', type: 'Version Control' },
              { icon: <Terminal className="w-6 h-6" />, name: 'Linux Server', type: 'DevOps' },
              { icon: <Database className="w-6 h-6" />, name: 'MySQL', type: 'Database' },
              { icon: <Zap className="w-6 h-6" />, name: 'CodeIgniter', type: 'Framework' },
              { icon: <Triangle className="w-6 h-6" />, name: 'Laravel', type: 'Framework' },
              { icon: <Atom className="w-6 h-6" />, name: 'React.js', type: 'Frontend' },
              { icon: <Wind className="w-6 h-6" />, name: 'Tailwind', type: 'CSS' },
            ].map((tool) => (
              <div
                key={tool.name}
                className="bg-white border border-teal/10 rounded-[14px] p-[24px_16px] flex flex-col items-center gap-[12px] cursor-none transition-all duration-350 text-center hover:bg-teal hover:border-teal hover:-translate-y-[4px] hover:shadow-[0_8px_40px_rgba(11,85,99,0.18)] group"
              >
                <div className="text-teal group-hover:text-white transition-colors">{tool.icon}</div>
                <div className="text-[13px] font-bold text-ink group-hover:text-white">{tool.name}</div>
                <div className="font-mono text-[9px] text-muted-2 uppercase tracking-[0.08em] group-hover:text-white/70">{tool.type}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
