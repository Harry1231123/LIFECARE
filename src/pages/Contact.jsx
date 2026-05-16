import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, MessageSquare } from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedInIcon } from '../components/SocialIcons'
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

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSent(true) }

  return (
    <div className="pt-[109px] lg:pt-[117px]">

      {/* ── PAGE HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-dark py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-soft to-dark/60" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="max-w-xl">
            <Label><span className="text-white/70">Contact Us</span></Label>
            <h1 className="font-display font-800 text-display-xl text-white mb-5">Let's Talk</h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Whether you have a question about a course, need advice on compliance, or are ready to book — we'd love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 xl:gap-14">

            {/* Sidebar */}
            <div className="space-y-6">
              <Reveal>
                <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-card">
                  <Label>Get in Touch</Label>
                  <ul className="space-y-5">
                    {[
                      { icon: Phone, label: 'Phone', value: '07908 783457', href: 'tel:+447908783457', sub: 'Mon–Fri 08:00–17:00' },
                      { icon: Mail,  label: 'Email', value: 'info@lifecare-training.co.uk', href: 'mailto:info@lifecare-training.co.uk', sub: 'We reply within 24hrs' },
                    ].map(({ icon: Icon, label, value, href, sub }) => (
                      <li key={label} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center shrink-0">
                          <Icon size={15} className="text-brand" />
                        </div>
                        <div>
                          <p className="font-display font-bold text-dark text-sm">{label}</p>
                          <a href={href} className="text-gray-500 text-sm hover:text-brand transition-colors duration-150">{value}</a>
                          <p className="text-gray-400 text-xs mt-0.5">{sub}</p>
                        </div>
                      </li>
                    ))}
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center shrink-0">
                        <MapPin size={15} className="text-brand" />
                      </div>
                      <div>
                        <p className="font-display font-bold text-dark text-sm">Area</p>
                        <p className="text-gray-500 text-sm">Sussex &amp; the South East, UK</p>
                        <p className="text-gray-400 text-xs mt-0.5">On-site delivery available</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center shrink-0">
                        <Clock size={15} className="text-brand" />
                      </div>
                      <div>
                        <p className="font-display font-bold text-dark text-sm">Office Hours</p>
                        <p className="text-gray-500 text-sm">Monday – Friday: 08:00–17:00</p>
                        <p className="text-gray-400 text-xs mt-0.5">Saturday–Sunday: Appointment only</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </Reveal>

              {/* Social */}
              <Reveal delay={80}>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-card">
                  <p className="font-display font-bold text-dark text-sm mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {[
                      { href: 'https://www.facebook.com/Lifecaretraining21',            icon: FacebookIcon,  label: 'Facebook' },
                      { href: 'https://www.instagram.com/lifecaretraining_/',           icon: InstagramIcon, label: 'Instagram' },
                      { href: 'https://www.linkedin.com/company/lifecare-training-uk/', icon: LinkedInIcon,  label: 'LinkedIn' },
                    ].map(({ href, icon: Icon, label }) => (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                        className="w-11 h-11 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center text-gray-500 hover:bg-brand hover:text-white hover:border-brand transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-brand">
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* WhatsApp */}
              <Reveal delay={120}>
                <a
                  href="https://wa.me/447908783457"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 hover:bg-emerald-100 transition-colors duration-150 group"
                >
                  <div className="w-11 h-11 bg-emerald-500 rounded-xl flex items-center justify-center shrink-0">
                    <MessageSquare size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-emerald-800 text-sm">WhatsApp Harry directly</p>
                    <p className="text-emerald-600 text-xs mt-0.5">Speak to the trainer — not a call centre</p>
                  </div>
                </a>
              </Reveal>

              {/* Promise */}
              <Reveal delay={160}>
                <div className="bg-brand-light border border-red-200 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={14} className="text-brand" />
                    <span className="font-display font-bold text-dark text-sm">Fast Response Guaranteed</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We aim to respond to all enquiries within 24 hours, Monday to Friday. For urgent requirements, please call directly.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Reveal>
                {sent ? (
                  <div className="min-h-[500px] flex flex-col items-center justify-center text-center bg-white border border-gray-200 rounded-2xl shadow-card p-12">
                    <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={36} className="text-emerald-500" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-dark mb-3">Message Received!</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm">Thank you for getting in touch. Harry will review your message and respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 shadow-card space-y-5" noValidate>
                    <div>
                      <Label>Send a Message</Label>
                      <p className="text-gray-500 text-sm">Fill in the form below and we'll be in touch shortly.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { id: 'name',    label: 'Full Name',  ph: 'Jane Smith',       type: 'text',  req: true },
                        { id: 'company', label: 'Company',    ph: 'Acme Ltd',         type: 'text',  req: false },
                        { id: 'email',   label: 'Email',      ph: 'jane@company.com', type: 'email', req: true },
                        { id: 'phone',   label: 'Phone',      ph: '07700 900000',      type: 'tel',   req: false },
                      ].map(({ id, label, ph, type, req }) => (
                        <div key={id}>
                          <label className="block font-display font-bold text-dark text-xs uppercase tracking-wider mb-1.5" htmlFor={id}>
                            {label} {req && <span className="text-brand">*</span>}
                          </label>
                          <input
                            id={id} name={id} type={type} required={req}
                            value={form[id]} onChange={handleChange}
                            placeholder={ph} className={inputCls}
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label className="block font-display font-bold text-dark text-xs uppercase tracking-wider mb-1.5" htmlFor="message">
                        Message <span className="text-brand">*</span>
                      </label>
                      <textarea
                        id="message" name="message" required rows={6}
                        value={form.message} onChange={handleChange}
                        placeholder="Tell us what you're looking for — course type, number of learners, any specific requirements..."
                        className={`${inputCls} resize-none`}
                      />
                    </div>
                    <button type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-brand text-white px-6 py-4 rounded-xl font-bold font-display text-sm
                        hover:bg-brand-dark active:scale-[0.98]
                        shadow-cta hover:shadow-[0_6px_24px_rgba(212,44,44,0.45)]
                        transition-[background-color,box-shadow,transform] duration-150
                        focus-visible:outline-2 focus-visible:outline-brand"
                    >
                      <Send size={15} /> Send Message
                    </button>
                    <p className="text-center text-gray-400 text-xs">We respond within 24 hours, Monday to Friday</p>
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
