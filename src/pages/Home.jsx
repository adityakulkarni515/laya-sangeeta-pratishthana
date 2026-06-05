import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowRight, Music, Heart, Star, Users, Shield, ChevronDown, Newspaper } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import PageTransition from '../components/ui/PageTransition'
import SectionHeader from '../components/ui/SectionHeader'
import Divider from '../components/ui/Divider'

function FadeIn({ children, delay = 0, className = '', direction = 'up' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  }
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const whyWeExist = [
  { icon: Heart, text: "To honor Guruji's memory" },
  { icon: Music, text: 'To celebrate Hindustani classical arts' },
  { icon: Star, text: 'To support future artists' },
  { icon: Users, text: 'To unite seekers and music lovers' },
  { icon: Shield, text: 'To preserve rhythm as spiritual heritage' },
]

export default function Home() {
  return (
    <PageTransition>
      <Helmet>
        <title>Laya Sangeeta Pratishthana | Home</title>
        <meta name="description" content="Laya Sangeeta Pratishthana honors the legacy of Tabla maestro Pandit H. Somashekhar through annual Hindustani classical music concerts." />
      </Helmet>

      {/* ───────── HERO ───────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/Somashekharsirphoto1.jpg"
            alt="Pandit H. Somashekhar"
            className="w-full h-full object-cover object-top"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brown-deeper/75 via-brown-deeper/60 to-brown-deeper/90" />
          {/* Tabla concentric rings overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            {[400, 300, 200, 120].map((size) => (
              <div
                key={size}
                className="absolute rounded-full border border-gold"
                style={{ width: size, height: size }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center py-32">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-devanagari text-gold/80 text-lg md:text-xl mb-4 tracking-wide"
          >
            लय संगीत प्रतिष्ठान
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="font-serif font-semibold text-ivory leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
          >
            Laya Sangeeta<br />
            <span className="text-shimmer">Pratishthana</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="gold-line w-32 md:w-48 mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="font-serif italic text-ivory/75 text-lg md:text-2xl lg:text-3xl mb-10 tracking-wide"
          >
            Preserving Rhythm. Celebrating Legacy. Inspiring Generations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/events" className="btn-gold">
              Upcoming Event
            </Link>
            <Link to="/about-guru" className="btn-outline">
              About Guruji
            </Link>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown className="text-gold/50" size={28} />
          </motion.div>
        </div>
      </section>

      {/* ───────── ABOUT ORGANIZATION ───────── */}
      <section className="section-padding bg-cream tabla-pattern">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <FadeIn direction="right" className="relative">
              <div className="relative rounded-sm overflow-hidden shadow-elegant">
                <img
                  src="/images/SomaShekaharSirPhoto.png.avif"
                  alt="Pandit H. Somashekhar"
                  className="w-full h-[420px] md:h-[520px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/50 to-transparent" />
                {/* Gold frame accent */}
                <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-gold/50" />
                <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-gold/50" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-maroon text-ivory px-5 py-4 shadow-maroon">
                <p className="font-sans text-xs tracking-widest uppercase text-gold/80">Est. in honor of</p>
                <p className="font-serif text-lg font-semibold mt-0.5">Pt. H. Somashekhar</p>
              </div>
            </FadeIn>

            {/* Text */}
            <div>
              <FadeIn>
                <SectionHeader
                  eyebrow="Our Organization"
                  title="About Laya Sangeeta Pratishthana"
                  align="left"
                />
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="font-serif text-brown-light leading-relaxed text-lg mt-2">
                  Laya Sangeeta Pratishthana was founded by the devoted students of Pandit H. Somashekhar to honor the timeless legacy of their Guru. Through annual Hindustani classical music concerts, educational initiatives, and cultural gatherings, the organization seeks to preserve and promote the rich rhythmic heritage of Indian classical music.
                </p>
              </FadeIn>

              <Divider variant="wave" className="my-6" />

              <FadeIn delay={0.25}>
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-5">Why We Exist</p>
                <ul className="space-y-3">
                  {whyWeExist.map(({ icon: Icon, text }, i) => (
                    <motion.li
                      key={text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-maroon/10 border border-maroon/20 flex items-center justify-center shrink-0">
                        <Icon size={14} className="text-maroon" />
                      </div>
                      <span className="font-sans text-brown-dark text-sm">{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={0.4} className="mt-8">
                <Link to="/about-guru" className="btn-gold inline-flex items-center gap-2">
                  Discover Guruji's Legacy <ArrowRight size={15} />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── UPCOMING EVENT ───────── */}
      <section className="section-padding bg-brown-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none tabla-pattern" />
        <div className="absolute top-0 left-0 right-0 h-px gold-line" />
        <div className="absolute bottom-0 left-0 right-0 h-px gold-line" />

        <div className="container-custom">
          <FadeIn>
            <SectionHeader
              eyebrow="Mark Your Calendar"
              title="Next Annual Concert — November 2026"
              subtitle="Laya Sangeeta Pratishthana's next celebration of Hindustani classical music is on its way. Details coming soon."
              light
            />
          </FadeIn>

          <div className="mt-12 max-w-4xl mx-auto">
            {/* November highlight box */}
            <FadeIn delay={0.1}>
              <div className="relative rounded-sm border border-gold/30 bg-maroon/20 overflow-hidden">
                {/* Top gold accent line */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
                <div className="px-8 py-12 text-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <p className="font-sans text-xs tracking-[0.35em] uppercase text-gold">Upcoming Event</p>
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                  </div>
                  <p className="font-serif text-ivory/60 text-sm tracking-widest uppercase mb-2">Annual Classical Concert</p>
                  <h3 className="font-serif text-gold font-semibold mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                    November 2026
                  </h3>
                  <div className="gold-line w-20 mx-auto mb-6" />
                  <p className="font-serif italic text-ivory/65 max-w-lg mx-auto leading-relaxed mb-8">
                    A new evening of soulful rhythm and classical artistry — dedicated to the memory of
                    Tabla Maestro <span className="text-gold/90 not-italic">Pandit H. Somashekhar</span>.
                    Venue and date will be announced soon.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/contact" className="btn-gold text-sm">
                      Stay Updated
                    </Link>
                    <Link to="/events" className="btn-outline text-sm">
                      See Anuvartana 2026 Photos
                    </Link>
                  </div>
                </div>
                {/* Bottom gold accent line */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
              </div>
            </FadeIn>

            {/* Artists Banner from 2026 */}
            <FadeIn delay={0.2} className="mt-10">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold/40 text-center mb-4">From Anuvartana 2026 · Kala Academy, Goa</p>
              <div className="relative rounded-sm overflow-hidden shadow-gold-lg">
                <img
                  src="/images/ConcertArtistsBanner.jpg"
                  alt="Performing Artists — Anuvartana 2026"
                  className="w-full h-auto"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* ───────── PRESS STRIP ───────── */}
      <div className="bg-maroon/95 border-y border-gold/20">
        <div className="container-custom py-5">
          <Link
            to="/events#press"
            className="flex flex-col sm:flex-row items-center justify-between gap-4 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                <Newspaper size={15} className="text-gold" />
              </div>
              <div>
                <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold/70 mb-0.5">As Seen In The Press</p>
                <p className="font-serif text-ivory text-base">
                  The Annual Classical Concert 2026 has been featured in
                  <span className="text-gold font-semibold"> Lokmat</span> — Goa's leading Marathi daily.
                </p>
              </div>
            </div>
            <span className="font-sans text-xs tracking-widest uppercase text-gold border border-gold/40 px-4 py-2 rounded-sm group-hover:bg-gold group-hover:text-brown-dark transition-all duration-300 shrink-0">
              Read Coverage →
            </span>
          </Link>
        </div>
      </div>

      {/* ───────── STUDENTS PREVIEW ───────── */}
      <section className="section-padding bg-brown-dark/95 relative overflow-hidden">
        <div className="absolute inset-0 tabla-pattern opacity-40 pointer-events-none" />
        <div className="container-custom relative">
          <FadeIn>
            <SectionHeader
              eyebrow="Guruji's Students"
              title="A Legacy of Learning"
              subtitle="Pandit H. Somashekhar's teachings continue to resonate through his devoted students across India."
              light
            />
          </FadeIn>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { img: '/images/SirStudentUdayKulkarni.jpg', name: 'Dr Uday Kulkarni', role: 'Tabla Artist & Professor' },
              { img: '/images/VidyabhushanNewphoto.jpg', name: 'Vidyabhushan Panchamukhi', role: 'President, LSP', position: 'center' },
              { img: '/images/SirStudentShashidhar.jpg', name: 'Shashidhar Kulkarni', role: 'Secretary, LSP' },
              { img: '/images/SirStudentDundayyaPujar.jpg', name: 'Dr Dundayyaswami', role: 'Asst. Prof & HoD' },
              { img: '/images/SirStudentJayateerth.jpeg', name: 'Jayateerth Panchamukhi', role: 'Classical Artist' },
            ].map(({ img, name, role, position }, i) => (
              <FadeIn key={name} delay={i * 0.1}>
                <div className="group text-center">
                  <div className="relative overflow-hidden rounded-sm mb-3 aspect-square">
                    <img
                      src={img}
                      alt={name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      style={{ objectPosition: position === 'center' ? 'center center' : 'center top' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="font-serif text-ivory text-sm font-semibold">{name}</p>
                  <p className="font-sans text-gold/70 text-xs mt-0.5">{role}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5} className="mt-10 text-center">
            <Link to="/students" className="btn-outline inline-flex items-center gap-2">
              Meet All Students <ArrowRight size={15} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  )
}
