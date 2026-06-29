import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Brain } from 'lucide-react'
import { useRef, useState, useEffect, Fragment } from 'react'
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
      <div className={`pointer-events-none absolute left-0 top-0 bottom-0 w-14 bg-gradient-to-r from-white to-transparent z-10 transition-opacity duration-150 ${canLeft ? 'opacity-100' : 'opacity-0'}`} />
      <button onClick={() => nudge(-1)} aria-label="Scroll left"
        className={`absolute left-1 top-1/2 -translate-y-1/2 z-20 w-7 h-7 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center text-gray-500 hover:text-dark hover:border-gray-300 transition-[opacity,transform] duration-150 ${canLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <ChevronLeft size={13} />
      </button>
      <div ref={ref} className="flex gap-1 overflow-x-auto py-2 scrollbar-none px-8">
        {services.map(({ id, icon: Icon, title }) => (
          <a key={id} href={`#${id}`}
            className="flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold font-display text-gray-500 hover:text-dark hover:bg-gray-50 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-1">
            <Icon size={11} className="text-brand" />
            {title.split(' ').slice(0, 3).join(' ')}
          </a>
        ))}
      </div>
      <div className={`pointer-events-none absolute right-0 top-0 bottom-0 w-14 bg-gradient-to-l from-white to-transparent z-10 transition-opacity duration-150 ${canRight ? 'opacity-100' : 'opacity-0'}`} />
      <button onClick={() => nudge(1)} aria-label="Scroll right"
        className={`absolute right-1 top-1/2 -translate-y-1/2 z-20 w-7 h-7 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center text-gray-500 hover:text-dark hover:border-gray-300 transition-[opacity,transform] duration-150 ${canRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <ChevronRight size={13} />
      </button>
    </div>
  )
}

export default function Services() {
  return (
    <div className="pt-[99px] lg:pt-[128px]">

      {/* ── PAGE HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-dark py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero.webp" alt="" aria-hidden className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <Label><span className="text-white/70">Our Courses</span></Label>
            <h1 className="font-display font-800 text-display-xl text-white mb-3 text-balance">
              First Aid Training That Actually Works
            </h1>
            <p className="font-display font-bold text-brand text-xl mb-5">Become a lifesaver with LifeCare Training.</p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Every qualification is Ofqual regulated and HSE recognised. Every course is delivered by someone who still works on the frontline.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── COURSE NAV ────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <CourseNav services={COURSES} />
        </div>
      </div>

      {/* ── COURSES ───────────────────────────────────────────────── */}
      {COURSES.map(({ id, slug, icon: Icon, tag, title, subtitle, price, intro, body, includes, meta, image, imagePosition, addon }, idx) => (
        <Fragment key={id}>
          <section id={id} className={`py-16 lg:py-20 ${id === 'efaw' ? 'bg-white ring-2 ring-inset ring-brand/20' : idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            {id === 'efaw' && (
              <div className="bg-brand text-white text-[10px] font-bold font-display tracking-widest uppercase text-center py-2 -mt-16 mb-16">
                ★ Most Popular Course
              </div>
            )}
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
                    <div className="flex flex-wrap gap-3">
                      <Link to="/booking"
                        className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-xl font-bold font-display text-sm
                          hover:bg-brand-dark active:scale-[0.98] shadow-cta hover:shadow-[0_6px_24px_rgba(210,74,37,0.45)]
                          transition-[background-color,box-shadow,transform] duration-150 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2">
                        Book This Course <ArrowRight size={15} />
                      </Link>
                      <Link to={`/courses/${slug}`}
                        className="inline-flex items-center gap-2 border-2 border-brand text-brand px-6 py-3 rounded-xl font-bold font-display text-sm
                          hover:bg-brand hover:text-white active:scale-[0.98]
                          transition-[background-color,color,transform] duration-150 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2">
                        Full Course Details <ArrowRight size={15} />
                      </Link>
                    </div>
                  </Reveal>
                </div>

                {/* Visual */}
                <div className={`space-y-5 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <Reveal variant="scale">
                    <Link to={`/courses/${slug}`} className="block relative rounded-2xl overflow-hidden shadow-card-lg group">
                      <img src={image} alt={title} className={`w-full h-56 object-cover group-hover:scale-[1.03] transition-transform duration-500 ${imagePosition || ''}`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                    </Link>
                  </Reveal>
                  <Reveal delay={80}>
                    <div style={{ backgroundColor: "#101827" }} className="rounded-2xl p-6 shadow-card-lg">
                      <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-5">What's Covered</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {includes.map(item => (
                          <li key={item} className="flex items-start gap-2.5 text-gray-300 text-sm">
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

          {/* ── ASIST ADDON ─────────────────────────────────────────── */}
          {addon && (
            <section className="py-16 lg:py-20 bg-dark">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <Reveal className="max-w-3xl mb-10">
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 mb-6">
                    <Brain size={11} className="text-brand" />
                    <span className="text-white/70 text-[10px] font-bold font-display uppercase tracking-wider">Add-On Training</span>
                  </div>
                  <h2 className="font-display font-800 text-display-md text-white mb-2 text-balance">{addon.title}</h2>
                  <p className="text-gray-400 text-base mb-6">{addon.subtitle}</p>
                  <p className="text-gray-300 leading-[1.85] text-[15px] mb-4">{addon.description}</p>
                  <p className="text-gray-300 leading-[1.85] text-[15px] mb-6">{addon.body}</p>
                  <p className="text-brand font-bold font-display text-sm mb-8">{addon.meta}</p>
                  <div className="bg-white/6 border border-white/10 rounded-2xl p-6 mb-8">
                    <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-5">What's Covered</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {addon.includes.map(item => (
                        <li key={item} className="flex items-start gap-2.5 text-gray-300 text-sm">
                          <CheckCircle2 size={13} className="text-brand mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/booking"
                    className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-xl font-bold font-display text-sm
                      hover:bg-brand-dark active:scale-[0.98] shadow-cta hover:shadow-[0_6px_24px_rgba(210,74,37,0.45)]
                      transition-[background-color,box-shadow,transform] duration-150 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2">
                    Enquire About ASIST <ArrowRight size={15} />
                  </Link>
                </Reveal>
              </div>
            </section>
          )}
        </Fragment>
      ))}

      {/* ── OTHER COURSES & PARTNERS ──────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-12">
            <div className="label mb-4">
              <span className="rule-brand" />
              <span className="text-white/70">Extended Network</span>
            </div>
            <h2 className="font-display font-800 text-display-md text-white mb-5 text-balance">
              Other Courses &amp; Partner Companies
            </h2>
            <p className="text-gray-400 leading-[1.85] text-[15px]">
              Having worked in the pre-hospital care and first aid industry for nearly two decades, we have built up a large network of like-minded professionals who are passionate about giving the best to their customers. With this in mind, we have access to several other industry experts delivering courses including, but not limited to:
            </p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
            {[
              'Health &amp; Safety',
              'Food Safety',
              'Manual Handling',
              'Food Allergen',
              'Fire Safety',
              'First Aid for Mental Health',
              'Suicide Prevention',
              'Catastrophic Bleeding',
              'Bespoke First Aid Awareness',
              'COSHH',
            ].map(course => (
              <Reveal key={course}>
                <div className="flex items-center gap-2.5 bg-white/6 border border-white/10 rounded-xl px-4 py-3">
                  <CheckCircle2 size={13} className="text-brand shrink-0" />
                  <span className="text-gray-300 text-sm font-medium" dangerouslySetInnerHTML={{ __html: course }} />
                </div>
              </Reveal>
            ))}
            <Reveal>
              <div className="flex items-center gap-2.5 bg-brand/15 border border-brand/30 rounded-xl px-4 py-3">
                <CheckCircle2 size={13} className="text-brand shrink-0" />
                <span className="text-gray-300 text-sm font-medium italic">Other courses: please enquire</span>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <p className="text-gray-500 text-sm mb-6">Please get in touch if you would like to find out more about any of these courses.</p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-xl font-bold font-display text-sm
                hover:bg-white/10 active:scale-[0.98] transition-[background-color,transform] duration-150">
              Get in Touch <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

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
