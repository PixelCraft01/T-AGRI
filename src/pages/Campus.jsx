import {
  FiMapPin,
  FiHome,
  FiPackage,
  FiFeather,
  FiLayers,
  FiArrowRight,
  FiArrowUpRight
} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import StatStrip from '../components/StatStrip'
import { assetPath } from '../utils/assetPath'

const zones = [
  {
    icon: FiHome,
    title: 'Core Dairy',
    desc: 'Climate-controlled barns and milking parlours.'
  },
  {
    icon: FiPackage,
    title: 'Processing & Foods',
    desc: 'Milk processing and dairy product manufacture.'
  },
  {
    icon: FiFeather,
    title: 'Agriculture & Green',
    desc: 'Fodder, crops, water and renewable energy.'
  },
  {
    icon: FiLayers,
    title: 'Innovation & Support',
    desc: 'R&D, nutrition and campus operations.'
  }
]

const principles = [
  {
    title: 'Circular',
    desc: 'Energy, water and nutrients loop within the campus.'
  },
  {
    title: 'Technology-first',
    desc: 'Data and automation designed into every zone.'
  },
  {
    title: 'Future-ready',
    desc: 'Capacity planned in phases, from Phase-I onwards.'
  },
  {
    title: 'Community',
    desc: 'Built around partner farmers and local value.'
  },
  {
    title: 'Quality',
    desc: 'Hygiene, welfare and standards at the core.'
  }
]

export default function Campus() {
  usePageMeta(
    'Campus — TEJAYS AGRI',
    'The TEJAYS AGRI integrated campus — a masterplan designed end-to-end, from core dairy and processing to agriculture, water, renewable energy and innovation.'
  )

  return (
    <>
      {/* HERO */}
      <PageHero
        variant="full"
        image="images/hero-campus_1.jpg"
        imageAlt="TEJAYS AGRI integrated campus masterplan"
        eyebrow="Tejays Agri / Campus"
        title={
          <>
            One campus,
            <br />
            <span className="text-[#72B943]">
              the whole ecosystem.
            </span>
          </>
        }
        description="The TEJAYS AGRI masterplan brings genetics, feed, dairy, processing and nutrition together on one site — designed end-to-end and phased for the future."
        primary={{
          label: 'See the Ecosystem',
          to: '/about'
        }}
        secondary={{
          label: 'Contact TEJAYS AGRI',
          to: '/contact'
        }}
        meta={[
          'Integrated campus',
          'Genetics · Dairy · Processing',
          'Designed for phased growth'
        ]}
      />

      {/* MASTERPLAN ZONES */}
      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">

          <SectionHeading
            eyebrow="Masterplan Zones"
            title="Four zones, one operating system."
            description="Each zone is designed to feed the next — connecting agriculture, dairy, processing and innovation."
          />

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {zones.map((z, i) => (
              <div
                key={z.title}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                className="group relative overflow-hidden rounded-2xl border border-line/10 bg-pageBg p-4 transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.015] hover:border-brand/35 hover:bg-brand/[0.035] hover:shadow-[0_20px_45px_rgb(var(--shadow-brand)/0.12)] sm:p-6 lg:p-7"
              >
                {/* Glow */}
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-brand/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-brand/10 bg-brand/[0.05] text-brand transition-all duration-500 group-hover:rotate-[-6deg] group-hover:border-brand/25 group-hover:bg-brand group-hover:text-white group-hover:shadow-md sm:h-10 sm:w-10">
                      <z.icon className="text-lg transition-transform duration-500 group-hover:scale-110 sm:text-xl" />
                    </span>

                    <FiArrowUpRight
                      className="text-brand opacity-30 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-5 font-display text-sm font-bold leading-tight tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-lg">
                    {z.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-inkMuted sm:text-sm sm:leading-6">
                    {z.desc}
                  </p>

                  <div
                    className="mt-5 h-px w-0 bg-brand transition-all duration-500 group-hover:w-full"
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MASTERPLAN OVERVIEW */}
      <section className="border-t border-line/10 bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">

          <div className="group relative overflow-hidden rounded-[32px] bg-[#07100D] shadow-[0_25px_70px_rgb(var(--shadow-ink)/0.12)]">
            <div className="relative overflow-hidden">
              <img
                src={assetPath('/images/masterplan-campus.jpg')}
                alt="TEJAYS AGRI campus masterplan overview"
                loading="lazy"
                className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07100D]/75 via-[#07100D]/10 to-transparent"
                aria-hidden="true"
              />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#72B943] sm:text-[10px]">
                  Campus Masterplan
                </p>

                <p className="mt-2 max-w-xl font-display text-lg font-extrabold tracking-tight text-white sm:text-2xl">
                  Designed end-to-end. Phased for the future.
                </p>
              </div>
            </div>
          </div>

          {/* DESIGN PRINCIPLES */}
          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Design Principles"
                title="What shapes every square metre."
                description="Five principles guide the masterplan — from the first barn to the last innovation lab."
              />

              <p className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand sm:text-[11px]">
                <FiMapPin className="text-base" />
                Integrated campus — planned / proposed
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {principles.map((p, i) => (
                  <div
                    key={p.title}
                    data-aos="fade-up"
                    data-aos-delay={i * 60}
                    className={`group relative overflow-hidden rounded-2xl border border-line/10 bg-surface p-4 transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.015] hover:border-brand/30 hover:bg-brand/[0.035] hover:shadow-[0_18px_40px_rgb(var(--shadow-brand)/0.10)] sm:p-6 ${i === 4 ? 'col-span-2 lg:col-span-1' : ''
                      }`}
                  >
                    <div
                      className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-display text-[10px] font-extrabold tracking-[0.2em] text-[#72B943] sm:text-xs">
                          {String(i + 1).padStart(2, '0')}
                        </span>

                        <FiArrowUpRight
                          className="text-brand opacity-30 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </div>

                      <h3 className="mt-4 font-display text-sm font-bold leading-tight tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-lg">
                        {p.title}
                      </h3>

                      <p className="mt-2 text-[11px] leading-5 text-inkMuted sm:text-sm sm:leading-6">
                        {p.desc}
                      </p>

                      <div
                        className="mt-5 h-px w-0 bg-brand transition-all duration-500 group-hover:w-full"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHASED ROADMAP */}
      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Phased Roadmap"
                title="Phase-I first. Whole-system vision."
                description="The campus is planned to come alive in phases — with a Phase-I 2,000-cow smart dairy as the anchor, and the full ecosystem unfolding around it."
              />

              <Link
                to="/smart-dairy"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#075B3A] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#043D2A] hover:shadow-[0_12px_30px_rgb(var(--shadow-brand)/0.20)] sm:px-6 sm:py-3.5 sm:text-[11px]"
              >
                Start with Smart Dairy

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <StatStrip
                columns={2}
                items={[
                  {
                    value: '2,000',
                    label: 'Phase-I herd',
                    note: 'Planned anchor facility'
                  },
                  {
                    value: '4',
                    label: 'Masterplan zones',
                    note: 'Integrated and connected'
                  },
                  {
                    value: '09',
                    label: 'Ecosystem stages',
                    note: 'Genetics to nutrition'
                  },
                  {
                    value: 'Future',
                    label: 'Innovation Centre',
                    note: 'Concept stage'
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        eyebrow="Campus"
        title={
          <>
            Come see what is
            <br />
            <span className="text-[#BDE89A]">being designed.</span>
          </>
        }
        description="The masterplan is the promise — the ecosystem is the execution."
        primary={{ label: 'Talk With Us', to: '/contact' }}
        secondary={{ label: 'Explore Innovation', to: '/innovation' }}
        note="Campus facilities planned / proposed for the integrated campus"
      />
    </>
  )
}