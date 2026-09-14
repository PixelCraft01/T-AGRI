import { Link } from 'react-router-dom'
import {
  FiCpu,
  FiAward,
  FiActivity,
  FiRepeat,
  FiArrowRight,
  FiArrowUpRight,
  FiUsers,
  FiBox,
  FiDroplet,
  FiSettings,
  FiZap,
  FiRefreshCcw,
  FiBarChart2,
  FiTruck
} from 'react-icons/fi'

import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import StatStrip from '../components/StatStrip'
import EcosystemChain from '../components/EcosystemChain'
import SplitSection from '../components/SplitSection'
import FeatureList from '../components/FeatureList'

const heroStats = [
  { value: '2,000', label: 'Phase-I milking cows', note: 'Planned design capacity' },
  { value: '5,000+', label: 'Herd scalability', note: 'Long-term future' },
  { value: '09', label: 'Value-chain stages', note: 'Genetics to nutrition' },
  { value: '100%', label: 'Circular intent', note: 'By design' }
]

const pillars = [
  {
    index: '01',
    title: 'Technology',
    desc: 'AI, IoT, sensors and automation woven through every stage of the dairy.',
    to: '/technology'
  },
  {
    index: '02',
    title: 'Dairy',
    desc: 'A climate-controlled dairy and processing backbone built on welfare and quality.',
    to: '/smart-dairy'
  },
  {
    index: '03',
    title: 'Nutrition',
    desc: 'Cheese, whey and protein value creation — from farm to protein.',
    to: '/nutrition'
  },
  {
    index: '04',
    title: 'Sustainability',
    desc: 'A circular ecosystem where nothing is wasted and everything returns.',
    to: '/sustainability'
  }
]

const commandDomains = [
  { icon: FiUsers, label: 'Herd' },
  { icon: FiBox, label: 'Feed' },
  { icon: FiDroplet, label: 'Milk' },
  { icon: FiSettings, label: 'Processing' },
  { icon: FiZap, label: 'Energy' },
  { icon: FiRefreshCcw, label: 'Water' },
  { icon: FiBarChart2, label: 'Inventory' },
  { icon: FiTruck, label: 'Logistics' }
]

const productTeasers = ['Milk', 'Curd', 'Greek Yogurt', 'Paneer', 'Ghee', 'Cheese']

export default function Home() {
  usePageMeta(
    'TEJAYS AGRI — Growing for the Future',
    'TEJAYS AGRI is an integrated dairy, food-processing and nutrition company building a technology-driven circular dairy ecosystem — from genetics to protein.'
  )

  return (
    <>
      <PageHero
        variant="full"
        image="/images/tejays-agri-hero1.jpg"
        imageAlt="TEJAYS AGRI integrated dairy ecosystem concept"
        eyebrow="TEJAYS AGRI · Integrated Dairy · Food · Nutrition"
        title={
          <>
            Growing for
            <br />
            the <span className="text-[#72B943]">future.</span>
          </>
        }
        description="An integrated dairy, food-processing and nutrition enterprise — engineered as one connected ecosystem, from genetics and feed to cheese, whey and premium nutrition."
        primary={{ label: 'Explore the Ecosystem', to: '/smart-dairy' }}
        secondary={{ label: 'Our Approach', to: '/about' }}
        meta={['Genetics → Nutrition', 'Circular by design', 'Technology · Dairy · Nutrition · Sustainability']}
      >
        <StatStrip items={heroStats} tone="dark" />
      </PageHero>

      {/* Positioning */}
      <section className="bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Positioning"
              title={
                <>
                  TEJAYS AGRI is not being built simply to produce milk. It is
                  being built to{' '}
                  <span className="text-brand">
                    create value across the entire dairy ecosystem.
                  </span>
                </>
              }
            />
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line/10 bg-line/10 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Link
                key={p.title}
                to={p.to}
                data-aos="fade-up"
                data-aos-delay={i * 90}
                className="group bg-surface p-8 transition-colors duration-300 hover:bg-tint"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-extrabold tracking-[0.24em] text-[#72B943]">
                    {p.index}
                  </span>
                  <FiArrowUpRight className="text-brand opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </div>
                <h3 className="mt-4 font-display text-xl font-extrabold tracking-tight text-ink">
                  {p.title}
                </h3>
                <div className="mt-4 h-px w-10 bg-brand/30 transition-all duration-300 group-hover:w-16 group-hover:bg-[#075B3A]" />
                <p className="mt-4 text-sm leading-relaxed text-inkMuted">
                  {p.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="The Ecosystem"
              title="One connected value chain."
              description="Every stage feeds the next — and every output circles back into the system."
            />
            <div
              data-aos="fade-up"
              data-aos-delay="140"
              className="lg:justify-self-end"
            >
              <Link
                to="/genetics"
                className="group inline-flex items-center gap-2 rounded-full border border-brand/25 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand transition-all duration-300 hover:bg-[#075B3A] hover:text-white"
              >
                View the full chain
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <EcosystemChain showLoop />
        </div>
      </section>

      {/* Smart dairy teaser */}
      <SplitSection
        image="/images/dery (1).jpg"
        imageAlt="TEJAYS AGRI smart dairy infrastructure concept"
        imagePosition="left"
        imageRatio="aspect-[4/5]"
        className="border-t border-line/10"
      >
        <SectionHeading
          eyebrow="Smart Dairy"
          title="Modern dairy infrastructure, not a traditional farm."
          description="Phase-I will establish a 2,000-milking-cow smart dairy (planned design capacity) — engineered for climate control, automation, welfare and data."
        />
        <FeatureList
          items={[
            { icon: FiCpu, title: 'Automated feeding', desc: 'Precision TMR delivery aligned to each animal stage.' },
            { icon: FiActivity, title: 'Health & yield monitoring', desc: 'Continuous insight from sensors and wearables.' },
            { icon: FiAward, title: 'Cow comfort & welfare', desc: 'Welfare-first design across stall, feed and rest.' },
            { icon: FiRepeat, title: 'Automated manure management', desc: 'Continuous collection feeding the circular energy loop.' }
          ]}
        />
        <Link
          to="/smart-dairy"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#075B3A] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#043D2A] hover:shadow-[0_12px_28px_rgb(var(--shadow-brand)/0.35)]"
        >
          Explore Smart Dairy
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </SplitSection>

      {/* Technology teaser */}
      <section className="border-t border-line/10 bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Technology"
              title="An AI command centre for the entire dairy."
              description="A planned technology ecosystem — sensors on the animal, cameras in the barn, one command view across the operation."
            />
            <div
              data-aos="fade-up"
              data-aos-delay="140"
              className="lg:justify-self-end"
            >
              <Link
                to="/technology"
                className="group inline-flex items-center gap-2 rounded-full border border-brand/25 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand transition-all duration-300 hover:bg-[#075B3A] hover:text-white"
              >
                Discover Technology
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="mt-14 overflow-hidden rounded-3xl border border-line/10 bg-[#07100D] text-[#EDF7F2] shadow-[0_40px_80px_rgb(var(--shadow-ink)/0.25)]"
          >
            <div className="flex flex-col gap-3 border-b border-white/10 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#72B943]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#72B943] opacity-50" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#72B943]" />
                </span>
                AI Command Centre — planned
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A9C4B8]">
                One connected view of the ecosystem
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {commandDomains.map((d, i) => (
                <div
                  key={d.label}
                  className="group flex flex-col items-start gap-3 border-b border-r border-white/[0.07] p-6 transition-colors duration-300 hover:bg-brand/20 sm:p-7"
                >
                  <span className="font-display text-[10px] font-extrabold tracking-[0.2em] text-[#72B943]/50">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <d.icon className="text-xl text-[#A9C4B8] transition-colors duration-300 group-hover:text-[#72B943]" />
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#EDF7F2]">
                    {d.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dairy foods teaser */}
      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Dairy & Foods"
                title="A modern dairy range, rooted in tradition."
                description="Everyday dairy categories built on clean milk and modern processing."
              />
              <Link
                to="/dairy-foods"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#075B3A] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#043D2A]"
              >
                View the Range
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:col-span-8">
              <div className="divide-y divide-line/10 border-t border-line/10">
                {productTeasers.map((p, i) => (
                  <div
                    key={p}
                    data-aos="fade-up"
                    data-aos-delay={i * 40}
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <div className="flex items-center gap-5">
                      <span className="font-display text-sm font-extrabold tracking-[0.2em] text-[#72B943]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display text-lg font-extrabold tracking-tight text-ink transition-colors duration-300 group-hover:text-brand sm:text-xl">
                        {p}
                      </span>
                    </div>
                    <span className="rounded-full border border-brand/20 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-brand">
                      Planned
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition teaser */}
      <section className="relative overflow-hidden bg-[#07100D] text-[#EDF7F2]">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div data-aos="fade-right">
              <p className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#E7B84B]">
                <span className="h-px w-10 bg-current" aria-hidden="true" />
                Nutrition & Whey
              </p>
              <h2 className="font-display text-3xl font-extrabold leading-[1.06] tracking-tight sm:text-4xl lg:text-[46px]">
                From farm <span className="text-[#E7B84B]">to protein.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#A9C4B8] sm:text-lg">
                Every litre of milk should work harder. Cheese leads to whey,
                whey leads to protein, and protein leads to premium nutrition —
                a scientific pipeline, not a by-product.
              </p>
              <Link
                to="/nutrition"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-[#E7B84B]/40 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#E7B84B] transition-all duration-300 hover:bg-[#E7B84B] hover:text-[#07100D]"
              >
                Explore Nutrition
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div data-aos="fade-left" data-aos-delay="120">
              <div className="space-y-3">
                {['Cheese Production', 'Whey Recovery', 'Protein Ingredients', 'Nutrition'].map((s, i) => (
                  <div
                    key={s}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-[#E7B84B]/40"
                  >
                    <span className="font-display text-sm font-extrabold tracking-[0.2em] text-[#E7B84B]/70">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#EDF7F2]">
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability teaser */}
      <section className="border-t border-line/10 bg-[#043D2A] text-[#EDF7F2]">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#72B943]">
              Sustainability · Circular Dairy Ecosystem
            </p>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {['Manure', 'Biogas', 'Energy', 'Fertilizer', 'Agriculture', 'Feed'].map((s, i, arr) => (
                <span key={s} className="flex items-center gap-2.5 sm:gap-3">
                  <span className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#EDF7F2]">
                    {s}
                  </span>
                  {i < arr.length - 1 && (
                    <FiArrowRight className="text-[#72B943] hidden sm:block" />
                  )}
                </span>
              ))}
            </div>
            <Link
              to="/sustainability"
              className="group flex shrink-0 items-center gap-2 rounded-full bg-[#72B943] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#07100D] transition-all duration-300 hover:bg-surface"
            >
              The Circular System
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Tejays Agri"
        title={
          <>
            Building the future of dairy,{' '}
            <span className="text-[#BDE89A]">together.</span>
          </>
        }
        description="Growing for the future is a partnership. Whether you are a farmer, a processor, a technology partner, an investor or a future customer of TEJAYS AGRI — let's begin the conversation."
        primary={{ label: 'Contact TEJAYS AGRI', to: '/contact' }}
        secondary={{ label: 'View the Campus Mission', to: '/campus' }}
        note="Planned · Proposed · Future — this website communicates design intent unless explicitly marked operational."
      />
    </>
  )
}