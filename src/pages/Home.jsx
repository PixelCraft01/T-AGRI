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

/* =========================================================
   HERO STATS
========================================================= */

const heroStats = [
  {
    value: '2,000',
    label: 'Phase-I milking cows',
    note: 'Planned design capacity'
  },
  {
    value: '5,000+',
    label: 'Herd scalability',
    note: 'Long-term future'
  },
  {
    value: '09',
    label: 'Value-chain stages',
    note: 'Genetics to nutrition'
  },
  {
    value: '100%',
    label: 'Circular intent',
    note: 'By design'
  }
]

/* =========================================================
   POSITIONING PILLARS
========================================================= */

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

/* =========================================================
   TECHNOLOGY COMMAND DOMAINS
========================================================= */

const commandDomains = [
  {
    icon: FiUsers,
    label: 'Herd'
  },
  {
    icon: FiBox,
    label: 'Feed'
  },
  {
    icon: FiDroplet,
    label: 'Milk'
  },
  {
    icon: FiSettings,
    label: 'Processing'
  },
  {
    icon: FiZap,
    label: 'Energy'
  },
  {
    icon: FiRefreshCcw,
    label: 'Water'
  },
  {
    icon: FiBarChart2,
    label: 'Inventory'
  },
  {
    icon: FiTruck,
    label: 'Logistics'
  }
]

/* =========================================================
   DAIRY PRODUCTS
========================================================= */

const productTeasers = [
  'Milk',
  'Curd',
  'Greek Yogurt',
  'Paneer',
  'Ghee',
  'Cheese'
]

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  usePageMeta(
    'TEJAYS AGRI — Growing for the Future',
    'TEJAYS AGRI is an integrated dairy, food-processing and nutrition company building a technology-driven circular dairy ecosystem — from genetics to protein.'
  )

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

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
        primary={{
          label: 'Explore the Ecosystem',
          to: '/smart-dairy'
        }}
        secondary={{
          label: 'Our Approach',
          to: '/about'
        }}
        meta={[
          'Genetics → Nutrition',
          'Circular by design',
          'Technology · Dairy · Nutrition · Sustainability'
        ]}
      >
        <StatStrip
          items={heroStats}
          tone="dark"
        />
      </PageHero>

      {/* =====================================================
          POSITIONING
      ===================================================== */}

      <section className="bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">

          {/* Heading */}
          <div className="mx-auto max-w-4xl text-left lg:text-center">
            <SectionHeading
              align="left"
              eyebrow="Positioning"
              title={
                <>
                  TEJAYS AGRI is not being built simply to produce milk.
                  It is being built to{' '}
                  <span className="text-brand">
                    create value across the entire dairy ecosystem.
                  </span>
                </>
              }
            />
          </div>

          {/* Pillars */}
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line/10 bg-line/10 lg:grid-cols-4">
            {pillars.map((pillar, index) => (
              <Link
                key={pillar.title}
                to={pillar.to}
                data-aos="fade-up"
                data-aos-delay={index * 90}
                className="group bg-surface p-5 text-left transition-colors duration-300 hover:bg-tint sm:p-6 lg:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-extrabold tracking-[0.24em] text-[#72B943]">
                    {pillar.index}
                  </span>

                  <FiArrowUpRight className="text-brand opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </div>

                <h3 className="mt-4 font-display text-lg font-extrabold tracking-tight text-ink sm:text-xl">
                  {pillar.title}
                </h3>

                <div className="mt-4 h-px w-10 bg-brand/30 transition-all duration-300 group-hover:w-16 group-hover:bg-[#075B3A]" />

                <p className="mt-4 text-sm leading-relaxed text-inkMuted">
                  {pillar.desc}
                </p>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          ECOSYSTEM
      ===================================================== */}

      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">

          <div className="flex flex-col gap-6 lg:items-center lg:text-center">

            <SectionHeading
              eyebrow="The Ecosystem"
              title="One connected value chain."
              description="Every stage feeds the next — and every output circles back into the system."
              align="left"
            />

            <div
              data-aos="fade-up"
              data-aos-delay="140"
              className="lg:mt-2"
            >
              <Link
                to="/genetics"
                className="group inline-flex items-center gap-2 rounded-full border border-brand/25 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-brand transition-all duration-300 hover:bg-[#075B3A] hover:text-white sm:px-6 sm:py-3.5 sm:text-[11px]"
              >
                View the full chain

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

          <div className="mt-10 sm:mt-12 lg:mt-14">
            <EcosystemChain showLoop />
          </div>

        </div>
      </section>

      {/* =====================================================
          SMART DAIRY
      ===================================================== */}

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
          className="grid grid-cols-2 gap-4"
          items={[
            {
              icon: FiCpu,
              title: 'Automated feeding',
              desc: 'Precision TMR delivery aligned to each animal stage.'
            },
            {
              icon: FiActivity,
              title: 'Health & yield monitoring',
              desc: 'Continuous insight from sensors and wearables.'
            },
            {
              icon: FiAward,
              title: 'Cow comfort & welfare',
              desc: 'Welfare-first design across stall, feed and rest.'
            },
            {
              icon: FiRepeat,
              title: 'Automated manure management',
              desc: 'Continuous collection feeding the circular energy loop.'
            }
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

      {/* =====================================================
          TECHNOLOGY
      ===================================================== */}

      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">

          {/* Header */}
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

          {/* Command Centre */}
          <div
            data-aos="fade-up"
            className="mt-14 overflow-hidden rounded-3xl border border-line/10 bg-[#07100D] text-[#EDF7F2] shadow-[0_40px_80px_rgb(var(--shadow-ink)/0.25)]"
          >

            {/* Top Bar */}
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

            {/* Domains */}
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {commandDomains.map((domain, index) => {
                const Icon = domain.icon

                return (
                  <div
                    key={domain.label}
                    className="group flex flex-col items-start gap-3 border-b border-r border-white/[0.07] p-6 transition-colors duration-300 hover:bg-brand/20 sm:p-7"
                  >
                    <span className="font-display text-[10px] font-extrabold tracking-[0.2em] text-[#72B943]/50">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <Icon className="text-xl text-[#A9C4B8] transition-colors duration-300 group-hover:text-[#72B943]" />

                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#EDF7F2]">
                      {domain.label}
                    </span>
                  </div>
                )
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          DAIRY & FOODS
      ===================================================== */}

      <section className="border-t border-line/10 bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">

            {/* Left Content */}
            <div className="lg:col-span-4">

              <SectionHeading
                eyebrow="Dairy & Foods"
                title="A modern dairy range, rooted in tradition."
                description="Everyday dairy categories built on clean milk and modern processing."
              />

              <Link
                to="/dairy-foods"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-brand/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-brand transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white"
              >
                View the Range

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

            {/* Product Grid */}
            <div className="lg:col-span-8">

              <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">

                {productTeasers.map((product, index) => (
                  <div
                    key={product}
                    data-aos="fade-up"
                    data-aos-delay={index * 70}
                    className="group relative min-h-[170px] overflow-hidden rounded-3xl border border-line/10 bg-surface p-5 transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_20px_55px_rgba(0,0,0,0.07)] sm:min-h-[200px] sm:p-7"
                  >

                    {/* Top */}
                    <div className="flex items-start justify-between gap-2">

                      <span className="font-display text-xs font-extrabold tracking-[0.2em] text-brand/60 sm:text-sm">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span className="rounded-full border border-brand/15 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-brand sm:px-3 sm:text-[9px]">
                        Planned
                      </span>

                    </div>

                    {/* Title */}
                    <div className="mt-9 sm:mt-12">

                      <h3 className="font-display text-sm font-extrabold leading-tight tracking-tight text-ink sm:text-xl">
                        {product}
                      </h3>

                      <div className="mt-4 h-px w-7 bg-brand/40 transition-all duration-500 group-hover:w-14" />

                    </div>

                    {/* Arrow */}
                    <div className="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-line/10 text-sm text-brand/70 transition-all duration-300 group-hover:border-brand/30 group-hover:text-brand sm:bottom-7 sm:right-7 sm:h-9 sm:w-9">
                      ↗
                    </div>

                    {/* Background Detail */}
                    <div className="pointer-events-none absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-brand/[0.04] transition-transform duration-500 group-hover:scale-[1.5]" />

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          NUTRITION & WHEY
      ===================================================== */}

      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">

          {/* Header */}
          <div
            className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"
            data-aos="fade-up"
          >

            <div>

              <p className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-brand">
                <span
                  className="h-px w-10 bg-current"
                  aria-hidden="true"
                />

                Nutrition & Whey
              </p>

              <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-[0.98] tracking-tight text-ink sm:text-5xl lg:text-[64px]">
                Turning milk into
                <span className="text-brand">
                  {' '}higher value.
                </span>
              </h2>

            </div>

            <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base lg:pb-2">
              A connected processing pipeline designed to capture more value
              from every litre of milk — from dairy production to advanced
              nutrition ingredients.
            </p>

          </div>

          {/* Process */}
          {/* Nutrition Process */}
<div
  className="mt-14 overflow-hidden border-y border-line/10 lg:mt-20"
  data-aos="fade-up"
  data-aos-delay="120"
>
  <div className="grid !grid-cols-2 lg:!grid-cols-4">

    {[
      {
        no: '01',
        title: 'Cheese',
        text: 'Milk transformed into high-value dairy products.'
      },
      {
        no: '02',
        title: 'Whey',
        text: 'Recovering valuable whey instead of treating it as waste.'
      },
      {
        no: '03',
        title: 'Protein',
        text: 'Converting whey into functional protein ingredients.'
      },
      {
        no: '04',
        title: 'Nutrition',
        text: 'Creating premium nutrition applications and products.'
      }
    ].map((item, index) => (
      <div
        key={item.no}
        className={`
          group
          relative
          min-w-0
          min-h-[220px]
          border-line/10
          p-5
          transition-all
          duration-500
          hover:bg-pageBg
          sm:min-h-[240px]
          sm:p-7
          lg:min-h-[280px]
          lg:p-9

          ${index === 0 ? 'border-b border-r' : ''}
          ${index === 1 ? 'border-b' : ''}
          ${index === 2 ? 'border-r' : ''}

          lg:border-b-0
          lg:border-r

          lg:last:border-r-0
        `}
      >

        {/* NUMBER + ARROW */}
        <div className="flex items-start justify-between gap-2">

          <span className="font-display text-xs font-extrabold tracking-[0.2em] text-brand/60 sm:text-sm">
            {item.no}
          </span>

          <FiArrowUpRight
            size={18}
            className="shrink-0 text-line/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand sm:h-5 sm:w-5"
          />

        </div>

        {/* CONTENT */}
        <div className="mt-10 sm:mt-14 lg:mt-20">

          <h3 className="font-display text-xl font-extrabold leading-tight tracking-tight text-ink sm:text-2xl lg:text-3xl">
            {item.title}
          </h3>

          <p className="mt-3 max-w-[230px] text-[11px] leading-relaxed text-muted sm:text-sm">
            {item.text}
          </p>

        </div>

        {/* HOVER LINE */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand transition-all duration-500 group-hover:w-full" />

      </div>
    ))}

  </div>
</div>

          {/* Footer */}
          <div
            className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
            data-aos="fade-up"
            data-aos-delay="180"
          >

            <div className="flex items-center gap-4">

              <span className="h-2 w-2 rounded-full bg-brand" />

              <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
                Farm → Dairy → Whey → Protein → Nutrition
              </p>

            </div>

            <Link
              to="/nutrition"
              className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand"
            >
              Explore Nutrition

              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>

        </div>
      </section>

      {/* =====================================================
          SUSTAINABILITY
      ===================================================== */}

      <section className="border-t border-line/10 bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">

            {/* Left Content */}
            <div
              className="lg:col-span-4"
              data-aos="fade-right"
            >

              <p className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-brand">
                <span
                  className="h-px w-10 bg-current"
                  aria-hidden="true"
                />

                Sustainability
              </p>

              <h2 className="font-display text-3xl font-extrabold leading-[1.06] tracking-tight text-ink sm:text-4xl lg:text-[44px]">
                Nothing goes to waste.
                <span className="block text-brand">
                  Everything returns.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Our dairy ecosystem is designed as a connected circular system —
                turning outputs into energy, fertilizer, agriculture and feed.
              </p>

              <Link
                to="/sustainability"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-brand/25 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white"
              >
                Explore the Circular System

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

            </div>

            {/* Right Circular System */}
            <div
              className="lg:col-span-8"
              data-aos="fade-left"
              data-aos-delay="120"
            >

              <div className="relative overflow-hidden rounded-[2rem] border border-line/10 bg-surface p-6 sm:p-8 lg:p-10">

                {/* Connecting Line */}
                <div
                  className="absolute left-[9%] right-[9%] top-[4.35rem] hidden h-px bg-brand/15 lg:block"
                  aria-hidden="true"
                />

                {/* Circular Stages */}
                <div className="grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 sm:gap-7 lg:grid-cols-6 lg:gap-5">

                  {[
                    'Manure',
                    'Biogas',
                    'Energy',
                    'Fertilizer',
                    'Agriculture',
                    'Feed'
                  ].map((stage, index) => (
                    <div
                      key={stage}
                      className="group relative text-left lg:text-center"
                    >

                      {/* Number */}
                      <div className="relative z-10 mx-0 flex h-11 w-11 items-center justify-center rounded-full border border-brand/20 bg-pageBg font-display text-[10px] font-extrabold tracking-[0.15em] text-brand transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white lg:mx-auto">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* Title */}
                      <h3 className="mt-4 text-xs font-extrabold uppercase tracking-[0.1em] text-ink transition-colors duration-300 group-hover:text-brand sm:text-sm">
                        {stage}
                      </h3>

                      {/* Indicator */}
                      <div className="mt-3 h-px w-6 bg-brand/30 transition-all duration-300 group-hover:w-10 lg:mx-auto" />

                    </div>
                  ))}

                </div>

                {/* Bottom Message */}
                <div className="mt-9 border-t border-line/10 pt-6">

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                    <p className="max-w-2xl text-xs leading-relaxed text-muted sm:text-sm">
                      Waste becomes energy. Energy supports agriculture.
                      Agriculture returns value to the dairy system — creating
                      a connected, regenerative cycle.
                    </p>

                    <span className="shrink-0 text-[9px] font-bold uppercase tracking-[0.2em] text-brand/70">
                      Circular by design
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <CTASection
        eyebrow="Tejays Agri"
        title={
          <>
            Building the future of dairy,{' '}
            <span className="text-[#BDE89A]">
              together.
            </span>
          </>
        }
        description="Growing for the future is a partnership. Whether you are a farmer, a processor, a technology partner, an investor or a future customer of TEJAYS AGRI — let's begin the conversation."
        primary={{
          label: 'Contact TEJAYS AGRI',
          to: '/contact'
        }}
        secondary={{
          label: 'View the Campus Mission',
          to: '/campus'
        }}
        note="Planned · Proposed · Future — this website communicates design intent unless explicitly marked operational."
      />
    </>
  )
}