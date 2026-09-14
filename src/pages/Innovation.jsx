import {
  FiDroplet,
  FiCrosshair,
  FiHeart,
  FiBox,
  FiCpu,
  FiCamera,
  FiSettings,
  FiFeather,
  FiAward,
  FiTarget,
  FiArrowRight
} from 'react-icons/fi'

import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import PremiumCard from '../components/PremiumCard'

const innovationAreas = [
  { icon: FiDroplet, title: 'Dairy Science', desc: 'Milk quality, processing and product chemistry.' },
  { icon: FiCrosshair, title: 'Animal Genetics', desc: 'Data-driven herd improvement research.' },
  { icon: FiHeart, title: 'Nutrition', desc: 'Protein, whey and functional nutrition R&D.' },
  { icon: FiBox, title: 'Feed Science', desc: 'TMR and silage formulation research.' },
  { icon: FiCpu, title: 'Artificial Intelligence', desc: 'Models for health, yield and operations.' },
  { icon: FiCamera, title: 'Computer Vision', desc: 'Vision systems for welfare and behaviour.' },
  { icon: FiSettings, title: 'Automation', desc: 'Robotics for feeding, milking and logistics.' },
  { icon: FiFeather, title: 'Sustainability', desc: 'Circular energy and water systems research.' },
  { icon: FiAward, title: 'Food Technology', desc: 'Dairy category and process innovation.' },
  { icon: FiTarget, title: 'Protein Technology', desc: 'Future ingredient and protein platforms.' }
]

const pipeline = [
  { phase: 'Discover', desc: 'Field data, sensor streams and science questions.' },
  { phase: 'Develop', desc: 'Pilots, trials and prototype systems.' },
  { phase: 'Scale', desc: 'Production-ready systems for the campus.' }
]

export default function Innovation() {
  usePageMeta(
    'Innovation & R&D — TEJAYS AGRI',
    'TEJAYS AGRI innovation — dairy science, genetics, nutrition, feed science, AI, computer vision, automation and protein technology, with a future Innovation Centre.'
  )

  return (
    <>
      <PageHero
        variant="dark"
        eyebrow="Tejays Agri / Innovation & R&D"
        title={
          <>
            R&D with a
            <br />
            <span className="text-[#72B943]">production mindset.</span>
          </>
        }
        description="Innovation is planned across dairy science, food technology and protein science — always connected to real production, not isolated labs."
        primary={{ label: 'Technology', to: '/technology' }}
        secondary={{ label: 'Nutrition & Protein', to: '/nutrition' }}
        meta={['R&D by design', 'Future / planned initiatives', 'Innovation Centre — future concept']}
      />

      <section className="bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Research Themes"
            title="Ten areas of planned research."
            description="Each research theme is chosen for one reason — it makes the ecosystem measurably better."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {innovationAreas.map((a, i) => (
              <PremiumCard key={a.title} icon={a.icon} title={a.title} description={a.desc} aosDelay={i * 40} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <div className="overflow-hidden rounded-3xl bg-[#07100D] p-8 text-[#EDF7F2] sm:p-12">
            <p
              data-aos="fade-up"
              className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#72B943]"
            >
              Future · Concept
            </p>
            <h2
              data-aos="fade-up"
              data-aos-delay="60"
              className="max-w-3xl font-display text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[44px]"
            >
              TEJAYS AGRI Innovation Centre.
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="120"
              className="mt-6 max-w-2xl text-base leading-relaxed text-[#A9C4B8]"
            >
              A future concept for an on-campus centre where dairy science,
              animal genetics, food technology and protein science work side by
              side with production — a place where research is never far from
              the cow.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="180"
              className="mt-8 flex flex-wrap gap-2"
            >
              {['Dairy pilot plant', 'Nutrition lab', 'Animal science', 'Food innovation', 'Agri-tech'].map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/15 px-4 py-2 text-[11px] font-semibold tracking-wide text-[#C9DED5] transition-colors duration-200 hover:border-[#72B943]/50 hover:text-[#72B943]"
                >
                  {c}
                </span>
              ))}
            </div>
            <p
              data-aos="fade-up"
              className="mt-8 border-t border-white/10 pt-6 text-xs font-semibold uppercase tracking-[0.16em] text-inkSoft"
            >
              Innovation Centre — a future / planned concept, not yet established
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line/10 bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="R&D Pipeline"
            title="From discovery to scale."
            description="A planned pipeline that keeps research grounded in production reality."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pipeline.map((p, i) => (
              <div
                key={p.phase}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="group relative rounded-2xl border border-line/10 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_24px_48px_rgb(var(--shadow-brand)/0.1)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-extrabold tracking-[0.2em] text-[#72B943]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {i < pipeline.length - 1 && (
                    <FiArrowRight className="hidden text-brand md:block" />
                  )}
                </div>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-ink">
                  {p.phase}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-inkMuted">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Innovation"
        title={
          <>
            The future of dairy is
            <br />
            <span className="text-[#BDE89A]">researched today.</span>
          </>
        }
        description="Partner with TEJAYS AGRI on the technology and science of tomorrow's dairy."
        primary={{ label: 'Partner With Us', to: '/business' }}
        secondary={{ label: 'Contact TEJAYS AGRI', to: '/contact' }}
        note="Innovation initiatives are future / planned unless explicitly marked operational"
      />
    </>
  )
}