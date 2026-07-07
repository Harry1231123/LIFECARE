import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import { POSTS } from '../data/blog'

const CATEGORY_STYLE = {
  'Legal Compliance': 'bg-dark text-white',
  'Mental Health':    'bg-emerald-600 text-white',
  'Training Advice':  'bg-brand text-white',
  'Events':           'bg-amber-500 text-white',
}

function ContentBlock({ block }) {
  switch (block.type) {
    case 'intro':
      return <p className="text-xl text-gray-600 leading-[1.8] mb-8 font-medium">{block.text}</p>
    case 'h2':
      return <h2 className="font-display font-800 text-2xl text-dark mt-12 mb-4">{block.text}</h2>
    case 'p':
      return <p className="text-gray-600 leading-[1.85] mb-5">{block.text}</p>
    case 'ul':
      return (
        <ul className="space-y-3 mb-6 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-gray-600 leading-relaxed text-[0.95rem]">
              <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-[0.55rem]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'callout':
      return (
        <div className="my-8 border-l-4 border-brand bg-brand-light rounded-r-xl px-6 py-5">
          <p className="text-dark font-semibold leading-relaxed text-[0.95rem]">{block.text}</p>
        </div>
      )
    default:
      return null
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = POSTS.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const catStyle = CATEGORY_STYLE[post.category] || 'bg-dark text-white'
  const otherPosts = POSTS.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <div className="pt-[99px] lg:pt-[128px]">
      <Seo title={`${post.title} | LifeCare Training`} description={post.excerpt} />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.image} alt="" aria-hidden className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/50" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 text-sm font-medium hover:text-white transition-colors duration-150 mb-8">
              <ArrowLeft size={14} /> Back to all articles
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`text-[10px] font-bold font-display uppercase tracking-wider px-3 py-1.5 rounded-full ${catStyle}`}>
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-white/50 text-xs">
                <Calendar size={11} /> {post.date}
              </span>
              <span className="flex items-center gap-1.5 text-white/50 text-xs">
                <Clock size={11} /> {post.readTime} read
              </span>
            </div>
            <h1 className="font-display font-800 text-display-lg text-white text-balance leading-tight">
              {post.title}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── ARTICLE ───────────────────────────────────────────────── */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal>
            {(post.content || []).map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}
          </Reveal>

          {/* Author */}
          <Reveal>
            <div className="mt-14 pt-10 border-t border-gray-100 flex items-center gap-5">
              <img
                src="/assets/hero.webp"
                alt="Harry Todhunter"
                className="w-16 h-16 rounded-full object-cover object-top shrink-0"
              />
              <div>
                <div className="font-display font-bold text-dark text-base">Harry Todhunter</div>
                <div className="text-gray-500 text-sm">Founder, LifeCare Training · Active Ambulance Technician · Industry Experience</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── MORE ARTICLES ─────────────────────────────────────────── */}
      {otherPosts.length > 0 && (
        <section className="bg-gray-50 py-16 lg:py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Reveal>
              <h2 className="font-display font-800 text-2xl text-dark mb-10">More Articles</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherPosts.map(({ slug: s, category, title, excerpt, date, readTime, image }, i) => (
                <Reveal key={s} delay={i * 70}>
                  <Link to={`/blog/${s}`}
                    className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-card hover-lift focus-visible:outline-2 focus-visible:outline-brand"
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
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="relative py-16 lg:py-20 bg-brand overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <Reveal className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display font-800 text-display-md text-white mb-4">
            Need Training for Your Team?
          </h2>
          <p className="text-white/80 leading-relaxed mb-7">
            Get a free, no-obligation quote. Harry will recommend the right qualification for your workplace and tell you exactly what your legal duties require.
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
