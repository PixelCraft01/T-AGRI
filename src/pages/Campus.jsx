import {
  FiMapPin,
  FiHome,
  FiPackage,
  FiFeather,
  FiLayers,
  FiArrowRight
} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import StatStrip from '../components/StatStrip'
import { assetPath } from '../utils/assetPath'

const zones = [
  { icon: FiHome, title: 'Core Dairy', desc: 'Climate-controlled barns and milking parlours.' },
  { icon: FiPackage, title: 'Processing & Foods', desc: 'Milk processing and dairy product manufacture.' },
  { icon: FiFeather, title: 'Agriculture & Green', desc: 'Fodder, crops, water and renewable energy.' },
  { icon: FiLayers, title: 'Innovation & Support', desc: 'R&D, nutrition and campus operations.' }
]

const principles = [
  { title: 'Circular', desc: 'Energy, water and nutrients loop within the campus.' },
  { title: 'Technology-first', desc: 'Data and automation designed into every zone.' },
  { title: 'Future-ready', desc: 'Capacity planned in phases, from Phase-I onwards.' },
  { title: 'Community', desc: 'Built around partner farmers and local value.' },
  { title: 'Quality', desc: 'Hygiene, welfare and standards at the core.' }
]

export default function Campus() {
  usePageMeta(
    'Campus — TEJAYS AGRI',
    'The TEJAYS AGRI integrated campus — a masterplan designed end-to-end, from core dairy and processing to agriculture, water, renewable energy and innovation.'
  )

  return (
    <>
      <PageHero
        variant="split"
        image="/images/hero-campus.svg"
        imageAlt="TEJAYS AGRI campus masterplan"
        eyebrow="Tejays Agri / Campus"
        title={
          <>
            One campus,
            <br />
            <span className="text-brand">the whole ecosystem.</span>
          </>
        }
        description="The TEJAYS AGRI masterplan brings genetics, feed, dairy, processing and nutrition together on one site — designed end-to-end and phased for the future."
        primary={{ label: 'See the Ecosystem', to: '/about' }}
        secondary={{ label: 'Contact TEJAYS AGRI', to: '/contact' }}
      />

      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Masterplan Zones"
            title="Four zones, one operating system."
            description="Each zone is designed to feed the next — connecting agriculture, dairy, processing and innovation."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {zones.map((z, i) => (
              <div
                key={z.title}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                className="group rounded-2xl border border-line/10 bg-pageBg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-surface hover:shadow-card"
              >
                <z.icon className="text-2xl text-brand transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-ink">
                  {z.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-inkMuted">
                  {z.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line/10 bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <div className="overflow-hidden rounded-[32px] bg-[#07100D]">
            <div className="relative">
              <img
                src={assetPath('/images/hero-campus.svg')}
                alt="TEJAYS AGRI campus masterplan overview"
                loading="lazy"
                className="w-full"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07100D]/60 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#72B943]">
                  Campus Masterplan
                </p>
                <p className="mt-2 max-w-xl font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                  Designed end-to-end. Phased for the future.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Design Principles"
                title="What shapes every square metre."
                description="Five principles guide the masterplan — from the first barn to the last innovation lab."
              />
              <p className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
                <FiMapPin className="text-base" />
                Integrated campus — planned / proposed
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {principles.map((p, i) => (
                  <div
                    key={p.title}
                    data-aos="fade-up"
                    data-aos-delay={i * 60}
                    className="rounded-2xl border border-line/10 bg-surface p-6 transition-colors duration-300 hover:border-brand/30"
                  >
                    <span className="font-display text-xs font-extrabold tracking-[0.2em] text-[#72B943]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-inkMuted">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Phased Roadmap"
                title="Phase-I first. Whole-system vision."
                description="The campus is planned to come alive in phases — with a Phase-I 2,000-cow smart dairy as the anchor, and the full ecosystem unfolding around it."
              />
              <Link
                to="/smart-dairy"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#075B3A] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#043D2A]"
              >
                Start with Smart Dairy
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <StatStrip
                columns={2}
                items={[
                  { value: '2,000', label: 'Phase-I herd', note: 'Planned anchor facility' },
                  { value: '4', label: 'Masterplan zones', note: 'Integrated and connected' },
                  { value: '09', label: 'Ecosystem stages', note: 'Genetics to nutrition' },
                  { value: 'Future', label: 'Innovation Centre', note: 'Concept stage' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Campus"
        title={
          <>
            Come see what is
            <br />
            <span className="text-[#BDE89A]">being designed.</span>
          </>
        }
        description="The masterplan is the promise — the ecosystem is the execution."
        primary={{ label: 'Talk With Us', to: '/contact' }}
        secondary={{ label: 'Explore Innovation', to: '/innovation' }}
        note="Campus facilities planned / proposed for the integrated campus"
      />
    </>
  )
}