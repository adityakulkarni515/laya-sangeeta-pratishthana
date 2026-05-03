import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Layout from './components/layout/Layout'
import LoadingScreen from './components/ui/LoadingScreen'
import ScrollToTop from './components/ui/ScrollToTop'
import Home from './pages/Home'
import AboutGuru from './pages/AboutGuru'
import Events from './pages/Events'
import Students from './pages/Students'
import Contact from './pages/Contact'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about-guru" element={<AboutGuru />} />
        <Route path="/events" element={<Events />} />
        <Route path="/students" element={<Students />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>
      {!loading && (
        <Layout>
          <ScrollToTop />
          <AnimatedRoutes />
        </Layout>
      )}
    </BrowserRouter>
  )
}
