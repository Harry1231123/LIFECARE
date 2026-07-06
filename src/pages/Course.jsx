import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, CheckCircle2, Users } from 'lucide-react'
import Reveal from '../components/Reveal'
import { COURSES } from '../data/courses'

function Label({ children }) {
  return (
    <div className="label mb-4">
      <span className="rule-brand" />
      {children}
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

export default function Course() {
  const { slug } = useParams()
  const course = COURSES.find(c => c.slug === slug)

  if (!course) return <Navigate to="/services" replace />

  const { icon: Icon, tag, title, subtitle, price, intro, body, includes, meta, who, image, imagePosition, addon } = course

  const others = COURSES.filter(c => c.slug !== slug).slice(0, 3)

  return (
    <div className="pt-[99px] lg:pt-[128px]">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative bg-dark py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={image} alt="" aria-hidden className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <Link to="/services" className="inline-flex items-center gap-2 text-white/60 text-sm font-medium hover:text-white transition-colors duration-150 mb-8">
              <ArrowLeft size={14} /> All Courses
            </Link>
            <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand/30 rounded-full px-3 py-1.5 mb-5">
              <Icon size={11} className="text-brand" />
              <span className="text-brand text-[10px] font-bold font-display uppercase tracking-wider">{tag}</span>
            </div>
            <h1 className="font-display font-800 text-display-xl text-white mb-3 text-balance">{title}</h1>
            <p className="text-gray-400 text-lg mb-2">{subtitle}</p>
            <p className="text-brand font-bold font-display text-base">{price}</p>
          </Reveal>
        </div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">

            {/* Left: copy */}
            <div>
              <Reveal>
                <Label>Course Overview</Label>
                <p className="text-gray-600 leading-[1.85] text-[15px] mb-5">{intro}</p>
                <p className="text-gray-600 leading-[1.85] text-[15px] mb-8">{body}</p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {meta.map(({ icon: MIcon, label }) => <Meta key={label} icon={MIcon} label={label} />)}
                </div>
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3.5 rounded-xl font-bold font-display text-sm
                    hover:bg-brand-dark active:scale-[0.98]
                    shadow-cta hover:shadow-[0_6px_24px_rgba(210,74,37,0.45)]
                    transition-[background-color,box-shadow,transform] duration-150"
                >
                  Book This Course <ArrowRight size={15} />
                </Link>
              </Reveal>
            </div>

            {/* Right: includes + image */}
            <div className="space-y-5">
              <Reveal variant="scale">
                <div className="relative rounded-2xl overflow-hidden shadow-card-lg">
                  <img src={image} alt={title} className="w-full h-56 object-cover" style={imagePosition ? { objectPosition: imagePosition } : undefined} />
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

      {/* ── WHO IS THIS FOR ───────────────────────────────────────── */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-8">
            <h2 className="font-display font-800 text-[1.5rem] text-dark mb-2">Who Is This Course For?</h2>
          </Reveal>
          <Reveal delay={60}>
            <div className="flex flex-wrap justify-center gap-3">
              {who.map(w => (
                <span key={w} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-dark text-sm font-semibold font-display shadow-card">
                  <Users size={12} className="text-brand shrink-0" /> {w}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ASIST ADD-ON (mental health only) ─────────────────────── */}
      {addon && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Reveal className="max-w-2xl mb-12">
              <Label>Additional Training</Label>
              <h2 className="font-display font-800 text-display-md text-dark mb-2 text-balance">{addon.title}</h2>
              <p className="text-gray-400 text-base mb-1">{addon.subtitle}</p>
            </Reveal>
            <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">
              <Reveal>
                <p className="text-gray-600 leading-[1.85] text-[15px] mb-5">{addon.description}</p>
                <p className="text-gray-600 leading-[1.85] text-[15px] mb-6">{addon.body}</p>
                <div className="inline-flex items-center gap-2 bg-brand-light border border-red-200 rounded-full px-4 py-2 mb-8">
                  <span className="text-brand text-xs font-bold font-display">{addon.meta}</span>
                </div>
                <div>
                  <Link
                    to="/booking"
                    className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3.5 rounded-xl font-bold font-display text-sm
                      hover:bg-brand-dark active:scale-[0.98]
                      shadow-cta hover:shadow-[0_6px_24px_rgba(210,74,37,0.45)]
                      transition-[background-color,box-shadow,transform] duration-150"
                  >
                    Enquire About ASIST <ArrowRight size={15} />
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-card">
                  <h4 className="font-display font-bold text-dark text-xs uppercase tracking-widest mb-5">What's Covered</h4>
                  <ul className="space-y-2.5">
                    {(addon.includes || []).map(item => (
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
        </section>
      )}

      {/* ── OTHER COURSES ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-10">
            <h2 className="font-display font-800 text-2xl text-dark">Other Courses</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {others.map(({ slug: s, icon: OIcon, tag: oTag, title: oTitle, subtitle: oSub, price: oPrice }, i) => (
              <Reveal key={s} delay={i * 70}>
                <Link to={`/courses/${s}`}
                  className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-6 shadow-card hover:shadow-card-hover hover-lift transition-shadow duration-200 focus-visible:outline-2 focus-visible:outline-brand"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-brand-light rounded-xl flex items-center justify-center shrink-0">
                      <OIcon size={15} className="text-brand" />
                    </div>
                    <span className="text-brand text-[10px] font-bold font-display uppercase tracking-wider">{oTag.split('·')[0].trim()}</span>
                  </div>
                  <h3 className="font-display font-bold text-dark text-base leading-snug mb-1 group-hover:text-brand transition-colors duration-150">{oTitle}</h3>
                  <p className="text-gray-400 text-xs mb-3">{oSub}</p>
                  <p className="text-brand font-bold font-display text-xs mt-auto">{oPrice}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-8 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-brand font-bold font-display text-sm hover:underline">
              View all courses <ArrowRight size={13} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 bg-brand overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <Reveal className="relative max-w-2xl mx-auto px-6 text-center">
          <div className="label mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <span className="rule-brand" style={{ background: 'rgba(255,255,255,0.5)' }} />
            Ready to Book?
          </div>
          <h2 className="font-display font-800 text-display-lg text-white mb-5">
            Get a Free, No-Obligation Quote
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Tell us your team size and location and Harry will come back to you within 24 hours with a tailored price.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-white text-brand px-7 py-4 rounded-xl font-bold font-display text-base
              hover:bg-gray-50 active:scale-[0.98]
              shadow-[0_4px_20px_rgba(0,0,0,0.15)]
              transition-[background-color,transform] duration-150"
          >
            Get a Free Quote <ArrowRight size={17} />
          </Link>
        </Reveal>
      </section>

    </div>
  )
}
