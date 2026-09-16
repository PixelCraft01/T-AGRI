import { Link } from 'react-router-dom'
import {
  FiArrowUpRight,
  FiLayers,
  FiCpu,
  FiAward,
  FiRepeat,
} from 'react-icons/fi'

import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import StatStrip from '../components/StatStrip'
import SplitSection from '../components/SplitSection'

const valueBlocks = [
  {
    icon: FiLayers,
    title: 'Integrated ecosystem',
    desc: 'Genetics, feed, smart dairy, milk, processing, cheese, whey and nutrition — connected through one integrated value chain.',
    to: '/genetics',
  },
  {
    icon: FiCpu,
    title: 'Technology-led',
    desc: 'AI, sensors, automation and data-driven systems are designed into the ecosystem from the beginning.',
    to: '/technology',
  },
  {
    icon: FiAward,
    title: 'Higher-value food & nutrition',
    desc: 'Milk moves beyond the traditional dairy model into differentiated dairy, protein and nutrition products.',
    to: '/nutrition',
  },
  {
    icon: FiRepeat,
    title: 'Sustainability by design',
    desc: 'A circular approach where resources are reused, waste is reduced and agriculture becomes part of the system.',
    to: '/sustainability',
  },
]

const roadmap = [
  {
    phase: 'Phase 0',
    title: 'Planning & Design',
    desc: 'Masterplanning the integrated campus, technology architecture and herd strategy.',
    tag: 'Current intent',
    tone: 'border-[#72B943]',
  },
  {
    phase: 'Phase I',
    title: 'Smart Dairy',
    desc: '2,000-cow climate-controlled dairy with automated feeding, milking and monitoring.',
    tag: 'Planned',
    tone: 'border-brand',
  },
  {
    phase: 'Phase II',
    title: 'Processing & Foods',
    desc: 'Milk processing, paneer, ghee, yogurt and the traditional dairy range.',
    tag: 'Planned',
    tone: 'border-brand',
  },
  {
    phase: 'Phase III',
    title: 'Cheese & Whey',
    desc: 'Mozzarella and cheddar production with whey recovery as a protein foundation.',
    tag: 'Planned',
    tone: 'border-brand',
  },
  {
    phase: 'Phase IV',
    title: 'Nutrition & Protein',
    desc: 'Protein ingredients, high-protein dairy and sports nutrition opportunities.',
    tag: 'Future',
    tone: 'border-[#E7B84B]',
  },
  {
    phase: 'Long-term',
    title: '5,000+ Cow Ecosystem',
    desc: 'Scaling the integrated dairy, food, nutrition and agriculture ecosystem.',
    tag: 'Future scalability',
    tone: 'border-[#E7B84B]',
  },
]

export default function About() {
  usePageMeta(
    'About TEJAYS AGRI — An Integrated Dairy & Nutrition Company',
    'TEJAYS AGRI is being built to create value across the dairy ecosystem — from genetics and feed to smart dairy, processing, cheese, whey and nutrition.'
  )

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHero
        variant="full"
        image="/images/tejays-agri-hero3.jpg"
        imageAlt="TEJAYS AGRI integrated dairy ecosystem"
        eyebrow="About TEJAYS AGRI"
        title={
          <>
            Building value across the
            <br />
            <span className="text-[#72B943]">dairy ecosystem.</span>
          </>
        }
        description="TEJAYS AGRI is being built around an integrated model — connecting dairy farming, technology, processing, food innovation and nutrition into one scalable ecosystem."
        primary={{
          label: 'Explore the Ecosystem',
          to: '/genetics',
        }}
        secondary={{
          label: 'Our Approach',
          to: '/smart-dairy',
        }}
      />


      {/* =========================================================
          VISION
      ========================================================= */}
      <section className="bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p
                data-aos="fade-up"
                className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-brand"
              >
                <span
                  className="h-px w-8 bg-current"
                  aria-hidden="true"
                />
                Our Vision
              </p>

              <h2
                data-aos="fade-up"
                data-aos-delay="60"
                className="max-w-3xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[48px]"
              >
                A dairy business designed for the
                <span className="text-brand"> future of food.</span>
              </h2>
            </div>

            <div className="lg:col-span-5 lg:pt-10">
              <div
                data-aos="fade-up"
                data-aos-delay="120"
                className="space-y-5 border-l-2 border-brand/20 pl-5 sm:pl-6"
              >
                <p className="text-base leading-7 text-inkMuted">
                  The dairy industry is evolving rapidly. TEJAYS AGRI is
                  designed at the intersection of agriculture, food technology,
                  automation and nutrition science.
                </p>

                <p className="text-base leading-7 text-inkMuted">
                  The objective is simple: build an ecosystem where every
                  stage of the value chain contributes to the next — creating
                  stronger products, better resource utilisation and long-term
                  value.
                </p>
              </div>
            </div>
          </div>

          {/* VALUE CARDS */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-line/10 bg-line/10 sm:mt-14">
            <div className="grid grid-cols-2 gap-px">
              {valueBlocks.map((item, index) => {
                const Icon = item.icon

                return (
                  <Link
                    key={item.title}
                    to={item.to}
                    data-aos="fade-up"
                    data-aos-delay={index * 70}
                    className="group bg-surface p-4 transition-all duration-300 hover:bg-tint sm:p-8"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tint text-brand transition-all duration-300 group-hover:bg-[#075B3A] group-hover:text-white sm:h-12 sm:w-12">
                        <Icon className="text-lg sm:text-xl" />
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-display text-sm font-bold leading-tight tracking-tight text-ink sm:text-lg">
                            {item.title}
                          </h3>

                          <FiArrowUpRight className="mt-0.5 shrink-0 text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                        </div>

                        <p className="mt-2 text-xs leading-5 text-inkMuted sm:text-sm sm:leading-6">
                          {item.desc}
                        </p>
                      </div>

                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          SCALABILITY
      ========================================================= */}
      <SplitSection
        image="/images/dery (5).jpg"
        imageAlt="TEJAYS AGRI scalable dairy ecosystem"
        imagePosition="left"
        imageRatio="aspect-[4/5]"
        className="border-t border-line/10 bg-surface"
        floatCard={{
          note: 'Long-term',
          value: '5,000+',
          label: 'herd scalability',
        }}
      >
        <SectionHeading
          eyebrow="Future Scalability"
          title="Built to grow with intent."
          description="Phase-I establishes a 2,000-cow smart dairy as a planned design capacity. The ecosystem is structured to scale progressively toward 5,000+ cows alongside processing, food and nutrition capabilities."
        />

        <div className="mt-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

            {/* Phase-I Cows */}
            <div
              data-aos="fade-up"
              className="group rounded-2xl border border-line/10 bg-pageBg p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_16px_35px_rgb(var(--shadow-ink)/0.08)] sm:p-6"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-display text-3xl font-extrabold leading-none tracking-tight text-brand sm:text-4xl">
                    2,000
                  </div>

                  <div className="mt-2 text-sm font-bold leading-tight text-ink sm:text-base">
                    Phase-I cows
                  </div>

                  <div className="mt-1.5 text-[11px] font-medium text-inkMuted sm:text-xs">
                    Planned
                  </div>
                </div>

                <span
                  className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand opacity-70 transition-transform duration-300 group-hover:scale-125"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Long-Term Herd */}
            <div
              data-aos="fade-up"
              data-aos-delay="80"
              className="group rounded-2xl border border-line/10 bg-pageBg p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_16px_35px_rgb(var(--shadow-ink)/0.08)] sm:p-6"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-display text-3xl font-extrabold leading-none tracking-tight text-brand sm:text-4xl">
                    5,000+
                  </div>

                  <div className="mt-2 text-sm font-bold leading-tight text-ink sm:text-base">
                    Long-term herd
                  </div>

                  <div className="mt-1.5 text-[11px] font-medium text-inkMuted sm:text-xs">
                    Future scalability
                  </div>
                </div>

                <span
                  className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand opacity-70 transition-transform duration-300 group-hover:scale-125"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Integrated Campus */}
            <div
              data-aos="fade-up"
              data-aos-delay="160"
              className="group col-span-2 rounded-2xl border border-line/10 bg-pageBg p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_16px_35px_rgb(var(--shadow-ink)/0.08)] sm:col-span-1 sm:text-left sm:p-6"
            >
              <div className="flex items-center justify-center gap-3 sm:justify-start">
                <div className="font-display text-3xl font-extrabold leading-none tracking-tight text-brand sm:text-4xl">
                  01
                </div>

                <div
                  className="h-6 w-px bg-line/15"
                  aria-hidden="true"
                />

                <div className="text-sm font-bold text-ink sm:text-base">
                  Integrated campus
                </div>
              </div>

              <div className="mt-2 text-[11px] font-medium text-inkMuted sm:mt-3 sm:text-xs">
                By design
              </div>
            </div>

          </div>
        </div>
      </SplitSection>


      {/* =========================================================
          ROADMAP
      ========================================================= */}
      <section className="border-t border-line/10 bg-pageBg">

        <div className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">

          <SectionHeading
            eyebrow="Development Roadmap"
            title="One ecosystem. Built in phases."
            description="Each phase is designed to create value independently while creating the foundation for the next stage of the ecosystem."
          />

          {/* Roadmap Cards */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-3">
            {roadmap.map((item, index) => (
              <div
                key={item.phase}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className={`
    group relative overflow-hidden
    rounded-2xl
    border border-line/10
    border-t-4 ${item.tone}
    bg-surface
    p-4
    transition-all duration-500 ease-out
    hover:-translate-y-1
    hover:scale-[1.015]
    hover:border-brand/35
    hover:bg-brand/[0.045]
    hover:shadow-[0_20px_45px_rgb(var(--shadow-brand)/0.12)]
    sm:p-6
    lg:p-7
  `}
              >
                {/* Hover shimmer */}
                <div
                  className="
      pointer-events-none absolute inset-0
      -translate-x-[130%]
      skew-x-[-18deg]
      bg-gradient-to-r
      from-transparent
      via-brand/[0.08]
      to-transparent
      transition-transform duration-700 ease-out
      group-hover:translate-x-[130%]
    "
                  aria-hidden="true"
                />

                <div className="relative z-10">

                  <div className="flex items-start justify-between gap-3">
                    <span
                      className="
          font-display text-[9px] font-extrabold
          uppercase tracking-[0.16em] text-brand
          sm:text-xs sm:tracking-[0.18em]
        "
                    >
                      {item.phase}
                    </span>

                    <span
                      className="
          rounded-full border border-brand/20
          px-2.5 py-1
          text-[7px] font-bold uppercase
          tracking-[0.1em] text-brand
          transition-all duration-300
          group-hover:border-brand/40
          group-hover:bg-brand
          group-hover:text-white
          sm:text-[9px]
        "
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3
                    className="
        mt-5
        font-display text-sm font-bold
        leading-tight tracking-tight text-ink
        transition-transform duration-300
        group-hover:translate-x-1
        sm:text-xl
      "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
        mt-2
        text-[11px] leading-5 text-inkMuted
        sm:text-sm sm:leading-6
      "
                  >
                    {item.desc}
                  </p>

                  {/* Hover line */}
                  <div
                    className="
        mt-5 h-px w-0
        bg-brand/40
        transition-all duration-500
        group-hover:w-full
      "
                  />

                  <div className="mt-3 flex items-center justify-end">
                    <span
                      className="
          inline-flex
          text-lg text-brand
          opacity-40
          transition-all duration-500
          group-hover:translate-x-1
          group-hover:-translate-y-1
          group-hover:rotate-[25deg]
          group-hover:scale-125
          group-hover:opacity-100
        "
                    >
                      ↗
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Roadmap Note */}
          <p
            data-aos="fade-up"
            className="mt-6 text-[9px] font-semibold uppercase tracking-[0.1em] leading-5 text-inkSoft sm:mt-7 sm:text-xs sm:tracking-[0.14em]"
          >
            Roadmap reflects current development intent · phases may evolve as
            the campus and implementation plans are finalised.
          </p>

        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <CTASection
        eyebrow="TEJAYS AGRI"
        title={
          <>
            One company. One ecosystem.
            <span className="text-[#BDE89A]"> One future.</span>
          </>
        }
        description="Explore how dairy, technology, food and nutrition come together within the TEJAYS AGRI ecosystem."
        primary={{
          label: 'Explore the Campus',
          to: '/campus',
        }}
        secondary={{
          label: 'Talk to TEJAYS AGRI',
          to: '/contact',
        }}
      />
    </>
  )
}