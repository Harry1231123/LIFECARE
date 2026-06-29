import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import Reveal from '../components/Reveal'

function Label({ children }) {
  return (
    <div className="label mb-4">
      <span className="rule-brand" />
      {children}
    </div>
  )
}

const POSTS = [
  {
    slug: 'saving-lives-is-not-enough',
    category: 'Training Advice',
    title: '#SavingLivesIsNotEnough: Pre-Hospital Management of Paediatric Burns',
    excerpt: 'A clinical case study from the frontline. A 12-year-old girl. A chip pan fire. And a simple intervention, cool running water, that can be the difference between a full recovery and a lifetime of scarring.',
    date: '11 Mar 2026', readTime: '6 min', image: '/assets/hero.webp', featured: true,
  },
  {
    slug: 'business-legally-required-first-aider',
    category: 'Legal Compliance',
    title: 'Is Your Business Legally Required to Have a Qualified First Aider?',
    excerpt: "The Health and Safety (First-Aid) Regulations 1981 require every employer to make adequate first aid provision. But what does 'adequate' actually mean, and what happens if you don't comply?",
    date: '12 May 2025', readTime: '5 min', image: '/assets/equipment.webp', featured: false,
  },
  {
    slug: 'hse-first-aid-regulations-guide',
    category: 'Legal Compliance',
    title: "The HSE First Aid Regulations: A Plain-English Guide for Employers",
    excerpt: "The legislation is over 40 years old but it's more relevant than ever. We break down exactly what the Regulations require, and what the penalties are for non-compliance.",
    date: '28 Apr 2025', readTime: '6 min', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80', featured: false,
  },
  {
    slug: 'mental-health-workplace-law-2025',
    category: 'Mental Health',
    title: 'Mental Health at Work: What the Law Actually Says in 2025',
    excerpt: "Mental health first aid is no longer just best practice. Here's what current HSE guidance means for your organisation, and how to protect yourself.",
    date: '3 Apr 2025', readTime: '4 min', image: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&w=1200&q=80', featured: false,
  },
  {
    slug: 'event-first-aid-cover-guide',
    category: 'Events',
    title: 'Community Events: How Much First Aid Cover Does Your Event Actually Need?',
    excerpt: 'Every event organiser has a duty of care. But the required level of cover depends on your specific event, and here\'s how to assess it.',
    date: '5 Mar 2025', readTime: '5 min', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80', featured: false,
  },
  {
    slug: 'what-happens-hse-inspection',
    category: 'Legal Compliance',
    title: "What Happens When the HSE Inspects and You're Not Compliant?",
    excerpt: 'Improvement notices, prohibition notices, prosecution, and unlimited fines. Here\'s the real-world consequence of HSE non-compliance.',
    date: '19 Feb 2025', readTime: '7 min', image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&w=1200&q=80', featured: false,
  },
]

const CATEGORIES = ['All', 'Legal Compliance', 'Mental Health', 'Training Advice', 'Events']

const CATEGORY_STYLE = {
  'Legal Compliance': 'bg-dark text-white',
  'Mental Health':    'bg-emerald-600 text-white',
  'Training Advice':  'bg-brand text-white',
  'Events':           'bg-amber-500 text-white',
}

export default function Blog() {
  const featured = POSTS[0]
  const rest     = POSTS.slice(1)

  return (
    <div className="pt-[99px] lg:pt-[128px]">

      {/* ── PAGE HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-dark py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-soft to-dark/60" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <Label><span className="text-white/70">Resources & Guides</span></Label>
            <h1 className="font-display font-800 text-display-xl text-white mb-5 text-balance">
              First Aid Insights &amp; Guidance
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Practical advice on compliance, best practice, and mental health at work, from frontline professionals who've actually seen the consequences.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Category filter */}
          <Reveal className="flex flex-wrap gap-2 mb-14">
            {CATEGORIES.map((cat, i) => (
              <button key={cat}
                className={`px-4 py-2 rounded-full text-xs font-bold font-display uppercase tracking-wider transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2 ${
                  i === 0
                    ? 'bg-brand text-white'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          {/* Featured */}
          <Reveal className="mb-12">
            <Link to={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-2 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-200 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
            >
              <div className="relative overflow-hidden h-72 lg:h-auto">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                <span className="absolute top-5 left-5 bg-brand text-white text-[10px] font-bold font-display uppercase tracking-wider px-3 py-1.5 rounded-full">
                  Featured
                </span>
              </div>
              <div className="p-9 lg:p-12 flex flex-col justify-center">
                <span className="inline-flex items-center gap-1.5 text-brand text-[11px] font-bold font-display uppercase tracking-wider mb-4">
                  <Tag size={10} /> {featured.category}
                </span>
                <h2 className="font-display font-bold text-dark text-2xl lg:text-3xl leading-snug mb-4 group-hover:text-brand transition-colors duration-150 break-words">
                  {featured.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-3 text-gray-400 text-xs font-medium">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <Clock size={10} />
                  <span>{featured.readTime} read</span>
                  <span className="ml-auto inline-flex items-center gap-1 text-brand font-bold">
                    Read article <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map(({ slug, category, title, excerpt, date, readTime, image }, i) => (
              <Reveal key={slug} delay={i * 70}>
                <Link to={`/blog/${slug}`}
                  className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-card hover-lift focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={image} alt="" className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/45 to-transparent" />
                    <span className={`absolute top-3 left-3 text-[10px] font-bold font-display uppercase tracking-wider px-2.5 py-1 rounded-full ${CATEGORY_STYLE[category] || 'bg-dark text-white'}`}>
                      {category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-dark text-[1rem] leading-snug mb-2 group-hover:text-brand transition-colors duration-150 flex-1">
                      {title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{excerpt}</p>
                    <div className="flex items-center justify-between text-gray-400 text-xs font-medium">
                      <span>{date}</span>
                      <span className="flex items-center gap-1"><Clock size={10} /> {readTime}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="relative py-16 lg:py-20 bg-brand overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <Reveal className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display font-800 text-display-md text-white mb-4">
            Not Sure If Your Business Is Compliant?
          </h2>
          <p className="text-white/80 leading-relaxed mb-7">
            Get a free consultation. Harry will review your current first aid provision and tell you exactly what you need to meet your legal obligations.
          </p>
          <Link to="/booking"
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
