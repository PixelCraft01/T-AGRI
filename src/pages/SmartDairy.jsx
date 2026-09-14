import {
  FiCpu,
  FiDroplet,
  FiLayers,
  FiActivity,
  FiHeadphones,
  FiRepeat,
  FiTag,
  FiHeart,
  FiBarChart2
} from 'react-icons/fi'

import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import StatStrip from '../components/StatStrip'
import SplitSection from '../components/SplitSection'
import FeatureList from '../components/FeatureList'

const phaseStats = [
  { value: '2,000', label: 'Phase-I milking cows', note: 'Planned design capacity' },
  { value: '5,000+', label: 'Long-term scalability', note: 'Future' },
  { value: '24/7', label: 'Monitoring & comfort', note: 'By design' },
  { value: '100%', label: 'Manure to energy loop', note: 'Proposed system' }
]

const systems = [
  { icon: FiLayers, title: 'Climate-controlled barns', desc: 'Comfort-first housing designed for Indian climate conditions.' },
  { icon: FiCpu, title: 'Automated feeding', desc: 'Precision TMR delivery aligned to each animal stage.' },
  { icon: FiDroplet, title: 'Advanced milking', desc: 'Hygienic, high-throughput milking with yield recording.' },
  { icon: FiTag, title: 'Individual animal identification', desc: 'RFID and wearables tracking every animal by identity.' },
  { icon: FiHeart, title: 'Animal welfare', desc: 'Welfare-first design across stall, feed and rest.' },
  { icon: FiHeadphones, title: 'Cow comfort', desc: 'Rest, ventilation and handling designed around the animal.' },
  { icon: FiActivity, title: 'Health monitoring', desc: 'Continuous sensors for health, rumination and activity.' },
  { icon: FiRepeat, title: 'Automated manure management', desc: 'Continuous collection feeding the circular energy loop.' },
  { icon: FiBarChart2, title: 'Data-driven herd management', desc: 'Every animal, every decision, one dataset.' }
]

const maturity = [
  {
    stage: 'Current',
    title: 'Planning & Development',
    desc: 'Masterplanning, technology architecture and herd strategy development across the integrated campus.',
    tone: 'text-inkSoft border-inkSoft'
  },
  {
    stage: 'Planned',
    title: 'Phase-I Smart Dairy',
    desc: '2,000-milking-cow dairy with climate control, automation, welfare and data systems.',
    tone: 'text-brand border-brand'
  },
  {
    stage: 'Future',
    title: '5,000+ Cow Ecosystem',
    desc: 'Long-term scaling of the dairy, processing, nutrition and agriculture campus.',
    tone: 'text-[#E7B84B] border-[#E7B84B]'
  }
]

export default function SmartDairy() {
  usePageMeta(
    'Smart Dairy — TEJAYS AGRI',
    'TEJAYS AGRI smart dairy — a Phase-I 2,000-cow climate-controlled dairy with automated feeding, milking, welfare and data systems. Planned design capacity, future scalability to 5,000+ cows.'
  )

  return (
    <>
      <PageHero
        variant="full"
        image="/images/dery (1).jpg"
        imageAlt="TEJAYS AGRI smart dairy infrastructure concept"
        eyebrow="Tejays Agri / Smart Dairy"
        title={
          <>
            Intelligence at
            <br />
            the <span className="text-[#72B943]">heart of dairy.</span>
          </>
        }
        description="A Phase-I smart dairy of 2,000 milking cows (planned design capacity) — engineered as modern dairy infrastructure with climate control, automation, welfare and data at its core."
        primary={{ label: 'Discover Technology', to: '/technology' }}
        secondary={{ label: 'Talk to TEJAYS AGRI', to: '/contact' }}
        meta={['Planned design capacity', 'Future scalability: 5,000+ cows', 'Welfare · Data · Automation']}
      >
        <StatStrip items={phaseStats} tone="dark" />
      </PageHero>

      <SplitSection
        image="/images/ecosystem/smart-dairy.png"
        imageAlt="Phase-I smart dairy model — automated feeding, milking and climate control"
        imagePosition="right"
        imageRatio="aspect-[4/5]"
        className="bg-pageBg"
        floatCard={{ note: 'Planned', value: '2,000', label: 'milking cows · design capacity' }}
      >
        <SectionHeading
          eyebrow="The Phase-I Model"
          title="Modern dairy infrastructure, not a traditional farm."
          description="The smart dairy is designed as a precision system — where feeding, milking, health and comfort are measured, managed and continuously improved."
        />
        <FeatureList items={systems.slice(0, 5)} />
        <p className="mt-6 pt-4 text-xs font-semibold uppercase tracking-[0.16em] text-inkSoft">
          Designed as a whole system — Phase-I · planned
        </p>
      </SplitSection>

      {/* Facility systems */}
      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">

          {/* Heading */}
          <div
            data-aos="fade-up"
            className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          >
            <SectionHeading
              eyebrow="Facility Systems"
              title="Engineered around the animal."
              description="Every barn, feed lane and machine is planned around one objective — a comfortable, healthy, high-performing herd."
            />

            <div className="hidden shrink-0 lg:block">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-brand/15 bg-pageBg text-brand">
                <span className="text-xl">✦</span>
              </div>
            </div>
          </div>

          {/* Systems */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systems.slice(5).map((item, index) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title || item.label || index}
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-line/10 bg-pageBg p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand/25 hover:bg-surface hover:shadow-[0_25px_60px_rgb(var(--shadow-ink)/0.09)] sm:p-7"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#72B943]/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[10px] font-extrabold tracking-[0.22em] text-brand/45">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {Icon && (
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-lg text-brand shadow-sm transition-all duration-300 group-hover:bg-[#075B3A] group-hover:text-white">
                        <Icon />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="mt-8">
                    <h3 className="text-lg font-extrabold tracking-[-0.02em] text-ink">
                      {item.title || item.label}
                    </h3>

                    {item.description && (
                      <p className="mt-3 text-sm leading-6 text-inkMuted">
                        {item.description}
                      </p>
                    )}

                    {item.desc && !item.description && (
                      <p className="mt-3 text-sm leading-6 text-inkMuted">
                        {item.desc}
                      </p>
                    )}
                  </div>

                  {/* Bottom accent */}
                  <div className="mt-7 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#72B943] transition-all duration-500 group-hover:w-14" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-inkSoft">
                      Facility System
                    </span>
                  </div>
                </article>
              )
            })}
          </div>

        </div>
      </section>

      {/* Maturity status */}
      <section className="border-t border-line/10 bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Phasing & Status"
            title="Clear, honest phasing."
            description="TEJAYS AGRI distinguishes what is planned from what is future. Nothing is presented as operational unless it truly is."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {maturity.map((m, i) => (
              <div
                key={m.stage}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className={`rounded-2xl border-t-4 border ${m.tone.split(' ')[1]} border-t-[3px] border-line/10 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgb(var(--shadow-brand)/0.1)]`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-[0.24em] ${m.tone.split(' ')[0]}`}>
                  {m.stage}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-ink">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-inkMuted">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Smart Dairy"
        title={
          <>
            Where the herd meets
            <br />
            <span className="text-[#BDE89A]">the data.</span>
          </>
        }
        description="See how sensors, cameras and artificial intelligence connect every animal to a command centre."
        primary={{ label: 'Explore Technology', to: '/technology' }}
        secondary={{ label: 'Contact TEJAYS AGRI', to: '/contact' }}
        note="Phase-I smart dairy is planned design capacity — not yet operational"
      />
    </>
  )
}