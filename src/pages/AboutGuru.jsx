import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Helmet } from 'react-helmet-async'
import PageTransition from '../components/ui/PageTransition'
import SectionHeader from '../components/ui/SectionHeader'
import Divider from '../components/ui/Divider'

function FadeIn({ children, delay = 0, className = '', direction = 'up' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
        x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
      }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const timelineEvents = [
  { year: '1950s', title: 'Early Years', desc: 'Born with a natural affinity for rhythm, Pt. H. Somashekhar began his musical journey in Karnataka, drawn to the sublime language of the Tabla.' },
  { year: '1960s', title: 'Discipleship & Training', desc: 'He pursued rigorous training under master teachers, immersing himself in the Gharana tradition — absorbing not just technique, but the spiritual dimension of rhythm.' },
  { year: '1970s', title: 'Mastery & Teaching', desc: 'Having attained mastery, he began teaching with extraordinary devotion, passing on the sacred knowledge of bols, layas, and talas to countless students across Karnataka.' },
  { year: '1980s–90s', title: 'Building a Legacy', desc: 'His reputation spread far and wide. Students from diverse backgrounds sought his guidance. His teaching philosophy bridged ancient tradition with accessible, heartfelt instruction.' },
  { year: '2000s', title: 'Cultural Ambassador', desc: 'As a celebrated cultural figure in Karnataka, Guruji performed and taught with an unwavering commitment to preserving the authentic Hindustani Tabla tradition.' },
  { year: 'Eternal', title: 'Enduring Influence', desc: 'His students carry forward his legacy across India — teaching, performing, and celebrating the rhythm of the cosmos that Guruji embodied throughout his extraordinary life.' },
]

const gurujiPhotos = [
  { src: '/images/Somashekharsirphoto1.jpg', caption: 'Pandit H. Somashekhar' },
  { src: '/images/SomashekharSirPhoto2.jpg', caption: 'The Maestro at his craft' },
  { src: '/images/SomashekharsirPhoto3.jpg', caption: 'A moment of reflection' },
  { src: '/images/SomaShekharSirphoto5.jpeg.avif', caption: 'Guruji in performance' },
]

export default function AboutGuru() {
  return (
    <PageTransition>
      <Helmet>
        <title>About Guruji — Pt. H. Somashekhar | Laya Sangeeta Pratishthana</title>
        <meta name="description" content="The life, philosophy, and enduring legacy of Tabla maestro Pandit H. Somashekhar — devoted teacher, performer, and guardian of Karnataka's rhythmic heritage." />
      </Helmet>

      {/* ───────── HERO BANNER ───────── */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
        <img
          src="/images/SomashekharSirPhoto2.jpg"
          alt="Pandit H. Somashekhar"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown-deeper/40 via-brown-deeper/60 to-brown-deeper" />
        <div className="relative z-10 container-custom pb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-sans text-xs tracking-[0.35em] uppercase text-gold mb-3"
          >
            The Maestro · The Teacher · The Legacy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="font-serif text-ivory font-semibold"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            Pandit H. Somashekhar
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="gold-line w-24 mt-4"
          />
        </div>
      </section>

      {/* ───────── MAIN BIOGRAPHY ───────── */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Sticky photo stack */}
            <div className="lg:col-span-2 lg:sticky lg:top-28">
              <FadeIn direction="right">
                <div className="relative">
                  <img
                    src="/images/SomaShekaharSirPhoto.png.avif"
                    alt="Pandit H. Somashekhar — Principal Portrait"
                    className="w-full rounded-sm shadow-elegant object-cover object-top"
                    style={{ maxHeight: '480px' }}
                  />
                  {/* Gold frame accents */}
                  <div className="absolute top-3 left-3 w-14 h-14 border-t-2 border-l-2 border-gold/60" />
                  <div className="absolute bottom-3 right-3 w-14 h-14 border-b-2 border-r-2 border-gold/60" />
                  {/* Caption bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-brown-dark/80 backdrop-blur-sm py-3 px-4">
                    <p className="font-serif text-ivory text-base">Pandit H. Somashekhar</p>
                    <p className="font-sans text-gold/80 text-xs tracking-wide mt-0.5">Tabla Maestro · Karnataka</p>
                  </div>
                </div>
              </FadeIn>

              {/* Secondary photos */}
              <div className="grid grid-cols-3 gap-2 mt-2">
                {gurujiPhotos.slice(1, 4).map((p, i) => (
                  <FadeIn key={p.src} delay={0.1 + i * 0.1}>
                    <div className="relative overflow-hidden rounded-sm group aspect-square">
                      <img
                        src={p.src}
                        alt={p.caption}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-brown-dark/20 group-hover:bg-brown-dark/0 transition-colors duration-300" />
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Biography text */}
            <div className="lg:col-span-3">
              <FadeIn>
                <SectionHeader
                  eyebrow="Biography"
                  title="A Life Devoted to Rhythm"
                  align="left"
                />
              </FadeIn>

              <FadeIn delay={0.15} className="mt-4">
                <p className="font-serif text-brown-dark text-lg leading-relaxed">
                  Pt. H. Somashekhar was a revered master of the Tabla, dedicated to the preservation of Indian classical heritage. His journey spanned decades, seamlessly bridging ancient rhythms with modern technical precision.
                </p>
              </FadeIn>

              <FadeIn delay={0.2} className="mt-5">
                <p className="font-sans text-brown-light leading-relaxed">
                  Renowned for his expressive depth, he nurtured countless young talents, leaving a legacy rooted in the cultural soul of Karnataka and a vision that continues to guide future musical generations. His approach to teaching was as profound as his artistry — he believed that rhythm was not merely a technical skill but a living practice that transforms the practitioner from within.
                </p>
              </FadeIn>

              <FadeIn delay={0.25} className="mt-5">
                <p className="font-sans text-brown-light leading-relaxed">
                  Through decades of dedicated teaching, Guruji shaped hundreds of students across Karnataka and beyond. His classroom was not just a place of learning — it was a sanctuary where ancient wisdom met present aspiration, where every bol carried meaning far deeper than the sound itself.
                </p>
              </FadeIn>

              <Divider variant="tabla" className="my-8" />

              {/* Philosophy section */}
              <FadeIn delay={0.1}>
                <div className="bg-maroon/5 border-l-4 border-maroon/50 pl-6 py-4 rounded-r-sm">
                  <SectionHeader
                    eyebrow="His Philosophy"
                    title="The Philosophy of Rhythm"
                    align="left"
                    className="mb-4"
                  />
                  <p className="font-serif text-brown-dark text-lg leading-relaxed mt-4">
                    The legacy of Pt. H. Somashekhar transcends mere technical mastery. His philosophy was rooted in <em className="text-maroon">'Laya'</em> — the cosmic rhythm that binds the universe. For Guruji, the Tabla was not just a percussion instrument but a medium for spiritual dialogue and emotional resonance.
                  </p>
                  <p className="font-sans text-brown-light leading-relaxed mt-4">
                    This artistic vision emphasizes the <em>'Gharana'</em> tradition — a lineage of shared wisdom where every stroke on the skin tells a story of devotion. We believe in nurturing the soul of the musician alongside their skills, ensuring that the ancient rhythms of Karnataka continue to breathe in a modern world.
                  </p>
                  <p className="font-sans text-brown-light leading-relaxed mt-4">
                    For Guruji, teaching was an act of love. He once said that the relationship between a Guru and Shishya is the most sacred relationship in the musical world — deeper than words, expressed in the shared language of rhythm and devotion.
                  </p>
                </div>
              </FadeIn>

              {/* Pull quote */}
              <FadeIn delay={0.2} className="mt-8">
                <blockquote className="relative pl-6 border-l-2 border-gold/40">
                  <span className="absolute -top-3 -left-2 text-gold/20 font-serif text-6xl leading-none">"</span>
                  <p className="font-serif italic text-brown-dark text-xl leading-relaxed">
                    In every beat of the Tabla lies the heartbeat of creation. To learn rhythm is to learn the language of the cosmos itself.
                  </p>
                  <cite className="block mt-3 font-sans text-sm text-gold not-italic tracking-wide">
                    — Pt. H. Somashekhar
                  </cite>
                </blockquote>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── TIMELINE ───────── */}
      <section className="section-padding bg-brown-dark relative overflow-hidden">
        <div className="absolute inset-0 tabla-pattern opacity-30 pointer-events-none" />
        <div className="container-custom relative">
          <FadeIn>
            <SectionHeader
              eyebrow="Journey Through Time"
              title="The Legacy Timeline"
              subtitle="A life of music, devotion, and boundless generosity of spirit"
              light
            />
          </FadeIn>

          <div className="mt-14 relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gold/20 hidden md:block" />

            <div className="space-y-8">
              {timelineEvents.map((event, i) => {
                const isLeft = i % 2 === 0
                return (
                  <FadeIn key={event.year} delay={i * 0.1}>
                    <div className={`flex flex-col md:flex-row gap-6 md:gap-0 items-start md:items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`flex-1 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                        <div className={`bg-brown-deeper/60 border border-gold/15 p-6 rounded-sm hover:border-gold/30 transition-colors duration-300 ${isLeft ? 'md:ml-auto md:mr-0' : ''}`}
                          style={{ maxWidth: '420px' }}
                        >
                          <p className="font-sans text-gold text-xs tracking-widest uppercase mb-2">{event.year}</p>
                          <h3 className="font-serif text-ivory text-xl mb-3">{event.title}</h3>
                          <p className="font-sans text-ivory/60 text-sm leading-relaxed">{event.desc}</p>
                        </div>
                      </div>

                      {/* Center dot */}
                      <div className="hidden md:flex w-8 h-8 rounded-full bg-brown-dark border-2 border-gold/60 items-center justify-center shrink-0 z-10">
                        <div className="w-2 h-2 rounded-full bg-gold" />
                      </div>

                      {/* Spacer */}
                      <div className="flex-1" />
                    </div>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── PHOTO GALLERY ───────── */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <FadeIn>
            <SectionHeader
              eyebrow="In Memory"
              title="Glimpses of Guruji"
              subtitle="Photographs that capture the grace and devotion of a true musical master"
            />
          </FadeIn>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {gurujiPhotos.map((p, i) => (
              <FadeIn key={p.src} delay={i * 0.1}>
                <div className="relative overflow-hidden rounded-sm group aspect-square shadow-elegant">
                  <img
                    src={p.src}
                    alt={p.caption}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                    <p className="font-serif text-ivory text-sm">{p.caption}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
