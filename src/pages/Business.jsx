import {
  FiTruck,
  FiPackage,
  FiCoffee,
  FiDroplet,
  FiPhone,
  FiUsers,
  FiShield,
  FiSend,
  FiLink,
  FiCheckCircle,
  FiArrowRight
} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import PremiumCard from '../components/PremiumCard'
import FeatureList from '../components/FeatureList'

const offerings = [
  {
    icon: FiTruck,
    title: 'Raw Milk Supply',
    desc: 'Stable, planned, quality-assured raw milk volumes for dairy businesses.',
    tag: 'Planned',
    to: '/smart-dairy'
  },
  {
    icon: FiPackage,
    title: 'Dairy Foods',
    desc: 'Paneer, ghee, curd, yogurt and the traditional range for retail and food-service.',
    tag: 'Planned',
    to: '/dairy-foods'
  },
  {
    icon: FiCoffee,
    title: 'Cheese',
    desc: 'Mozzarella and cheddar built for food-service and retail formats.',
    tag: 'Planned',
    to: '/dairy-foods'
  },
  {
    icon: FiDroplet,
    title: 'Whey & Protein',
    desc: 'Whey streams and future protein ingredients for food and nutrition brands.',
    tag: 'Future',
    to: '/nutrition'
  }
]

const partners = [
  { icon: FiUsers, title: 'Partner Farmers', desc: 'Long-term, transparent supply relationships built on predictable demand and fair terms.' },
  { icon: FiShield, title: 'Vendors & Suppliers', desc: 'Feed, genetics, machinery, logistics and services — registered through a transparent process.' },
  { icon: FiLink, title: 'Technology Partners', desc: 'AI, robotics, dairy-tech and agri-tech companies engaged for the innovation roadmap.' },
  { icon: FiSend, title: 'Distributors & Retail', desc: 'Category launches for dairy products, cheese and nutrition across formats.' }
]

export default function Business() {
  usePageMeta(
    'Business — TEJAYS AGRI',
    'Partner with TEJAYS AGRI — raw milk supply, dairy foods, cheese, whey and protein for B2B customers, vendor registration and technology partnerships.'
  )

  return (
    <>
      <PageHero
        variant="full"
        image="/images/tejays-agri-hero2.jpg"
        imageAlt="TEJAYS AGRI business and partnership landscape"
        eyebrow="Tejays Agri / Business"
        title={
          <>
            Built for partners.
            <br />
            <span className="text-[#72B943]">Ready for the long term.</span>
          </>
        }
        description="TEJAYS AGRI is designed around dependable supply, transparent relationships and products that earn trust — from farm to business to brand."
        primary={{ label: 'Become a Partner', to: '/contact' }}
        secondary={{ label: 'Products', to: '/dairy-foods' }}
        meta={['B2B & Partnerships', 'Vendor · Tech · Farmers', 'Proposed ecosystem']}
      />

      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="What We Offer"
            title="For businesses that value supply security."
            description="Everything TEJAYS AGRI sells is backed by the ecosystem behind it — genetics, feed, dairy and processing under one roof."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((o, i) => (
              <PremiumCard
                key={o.title}
                icon={o.icon}
                title={o.title}
                description={o.desc}
                tag={o.tag}
                to={o.to}
                aosDelay={i * 60}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line/10 bg-[#043D2A] text-[#EDF7F2]">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p
                data-aos="fade-up"
                className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#72B943]"
              >
                <span className="h-px w-8 bg-current" aria-hidden="true" />
                Partner First
              </p>
              <h2
                data-aos="fade-up"
                data-aos-delay="60"
                className="font-display text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[40px]"
              >
                Relationships built
                <br />
                <span className="text-[#72B943]">on the ecosystem.</span>
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="120"
                className="mt-6 max-w-xl text-base leading-relaxed text-[#A9C4B8]"
              >
                Farmers, vendors, technology partners, distributors and brands
                all connect to one integrated system — with clear roles, clear
                standards and a shared interest in quality.
              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="160"
                className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#72B943]"
              >
                Partnerships planned / proposed for the integrated campus
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-4">
                {partners.map((p, i) => (
                  <div
                    key={p.title}
                    data-aos="fade-up"
                    data-aos-delay={i * 80}
                    className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-[#72B943]/40 hover:bg-white/[0.07]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#72B943]/15 text-[#72B943] transition-colors duration-300 group-hover:bg-[#72B943] group-hover:text-[#07100D]">
                      <p.icon className="text-2xl" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-[#EDF7F2]">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#A9C4B8]">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="How We Engage"
                title="Simple to start. Structured to last."
                description="Every partnership starts with a conversation and follows a published, fair process."
              />
              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#075B3A] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#043D2A]"
              >
                Start the Conversation
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <FeatureList
                items={[
                  { icon: FiPhone, title: '1 · Enquiry', desc: 'Share your business profile and requirement via our contact page.' },
                  { icon: FiShield, title: '2 · Qualification', desc: 'A transparent review of fit, volume and standards.' },
                  { icon: FiCheckCircle, title: '3 · Partnership', desc: 'Agreed terms, published standards and a dedicated point of contact.' },
                  { icon: FiSend, title: '4 · Scale Together', desc: 'Grow the relationship as the integrated campus comes online.' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Business With TEJAYS AGRI"
        title={
          <>
            Partner with the
            <br />
            <span className="text-[#BDE89A]">ecosystem, not a factory.</span>
          </>
        }
        description="Tell us what you need. We will tell you how TEJAYS AGRI can supply it for the long term."
        primary={{ label: 'Contact TEJAYS AGRI', to: '/contact' }}
        secondary={{ label: 'Visit the Campus', to: '/campus' }}
        note="Commercial offerings planned / proposed unless explicitly marked operational"
      />
    </>
  )
}