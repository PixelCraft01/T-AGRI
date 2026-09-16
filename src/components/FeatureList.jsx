export default function FeatureList({ items, tone = 'light', className = '' }) {
  const dark = tone === 'dark'

  return (
    <div className={`mt-10 grid grid-cols-2 gap-3 sm:gap-4 ${className}`}>
      {items.map((s, i) => (
        <div
          key={s.title}
          data-aos="fade-up"
          data-aos-delay={i * 60}
          className={`group relative overflow-hidden rounded-xl border p-3.5 transition-all duration-300 hover:-translate-y-0.5 sm:p-4 ${dark
              ? 'border-white/10 bg-white/[0.035] hover:border-[#72B943]/30 hover:bg-white/[0.055]'
              : 'border-line/10 bg-surface hover:border-brand/20 hover:bg-tint/40'
            }`}
        >
          <div className="flex items-start gap-3">
            {s.icon && (
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-105 ${dark
                    ? 'bg-[#72B943]/15 text-[#72B943] group-hover:bg-[#72B943] group-hover:text-[#07100D]'
                    : 'bg-tint text-brand group-hover:bg-[#075B3A] group-hover:text-white'
                  }`}
              >
                <s.icon className="text-sm" />
              </span>
            )}

            <div className="min-w-0 flex-1">
              <h3
                className={`text-[11px] font-bold uppercase leading-tight tracking-[0.08em] sm:text-xs ${dark ? 'text-[#EDF7F2]' : 'text-ink'
                  }`}
              >
                {s.title}
              </h3>

              <p
                className={`mt-1.5 text-[10px] leading-4 sm:text-[11px] sm:leading-5 ${dark ? 'text-[#A9C4B8]' : 'text-inkMuted'
                  }`}
              >
                {s.desc}
              </p>
            </div>
          </div>

          {/* Small hover accent */}
          <div
            className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${dark ? 'bg-[#72B943]' : 'bg-brand'
              }`}
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  )
}