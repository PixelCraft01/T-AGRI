import {
  FiCpu,
  FiWifi,
  FiRadio,
  FiWatch,
  FiActivity,
  FiCamera,
  FiZap,
  FiDatabase,
  FiUsers,
  FiBox,
  FiDroplet,
  FiSettings,
  FiRefreshCcw,
  FiBarChart2,
  FiTruck,
  FiHeart,
  FiArrowRight
} from 'react-icons/fi'

const sensingLayers = [
  {
    icon: FiCpu,
    title: 'Artificial Intelligence',
    desc: 'Pattern recognition across health, behaviour and yield.'
  },
  {
    icon: FiWifi,
    title: 'IoT',
    desc: 'A connected fabric of devices across the entire campus.'
  },
  {
    icon: FiRadio,
    title: 'RFID',
    desc: 'Every animal identified, tracked and managed as an individual.'
  },
  {
    icon: FiWatch,
    title: 'Wearables',
    desc: 'Rumination, activity and health on the animal, in real time.'
  },
  {
    icon: FiActivity,
    title: 'Health & Yield Sensors',
    desc: 'Continuous signals from the animal and the milk line.'
  },
  {
    icon: FiCamera,
    title: 'Computer Vision',
    desc: 'Cameras reading behaviour, movement and body condition.'
  },
  {
    icon: FiZap,
    title: 'Automation',
    desc: 'Feeding, milking and collection working automatically.'
  },
  {
    icon: FiDatabase,
    title: 'Data Intelligence',
    desc: 'One dataset across herd, feed, milk and energy.'
  }
]

const monitorCapabilities = [
  { icon: FiActivity, label: 'Rumination monitoring' },
  { icon: FiActivity, label: 'Activity monitoring' },
  { icon: FiCpu, label: 'Heat detection' },
  { icon: FiHeart, label: 'Health monitoring' },
  { icon: FiDroplet, label: 'Milk-yield monitoring' },
  { icon: FiSettings, label: 'Environment sensors' },
  { icon: FiCamera, label: 'Lameness detection' },
  { icon: FiCamera, label: 'Body condition scoring' },
  { icon: FiCamera, label: 'Feeding behaviour' },
  { icon: FiActivity, label: 'Movement analysis' },
  { icon: FiZap, label: 'Calving alerts' },
  { icon: FiHeart, label: 'Welfare monitoring' }
]

const commandDomains = [
  {
    icon: FiUsers,
    label: 'Herd',
    desc: 'Animal identity, health, behaviour and performance.'
  },
  {
    icon: FiBox,
    label: 'Feed',
    desc: 'Nutrition planning, intake and feeding operations.'
  },
  {
    icon: FiDroplet,
    label: 'Milk',
    desc: 'Yield, quality, collection and milk-line signals.'
  },
  {
    icon: FiSettings,
    label: 'Processing',
    desc: 'Processing workflows, production and quality.'
  },
  {
    icon: FiZap,
    label: 'Energy',
    desc: 'Power usage, equipment demand and efficiency.'
  },
  {
    icon: FiRefreshCcw,
    label: 'Water',
    desc: 'Water use, availability and operational monitoring.'
  },
  {
    icon: FiBarChart2,
    label: 'Inventory',
    desc: 'Stock visibility, materials and supply planning.'
  },
  {
    icon: FiTruck,
    label: 'Logistics',
    desc: 'Movement, dispatch, distribution and delivery flow.'
  }
]

const futureArchitecture = [
  'E-commerce',
  'Milk subscriptions',
  'Protein subscriptions',
  'Order tracking',
  'Farmer portal',
  'Distributor portal',
  'B2B ordering',
  'Genetics portal',
  'Customer traceability',
  'Mobile app',
  'Online payments',
  'AI support / chat',
  'International / export website'
]

function Eyebrow({ children, dark = false }) {
  return (
    <p
      className={`text-[11px] font-bold uppercase tracking-[0.24em] ${dark ? 'text-[#72B943]' : 'text-brand'
        }`}
    >
      {children}
    </p>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false
}) {
  return (
    <div
      className="max-w-3xl"
      data-aos="fade-up"
    >
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>

      <h2
        className={`mt-3 font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-4xl lg:text-5xl ${dark ? 'text-white' : 'text-ink'
          }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${dark ? 'text-[#A9C4B8]' : 'text-inkMuted'
            }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

function PageButton({
  to,
  children,
  secondary = false
}) {
  return (
    <a
      href={`#${to}`}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${secondary
        ? 'border border-white/20 bg-white/5 text-white hover:bg-white/10'
        : 'bg-[#72B943] text-[#07100D] hover:bg-[#8aca61]'
        }`}
    >
      {children}
      <FiArrowRight className="text-base" />
    </a>
  )
}

export default function Technology() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#07100D] text-white">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(114,185,67,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(114,185,67,0.08) 1px, transparent 1px)',
            backgroundSize: '56px 56px'
          }}
        />

        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />

        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#72B943]/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1400px] px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-40 lg:px-10 lg:pb-32">
          <div
            className="max-w-5xl"
            data-aos="fade-up"
          >
            <Eyebrow dark>
              Tejays Agri / Technology
            </Eyebrow>

            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
              Sensing the herd.
              <br />
              <span className="text-[#72B943]">
                Learning the system.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-[#C5D6CE] sm:text-xl sm:leading-8">
              A planned technology ecosystem connecting every layer of
              the dairy — from sensors on the animal to an AI command
              centre that sees the whole operation.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PageButton to="/smart-dairy">
                Smart Dairy
              </PageButton>

              <PageButton
                to="/business"
                secondary
              >
                Build With Us
              </PageButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#A9C4B8]">
              <span>AI · IoT · RFID</span>
              <span>Computer vision</span>
              <span>Planned / proposed stack</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SENSING LAYERS
      ===================================================== */}

      <section className="bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">

          <SectionHeading
            eyebrow="Sensing Layers"
            title="Technology at every layer."
            description="From the collar on the animal to the dashboard in the command centre — each layer feeds the next."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sensingLayers.map((item, index) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  className="group rounded-3xl border border-line/10 bg-surface p-6 shadow-[0_16px_45px_rgb(var(--shadow-ink)/0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_24px_60px_rgb(var(--shadow-ink)/0.1)] sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-xl text-brand transition-all duration-300 group-hover:bg-[#075B3A] group-hover:text-white">
                    <Icon />
                  </div>

                  <h3 className="mt-6 text-base font-extrabold text-ink">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-inkMuted">
                    {item.desc}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          MONITORING
      ===================================================== */}

      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Monitoring"
                title="What the system watches."
                description="A planned monitoring surface across animal health, behaviour, nutrition and environment."
              />

              <p
                data-aos="fade-up"
                className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-inkSoft"
              >
                Planned / proposed sensing capability
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-x-10 sm:grid-cols-2">

                {monitorCapabilities.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.label}
                      data-aos="fade-up"
                      data-aos-delay={index * 40}
                      className="group flex items-center gap-4 border-b border-line/10 py-4"
                    >
                      <Icon className="text-lg text-brand transition-transform duration-300 group-hover:scale-110" />

                      <span className="text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-brand">
                        {item.label}
                      </span>
                    </div>
                  )
                })}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          AI COMMAND CENTRE
      ===================================================== */}

      <section className="border-t border-line/10 bg-pageBg">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">

          <SectionHeading
            eyebrow="Command Centre"
            title="One view of the entire dairy."
            description="A planned AI command centre — eight domains, one connected operating picture."
          />

          <div
            data-aos="fade-up"
            className="relative mt-12 overflow-hidden rounded-[2rem] border border-line/10 bg-[#07100D] text-[#EDF7F2] shadow-[0_40px_80px_rgb(var(--shadow-ink)/0.25)]"
          >

            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(114,185,67,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(114,185,67,0.08) 1px, transparent 1px)',
                backgroundSize: '44px 44px'
              }}
            />

            {/* Command header */}

            <div className="relative border-b border-white/10 p-6 sm:p-8">

              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#72B943]">

                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#72B943] opacity-50" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#72B943]" />
                    </span>

                    AI Command Centre — planned

                  </p>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[#A9C4B8]">
                    Sensors and operational data move into one intelligence
                    layer, turning signals into decisions and actions across
                    the integrated campus.
                  </p>

                </div>

                <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#A9C4B8]">
                  Connected operating picture
                </div>

              </div>
            </div>

            {/* Command domains */}

            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

              {commandDomains.map((item, index) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.label}
                    className="group border-b border-r border-white/[0.07] p-6 transition-colors duration-300 hover:bg-brand/40 sm:p-7"
                  >

                    <div className="flex items-start justify-between gap-4">

                      <span className="font-display text-[10px] font-extrabold tracking-[0.2em] text-[#72B943]/50">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <Icon className="text-2xl text-[#A9C4B8] transition-colors duration-300 group-hover:text-[#72B943]" />

                    </div>

                    <h3 className="mt-7 text-sm font-bold uppercase tracking-[0.14em] text-[#EDF7F2]">
                      {item.label}
                    </h3>

                    <p className="mt-3 text-xs leading-5 text-[#91A99F]">
                      {item.desc}
                    </p>

                  </div>
                )
              })}

            </div>

            {/* Command flow */}

            <div className="relative border-t border-white/10 px-6 py-5 sm:px-8">

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#91A99F]">

                <span>Sense</span>

                <span className="text-[#72B943]">→</span>

                <span>Connect</span>

                <span className="text-[#72B943]">→</span>

                <span>Understand</span>

                <span className="text-[#72B943]">→</span>

                <span>Act</span>

              </div>

            </div>

          </div>

          <p
            data-aos="fade-up"
            className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-inkSoft"
          >
            Technology stack planned for the integrated campus · deployment in phases
          </p>

        </div>
      </section>

      {/* =====================================================
          FUTURE ARCHITECTURE
      ===================================================== */}

      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">

            <div className="lg:col-span-5">

              <SectionHeading
                eyebrow="Future Architecture"
                title="A digital layer built to grow with the campus."
                description="The technology architecture can expand from connected operations into digital customer, farmer, distributor and partner experiences."
              />

            </div>

            <div className="lg:col-span-7">

              <div className="grid gap-3 sm:grid-cols-2">

                {futureArchitecture.map((item, index) => (
                  <div
                    key={item}
                    data-aos="fade-up"
                    data-aos-delay={index * 30}
                    className="group flex items-center gap-3 rounded-2xl border border-line/10 bg-pageBg px-4 py-4 transition-all duration-300 hover:border-brand/25 hover:bg-surface hover:shadow-[0_14px_35px_rgb(var(--shadow-ink)/0.06)]"
                  >

                    <span className="text-[10px] font-extrabold tracking-[0.15em] text-[#72B943]">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="text-sm font-semibold text-ink">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#075B3A] text-white">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#72B943]/20 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">

          <div
            className="max-w-4xl"
            data-aos="fade-up"
          >

            <Eyebrow dark>
              Technology
            </Eyebrow>

            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Where intelligence becomes
              <br />
              <span className="text-[#BDE89A]">
                a daily advantage.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#D4E7DC] sm:text-lg">
              For technology partners, equipment vendors and investors —
              the TEJAYS AGRI technology architecture is being built to
              be world-class.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <PageButton to="/business">
                Partner Opportunities
              </PageButton>

              <PageButton
                to="/contact"
                secondary
              >
                Contact TEJAYS AGRI
              </PageButton>

            </div>

            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#B7D4C5]">
              All technology capability described here is planned or proposed
            </p>

          </div>

        </div>
      </section>
    </>
  )
}