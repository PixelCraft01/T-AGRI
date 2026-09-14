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
  { icon: FiCrosshair, title: 'Genetics', desc: 'Selecting for long-term herd quality and performance.' },
  { icon: FiActivity, title: 'Reproductive management', desc: 'Breeding programmes managed with science and records.' },
  { icon: FiHeart, title: 'Animal health', desc: 'Preventive health and welfare at the centre of care.' },
  { icon: FiBarChart2, title: 'Herd performance', desc: 'Yield, fertility and health tracked as one dataset.' },
  { icon: FiTag, title: 'Individual records', desc: 'Every animal, every event — one lifelong record.' },
  { icon: FiShield, title: 'Responsible development', desc: 'Welfare-first dairy growth without overpromised outcomes.' }
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
        meta={['Planned breeding programme', 'Welfare by design', 'No overpromised outcomes']}
      >
        <StatStrip items={herdStats} tone="dark" />
      </PageHero>

      <section className="bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Herd Development"
            title="Six pillars of herd excellence."
            description="A planned framework across genetics, reproduction, health and performance — each pillar reinforcing the next."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((f, i) => (
              <PremiumCard key={f.title} icon={f.icon} title={f.title} description={f.desc} aosDelay={i * 50} />
            ))}
          </div>
        </div>
      </section>

      <SplitSection
        image="/images/dery (4).jpg"
        imageAlt="Well-monitored herd concept at TEJAYS AGRI"
        imagePosition="left"
        imageRatio="aspect-[4/5]"
        className="border-t border-line/10 bg-surface"
        floatCard={{ note: 'Welfare', value: 'By design', label: 'health-first herd development' }}
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
        <div className="mt-8 flex flex-wrap gap-2.5">
          {['Preventive care protocol', 'Welfare audits', 'Nutrition-matched breeding', 'Lifelong animal records'].map((c) => (
            <span
              key={c}
              className="rounded-full border border-brand/20 bg-pageBg px-4 py-2 text-[11px] font-semibold tracking-wide text-brand"
            >
              {c}
            </span>
          ))}
        </div>
      </SplitSection>

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