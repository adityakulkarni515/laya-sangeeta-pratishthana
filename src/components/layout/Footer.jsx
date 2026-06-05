import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, MapPin, Facebook, Youtube, Newspaper } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about-guru', label: 'About Guruji' },
  { path: '/events', label: 'Events' },
  { path: '/students', label: 'Students' },
  { path: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-brown-deeper text-ivory">
      {/* Gold border top */}
      <div className="h-px gold-line" />

      {/* Decorative top band */}
      <div className="bg-maroon-deeper/60 py-3">
        <div className="container-custom">
          <p className="text-center font-serif text-gold/80 italic text-sm tracking-wide">
            "लय ही ब्रह्म है — Rhythm is the Cosmos"
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="mb-5">
              <p className="font-devanagari text-gold text-2xl font-semibold mb-1">लय संगीत प्रतिष्ठान</p>
              <p className="font-serif text-ivory/60 text-sm tracking-[0.15em] uppercase">Laya Sangeeta Pratishthana</p>
            </div>
            <div className="gold-line w-20 mb-5" />
            <p className="font-sans text-ivory/60 text-sm leading-relaxed">
              Founded by the devoted students of Pandit H. Somashekhar to honor the timeless legacy of their Guru and to preserve the rich rhythmic heritage of Indian classical music.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {[
                { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/SomashekharSirFanClub' },
                { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@LayaSangeetaPratishtana' },
              ].map(({ icon: Icon, label, href }) => (
                href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-ivory/50 hover:text-gold hover:border-gold transition-all duration-300"
                  >
                    <Icon size={15} />
                  </a>
                ) : (
                  <button
                    key={label}
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-ivory/50 hover:text-gold hover:border-gold transition-all duration-300"
                  >
                    <Icon size={15} />
                  </button>
                )
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-gold text-lg mb-5">Navigation</h3>
            <div className="gold-line w-12 mb-5" />
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-ivory/60 hover:text-gold tracking-wide transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-gold/0 group-hover:bg-gold/70 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-gold text-lg mb-5">Contact</h3>
            <div className="gold-line w-12 mb-5" />
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-1 shrink-0" />
                <span className="font-sans text-sm text-ivory/60 leading-relaxed">Karnataka, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-gold mt-1 shrink-0" />
                <a
                  href="mailto:layasangeetapratishtana@gmail.com"
                  className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300 break-all"
                >
                  layasangeetapratishtana@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <p className="font-sans text-xs text-ivory/40 uppercase tracking-widest mb-3">Upcoming Event</p>
              <div className="border border-gold/20 rounded p-3 bg-maroon/10">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  <p className="font-sans text-xs text-gold/60 uppercase tracking-widest">Coming Soon</p>
                </div>
                <p className="font-serif text-ivory/90 text-sm">Annual Classical Concert 2026</p>
                <p className="font-sans text-xs text-gold/80 mt-1">November 2026 · Details TBA</p>
              </div>
              <Link
                to="/events#press"
                className="mt-3 flex items-center gap-2 text-ivory/50 hover:text-gold transition-colors duration-300 group"
              >
                <Newspaper size={13} className="shrink-0" />
                <span className="font-sans text-xs tracking-wide">As featured in <span className="text-gold/80 group-hover:text-gold">Lokmat</span></span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-ivory/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-ivory/30 text-center">
            © 2026 Laya Sangeeta Pratishthana. All rights reserved.
          </p>
          <p className="font-serif text-xs text-gold/40 italic text-center">
            In memory of Pandit H. Somashekhar
          </p>
        </div>
      </div>
    </footer>
  )
}
