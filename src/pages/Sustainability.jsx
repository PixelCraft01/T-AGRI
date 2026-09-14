import {
  FiZap,
  FiFeather,
  FiSun,
  FiWind,
  FiBatteryCharging,
  FiCloudDrizzle,
  FiDroplet,
  FiRefreshCcw,
  FiArrowRight,
  FiArrowUpRight
} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import FlowChain from '../components/FlowChain'

const energyLoop = ['Manure', 'Anaerobic Digestion', 'Biogas', 'Energy']
const soilLoop = ['Digestate', 'Organic Fertilizer', 'Agriculture', 'Feed']

const initiatives = [
  { icon: FiSun, title: 'Solar energy', desc: 'Distributed solar across campus rooftops and open land.' },
  { icon: FiZap, title: 'Biogas', desc: 'Methane from manure converted to clean energy.' },
  { icon: FiWind, title: 'Energy management', desc: 'Constant monitoring of generation and demand.' },
  { icon: FiBatteryCharging, title: 'Battery storage', desc: 'Potential storage to smooth the energy curve.' },
  { icon: FiCloudDrizzle, title: 'Water harvesting', desc: 'Capture and store seasonal rainfall.' },
  { icon: FiDroplet, title: 'ETP / STP', desc: 'Effluent treatment with responsible discharge.' },
  { icon: FiRefreshCcw, title: 'Water recycling', desc: 'Reuse across washing, crops and cooling.' },
  { icon: FiArrowUpRight, title: 'Precision irrigation', desc: 'Water applied by data, not guesswork.' }
]

export default function Sustainability() {
  usePageMeta(
    'Sustainability — TEJAYS AGRI',
    'The TEJAYS AGRI circular dairy ecosystem — manure to biogas to energy, digestate to fertilizer to agriculture, with solar, water harvesting and ETP/STP systems.'
  )

  return (
    <>
      <PageHero
        variant="dark"
        eyebrow="Tejays Agri / Sustainability"
        title={
          <>
            The TEJAYS AGRI
            <br />
            <span className="text-[#72B943]">circular dairy ecosystem.</span>
          </>
        }
        description="Manure becomes energy. Digestate becomes fertilizer. Water is harvested and recycled. The ecosystem is designed so what leaves one stage becomes the input of the next."
        primary={{ label: 'Precision Agriculture', to: '/agriculture' }}
        secondary={{ label: 'Talk to TEJAYS AGRI', to: '/contact' }}
        meta={['Circular economy', 'Energy · Water · Soil', 'Proposed / planned systems']}
      />

      <section className="bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Two Loops, One System"
            title="Energy out. Soil back."
            description="The circular dairy runs on two connected loops — one that produces energy, and one that restores the land."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div
              data-aos="fade-up"
              className="rounded-3xl border border-brand/20 bg-surface p-7 sm:p-9"
            >
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.26em] text-brand">
                <FiZap className="text-sm" />
                Energy loop
              </p>
              <div className="mt-6">
                <FlowChain steps={energyLoop} accent="lime" />
              </div>
              <p className="mt-6 text-sm leading-relaxed text-inkMuted">
                Anaerobic digestion converts manure into biogas — a feedstock
                for on-site energy across the campus. Proposed system.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="120"
              className="rounded-3xl border border-brand/20 bg-surface p-7 sm:p-9"
            >
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.26em] text-brand">
                <FiFeather className="text-sm" />
                Soil loop
              </p>
              <div className="mt-6">
                <FlowChain steps={soilLoop} accent="lime" />
              </div>
              <p className="mt-6 text-sm leading-relaxed text-inkMuted">
                Digestate returns to the fields as organic fertilizer — growing
                the very feed that sustains the herd. Proposed system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Campus Systems"
            title="Sustainability as infrastructure."
            description="Eight proposed systems that turn environmental responsibility into operational strength."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {initiatives.map((s, i) => (
              <div
                key={s.title}
                data-aos="fade-up"
                data-aos-delay={i * 50}
                className="group rounded-2xl border border-line/10 bg-pageBg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-surface hover:shadow-card"
              >
                <s.icon className="text-2xl text-brand transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-4 text-sm font-bold uppercase tracking-[0.1em] text-ink">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-inkMuted">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <p
            data-aos="fade-up"
            className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-inkSoft"
          >
            Sustainability systems proposed / planned for the integrated campus
          </p>
        </div>
      </section>

      <section className="border-t border-line/10 bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Why Circular"
                title="Waste is a design flaw."
                description="In a linear dairy, manure is a problem to manage. In a circular dairy, it is the raw material for energy, fertilizer and resilience."
              />
              <Link
                to="/campus"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#075B3A] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#043D2A]"
              >
                See the Campus
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-4">
                {[
                  { k: 'Manure', v: 'Becomes the input for anaerobic digestion.' },
                  { k: 'Biogas', v: 'Generates energy for heating, cooling and processing.' },
                  { k: 'Digestate', v: 'Returns as organic fertilizer to the fields.' },
                  { k: 'Agriculture', v: 'Grows the fodder that feeds the herd.' },
                  { k: 'The loop', v: 'Closes — with less waste, less cost and a smaller footprint.' }
                ].map((row, i) => (
                  <div
                    key={row.k}
                    data-aos="fade-up"
                    data-aos-delay={i * 60}
                    className="flex items-start gap-5 rounded-2xl border border-line/10 bg-surface p-6 transition-colors duration-300 hover:border-brand/30"
                  >
                    <span className="font-display text-sm font-extrabold tracking-[0.2em] text-[#72B943]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-ink">
                        {row.k}
                      </h3>
                      <p className="mt-1 text-sm text-inkMuted">{row.v}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Sustainability"
        title={
          <>
            A dairy that gives back
            <br />
            <span className="text-[#BDE89A]">more than it takes.</span>
          </>
        }
        description="See how every resource is designed to return to the system."
        primary={{ label: 'Innovation & R&D', to: '/innovation' }}
        secondary={{ label: 'Contact TEJAYS AGRI', to: '/contact' }}
        note="Circular systems are proposed for the integrated campus"
      />
    </>
  )
}