import { useEffect, useState } from 'react'
import {
  FiMail,
  FiPhone,
  FiMessageCircle,
  FiSend,
  FiMapPin,
  FiClock,
  FiHelpCircle
} from 'react-icons/fi'

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
    icon: FiMessageCircle,
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

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData(e.currentTarget)

    const name = data.get('name') || ''
    const company = data.get('company') || ''
    const email = data.get('email') || ''
    const phoneNumber = data.get('phone') || ''
    const messageText = data.get('message') || ''

    const selectedEnquiry =
      enquiryTypes.find((t) => t.id === type)?.label || 'General'

    const subject = `Enquiry: ${selectedEnquiry}`

    const body = `Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phoneNumber}
Enquiry type: ${selectedEnquiry}

${messageText}`

    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
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

      <section className="bg-pageBg pt-6">
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
                    Submitting opens your email app with the enquiry
                    pre-filled — we reply to every message at{' '}
                    {contactInfo.email}.
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
    </>
  )
}