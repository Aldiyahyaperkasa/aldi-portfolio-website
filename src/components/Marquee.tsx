export default function Marquee() {
  const items = [
    "PHP & CodeIgniter", "Laravel", "React.js & Next.js", "MySQL Database",
    "Midtrans Payment", "QR Code Systems", "WhatsApp API", "Tailwind CSS",
    "System Architecture", "REST API Integration"
  ];

  return (
    <div className="bg-amber py-[13px] overflow-hidden">
      <div className="flex whitespace-nowrap animate-[mq_20s_linear_infinite]">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex">
            {items.map((item, idx) => (
              <span key={idx} className="inline-flex items-center gap-[16px] px-[22px] font-mono text-[11px] text-ink tracking-[0.04em] font-bold">
                {item} <span className="text-teal text-[10px]">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
