import { FiArrowRight, FiRotateCcw } from 'react-icons/fi'

export default function FlowChain({
  steps,
  tone = 'light',
  accent = 'lime',
  title,
  subtitle,
  loop = false,
  wrapClass = 'flex flex-wrap items-center gap-2.5 sm:gap-4',
  chipClass = ''
}) {
  const dark = tone === 'dark'
  const accentColor =
    accent === 'gold' ? '#E7B84B' : accent === 'lime' ? '#72B943' : '#075B3A'

  const chip = dark
    ? `border border-white/15 bg-white/[0.05] text-[#EDF7F2] hover:border-white/35`
    : `border border-line/12 bg-surface text-ink hover:border-brand/50 hover:text-brand`

  return (
    <div>
      {(title || subtitle) && (
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          {title && (
            <p
              className={`text-[11px] font-bold uppercase tracking-[0.28em] ${
                dark ? 'text-[#72B943]' : 'text-brand'
              }`}
            >
              {title}
            </p>
          )}
          {subtitle && (
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-inkSoft">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className={wrapClass}>
        {steps.map((step, i) => (
          <div key={`${step}-${i}`} className="flex items-center gap-2.5 sm:gap-4">
            <span
              className={`${chip} ${chipClass} rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors duration-300`}
            >
              {step}
            </span>
            {i < steps.length - 1 && (
              <span style={{ color: accentColor }} className="flex items-center">
                <FiArrowRight className="relative" />
                <FiArrowRight
                  className="relative -ml-2.5 opacity-40"
                  style={{
                    animation: 'tejays-flow-arrow 2.2s ease-in-out infinite',
                    animationDelay: `${i * 160}ms`
                  }}
                />
              </span>
            )}
          </div>
        ))}
        {loop && <FiRotateCcw className="ml-1" style={{ color: accentColor }} />}
      </div>
    </div>
  )
}