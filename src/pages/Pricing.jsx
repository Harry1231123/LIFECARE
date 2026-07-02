import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, HeartPulse, Shield, Baby, Brain, Leaf, ClipboardCheck, MessageCircle, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import Reveal from '../components/Reveal'

function Label({ children }) {
  return (
    <div className="label mb-4">
      <span className="rule-brand" />
      {children}
    </div>
  )
}

const PLANS = [
  {
    icon: HeartPulse, name: 'Emergency First Aid at Work',
    tagline: '1-day group course · Level 3 RQF',
    price: 'From £850', unit: 'per group (up to 12 learners)', popular: true,
    features: ['6-hour course (full day)','Up to 12 learners per session','Ofqual regulated certificate','Certificate valid for 3 years','All course materials included','Active EMT instructor','On-site delivery at your premises','HSE compliant documentation'],
    href: '/courses/efaw',
  },
  {
    icon: Shield, name: 'First Aid at Work',
    tagline: '3-day group course · Level 3 RQF',
    price: 'From £1,850', unit: 'per group (up to 12 learners)', popular: false,
    features: ['3-day comprehensive qualification','All EFAW content plus advanced','Anatomy & physiology overview','Head, neck & back injury response','Ofqual Level 3 RQF certificate','Valid for 3 years','Up to 12 learners','HSE gold standard'],
    href: '/courses/faw',
  },
  {
    icon: Baby, name: 'Paediatric First Aid',
    tagline: '2-day course · Level 3 RQF',
    price: 'From £965', unit: 'per group (up to 12 learners)', popular: false,
    features: ['2-day specialist qualification','Infant & child CPR and AED','Choking, seizures & anaphylaxis','EYFS & OFSTED compliant','Ofqual Level 3 RQF certificate','Valid for 3 years','Up to 12 learners','Required for many childcare settings'],
    href: '/courses/paediatric',
  },
  {
    icon: Baby, name: 'Emergency Paediatric First Aid',
    tagline: '1-day course · Level 3 RQF',
    price: 'From £850', unit: 'per group (up to 12 learners)', popular: false,
    features: ['Condensed 1-day paediatric course','Infant & child CPR','Choking & unconscious child','EYFS & OFSTED compliant','Ofqual Level 3 RQF certificate','Up to 12 learners','Stepping stone to full PFA','Valid for 3 years'],
    href: '/courses/epfa',
  },
  {
    icon: HeartPulse, name: 'Basic Life Support',
    tagline: 'Half-day · Level 2 RQF',
    price: 'From £650', unit: 'per group (up to 12 learners)', popular: false,
    features: ['Approx. 3-hour session','Adult CPR & AED use','Recovery position','Choking management','Primary survey','Level 2 RQF certificate','Up to 12 learners','Ideal for all staff'],
    href: '/courses/bls',
  },
  {
    icon: Brain, name: 'Mental Health First Aid',
    tagline: '1 or 2-day · MHFA England',
    price: 'From £390', unit: 'per group (based on 6 learners)', popular: false,
    features: ['1-day or full 2-day option', 'MHFA England accredited', 'Up to 16 learners per group', 'Nationally recognised certificate', 'MHFA manual included', 'All staff levels welcome', 'On or off-site delivery', 'Follow-up digital resources'],
    href: '/courses/mental',
  },
  {
    icon: Brain, name: 'LivingWorks ASIST',
    tagline: '2-day in-person workshop · LivingWorks',
    price: 'Contact for pricing', unit: 'open to anyone aged 16+', popular: false,
    features: ['2-day in-person workshop', 'No prior experience required', 'Recognise suicidal thinking & respond with confidence', 'Build a SafePlan to keep someone safe', 'Suicide First-Aid Helper certificate', 'LivingWorks Connect app access included', '1.5 million+ trained worldwide', 'Suitable for any role or background'],
    href: '/services#mental',
  },
  {
    icon: Leaf, name: 'Forestry & Agricultural First Aid (+F)',
    tagline: 'Bolt-on qualification · Level 3 RQF',
    price: 'From £300', unit: 'per group (bolt-on to existing FA cert)', popular: false,
    features: ['Approx. 2-hour bolt-on session','Requires existing EFAW or FAW','Forestry-specific hazard response','Chainsaw injury management','Forestry Commission compliant','FAA Level 3 RQF certificate','Individuals or groups'],
    href: '/courses/forestry',
  },
  {
    icon: ClipboardCheck, name: 'Internal Quality Assurance (IQA)',
    tagline: 'Assessment sampling & verification',
    price: 'Price on application', unit: 'remote or on-site, tailored to your centre', popular: false,
    features: ['Assessment sampling & verification','Standardisation of assessor decisions','Awarding body & Ofqual compliance checks','Trainer & assessor feedback and CPD','Audit-ready documentation','Remote or on-site delivery'],
    href: '/courses/iqa',
  },
]

const FAQS = [
  {
    q: 'Can you train at our premises?',
    a: 'Yes. We come to you. All courses can be delivered at your workplace, keeping disruption to a minimum and saving you travel costs. All we need is a suitable training space.',
  },
  {
    q: 'How many people can attend each course?',
    a: 'EFAW and most courses accommodate up to 12 learners. Mental Health First Aid can accommodate up to 16. For larger organisations, we can run multiple groups on the same day.',
  },
  {
    q: 'Are the qualifications recognised by the HSE?',
    a: 'Yes. All our first aid qualifications are Ofqual regulated (Level 2 or Level 3 RQF) and fully recognised by the Health and Safety Executive, fulfilling your legal duty under the 1981 Regulations.',
  },
  {
    q: "What's included in the price?",
    a: 'All course materials, learner certificates, and tuition are included. Travel may be charged for locations outside of Sussex. Please request a quote for full pricing based on your location and group size.',
  },
  {
    q: 'Do you offer discounts for charities or multiple bookings?',
    a: 'Yes. We offer discounted rates for registered charities, community groups, and clients booking multiple courses or repeat annual training. Contact us to discuss your requirements.',
  },
  {
    q: 'How quickly can a course be arranged?',
    a: 'We typically accommodate bookings within 2–4 weeks. For urgent requirements, please call directly on 07908 783457.',
  },
  {
    q: 'How long are the certificates valid?',
    a: 'Level 3 certificates (EFAW, FAW, Paediatric FA) are valid for 3 years. The HSE recommends annual refresher training to maintain practical competency. We\'ll remind you when renewal is due.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-brand"
      >
        <span className="font-display font-bold text-dark text-sm">{q}</span>
        <ChevronDown size={16} className={`text-brand shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 border-t border-gray-100">
          <p className="text-gray-500 text-sm leading-relaxed pt-4">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function Pricing() {
  return (
    <div className="pt-[99px] lg:pt-[128px]">

      {/* ── PAGE HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-dark py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-soft to-dark/70" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Reveal className="max-w-2xl mx-auto">
            <Label><span className="text-white/70">Pricing</span></Label>
            <h1 className="font-display font-800 text-display-xl text-white mb-5 text-balance">
              Transparent, Competitive Pricing
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              No hidden costs, no surprise invoices. Clear guide pricing for every course, plus a free tailored quote for your exact requirements.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PRICING GRID ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {PLANS.map(({ icon: Icon, name, tagline, price, unit, popular, features, href }, i) => (
              <Reveal key={name} delay={Math.min(i, 5) * 60}>
                <div className={`relative flex flex-col h-full rounded-2xl overflow-hidden ${
                  popular
                    ? 'bg-dark shadow-card-lg ring-2 ring-brand'
                    : 'bg-white border border-gray-200 shadow-card'
                }`}>
                  {popular && (
                    <div className="bg-brand text-white text-[10px] font-bold font-display tracking-widest uppercase text-center py-2">
                      ★ Most Popular
                    </div>
                  )}
                  <div className="p-7 flex flex-col flex-1">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${popular ? 'bg-brand/25' : 'bg-brand-light'}`}>
                      <Icon size={20} className="text-brand" />
                    </div>
                    <h3 className={`font-display font-bold text-lg leading-snug mb-1.5 ${popular ? 'text-white' : 'text-dark'}`}>{name}</h3>
                    <p className={`text-sm mb-5 ${popular ? 'text-gray-400' : 'text-gray-500'}`}>{tagline}</p>

                    <div className="mb-5">
                      <div className={`font-display font-800 text-3xl tracking-tight ${popular ? 'text-white' : 'text-dark'}`}>{price}</div>
                      <div className={`text-xs mt-1 ${popular ? 'text-gray-400' : 'text-gray-500'}`}>{unit}</div>
                    </div>

                    <div className={`h-px mb-5 ${popular ? 'bg-white/10' : 'bg-gray-100'}`} />

                    <ul className="space-y-2.5 flex-1 mb-7">
                      {features.map(f => (
                        <li key={f} className={`flex items-start gap-2.5 text-sm ${popular ? 'text-gray-300' : 'text-gray-600'}`}>
                          <CheckCircle2 size={13} className="text-brand mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link to="/booking"
                      className={`block text-center px-5 py-3 rounded-xl text-sm font-bold font-display transition-[background-color,box-shadow,transform] duration-150 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 ${
                        popular
                          ? 'bg-brand text-white hover:bg-brand-dark shadow-cta focus-visible:outline-white'
                          : 'bg-gray-100 text-dark hover:bg-gray-200 focus-visible:outline-dark'
                      }`}
                    >
                      Get a Quote
                    </Link>
                    <Link to={href} className={`block text-center text-xs mt-3 hover:underline ${popular ? 'text-gray-500' : 'text-gray-400'}`}>
                      View course details →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <div className="mt-8 bg-brand-light border border-red-200 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-brand/12 rounded-xl flex items-center justify-center shrink-0">
                <MessageCircle size={17} className="text-brand" />
              </div>
              <div>
                <h4 className="font-display font-bold text-dark text-sm mb-1">Prices are guide rates. Your quote will be tailored.</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Final pricing depends on group size, location, and the number of courses booked.{' '}
                  <Link to="/booking" className="text-brand font-bold hover:underline">Request a free tailored quote</Link>
                  {' '}- we respond within 24 hours.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <Label>Common Questions</Label>
            <h2 className="font-display font-800 text-display-lg text-dark">Frequently Asked Questions</h2>
          </Reveal>
          <div className="space-y-3">
            {FAQS.map(faq => (
              <Reveal key={faq.q}>
                <FAQItem {...faq} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-24 bg-brand overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <Reveal className="relative max-w-2xl mx-auto px-6 text-center">
          <div className="label mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <span className="rule-brand" style={{ background: 'rgba(255,255,255,0.5)' }} />
            Free Quote
          </div>
          <h2 className="font-display font-800 text-display-lg text-white mb-5">Get Your Free Quote Today</h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Tell us what you need and we'll respond within 24 hours with a tailored, no-obligation quote.
          </p>
          <Link to="/booking"
            className="inline-flex items-center gap-2 bg-white text-brand px-7 py-4 rounded-xl font-bold font-display text-base
              hover:bg-gray-50 active:scale-[0.98]
              shadow-[0_4px_20px_rgba(0,0,0,0.15)]
              transition-[background-color,transform] duration-150"
          >
            Request a Quote <ArrowRight size={17} />
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
