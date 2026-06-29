import { Link } from 'react-router-dom'
import {
  HeartPulse, Brain, Calendar, ClipboardCheck,
  ArrowRight, CheckCircle2, Star, Quote, Shield,
  Award, Users, Clock, PhoneCall, ChevronRight,
  BadgeCheck, Stethoscope, AlertTriangle
} from 'lucide-react'
import Reveal from '../components/Reveal'

/* ── Shared atoms ─────────────────────────────────────────────── */
function Btn({ to, href, children, variant = 'primary', size = 'md', className = '' }) {
  const base = `inline-flex items-center gap-2 font-bold font-display rounded-xl transition-[background-color,box-shadow,transform] duration-150 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 ${
    size === 'lg' ? 'px-7 py-4 text-base' : 'px-5 py-3 text-sm'
  }`
  const styles = {
    primary:  `bg-brand text-white hover:bg-brand-dark shadow-cta hover:shadow-[0_6px_24px_rgba(210,74,37,0.45)] focus-visible:outline-brand ${className}`,
    outline:  `border-2 border-brand text-brand hover:bg-brand hover:text-white focus-visible:outline-brand ${className}`,
    ghost:    `border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/60 focus-visible:outline-white ${className}`,
    dark:     `bg-dark text-white hover:bg-dark-soft focus-visible:outline-dark ${className}`,
    light:    `bg-white text-dark hover:bg-gray-50 shadow-card focus-visible:outline-dark ${className}`,
  }
  if (href) return <a href={href} className={`${base} ${styles[variant]}`}>{children}</a>
  return <Link to={to} className={`${base} ${styles[variant]}`}>{children}</Link>
}

function Label({ children, light = false }) {
  return (
    <div className="label mb-4" style={{ color: light ? 'rgba(255,255,255,0.7)' : undefined }}>
      <span className="rule-brand" style={{ background: light ? 'rgba(255,255,255,0.5)' : undefined }} />
      {children}
    </div>
  )
}

/* ── Data ──────────────────────────────────────────────────────── */
const FEATURED_COURSES = [
  {
    id: 'efaw', icon: HeartPulse,
    tag: 'Most Popular',
    title: 'Emergency First Aid at Work',
    desc: 'The 1-day Ofqual-regulated qualification every UK employer needs. HSE compliant, hands-on, and delivered by active first aid professionals.',
    duration: '1 Day',
    level: 'Level 3 RQF',
    price: 'From £850 per group',
    href: '/services#efaw',
  },
  {
    id: 'events', icon: Calendar,
    tag: 'Events Cover',
    title: 'Community Events First Aid',
    desc: 'Professional, fully-equipped first aid cover for community events of all sizes, from charity runs and sports days to fairs and local festivals.',
    duration: 'Flexible',
    level: 'Fully Insured',
    price: 'Custom quote',
    href: '/services#events',
  },
  {
    id: 'mental', icon: Brain,
    tag: 'Workplace Wellbeing',
    title: 'Mental Health Courses',
    desc: 'Give your team the skills to recognise, respond to, and support colleagues experiencing mental health challenges.',
    duration: '1–2 Days',
    level: 'MHFA England',
    price: 'Contact for Pricing',
    href: '/services#mental',
  },
  {
    id: 'iqa', icon: ClipboardCheck,
    tag: 'Quality Assurance',
    title: 'IQA: Internal Quality Assurance',
    desc: 'Expert IQA services for regulated training providers. On-site or remote. Sampling, standardisation, and assessment support.',
    duration: 'Flexible',
    level: 'Awarding Org Aligned',
    price: 'Contact for pricing',
    href: '/services#iqa',
  },
]

const WHY_POINTS = [
  {
    icon: Stethoscope,
    title: 'Still Active on the Frontline',
    body: 'Our lead instructor works for the ambulance service in both frontline and volunteer roles, bringing current, real-world experience into every session.',
  },
  {
    icon: BadgeCheck,
    title: 'Ofqual Regulated, HSE Compliant',
    body: 'Every qualification meets your legal obligations under the Health and Safety (First-Aid) Regulations 1981 and is recognised by the HSE.',
  },
  {
    icon: Shield,
    title: 'Competitive Pricing',
    body: 'LifeCare Training is far more competitively priced than larger national providers, without any compromise on quality, accreditation, or hands-on delivery.',
  },
  {
    icon: Users,
    title: 'Hands-On, Scenario-Based Learning',
    body: 'Every course is built around practical scenarios, not just theory. Your team leaves genuinely capable of responding when it matters, not just able to pass a test.',
  },
]

const STATS = [
  { value: '17+', label: 'Industry Experience' },
  { value: '500+', label: 'Learners Trained' },
  { value: '100%', label: 'Accredited Courses' },
  { value: '24hr', label: 'Quote Turnaround' },
]

const TESTIMONIALS = [
  {
    name: 'Richard Drakeford',
    role: 'Repeat Client',
    company: 'LifeCare Training',
    body: "I have had the pleasure of working with Lifecare Training on and off for a couple of years now. Harry, who heads the team is a professional through and through and will always go the extra mile to ensure his customers get the service and course they require. His courses are always interactive, interesting and fun, which creates a great learning process. Highly recommend.",
    stars: 5,
  },
  {
    name: 'James Grayling',
    role: 'Training Attendee',
    company: 'LifeCare Training',
    body: "Attended a training event with Lifecare training today and just wanted to say how impressed I was. It was fun and informative, and I took so much away from today. Harry was professional, polite and very approachable. No questions went unanswered, his knowledge was great and he made it relatable and easy to understand. Would highly recommend to anyone.",
    stars: 5,
  },
  {
    name: 'Billy Coles',
    role: 'Course Attendee',
    company: 'LifeCare Training',
    body: "Very professional and informative! Best trainer I've had in years. Can't wait to renew it.",
    stars: 5,
  },
  {
    name: 'Emel Fretwell',
    role: 'Course Attendee',
    company: 'LifeCare Training',
    body: "It was a great training and Harry was brilliant. Even though it was a long training, we never got bored, enjoyed every minute of it. We refreshed our knowledge and it was also fun learning new things. We just loved the little quiz at the end, such a fun and efficient way of ending.",
    stars: 5,
  },
  {
    name: 'Charlie LJ',
    role: 'First Aid Course',
    company: 'LifeCare Training',
    body: "Harry delivered the First Aid course brilliantly! Very well presented, explained situations in depth. He has amazing knowledge in a great deal of areas. Certainly kept the day interesting too, not boring, especially with his added humour. Good job, thanks Harry!",
    stars: 5,
  },
  {
    name: 'Brandon Grayling',
    role: 'Course Attendee',
    company: 'LifeCare Training',
    body: "Really well put together course, very helpful, great instructors.",
    stars: 5,
  },
]

const BLOG_POSTS = [
  {
    category: 'Legal Compliance',
    title: 'Is Your Business Legally Required to Have a First Aider?',
    excerpt: 'The HSE is clear: every employer must make adequate first aid provision. Here\'s exactly what the law requires, and what the consequences are if you don\'t.',
    date: '12 May 2025',
    readTime: '5 min',
    image: '/assets/equipment.webp',
  },
  {
    category: 'Mental Health',
    title: 'Mental Health First Aid at Work: What the Law Says in 2025',
    excerpt: 'Mental health is now firmly on the workplace health and safety agenda. Here\'s what current HSE guidance means for your organisation.',
    date: '3 Apr 2025',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&w=800&q=80',
  },
  {
    category: 'Events',
    title: 'Community Events: How Much First Aid Cover Does Your Event Actually Need?',
    excerpt: 'Every event organiser has a duty of care. Here\'s how to assess the right level of cover for your specific event.',
    date: '5 Mar 2025',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
  },
]

/* ── Page ────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="pt-[141px] lg:pt-[149px]">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-dark">
        <div className="absolute inset-0">
          <img src="/assets/hero.webp" alt="" aria-hidden className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/75 to-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="max-w-[680px]">

            <div className="animate-fade-in inline-flex items-center gap-2.5 bg-brand/20 border border-brand/30 rounded-full px-4 py-1.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              <span className="text-white/85 text-[11px] font-bold font-display tracking-[0.14em] uppercase">
                Accredited Courses · HSE Compliant · Sussex &amp; South East
              </span>
            </div>

            <h1 className="animate-fade-up font-display font-800 text-display-xl text-white mb-3 text-balance">
              Become a Lifesaver<br />
              <span className="text-brand">with LifeCare Training</span>
            </h1>

            <p className="animate-fade-up [animation-delay:120ms] text-gray-300 text-lg leading-[1.75] mb-10 max-w-[520px]">
              Professional, Ofqual-regulated first aid training delivered by a team with genuine frontline experience. Whether you need workplace compliance, paediatric qualifications, or mental health support, we have the right course for your organisation.
            </p>

            <div className="animate-fade-up [animation-delay:180ms] flex flex-wrap gap-3 mb-16">
              <Btn to="/booking" variant="primary" size="lg">
                Get a Free Quote <ArrowRight size={17} />
              </Btn>
              <Btn to="/services" variant="ghost" size="lg">
                View All Courses
              </Btn>
            </div>

            {/* Trust stats */}
            <div className="animate-fade-up [animation-delay:240ms] grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/12 pt-8">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-brand font-display font-800 text-3xl tracking-tight leading-none mb-1">{value}</div>
                  <div className="text-gray-400 text-xs font-medium leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#accred-strip"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 hover:opacity-70 transition-opacity duration-150"
          aria-label="Scroll down"
        >
          <div className="w-5 h-8 border-2 border-white/40 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 bg-white rounded-full animate-[bounce_1.5s_ease-in-out_infinite]" />
          </div>
        </a>
      </section>

      {/* ── ACCREDITATION STRIP ───────────────────────────────────── */}
      <div id="accred-strip" className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
            {[
              'Ofqual Regulated Qualifications',
              'HSE Code of Practice',
              'First Aid Awards (FAA)',
              'Resuscitation Council UK Guideline Aligned',
              'Enhanced DBS Checked Instructors',
              'AoHT Member',
            ].map(t => (
              <span key={t} className="flex items-center gap-2 text-gray-500 text-xs font-semibold">
                <CheckCircle2 size={12} className="text-brand shrink-0" /> {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURED SERVICES ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <Label>Our Services</Label>
            <h2 className="font-display font-800 text-display-lg text-dark mb-4 text-balance">
              Training That Saves Lives
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              From Ofqual-regulated first aid qualifications to mental health support and professional event cover, every service is built around one goal: giving people the real skills and confidence to respond when it matters most.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURED_COURSES.map(({ id, icon: Icon, tag, title, desc, duration, level, price, href }, i) => (
              <Reveal key={id} delay={i * 80}>
                <Link to={href}
                  className="group relative flex flex-col h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover-lift focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
                >
                  {/* Red top accent */}
                  <div className="h-1 bg-brand group-hover:h-1.5 transition-[height] duration-200" />

                  <div className="p-6 flex flex-col flex-1">
                    <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand/15 transition-colors duration-200">
                      <Icon size={22} className="text-brand" />
                    </div>

                    <span className="inline-block bg-gray-100 text-gray-600 text-[10px] font-bold font-display uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 w-fit group-hover:bg-brand-light group-hover:text-brand transition-colors duration-200">
                      {tag}
                    </span>

                    <h3 className="font-display font-bold text-dark text-[1.05rem] leading-snug mb-2.5">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{desc}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 bg-gray-50 border border-gray-200 text-gray-600 text-[10px] font-semibold font-display rounded-full px-2.5 py-1">
                        <Clock size={9} /> {duration}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-gray-50 border border-gray-200 text-gray-600 text-[10px] font-semibold font-display rounded-full px-2.5 py-1">
                        <Award size={9} /> {level}
                      </span>
                    </div>

                    <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                      <span className="text-dark font-display font-bold text-sm">{price}</span>
                      <span className="inline-flex items-center gap-1 text-brand text-xs font-bold font-display group-hover:gap-2 transition-[gap] duration-200">
                        Learn more <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-brand font-bold font-display text-sm hover:text-brand-dark transition-colors duration-150">
              View all courses <ChevronRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── WHY FIRST AID SAVES LIVES ─────────────────────────────── */}
      <section className="py-14 bg-dark">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-gray-500 text-[11px] font-bold font-display uppercase tracking-[0.18em] mb-6">Why First Aid Training Saves Lives</p>
            <h2 className="font-display font-800 text-white text-2xl lg:text-3xl mb-10 text-balance">
              Right now, the average UK out-of-hospital cardiac arrest has less than a 10% chance of survival. A trained bystander can change that.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="font-display font-800 text-4xl text-brand tracking-tight mb-2">&lt;10%</div>
                <p className="text-gray-400 text-sm leading-snug">Current UK survival rate from out-of-hospital cardiac arrest without bystander intervention</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="font-display font-800 text-4xl text-white tracking-tight mb-2">2–3×</div>
                <p className="text-gray-400 text-sm leading-snug">Improvement in survival odds when a trained bystander starts CPR immediately</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="font-display font-800 text-4xl text-white tracking-tight mb-2">15–27%</div>
                <p className="text-gray-400 text-sm leading-snug">
                  How much less likely women are to survive the safe use of an AED compared to men.{' '}
                  <a
                    href="https://www.bhf.org.uk/what-we-do/news-from-the-bhf/news-archive/2019/may/women-less-likely-to-receive-bystander-cpr-than-men-research-shows"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-dark underline transition-colors duration-150"
                  >
                    Source: BHF
                  </a>
                </p>
              </div>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 bg-brand text-white px-7 py-3.5 rounded-xl font-bold font-display text-sm hover:bg-brand-dark active:scale-[0.98] shadow-cta transition-[background-color,transform] duration-150">
              Get Your Team Trained <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── WHY LIFECARE ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

            {/* Image */}
            <Reveal variant="scale" className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-card-lg">
                <img src="/assets/harry.png" alt="Harry Todhunter, LifeCare Training lead instructor" className="w-full h-[520px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/55 via-transparent to-transparent" />
              </div>
              {/* Float stat */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl p-5 shadow-card-lg max-w-[180px]">
                <div className="font-display font-800 text-4xl text-dark tracking-tight mb-1">17+</div>
                <div className="text-gray-500 text-xs leading-snug">Industry experience</div>
              </div>
              {/* Float badge */}
              <div style={{ backgroundColor: "#101827" }} className="absolute top-6 -left-4 lg:-left-8 text-white rounded-2xl px-4 py-3 shadow-card-lg">
                <div className="flex items-center gap-2">
                  <Stethoscope size={13} className="text-brand" />
                  <span className="text-xs font-bold font-display">Active Ambulance Technician</span>
                </div>
              </div>
            </Reveal>

            {/* Copy */}
            <div className="order-1 lg:order-2">
              <Reveal>
                <Label>Why LifeCare Training</Label>
                <h2 className="font-display font-800 text-display-lg text-dark mb-5 text-balance">
                  Taught by People Who Do It for Real
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  Most first aid trainers retired from frontline work years ago. The LifeCare Training team is still active, responding to real emergencies, staying current, and bringing that lived experience directly into your training room.
                </p>
              </Reveal>

              <div className="space-y-5 mb-8">
                {WHY_POINTS.map(({ icon: Icon, title, body }, i) => (
                  <Reveal key={title} delay={i * 80}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center shrink-0">
                        <Icon size={17} className="text-brand" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-dark text-sm mb-1">{title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={320}>
                <Btn to="/about" variant="outline">
                  About LifeCare Training <ArrowRight size={15} />
                </Btn>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: '500+',  label: 'Learners Trained',      sub: 'Across public, private & voluntary sectors' },
              { value: '17+',   label: 'Industry Experience',    sub: 'Active ambulance technician & instructor' },
              { value: '100%',  label: 'Accredited Courses',     sub: 'All qualifications recognised by the HSE' },
              { value: '24hr',  label: 'Quote Turnaround',       sub: 'Free, no-obligation tailored quote' },
            ].map(({ value, label, sub }, i) => (
              <Reveal key={label} delay={i * 80}>
                <div className="text-center lg:text-left">
                  <div className="font-display font-800 text-4xl lg:text-5xl text-brand mb-2 tracking-tight">{value}</div>
                  <div className="font-display font-bold text-white text-sm mb-1">{label}</div>
                  <div className="text-gray-500 text-xs leading-snug">{sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE CTA ────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-brand-light border-y border-red-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Reveal className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-shrink-0 w-14 h-14 bg-brand/12 rounded-2xl flex items-center justify-center hidden lg:flex">
              <AlertTriangle size={26} className="text-brand" />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <p className="text-brand font-bold font-display text-[11px] uppercase tracking-[0.14em] mb-2">Legal Requirement</p>
              <h2 className="font-display font-800 text-display-md text-dark mb-3">
                Is Your Business First Aid Compliant?
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                The Health and Safety (First-Aid) Regulations 1981 require every employer to make adequate first aid provision. Failure to comply can result in HSE enforcement action, unlimited fines, and prosecution.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-3 shrink-0">
              <Btn to="/booking" variant="primary" size="lg">
                Get a Free Quote <ArrowRight size={16} />
              </Btn>
              <Btn to="/services" variant="outline">
                View All Courses
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <Label>Client Reviews</Label>
            <h2 className="font-display font-800 text-display-lg text-dark mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-4">
              Trusted by businesses, NHS trusts, public sector organisations, and event companies across Sussex and the South East.
            </p>
            <div className="inline-flex items-center gap-2 bg-brand-light border border-red-100 rounded-full px-4 py-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-gray-600 text-xs font-semibold font-display">100% recommend · 18 reviews on Facebook</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, role, company, body, stars }, i) => (
              <Reveal key={name} delay={i * 90}>
                <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-200 flex flex-col h-full overflow-hidden">
                  <Quote size={48} className="absolute -top-1 -right-1 text-gray-100 rotate-180" />

                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: stars }).map((_, j) => (
                      <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm leading-[1.85] flex-1 mb-6 relative z-10">
                    "{body}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white text-sm font-bold font-display">{name[0]}</span>
                    </div>
                    <div>
                      <p className="font-display font-bold text-dark text-sm leading-tight">{name}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{role}, {company}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-10">
            <a
              href="https://www.facebook.com/Lifecaretraining21/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand font-bold font-display text-sm hover:text-brand-dark transition-colors duration-150"
            >
              Read all reviews on Facebook <ChevronRight size={15} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── BLOG PREVIEW ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="flex items-end justify-between mb-12">
            <div>
              <Label>Resources</Label>
              <h2 className="font-display font-800 text-display-md text-dark">From the Blog</h2>
            </div>
            <Link to="/blog" className="hidden sm:inline-flex items-center gap-2 text-brand font-bold font-display text-sm hover:text-brand-dark transition-colors duration-150">
              All articles <ArrowRight size={14} />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map(({ category, title, excerpt, date, readTime, image }, i) => (
              <Reveal key={title} delay={i * 80}>
                <Link to="/blog"
                  className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover-lift focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                    <span className="absolute top-4 left-4 bg-brand text-white text-[10px] font-bold font-display uppercase tracking-wider px-3 py-1 rounded-full">
                      {category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-3 font-medium">
                      <span>{date}</span>
                      <span>·</span>
                      <Clock size={10} />
                      <span>{readTime} read</span>
                    </div>
                    <h3 className="font-display font-bold text-dark text-[1.05rem] leading-snug mb-2 group-hover:text-brand transition-colors duration-150 flex-1">
                      {title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 bg-brand overflow-hidden">
        <img src="/assets/equipment.webp" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand to-brand-dark opacity-80" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <Reveal className="relative max-w-3xl mx-auto px-6 text-center">
          <Label light>Start Today</Label>
          <h2 className="font-display font-800 text-display-lg text-white mb-5 text-balance">
            Ready to Protect Your Team?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Get a free, tailored quote within 24 hours. No sales pressure, no obligation. Just honest advice on the right training for your organisation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Btn to="/booking" variant="light" size="lg">
              Get a Free Quote <ArrowRight size={17} />
            </Btn>
            <Btn href="tel:+447908783457" variant="ghost" size="lg">
              <PhoneCall size={16} /> Call 07908 783457
            </Btn>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {['No obligation', 'Response within 24hrs', 'Fully tailored quote', 'Accredited courses'].map(t => (
              <span key={t} className="flex items-center gap-2 text-white/60 text-xs font-semibold font-display">
                <CheckCircle2 size={12} className="text-white/80" /> {t}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

    </div>
  )
}
