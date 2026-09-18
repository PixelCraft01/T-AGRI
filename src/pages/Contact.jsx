import { useEffect, useState } from 'react'
import {
  FiMail,
  FiPhone,
  FiMessageCircle,
  FiSend,
  FiMapPin,
  FiClock,
  FiCalendar,
  FiHelpCircle,
  FiX,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { contactInfo } from '../data/navigation'

const enquiryTypes = [
  { id: 'business', label: 'Business & B2B' },
  { id: 'vendor', label: 'Vendor & Supplier' },
  { id: 'tech', label: 'Technology Partner' },
  { id: 'farmer', label: 'Partner Farmer' },
  { id: 'career', label: 'Careers' },
  { id: 'media', label: 'Media & General' }
]

const contactCards = [
  {
    icon: FiMail,
    title: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    note: 'For all enquiries'
  },
  {
    icon: FiPhone,
    title: 'Phone',
    value: contactInfo.phoneDisplay,
    href: contactInfo.phoneHref,
    note: 'Mon–Sat, 9am–6pm IST'
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    value: contactInfo.phoneDisplay,
    href: contactInfo.whatsapp,
    note: 'Quick messages'
  }
]

const MAX_MESSAGE_WORDS = 50

export default function Contact() {
  usePageMeta(
    'Contact Us — TEJAYS AGRI',
    'Contact TEJAYS AGRI — info@tejaysagri.com, +91 95096 12559. Business, vendor, technology partnership, partner farmer, careers and media enquiries.'
  )

  const [type, setType] = useState('business')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')
  const [enquiryPreview, setEnquiryPreview] = useState(null)
  const [quickContactOpen, setQuickContactOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const getWordCount = (text) => {
    const trimmed = text.trim()

    if (!trimmed) {
      return 0
    }

    return trimmed.split(/\s+/).length
  }

  const handleMessageChange = (e) => {
    const value = e.target.value
    const words = getWordCount(value)

    if (words <= MAX_MESSAGE_WORDS) {
      setMessage(value)
    }
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10)
    setPhone(value)
  }

  const TEST_EMAIL = 'prajapatnilesh001@gmail.com'
  const TEST_WHATSAPP = '919509612559'

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData(e.currentTarget)

    const name = data.get('name') || ''
    const company = data.get('company') || 'Not provided'
    const email = data.get('email') || ''
    const phoneNumber = data.get('phone') || 'Not provided'
    const messageText = data.get('message') || ''

    const selectedEnquiry =
      enquiryTypes.find((t) => t.id === type)?.label || 'General'

    setEnquiryPreview({
      name,
      company,
      email,
      phoneNumber,
      messageText,
      selectedEnquiry
    })
  }

  const buildEnquiryMessage = (data) => {
    return `🔔 NEW WEBSITE ENQUIRY
━━━━━━━━━━━━━━━━━━

👤 Name: ${data.name}
🏢 Company: ${data.company}
📧 Email: ${data.email}
📱 Phone: ${data.phoneNumber}

📌 Enquiry Type:
${data.selectedEnquiry}

💬 Message:
${data.messageText}

━━━━━━━━━━━━━━━━━━
🌐 TEJAYS AGRI Website`
  }

  const sendViaWhatsApp = () => {
    if (!enquiryPreview) return

    const text = buildEnquiryMessage(enquiryPreview)
    window.open(
      `https://wa.me/${TEST_WHATSAPP}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  const sendViaEmail = () => {
    if (!enquiryPreview) return

    const subject = `New Website Enquiry — ${enquiryPreview.selectedEnquiry}`
    const body = buildEnquiryMessage(enquiryPreview)

    window.location.href =
      `mailto:${TEST_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const messageWordCount = getWordCount(message)

  return (
    <>
      <PageHero
        variant="light"
        eyebrow="Contact TEJAYS AGRI"
        title={
          <>
            Let's build the
            <br />
            <span className="text-[#72B943]">next dairy, together.</span>
          </>
        }
        description="Tell us what you need — supply, partnership, technology or a career. A real conversation is the first step."
        align="center"
      />

      <section className="bg-pageBg pt-6 pb-24 md:pb-0">
        <div className="mx-auto w-full max-w-[1400px] px-4 pb-6 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5">
            {contactCards.map((c, i) => (
              <a
                key={c.title}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className={`group rounded-2xl border border-line/10 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-card ${i === 2 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-tint text-brand transition-colors duration-300 group-hover:bg-[#075B3A] group-hover:text-white">
                  <c.icon className="text-2xl" />
                </span>

                <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-ink">
                  {c.title}
                </h3>

                <p className="mt-1 break-all text-sm font-semibold text-brand">
                  {c.value}
                </p>

                <p className="mt-1 text-xs text-inkMuted">
                  {c.note}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1400px] px-4 py-6 sm:px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">

            {/* FORM */}
            <div
              data-aos="fade-up"
              className="rounded-3xl border border-line/10 bg-surface p-7 sm:p-10 lg:col-span-7"
            >
              <SectionHeading
                eyebrow="Send an Enquiry"
                title="Start the conversation."
                description="Choose an enquiry type, share a few details and we will get back to you."
              />

              {/* ENQUIRY TYPES */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                {enquiryTypes.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setType(t.id)}
                    className={`rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-300 ${type === t.id
                      ? 'border-brand bg-[#075B3A] text-white'
                      : 'border-line/15 bg-surface text-ink hover:border-brand/60 hover:text-brand'
                      }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <form
                id="enquiry-form"
                onSubmit={handleSubmit}
                className="mt-8 grid gap-4 sm:grid-cols-2"
              >
                {/* NAME */}
                <input
                  name="name"
                  required
                  placeholder="Your name *"
                  className="rounded-xl border border-line/12 bg-pageBg px-4 py-3.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-inkSoft focus:border-brand focus:bg-surface"
                />

                {/* COMPANY */}
                <input
                  name="company"
                  placeholder="Company / Organisation"
                  className="rounded-xl border border-line/12 bg-pageBg px-4 py-3.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-inkSoft focus:border-brand focus:bg-surface"
                />

                {/* EMAIL */}
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email address *"
                  className="rounded-xl border border-line/12 bg-pageBg px-4 py-3.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-inkSoft focus:border-brand focus:bg-surface"
                />

                {/* PHONE - ONLY 10 DIGITS */}
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="Phone (+91)"
                  title="Please enter exactly 10 digits"
                  className="rounded-xl border border-line/12 bg-pageBg px-4 py-3.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-inkSoft focus:border-brand focus:bg-surface"
                />

                {/* MESSAGE */}
                <div className="sm:col-span-2">
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={handleMessageChange}
                    maxLength={2000}
                    placeholder={`Your message for ${enquiryTypes.find((t) => t.id === type)?.label
                      } enquiries *`}
                    className="w-full resize-y rounded-xl border border-line/12 bg-pageBg px-4 py-3.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-inkSoft focus:border-brand focus:bg-surface"
                  />

                  {/* WORD COUNTER */}
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-[11px] text-inkSoft">
                      Maximum 50 words
                    </span>

                    <span
                      className={`text-xs font-semibold ${messageWordCount >= 45
                        ? 'text-red-500'
                        : 'text-inkMuted'
                        }`}
                    >
                      {messageWordCount}/50 words
                    </span>
                  </div>
                </div>

                {/* SUBMIT */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-[#075B3A] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#043D2A]"
                  >
                    Send Enquiry

                    <FiSend className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </button>

                  <p className="mt-3 text-xs leading-relaxed text-inkSoft">
                    After submitting, choose Email or WhatsApp to send your
                    enquiry directly to the TEJAYS AGRI contact.
                  </p>
                </div>
              </form>
            </div>

            {/* RIGHT SIDE */}
            <div className="grid gap-6 lg:col-span-5">

              {/* HELP CARD */}
              <div
                data-aos="fade-up"
                data-aos-delay="80"
                className="flex items-start gap-5 rounded-3xl border border-line/10 bg-[#075B3A] p-7 text-white"
              >
                <FiHelpCircle className="mt-1 shrink-0 text-2xl text-[#BDE89A]" />

                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight">
                    Not sure where to start?
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#D7E8DF]">
                    Send a general note to {contactInfo.email} and the right
                    person will respond. TEJAYS AGRI is in planning for the
                    integrated campus — the entire ecosystem is available for
                    discussion today.
                  </p>
                </div>
              </div>

              {/* LOCATION + GOOGLE MAP */}
              <div
                data-aos="fade-up"
                data-aos-delay="160"
                className="overflow-hidden rounded-3xl border border-line/10 bg-surface"
              >
                <div className="p-7 pb-5">
                  <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-brand">
                    <FiMapPin className="text-sm" />
                    Location
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-ink">
                    TEJAYS Dynamic Ltd.
                  </p>
                </div>

                <div className="overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.4769840068393!2d75.798421275294!3d26.888353276661583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db42427e6e971%3A0xc28b7aadc6b2c6ab!2sTejays%20Dynamic%20Ltd!5e0!3m2!1sen!2sin!4v1789199392450!5m2!1sen!2sin"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="TEJAYS Dynamic Ltd. Location"
                  />
                </div>

                <div className="px-7 py-5">
                  <p className="text-xs leading-relaxed text-inkMuted">
                    Visit us at the TEJAYS Dynamic Ltd. location.
                  </p>
                </div>
              </div>

              {/* RESPONSE TIME */}
              <div
                data-aos="fade-up"
                data-aos-delay="240"
                className="rounded-3xl border border-line/10 bg-surface p-7"
              >
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-brand">
                  <FiClock className="text-sm" />
                  Response Time
                </p>

                <p className="mt-3 text-sm leading-relaxed text-ink">
                  We aim to respond to every enquiry within two working days.
                  Careers, vendor and partnership enquiries go directly to the
                  relevant leads.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK CONTACT
          MOBILE  → BOTTOM BAR
          TABLET  → RIGHT SIDE
          DESKTOP → RIGHT SIDE
      ========================================================= */}

      {/* =========================================================
          MOBILE — FIXED BOTTOM CONTACT BAR
      ========================================================= */}
      <div className="fixed inset-x-0 bottom-0 z-[90] border-t border-white/10 bg-[#07100D]/[0.98] px-2 pt-2 pb-[max(8px,env(safe-area-inset-bottom))] shadow-[0_-12px_40px_rgba(0,0,0,0.30)] backdrop-blur-xl md:hidden">
        <div className="mx-auto grid w-full max-w-xl grid-cols-[1fr_1fr_1fr_1.28fr] items-center gap-1">

          {/* CALL */}
          <a
            href={contactInfo.phoneHref}
            aria-label="Call TEJAYS AGRI"
            className="group flex min-h-[68px] flex-col items-center justify-center rounded-2xl px-1 py-2 text-[#BDE89A] transition-all duration-200 active:scale-95"
          >
            <span className="flex h-8 w-8 items-center justify-center">
              <FiPhone className="text-[25px] transition-transform duration-200 group-hover:-translate-y-0.5" />
            </span>

            <span className="mt-1 text-[11px] font-semibold tracking-wide text-[#BDE89A]">
              Call
            </span>
          </a>

          {/* WHATSAPP — PROPER WHATSAPP ICON */}
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp TEJAYS AGRI"
            className="group flex min-h-[68px] flex-col items-center justify-center rounded-2xl px-1 py-2 text-[#25D366] transition-all duration-200 active:scale-95"
          >
            <span className="flex h-8 w-8 items-center justify-center">
              <FaWhatsapp className="text-[27px] transition-transform duration-200 group-hover:-translate-y-0.5" />
            </span>

            <span className="mt-1 text-[11px] font-semibold tracking-wide text-[#25D366]">
              WhatsApp
            </span>
          </a>

          {/* EMAIL */}
          <a
            href={`mailto:${contactInfo.email}`}
            aria-label="Email TEJAYS AGRI"
            className="group flex min-h-[68px] flex-col items-center justify-center rounded-2xl px-1 py-2 text-[#D9B54A] transition-all duration-200 active:scale-95"
          >
            <span className="flex h-8 w-8 items-center justify-center">
              <FiMail className="text-[25px] transition-transform duration-200 group-hover:-translate-y-0.5" />
            </span>

            <span className="mt-1 text-[11px] font-semibold tracking-wide text-[#D9B54A]">
              Email
            </span>
          </a>

          {/* CONSULT */}
          <button
            type="button"
            aria-label="Consult with TEJAYS AGRI"
            onClick={() => {
              document.getElementById('enquiry-form')?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              })
            }}
            className="group flex min-h-[68px] items-center justify-center rounded-full bg-[#D9B54A] px-2 py-2 text-[#07100D] shadow-lg shadow-[#D9B54A]/20 transition-all duration-200 hover:bg-[#E5C765] active:scale-[0.97]"
          >
            <span className="flex flex-col items-center justify-center">
              <span className="flex h-8 w-8 items-center justify-center">
                <FiCalendar className="text-[25px] transition-transform duration-200 group-hover:-translate-y-0.5" />
              </span>

              <span className="mt-1 text-[11px] font-bold tracking-wide">
                Consult
              </span>
            </span>
          </button>

        </div>
      </div>


      {/* =========================================================
          TABLET + DESKTOP — RIGHT SIDE CONTACT
      ========================================================= */}
      <div className="pointer-events-none fixed right-0 top-1/2 z-[90] hidden -translate-y-1/2 md:block">
        <div className="pointer-events-auto flex items-center">

          {/* =====================================================
              CONTACT OPTIONS
          ===================================================== */}
          <div
            className={`mr-2 flex origin-right flex-col items-center gap-2.5 rounded-3xl border border-line/10 bg-surface/95 p-2.5 shadow-2xl backdrop-blur-xl transition-all duration-300 ${quickContactOpen
              ? 'translate-x-0 scale-100 opacity-100'
              : 'pointer-events-none translate-x-8 scale-95 opacity-0'
              }`}
            aria-hidden={!quickContactOpen}
          >

            {/* CALL */}
            <a
              href={contactInfo.phoneHref}
              title="Call"
              aria-label="Call TEJAYS AGRI"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#72B943]/30 bg-pageBg text-[#72B943] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#075B3A] hover:text-white"
            >
              <FiPhone className="text-[21px]" />
            </a>

            {/* WHATSAPP */}
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              aria-label="WhatsApp TEJAYS AGRI"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#25D366]/30 bg-pageBg text-[#25D366] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#25D366] hover:text-white"
            >
              <FaWhatsapp className="text-[22px]" />
            </a>

            {/* EMAIL */}
            <a
              href={`mailto:${contactInfo.email}`}
              title="Email"
              aria-label="Email TEJAYS AGRI"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D9B54A]/30 bg-pageBg text-[#D9B54A] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D9B54A] hover:text-[#07100D]"
            >
              <FiMail className="text-[21px]" />
            </a>

            {/* CONSULT */}
            <button
              type="button"
              title="Consult"
              aria-label="Consult with TEJAYS AGRI"
              onClick={() => {
                document.getElementById('enquiry-form')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center'
                })

                setQuickContactOpen(false)
              }}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D9B54A]/40 bg-[#D9B54A] text-[#07100D] shadow-lg shadow-[#D9B54A]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E5C765]"
            >
              <FiCalendar className="text-[21px]" />
            </button>

          </div>


          {/* =====================================================
              CONTACT SIDE TAB
          ===================================================== */}
          <button
            type="button"
            onClick={() => setQuickContactOpen((open) => !open)}
            aria-expanded={quickContactOpen}
            aria-label={
              quickContactOpen
                ? 'Close contact options'
                : 'Open contact options'
            }
            className="group relative flex h-[176px] w-[54px] items-center justify-center rounded-l-[28px] border border-[#72B943]/20 bg-[#075B3A] text-white shadow-2xl shadow-[#075B3A]/30 transition-all duration-300 hover:w-[60px] hover:bg-[#064B31]"
          >

            {/* ARROW */}
            <span className="absolute left-[-14px] flex h-8 w-8 items-center justify-center rounded-full border border-[#72B943]/30 bg-surface text-[#72B943] shadow-lg">
              {quickContactOpen ? (
                <FiChevronRight className="text-lg" />
              ) : (
                <FiChevronLeft className="text-lg" />
              )}
            </span>


            {/* CONTACT */}
            <span className="flex flex-col items-center justify-center">

              {/* small icon */}
              <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full border border-[#72B943]/30 bg-[#064B31] text-[#BDE89A]">
                <FiPhone className="text-sm" />
              </span>

              {/* EXACT:
                  C
                  O
                  N
                  T
                  A
                  C
                  T
              */}
              <span className="flex flex-col items-center text-[10px] font-bold leading-[1.05] tracking-[0.18em] text-white">
                <span>C</span>
                <span>O</span>
                <span>N</span>
                <span>T</span>
                <span>A</span>
                <span>C</span>
                <span>T</span>
              </span>

            </span>
          </button>

        </div>
      </div>



      {/* ENQUIRY SEND MODAL */}
      {
        enquiryPreview && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07100D]/70 px-4 py-6 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-send-title"
          >
            <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-line/10 bg-surface shadow-2xl">
              <button
                type="button"
                onClick={() => setEnquiryPreview(null)}
                className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-pageBg text-ink transition-colors hover:bg-[#075B3A] hover:text-white"
                aria-label="Close enquiry preview"
              >
                <FiX />
              </button>

              <div className="bg-[#075B3A] px-7 py-7 text-white sm:px-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#BDE89A]">
                  TEJAYS AGRI
                </p>
                <h2
                  id="enquiry-send-title"
                  className="mt-2 font-display text-2xl font-bold tracking-tight"
                >
                  Your enquiry is ready
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#D7E8DF]">
                  Review your details and choose how you want to send them.
                </p>
              </div>

              <div className="space-y-4 p-7 sm:p-8">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-pageBg p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-inkSoft">
                      Name
                    </p>
                    <p className="mt-1 break-words text-sm font-semibold text-ink">
                      {enquiryPreview.name}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-pageBg p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-inkSoft">
                      Enquiry
                    </p>
                    <p className="mt-1 break-words text-sm font-semibold text-brand">
                      {enquiryPreview.selectedEnquiry}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-pageBg p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-inkSoft">
                      Email
                    </p>
                    <p className="mt-1 break-all text-sm font-semibold text-ink">
                      {enquiryPreview.email}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-pageBg p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-inkSoft">
                      Phone
                    </p>
                    <p className="mt-1 text-sm font-semibold text-ink">
                      {enquiryPreview.phoneNumber}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-line/10 bg-pageBg p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-inkSoft">
                    Message
                  </p>
                  <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-ink">
                    {enquiryPreview.messageText}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={sendViaEmail}
                    className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-line/10 bg-pageBg px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand"
                  >
                    <FiMail className="text-lg" />
                    Send via Email
                  </button>

                  <button
                    type="button"
                    onClick={sendViaWhatsApp}
                    className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#075B3A] px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#043D2A]"
                  >
                    <FiMessageCircle className="text-lg" />
                    Send via WhatsApp
                  </button>
                </div>

                <p className="text-center text-[11px] leading-relaxed text-inkSoft">
                  Email opens your mail app. WhatsApp opens a ready-to-send message.
                </p>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}