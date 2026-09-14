import { FiArrowRight } from 'react-icons/fi'

const stageNodes = [
  { index: '01', title: 'Genetics', desc: 'Responsible breeding and herd quality, by design.', tag: 'Planned' },
  { index: '02', title: 'Feed', desc: 'Fodder, silage and TMR engineered for nutrition and yield.', tag: 'Planned' },
  { index: '03', title: 'Smart Dairy', desc: 'Phase-I 2,000-cow dairy with climate-controlled barns.', tag: 'Planned' },
  { index: '04', title: 'Milk', desc: 'Hygienic milking, cold-chain and yield monitoring.', tag: 'Planned' },
  { index: '05', title: 'Processing', desc: 'Modern milk processing and dairy manufacture.', tag: 'Planned' },
  { index: '06', title: 'Dairy Products', desc: 'Paneer, ghee, curd, yogurt and the traditional range.', tag: 'Planned' },
  { index: '07', title: 'Cheese', desc: 'Mozzarella and cheddar for food-service and retail.', tag: 'Planned' },
  { index: '08', title: 'Whey', desc: 'Whey recovery as the foundation of protein value.', tag: 'Planned' },
  { index: '09', title: 'Nutrition', desc: 'Premium protein, dairy nutrition and food-tech ambitions.', tag: 'Future' }
]

const circularLoop = ['Manure', 'Biogas', 'Energy', 'Fertilizer', 'Agriculture', 'Feed']

export default function EcosystemChain({ showLoop = true, className = '' }) {
  return (
    <div className={className}>
      <div className="relative mx-auto max-w-5xl mt-4">
        <div
          className="absolute bottom-0 left-[19px] top-0 w-px bg-brand/15 lg:left-1/2 lg:-translate-x-1/2"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-[15px] top-0 z-30 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[#075B3A] shadow-[0_0_0_6px_rgb(var(--shadow-brand)/0.12)] lg:left-1/2"
          aria-hidden="true"
          style={{
            animation: 'tejays-pulse-dot 12s ease-in-out infinite',
          }}
        />

        <div className="relative">
          {/* CONTINUOUS CENTER LINE */}
          <div
            className="absolute bottom-0 left-1/2 top-0 hidden w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#075B3A]/10 via-[#075B3A]/45 to-[#075B3A]/10 lg:block"
            aria-hidden="true"
          />

          <div className="space-y-10 lg:space-y-0">
            {stageNodes.map((node, i) => {
              const even = i % 2 === 0

              return (
                <div
                  key={node.title}
                  className="relative grid min-h-[230px] grid-cols-1 items-center lg:grid-cols-2"
                  data-aos={even ? 'fade-right' : 'fade-left'}
                  data-aos-delay={i * 80}
                >
                  {/* MOBILE LINE */}
                  <div
                    className="absolute bottom-[-40px] left-[18px] top-0 w-px bg-brand/20 lg:hidden"
                    aria-hidden="true"
                  />

                  {/* CENTER DOT */}
                  <div
                    className="absolute left-1/2 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
                    aria-hidden="true"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-brand bg-surface shadow-[0_0_0_6px_rgb(var(--shadow-brand)/0.08)]">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#72B943]" />
                    </div>
                  </div>

                  {/* LEFT SIDE */}
                  {even && (
                    <div className="pl-10 lg:pl-0 lg:pr-24">
                      <div className="group relative ml-4 w-full max-w-xl overflow-hidden rounded-[26px] border border-line/10 bg-surface p-7 shadow-[0_12px_40px_rgb(var(--shadow-ink)/0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-brand/30 hover:shadow-[0_28px_65px_rgb(var(--shadow-brand)/0.14)] lg:ml-auto">

                        {/* Top Accent */}
                        <div className="absolute left-0 top-0 h-1 w-20 bg-gradient-to-r from-[#075B3A] to-[#72B943] transition-all duration-500 group-hover:w-32" />

                        <div className="flex items-center gap-4">
                          <span className="font-display text-3xl font-extrabold leading-none tracking-[-0.04em] text-brand/35 sm:text-4xl">
                            {node.index}
                          </span>

                          <span className="rounded-full border border-brand/25 bg-[#075B3A]/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand sm:text-[11px]">
                            {node.tag}
                          </span>

                          <FiArrowRight className="ml-auto text-lg text-brand transition-transform duration-300 group-hover:translate-x-2" />
                        </div>

                        <h3 className="mt-5 font-display text-2xl font-bold leading-tight tracking-[-0.035em] text-ink sm:text-3xl">
                          {node.title}
                        </h3>

                        <p className="mt-3 text-base leading-7 text-inkMuted sm:text-[17px] sm:leading-8">
                          {node.desc}
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                          <span className="h-px w-10 bg-brand/20 transition-all duration-500 group-hover:w-16 group-hover:bg-[#72B943]" />
                          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-ink/30">
                            TEJAYS AGRI
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* RIGHT SIDE */}
                  {!even && (
                    <div className="col-start-1 pl-10 lg:col-start-2 lg:pl-24">
                      <div className="group relative w-full max-w-xl overflow-hidden rounded-[26px] border border-line/10 bg-surface p-7 shadow-[0_12px_40px_rgb(var(--shadow-ink)/0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-brand/30 hover:shadow-[0_28px_65px_rgb(var(--shadow-brand)/0.14)]">

                        {/* Top Accent */}
                        <div className="absolute right-0 top-0 h-1 w-20 bg-gradient-to-l from-[#075B3A] to-[#72B943] transition-all duration-500 group-hover:w-32" />

                        <div className="flex items-center gap-4">
                          <span className="font-display text-3xl font-extrabold leading-none tracking-[-0.04em] text-brand/35 sm:text-4xl">
                            {node.index}
                          </span>

                          <span className="rounded-full border border-brand/25 bg-[#075B3A]/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand sm:text-[11px]">
                            {node.tag}
                          </span>

                          <FiArrowRight className="ml-auto text-lg text-brand transition-transform duration-300 group-hover:translate-x-2" />
                        </div>

                        <h3 className="mt-5 font-display text-2xl font-bold leading-tight tracking-[-0.035em] text-ink sm:text-3xl">
                          {node.title}
                        </h3>

                        <p className="mt-3 text-base leading-7 text-inkMuted sm:text-[17px] sm:leading-8">
                          {node.desc}
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                          <span className="h-px w-10 bg-brand/20 transition-all duration-500 group-hover:w-16 group-hover:bg-[#72B943]" />
                          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-ink/30">
                            TEJAYS AGRI
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {showLoop && (
        <div
          data-aos="fade-up"
          className="mt-12 rounded-3xl border border-line/10 bg-tint/60 p-6 sm:p-9"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand">
              Circular by design
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-inkSoft">
              Manure → Energy → Agriculture → Feed
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-4">
            {circularLoop.map((step, i) => (
              <div key={step} className="flex items-center gap-2.5 sm:gap-4">
                <span className="rounded-full border border-brand/20 bg-surface px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:border-brand/60 hover:text-brand">
                  {step}
                </span>
                {i < circularLoop.length - 1 && (
                  <span className="flex items-center text-[#72B943]">
                    <FiArrowRight className="relative" />
                    <FiArrowRight
                      className="relative -ml-2.5 opacity-40"
                      style={{
                        animation: 'tejays-flow-arrow 2.2s ease-in-out infinite',
                        animationDelay: `${i * 180}ms`
                      }}
                    />
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-inkMuted sm:text-sm">
            Manure feeds anaerobic digestion. Biogas becomes energy. Digestate
            returns as organic fertilizer to agriculture — closing the loop
            that begins with feed and sustains the herd. Sustainability
            systems are proposed for the integrated campus.
          </p>
        </div>
      )}
    </div>
  )
}