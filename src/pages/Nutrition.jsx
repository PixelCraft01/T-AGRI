import { FiActivity, FiArrowRight, FiHeart } from 'react-icons/fi'

import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import PremiumCard from '../components/PremiumCard'
import SplitSection from '../components/SplitSection'
import FlowChain from '../components/FlowChain'

const wheyChain = [
  { step: '01', title: 'Cheese Production', note: 'The starting point of whey value.' },
  { step: '02', title: 'Whey Recovery', note: 'Capturing the co-product of cheesemaking.' },
  { step: '03', title: 'Protein Ingredients', note: 'Concentrating milk & whey protein.' },
  { step: '04', title: 'Nutrition', note: 'Premium, science-led nutrition products.' }
]

const futureProducts = [
  { title: 'WPC', desc: 'Whey protein concentrate — a future ingredient ambition.' },
  { title: 'WPI', desc: 'Whey protein isolate — high-purity, future ambition.' },
  { title: 'Milk Proteins', desc: 'Whole-milk protein solutions for food formulation.' },
  { title: 'Casein', desc: 'Functional milk proteins for dairy and dietary products.' },
  { title: 'High-Protein Dairy', desc: 'Protein-forward yogurt, drinks and snacks.' },
  { title: 'Protein Beverages', desc: 'Flavoured and functional protein drinks.' }
]

export default function Nutrition() {
  usePageMeta(
    'Nutrition & Whey — TEJAYS AGRI',
    'TEJAYS AGRI nutrition — from farm to protein. Cheese production, whey recovery, protein ingredients and nutrition, with future ambitions in WPC, WPI, milk proteins and sports nutrition.'
  )

  return (
    <>
      {/* HERO */}
      <PageHero
        variant="full"
        image="/images/ecosystem/whey.png"
        imageAlt="Whey recovery and protein nutrition concept"
        eyebrow="Tejays Agri / Nutrition & Whey"
        title={
          <>
            From farm
            <br />
            to <span className="text-[#E7B84B]">protein.</span>
          </>
        }
        description="Every litre of milk should work harder. TEJAYS AGRI is designed so cheese leads to whey, whey leads to protein, and protein leads to premium nutrition."
        primary={{ label: 'Dairy & Foods', to: '/dairy-foods' }}
        secondary={{ label: 'Science & Innovation', to: '/innovation' }}
        meta={[
          'Cheese → Whey → Protein',
          'Future / planned ambitions',
          'No current manufacturing capability'
        ]}
      />

      {/* PROTEIN PIPELINE */}
      <section className="bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="The Protein Pipeline"
            title="A scientific pipeline, not a by-product."
            description="Whey is one of food's most valuable co-products — and the foundation of an entire nutrition value chain."
          />

          <div
            data-aos="fade-up"
            className="mt-8 overflow-hidden rounded-3xl border border-line/10 bg-surface p-5 sm:mt-10 sm:p-10"
          >
            <FlowChain
              steps={[
                'Cheese Production',
                'Whey Recovery',
                'Protein Ingredients',
                'Nutrition'
              ]}
              title="Future whey value chain"
              subtitle="Planned · future capability"
              accent="gold"
            />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {wheyChain.map((w, i) => (
              <div
                key={w.step}
                data-aos="fade-up"
                data-aos-delay={i * 90}
                className="group relative overflow-hidden rounded-2xl border border-line/10 bg-surface p-4 shadow-card transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand/30 hover:bg-tint/30 hover:shadow-[0_18px_40px_rgb(var(--shadow-brand)/0.10)] sm:p-5 lg:p-6"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-display text-xs font-extrabold tracking-[0.2em] text-[#72B943]/70 sm:text-sm">
                    {w.step}
                  </span>

                  {i < wheyChain.length - 1 && (
                    <FiArrowRight className="hidden text-brand transition-transform duration-300 group-hover:translate-x-1 md:block" />
                  )}
                </div>

                <h3 className="relative z-10 mt-4 font-display text-sm font-extrabold leading-tight tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-base lg:text-lg">
                  {w.title}
                </h3>

                <p className="relative z-10 mt-2 text-[10px] leading-4 text-inkMuted sm:text-xs sm:leading-5">
                  {w.note}
                </p>

                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand transition-all duration-500 group-hover:w-full"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE PRODUCTS */}
      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Future Product Directions"
            title="The protein shelf of tomorrow."
            description="Future ambitions across dairy and whey protein ingredients — clearly marked as future, not current."
          />

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            {futureProducts.map((f, i) => (
              <PremiumCard
                key={f.title}
                icon={FiHeart}
                title={f.title}
                description={f.desc}
                tag="Future"
                aosDelay={i * 50}
              />
            ))}

            <PremiumCard
              icon={FiActivity}
              title="Sports Nutrition"
              description="Recovery and performance nutrition built on dairy protein."
              tag="Future"
              aosDelay={300}
            />
          </div>

          <p
            data-aos="fade-up"
            className="mt-7 text-[10px] font-semibold uppercase leading-5 tracking-[0.14em] text-inkSoft sm:mt-8 sm:text-xs"
          >
            TEJAYS AGRI does not currently manufacture WPC, WPI or related
            ingredients — these are long-term ambitions
          </p>
        </div>
      </section>

      {/* SCIENCE */}
      <SplitSection
        image="/images/ecosystem/whey_2.jpg"
        imageAlt="Whey recovery and protein ingredient concept"
        imagePosition="left"
        imageRatio="aspect-[4/5]"
        tone="dark"
        className="border-t border-line/10"
      >
        <SectionHeading
          tone="dark"
          eyebrow="The Science"
          title={
            <>
              Why dairy protein matters
              <br />
              <span className="text-[#72B943]">to modern food.</span>
            </>
          }
          description="Dairy delivers a complete protein profile and a versatile functional toolkit — used across food, beverage, sports and clinical nutrition. TEJAYS AGRI intends to build on this foundation over time."
        />

        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
          {[
            { k: 'Casein fraction', v: 'Slow-release, structure and satiety' },
            { k: 'Whey fraction', v: 'Fast-release, high bioactivity' },
            { k: 'Functional uses', v: 'Formulation, beverages, sports nutrition' },
            { k: 'Future positioning', v: 'Premium, traceable, farm-origin' }
          ].map((row) => (
            <div
              key={row.k}
              className="group bg-[#07100D] p-4 transition-all duration-300 hover:bg-[#0E1915] sm:p-5"
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#72B943] sm:text-[10px] sm:tracking-[0.2em]">
                {row.k}
              </p>

              <p className="mt-1.5 text-[11px] leading-4 text-[#C9DED5] sm:text-sm sm:leading-5">
                {row.v}
              </p>
            </div>
          ))}
        </div>
      </SplitSection>

      {/* CTA */}
      <CTASection
        eyebrow="Nutrition"
        title={
          <>
            The next chapter of
            <br />
            <span className="text-[#72B943]">milk.</span>
          </>
        }
        description="Talk to TEJAYS AGRI about future nutrition, protein and B2B ingredient opportunities."
        primary={{ label: 'Business Enquiry', to: '/business' }}
        secondary={{ label: 'Contact TEJAYS AGRI', to: '/contact' }}
        note="Future / planned capability — communicated transparently"
      />
    </>
  )
}