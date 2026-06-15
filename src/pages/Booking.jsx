import { useState } from 'react'
import { ArrowRight, CheckCircle2, HeartPulse, Calendar, Brain, ClipboardCheck, Shield, Clock, Users, Baby, Leaf, PhoneCall } from 'lucide-react'
import Reveal from '../components/Reveal'

function Label({ children }) {
  return (
    <div className="label mb-4">
      <span className="rule-brand" />
      {children}
    </div>
  )
}

const inputCls = 'w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-[border-color,box-shadow] duration-150'

const COURSES = [
  { id: 'efaw',     icon: HeartPulse,     label: 'Emergency First Aid at Work',      sub: '1 day · Level 3 RQF' },
  { id: 'faw',      icon: Shield,         label: 'First Aid at Work',                sub: '3 days · Level 3 RQF' },
  { id: 'paeds',    icon: Baby,           label: 'Paediatric First Aid',             sub: '2 days · Level 3 RQF' },
  { id: 'epfa',     icon: Baby,           label: 'Emergency Paediatric First Aid',   sub: '1 day · Level 3 RQF' },
  { id: 'bls',      icon: HeartPulse,     label: 'Basic Life Support',               sub: 'Half day · Level 2 RQF' },
  { id: 'mental',   icon: Brain,          label: 'Mental Health First Aid',          sub: '1–2 days · MHFA England' },
  { id: 'events',   icon: Calendar,       label: 'Community Events First Aid',       sub: 'On-site medical cover' },
  { id: 'forestry', icon: Leaf,           label: 'Forestry & Agricultural FA',       sub: '2 hrs · Bolt-on qualification' },
  { id: 'iqa',      icon: ClipboardCheck, label: 'IQA: Internal Quality Assurance', sub: 'Remote or on-site' },
]

const LEARNER_RANGES = ['1–5 learners', '6–12 learners', '13–20 learners', '21–50 learners', '50+ learners']
const DELIVERY = [
  { value: 'onsite',  label: 'At our premises (we come to you)' },
  { value: 'offsite', label: 'At a LifeCare Training venue' },
  { value: 'unsure',  label: 'Not sure yet, happy to discuss' },
]

export default function Booking() {
  const [sent, setSent]       = useState(false)
  const [selected, setSelected] = useState([])
  const [form, setForm]       = useState({
    firstName: '', lastName: '', company: '', email: '', phone: '',
    learners: '', delivery: '', date: '', notes: ''
  })

  const toggle = id => setSelected(p => p.includes(id) ? p.filter(c => c !== id) : [...p, id])
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSent(true) }

  return (
    <div className="pt-[141px] lg:pt-[149px]">

      {/* ── PAGE HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-dark py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-soft to-dark/60" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="max-w-xl">
            <Label><span className="text-white/70">Get a Quote</span></Label>
            <h1 className="font-display font-800 text-display-xl text-white mb-5 text-balance">
              Request Your Free Quote
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Tell us about your training needs. Harry will get back to you within 24 hours with a personalised, no-obligation quote.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 xl:gap-14">

            {/* Sidebar */}
            <div className="space-y-6 lg:order-2">
              <Reveal>
                <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-card">
                  <Label>Why LifeCare?</Label>
                  <ul className="space-y-4">
                    {[
                      { icon: CheckCircle2, label: 'Free, no-obligation quote' },
                      { icon: Clock,        label: 'Response within 24 hours' },
                      { icon: Users,        label: 'Tailored to your team size & sector' },
                      { icon: Shield,       label: 'Ofqual regulated qualifications' },
                      { icon: HeartPulse,   label: 'Active frontline EMT instructor' },
                    ].map(({ icon: Icon, label }) => (
                      <li key={label} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-brand-light rounded-lg flex items-center justify-center shrink-0">
                          <Icon size={13} className="text-brand" />
                        </div>
                        <span className="text-gray-600 text-sm font-medium">{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="bg-dark rounded-2xl p-6 text-white">
                  <p className="font-display font-bold text-lg mb-2">Prefer to call?</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Speak directly to Harry. No call centres, no sales team.
                  </p>
                  <a href="tel:+447908783457"
                    className="inline-flex items-center gap-2 text-brand font-bold font-display text-sm hover:text-red-400 transition-colors duration-150">
                    <PhoneCall size={13} /> 07908 783457
                  </a>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-card">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-sm">★</span>)}
                  </div>
                  <p className="text-gray-600 text-sm italic leading-relaxed mb-4">
                    "Outstanding training. Harry's real-world experience made all the difference: our team left genuinely confident and prepared. We'll be back every year."
                  </p>
                  <div>
                    <p className="font-display font-bold text-dark text-sm">Sarah Mitchell</p>
                    <p className="text-gray-400 text-xs mt-0.5">HR Manager, Sussex Construction Ltd</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 lg:order-1">
              <Reveal>
                {sent ? (
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-card min-h-[500px] flex flex-col items-center justify-center text-center p-12">
                    <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={36} className="text-emerald-500" />
                    </div>
                    <h2 className="font-display font-bold text-3xl text-dark mb-3">Quote Request Received!</h2>
                    <p className="text-gray-500 leading-relaxed max-w-sm">
                      Thank you! Harry will send a personalised quote within 24 hours. We look forward to working with you.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 shadow-card space-y-8" noValidate>

                    {/* Contact details */}
                    <div>
                      <h3 className="font-display font-bold text-dark text-lg mb-5">Your Details</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          { id: 'firstName', label: 'First Name',   ph: 'Jane',             type: 'text',  req: true },
                          { id: 'lastName',  label: 'Last Name',    ph: 'Smith',            type: 'text',  req: true },
                          { id: 'company',   label: 'Organisation', ph: 'Acme Ltd',         type: 'text',  req: true,  span: true },
                          { id: 'email',     label: 'Email',        ph: 'jane@company.com', type: 'email', req: true },
                          { id: 'phone',     label: 'Phone',        ph: '07700 900000',      type: 'tel',   req: false },
                        ].map(({ id, label, ph, type, req, span }) => (
                          <div key={id} className={span ? 'sm:col-span-2' : ''}>
                            <label className="block font-display font-bold text-dark text-xs uppercase tracking-wider mb-1.5" htmlFor={id}>
                              {label} {req && <span className="text-brand">*</span>}
                            </label>
                            <input id={id} name={id} type={type} required={req} value={form[id]} onChange={handleChange} placeholder={ph} className={inputCls} />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-gray-100" />

                    {/* Course selection */}
                    <div>
                      <h3 className="font-display font-bold text-dark text-lg mb-1">
                        Courses of Interest <span className="text-brand">*</span>
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">Select all that apply</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {COURSES.map(({ id, icon: Icon, label, sub }) => {
                          const active = selected.includes(id)
                          return (
                            <button key={id} type="button" onClick={() => toggle(id)}
                              className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-all duration-150 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2 ${
                                active
                                  ? 'border-brand bg-brand-light shadow-[0_0_0_1px_rgba(210,74,37,0.2)]'
                                  : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                              }`}
                            >
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${active ? 'bg-brand/15' : 'bg-gray-100'}`}>
                                <Icon size={13} className={active ? 'text-brand' : 'text-gray-500'} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className={`text-sm font-bold font-display leading-tight block ${active ? 'text-dark' : 'text-gray-700'}`}>{label}</span>
                                <span className={`text-xs mt-0.5 block ${active ? 'text-brand' : 'text-gray-400'}`}>{sub}</span>
                              </div>
                              {active && <CheckCircle2 size={14} className="text-brand shrink-0 mt-0.5" />}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div className="h-px bg-gray-100" />

                    {/* Logistics */}
                    <div>
                      <h3 className="font-display font-bold text-dark text-lg mb-5">Logistics</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-display font-bold text-dark text-xs uppercase tracking-wider mb-1.5" htmlFor="learners">
                            Number of Learners <span className="text-brand">*</span>
                          </label>
                          <select id="learners" name="learners" required value={form.learners} onChange={handleChange} className={inputCls}>
                            <option value="">Select range…</option>
                            {LEARNER_RANGES.map(r => <option key={r} value={r}>{r}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block font-display font-bold text-dark text-xs uppercase tracking-wider mb-1.5" htmlFor="delivery">
                            Preferred Delivery
                          </label>
                          <select id="delivery" name="delivery" value={form.delivery} onChange={handleChange} className={inputCls}>
                            <option value="">Select…</option>
                            {DELIVERY.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block font-display font-bold text-dark text-xs uppercase tracking-wider mb-1.5" htmlFor="date">
                            Preferred Date
                          </label>
                          <input
                            id="date" name="date" type="date" value={form.date} onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]} className={inputCls}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block font-display font-bold text-dark text-xs uppercase tracking-wider mb-1.5" htmlFor="notes">
                        Additional Notes
                      </label>
                      <textarea id="notes" name="notes" rows={4} value={form.notes} onChange={handleChange}
                        placeholder="Any specific requirements, accessibility needs, sector context, or questions for Harry..."
                        className={`${inputCls} resize-none`}
                      />
                    </div>

                    <button type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-brand text-white px-6 py-4 rounded-xl font-bold font-display text-base
                        hover:bg-brand-dark active:scale-[0.98]
                        shadow-cta hover:shadow-[0_6px_24px_rgba(210,74,37,0.45)]
                        transition-[background-color,box-shadow,transform] duration-150
                        focus-visible:outline-2 focus-visible:outline-brand"
                    >
                      Request My Free Quote <ArrowRight size={17} />
                    </button>
                    <p className="text-center text-gray-400 text-xs">No obligation · No hard sell · Harry responds within 24 hours</p>
                  </form>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
