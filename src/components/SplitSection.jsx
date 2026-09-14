import { assetPath } from '../utils/assetPath'
import SectionHeading from './SectionHeading'

export default function SplitSection({
  eyebrow,
  title,
  description,
  image,
  imageAlt = '',
  imagePosition = 'right',
  children,
  tone = 'light',
  floatCard,
  frame = true,
  imageRatio = 'aspect-[4/5]',
  className = ''
}) {
  const dark = tone === 'dark'
  const imgFirst = imagePosition === 'left'

  return (
    <section
      className={`${dark ? 'bg-[#07100D] text-[#EDF7F2]' : 'bg-pageBg text-ink'} ${className}`}
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {imgFirst && (
            <div className="lg:col-span-5" data-aos="fade-right">
              {image ? (
                <div className="relative">
                  {frame && (
                    <div
                      className={`absolute -left-4 -top-4 h-full w-full rounded-[28px] border ${dark ? 'border-white/20' : 'border-brand/25'}`}
                      aria-hidden="true"
                    />
                  )}
                  <div className="relative overflow-hidden rounded-[28px] shadow-[0_30px_60px_rgb(var(--shadow-ink)/0.16)]">
                    <img
                      src={assetPath(image)}
                      alt={imageAlt}
                      loading="lazy"
                      className={`${imageRatio} w-full object-cover transition-transform duration-700 hover:scale-[1.03]`}
                    />
                  </div>
                  {floatCard && (
                    <div
                      className={`absolute -bottom-5 right-4 rounded-2xl p-4 shadow-[0_20px_40px_rgb(var(--shadow-ink)/0.18)] ${dark ? 'bg-surface text-ink' : 'bg-surface border border-line/5'}`}
                    >
                      <p className={`text-[9px] font-bold uppercase tracking-[0.2em] ${dark ? 'text-brand' : 'text-brand'}`}>
                        {floatCard.note}
                      </p>
                      <p className="mt-1 font-display text-2xl font-extrabold">
                        {floatCard.value}
                      </p>
                      <p className="text-xs font-medium text-inkMuted">
                        {floatCard.label}
                      </p>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          )}

          <div className={imgFirst ? 'lg:col-span-7' : 'lg:col-span-6'}>
            {children ? (
              children
            ) : (
              <SectionHeading
                eyebrow={eyebrow}
                title={title}
                description={description}
                tone={tone}
              />
            )}
          </div>

          {!imgFirst && (
            <div className="lg:col-span-6" data-aos="fade-left">
              {image ? (
                <div className="relative mx-auto max-w-[540px] lg:max-w-none">
                  {frame && (
                    <div
                      className={`absolute -left-4 -top-4 h-full w-full rounded-[28px] border ${dark ? 'border-white/20' : 'border-brand/25'}`}
                      aria-hidden="true"
                    />
                  )}
                  <div className="relative overflow-hidden rounded-[28px] shadow-[0_30px_60px_rgb(var(--shadow-ink)/0.16)]">
                    <img
                      src={assetPath(image)}
                      alt={imageAlt}
                      loading="lazy"
                      className={`${imageRatio} w-full object-cover transition-transform duration-700 hover:scale-[1.03]`}
                    />
                  </div>
                  {floatCard && (
                    <div className="absolute -bottom-5 -left-3 rounded-2xl border border-line/5 bg-surface p-4 shadow-[0_20px_40px_rgb(var(--shadow-ink)/0.18)] sm:-left-6">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand">
                        {floatCard.note}
                      </p>
                      <p className="mt-1 font-display text-2xl font-extrabold text-ink">
                        {floatCard.value}
                      </p>
                      <p className="text-xs font-medium text-inkMuted">
                        {floatCard.label}
                      </p>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}