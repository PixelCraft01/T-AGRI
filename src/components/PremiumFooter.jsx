import { Link } from 'react-router-dom'
import {
  FiArrowUpRight,
  FiMail,
  FiPhone,
  FiLinkedin,
  FiInstagram,
  FiYoutube,
} from 'react-icons/fi'
import { assetPath } from '../utils/assetPath'
import { contactInfo } from '../data/navigation'

const companyLinks = [
  { label: 'About', to: '/about' },
  { label: 'Business', to: '/business' },
  { label: 'Campus', to: '/campus' },
  { label: 'Contact', to: '/contact' },
]

const exploreLinks = [
  { label: 'Smart Dairy', to: '/smart-dairy' },
  { label: 'Technology', to: '/technology' },
  { label: 'Dairy & Foods', to: '/dairy-foods' },
  { label: 'Nutrition', to: '/nutrition' },
  { label: 'Genetics', to: '/genetics' },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: FiLinkedin,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: FiInstagram,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: FiYoutube,
  },
]

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="group inline-flex w-fit items-center gap-2.5 text-[13px] font-medium text-white/60 transition-all duration-300 hover:text-white"
    >
      {/* Animated line */}
      <span className="h-px w-0 bg-[#72B943] transition-all duration-300 ease-out group-hover:w-6" />

      {/* Text */}
      <span className="transition-colors duration-300 group-hover:text-white">
        {children}
      </span>

      {/* Arrow */}
      <FiArrowUpRight
        size={12}
        className="translate-x-[-4px] text-[#72B943] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
      />
    </Link>
  )
}

function SocialButton({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/45 transition-all duration-300 hover:-translate-y-1 hover:border-[#72B943]/60 hover:bg-[#72B943] hover:text-[#07100D]"
    >
      <Icon
        size={16}
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </a>
  )
}

export default function PremiumFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#07100D] text-white">

      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
      >
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-[#72B943]" />
        <div className="absolute -right-28 -top-28 h-[380px] w-[380px] rounded-full border border-[#72B943]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* TOP BAR */}
        <div className="flex flex-col gap-5 border-b border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#72B943]" />

            <span className="text-[8px] font-bold uppercase tracking-[0.32em] text-white/40">
              TEJAYS AGRI
            </span>
          </div>

          <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.28em] text-white/25">
            <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]" />
            Connected Dairy Ecosystem
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 gap-14 py-16 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1fr_1fr] lg:gap-12 lg:py-20">

          {/* LOGO / COMPANY INFO */}
          <div data-aos="">

            <Link
              to="/"
              aria-label="TEJAYS AGRI Home"
              className="group inline-flex"
            >
              <img
                src={assetPath('/logo/Tejays_logo_dark.png')}
                alt="TEJAYS AGRI"
                className="h-16 w-auto object-contain transition-transform duration-300"
              />
            </Link>

            <p className="mt-7 max-w-sm text-[13px] leading-7 text-white/45">
              Building a connected ecosystem across dairy, technology,
              agriculture, food processing, nutrition and sustainability.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-8 bg-[#72B943]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-white/25">
                Growing for the future
              </span>
            </div>
          </div>

          {/* COMPANY */}
          <div data-aos="" data-aos-delay="80">

            <p className="mb-7 text-[9px] font-bold uppercase tracking-[0.3em] text-[#72B943]">
              Company
            </p>

            <div className="flex flex-col items-start gap-4">
              {companyLinks.map((item) => (
                <FooterLink
                  key={item.to}
                  to={item.to}
                >
                  {item.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* EXPLORE — TOP 5 ONLY */}
          <div data-aos="" data-aos-delay="140">

            <p className="mb-7 text-[9px] font-bold uppercase tracking-[0.3em] text-[#72B943]">
              Explore
            </p>

            <div className="flex flex-col items-start gap-4">
              {exploreLinks.map((item) => (
                <FooterLink
                  key={item.to}
                  to={item.to}
                >
                  {item.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* CONNECT */}
          <div data-aos="" data-aos-delay="200">

            <p className="mb-7 text-[9px] font-bold uppercase tracking-[0.3em] text-[#72B943]">
              Connect
            </p>

            <div className="space-y-5">

              {/* EMAIL */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-start gap-3 text-[12px] leading-6 text-white/50 transition-colors duration-300 hover:text-white"
              >
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#72B943] transition-all duration-300 group-hover:border-[#72B943]/50 group-hover:bg-[#72B943] group-hover:text-[#07100D]">
                  <FiMail size={13} />
                </span>

                <span className="break-all">
                  {contactInfo.email}
                </span>
              </a>

              {/* PHONE */}
              <a
                href={contactInfo.phoneHref}
                className="group flex items-start gap-3 text-[12px] leading-6 text-white/50 transition-colors duration-300 hover:text-white"
              >
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#72B943] transition-all duration-300 group-hover:border-[#72B943]/50 group-hover:bg-[#72B943] group-hover:text-[#07100D]">
                  <FiPhone size={13} />
                </span>

                <span>
                  {contactInfo.phoneDisplay}
                </span>
              </a>
            </div>

            {/* SOCIAL */}
            <div className="mt-8 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <SocialButton
                  key={social.label}
                  href={social.href}
                  label={social.label}
                  icon={social.icon}
                />
              ))}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-white/10" />

        {/* BOTTOM */}
        {/* BOTTOM FOOTER */}
        <div className="flex flex-col gap-6 border-t border-white/[0.06] py-7 lg:flex-row lg:items-center lg:justify-between">

          {/* COPYRIGHT + BRAND INFO */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">

            <p className="text-[10px] font-medium text-white/60">
              © {new Date().getFullYear()} TEJAYS AGRI. All rights reserved.
            </p>

            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

            <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
              Technology · Dairy · Nutrition · Sustainability
            </p>

          </div>

          {/* FOOTER LINKS */}
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">

            <span className="cursor-default text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50 transition-colors duration-300 hover:text-[#72B943]">
              Privacy
            </span>

            <span className="h-3 w-px bg-white/10" />

            <span className="cursor-default text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50 transition-colors duration-300 hover:text-[#72B943]">
              Terms
            </span>

            <span className="h-3 w-px bg-white/10" />

            <span className="cursor-default text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50 transition-colors duration-300 hover:text-[#72B943]">
              Contact
            </span>

          </div>
        </div>

        {/* FINAL MICRO LINE */}
        <div className="flex items-center justify-center border-t border-white/[0.06] py-4">

          <p className="text-center text-[7px] font-bold uppercase tracking-[0.38em] text-white/30">
            Integrated Dairy · Food · Nutrition · Agriculture Ecosystem
          </p>

        </div>
      </div>
    </footer>
  )
}