import { Link } from 'react-router-dom'
import { ArrowRight, Stethoscope, BadgeCheck, Shield, Users, Award, Heart, Star, CheckCircle2, Building2, BookOpen, Activity, Plane, ExternalLink, Brain } from 'lucide-react'
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
    light:   `bg-white text-brand hover:bg-gray-50 shadow-md focus-visible:outline-white`,
  }
  if (href) return <a href={href} className={`${base} ${v[variant]}`}>{children}</a>
  return <Link to={to} className={`${base} ${v[variant]}`}>{children}</Link>
}

function Avatar({ initials, color = 'brand' }) {
  return (
    <div className={`w-24 h-24 rounded-2xl flex items-center justify-center shadow-card-lg ${color === 'brand' ? 'bg-brand' : 'bg-dark'}`}>
      <span className="text-white font-display font-800 text-3xl tracking-tight">{initials}</span>
    </div>
  )
}

const HARRY_CREDS = [
  { icon: Stethoscope, label: 'Level 5 Diploma: First Response Emergency & Urgent Care (Ambulance Technician)' },
  { icon: BadgeCheck,  label: 'Qualified Trainer & Assessor in Regulated Qualifications Delivery' },
  { icon: BadgeCheck,  label: 'BLSI Qualified (Basic Life Support Instructor) via Resuscitation Council UK' },
  { icon: BadgeCheck,  label: 'L3 AET · L3 CAVA · Specialist Instructor Status (UK Government)' },
  { icon: Brain,       label: 'LivingWorks ASIST Trainer & Mental Health First Aider (MHFA England)' },
  { icon: Brain,       label: 'Member, Association of Mental Health First Aiders' },
  { icon: Shield,      label: 'TRiM Practitioner (Trauma Risk Management) for NHS & UK Government Organisations' },
  { icon: Shield,      label: '17+ Years in First Aid across Public, Private & Government Sectors' },
  { icon: Building2,   label: 'St John Ambulance: Medical Events & Management' },
  { icon: Users,       label: 'Works for the Ambulance Service in Both Frontline and Volunteer Roles' },
  { icon: Users,       label: 'Member: FAFF (First Aid Facilitators Forum) & BODO Campaign' },
  { icon: Award,       label: 'Grand Priors Award, St John Ambulance (Highest Equalisation Attainable)' },
  { icon: Award,       label: 'Resuscitation Certificate, Royal Humane Society' },
  { icon: Award,       label: 'Prison Group Directors Commendation for Bravery, HM Prison Service' },
  { icon: Award,       label: 'ROSC Award (Return of Spontaneous Circulation), South East Coast Ambulance' },
  { icon: Star,        label: 'Commended by UK Home Office COO' },
]

const JENNIFER_CREDS = [
  { icon: Stethoscope, label: 'Paramedic with 20 Years Pre-Hospital Care Experience' },
  { icon: Building2,   label: '15 Years with London Ambulance Service' },
  { icon: Activity,    label: '5 Years in Primary Care' },
  { icon: BadgeCheck,  label: 'PPED (Paramedic Practice Educator)' },
  { icon: Heart,       label: 'First Aid Instructor & Clinical Mentor' },
  { icon: Users,       label: 'Passionate About Supporting First Aiders & Clinicians' },
]

const HILARY_CREDS = [
  { icon: Users,       label: 'Community Events Contract Manager' },
  { icon: BookOpen,    label: 'Educator with Extensive Teaching Experience' },
  { icon: Shield,      label: 'Quality Assurance with Years of Professional Experience' },
  { icon: Heart,       label: 'Community First Responder (CFR)' },
  { icon: BadgeCheck,  label: 'L3AET · L4 IQA · FREC4 Qualified' },
  { icon: Star,        label: 'BODO Ambassador & FAFF Member' },
]

export default function Team() {
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
            <Label><span className="text-white/70">Our Team</span></Label>
            <h1 className="font-display font-800 text-display-xl text-white mb-5 text-balance">
              The People Behind the Training
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Every member of the LifeCare Training team brings genuine frontline experience. We don't just teach first aid. We've lived it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── HARRY ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

            <Reveal variant="scale" className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card-lg">
                <img
                  src="/assets/harry.png"
                  alt="Harry Todhunter, LifeCare Training founder and lead instructor"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/55 via-transparent to-transparent" />
              </div>
              <div className="absolute top-6 -right-4 lg:-right-8 bg-dark text-white rounded-2xl px-4 py-3 shadow-card-lg">
                <div className="flex items-center gap-2">
                  <Stethoscope size={13} className="text-brand" />
                  <span className="text-xs font-bold font-display">Active Ambulance Technician</span>
                </div>
              </div>
              <div className="absolute -bottom-5 left-6 bg-white rounded-2xl p-4 shadow-card-lg">
                <div className="font-display font-800 text-3xl text-dark tracking-tight mb-0.5">17+</div>
                <div className="text-gray-500 text-xs leading-snug">Years frontline experience</div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <Label>Founder &amp; Lead Instructor</Label>
                <h2 className="font-display font-800 text-display-lg text-dark mb-5 text-balance">
                  Harry Todhunter
                </h2>
              </Reveal>
              <Reveal delay={60}>
                <div className="space-y-4 text-gray-500 leading-[1.8] text-[15px] mb-8">
                  <p>LifeCare Training was founded on a simple but powerful belief: the best first aid trainer is someone who has genuinely saved lives, not someone who last treated a real emergency a decade ago.</p>
                  <p>Harry holds a Level 5 Diploma in First Response Emergency &amp; Urgent Care, is BLSI qualified through the Resuscitation Council UK, and holds L3 AET, L3 CAVA, and Specialist Instructor status with the UK Government. He works for the ambulance service in both frontline and volunteer roles and is a qualified Trainer and Assessor for regulated qualifications. With roots in St John Ambulance's medical events and management teams, he has spent over 17 years delivering training across NHS trusts, government organisations, corporate businesses, and public events.</p>
                  <p>Harry is a qualified Mental Health First Aider, a member of the Association of Mental Health First Aiders, and holds ASIST certification. As a TRiM Practitioner he undertakes Trauma Risk Management assessments for ambulance services and UK Government organisations, and has completed additional training with CRUSE in bereavement support and CPD in Breaking Bad News. He is passionate about saving lives and supporting individuals facing mental health challenges.</p>
                  <p>In the UK, less than 10% of people survive an out-of-hospital cardiac arrest. Harry is committed to changing that, both as a clinician and trainer and as a community volunteer. He is a proud member of FAFF (First Aid Facilitators Forum) and supports the BODO (Bra Off Defib On) campaign, which addresses the fact that women are 27% less likely to have CPR started on them in cardiac arrest.</p>
                  <p>His dedication has been recognised through some of the most prestigious commendations in the sector: a Resuscitation Certificate from the Royal Humane Society, a ROSC Award from South East Coast Ambulance, a Prison Group Directors Commendation for Bravery from HM Prison Service, commendation by the UK Home Office COO, and the Grand Priors Award from St John Ambulance, the highest equalisation attainable within the organisation.</p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {HARRY_CREDS.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                      <div className="w-8 h-8 bg-brand-light rounded-lg flex items-center justify-center shrink-0">
                        <Icon size={14} className="text-brand" />
                      </div>
                      <span className="text-dark font-semibold text-xs leading-snug">{label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={160} className="flex flex-wrap gap-3">
                <Btn to="/booking" variant="primary">Book a Course <ArrowRight size={15} /></Btn>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── JENNIFER ──────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

            <div className="lg:order-2">
              <Reveal variant="scale" className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-card-lg">
                  <img
                    src="/assets/jennifer.png"
                    alt="Jennifer, Paramedic &amp; Clinical Mentor"
                    className="w-full h-[500px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/55 via-transparent to-transparent" />
                </div>
                <div className="absolute top-6 -left-4 lg:-left-8 bg-dark text-white rounded-2xl px-4 py-3 shadow-card-lg">
                  <div className="flex items-center gap-2">
                    <Stethoscope size={13} className="text-brand" />
                    <span className="text-xs font-bold font-display">Paramedic &amp; PPED</span>
                  </div>
                </div>
                <div className="absolute -bottom-5 right-6 bg-white rounded-2xl p-4 shadow-card-lg">
                  <div className="font-display font-800 text-3xl text-dark tracking-tight mb-0.5">20+</div>
                  <div className="text-gray-500 text-xs leading-snug">Years pre-hospital care</div>
                </div>
              </Reveal>
            </div>

            <div className="lg:order-1">
              <Reveal>
                <Label>Instructor &amp; Clinical Mentor</Label>
                <h2 className="font-display font-800 text-display-lg text-dark mb-5 text-balance">
                  Jennifer
                </h2>
              </Reveal>
              <Reveal delay={60}>
                <div className="space-y-4 text-gray-500 leading-[1.8] text-[15px] mb-8">
                  <p>Jennifer brings over 20 years of pre-hospital care experience to LifeCare Training, including 15 years with the London Ambulance Service and 5 years working in Primary Care. Her career spans the full breadth of emergency and community medicine, from responding to life-threatening incidents on the frontline to supporting long-term patient care.</p>
                  <p>As a qualified Paramedic Practice Educator (PPED), Jennifer is uniquely equipped to bridge the gap between clinical practice and education. She works with both first aiders taking their first steps and experienced clinicians seeking to progress their skills, adapting her teaching to meet every learner where they are.</p>
                  <p>Jennifer's passion is straightforward: she believes that well-supported first aiders and clinicians save more lives. Everything she does in the classroom is shaped by that conviction and by two decades of real-world evidence.</p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {JENNIFER_CREDS.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-card">
                      <div className="w-8 h-8 bg-brand-light rounded-lg flex items-center justify-center shrink-0">
                        <Icon size={14} className="text-brand" />
                      </div>
                      <span className="text-dark font-semibold text-xs leading-snug">{label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={160} className="flex flex-wrap gap-3">
                <Btn to="/booking" variant="primary">Book a Course <ArrowRight size={15} /></Btn>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOLLY ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

            <Reveal variant="scale" className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card-lg">
                <img
                  src="/assets/molly.png"
                  alt="Molly, Instructor at LifeCare Training"
                  className="w-full h-[500px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/55 via-transparent to-transparent" />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <Label>Instructor</Label>
                <h2 className="font-display font-800 text-display-lg text-dark mb-5 text-balance">
                  Molly
                </h2>
              </Reveal>
              <Reveal delay={60}>
                <p className="text-gray-400 leading-[1.8] text-[15px] mb-8">Full profile coming soon.</p>
              </Reveal>
              <Reveal delay={160} className="flex flex-wrap gap-3">
                <Btn to="/booking" variant="primary">Book a Course <ArrowRight size={15} /></Btn>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── HILARY ────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

            <div className="lg:order-2">
              <Reveal variant="scale" className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-card-lg">
                  <img
                    src="/assets/hilary.jpg"
                    alt="Hilary, Community Events Manager and Educator"
                    className="w-full h-[500px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/55 via-transparent to-transparent" />
                </div>
                <div className="absolute top-6 -left-4 lg:-left-8 bg-brand text-white rounded-2xl px-4 py-3 shadow-card-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-white" />
                    <span className="text-xs font-bold font-display">Community First Responder</span>
                  </div>
                </div>
                <div className="absolute -bottom-5 right-6 bg-white rounded-2xl p-4 shadow-card-lg">
                  <div className="font-display font-800 text-lg text-dark tracking-tight">L3AET · L4 IQA · FREC4</div>
                  <div className="text-gray-500 text-xs mt-0.5">Qualified</div>
                </div>
              </Reveal>
            </div>

            <div className="lg:order-1">
              <Reveal>
                <Label>Events Manager &amp; Educator</Label>
                <h2 className="font-display font-800 text-display-lg text-dark mb-5 text-balance">
                  Hilary
                </h2>
              </Reveal>
              <Reveal delay={60}>
                <div className="space-y-4 text-gray-500 leading-[1.8] text-[15px] mb-8">
                  <p>Hilary manages LifeCare Training's community events contract, bringing a rare combination of frontline volunteerism and rigorous quality assurance to everything she oversees. As a qualified educator, she ensures that the training we deliver meets the highest standards, consistently and reliably.</p>
                  <p>Her background spans years of experience in quality assurance, giving her an exceptional eye for process, consistency, and learner outcomes. Alongside her professional work, Hilary volunteers as a Community First Responder, a commitment that keeps her rooted in the real-world impact of the skills she helps deliver.</p>
                  <p>Hilary holds multiple respected qualifications including L3AET, L4 IQA, and FREC4. She is also an ambassador for BODO and a proud member of FAFF, organisations dedicated to advancing first aid education and community resilience across the UK.</p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {HILARY_CREDS.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-card">
                      <div className="w-8 h-8 bg-brand-light rounded-lg flex items-center justify-center shrink-0">
                        <Icon size={14} className="text-brand" />
                      </div>
                      <span className="text-dark font-semibold text-xs leading-snug">{label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={160} className="flex flex-wrap gap-3">
                <Btn to="/booking" variant="primary">Book a Course <ArrowRight size={15} /></Btn>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEPHEN ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

            <Reveal variant="scale" className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-card-lg flex flex-col items-center justify-center py-16 px-8">
                <Avatar initials="S" color="brand" />
                <div className="mt-6 text-center">
                  <p className="font-display font-800 text-dark text-2xl mb-1">Stephen</p>
                  <p className="text-brand font-semibold text-sm">Health &amp; Safety Specialist</p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <Label>Health &amp; Safety Specialist</Label>
                <h2 className="font-display font-800 text-display-lg text-dark mb-5 text-balance">
                  Stephen
                </h2>
              </Reveal>
              <Reveal delay={60}>
                <div className="space-y-4 text-gray-500 leading-[1.8] text-[15px] mb-8">
                  <p>Stephen is a Health &amp; Safety specialist and senior manager with extensive NHS experience. His expertise spans health and safety management, risk assessment, fire assessment, and keeping organisations and the people within them safe across complex, multi-site environments.</p>
                  <p>He has delivered safety leadership across a diverse range of organisations, including HM Prison Service, educational institutions, and NHS trusts. This breadth of experience gives him a rare ability to understand the specific regulatory pressures and operational realities facing each sector.</p>
                  <p>Stephen holds a NEBOSH Diploma, L3 AET, and a Fire Assessor qualification, and is also a first aid instructor delivering accredited qualifications through the Royal Society for Public Health.</p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: Shield,     label: 'NEBOSH Diploma in Health & Safety' },
                    { icon: BadgeCheck, label: 'L3 AET & Fire Assessor Qualified' },
                    { icon: Award,      label: 'First Aid Instructor (RSPH Accredited)' },
                    { icon: Building2,  label: 'NHS, HM Prison Service & Education Sectors' },
                    { icon: Users,      label: 'Senior NHS Health & Safety Manager' },
                    { icon: Shield,     label: 'Risk Assessment & Fire Assessment Specialist' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                      <div className="w-8 h-8 bg-brand-light rounded-lg flex items-center justify-center shrink-0">
                        <Icon size={14} className="text-brand" />
                      </div>
                      <span className="text-dark font-semibold text-xs leading-snug">{label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={160} className="flex flex-wrap gap-3">
                <Btn to="/booking" variant="primary">Book a Course <ArrowRight size={15} /></Btn>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHARLEY ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

            <div className="lg:order-2">
              <Reveal variant="scale" className="relative">
                <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-card-lg flex flex-col items-center justify-center py-16 px-8">
                  <Avatar initials="C" color="dark" />
                  <div className="mt-6 text-center">
                    <p className="font-display font-800 text-dark text-2xl mb-1">Charley</p>
                    <p className="text-brand font-semibold text-sm">Instructor</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:order-1">
              <Reveal>
                <Label>Instructor</Label>
                <h2 className="font-display font-800 text-display-lg text-dark mb-5 text-balance">
                  Charley
                </h2>
              </Reveal>
              <Reveal delay={60}>
                <p className="text-gray-400 leading-[1.8] text-[15px] mb-8">Full profile coming soon.</p>
              </Reveal>
              <Reveal delay={160} className="flex flex-wrap gap-3">
                <Btn to="/booking" variant="primary">Book a Course <ArrowRight size={15} /></Btn>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHARLOTTE ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

            <div className="lg:order-2">
              <Reveal variant="scale" className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-card-lg">
                  <img
                    src="/assets/charlotte.jpg"
                    alt="Charlotte Crocker, LivingWorks ASIST Trainer and EFAW Trainer"
                    className="w-full h-[500px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/55 via-transparent to-transparent" />
                </div>
                <div className="absolute top-6 -left-4 lg:-left-8 bg-dark text-white rounded-2xl px-4 py-3 shadow-card-lg">
                  <div className="flex items-center gap-2">
                    <Plane size={13} className="text-brand" />
                    <span className="text-xs font-bold font-display">Aviation &amp; Emergency Services</span>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:order-1">
              <Reveal>
                <Label>ASIST Trainer &amp; EFAW Instructor</Label>
                <h2 className="font-display font-800 text-display-lg text-dark mb-5 text-balance">
                  Charlotte Crocker
                </h2>
              </Reveal>
              <Reveal delay={60}>
                <div className="space-y-4 text-gray-500 leading-[1.8] text-[15px] mb-8">
                  <p>Charlotte is a freelance LivingWorks ASIST trainer and Emergency First Aid at Work instructor with a background spanning aviation and emergency services. She delivers training to a diverse range of corporate, commercial and community clients, including British Airways and South East Coast Ambulance Service.</p>
                  <p>Charlotte is passionate about suicide prevention and brings a calm, empathetic approach to ASIST workshops, creating a safe environment where participants feel confident to engage openly. Her varied professional background gives her an ability to connect with learners from all walks of life.</p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: BadgeCheck, label: 'Certified LivingWorks ASIST Trainer' },
                    { icon: Shield,     label: 'Emergency First Aid at Work Instructor' },
                    { icon: Plane,      label: 'Background in Aviation & Emergency Services' },
                    { icon: Heart,      label: 'Passionate About Suicide Prevention' },
                    { icon: Users,      label: 'Clients include British Airways & SECAMB' },
                    { icon: Star,       label: 'Corporate, Commercial & Community Delivery' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-card">
                      <div className="w-8 h-8 bg-brand-light rounded-lg flex items-center justify-center shrink-0">
                        <Icon size={14} className="text-brand" />
                      </div>
                      <span className="text-dark font-semibold text-xs leading-snug">{label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={160} className="flex flex-wrap gap-3">
                <Btn to="/booking" variant="primary">Book a Course <ArrowRight size={15} /></Btn>
                <Btn href="https://www.linkedin.com/in/charlotte-crocker-5a684a30a/" variant="outline">
                  <ExternalLink size={14} /> LinkedIn
                </Btn>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 bg-brand overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <Reveal className="relative max-w-2xl mx-auto px-6 text-center">
          <div className="label mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <span className="rule-brand" style={{ background: 'rgba(255,255,255,0.5)' }} />
            Train With Our Team
          </div>
          <h2 className="font-display font-800 text-display-lg text-white mb-5">
            Experience Matters. So Does Who Teaches You.
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Get a free, no-obligation quote and find out which of our team is the right fit for your organisation's training needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Btn to="/booking" variant="light">Get a Free Quote <ArrowRight size={15} /></Btn>
            <Btn to="/contact" variant="ghost">
              <Heart size={14} /> Get in Touch
            </Btn>
          </div>
        </Reveal>
      </section>

    </div>
  )
}
