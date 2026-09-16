import {
  FiLayers,
  FiArchive,
  FiPackage,
  FiGlobe,
  FiCloud,
  FiDroplet,
  FiSend,
  FiSettings,
  FiTrendingUp,
  FiShield,
  FiArrowRight
} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import FlowChain from '../components/FlowChain'

const capabilities = [
  {
    icon: FiLayers,
    title: 'Fodder cultivation',
    desc: 'High-yield, consistent fodder supply.'
  },
  {
    icon: FiArchive,
    title: 'Silage',
    desc: 'Fermented feed for year-round nutrition.'
  },
  {
    icon: FiPackage,
    title: 'TMR',
    desc: 'Total mixed rations engineered per group.'
  },
  {
    icon: FiGlobe,
    title: 'Soil monitoring',
    desc: 'Nutrient and moisture analytics.'
  },
  {
    icon: FiCloud,
    title: 'Weather stations',
    desc: 'Field-level weather intelligence.'
  },
  {
    icon: FiDroplet,
    title: 'Precision irrigation',
    desc: 'Water applied where it matters.'
  },
  {
    icon: FiSend,
    title: 'Drones',
    desc: 'Crop health and field inspection.'
  },
  {
    icon: FiSettings,
    title: 'Farm machinery',
    desc: 'Modern mechanised operations.'
  },
  {
    icon: FiTrendingUp,
    title: 'Crop monitoring',
    desc: 'Growth stage and yield forecasting.'
  },
  {
    icon: FiShield,
    title: 'Feed security',
    desc: 'Buffer stocks against season risk.'
  }
]

const livingLoop = [
  'Soil',
  'Crop',
  'Feed',
  'Cow',
  'Milk',
  'Nutrients',
  'Soil'
]

export default function Agriculture() {
  usePageMeta(
    'Precision Agriculture — TEJAYS AGRI',
    'TEJAYS AGRI precision agriculture — fodder, silage, TMR, soil monitoring, weather stations, precision irrigation, drones and crop monitoring securing the feed chain.'
  )

  return (
    <>
      {/* HERO */}

      <PageHero
        variant="full"
        image="/images/ecosystem/feed.png"
        imageAlt="Whey recovery and protein nutrition concept"
        eyebrow="Tejays Agri / Nutrition & Whey"
        title={
          <>
            Precision agriculture to
            <br />
            <span className="text-[#72B943]">secure the feed chain.</span>
          </>
        }
        description="Feed is the quiet foundation of the entire dairy. Soil, water and crop science keep fodder quality ahead of demand — closing the loop with every nutrient."
        primary={{ label: 'The Circular System', to: '/sustainability' }}
        secondary={{ label: 'Genetics & Herd', to: '/contact' }}
      />


      {/* LIVING LOOP */}
      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="The Living Loop"
            title="Soil to feed to cow — and back."
            description="A circular nutrient system where every output becomes the next input."
          />

          <div
            data-aos="fade-up"
            className="mt-10 overflow-hidden rounded-3xl border border-line/10 bg-pageBg p-4 sm:mt-12 sm:p-6 lg:p-10"
          >
            <FlowChain
              steps={livingLoop}
              loop
              title="Nutrient cycle"
              subtitle="Planned · proposed for the integrated campus"
              accent="lime"
            />
          </div>
        </div>
      </section>

      {/* CROP & FIELD SYSTEMS */}
      <section className="border-t border-line/10 bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Crop & Field Systems"
            title="Ten capabilities of the field system."
            description="A planned precision-agriculture toolkit that turns land into a dependable production asset."
          />

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-3 lg:gap-5 xl:grid-cols-5">
            {capabilities.map((c, i) => (
              <div
                key={c.title}
                data-aos="fade-up"
                data-aos-delay={i * 40}
                className="group relative overflow-hidden rounded-2xl border border-line/10 bg-surface p-4 shadow-card transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.015] hover:border-brand/30 hover:bg-tint/30 hover:shadow-[0_20px_45px_rgb(var(--shadow-brand)/0.10)] sm:p-5 lg:p-6"
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-tint text-brand transition-all duration-500 group-hover:rotate-[-5deg] group-hover:bg-[#075B3A] group-hover:text-white group-hover:shadow-md sm:h-10 sm:w-10">
                    <c.icon className="text-base sm:text-lg" />
                  </span>

                  {/* Title */}
                  <h3 className="mt-4 font-display text-[11px] font-bold uppercase leading-tight tracking-[0.08em] text-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-xs lg:text-sm">
                    {c.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 text-[10px] leading-4 text-inkMuted transition-colors duration-300 sm:text-[11px] sm:leading-5 lg:text-xs">
                    {c.desc}
                  </p>
                </div>

                {/* Bottom line */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand transition-all duration-500 group-hover:w-full"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEED & NUTRITION */}
      <section className="border-t border-line/10 bg-white text-ink">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

            <div>
              <p
                data-aos="fade-up"
                className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-brand sm:text-[11px] sm:tracking-[0.3em]"
              >
                <span className="h-px w-8 bg-current" aria-hidden="true" />
                Feed & Nutrition
              </p>

              <h2
                data-aos="fade-up"
                data-aos-delay="60"
                className="font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-[40px]"
              >
                Feed is the first farmer
                <br />
                <span className="text-brand">of every animal.</span>
              </h2>

              <p
                data-aos="fade-up"
                data-aos-delay="120"
                className="mt-5 max-w-xl text-sm leading-relaxed text-inkMuted sm:mt-6 sm:text-base"
              >
                Silage, TMR and matched nutrition turn high-quality fodder into
                consistent, measurable milk — and manure returns as fertilizer
                to grow the next crop.
              </p>

              <Link
                to="/nutrition"
                data-aos="fade-up"
                data-aos-delay="180"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#72B943] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#07100D] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#075B3A] hover:text-white hover:shadow-[0_12px_28px_rgba(114,185,67,0.18)] sm:mt-8 sm:px-6 sm:py-3.5 sm:text-[11px] sm:tracking-[0.18em]"
              >
                From Farm to Protein
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div data-aos="fade-left" data-aos-delay="120">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  'Silage bunks',
                  'TMR feeding',
                  'Soil analytics',
                  'Weather stations'
                ].map((t) => (
                  <div
                    key={t}
                    className="group relative overflow-hidden rounded-2xl border border-line/10 bg-[#F6F8F5] p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white hover:shadow-[0_16px_35px_rgba(7,91,58,0.10)] sm:p-6"
                  >
                    <p className="text-[11px] font-bold uppercase leading-tight tracking-[0.1em] text-ink transition-transform duration-300 group-hover:-translate-y-px sm:text-sm sm:tracking-[0.14em]">
                      {t}
                    </p>

                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-inkMuted sm:text-[10px] sm:tracking-[0.12em]">
                      Planned
                    </p>

                    <div
                      className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand transition-all duration-500 group-hover:w-full"
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        eyebrow="Precision Agriculture"
        title={
          <>
            Feed the soil.
            <br />
            <span className="text-[#BDE89A]">It feeds the herd.</span>
          </>
        }
        description="Explore the irrigation, energy and water systems that make the loop work."
        primary={{ label: 'Sustainability', to: '/sustainability' }}
        secondary={{ label: 'Contact TEJAYS AGRI', to: '/contact' }}
        note="Agriculture programme proposed for the integrated campus"
      />
    </>
  )
}
