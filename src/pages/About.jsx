import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiLayers, FiCpu, FiAward, FiRepeat } from 'react-icons/fi'

import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import StatStrip from '../components/StatStrip'
import SplitSection from '../components/SplitSection'

const valueBlocks = [
  {
    icon: FiLayers,
    title: 'An integrated ecosystem',
    desc: 'Genetics, feed, smart dairy, milk, processing, cheese, whey and nutrition — one connected chain, not separate businesses.',
    to: '/genetics'
  },
  {
    icon: FiCpu,
    title: 'Technology-led',
    desc: 'AI, sensors and automation designed in from the ground up — not retrofitted later.',
    to: '/technology'
  },
  {
    icon: FiAward,
    title: 'Food & nutrition value',
    desc: 'Milk moves up the value chain into differential dairy and protein products.',
    to: '/nutrition'
  },
  {
    icon: FiRepeat,
    title: 'Sustainability by design',
    desc: 'A circular system where manure becomes energy and agriculture closes the loop.',
    to: '/sustainability'
  }
]

const roadmap = [
  { phase: 'Phase 0', title: 'Planning & Design', desc: 'Masterplanning the integrated campus, technology architecture and herd strategy.', tag: 'Current intent', tone: 'border-[#72B943]' },
  { phase: 'Phase I', title: 'Smart Dairy', desc: '2,000-cow climate-controlled dairy with automated feeding, milking and monitoring.', tag: 'Planned design capacity', tone: 'border-brand' },
  { phase: 'Phase II', title: 'Processing & Foods', desc: 'Milk processing, paneer, ghee, yogurt and the traditional dairy range.', tag: 'Planned', tone: 'border-brand' },
  { phase: 'Phase III', title: 'Cheese & Whey', desc: 'Mozzarella and cheddar with whey recovery as the protein foundation.', tag: 'Planned', tone: 'border-brand' },
  { phase: 'Phase IV', title: 'Nutrition & Protein', desc: 'Protein ingredients, high-protein dairy and sports nutrition ambitions.', tag: 'Future', tone: 'border-[#E7B84B]' },
  { phase: 'Long-term', title: '5,000+ Cow Ecosystem', desc: 'Scaling the full circular dairy and agriculture ecosystem.', tag: 'Future scalability', tone: 'border-[#E7B84B]' }
]

export default function About() {
  usePageMeta(
    'About TEJAYS AGRI — An Integrated Dairy & Nutrition Company',
    'TEJAYS AGRI is being built to create value across the entire dairy ecosystem — from genetics and feed to smart dairy, processing, cheese, whey and nutrition.'
  )

  return (
    <>
      <PageHero
        variant="split"
        image="/images/tejays-agri-hero3.jpg"
        imageAlt="TEJAYS AGRI vision of an integrated dairy ecosystem"
        eyebrow="About TEJAYS AGRI"
        title={
          <>
            Value across the
            <br />
            <span className="text-brand">entire dairy ecosystem.</span>
          </>
        }
        description="TEJAYS AGRI isn't being designed simply to produce milk. It is being built to create value at every stage of the dairy value chain — and to close the loop on every resource it touches."
        primary={{ label: 'The Ecosystem', to: '/genetics' }}
        secondary={{ label: 'Our Approach', to: '/smart-dairy' }}
      />

      {/* Vision statement */}
      <section className="bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p
                data-aos="fade-up"
                className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-brand"
              >
                <span className="h-px w-8 bg-current" aria-hidden="true" />
                Vision
              </p>
              <h2
                data-aos="fade-up"
                data-aos-delay="60"
                className="font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[44px]"
              >
                A dairy company built for{' '}
                <span className="text-brand">the future of food.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-12">
              <div
                data-aos="fade-up"
                data-aos-delay="120"
                className="space-y-6 border-l border-brand/30 pl-6"
              >
                <p className="text-base leading-relaxed text-inkMuted">
                  The dairy industry is changing — and so is what milk can
                  become. TEJAYS AGRI is designed to sit at the intersection of
                  agriculture, food technology and nutrition science.
                </p>
                <p className="text-base leading-relaxed text-inkMuted">
                  From heritage dairy categories to protein engineering, the
                  company is planned around one idea: grow the herd, grow the
                  value chain, and grow a genuinely circular business.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line/10 bg-line/10 md:grid-cols-2">
            {valueBlocks.map((v, i) => (
              <Link
                key={v.title}
                to={v.to}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="group flex items-start gap-5 bg-surface p-8 transition-colors duration-300 hover:bg-tint"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-tint text-brand transition-all duration-300 group-hover:bg-[#075B3A] group-hover:text-white">
                  <v.icon className="text-2xl" />
                </span>
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-bold tracking-tight text-ink">
                      {v.title}
                    </h3>
                    <FiArrowUpRight className="text-brand opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-inkMuted">
                    {v.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scalability */}
      <SplitSection
        image="/images/dery (5).jpg"
        imageAlt="TEJAYS AGRI future scalable dairy campus concept"
        imagePosition="left"
        imageRatio="aspect-[4/5]"
        className="border-t border-line/10 bg-surface"
        floatCard={{ note: 'Long-term', value: '5,000+', label: 'herd scalability' }}
      >
        <SectionHeading
          eyebrow="Future Scalability"
          title="Built to grow with intent."
          description="Phase-I establishes a 2,000-cow smart dairy as a design capacity. The architecture, land and technology choices are made so the ecosystem can scale toward 5,000+ cows and a full processing and nutrition campus."
        />
        <div className="mt-8">
          <StatStrip
            columns={3}
            items={[
              { value: '2,000', label: 'Phase-I cows', note: 'Planned' },
              { value: '5,000+', label: 'Long-term herd', note: 'Future scalability' },
              { value: '01', label: 'Integrated campus', note: 'By design' }
            ]}
          />
        </div>
      </SplitSection>

      {/* Roadmap */}
      <section className="border-t border-line/10 bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Roadmap"
            title="A phased journey toward one ecosystem."
            description="Every phase is designed to create value on its own — and to compound when the next phase unlocks."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {roadmap.map((r, i) => (
              <div
                key={r.phase}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                className={`rounded-2xl border-t-4 ${r.tone} border border-t-[3px] border-line/10 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgb(var(--shadow-brand)/0.1)]`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-extrabold tracking-[0.2em] text-brand">
                    {r.phase}
                  </span>
                  <span className="rounded-full border border-brand/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-brand">
                    {r.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-ink">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-inkMuted">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
          <p
            data-aos="fade-up"
            className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-inkSoft"
          >
            Roadmap reflects development intent · phases may evolve as the
            campus is finalized
          </p>
        </div>
      </section>

      <CTASection
        eyebrow="Tejays Agri"
        title={
          <>
            One company. One ecosystem.{' '}
            <span className="text-[#BDE89A]">One future.</span>
          </>
        }
        description="Discover how the pieces of the TEJAYS AGRI ecosystem fit together."
        primary={{ label: 'Explore the Campus', to: '/campus' }}
        secondary={{ label: 'Talk to TEJAYS AGRI', to: '/contact' }}
      />
    </>
  )
}