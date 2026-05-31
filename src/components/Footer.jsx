import { Link } from 'react-router-dom'
import { HeartPulse, Phone, Mail, MapPin, ArrowRight, Shield } from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedInIcon } from './SocialIcons'

const QUICK = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About Harry' },
  { to: '/team',     label: 'Meet the Team' },
  { to: '/services', label: 'All Courses' },
  { to: '/pricing',  label: 'Pricing' },
  { to: '/blog',     label: 'Blog & Guides' },
  { to: '/contact',  label: 'Contact Us' },
  { to: '/booking',  label: 'Get a Quote' },
]

const FOOTER_COURSES = [
  { to: '/courses/efaw',       label: 'Emergency First Aid at Work' },
  { to: '/courses/faw',        label: 'First Aid at Work' },
  { to: '/courses/paediatric', label: 'Paediatric First Aid' },
  { to: '/courses/epfa',       label: 'Emergency Paediatric First Aid' },
  { to: '/courses/bls',        label: 'Basic Life Support' },
  { to: '/courses/mental',     label: 'Mental Health First Aid' },
  { to: '/courses/forestry',   label: 'Forestry & Agricultural First Aid' },
]

const ACCRED = [
  'First Aid Awards',
  'Ofqual Regulated',
  'Resuscitation Council UK',
  'AoHT Member',
]

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      {/* Brand strip */}
      <div className="brand-strip" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="group flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-brand rounded-xl flex items-center justify-center group-hover:bg-brand-dark transition-colors duration-150">
                <HeartPulse size={18} className="text-white" strokeWidth={2.5} />
              </div>
              <div className="leading-none">
                <span className="block font-display font-800 text-[1.05rem] text-white">
                  Life<span className="text-brand">Care</span>
                </span>
                <span className="block text-gray-500 text-[9px] font-semibold tracking-[0.22em] uppercase mt-[3px]">Training</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Delivering life-saving first aid skills to businesses and communities across Sussex and the South East. Ofqual regulated. HSE compliant. Frontline experienced.
            </p>
            <div className="flex gap-2.5 mb-6">
              {[
                { href: 'https://www.facebook.com/Lifecaretraining21',            icon: FacebookIcon,  label: 'Facebook' },
                { href: 'https://www.instagram.com/lifecaretraining_/',           icon: InstagramIcon, label: 'Instagram' },
                { href: 'https://www.linkedin.com/company/lifecare-training-uk/', icon: LinkedInIcon,  label: 'LinkedIn' },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand hover:border-brand transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-brand">
                  <Icon size={14} />
                </a>
              ))}
            </div>
            {/* Accred badges */}
            <div className="space-y-2">
              {ACCRED.map(a => (
                <div key={a} className="flex items-center gap-2 text-gray-500 text-xs">
                  <Shield size={11} className="text-brand shrink-0" /> {a}
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-display font-bold text-[11px] uppercase tracking-[0.15em] mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="group flex items-center gap-1.5 text-gray-400 text-sm hover:text-white transition-colors duration-150">
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-150 shrink-0 text-brand" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-display font-bold text-[11px] uppercase tracking-[0.15em] mb-5">Our Courses</h4>
            <ul className="space-y-2.5">
              {FOOTER_COURSES.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="group flex items-center gap-1.5 text-gray-400 text-sm hover:text-white transition-colors duration-150">
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-150 shrink-0 text-brand" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="text-white font-display font-bold text-[11px] uppercase tracking-[0.15em] mb-5">Get in Touch</h4>
            <ul className="space-y-3.5 mb-7">
              <li>
                <a href="tel:+447908783457" className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors duration-150">
                  <Phone size={13} className="text-brand shrink-0" /> 07908 783457
                </a>
              </li>
              <li>
                <a href="mailto:LifeCareTraining@Outlook.Com" className="flex items-start gap-3 text-gray-400 text-sm hover:text-white transition-colors duration-150">
                  <Mail size={13} className="text-brand shrink-0 mt-0.5" /> LifeCareTraining@Outlook.Com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-gray-400 text-sm">
                  <MapPin size={13} className="text-brand shrink-0" /> Sussex &amp; South East, UK
                </span>
              </li>
              <li className="text-gray-500 text-xs pt-1">
                Mon–Fri: 08:00–17:00 · Sat–Sun: Appointment only
              </li>
            </ul>

            <h4 className="text-white font-display font-bold text-[11px] uppercase tracking-[0.15em] mb-3">Newsletter</h4>
            <p className="text-gray-500 text-xs leading-relaxed mb-3">Compliance tips, first aid guides, and course updates.</p>
            <form onSubmit={e => e.preventDefault()} className="flex gap-2">
              <input
                type="email" placeholder="Your email" required
                className="flex-1 min-w-0 bg-white/8 border border-white/12 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand transition-colors duration-150"
              />
              <button type="submit"
                className="bg-brand text-white px-3.5 py-2.5 rounded-lg text-xs font-bold font-display uppercase tracking-wide hover:bg-brand-dark active:scale-[0.97] transition-[background-color,transform] duration-150 shrink-0 focus-visible:outline-2 focus-visible:outline-white">
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} LifeCare Training Ltd. All rights reserved. Registered in England & Wales.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/contact" className="text-gray-600 text-xs hover:text-white transition-colors duration-150">Privacy Policy</Link>
            <Link to="/contact" className="text-gray-600 text-xs hover:text-white transition-colors duration-150">Terms &amp; Conditions</Link>
            <span className="text-gray-600 text-xs">Ofqual Regulated</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
