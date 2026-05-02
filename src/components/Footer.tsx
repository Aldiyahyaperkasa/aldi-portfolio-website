export default function Footer() {
  return (
    <footer className="bg-ink px-[52px] py-[100px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] max-md:text-center max-md:px-5">
      <div className="font-display text-[28px] text-white tracking-[0.06em] flex items-center gap-[8px]">
        ALDI<span className="text-amber">.</span>
      </div>
      <div className="flex gap-[24px] max-md:justify-center">
        <a href="mailto:aldiyahyap@gmail.com" className="font-mono text-[11px] text-white/35 no-underline transition-colors hover:text-amber">Email</a>
        <a href="https://aldiyahya.my.id" target="_blank" className="font-mono text-[11px] text-white/35 no-underline transition-colors hover:text-amber">Portfolio</a>
        <a href="https://github.com/Aldiyahyaperkasa" target="_blank" className="font-mono text-[11px] text-white/35 no-underline transition-colors hover:text-amber">GitHub</a>
      </div>
      <div className="font-mono text-[11px] text-white/25 text-right leading-[1.9] max-md:text-center">
        {/* <div>Built with React · Tailwind · Motion</div> */}
        <div>© 2025 Aldi Yahya Perkasa — Bontang, Indonesia</div>
      </div>
    </footer>
  );
}
