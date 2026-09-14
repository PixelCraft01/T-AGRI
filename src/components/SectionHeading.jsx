export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className = ''
}) {
  const dark = tone === 'dark'
  const center = align === 'center'

  return (
    <div className={`${center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <p
          data-aos="fade-up"
          className={`mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] ${
            dark ? 'text-[#72B943]' : 'text-brand'
          } ${center ? 'justify-center' : ''}`}
        >
          {!center && <span className="h-px w-8 bg-current" aria-hidden="true" />}
          {eyebrow}
        </p>
      )}
      <h2
        data-aos="fade-up"
        data-aos-delay="60"
        className={`font-display text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.05] ${
          dark ? 'text-[#EDF7F2]' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          data-aos="fade-up"
          data-aos-delay="120"
          className={`mt-6 text-base leading-relaxed sm:text-lg ${
            dark ? 'text-[#A9C4B8]' : 'text-inkMuted'
          } ${center ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}