import {
  FiCrosshair,
  FiActivity,
  FiHeart,
  FiBarChart2,
  FiShield,
  FiTag
} from 'react-icons/fi'

import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import StatStrip from '../components/StatStrip'
import PremiumCard from '../components/PremiumCard'
import SplitSection from '../components/SplitSection'

const focusAreas = [
  {
    icon: FiCrosshair,
    title: 'Genetics',
    desc: 'Selecting for long-term herd quality and performance.'
  },
  {
    icon: FiActivity,
    title: 'Reproductive management',
    desc: 'Breeding programmes managed with science and records.'
  },
  {
    icon: FiHeart,
    title: 'Animal health',
    desc: 'Preventive health and welfare at the centre of care.'
  },
  {
    icon: FiBarChart2,
    title: 'Herd performance',
    desc: 'Yield, fertility and health tracked as one dataset.'
  },
  {
    icon: FiTag,
    title: 'Individual records',
    desc: 'Every animal, every event — one lifelong record.'
  },
  {
    icon: FiShield,
    title: 'Responsible development',
    desc: 'Welfare-first dairy growth without overpromised outcomes.'
  }
]

const herdStats = [
  { value: '2,000', label: 'Phase-I herd', note: 'Planned' },
  { value: '5,000+', label: 'Long-term herd', note: 'Future' },
  { value: '1:1', label: 'Animal identity', note: 'RFID & records' },
  { value: '100%', label: 'Health-first design', note: 'By design' }
]

export default function Genetics() {
  usePageMeta(
    'Genetics & Animal Health — TEJAYS AGRI',
    'TEJAYS AGRI genetics — building better herds by design, with planned breeding, reproductive management, animal health and herd performance at the core.'
  )

  return (
    <>
      {/* HERO */}
      <PageHero
        variant="full"
        image="/images/ecosystem/genetics.jpg"
        imageAlt="TEJAYS AGRI herd genetics and animal health programme"
        eyebrow="Tejays Agri / Genetics & Animal Health"
        title={
          <>
            Building better herds,
            <br />
            <span className="text-[#72B943]">by design.</span>
          </>
        }
        description="A responsible, science-led approach to herd development — where genetics, reproduction, nutrition and health are managed as one integrated system."
        primary={{ label: 'The Smart Dairy', to: '/smart-dairy' }}
        secondary={{ label: 'Our Approach', to: '/about' }}
        meta={[
          'Planned breeding programme',
          'Welfare by design',
          'No overpromised outcomes'
        ]}
      >
        <StatStrip items={herdStats} tone="dark" />
      </PageHero>

      {/* HERD DEVELOPMENT */}
      <section className="bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Herd Development"
            title="Six pillars of herd excellence."
            description="A planned framework across genetics, reproduction, health and performance — each pillar reinforcing the next."
          />

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            {focusAreas.map((f, i) => (
              <div
                key={f.title}
                data-aos="fade-up"
                data-aos-delay={i * 60}
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
                    <f.icon className="text-base sm:text-lg" />
                  </span>

                  {/* Content */}
                  <h3 className="mt-5 font-display text-sm font-extrabold leading-tight tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-base lg:text-lg">
                    {f.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-4 text-inkMuted sm:text-xs sm:leading-5 lg:text-sm lg:leading-6">
                    {f.desc}
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

      {/* RESPONSIBLE DAIRY DEVELOPMENT */}
      <SplitSection
        image="/images/dery (4).jpg"
        imageAlt="Well-monitored herd concept at TEJAYS AGRI"
        imagePosition="left"
        imageRatio="aspect-[4/5]"
        className="border-t border-line/10 bg-surface"
        floatCard={{
          note: 'Welfare',
          value: 'By design',
          label: 'health-first herd development'
        }}
      >
        <SectionHeading
          eyebrow="Responsible Dairy Development"
          title={
            <>
              Health first.
              <br />
              <span className="text-brand">Performance follows.</span>
            </>
          }
          description="Genetics only pays off when the animal is comfortable, healthy and well managed. TEJAYS AGRI plans herds around wellbeing — with cage-free-level attention to rest, nutrition and veterinary care."
        />

        <div className="mt-7 flex flex-wrap gap-2 sm:mt-8 sm:gap-2.5">
          {[
            'Preventive care protocol',
            'Welfare audits',
            'Nutrition-matched breeding',
            'Lifelong animal records'
          ].map((c) => (
            <span
              key={c}
              className="rounded-full border border-brand/20 bg-pageBg px-3.5 py-2 text-[10px] font-semibold tracking-wide text-brand transition-all duration-300 hover:border-brand/40 hover:bg-tint hover:-translate-y-px sm:px-4 sm:text-[11px]"
            >
              {c}
            </span>
          ))}
        </div>
      </SplitSection>

      {/* CTA */}
      <CTASection
        eyebrow="Genetics"
        title={
          <>
            Every great dairy begins
            <br />
            <span className="text-[#BDE89A]">with the animal.</span>
          </>
        }
        description="Explore how the herd connects to feed, technology and milk quality."
        primary={{ label: 'The Living Loop', to: '/agriculture' }}
        secondary={{ label: 'Contact TEJAYS AGRI', to: '/contact' }}
        note="Genetics programme planned — designed for Phase-I"
      />
    </>
  )
}
