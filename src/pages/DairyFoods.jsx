import { Link } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight, FiAward, FiTarget } from 'react-icons/fi'

import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import FlowChain from '../components/FlowChain'

const products = [
  { name: 'Milk', desc: 'Fresh, hygienically handled and cold-chained.', status: 'Planned' },
  { name: 'Curd', desc: 'Traditional set curd, cultured daily.', status: 'Planned' },
  { name: 'Greek Yogurt', desc: 'Strained, protein-forward yogurt.', status: 'Planned' },
  { name: 'Paneer', desc: 'Fresh-pressed, high-quality paneer.', status: 'Planned' },
  { name: 'Ghee', desc: 'Clarified butter made the traditional way.', status: 'Planned' },
  { name: 'Butter', desc: 'Creamy table butter from our own milk.', status: 'Planned' },
  { name: 'Lassi', desc: 'Refreshing classic drinks.', status: 'Planned' },
  { name: 'Buttermilk', desc: 'Light, probiotic everyday refreshment.', status: 'Planned' }
]

const processCapabilities = [
  'Cold-chain milk handling',
  'Pasteurisation',
  'Quality laboratories',
  'Food-grade hygienic processing',
  'Automated packaging',
  'Dairy by-product recovery',
  'Cold storage & distribution'
]

export default function DairyFoods() {
  usePageMeta(
    'Dairy & Foods — TEJAYS AGRI',
    'TEJAYS AGRI dairy foods — milk, paneer, ghee, butter, curd, Greek yogurt, lassi and buttermilk, plus mozzarella and cheddar cheese. Planned product range.'
  )

  return (
    <>
      <PageHero
        variant="split"
        image="/images/ecosystem/dairy-products.png"
        imageAlt="TEJAYS AGRI planned dairy product range including milk, yogurt and paneer"
        eyebrow="Tejays Agri / Dairy & Foods"
        title={
          <>
            A modern dairy range,
            <br />
            <span className="text-brand">rooted in tradition.</span>
          </>
        }
        description="Everyday dairy categories built on clean milk and modern processing — with zero-compromise quality and food technology at the core."
        primary={{ label: 'From Farm to Protein', to: '/nutrition' }}
        secondary={{ label: 'Talk to TEJAYS AGRI', to: '/contact' }}
      />

      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="The Value Chain"
            title="From raw milk to finished foods."
            description="Each stage adds quality, value and control — from the milking parlour to the shelf."
          />
          <div
            data-aos="fade-up"
            className="mt-10 rounded-3xl border border-line/10 bg-pageBg p-6 sm:p-10"
          >
            <FlowChain
              steps={['Milk', 'Processing', 'Dairy Products', 'Cheese', 'Whey', 'Nutrition']}
              title="Planned processing flow"
              subtitle="Cheese and whey unlock the protein value chain"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line/10 bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
              <SectionHeading
                eyebrow="Product Range"
                title="A complete dairy range."
                description="Traditional categories, modern standards — produced from our own smart dairy milk."
              />
              <p
                data-aos="fade-up"
                className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-inkSoft"
              >
                Product range — planned · pending official launch
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="divide-y divide-line/10 border-t border-line/10">
                {products.map((p, i) => (
                  <div
                    key={p.name}
                    data-aos="fade-up"
                    data-aos-delay={i * 40}
                    className="group grid cursor-default grid-cols-[auto_1fr_auto] items-center gap-4 py-6 sm:gap-6"
                  >
                    <span className="font-display text-sm font-extrabold tracking-[0.2em] text-[#72B943]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-extrabold tracking-tight text-ink transition-colors duration-300 group-hover:text-brand sm:text-2xl">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm text-inkMuted">{p.desc}</p>
                    </div>
                    <span className="flex items-center gap-3">
                      <span className="rounded-full border border-brand/20 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-brand">
                        {p.status}
                      </span>
                      <FiArrowUpRight className="hidden text-lg text-brand opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 sm:block" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <p
                data-aos="fade-up"
                className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-brand"
              >
                <span className="h-px w-8 bg-current" aria-hidden="true" />
                Processing & Food Technology
              </p>
              <h2
                data-aos="fade-up"
                data-aos-delay="60"
                className="font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-[40px]"
              >
                Processing engineered for purity and yield.
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="120"
                className="mt-6 max-w-xl text-base leading-relaxed text-inkMuted"
              >
                Every litre of milk is handled with cold-chain discipline and
                food-grade technology — protecting quality from parlour to
                pack.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {processCapabilities.map((c) => (
                  <span
                    key={c}
                    data-aos="fade-up"
                    className="rounded-full border border-brand/20 bg-pageBg px-4 py-2 text-[11px] font-semibold tracking-wide text-brand transition-all duration-200 hover:bg-[#075B3A] hover:text-white"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <Link
                to="/nutrition"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#075B3A] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#043D2A]"
              >
                Whey & Protein Value
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="140"
              className="order-1 lg:order-2"
            >
              <div className="overflow-hidden rounded-3xl bg-[#043D2A] p-8 text-[#EDF7F2] sm:p-10">
                <div className="flex items-center gap-3">
                  <FiAward className="text-2xl text-[#E7B84B]" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#E7B84B]">
                    Cheese — Planned
                  </p>
                </div>
                <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Cheese as a strategic value engine.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A9C4B8] sm:text-base">
                  Mozzarella and cheddar built for food-service, retail and
                  processing — and designed to feed the whey value chain that
                  follows.
                </p>
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {['Mozzarella', 'Cheddar', 'Future cheese categories'].map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#EDF7F2] transition-colors duration-300 hover:border-[#E7B84B]/50 hover:text-[#E7B84B]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-6 text-xs text-[#A9C4B8]">
                  <FiTarget className="text-[#E7B84B]" />
                  Food-service · Retail · Processing · Whey recovery
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Dairy & Foods"
        title={
          <>
            Milk in, value on
            <br />
            <span className="text-[#BDE89A]">every shelf.</span>
          </>
        }
        description="Discover how TEJAYS AGRI turns milk into nutrition."
        primary={{ label: 'Explore Nutrition', to: '/nutrition' }}
        secondary={{ label: 'Contact TEJAYS AGRI', to: '/contact' }}
        note="Product range planned · cheese is a planned strategic category"
      />
    </>
  )
}