import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'

import PremiumHeader from './components/PremiumHeader'
import PremiumFooter from './components/PremiumFooter'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import About from './pages/About'
import SmartDairy from './pages/SmartDairy'
import Technology from './pages/Technology'
import DairyFoods from './pages/DairyFoods'
import Nutrition from './pages/Nutrition'
import Genetics from './pages/Genetics'
import Agriculture from './pages/Agriculture'
import Sustainability from './pages/Sustainability'
import Innovation from './pages/Innovation'
import Business from './pages/Business'
import Campus from './pages/Campus'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function Shell() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 40,
      easing: 'ease-out-cubic',
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    })
  }, [])

  return (
    <>
      <ScrollToTop />
      <PremiumHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/smart-dairy" element={<SmartDairy />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/dairy-foods" element={<DairyFoods />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/genetics" element={<Genetics />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/business" element={<Business />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <PremiumFooter />
      <BackToTop />
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Shell />
    </HashRouter>
  )
}