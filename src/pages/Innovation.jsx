import {
  FiDroplet,
  FiCrosshair,
  FiHeart,
  FiBox,
  FiCpu,
  FiCamera,
  FiSettings,
  FiFeather,
  FiAward,
  FiTarget,
  FiArrowRight
} from 'react-icons/fi'

import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import PremiumCard from '../components/PremiumCard'

const innovationAreas = [
  { icon: FiDroplet, title: 'Dairy Science', desc: 'Milk quality, processing and product chemistry.' },
  { icon: FiCrosshair, title: 'Animal Genetics', desc: 'Data-driven herd improvement research.' },
  { icon: FiHeart, title: 'Nutrition', desc: 'Protein, whey and functional nutrition R&D.' },
  { icon: FiBox, title: 'Feed Science', desc: 'TMR and silage formulation research.' },
  { icon: FiCpu, title: 'Artificial Intelligence', desc: 'Models for health, yield and operations.' },
  { icon: FiCamera, title: 'Computer Vision', desc: 'Vision systems for welfare and behaviour.' },
  { icon: FiSettings, title: 'Automation', desc: 'Robotics for feeding, milking and logistics.' },
  { icon: FiFeather, title: 'Sustainability', desc: 'Circular energy and water systems research.' },
  { icon: FiAward, title: 'Food Technology', desc: 'Dairy category and process innovation.' },
  { icon: FiTarget, title: 'Protein Technology', desc: 'Future ingredient and protein platforms.' }
]

const pipeline = [
  { phase: 'Discover', desc: 'Field data, sensor streams and science questions.' },
  { phase: 'Develop', desc: 'Pilots, trials and prototype systems.' },
  { phase: 'Scale', desc: 'Production-ready systems for the campus.' }
]

export default function Innovation() {
  usePageMeta(
    'Innovation & R&D — TEJAYS AGRI',
    'TEJAYS AGRI innovation — dairy science, genetics, nutrition, feed science, AI, computer vision, automation and protein technology, with a future Innovation Centre.'
  )

  return (
    <>
      <PageHero
        variant="full"
        image="/images/Innovation_hero_2.jpg"
        imageAlt="TEJAYS AGRI innovation and research development in dairy, food and protein science"
        eyebrow="Tejays Agri / Innovation & R&D"
        title={
          <>
            R&D with a
            <br />
            <span className="text-[#72B943]">production mindset.</span>
          </>
        }
        description="Innovation is planned across dairy science, food technology and protein science — always connected to real production, not isolated labs."
        primary={{
          label: 'Technology',
          to: '/technology'
        }}
        secondary={{
          label: 'Nutrition & Protein',
          to: '/nutrition'
        }}
        meta={[
          'R&D by design',
          'Future / planned initiatives',
          'Innovation Centre — future concept'
        ]}
      />


      {/* ─────────────────────────────────────────────
    RESEARCH THEMES
───────────────────────────────────────────── */}
      <section className="bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">

          <SectionHeading
            eyebrow="Research Themes"
            title="Ten areas of planned research."
            description="Each research theme is chosen for one reason — it makes the ecosystem measurably better."
          />

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-3 xl:grid-cols-5">
            {innovationAreas.map((a, i) => (
              <PremiumCard
                key={a.title}
                icon={a.icon}
                title={a.title}
                description={a.desc}
                aosDelay={i * 40}
              />
            ))}
          </div>

          {/* Research visual */}
          <div
            data-aos="fade-up"
            data-aos-delay="180"
            className="relative mt-10 overflow-hidden rounded-3xl border border-line/10 bg-surface sm:mt-14"
          >
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

              <div className="relative min-h-[260px] overflow-hidden sm:min-h-[340px] lg:min-h-[400px]">
                <img
                  src={`${import.meta.env.BASE_URL}images/Innovation_research.jpg`}
                  alt="TEJAYS AGRI dairy research and food technology"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand sm:text-[11px]">
                  Research in context
                </p>

                <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  Science connected to the real farm.
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-inkMuted sm:text-base">
                  Research is planned as part of the operating ecosystem — connecting
                  dairy science, animal performance, food technology and protein
                  innovation with practical production outcomes.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────
    INNOVATION CENTRE
───────────────────────────────────────────── */}
      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">

          <div className="overflow-hidden rounded-3xl bg-[#07100D] text-[#EDF7F2]">

            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

              {/* Content */}
              <div className="order-2 flex flex-col justify-center p-6 sm:p-8 lg:order-1 lg:p-12 xl:p-14">

                <p
                  data-aos="fade-up"
                  className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#72B943] sm:text-[11px]"
                >
                  Future · Concept
                </p>

                <h2
                  data-aos="fade-up"
                  data-aos-delay="60"
                  className="mt-3 max-w-2xl font-display text-2xl font-extrabold leading-[1.08] tracking-tight sm:text-3xl lg:text-[42px]"
                >
                  TEJAYS AGRI Innovation Centre.
                </h2>

                <p
                  data-aos="fade-up"
                  data-aos-delay="120"
                  className="mt-5 max-w-2xl text-sm leading-relaxed text-[#A9C4B8] sm:mt-6 sm:text-base"
                >
                  A future concept for an on-campus centre where dairy science,
                  animal genetics, food technology and protein science work side by
                  side with production — a place where research is never far from
                  the cow.
                </p>

                <div
                  data-aos="fade-up"
                  data-aos-delay="180"
                  className="mt-6 flex flex-wrap gap-2 sm:mt-8"
                >
                  {[
                    'Dairy pilot plant',
                    'Nutrition lab',
                    'Animal science',
                    'Food innovation',
                    'Agri-tech'
                  ].map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-[#C9DED5] transition-colors duration-200 hover:border-[#72B943]/50 hover:text-[#72B943] sm:px-4 sm:py-2 sm:text-[11px]"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <p
                  data-aos="fade-up"
                  className="mt-6 border-t border-white/10 pt-5 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-[#78958A] sm:mt-8 sm:pt-6 sm:text-xs sm:tracking-[0.16em]"
                >
                  Innovation Centre — a future / planned concept, not yet established
                </p>
              </div>

              {/* Image */}
              <div
                data-aos="fade-left"
                className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-[520px]"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/Innovation_Centre_1.jpg`}
                  alt="Future TEJAYS AGRI innovation centre concept"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07100D]/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#07100D]/20 lg:via-transparent lg:to-transparent" />
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────
    R&D PIPELINE
───────────────────────────────────────────── */}
      <section className="border-t border-line/10 bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">

          <SectionHeading
            eyebrow="R&D Pipeline"
            title="From discovery to scale."
            description="A planned pipeline that keeps research grounded in production reality."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3 sm:mt-12 sm:gap-5">
            {pipeline.map((p, i) => (
              <div
                key={p.phase}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="group relative rounded-2xl border border-line/10 bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_24px_48px_rgb(var(--shadow-brand)/0.1)] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-extrabold tracking-[0.2em] text-[#72B943] sm:text-sm">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {i < pipeline.length - 1 && (
                    <FiArrowRight className="hidden text-brand md:block" />
                  )}
                </div>

                <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-ink sm:mt-4 sm:text-xl">
                  {p.phase}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-inkMuted sm:text-sm">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      <CTASection
        eyebrow="Innovation"
        title={
          <>
            The future of dairy is
            <br />
            <span className="text-[#BDE89A]">researched today.</span>
          </>
        }
        description="Partner with TEJAYS AGRI on the technology and science of tomorrow's dairy."
        primary={{ label: 'Partner With Us', to: '/business' }}
        secondary={{ label: 'Contact TEJAYS AGRI', to: '/contact' }}
        note="Innovation initiatives are future / planned unless explicitly marked operational"
      />
    </>
  )
}