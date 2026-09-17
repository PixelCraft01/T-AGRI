import { Link } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight, FiAward, FiTarget } from 'react-icons/fi'

import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import FlowChain from '../components/FlowChain'

const products = [
  { name: 'Milk', desc: 'Fresh, hygienically handled and cold-chained.', status: 'Planned', image: `${import.meta.env.BASE_URL}images/products/milk.jpg` },
  { name: 'Curd', desc: 'Traditional set curd, cultured daily.', status: 'Planned', image: `${import.meta.env.BASE_URL}images/products/curd.jpg` },
  { name: 'Greek Yogurt', desc: 'Strained, protein-forward yogurt.', status: 'Planned', image: `${import.meta.env.BASE_URL}images/products/greek-yogurt.jpg` },
  { name: 'Paneer', desc: 'Fresh-pressed, high-quality paneer.', status: 'Planned', image: `${import.meta.env.BASE_URL}images/products/paneer.jpg` },
  { name: 'Ghee', desc: 'Clarified butter made the traditional way.', status: 'Planned', image: `${import.meta.env.BASE_URL}images/products/ghee.jpg` },
  { name: 'Butter', desc: 'Creamy table butter from our own milk.', status: 'Planned', image: `${import.meta.env.BASE_URL}images/products/butter.jpg` },
  { name: 'Lassi', desc: 'Refreshing classic drinks.', status: 'Planned', image: `${import.meta.env.BASE_URL}images/products/lassi.jpg` },
  { name: 'Buttermilk', desc: 'Light, probiotic everyday refreshment.', status: 'Planned', image: `${import.meta.env.BASE_URL}images/products/Buttermilk_1.jpg` }
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
      {/* HERO */}
      <PageHero
        variant="full"
        image="/images/ecosystem/dairy-products.png"
        imageAlt="Whey recovery and protein nutrition concept"
        eyebrow="Tejays Agri / Dairy & Foods"
        title={
          <>
            A modern dairy range,
            <br />
            <span className="text-[#72B943]">rooted in tradition.</span>
          </>
        }
        description="Everyday dairy categories built on clean milk and modern processing — with zero-compromise quality and food technology at the core."
        primary={{ label: 'From Farm to Protein', to: '/nutrition' }}
        secondary={{ label: 'Talk to TEJAYS AGRI', to: '/contact' }}
      />

      {/* VALUE CHAIN */}
      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <SectionHeading
            eyebrow="The Value Chain"
            title="From raw milk to finished foods."
            description="Each stage adds quality, value and control — from the milking parlour to the shelf."
          />

          <div
            data-aos="fade-up"
            className="group mt-8 overflow-hidden rounded-2xl border border-line/10 bg-pageBg p-4 transition-all duration-500 hover:border-brand/20 hover:shadow-[0_18px_40px_rgb(var(--shadow-brand)/0.06)] sm:mt-10 sm:rounded-3xl sm:p-7 lg:p-9"
          >
            <FlowChain
              steps={['Milk', 'Processing', 'Dairy Products', 'Cheese', 'Whey', 'Nutrition']}
              title="Planned processing flow"
              subtitle="Cheese and whey unlock the protein value chain"
            />
          </div>
        </div>
      </section>

      {/* PRODUCT RANGE */}
      <section className="border-t border-line/10 bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            {/* LEFT */}
            <div className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
              <SectionHeading
                eyebrow="Product Range"
                title="A complete dairy range."
                description="Traditional categories, modern standards — produced from our own smart dairy milk."
              />

              <p
                data-aos="fade-up"
                className="mt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-inkSoft sm:mt-6 sm:text-xs"
              >
                Product range — planned · pending official launch
              </p>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
                {products.map((product, index) => (
                  <div
                    key={product.name}
                    data-aos="fade-up"
                    data-aos-delay={index * 70}
                    className="group relative min-h-[210px] overflow-hidden rounded-3xl border border-line/10 bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_20px_55px_rgba(0,0,0,0.10)] sm:min-h-[250px]"
                  >
                    {/* Product Background Image */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />

                    {/* Content */}
                    <div className="relative z-10 flex h-full min-h-[210px] flex-col justify-between p-5 sm:min-h-[250px] sm:p-7">

                      {/* Top */}
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-display text-xs font-extrabold tracking-[0.2em] text-white/75 sm:text-sm">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <span className="rounded-full border border-white/30 bg-black/15 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm sm:px-3 sm:text-[9px]">
                          {product.status}
                        </span>
                      </div>

                      {/* Bottom Content */}
                      <div>
                        <h3 className="font-display text-sm font-extrabold leading-tight tracking-tight text-white sm:text-xl">
                          {product.name}
                        </h3>

                        <p className="mt-2 max-w-[90%] text-[10px] leading-4 text-white/80 sm:text-xs sm:leading-5">
                          {product.desc}
                        </p>

                        <div className="mt-3 h-px w-7 bg-white/60 transition-all duration-500 group-hover:w-14" />
                      </div>

                      {/* Arrow */}
                      <div className="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/10 text-sm text-white backdrop-blur-sm transition-all duration-300 group-hover:border-white/60 sm:bottom-7 sm:right-7 sm:h-9 sm:w-9">
                        ↗
                      </div>
                    </div>

                    {/* Background Detail */}
                    <div
                      className="pointer-events-none absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-brand/20 blur-2xl transition-transform duration-500 group-hover:scale-[1.5]"
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSING */}
      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* LEFT */}
            <div className="order-2 lg:order-1">
              <p
                data-aos="fade-up"
                className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.26em] text-brand sm:mb-5 sm:text-[11px]"
              >
                <span className="h-px w-7 bg-current sm:w-8" aria-hidden="true" />
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
                className="mt-5 max-w-xl text-sm leading-relaxed text-inkMuted sm:mt-6 sm:text-base"
              >
                Every litre of milk is handled with cold-chain discipline and
                food-grade technology — protecting quality from parlour to
                pack.
              </p>

              {/* Capabilities */}
              <div className="mt-7 flex flex-wrap gap-2 sm:mt-8">
                {processCapabilities.map((c, i) => (
                  <span
                    key={c}
                    data-aos="fade-up"
                    data-aos-delay={i * 35}
                    className="rounded-full border border-brand/15 bg-pageBg px-3 py-1.5 text-[10px] font-semibold tracking-wide text-brand transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/35 hover:bg-[#075B3A] hover:text-white hover:shadow-[0_8px_18px_rgb(var(--shadow-brand)/0.10)] sm:px-3.5 sm:py-2 sm:text-[11px]"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <Link
                to="/nutrition"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#075B3A] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#043D2A] hover:shadow-[0_12px_28px_rgba(7,91,58,0.20)] sm:mt-9 sm:px-6 sm:py-3.5 sm:text-[11px] sm:tracking-[0.18em]"
              >
                Whey & Protein Value
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* RIGHT / CHEESE */}
            <div
              data-aos="fade-up"
              data-aos-delay="140"
              className="order-1 lg:order-2"
            >
              <div className="group relative overflow-hidden rounded-2xl bg-[#043D2A] p-6 text-[#EDF7F2] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(4,61,42,0.18)] sm:p-8">
                {/* Glow */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#72B943]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    <FiAward className="text-xl text-[#E7B84B] sm:text-2xl" />

                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#E7B84B] sm:text-[11px] sm:tracking-[0.28em]">
                      Cheese — Planned
                    </p>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-extrabold tracking-tight sm:text-3xl">
                    Cheese as a strategic value engine.
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-[#A9C4B8] sm:text-base">
                    Mozzarella and cheddar built for food-service, retail and
                    processing — and designed to feed the whey value chain that
                    follows.
                  </p>

                  {/* Cheese categories */}
                  <div className="mt-6 flex flex-wrap gap-2 sm:mt-7 sm:gap-2.5">
                    {['Mozzarella', 'Cheddar', 'Future cheese categories'].map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.10em] text-[#EDF7F2] transition-all duration-300 hover:border-[#E7B84B]/50 hover:bg-[#E7B84B]/10 hover:text-[#E7B84B] sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.12em]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-6 flex items-start gap-2 border-t border-white/10 pt-5 text-[10px] leading-5 text-[#A9C4B8] sm:mt-8 sm:pt-6 sm:text-xs">
                    <FiTarget className="mt-0.5 shrink-0 text-[#E7B84B]" />
                    <span>
                      Food-service · Retail · Processing · Whey recovery
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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