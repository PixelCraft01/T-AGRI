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
        floatCard={{
          note: 'Planned',
          value: '2,000',
          label: 'milking cows · design capacity',
        }}
      >
        <SectionHeading
          eyebrow="The Phase-I Model"
          title="Modern dairy infrastructure, not a traditional farm."
          description="The smart dairy is designed as a precision system — where feeding, milking, health and comfort are measured, managed and continuously improved."
        />

        {/* Smart Dairy Features */}
        <div className="mt-8 space-y-3">
          {[
            {
              title: 'Climate-controlled barns',
              description:
                'Comfort-first housing designed for Indian climate conditions.',
            },
            {
              title: 'Automated feeding',
              description:
                'Precision TMR delivery aligned to each animal stage.',
            },
            {
              title: 'Advanced milking',
              description:
                'Hygienic, high-throughput milking with yield recording.',
            },
            {
              title: 'Individual animal identification',
              description:
                'RFID and wearables tracking every animal by identity.',
            },
            {
              title: 'Animal welfare',
              description:
                'Welfare-first design across stall, feed and rest.',
            },
          ].map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 60}
              className="
          group relative overflow-hidden
          rounded-2xl
          border border-line/10
          bg-surface
          transition-all duration-500 ease-out
          hover:-translate-y-1
          hover:border-brand/30
          hover:bg-brand/[0.04]
          hover:shadow-[0_18px_40px_rgb(var(--shadow-brand)/0.10)]
        "
            >
              {/* Hover shimmer */}
              <div
                className="
            pointer-events-none absolute inset-0
            -translate-x-[130%]
            skew-x-[-18deg]
            bg-gradient-to-r
            from-transparent
            via-brand/[0.07]
            to-transparent
            transition-transform duration-700 ease-out
            group-hover:translate-x-[130%]
          "
                aria-hidden="true"
              />

              <div className="relative z-10 flex items-center gap-3 p-4 sm:p-5">

                {/* Number */}
                <span
                  className="
              flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-xl
              border border-brand/15
              bg-brand/[0.04]
              font-display text-[10px]
              font-extrabold text-brand
              transition-all duration-500
              group-hover:rotate-[-8deg]
              group-hover:border-brand/30
              group-hover:bg-brand
              group-hover:text-white
            "
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Title + hidden description */}
                <div className="min-w-0 flex-1">
                  <h3
                    className="
                text-sm font-bold
                leading-tight text-ink
                transition-all duration-300
                group-hover:translate-x-1
                group-hover:text-brand
                sm:text-base
              "
                  >
                    {item.title}
                  </h3>

                  {/* Description reveals on hover */}
                  <div
                    className="
                grid grid-rows-[0fr]
                opacity-0
                transition-all duration-500 ease-out
                group-hover:mt-1.5
                group-hover:grid-rows-[1fr]
                group-hover:opacity-100
              "
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs leading-5 text-inkMuted sm:text-sm sm:leading-6">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <span
                  className="
              flex h-8 w-8 shrink-0
              items-center justify-center
              rounded-full
              border border-line/10
              text-sm text-brand
              opacity-40
              transition-all duration-500
              group-hover:translate-x-1
              group-hover:-translate-y-1
              group-hover:rotate-[25deg]
              group-hover:scale-110
              group-hover:border-brand/30
              group-hover:bg-brand
              group-hover:text-white
              group-hover:opacity-100
            "
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>

              {/* Bottom hover line */}
              <div
                className="
            absolute bottom-0 left-0
            h-[2px] w-0
            bg-brand
            transition-all duration-500
            group-hover:w-full
          "
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* Bottom label */}
        <div
          className="
      mt-6
      flex items-center gap-3
      border-t border-line/10
      pt-4
    "
        >
          <span
            className="
        h-2 w-2 shrink-0
        rounded-full
        bg-brand
        opacity-70
      "
            aria-hidden="true"
          />

          <p
            className="
        text-[10px]
        font-bold uppercase
        tracking-[0.16em]
        text-inkSoft
        sm:text-xs
      "
          >
            Designed as a whole system · Phase-I · Planned
          </p>
        </div>
      </SplitSection>

      {/* Facility systems */}
      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">

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
          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-3">
            {systems.slice(5).map((item, index) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title || item.label || index}
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                  className="
              group relative overflow-hidden
              rounded-2xl
              border border-line/10
              bg-pageBg
              p-4
              transition-all duration-500 ease-out

              hover:-translate-y-1
              hover:border-brand/25
              hover:bg-surface
              hover:shadow-[0_20px_50px_rgb(var(--shadow-ink)/0.09)]

              sm:rounded-[1.75rem]
              sm:p-6
              lg:p-7
            "
                >

                  {/* Hover glow */}
                  <div
                    className="
                pointer-events-none
                absolute -right-16 -top-16
                h-32 w-32
                rounded-full
                bg-brand/10
                blur-2xl
                opacity-0
                transition-opacity duration-500
                group-hover:opacity-100
              "
                    aria-hidden="true"
                  />

                  {/* Hover shimmer */}
                  <div
                    className="
                pointer-events-none
                absolute inset-0
                -translate-x-[130%]
                skew-x-[-18deg]
                bg-gradient-to-r
                from-transparent
                via-brand/[0.06]
                to-transparent
                transition-transform duration-700 ease-out
                group-hover:translate-x-[130%]
              "
                    aria-hidden="true"
                  />

                  <div className="relative z-10">

                    {/* Top */}
                    <div className="flex items-center justify-between gap-2">

                      <span
                        className="
                    font-display
                    text-[9px]
                    font-extrabold
                    tracking-[0.18em]
                    text-brand/45
                    transition-colors duration-300
                    group-hover:text-brand
                    sm:text-[10px]
                    sm:tracking-[0.22em]
                  "
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      {Icon && (
                        <div
                          className="
                      flex
                      h-9 w-9
                      items-center justify-center
                      rounded-xl
                      bg-surface
                      text-base
                      text-brand
                      shadow-sm
                      transition-all duration-500

                      group-hover:rotate-[-6deg]
                      group-hover:bg-brand
                      group-hover:text-white
                      group-hover:shadow-md

                      sm:h-11 sm:w-11
                      sm:text-lg
                    "
                        >
                          <Icon />
                        </div>
                      )}

                    </div>

                    {/* Content */}
                    <div className="mt-5 sm:mt-8">

                      <h3
                        className="
                    text-sm
                    font-extrabold
                    leading-tight
                    tracking-[-0.02em]
                    text-ink
                    transition-all duration-300
                    group-hover:translate-x-1
                    group-hover:text-brand

                    sm:text-lg
                  "
                      >
                        {item.title || item.label}
                      </h3>

                      {item.description && (
                        <p
                          className="
                      mt-2
                      text-[11px]
                      leading-5
                      text-inkMuted

                      sm:mt-3
                      sm:text-sm
                      sm:leading-6
                    "
                        >
                          {item.description}
                        </p>
                      )}

                      {item.desc && !item.description && (
                        <p
                          className="
                      mt-2
                      text-[11px]
                      leading-5
                      text-inkMuted

                      sm:mt-3
                      sm:text-sm
                      sm:leading-6
                    "
                        >
                          {item.desc}
                        </p>
                      )}

                    </div>

                    {/* Bottom accent */}
                    <div className="mt-5 flex items-center gap-2 sm:mt-7 sm:gap-3">

                      <span
                        className="
                    h-px
                    w-5
                    bg-brand
                    transition-all duration-500
                    group-hover:w-10

                    sm:w-8
                    sm:group-hover:w-14
                  "
                      />

                      <span
                        className="
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-inkSoft

                    sm:text-[9px]
                    sm:tracking-[0.18em]
                  "
                      >
                        Facility System
                      </span>

                    </div>

                  </div>

                  {/* Arrow */}
                  <span
                    className="
                absolute
                bottom-4
                right-4
                text-base
                text-brand
                opacity-30
                transition-all duration-500

                group-hover:translate-x-1
                group-hover:-translate-y-1
                group-hover:rotate-[25deg]
                group-hover:scale-125
                group-hover:opacity-100

                sm:bottom-6
                sm:right-6
                sm:text-lg
              "
                    aria-hidden="true"
                  >
                    ↗
                  </span>

                </article>
              )
            })}
          </div>

        </div>
      </section>

      {/* Maturity status */}
      <section className="border-t border-line/0 bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">

          <SectionHeading
            eyebrow="Phasing & Status"
            title="Clear, honest phasing."
            description="TEJAYS AGRI distinguishes what is planned from what is future. Nothing is presented as operational unless it truly is."
          />

          {/* Maturity Cards */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-3 lg:gap-6">
            {maturity.map((m, i) => (
              <div
                key={m.stage}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className={`
            group relative overflow-hidden
            rounded-2xl
            border
            border-line/10
            border-t-[3px]
            ${m.tone.split(' ')[1]}
            bg-surface
            p-4

            transition-all duration-500 ease-out
            hover:-translate-y-1
            hover:border-brand/25
            hover:bg-brand/[0.035]
            hover:shadow-[0_20px_45px_rgb(var(--shadow-brand)/0.10)]

            sm:rounded-[1.5rem]
            sm:p-6

            lg:rounded-2xl
            lg:p-7

            ${i === 2 ? 'col-span-2 lg:col-span-1' : ''}
          `}
              >

                {/* Hover glow */}
                <div
                  className="
              pointer-events-none
              absolute -right-16 -top-16
              h-32 w-32
              rounded-full
              bg-brand/10
              blur-2xl
              opacity-0
              transition-opacity duration-500
              group-hover:opacity-100
            "
                  aria-hidden="true"
                />

                {/* Content */}
                <div className="relative z-10">

                  {/* Stage */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  ${m.tone.split(' ')[0]}
                  transition-all duration-300
                  group-hover:tracking-[0.22em]

                  sm:text-[10px]
                  sm:tracking-[0.24em]
                `}
                    >
                      {m.stage}
                    </span>

                    <span
                      className="
                  flex h-7 w-7
                  shrink-0
                  items-center justify-center
                  rounded-full
                  border border-line/10
                  text-xs
                  text-brand
                  opacity-40
                  transition-all duration-500
                  group-hover:rotate-[25deg]
                  group-hover:scale-110
                  group-hover:border-brand/25
                  group-hover:bg-brand
                  group-hover:text-white
                  group-hover:opacity-100

                  sm:h-8 sm:w-8
                "
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="
                mt-4
                font-display
                text-sm
                font-bold
                leading-tight
                tracking-tight
                text-ink
                transition-all duration-300
                group-hover:translate-x-1
                group-hover:text-brand

                sm:mt-5
                sm:text-xl
              "
                  >
                    {m.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                mt-2
                text-[11px]
                leading-5
                text-inkMuted

                sm:mt-3
                sm:text-sm
                sm:leading-relaxed
              "
                  >
                    {m.desc}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-4 flex items-center gap-2 sm:mt-6 sm:gap-3">
                    <span
                      className="
                  h-px
                  w-5
                  bg-brand/60
                  transition-all duration-500
                  group-hover:w-10

                  sm:w-8
                  sm:group-hover:w-14
                "
                    />

                    <span
                      className="
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-inkSoft

                  sm:text-[9px]
                  sm:tracking-[0.18em]
                "
                    >
                      Project Status
                    </span>
                  </div>

                </div>

                {/* Hover shimmer */}
                <div
                  className="
              pointer-events-none
              absolute inset-0
              -translate-x-[130%]
              skew-x-[-18deg]
              bg-gradient-to-r
              from-transparent
              via-brand/[0.06]
              to-transparent
              transition-transform duration-700 ease-out
              group-hover:translate-x-[130%]
            "
                  aria-hidden="true"
                />

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