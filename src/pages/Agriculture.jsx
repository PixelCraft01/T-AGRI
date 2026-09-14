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
  { icon: FiLayers, title: 'Fodder cultivation', desc: 'High-yield, consistent fodder supply.' },
  { icon: FiArchive, title: 'Silage', desc: 'Fermented feed for year-round nutrition.' },
  { icon: FiPackage, title: 'TMR', desc: 'Total mixed rations engineered per group.' },
  { icon: FiGlobe, title: 'Soil monitoring', desc: 'Nutrient and moisture analytics.' },
  { icon: FiCloud, title: 'Weather stations', desc: 'Field-level weather intelligence.' },
  { icon: FiDroplet, title: 'Precision irrigation', desc: 'Water applied where it matters.' },
  { icon: FiSend, title: 'Drones', desc: 'Crop health and field inspection.' },
  { icon: FiSettings, title: 'Farm machinery', desc: 'Modern mechanised operations.' },
  { icon: FiTrendingUp, title: 'Crop monitoring', desc: 'Growth stage and yield forecasting.' },
  { icon: FiShield, title: 'Feed security', desc: 'Buffer stocks against season risk.' }
]

const livingLoop = ['Soil', 'Crop', 'Feed', 'Cow', 'Milk', 'Nutrients', 'Soil']

export default function Agriculture() {
  usePageMeta(
    'Precision Agriculture — TEJAYS AGRI',
    'TEJAYS AGRI precision agriculture — fodder, silage, TMR, soil monitoring, weather stations, precision irrigation, drones and crop monitoring securing the feed chain.'
  )

  return (
    <>
      <PageHero
        variant="split"
        image="/images/ecosystem/feed.png"
        imageAlt="Precision feed and crop concept for TEJAYS AGRI"
        eyebrow="Tejays Agri / Precision Agriculture"
        title={
          <>
            Precision agriculture to
            <br />
            <span className="text-brand">secure the feed chain.</span>
          </>
        }
        description="Feed is the quiet foundation of the entire dairy. Soil, water and crop science keep fodder quality ahead of demand — closing the loop with every nutrient."
        primary={{ label: 'The Circular System', to: '/sustainability' }}
        secondary={{ label: 'Genetics & Herd', to: '/genetics' }}
      />

      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="The Living Loop"
            title="Soil to feed to cow — and back."
            description="A circular nutrient system where every output becomes the next input."
          />
          <div
            data-aos="fade-up"
            className="mt-10 rounded-3xl border border-line/10 bg-pageBg p-6 sm:p-10"
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

      <section className="border-t border-line/10 bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Crop & Field Systems"
            title="Ten capabilities of the field system."
            description="A planned precision-agriculture toolkit that turns land into a dependable production asset."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {capabilities.map((c, i) => (
              <div
                key={c.title}
                data-aos="fade-up"
                data-aos-delay={i * 40}
                className="group rounded-2xl border border-line/10 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_20px_44px_rgb(var(--shadow-brand)/0.1)]"
              >
                <c.icon className="text-2xl text-brand transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-4 text-sm font-bold uppercase tracking-[0.1em] text-ink">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-inkMuted">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line/10 bg-[#043D2A] text-[#EDF7F2]">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p
                data-aos="fade-up"
                className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#72B943]"
              >
                <span className="h-px w-8 bg-current" aria-hidden="true" />
                Feed & Nutrition
              </p>
              <h2
                data-aos="fade-up"
                data-aos-delay="60"
                className="font-display text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[40px]"
              >
                Feed is the first farmer
                <br />
                <span className="text-[#72B943]">of every animal.</span>
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="120"
                className="mt-6 max-w-xl text-base leading-relaxed text-[#A9C4B8]"
              >
                Silage, TMR and matched nutrition turn high-quality fodder into
                consistent, measurable milk — and manure returns as fertilizer
                to grow the next crop.
              </p>
              <Link
                to="/nutrition"
                data-aos="fade-up"
                data-aos-delay="180"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#72B943] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#07100D] transition-all duration-300 hover:bg-surface"
              >
                From Farm to Protein
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div data-aos="fade-left" data-aos-delay="120">
              <div className="grid grid-cols-2 gap-3">
                {['Silage bunks', 'TMR feeding', 'Soil analytics', 'Weather stations'].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center transition-colors duration-300 hover:border-[#72B943]/40"
                  >
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#EDF7F2]">
                      {t}
                    </p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#A9C4B8]">
                      Planned
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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