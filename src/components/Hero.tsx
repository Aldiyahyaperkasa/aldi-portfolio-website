import { useEffect, useState } from 'react';

export default function Hero() {
  const [counts, setCounts] = useState({ projects: 0, users: 0});

  useEffect(() => {
    // Simple counter animation logic
    const targets = { projects: 8, users: 5000};
    const duration = 2000;
    const start = performance.now();

    const animate = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      
      setCounts({
        projects: Math.floor(progress * targets.projects),
        users: Math.floor(progress * targets.users)
      });

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section id="hero">
      <div className="hm" />
      <div className="hgr" />
      <div className="horb oa" />
      <div className="horb ob" />
      <div className="horb oc" />
      
      <div className="hb">
        <div className="hey">
          <div className="ep" />
          Fullstack Web Developer · Freelance · Bontang, Indonesia
        </div>
        
        <h1 className="hn">
          ALDI<span className="aw"> YAHYA</span><br />
          <span className="sk">PERKASA</span>
        </h1>

        <div className="hbr">
          <div>
            <p className="hds">
              Membangun sistem web end-to-end dari analisis kebutuhan, perancangan database, integrasi API, hingga deployment — untuk instansi pemerintah, event besar, dan klien korporat.
            </p>
            <div className="hca">
              <a href="#projects" className="ba">
                View Projects ↓
              </a>
              <a 
                href="https://drive.google.com/file/d/1Rsy47JiO9x8gkwp9rZFf1aUgM9u4POKM/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bcv group"
              >
                <span>Download CV</span>
                <span className="bg-amber text-ink w-[24px] h-[24px] rounded-full flex items-center justify-center text-[11px] group-hover:scale-110 transition-transform">↓</span>
              </a>              

            </div>
          </div>

          <div className="hsc">
            <div>
              <div className="hsn">{counts.projects}+</div>
              <div className="hsl">Projects Built</div>
            </div>
            <div>
              <div className="hsn">{counts.users >= 5000 ? '5000+' : counts.users}</div>
              <div className="hsl">Users Served</div>
            </div>
            {/* <div>
              <div className="hsl">API Integrations</div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="hcue">
        <div className="str">
          <div className="stk" />
        </div>
        Scroll to explore
      </div>
    </section>
  );
}
