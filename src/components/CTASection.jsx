import { Link } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'

export default function CTASection({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  tone = 'forest',
  note,
  className = ''
}) {
  const dark = tone === 'dark'
  const light = tone === 'light'

  return (
    <section
      className={`relative overflow-hidden ${
        light
          ? 'border-t border-line/10 bg-pageBg text-ink'
          : dark
            ? 'bg-[#07100D] text-white'
            : 'bg-[#075B3A] text-white'
      } ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-hero-grid opacity-20"
        aria-hidden="true"
      />
      <div
        className={`pointer-events-none absolute left-1/2 top-0 h-[360px] w-[680px] -translate-x-1/2 rounded-full blur-3xl ${
          light ? 'bg-brand/10' : 'bg-[#72B943]/20'
        }`}
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-[1400px] px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-10 lg:py-28">
        {eyebrow && (
          <p
            data-aos="fade-up"
            className={`mb-6 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] ${
              light ? 'text-brand' : 'text-[#BDE89A]'
            }`}
          >
            <span className="h-px w-10 bg-current" aria-hidden="true" />
            {eyebrow}
            <span className="h-px w-10 bg-current" aria-hidden="true" />
          </p>
        )}
        <h2
          data-aos="fade-up"
          data-aos-delay="80"
          className="mx-auto max-w-5xl font-display text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl lg:text-[58px]"
        >
          {title}
        </h2>
        {description && (
          <p
            data-aos="fade-up"
            data-aos-delay="160"
            className={`mx-auto mt-8 max-w-2xl text-base leading-relaxed sm:text-lg ${
              light ? 'text-inkMuted' : 'text-[#D7E8DF]'
            }`}
          >
            {description}
          </p>
        )}
        {(primary || secondary) && (
          <div
            data-aos="fade-up"
            data-aos-delay="240"
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {primary && (
              <Link
                to={primary.to}
                className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-surface px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-brand transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.25)] sm:w-auto"
              >
                {primary.label}
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            )}
            {secondary && (
              <Link
                to={secondary.to}
                className={`group flex w-full items-center justify-center gap-2.5 rounded-full border px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white/10 sm:w-auto ${
                  light
                    ? 'border-line/25 text-ink hover:border-brand hover:text-brand'
                    : 'border-white/40 text-white'
                }`}
              >
                {secondary.label}
                <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>
        )}
        {note && (
          <p
            data-aos="fade-up"
            data-aos-delay="320"
            className={`mx-auto mt-10 max-w-3xl border-t pt-8 text-xs font-semibold uppercase tracking-[0.18em] ${
              light
                ? 'border-line/10 text-inkSoft'
                : 'border-white/20 text-[#BDE89A]'
            }`}
          >
            {note}
          </p>
        )}
      </div>
    </section>
  )
}