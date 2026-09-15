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
        <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">

          <SectionHeading
            eyebrow="Sensing Layers"
            title="Technology at every layer."
            description="From the collar on the animal to the dashboard in the command centre — each layer feeds the next."
          />

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {sensingLayers.map((item, index) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  className="group relative overflow-hidden rounded-2xl border border-line/10 bg-surface p-4 shadow-[0_12px_35px_rgb(var(--shadow-ink)/0.05)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_24px_60px_rgb(var(--shadow-ink)/0.10)] sm:rounded-3xl sm:p-6 lg:p-7"
                >

                  {/* Hover Glow */}
                  <div
                    className="pointer-events-none absolute -right-14 -top-14 h-28 w-28 rounded-full bg-brand/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  {/* Icon */}
                  <div
                    className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-base text-brand transition-all duration-500 group-hover:rotate-[-6deg] group-hover:bg-[#075B3A] group-hover:text-white group-hover:shadow-md sm:h-12 sm:w-12 sm:rounded-2xl sm:text-xl"
                  >
                    <Icon />
                  </div>

                  {/* Title */}
                  <h3
                    className="relative z-10 mt-4 text-sm font-extrabold leading-tight text-ink transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand sm:mt-6 sm:text-base"
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="relative z-10 mt-2 text-[11px] leading-5 text-inkMuted sm:mt-3 sm:text-sm sm:leading-6"
                  >
                    {item.desc}
                  </p>

                  {/* Bottom Accent */}
                  <div className="relative z-10 mt-4 flex items-center gap-2 sm:mt-6 sm:gap-3">
                    <span
                      className="h-px w-5 bg-brand/60 transition-all duration-500 group-hover:w-10 sm:w-8 sm:group-hover:w-14"
                    />

                    <span
                      className="text-[7px] font-bold uppercase tracking-[0.14em] text-inkSoft sm:text-[9px] sm:tracking-[0.18em]"
                    >
                      Technology Layer
                    </span>
                  </div>

                  {/* Arrow */}
                  <span
                    className="absolute bottom-4 right-4 text-sm text-brand opacity-30 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-[25deg] group-hover:scale-125 group-hover:opacity-100 sm:bottom-6 sm:right-6 sm:text-lg"
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
      
      {/* =====================================================
          MONITORING
      ===================================================== */}
      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Monitoring"
                title="What the system watches."
                description="A planned monitoring surface across animal health, behaviour, nutrition and environment."
              />

              <p
                data-aos="fade-up"
                className="mt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-inkSoft sm:mt-6 sm:text-xs sm:tracking-[0.16em]"
              >
                Planned / proposed sensing capability
              </p>
            </div>

            {/* MONITORING CARDS */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-4">

                {monitorCapabilities.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.label}
                      data-aos="fade-up"
                      data-aos-delay={index * 40}
                      className="group relative overflow-hidden rounded-2xl border border-line/10 bg-pageBg p-4 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand/25 hover:bg-brand/[0.035] hover:shadow-[0_18px_40px_rgb(var(--shadow-brand)/0.10)] sm:rounded-2xl sm:p-5 lg:p-5"
                    >

                      {/* Hover glow */}
                      <div
                        className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        aria-hidden="true"
                      />

                      <div className="relative z-10 flex items-center gap-3">

                        {/* ICON */}
                        <div
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-brand/10 bg-brand/[0.06] text-base text-brand transition-all duration-500 group-hover:rotate-[-7deg] group-hover:border-brand/25 group-hover:bg-[#075B3A] group-hover:text-white group-hover:shadow-md sm:h-10 sm:w-10 sm:text-lg"
                        >
                          <Icon />
                        </div>

                        {/* LABEL */}
                        <span
                          className="min-w-0 flex-1 text-[11px] font-bold leading-tight text-ink transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand sm:text-sm"
                        >
                          {item.label}
                        </span>

                        {/* ARROW */}
                        <span
                          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line/10 text-[11px] text-brand opacity-30 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:rotate-[25deg] group-hover:scale-110 group-hover:border-brand/25 group-hover:bg-brand group-hover:text-white group-hover:opacity-100 sm:h-7 sm:w-7 sm:text-xs"
                          aria-hidden="true"
                        >
                          ↗
                        </span>

                      </div>

                      {/* Bottom hover line */}
                      <div
                        className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand transition-all duration-500 group-hover:w-full"
                        aria-hidden="true"
                      />

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
        <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Command Centre"
            title="One view of the entire dairy."
            description="A planned AI command centre — eight domains, one connected operating picture."
          />

          <div data-aos="fade-up" className="relative mt-10 overflow-hidden rounded-[1.5rem] border border-line/10 bg-[#07100D] text-[#EDF7F2] shadow-[0_30px_70px_rgb(var(--shadow-ink)/0.22)] sm:mt-12 sm:rounded-[2rem]">

            {/* Grid background */}
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'linear-gradient(rgba(114,185,67,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(114,185,67,0.08) 1px, transparent 1px)',
                backgroundSize: '44px 44px'
              }}
            />

            {/* Soft glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#72B943]/10 blur-3xl" aria-hidden="true" />

            {/* Command Header */}
            <div className="relative border-b border-white/10 p-5 sm:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div className="min-w-0">
                  <p className="flex items-center gap-2.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#72B943] sm:gap-3 sm:text-[11px] sm:tracking-[0.28em]">
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#72B943] opacity-50" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#72B943]" />
                    </span>
                    AI Command Centre — planned
                  </p>

                  <p className="mt-3 max-w-2xl text-xs leading-5 text-[#A9C4B8] sm:text-sm sm:leading-6">
                    Sensors and operational data move into one intelligence layer, turning signals into decisions and actions across the integrated campus.
                  </p>
                </div>

                <div className="self-start rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[7px] font-semibold uppercase tracking-[0.12em] text-[#A9C4B8] sm:px-4 sm:py-2 sm:text-[9px] sm:tracking-[0.14em] lg:self-auto">
                  Connected operating picture
                </div>

              </div>
            </div>

            {/* Command Domains */}
            <div className="relative grid grid-cols-2 gap-px bg-white/[0.06] sm:grid-cols-3 lg:grid-cols-4">
              {commandDomains.map((item, index) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.label}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                    className="group relative overflow-hidden bg-[#07100D] p-4 transition-all duration-500 ease-out hover:bg-[#0B1C15] sm:p-5 lg:p-6"
                  >

                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#72B943]/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />

                    <div className="relative z-10">

                      {/* Number + Icon */}
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-display text-[8px] font-extrabold tracking-[0.16em] text-[#72B943]/50 sm:text-[10px] sm:tracking-[0.2em]">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-base text-[#A9C4B8] transition-all duration-500 group-hover:rotate-[-7deg] group-hover:border-[#72B943]/30 group-hover:bg-[#72B943] group-hover:text-white group-hover:shadow-lg sm:h-10 sm:w-10 sm:text-xl">
                          <Icon />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="mt-5 text-[10px] font-bold uppercase leading-tight tracking-[0.1em] text-[#EDF7F2] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#72B943] sm:mt-7 sm:text-sm sm:tracking-[0.14em]">
                        {item.label}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-[10px] leading-4 text-[#91A99F] sm:mt-3 sm:text-xs sm:leading-5">
                        {item.desc}
                      </p>

                      {/* Bottom indicator */}
                      <div className="mt-4 flex items-center gap-2 sm:mt-5 sm:gap-3">
                        <span className="h-px w-4 bg-[#72B943]/50 transition-all duration-500 group-hover:w-8 sm:w-6 sm:group-hover:w-12" />
                        <span className="text-[6px] font-bold uppercase tracking-[0.12em] text-[#91A99F] sm:text-[8px] sm:tracking-[0.16em]">
                          Intelligence Layer
                        </span>
                      </div>

                    </div>

                    {/* Hover arrow */}
                    <span
                      className="absolute bottom-4 right-4 text-xs text-[#72B943] opacity-20 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-[25deg] group-hover:scale-125 group-hover:opacity-100 sm:bottom-5 sm:right-5 sm:text-base"
                      aria-hidden="true"
                    >
                      ↗
                    </span>

                    {/* Bottom hover line */}
                    <div
                      className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#72B943] transition-all duration-500 group-hover:w-full"
                      aria-hidden="true"
                    />

                  </div>
                )
              })}
            </div>

            {/* Command Flow */}
            <div className="relative border-t border-white/10 px-5 py-4 sm:px-8 sm:py-5">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[7px] font-bold uppercase tracking-[0.12em] text-[#91A99F] sm:gap-x-4 sm:text-[9px] sm:tracking-[0.16em]">
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
            className="mt-5 text-[9px] font-semibold uppercase leading-4 tracking-[0.12em] text-inkSoft sm:mt-6 sm:text-xs sm:tracking-[0.16em]"
          >
            Technology stack planned for the integrated campus · deployment in phases
          </p>

        </div>
      </section>

      {/* =====================================================
          FUTURE ARCHITECTURE
      ===================================================== */}
      <section className="border-t border-line/10 bg-surface">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Future Architecture"
                title="A digital layer built to grow with the campus."
                description="The technology architecture can expand from connected operations into digital customer, farmer, distributor and partner experiences."
              />
            </div>

            {/* ARCHITECTURE CARDS */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-2 lg:gap-4">
                {futureArchitecture.map((item, index) => (
                  <div
                    key={item}
                    data-aos="fade-up"
                    data-aos-delay={index * 40}
                    className="group relative overflow-hidden rounded-2xl border border-line/10 bg-pageBg p-4 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand/25 hover:bg-brand/[0.035] hover:shadow-[0_18px_40px_rgb(var(--shadow-brand)/0.10)] sm:p-5 lg:p-5"
                  >

                    {/* Hover glow */}
                    <div
                      className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />

                    <div className="relative z-10 flex items-center gap-3">

                      {/* Number */}
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-brand/10 bg-brand/[0.05] font-display text-[9px] font-extrabold tracking-[0.12em] text-brand transition-all duration-500 group-hover:rotate-[-6deg] group-hover:border-brand/25 group-hover:bg-brand group-hover:text-white group-hover:shadow-md sm:h-9 sm:w-9 sm:text-[10px]">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      {/* Text */}
                      <span className="min-w-0 flex-1 text-[11px] font-bold leading-tight text-ink transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand sm:text-sm">
                        {item}
                      </span>

                      {/* Arrow */}
                      <span
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line/10 text-[10px] text-brand opacity-30 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-[25deg] group-hover:scale-110 group-hover:border-brand/25 group-hover:bg-brand group-hover:text-white group-hover:opacity-100 sm:h-7 sm:w-7 sm:text-xs"
                        aria-hidden="true"
                      >
                        ↗
                      </span>

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

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#075B3A] text-center text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#72B943]/20 blur-3xl" />

        <div className="relative mx-auto flex w-full max-w-[1400px] justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <div className="w-full max-w-4xl" data-aos="fade-up">

            <div className="flex justify-center">
              <Eyebrow dark>Technology</Eyebrow>
            </div>

            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Where intelligence becomes
              <br />
              <span className="text-[#BDE89A]">a daily advantage.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#D4E7DC] sm:mt-6 sm:text-lg sm:leading-7">
              For technology partners, equipment vendors and investors — the TEJAYS AGRI technology architecture is being built to be world-class.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row">
              <PageButton to="/business">Partner Opportunities</PageButton>

              <PageButton to="/contact" secondary>
                Contact TEJAYS AGRI
              </PageButton>
            </div>

            <p className="mx-auto mt-6 max-w-xl text-[9px] font-semibold uppercase leading-4 tracking-[0.14em] text-[#B7D4C5] sm:mt-7 sm:text-[10px] sm:tracking-[0.16em]">
              All technology capability described here is planned or proposed
            </p>

          </div>
        </div>
      </section>
    </>
  )
}