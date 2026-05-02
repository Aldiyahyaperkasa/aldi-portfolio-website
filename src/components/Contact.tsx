import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 3500);
    }, 1300);
  };

  return (
    <section id="contact" className="py-[120px] bg-cream">
      <div className="max-w-[1200px] mx-auto px-[52px] max-md:px-[20px]">
        <div className="grid grid-cols-2 gap-[80px] items-start max-lg:grid-cols-1 max-lg:gap-[48px]">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-[8px] font-mono text-[10px] text-teal uppercase tracking-[0.14em] mb-[12px]">
              <span className="w-[24px] h-[1.5px] bg-teal inline-block" />
              Contact
            </div>
            <h2 className="font-display text-[clamp(44px,6.5vw,88px)] leading-[0.92] tracking-[0.03em] text-ink mb-[20px]">
              LET'S BUILD<br/><span className="text-teal">SOMETHING</span><br/><span className="text-amber">GREAT</span>
            </h2>
            <p className="text-[15px] text-muted leading-[1.75] mb-[36px] mt-6">Open for freelance projects, collaborations, or full-time opportunities. Let's discuss your next project.</p>
            
            <div className="flex flex-col">
              {[
                { label: 'Email', value: 'aldiyahyap@gmail.com', href: 'mailto:aldiyahyap@gmail.com' },
                { label: 'Portfolio', value: 'aldiyahya.my.id', href: 'https://aldiyahya.my.id' },
                { label: 'WhatsApp / Phone', value: '+62 812-1231-2668', href: 'tel:+6281212312668' },
                { label: 'GitHub', value: 'github.com/Aldiyahyaperkasa', href: 'https://github.com/Aldiyahyaperkasa' }
              ].map((link) => (
                <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} className="flex items-center justify-between py-[18px] border-b border-teal/10 text-ink no-underline transition-all duration-250 group hover:pl-[14px]">
                  <div>
                    <div className="font-mono text-[10px] text-muted-2 uppercase tracking-[0.12em] mb-[4px]">{link.label}</div>
                    <div className="text-[14px] font-bold group-hover:text-teal">{link.value}</div>
                  </div>
                  <div className="w-[36px] h-[36px] rounded-full border-[1.5px] border-ink/18 flex items-center justify-center text-[14px] text-muted-2 transition-all duration-250 group-hover:bg-teal group-hover:border-teal group-hover:text-white">→</div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="bg-white border border-teal/10 rounded-[24px] p-[40px] shadow-[0_4px_24px_rgba(11,85,99,0.06)] max-md:p-6">
              <div className="font-display text-[36px] tracking-[0.03em] mb-[28px]">SEND A MESSAGE</div>
              <form onSubmit={handleSubmit} className="space-y-[14px]">
                <div className="grid grid-cols-2 gap-[14px] max-md:grid-cols-1">
                  <div className="flex flex-col gap-[7px]">
                    <label className="font-mono text-[10px] text-muted-2 uppercase tracking-[0.12em]">Name</label>
                    <input type="text" placeholder="Your name" className="bg-cream border-[1.5px] border-cream-2 text-ink p-[12px_16px] rounded-[12px] font-sans text-[14px] outline-none transition-all focus:border-teal focus:shadow-[0_0_0_3px_rgba(11,85,99,0.1)] focus:bg-white w-full" required />
                  </div>
                  <div className="flex flex-col gap-[7px]">
                    <label className="font-mono text-[10px] text-muted-2 uppercase tracking-[0.12em]">Email</label>
                    <input type="email" placeholder="your@email.com" className="bg-cream border-[1.5px] border-cream-2 text-ink p-[12px_16px] rounded-[12px] font-sans text-[14px] outline-none transition-all focus:border-teal focus:shadow-[0_0_0_3px_rgba(11,85,99,0.1)] focus:bg-white w-full" required />
                  </div>
                </div>
                <div className="flex flex-col gap-[7px]">
                  <label className="font-mono text-[10px] text-muted-2 uppercase tracking-[0.12em]">Project Type</label>
                  <select className="bg-cream border-[1.5px] border-cream-2 text-ink p-[12px_16px] rounded-[12px] font-sans text-[14px] outline-none transition-all focus:border-teal focus:shadow-[0_0_0_3px_rgba(11,85,99,0.1)] focus:bg-white w-full appearance-none">
                    <option value="">Select category...</option>
                    <option>Web Application</option>
                    <option>Dashboard / Monitoring</option>
                    <option>Payment Integration</option>
                    <option>Event Registration System</option>
                    <option>API Integration</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-[7px]">
                  <label className="font-mono text-[10px] text-muted-2 uppercase tracking-[0.12em]">Budget Range</label>
                  <select className="bg-cream border-[1.5px] border-cream-2 text-ink p-[12px_16px] rounded-[12px] font-sans text-[14px] outline-none transition-all focus:border-teal focus:shadow-[0_0_0_3px_rgba(11,85,99,0.1)] focus:bg-white w-full appearance-none">
                    <option value="">Select range...</option>
                    <option>Rp &lt;5 Juta</option>
                    <option>Rp 5–15 Juta</option>
                    <option>Rp 15–50 Juta</option>
                    <option>Rp &gt;50 Juta</option>
                  </select>
                </div>
                <div className="flex flex-col gap-[7px]">
                  <label className="font-mono text-[10px] text-muted-2 uppercase tracking-[0.12em]">Message</label>
                  <textarea placeholder="Tell me about your project..." className="bg-cream border-[1.5px] border-cream-2 text-ink p-[12px_16px] rounded-[12px] font-sans text-[14px] outline-none transition-all focus:border-teal focus:shadow-[0_0_0_3px_rgba(11,85,99,0.1)] focus:bg-white w-full min-h-[100px] resize-none" required></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={formStatus !== 'idle'}
                  className={`w-full text-white border-none p-[15px] rounded-[12px] font-sans text-[15px] font-bold cursor-none transition-all duration-300 flex items-center justify-center gap-[10px] relative overflow-hidden group ${formStatus === 'sent' ? 'bg-[#16a34a]' : 'bg-teal'}`}
                >
                  <div className="absolute inset-0 bg-amber scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100 z-0" />
                  <span className="relative z-1 group-hover:text-ink">
                    {formStatus === 'idle' ? 'Send Message →' : formStatus === 'sending' ? 'Sending...' : '✓ Message Sent!'}
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
