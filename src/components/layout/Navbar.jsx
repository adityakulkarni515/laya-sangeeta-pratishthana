import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about-guru', label: 'About Guruji' },
  { path: '/events', label: 'Events' },
  { path: '/students', label: 'Students' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-brown-deeper/95 backdrop-blur-md shadow-lg border-b border-gold/20'
            : 'bg-gradient-to-b from-brown-deeper/80 to-transparent backdrop-blur-sm'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col leading-tight group">
              <span className="font-devanagari text-gold text-lg md:text-xl font-semibold tracking-wide group-hover:text-gold-300 transition-colors duration-300">
                लय संगीत प्रतिष्ठान
              </span>
              <span className="font-serif text-ivory/70 text-xs tracking-[0.2em] uppercase group-hover:text-ivory transition-colors duration-300">
                Laya Sangeeta Pratishthana
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 font-sans text-sm tracking-widest uppercase font-medium transition-colors duration-300 ${
                      active ? 'text-gold' : 'text-ivory/75 hover:text-gold'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient"
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-ivory hover:text-gold transition-colors duration-200 p-2"
              aria-label="Toggle navigation"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={24} />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={24} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed inset-0 z-40 bg-brown-deeper md:hidden flex flex-col"
          >
            {/* Decorative top border */}
            <div className="h-0.5 gold-gradient" />
            <div className="flex flex-col items-center justify-center flex-1 gap-2 pt-20">
              <div className="mb-6 text-center">
                <p className="font-devanagari text-gold text-2xl font-semibold">लय संगीत प्रतिष्ठान</p>
                <div className="gold-line mt-3 w-40 mx-auto" />
              </div>
              {navLinks.map((link, i) => {
                const active = location.pathname === link.path
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-8 py-4 font-serif text-2xl tracking-wide transition-colors duration-300 text-center ${
                        active ? 'text-gold' : 'text-ivory/80 hover:text-gold'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-8"
              >
                <a
                  href="mailto:layasangeetapratishtana@gmail.com"
                  className="btn-outline text-sm"
                >
                  Get In Touch
                </a>
              </motion.div>
            </div>
            <div className="pb-8 text-center">
              <p className="text-ivory/30 font-sans text-xs tracking-widest uppercase">Preserving Rhythm · Celebrating Legacy</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
