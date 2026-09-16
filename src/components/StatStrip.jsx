export default function StatStrip({
  items,
  tone = 'light',
  columns = 4,
  className = ''
}) {
  const dark = tone === 'dark'

  const cols = {
    // Mobile: 2-2
    // iPad: 2-2
    2: 'grid-cols-2 sm:grid-cols-2',

    // Existing
    3: 'sm:grid-cols-3',

    // Existing
    4: 'grid-cols-2 lg:grid-cols-4'
  }[columns]

  return (
    <div
      data-aos="fade-up"
      className={`grid gap-px ${cols} ${
        dark ? 'bg-white/10' : 'bg-line/10'
      } overflow-hidden rounded-2xl border ${
        dark ? 'border-white/10' : 'border-line/10'
      } ${className}`}
    >
      {items.map((s, index) => (
        <div
          key={s.label}
          className={`group relative overflow-hidden p-6 sm:p-7 ${
            dark ? 'bg-[#0b1210]' : 'bg-surface'
          } transition-all duration-300 ease-out ${
            dark
              ? 'hover:bg-[#0E1915]'
              : 'hover:bg-tint'
          } hover:-translate-y-[2px]`}
        >
          {/* Soft hover glow */}
          <div
            className={`pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full blur-2xl opacity-0 transition-all duration-500 group-hover:opacity-100 ${
              dark ? 'bg-[#72B943]/15' : 'bg-brand/10'
            }`}
            aria-hidden="true"
          />

          {/* Card number */}
          <span
            className={`absolute right-4 top-4 text-[9px] font-bold tracking-[0.15em] transition-all duration-300 ${
              dark
                ? 'text-white/15 group-hover:text-[#72B943]/50'
                : 'text-ink/10 group-hover:text-brand/40'
            }`}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className="relative z-10">
            {/* Value */}
            <p
              className={`font-display text-3xl font-extrabold tracking-tight transition-all duration-300 group-hover:translate-x-1 sm:text-4xl ${
                dark ? 'text-[#72B943]' : 'text-brand'
              }`}
            >
              {s.value}
            </p>

            {/* Label */}
            <p
              className={`mt-1.5 text-xs font-bold uppercase tracking-[0.14em] transition-transform duration-300 group-hover:translate-x-1 ${
                dark ? 'text-[#EDF7F2]' : 'text-ink'
              }`}
            >
              {s.label}
            </p>

            {/* Note */}
            {s.note && (
              <p
                className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] ${
                  dark ? 'text-inkSoft' : 'text-inkSoft'
                }`}
              >
                {s.note}
              </p>
            )}

            {/* Hover arrow */}
            <div
              className={`mt-4 text-right text-sm opacity-30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12 group-hover:opacity-100 ${
                dark ? 'text-[#72B943]' : 'text-brand'
              }`}
              aria-hidden="true"
            >
              ↗
            </div>
          </div>

          {/* Bottom hover line */}
          <div
            className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full ${
              dark ? 'bg-[#72B943]' : 'bg-brand'
            }`}
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  )
}