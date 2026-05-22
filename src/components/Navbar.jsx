import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, HeartPulse, ChevronDown } from 'lucide-react'

const NAV = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/pricing',  label: 'Pricing' },
  { to: '/blog',     label: 'Blog' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location              = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  const active = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-nav' : 'border-b border-gray-100'}`}>
      {/* Brand strip */}
      <div className="brand-strip" />

      {/* Top bar */}
      <div className="hidden lg:block bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-1.5 flex items-center justify-between">
          <p className="text-gray-500 text-[11px] font-medium">
            HSE-compliant first aid training · Sussex &amp; South East England
          </p>
          <a
            href="tel:+447908783457"
            className="flex items-center gap-1.5 text-gray-600 text-[11px] font-semibold hover:text-brand transition-colors duration-150"
          >
            <Phone size={11} className="text-brand" />
            07908 783457
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2.5 shrink-0" aria-label="LifeCare Training home">
            <div className="w-9 h-9 bg-brand rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgba(210,74,37,0.35)] group-hover:bg-brand-dark transition-colors duration-150">
              <HeartPulse size={18} className="text-white" strokeWidth={2.5} />
            </div>
            <div className="leading-none">
              <span className="block font-display font-800 text-[1.05rem] leading-none text-dark tracking-tight">
                Life<span className="text-brand">Care</span>
              </span>
              <span className="block text-gray-400 text-[9px] font-semibold tracking-[0.22em] uppercase mt-[3px]">
                Training
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-150 font-display ${
                  active(to)
                    ? 'text-brand'
                    : 'text-gray-600 hover:text-dark hover:bg-gray-50'
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
            className="lg:hidden w-9 h-9 flex items-center justify-center text-gray-700 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-150"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-250 ${open ? 'max-h-[560px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-gray-100 px-6 py-5 space-y-1">
          {NAV.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold font-display transition-colors duration-150 ${
                active(to)
                  ? 'bg-brand-light text-brand'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-dark'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <Link
              to="/booking"
              className="flex justify-center bg-brand text-white px-5 py-3.5 rounded-xl text-sm font-bold font-display hover:bg-brand-dark transition-colors duration-150 shadow-cta"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+447908783457"
              className="flex items-center justify-center gap-2 mt-3 text-gray-500 text-sm font-medium"
            >
              <Phone size={13} className="text-brand" /> 07908 783457
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
