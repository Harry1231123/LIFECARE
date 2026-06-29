import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Award, Shield, Users, Building2, Stethoscope, BadgeCheck, Heart, Star, PhoneCall, Brain } from 'lucide-react'
import Reveal from '../components/Reveal'

function Label({ children }) {
  return (
    <div className="label mb-4">
      <span className="rule-brand" />
      {children}
    </div>
  )
}

function Btn({ to, href, children, variant = 'primary' }) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold font-display text-sm transition-[background-color,box-shadow,transform] duration-150 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2'
  const v = {
    primary: `bg-brand text-white hover:bg-brand-dark shadow-cta hover:shadow-[0_6px_24px_rgba(210,74,37,0.45)] focus-visible:outline-brand`,
    outline: `border-2 border-brand text-brand hover:bg-brand hover:text-white focus-visible:outline-brand`,
    ghost:   `border-2 border-white/40 text-white hover:bg-white/15 focus-visible:outline-white`,
  }
  if (href) return <a href={href} className={`${base} ${v[variant]}`}>{children}</a>
  return <Link to={to} className={`${base} ${v[variant]}`}>{children}</Link>
}

const CREDENTIALS = [
  { icon: Stethoscope, label: 'Level 5 Diploma in First Response Emergency & Urgent Care (Ambulance Technician)' },
  { icon: BadgeCheck,  label: 'Qualified Trainer & Assessor in Regulated Qualifications Delivery' },
  { icon: BadgeCheck,  label: 'BLSi Qualified (Basic Life Support Instructor) via Resuscitation Council UK (guidelines aligned)' },
  { icon: BadgeCheck,  label: 'L3 AET · L3 CAVA · Specialist Instructor Status (UK Government)' },
  { icon: Brain,       label: 'LivingWorks ASIST Qualified & Mental Health First Aider (MHFA England)' },
  { icon: Shield,      label: 'TRiM Practitioner (Trauma Risk Management) for NHS & UK Government Organisations' },
  { icon: Shield,      label: '17+ Years in First Aid across Public, Private & Government Sectors' },
  { icon: Building2,   label: 'St John Ambulance: Medical Events & Management' },
  { icon: Users,       label: 'Works for the Ambulance Service in Both Frontline and Volunteer Roles' },
  { icon: Award,       label: 'Grand Priors Award, St John Ambulance (Highest Equalisation Attainable)' },
  { icon: Award,       label: 'Resuscitation Certificate, Royal Humane Society' },
  { icon: Award,       label: 'Prison Group Directors Commendation for Bravery, HM Prison Service' },
  { icon: Star,        label: 'ROSC Award (Return of Spontaneous Circulation), South East Coast Ambulance' },
]

const VALUES = [
  {
    num: '01',
    title: 'Real-World Relevance',
    body: 'Harry teaches what he lives. Every scenario, every skill, every decision framework comes from genuine frontline ambulance and emergency response experience, not a training manual.',
  },
  {
    num: '02',
    title: 'Genuine Competence',
    body: 'Success isn\'t measured by who passes a test. It\'s measured by who can actually respond when it matters. Every learner leaves with hands-on confidence and skills that hold up under pressure.',
  },
  {
    num: '03',
    title: 'Legal Compliance',
    body: 'Every first aid qualification is Ofqual regulated and meets HSE requirements.',
  },
  {
    num: '04',
    title: 'Accessible Training',
    body: "Life-saving skills shouldn't be the preserve of well-funded organisations. Harry brings training to your workplace, your community, and your budget, with no unnecessary fuss or overhead.",
  },
]

const SECTORS = [
  'NHS & Healthcare',
  'Local Government',
  'Blue Light Services',
  'Construction & Trades',
  'Hospitality & Events',
  'Schools & Education',
  'Retail & Logistics',
  'Community Organisations',
  'Forestry & Agriculture',
  'Early Years & Childcare',
  'Prisons & Custodial',
  'Corporate & Finance',
]

export default function About() {
  return (
    <div className="pt-[141px] lg:pt-[149px]">

      {/* ── PAGE HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-dark py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero.webp" alt="" aria-hidden className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <Label><span className="text-white/70">About LifeCare Training</span></Label>
            <h1 className="font-display font-800 text-display-xl text-white mb-3 text-balance">
              Training Built on Real Experience
            </h1>
            <p className="font-display font-bold text-brand text-xl mb-5">Become a lifesaver with LifeCare Training.</p>
            <p className="text-gray-300 text-lg leading-relaxed">
              LifeCare Training was founded by Harry Todhunter, an active ambulance technician with extensive industry experience and a mission to create genuine lifesavers, not just certificate holders.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

            <Reveal variant="scale" className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card-lg">
                <img
                  src="/assets/harry.png"
                  alt="Harry Todhunter, LifeCare Training founder and lead instructor"
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/55 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-4 lg:-right-8 bg-white rounded-2xl p-5 shadow-card-lg max-w-[185px]">
                <div className="font-display font-800 text-4xl text-dark tracking-tight mb-1">17+</div>
                <div className="text-gray-500 text-xs leading-snug">Years industry experience</div>
              </div>
              <div className="absolute top-6 -left-4 lg:-left-8 bg-navy text-white rounded-2xl px-4 py-3 shadow-card-lg">
                <div className="flex items-center gap-2">
                  <Stethoscope size={13} className="text-brand" />
                  <span className="text-xs font-bold font-display">Active Ambulance Technician</span>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <Label>Meet the Founder</Label>
                <h2 className="font-display font-800 text-display-lg text-dark mb-5 text-balance">
                  Harry Todhunter
                </h2>
              </Reveal>
              <Reveal delay={60}>
                <div className="space-y-4 text-gray-500 leading-[1.8] text-[15px] mb-8">
                  <p>LifeCare Training was founded on a simple but powerful belief: the best first aid trainer is someone who has genuinely saved lives, not just someone without current hands-on experience.</p>
                  <p>Harry holds a Level 5 Diploma in First Response Emergency &amp; Urgent Care, is BLSi qualified through the Resuscitation Council UK (guidelines aligned), and holds L3 AET, L3 CAVA, and Specialist Instructor status with the UK Government. He works for the ambulance service in both frontline and volunteer roles and is a qualified Trainer and Assessor for regulated qualifications.</p>
                  <p>With roots in St John Ambulance's medical events and management teams, and over 17 years delivering first aid across NHS trusts, government organisations, corporate businesses, and public events, Harry brings an unmatched depth of real-world experience to every session.</p>
                  <p>Harry is a qualified Mental Health First Aider, a member of the Association of Mental Health First Aiders, and holds ASIST certification. As a TRiM Practitioner he undertakes Trauma Risk Management assessments for ambulance services and UK Government organisations. He has completed additional training with CRUSE in bereavement support and CPD in Breaking Bad News, and is passionate about saving lives and supporting individuals facing mental health challenges.</p>
                  <p>His dedication has been recognised through some of the most prestigious commendations in the sector: a Resuscitation Certificate from the Royal Humane Society, a ROSC Award from South East Coast Ambulance, a Prison Group Directors Commendation for Bravery from HM Prison Service, commendation by the UK Home Office COO, and the Grand Priors Award from St John Ambulance.</p>
                </div>
              </Reveal>
              <Reveal delay={120} className="flex flex-wrap gap-3">
                <Btn to="/booking" variant="primary">Get a Free Quote <ArrowRight size={15} /></Btn>
                <Btn href="https://wa.me/447908783457" variant="outline">
                  <Heart size={14} /> WhatsApp Harry
                </Btn>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ───────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center max-w-xl mx-auto mb-12">
            <Label>Qualifications & Experience</Label>
            <h2 className="font-display font-800 text-display-md text-dark">
              Why Harry's Background Matters
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CREDENTIALS.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} delay={i * 60}>
                <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-2xl p-5 shadow-card hover:shadow-card-hover hover-lift transition-shadow duration-200">
                  <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-brand" />
                  </div>
                  <span className="text-dark font-semibold text-sm leading-snug">{label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCREDITATIONS ────────────────────────────────────────── */}
      <section className="py-10 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-6">
            <p className="text-gray-400 text-xs font-bold font-display uppercase tracking-[0.18em]">Accreditations &amp; Regulatory Compliance</p>
          </Reveal>
          <Reveal delay={60}>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              {[
                { abbr: 'FAA', name: 'First Aid Awards', desc: 'Awarding Organisation' },
                { abbr: 'AoHT', name: 'Assoc. of Health Trainers', desc: 'Member' },
                { abbr: 'RQF', name: 'Ofqual Regulated', desc: 'Level 2 & Level 3' },
                { abbr: 'RCUK', name: 'Resuscitation Council UK', desc: 'Guidelines Aligned' },
              ].map(({ abbr, name, desc }) => (
                <div key={name} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-dark rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-white text-[10px] font-bold font-display leading-tight text-center">{abbr}</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-dark text-sm leading-tight">{name}</p>
                    <p className="text-gray-400 text-xs">{desc}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center shrink-0">
                  <Star size={16} className="text-brand" />
                </div>
                <div>
                  <p className="font-display font-bold text-dark text-sm leading-tight">Award Winner</p>
                  <p className="text-gray-400 text-xs">Community commendations</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PARTNERS ──────────────────────────────────────────────── */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <p className="text-gray-400 text-xs font-bold font-display uppercase tracking-[0.18em]">Partners &amp; Affiliations</p>
          </Reveal>
          <Reveal delay={60}>
            <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
              <div className="flex flex-col items-center gap-3">
                <img src="/assets/aoht.png" alt="Association of Healthcare Trainers" className="h-14 w-auto object-contain" />
                <p className="text-gray-400 text-xs font-semibold font-display text-center">AoHT Member</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <img src="/assets/amhfa.png" alt="Association of Mental Health First Aiders" className="h-14 w-auto object-contain" />
                <p className="text-gray-400 text-xs font-semibold font-display text-center">AMHFA Member</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <img src="/assets/bodo.jpg" alt="Bra Off Defib On" className="h-14 w-auto object-contain" />
                <p className="text-gray-400 text-xs font-semibold font-display text-center">BODO Supporter</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="h-14 w-14 rounded-xl overflow-hidden">
                  <img src="/assets/faff.jpg" alt="First Aid Facilitators Forum" className="w-full h-full object-contain" />
                </div>
                <p className="text-gray-400 text-xs font-semibold font-display text-center">FAFF Member</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center max-w-xl mx-auto mb-14">
            <Label>Our Values</Label>
            <h2 className="font-display font-800 text-display-lg text-dark">
              What Drives Everything We Do
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ num, title, body }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="relative bg-white border border-gray-200 rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-shadow duration-200 overflow-hidden">
                  <span className="absolute top-5 right-5 text-gray-100 font-display font-800 text-5xl leading-none select-none">{num}</span>
                  <div className="rule-brand mb-4" />
                  <h3 className="font-display font-bold text-dark text-lg mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORS ───────────────────────────────────────────────── */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-8">
            <h2 className="font-display font-800 text-[1.5rem] text-dark mb-2">Sectors We Serve</h2>
            <p className="text-gray-500 text-sm">From government organisations to community groups, Harry has trained them all.</p>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex flex-wrap justify-center gap-3">
              {SECTORS.map(s => (
                <span key={s} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-dark text-sm font-semibold font-display shadow-card">
                  <CheckCircle2 size={12} className="text-brand shrink-0" /> {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 bg-brand overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <Reveal className="relative max-w-2xl mx-auto px-6 text-center">
          <div className="label mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <span className="rule-brand" style={{ background: 'rgba(255,255,255,0.5)' }} />
            Start Today
          </div>
          <h2 className="font-display font-800 text-display-lg text-white mb-5">
            Ready to Train with the Best?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Get a free, no-obligation quote tailored to your organisation's specific needs. Harry responds within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Btn to="/booking" variant="light">Get a Free Quote <ArrowRight size={15} /></Btn>
            <Btn href="https://wa.me/447908783457" variant="ghost">
              <Heart size={14} /> WhatsApp Harry
            </Btn>
          </div>
        </Reveal>
      </section>

    </div>
  )
}
