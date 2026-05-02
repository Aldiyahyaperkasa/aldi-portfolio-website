import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-[52px] py-[18px] transition-all duration-400 max-md:px-[20px] max-md:py-[14px] ${isScrolled ? 'bg-teal/96 backdrop-blur-[20px] shadow-[0_1px_0_rgba(255,255,255,0.08)]' : ''}`}>
      <a href="#hero" className="font-display text-[26px] tracking-[0.06em] text-white no-underline flex items-center gap-[6px]">
        ALDI
        <div className="w-[8px] h-[8px] bg-amber rounded-full animate-[dpb_2.5s_ease_infinite]" />
      </a>
      
      <ul className="flex gap-[32px] list-none max-md:hidden">
        {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`} 
              className="text-[13px] text-white/65 no-underline font-medium transition-colors duration-200 hover:text-white relative after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:right-0 after:h-[1.5px] after:bg-amber after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-[12px] max-md:hidden">
        <a 
          href="https://drive.google.com/file/d/1Rsy47JiO9x8gkwp9rZFf1aUgM9u4POKM/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white/10 text-white border border-white/20 px-[20px] py-[8px] rounded-full text-[12px] font-bold no-underline transition-all hover:bg-white/20 hover:border-amber hover:text-amber"
        >
          Download CV
        </a>
        <a href="mailto:aldiyahyap@gmail.com" className="bg-amber text-ink px-[24px] py-[9px] rounded-full text-[13px] font-bold no-underline transition-all duration-250 hover:bg-white hover:-translate-y-[2px] hover:shadow-[0_8px_40px_rgba(11,85,99,0.18)]">
          Hire Me →
        </a>
      </div>
    </nav>
  );
}
