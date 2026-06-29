import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'

const NAV = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/team',     label: 'Team' },
  { to: '/services', label: 'Services' },
  { to: '/pricing',  label: 'Pricing' },
  { to: '/blog',     label: 'Blog' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location                = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  const active = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-nav' : ''}`}
      style={{ backgroundColor: '#737373' }}
    >
      {/* Brand strip */}
      <div className="brand-strip" />

      {/* Top bar */}
      <div className="hidden lg:block border-b border-white/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-1.5 flex items-center justify-between">
          <p className="text-white/80 text-[11px] font-medium">
            HSE-compliant first aid training · Sussex &amp; South East England
          </p>
          <div className="flex items-center gap-5">
            <a
              href="mailto:LifeCareTraining@Outlook.Com"
              className="flex items-center gap-1.5 text-white/80 text-[11px] font-semibold hover:text-white transition-colors duration-150"
            >
              <Mail size={11} className="text-white/70" />
              LifeCareTraining@Outlook.Com
            </a>
            <a
              href="tel:+447908783457"
              className="flex items-center gap-1.5 text-white/80 text-[11px] font-semibold hover:text-white transition-colors duration-150"
            >
              <Phone size={11} className="text-white/70" />
              07908 783457
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link to="/" className="group shrink-0" aria-label="LifeCare Training home">
            <img src="/assets/logo2.png" alt="LifeCare Training" className="h-20 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-150 font-display ${
                  active(to)
                    ? 'text-white'
                    : 'text-white/75 hover:text-white hover:bg-white/15'
                }`}
              >
                {label}
                {active(to) && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3.5 h-0.5 bg-brand rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-xl text-sm font-bold font-display
                hover:bg-brand-dark active:scale-[0.98]
                shadow-[0_2px_8px_rgba(210,74,37,0.35)]
                hover:shadow-[0_4px_16px_rgba(210,74,37,0.45)]
                transition-[background-color,box-shadow,transform] duration-150
                focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="lg:hidden w-9 h-9 flex items-center justify-center text-white rounded-lg hover:bg-white/20 active:bg-white/30 transition-colors duration-150"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-250 ${open ? 'max-h-[560px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="border-t border-white/15 px-6 py-5 space-y-1" style={{ backgroundColor: '#737373' }}>
          {NAV.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold font-display transition-colors duration-150 ${
                active(to)
                  ? 'bg-white/20 text-white'
                  : 'text-white/80 hover:bg-white/15 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/15">
            <Link
              to="/booking"
              className="flex justify-center bg-brand text-white px-5 py-3.5 rounded-xl text-sm font-bold font-display hover:bg-brand-dark transition-colors duration-150 shadow-cta"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+447908783457"
              className="flex items-center justify-center gap-2 mt-3 text-white/70 text-sm font-medium"
            >
              <Phone size={13} className="text-brand" /> 07908 783457
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
