import { Link } from 'react-router-dom'
import { HeartPulse, Calendar, Brain, ClipboardCheck, ArrowRight, CheckCircle2, Clock, Users, Award, Baby, Shield, Leaf, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import Reveal from '../components/Reveal'

function Label({ children }) {
  return (
    <div className="label mb-4">
      <span className="rule-brand" />
      {children}
    </div>
  )
}

function Btn({ to, children }) {
  return (
    <Link to={to}
      className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-xl font-bold font-display text-sm
        hover:bg-brand-dark active:scale-[0.98]
        shadow-cta hover:shadow-[0_6px_24px_rgba(210,74,37,0.45)]
        transition-[background-color,box-shadow,transform] duration-150
        focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
    >
      {children}
    </Link>
  )
}

function CourseNav({ services }) {
  const ref = useRef(null)
  const [canLeft, setCanLeft]   = useState(false)
  const [canRight, setCanRight] = useState(false)

  const check = () => {
    const el = ref.current
    if (!el) return
    setCanLeft(el.scrollLeft > 4)
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }

  useEffect(() => {
    const el = ref.current
    if (!el) return
    check()
    el.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => {
      el.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [])

  const nudge = dir => ref.current?.scrollBy({ left: dir * 220, behavior: 'smooth' })

  return (
    <div className="relative">
      {/* Left fade + button */}
      <div className={`pointer-events-none absolute left-0 top-0 bottom-0 w-14 bg-gradient-to-r from-white to-transparent z-10 transition-opacity duration-150 ${canLeft ? 'opacity-100' : 'opacity-0'}`} />
      <button
        onClick={() => nudge(-1)}
        aria-label="Scroll left"
        className={`absolute left-1 top-1/2 -translate-y-1/2 z-20 w-7 h-7 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center text-gray-500 hover:text-dark hover:border-gray-300 transition-[opacity,transform] duration-150 ${canLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <ChevronLeft size={13} />
      </button>

      {/* Scrollable track */}
      <div ref={ref} className="flex gap-1 overflow-x-auto py-2 scrollbar-none px-8">
        {services.map(({ id, icon: Icon, title }) => (
          <a key={id} href={`#${id}`}
            className="flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold font-display text-gray-500 hover:text-dark hover:bg-gray-50 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-1">
            <Icon size={11} className="text-brand" />
            {title.split(' ').slice(0, 3).join(' ')}
          </a>
        ))}
      </div>

      {/* Right fade + button */}
      <div className={`pointer-events-none absolute right-0 top-0 bottom-0 w-14 bg-gradient-to-l from-white to-transparent z-10 transition-opacity duration-150 ${canRight ? 'opacity-100' : 'opacity-0'}`} />
      <button
        onClick={() => nudge(1)}
        aria-label="Scroll right"
        className={`absolute right-1 top-1/2 -translate-y-1/2 z-20 w-7 h-7 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center text-gray-500 hover:text-dark hover:border-gray-300 transition-[opacity,transform] duration-150 ${canRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <ChevronRight size={13} />
      </button>
    </div>
  )
}

function Meta({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
      <Icon size={13} className="text-brand shrink-0" />
      {label}
    </div>
  )
}

const SERVICES = [
  {
    id: 'efaw', icon: HeartPulse, tag: 'Most Popular · HSE Required',
    title: 'Emergency First Aid at Work',
    subtitle: 'FAA Award — Level 3 RQF | 1-Day Course',
    price: 'From £850 per group',
    intro: 'The Health and Safety (First-Aid) Regulations 1981 require every employer to make adequate first aid provision. EFAW is the benchmark qualification for lower-risk workplaces — and the most direct route to protecting your team and satisfying your legal duty of care.',
    body: "Delivered by an active ambulance technician, this isn't a passive classroom experience. Learners practise hands-on skills in realistic scenarios, leaving genuinely capable of managing a cardiac arrest, severe bleeding, choking, or an unconscious casualty — not just able to recite the theory.",
    includes: ['Managing an unresponsive casualty','CPR and AED use (adult)','Severe bleeding control','Choking — adults','Shock recognition & management','Epilepsy & seizure response','Minor injury management','Primary survey (DRABC)','HSE-compliant record keeping','Ofqual certificate (3 years)'],
    meta: [{ icon: Clock, label: '1 Day (approx. 6 hours)' }, { icon: Users, label: 'Up to 12 learners per group' }, { icon: Award, label: 'FAA Level 3 RQF' }],
    image: '/assets/hero.webp',
  },
  {
    id: 'faw', icon: Shield, tag: 'Comprehensive Cover · Higher-Risk Workplaces',
    title: 'First Aid at Work',
    subtitle: 'FAA Award — Level 3 RQF | 3-Day Course',
    price: 'From £1,850 per group',
    intro: "For higher-risk workplaces and organisations requiring the deepest level of first aid provision, the full First Aid at Work qualification is the HSE's gold standard. Valid for 3 years and recognised across all sectors.",
    body: "Over three days, learners build advanced competency across a wide spectrum of medical emergencies. Ideal for businesses with multiple first aiders, higher-risk environments, or organisations wanting the highest possible standard of internal first aid provision.",
    includes: ['All EFAW content','Anatomy & physiology overview','Head, neck & back injuries','Chest injuries & pneumothorax','Sprains, strains & fractures','Eye & ear injuries','Poisoning & substance exposure','Medical conditions management','Advanced CPR techniques','Ofqual certificate (3 years)'],
    meta: [{ icon: Clock, label: '3 Days' }, { icon: Users, label: 'Up to 12 learners per group' }, { icon: Award, label: 'FAA Level 3 RQF' }],
    image: '/assets/team.webp',
  },
  {
    id: 'paediatric', icon: Baby, tag: 'EYFS & OFSTED Required',
    title: 'Paediatric First Aid',
    subtitle: 'FAA Award — Level 3 RQF | 2-Day Course',
    price: 'From £965 per group',
    intro: 'A legal requirement for many childcare settings under EYFS and OFSTED standards. This course equips learners with the specific, specialist skills needed to respond to emergencies involving babies and young children.',
    body: "Paediatric first aid is fundamentally different from adult first aid. Dosages, techniques, equipment, and conditions all require specialist knowledge. This course ensures your team is fully equipped for the unique challenges of caring for children in an emergency.",
    includes: ['Paediatric CPR (infant & child)','Paediatric AED awareness','Choking — infants & children','Seizures & febrile convulsions','Diabetic emergencies in children','Asthma attacks','Anaphylaxis & adrenaline auto-injectors','Meningitis recognition','Head, neck & back injuries','EYFS/OFSTED compliant certificate'],
    meta: [{ icon: Clock, label: '2 Days' }, { icon: Users, label: 'Up to 12 learners' }, { icon: Award, label: 'FAA Level 3 RQF' }],
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'epfa', icon: Baby, tag: 'Childcare · Condensed Format',
    title: 'Emergency Paediatric First Aid',
    subtitle: 'FAA Award — Level 3 RQF | 1-Day Course',
    price: 'From £850 per group',
    intro: 'The one-day version of the Paediatric First Aid qualification for those who need to satisfy EYFS/OFSTED requirements in a condensed format. Covers all life-threatening emergency scenarios for children and infants.',
    body: 'Ideal as an initial qualification or as a stepping stone to the full 2-day course. Learners receive an Ofqual-regulated certificate that satisfies childcare regulatory requirements.',
    includes: ['Paediatric CPR (infant & child)','AED awareness','Choking — infants & children','Unconscious child management','Seizure response','Bleeding & shock in children','Anaphylaxis basics','EYFS/OFSTED compliant certificate'],
    meta: [{ icon: Clock, label: '1 Day' }, { icon: Users, label: 'Up to 12 learners' }, { icon: Award, label: 'FAA Level 3 RQF' }],
    image: '/assets/equipment.webp',
  },
  {
    id: 'bls', icon: HeartPulse, tag: 'Essential Skills · All Staff',
    title: 'Basic Life Support',
    subtitle: 'FAA Award — Level 2 RQF | Half-Day',
    price: 'From £650 per group',
    intro: 'A focused, high-impact course covering the fundamentals of emergency response. Ideal for organisations that want all staff to have a baseline level of first aid awareness without the full-day commitment of EFAW.',
    body: "In just 3 hours, learners gain the core skills to respond to the most critical emergencies — cardiac arrest, choking, and unconsciousness. Using real AEDs and manikins, the training builds genuine confidence and muscle memory.",
    includes: ['Primary survey (DRABC)','Adult CPR to Resuscitation Council UK guidelines','AED use (automated defibrillator)','Recovery position','Choking management','Level 2 RQF certificate'],
    meta: [{ icon: Clock, label: 'Approx. 3 hours' }, { icon: Users, label: 'Up to 12 learners' }, { icon: Award, label: 'FAA Level 2 RQF' }],
    image: '/assets/equipment.webp',
  },
  {
    id: 'mental', icon: Brain, tag: 'Workplace Wellbeing',
    title: 'Mental Health First Aid',
    subtitle: 'MHFA England Accredited | 1 or 2-Day',
    price: 'From £65 per person',
    intro: "Mental health conditions affect 1 in 4 people in the UK every year, yet most workplaces remain completely unprepared to recognise or respond. MHFA training equips your team with the knowledge, skills, and confidence to provide first-line mental health support.",
    body: "This isn't about turning employees into therapists. It's about giving them the awareness to spot early signs of mental health challenges, the skills to have a supportive conversation, and the knowledge of when and how to signpost someone to professional help.",
    includes: ['Recognising mental health conditions','Depression and anxiety awareness','Suicidal crisis response protocols','Supportive conversation skills','Active listening techniques','Signposting to professional support','Reducing workplace stigma','Self-care strategies','MHFA England certificate'],
    meta: [{ icon: Clock, label: '1 or 2-day course' }, { icon: Users, label: 'Up to 16 learners' }, { icon: Award, label: 'MHFA England Accredited' }],
    image: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'events', icon: Calendar, tag: 'Event Cover · Fully Insured',
    title: 'Community Events First Aid',
    subtitle: 'On-Site Medical Cover for Events of All Sizes',
    price: 'Custom quote',
    intro: "Whether you're organising a local charity run, a music festival, a school sports day, or a major public gathering, you have a legal duty of care to everyone attending. LifeCare Training provides fully qualified, professionally equipped event first aid cover.",
    body: "Harry has extensive experience managing first aid provision at major public events — drawing on his emergency ambulance background to operate effectively in dynamic, high-pressure environments and coordinate with the wider emergency services.",
    includes: ['Pre-event risk assessment','Qualified first aiders on-site','Professional medical-grade equipment','Event medical plan documentation','Emergency services liaison','Real-time incident management','Post-event incident report','Scalable to any event size','Fully insured'],
    meta: [{ icon: Clock, label: 'Half-day to multi-day' }, { icon: Users, label: 'Scalable to event size' }, { icon: Award, label: 'Fully qualified & insured' }],
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'forestry', icon: Leaf, tag: 'Specialist · Forestry Commission',
    title: 'Forestry & Agricultural First Aid',
    subtitle: 'FAA Level 3 RQF | Bolt-On Qualification',
    price: 'From £300 per group',
    intro: 'A specialist bolt-on qualification for those working in forestry, agricultural, and rural environments — required by the Forestry Commission for chainsaw operators and those working in remote outdoor settings.',
    body: 'This 2-hour qualification adds the specialist content needed to manage first aid incidents specific to forestry and agricultural work: chainsaw injuries, remote location response, crush injuries, and limited access to emergency services.',
    includes: ['Forestry-specific hazard awareness','Chainsaw injury management','Remote location emergency response','Crush injury & limb entrapment','Major haemorrhage control in rural settings','Forestry Commission compliant certificate'],
    meta: [{ icon: Clock, label: 'Approx. 2 hours (bolt-on)' }, { icon: Users, label: 'Individuals or groups' }, { icon: Award, label: 'FAA Level 3 RQF' }],
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'iqa', icon: ClipboardCheck, tag: 'Quality Assurance · Training Providers',
    title: 'IQA — Internal Quality Assurance',
    subtitle: 'For Regulated Training Providers',
    price: 'Contact for pricing',
    intro: "For training providers delivering regulated qualifications, Internal Quality Assurance is not optional — it's the mechanism that ensures your assessors are consistent, fair, and meeting awarding organisation standards. Without it, your centre approval is at risk.",
    body: 'LifeCare Training offers expert IQA services to training centres needing support meeting their regulatory obligations. Available remotely or on-site across the South East. Sectors covered include healthcare, education, and public services.',
    includes: ['Assessor decision sampling','Countersigning & verification','Standardisation event facilitation','Assessment practice observation','IQA planning documentation','EQA preparation & mock audits','Assessor coaching & development','Centre compliance gap analysis'],
    meta: [{ icon: Clock, label: 'Flexible — by arrangement' }, { icon: Users, label: 'Per assessor or per centre' }, { icon: Award, label: 'Awarding Org Aligned' }],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Services() {
  return (
    <div className="pt-[109px] lg:pt-[117px]">

      {/* ── PAGE HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-dark py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero.webp" alt="" aria-hidden className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <Label><span className="text-white/70">Our Courses</span></Label>
            <h1 className="font-display font-800 text-display-xl text-white mb-5 text-balance">
              First Aid Training That Actually Works
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Every qualification is Ofqual regulated and HSE recognised. Every course is delivered by someone who still works on the frontline.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── COURSE NAV ────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <CourseNav services={SERVICES} />
        </div>
      </div>

      {/* ── SERVICES ──────────────────────────────────────────────── */}
      {SERVICES.map(({ id, icon: Icon, tag, title, subtitle, price, intro, body, includes, meta, image }, idx) => (
        <section key={id} id={id} className={`py-16 lg:py-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

              {/* Copy */}
              <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                <Reveal>
                  <div className="inline-flex items-center gap-2 bg-brand-light border border-red-200 rounded-full px-3 py-1.5 mb-6">
                    <Icon size={11} className="text-brand" />
                    <span className="text-brand text-[10px] font-bold font-display uppercase tracking-wider">{tag}</span>
                  </div>
                  <h2 className="font-display font-800 text-display-md text-dark mb-1.5 text-balance">{title}</h2>
                  <p className="text-gray-400 text-base mb-1">{subtitle}</p>
                  <p className="text-brand font-bold font-display text-sm mb-6">{price}</p>
                  <p className="text-gray-600 leading-[1.85] text-[15px] mb-4">{intro}</p>
                  <p className="text-gray-600 leading-[1.85] text-[15px] mb-7">{body}</p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    {meta.map(({ icon: MIcon, label }) => <Meta key={label} icon={MIcon} label={label} />)}
                  </div>
                  <Btn to="/booking">Book This Course <ArrowRight size={15} /></Btn>
                </Reveal>
              </div>

              {/* Visual */}
              <div className={`space-y-5 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <Reveal variant="scale">
                  <div className="relative rounded-2xl overflow-hidden shadow-card-lg">
                    <img src={image} alt={title} className="w-full h-56 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-card">
                    <h4 className="font-display font-bold text-dark text-xs uppercase tracking-widest mb-5">What's Covered</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {includes.map(item => (
                        <li key={item} className="flex items-start gap-2.5 text-gray-600 text-sm">
                          <CheckCircle2 size={13} className="text-brand mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── BOTTOM CTA ────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 bg-brand overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <Reveal className="relative max-w-2xl mx-auto px-6 text-center">
          <div className="label mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <span className="rule-brand" style={{ background: 'rgba(255,255,255,0.5)' }} />
            Not Sure?
          </div>
          <h2 className="font-display font-800 text-display-lg text-white mb-5">
            Not Sure Which Course Is Right for You?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Get in touch and Harry will help you identify the right training for your organisation, team size, and legal obligations. No hard sell, ever.
          </p>
          <Link to="/booking"
            className="inline-flex items-center gap-2 bg-white text-brand px-7 py-4 rounded-xl font-bold font-display text-base
              hover:bg-gray-50 active:scale-[0.98]
              shadow-[0_4px_20px_rgba(0,0,0,0.15)]
              transition-[background-color,box-shadow,transform] duration-150"
          >
            Get a Free Quote <ArrowRight size={17} />
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
