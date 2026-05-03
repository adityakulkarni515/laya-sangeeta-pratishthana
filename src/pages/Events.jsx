import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { MapPin, Clock, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import SectionHeader from '../components/ui/SectionHeader'
import Divider from '../components/ui/Divider'
import CountdownTimer from '../components/ui/CountdownTimer'

function FadeIn({ children, delay = 0, className = '' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Gallery lightbox
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <button onClick={onClose} className="absolute top-5 right-5 text-white/70 hover:text-white z-10">
          <X size={28} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2"
        >
          <ChevronLeft size={36} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2"
        >
          <ChevronRight size={36} />
        </button>

        <motion.div
          key={index}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl max-h-[85vh] relative"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[index].src}
            alt={images[index].caption}
            className="max-w-full max-h-[80vh] object-contain rounded"
          />
          <p className="text-center text-white/60 font-serif text-sm mt-3">{images[index].caption}</p>
          <p className="text-center text-white/30 font-sans text-xs mt-1">{index + 1} / {images.length}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function GalleryGrid({ images, title }) {
  const [lightboxIdx, setLightboxIdx] = useState(null)

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <motion.div
            key={img.src}
            className="relative overflow-hidden rounded-sm group cursor-pointer"
            style={{ aspectRatio: i === 0 ? '16/9' : '1/1', gridColumn: i === 0 ? 'span 2' : undefined }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightboxIdx(i)}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 rounded-full border-2 border-gold/80 flex items-center justify-center bg-brown-dark/40">
                <span className="text-gold text-xs">⊕</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
              <p className="font-serif text-ivory text-sm">{img.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {lightboxIdx !== null && (
        <Lightbox
          images={images}
          index={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onPrev={() => setLightboxIdx((lightboxIdx - 1 + images.length) % images.length)}
          onNext={() => setLightboxIdx((lightboxIdx + 1) % images.length)}
        />
      )}
    </div>
  )
}

const dharwad2022Images = [
  { src: '/images/PHOTO-2022-07-05-08-31-52.jpg',    caption: 'Annual Program — Dharwad 2022' },
  { src: '/images/PHOTO-2022-07-05-08-31-52-2.jpg',  caption: 'Cultural evening — Dharwad 2022' },
  { src: '/images/PHOTO-2022-07-05-08-31-52-3.jpg',  caption: 'Artists at Dharwad 2022' },
  { src: '/images/PHOTO-2022-07-05-08-31-52-4.jpg',  caption: 'Musical gathering — Dharwad 2022' },
  { src: '/images/PHOTO-2022-07-05-08-31-52-5.jpg',  caption: 'Tabla recital — Dharwad 2022' },
  { src: '/images/PHOTO-2022-07-05-08-31-52-6.jpg',  caption: 'Performance — Dharwad 2022' },
  { src: '/images/PHOTO-2022-07-05-08-31-52-7.jpg',  caption: 'Concert highlights — Dharwad 2022' },
  { src: '/images/PHOTO-2022-07-05-08-31-52-8.jpg',  caption: 'Ensemble — Dharwad 2022' },
  { src: '/images/PHOTO-2022-07-05-08-31-52-9.jpg',  caption: 'Dharwad 2022 — memories' },
  { src: '/images/PHOTO-2022-07-05-08-31-52-10.jpg', caption: 'Dharwad 2022 — celebration' },
  { src: '/images/PHOTO-2022-07-05-08-31-52-11.jpg', caption: 'Dharwad 2022 — final moments' },
]

const dharwad2023Images = [
  { src: '/images/Concerts2023photo1.jpeg', caption: 'Annual Program — Dharwad 2023' },
  { src: '/images/Concerts2023photo2.jpeg', caption: 'Artists performing at Dharwad 2023' },
  { src: '/images/Concerts2023photo3.jpeg', caption: 'Cultural evening — Dharwad 2023' },
  { src: '/images/Concert2023photo4.jpeg', caption: 'Ensemble at Dharwad 2023' },
]

export default function Events() {
  return (
    <PageTransition>
      <Helmet>
        <title>Events | Laya Sangeeta Pratishthana</title>
        <meta name="description" content="Annual Hindustani classical music concerts by Laya Sangeeta Pratishthana. Past events in Dharwad 2022 & 2023. Upcoming: Kala Academy Goa, 27 May 2026." />
      </Helmet>

      {/* ───────── HERO ───────── */}
      <section className="relative h-[50vh] min-h-[340px] flex items-end overflow-hidden">
        <img
          src="/images/Concerts2023photo1.jpeg"
          alt="Concert event"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown-deeper/50 via-brown-deeper/60 to-brown-deeper" />
        <div className="relative z-10 container-custom pb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-sans text-xs tracking-[0.35em] uppercase text-gold mb-3"
          >
            Concerts · Performances · Cultural Gatherings
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="font-serif text-ivory font-semibold"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}
          >
            Our Events
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7 }}
            className="gold-line w-20 mt-4"
          />
        </div>
      </section>

      {/* ───────── UPCOMING EVENT (FEATURED) ───────── */}
      <section className="bg-maroon-deeper/95 relative overflow-hidden">
        <div className="absolute inset-0 tabla-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px gold-line" />
        <div className="container-custom py-16 md:py-24 relative">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            {/* Poster */}
            <FadeIn direction="right" className="lg:w-5/12">
              <div className="relative rounded-sm overflow-hidden shadow-gold-lg">
                <img
                  src="/images/UpcomingEventposter.png.avif"
                  alt="Annual Classical Concert 2026 — Official Poster"
                  className="w-full object-cover"
                  style={{ maxHeight: '500px' }}
                />
                {/* Upcoming badge */}
                <div className="absolute top-4 left-4">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="bg-gold text-brown-dark px-4 py-2 font-sans font-bold text-xs tracking-widest uppercase shadow-gold"
                  >
                    Upcoming
                  </motion.div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-maroon text-ivory px-3 py-2 font-sans font-bold text-xs tracking-widest uppercase border border-ivory/20">
                    Free Entry
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Details */}
            <div className="lg:w-7/12">
              <FadeIn>
                <p className="font-sans text-xs tracking-[0.35em] uppercase text-gold/80 mb-3">Featured — Annual Concert</p>
                <h2 className="font-serif text-ivory font-semibold mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                  Annual Classical Concert 2026
                </h2>
                <div className="gold-line w-20 mb-6" />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-start gap-3 bg-brown-darker/40 border border-gold/15 p-4 rounded-sm">
                    <Calendar className="text-gold shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="font-sans text-xs tracking-widest uppercase text-gold/60 mb-0.5">Date</p>
                      <p className="font-serif text-ivory">27 May 2026</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-brown-darker/40 border border-gold/15 p-4 rounded-sm">
                    <Clock className="text-gold shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="font-sans text-xs tracking-widest uppercase text-gold/60 mb-0.5">Time</p>
                      <p className="font-serif text-ivory">2:00 PM – 8:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-brown-darker/40 border border-gold/15 p-4 rounded-sm">
                    <MapPin className="text-gold shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="font-sans text-xs tracking-widest uppercase text-gold/60 mb-0.5">Venue</p>
                      <p className="font-serif text-ivory text-sm">Kala Academy, Panaji, Goa</p>
                    </div>
                  </div>
                </div>

                <p className="font-serif italic text-ivory/70 leading-relaxed mb-2">
                  Kala Academy Goa, Dayanand Bandodkar Marg, Opp. Kala Academy, Campal, Panaji, Goa 403001, India
                </p>

                <Divider className="my-5" />

                <p className="font-serif text-ivory/80 text-lg leading-relaxed mb-6">
                  We warmly welcome all music lovers, seekers, rasikas, and cultural patrons to this celebration of Hindustani classical music dedicated to the memory of Pandit H. Somashekhar.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://maps.google.com/?q=Kala+Academy+Goa+Dayanand+Bandodkar+Marg+Panaji"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold inline-flex items-center gap-2 justify-center"
                  >
                    <MapPin size={14} /> View Map
                  </a>
                  <Link to="/contact" className="btn-outline inline-flex items-center gap-2 justify-center">
                    Contact Organizers
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Countdown */}
          <FadeIn delay={0.3} className="mt-14 text-center">
            <p className="font-sans text-xs tracking-[0.35em] uppercase text-gold/60 mb-6">Counting Down to the Concert</p>
            <CountdownTimer targetDate="2026-05-27T14:00:00+05:30" />
          </FadeIn>
        </div>
      </section>

      {/* ───────── PAST EVENTS ───────── */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <FadeIn>
            <SectionHeader
              eyebrow="Our History"
              title="Past Annual Programs"
              subtitle="Each year, our programs have brought together artists, students, and patrons in celebration of Indian classical music"
            />
          </FadeIn>

          {/* Dharwad 2023 */}
          <div className="mt-14">
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-maroon/10 border border-maroon/20 flex items-center justify-center shrink-0">
                  <span className="font-serif text-maroon font-semibold text-sm">II</span>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-gold mb-0.5">2nd Annual Program</p>
                  <h3 className="font-serif text-brown-dark text-2xl font-semibold">Annual Concert — Dharwad 2023</h3>
                </div>
              </div>
              <p className="font-sans text-brown-light text-sm mb-6 max-w-2xl">
                The second annual program held in Dharwad brought together celebrated artists and hundreds of music enthusiasts in a memorable evening of Hindustani classical performances honoring Guruji's legacy.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <GalleryGrid images={dharwad2023Images} title="Dharwad 2023" />
            </FadeIn>
          </div>

          <Divider variant="tabla" className="my-16" />

          {/* Dharwad 2022 */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-maroon/10 border border-maroon/20 flex items-center justify-center shrink-0">
                  <span className="font-serif text-maroon font-semibold text-sm">I</span>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-gold mb-0.5">1st Annual Program</p>
                  <h3 className="font-serif text-brown-dark text-2xl font-semibold">Annual Concert — Dharwad 2022</h3>
                </div>
              </div>
              <p className="font-sans text-brown-light text-sm mb-6 max-w-2xl">
                The inaugural annual program in Dharwad marked the beginning of a beautiful tradition — an annual gathering of Guruji's students, fellow artists, and music lovers to celebrate and preserve his timeless legacy.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <GalleryGrid images={dharwad2022Images} title="Dharwad 2022" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="py-16 bg-brown-dark text-center">
        <div className="container-custom">
          <FadeIn>
            <p className="font-sans text-xs tracking-[0.35em] uppercase text-gold/70 mb-4">Join the Next Chapter</p>
            <h2 className="font-serif text-ivory text-3xl md:text-4xl font-semibold mb-4">Be Part of Our Journey</h2>
            <p className="font-serif italic text-ivory/60 mb-8 max-w-xl mx-auto">
              Whether as an attendee, sponsor, or collaborator — your support helps preserve a musical legacy for generations to come.
            </p>
            <Link to="/contact" className="btn-gold">Get Involved</Link>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  )
}
