import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home     from './pages/Home'
import About    from './pages/About'
import Services from './pages/Services'
import Pricing  from './pages/Pricing'
import Contact  from './pages/Contact'
import Blog     from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Booking  from './pages/Booking'
import Team     from './pages/Team'
import Course   from './pages/Course'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing"  element={<Pricing />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/blog"     element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/team"        element={<Team />} />
          <Route path="/courses/:slug" element={<Course />} />
          <Route path="/booking"  element={<Booking />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
