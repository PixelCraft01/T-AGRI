import { Link } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import { assetPath } from '../utils/assetPath'

export default function PageHero({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  image,
  imageAlt = '',
  meta = [],
  variant = 'full',
  align = 'left',
  children,
  className = ''
}) {
  const center = align === 'center'

  const ctas = (primary || secondary) && (
    <div
      data-aos="fade-up"
      data-aos-delay="260"
      className={`mt-10 flex flex-col gap-4 sm:flex-row sm:items-center ${
        center ? 'sm:justify-center' : ''
      }`}
    >
      {primary && (
        <Link
          to={primary.to}
          className="group flex items-center justify-center gap-2 rounded-full bg-[#075B3A] px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#043D2A] hover:shadow-[0_14px_32px_rgb(var(--shadow-brand)/0.35)]"
        >
          {primary.label}
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}
      {secondary && (
        <Link
          to={secondary.to}
          className={`group flex items-center justify-center gap-2 rounded-full border px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 ${
            variant === 'dark' || variant === 'full'
              ? 'border-white/40 text-white hover:bg-white/10'
              : 'border-line/20 text-ink hover:border-brand hover:text-brand'
          }`}
        >
          {secondary.label}
          <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  )

  /* ---------- VARIANT: full-bleed background image ---------- */
  if (variant === 'full') {
    return (
      <section className={`relative overflow-hidden bg-[#07100D] text-white ${className}`}>
        {image && (
          <img
            src={assetPath(image)}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#07100D]/95 via-[#07100D]/70 to-[#075B3A]/30"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#07100D]/90 via-transparent to-[#07100D]/40"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-[1400px] px-4 pb-10 pt-[150px] sm:px-6 lg:px-10 lg:pb-14 lg:pt-[190px]">
          <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
            {eyebrow && (
              <p
                data-aos="fade-up"
                className={`mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#72B943] ${
                  center ? 'justify-center' : ''
                }`}
              >
                {!center && <span className="h-px w-10 bg-current" aria-hidden="true" />}
                {eyebrow}
              </p>
            )}
            <h1
              data-aos="fade-up"
              data-aos-delay="90"
              className={`font-display text-[40px] font-extrabold leading-[1.03] tracking-tight sm:text-6xl lg:text-[74px] ${
                center ? 'mx-auto' : ''
              }`}
            >
              {title}
            </h1>
            {description && (
              <p
                data-aos="fade-up"
                data-aos-delay="180"
                className={`mt-8 max-w-xl text-base leading-relaxed text-[#C9DED5] sm:text-lg ${
                  center ? 'mx-auto' : ''
                }`}
              >
                {description}
              </p>
            )}
            {ctas}
            {children && <div className="mt-10">{children}</div>}
          </div>
        </div>
        {meta.length > 0 && (
          <div className="relative border-t border-white/15 bg-[#07100D]/40 backdrop-blur-sm">
            <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center gap-x-8 gap-y-2 px-4 py-5 sm:px-6 lg:px-10">
              {meta.map((m) => (
                <span
                  key={m}
                  className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#C9DED5]"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>
    )
  }

  /* ---------- VARIANT: dark / forest background ---------- */
  if (variant === 'dark') {
    return (
      <section className="relative overflow-hidden bg-gradient-to-b from-[#043D2A] to-[#07100D] text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-hero-grid opacity-40"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full bg-[#72B943]/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-[1400px] px-4 py-28 sm:px-6 sm:py-32 lg:px-10 lg:py-36">
          <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-4xl'}>
            {eyebrow && (
              <p
                data-aos="fade-up"
                className={`mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#72B943] ${
                  center ? 'justify-center' : ''
                }`}
              >
                {!center && <span className="h-px w-10 bg-current" aria-hidden="true" />}
                {eyebrow}
              </p>
            )}
            <h1
              data-aos="fade-up"
              data-aos-delay="90"
              className={`font-display text-[40px] font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-[70px] ${
                center ? 'mx-auto' : ''
              }`}
            >
              {title}
            </h1>
            {description && (
              <p
                data-aos="fade-up"
                data-aos-delay="180"
                className={`mt-8 max-w-xl text-base leading-relaxed text-[#A9C4B8] sm:text-lg ${
                  center ? 'mx-auto' : ''
                }`}
              >
                {description}
              </p>
            )}
            {ctas}
            {children && <div className="mt-10">{children}</div>}
          </div>
        </div>
        {meta.length > 0 && (
          <div className="relative border-t border-white/10 bg-[#07100D]/30 backdrop-blur-sm">
            <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center gap-x-8 gap-y-2 px-4 py-5 sm:px-6 lg:px-10">
              {meta.map((m) => (
                <span
                  key={m}
                  className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#A9C4B8]"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>
    )
  }

  /* ---------- VARIANT: split (light, content + framed image) ---------- */
  if (variant === 'split') {
    return (
      <section className="relative overflow-hidden border-b border-line/10 bg-pageBg">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-[#075B3A]/[0.06] blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-[1400px] px-4 pb-16 pt-[130px] sm:px-6 lg:px-10 lg:pb-20 lg:pt-[160px]">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              {eyebrow && (
                <p
                  data-aos="fade-up"
                  className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-brand"
                >
                  <span className="h-px w-10 bg-current" aria-hidden="true" />
                  {eyebrow}
                </p>
              )}
              <h1
                data-aos="fade-up"
                data-aos-delay="90"
                className="font-display text-[38px] font-extrabold leading-[1.04] tracking-tight text-ink sm:text-5xl lg:text-[62px]"
              >
                {title}
              </h1>
              {description && (
                <p
                  data-aos="fade-up"
                  data-aos-delay="180"
                  className="mt-7 max-w-xl text-base leading-relaxed text-inkMuted sm:text-lg"
                >
                  {description}
                </p>
              )}
              {ctas}
              {children && <div className="mt-8">{children}</div>}
            </div>
            <div className="lg:col-span-6" data-aos="zoom-in" data-aos-delay="220">
              <div className="relative mx-auto max-w-[540px] lg:max-w-none">
                <div
                  className="absolute -left-4 -top-4 h-full w-full rounded-[28px] border border-brand/25"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-[28px] shadow-[0_36px_72px_rgb(var(--shadow-ink)/0.16)]">
                  {image ? (
                    <img
                      src={assetPath(image)}
                      alt={imageAlt}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex aspect-[4/5] w-full items-center justify-center bg-tint">
                      <span className="font-display text-sm font-bold uppercase tracking-[0.3em] text-brand">
                        TEJAYS AGRI
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  /* ---------- VARIANT: light centered (contact, etc.) ---------- */
  return (
    <section className="relative overflow-hidden border-b border-line/10 bg-pageBg">
      <div className="relative mx-auto w-full max-w-[1400px] px-4 pb-16 pt-[140px] text-center sm:px-6 lg:px-10 lg:pb-20 lg:pt-[170px]">
        {eyebrow && (
          <p
            data-aos="fade-up"
            className="mb-6 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-brand"
          >
            <span className="h-px w-10 bg-current" aria-hidden="true" />
            {eyebrow}
            <span className="h-px w-10 bg-current" aria-hidden="true" />
          </p>
        )}
        <h1
          data-aos="fade-up"
          data-aos-delay="90"
          className="mx-auto max-w-4xl font-display text-[36px] font-extrabold leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-[62px]"
        >
          {title}
        </h1>
        {description && (
          <p
            data-aos="fade-up"
            data-aos-delay="180"
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-inkMuted sm:text-lg"
          >
            {description}
          </p>
        )}
        {ctas}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  )
}