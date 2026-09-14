import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'

export default function PremiumCard({
  icon: Icon,
  title,
  description,
  tag,
  to,
  tone = 'light',
  className = '',
  aos = 'fade-up',
  aosDelay = 0
}) {
  const dark = tone === 'dark'
  const Wrapper = to ? Link : 'div'

  return (
    <Wrapper
      {...(to ? { to } : {})}
      data-aos={aos}
      data-aos-delay={aosDelay}
      className={`group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
        dark
          ? 'border border-white/10 bg-white/[0.04] hover:border-[#72B943]/40 hover:bg-white/[0.07]'
          : 'border border-line/10 bg-surface shadow-card hover:border-brand/30 hover:shadow-[0_24px_48px_rgb(var(--shadow-brand)/0.12)]'
      } ${className}`}
    >
      <span
        className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r transition-transform duration-300 group-hover:scale-x-100 ${
          dark ? 'from-[#72B943] to-[#075B3A]' : 'from-[#72B943] to-[#075B3A]'
        }`}
        aria-hidden="true"
      />
      {Icon && (
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 ${
            dark
              ? 'bg-[#72B943]/15 text-[#72B943]'
              : 'bg-tint text-brand'
          }`}
        >
          <Icon className="text-2xl" />
        </div>
      )}
      {tag && (
        <span
          className={`absolute right-5 top-5 text-[9px] font-bold uppercase tracking-[0.18em] ${
            dark ? 'text-[#72B943]/70' : 'text-brand/60'
          }`}
        >
          {tag}
        </span>
      )}
      <h3
        className={`mt-5 font-display text-lg font-bold tracking-tight ${
          dark ? 'text-[#EDF7F2]' : 'text-ink'
        }`}
      >
        {title}
      </h3>
      {description && (
        <p
          className={`mt-2 text-sm leading-relaxed ${
            dark ? 'text-[#A9C4B8]' : 'text-inkMuted'
          }`}
        >
          {description}
        </p>
      )}
      {to && (
        <span className="mt-auto flex items-center gap-2 pt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-brand transition-colors duration-300 group-hover:text-brandDeep">
          Explore
          <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      )}
    </Wrapper>
  )
}