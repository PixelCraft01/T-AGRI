export default function FeatureList({ items, tone = 'light', className = '' }) {
  const dark = tone === 'dark'
  return (
    <div
      className={`mt-10 divide-y border-t border-b ${dark ? 'divide-white/10 border-white/10' : 'divide-line/10 border-line/10'} ${className}`}
    >
      {items.map((s) => (
        <div key={s.title} data-aos="fade-up" className="group flex items-start gap-4 py-5">
          {s.icon && (
            <span
              className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                dark
                  ? 'bg-[#72B943]/15 text-[#72B943] group-hover:bg-[#72B943] group-hover:text-[#07100D]'
                  : 'bg-tint text-brand group-hover:bg-[#075B3A] group-hover:text-white'
              }`}
            >
              <s.icon className="text-lg" />
            </span>
          )}
          <div>
            <h3
              className={`text-sm font-bold uppercase tracking-[0.12em] ${
                dark ? 'text-[#EDF7F2]' : 'text-ink'
              }`}
            >
              {s.title}
            </h3>
            <p
              className={`mt-1 text-sm leading-relaxed ${
                dark ? 'text-[#A9C4B8]' : 'text-inkMuted'
              }`}
            >
              {s.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}