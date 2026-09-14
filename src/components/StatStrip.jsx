export default function StatStrip({ items, tone = 'light', columns = 4, className = '' }) {
  const dark = tone === 'dark'
  const cols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-3',
    4: 'grid-cols-2 lg:grid-cols-4'
  }[columns]

  return (
    <div
      data-aos="fade-up"
      className={`grid gap-px ${cols} ${
        dark
          ? 'bg-white/10'
          : 'bg-line/10'
      } rounded-2xl overflow-hidden border ${dark ? 'border-white/10' : 'border-line/10'} ${className}`}
    >
      {items.map((s) => (
        <div
          key={s.label}
          className={`p-6 sm:p-7 ${
            dark ? 'bg-[#0b1210]' : 'bg-surface'
          } transition-colors duration-300 hover:${dark ? 'bg-[#0E1915]' : 'bg-tint'}`}
        >
          <p
            className={`font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${
              dark ? 'text-[#72B943]' : 'text-brand'
            }`}
          >
            {s.value}
          </p>
          <p
            className={`mt-1.5 text-xs font-bold uppercase tracking-[0.14em] ${
              dark ? 'text-[#EDF7F2]' : 'text-ink'
            }`}
          >
            {s.label}
          </p>
          {s.note && (
            <p
              className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] ${
                dark ? 'text-inkSoft' : 'text-inkSoft'
              }`}
            >
              {s.note}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}