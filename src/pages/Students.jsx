import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Helmet } from 'react-helmet-async'
import { Quote, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/ui/PageTransition'
import SectionHeader from '../components/ui/SectionHeader'
import Divider from '../components/ui/Divider'

function FadeIn({ children, delay = 0, className = '' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function InitialsAvatar({ name }) {
  const initials = name.split(' ').slice(-2).map(w => w[0]).join('').toUpperCase()
  return (
    <div className="w-full h-full bg-gradient-to-br from-maroon to-brown-dark flex items-center justify-center">
      <span className="font-serif text-gold text-3xl font-semibold">{initials}</span>
    </div>
  )
}

const students = [
  {
    name: 'Dr Uday Kulkarni',
    img: '/images/SirStudentUdayKulkarni.jpg',
    role: 'Renowned Tabla Artist',
    org: 'Assistant Professor in Tabla, Goa College of Music',
    quoteTitle: 'Tabla Love',
    quote: 'The first moment when it felt that I love Tabla, the energy infused by Guruji. The profound teaching, sweet personality of Guruji makes this possible till today.',
    badge: 'Artist & Educator',
    externalLink: 'https://udaykulkarniweb.wixsite.com/uday-kulkarni',
  },
  {
    name: 'Vidyabhushan A Panchamukhi',
    img: '/images/VidyabhushanNewphoto.jpg',
    imgPosition: 'center',
    role: 'President',
    org: 'Laya Sangeeta Pratishthana',
    quoteTitle: 'The Dhir Dhir Story',
    quote: "In a class full of students, I played 'Dhir Dhir' and received an instant nod from Guruji, turning it into a cherished ritual for every session that revealed my talent and boosted my confidence. His simple appreciation deepened my love for the tabla, and reflecting back, I see how he wove profound life lessons into every beat.",
    badge: 'Founding President',
  },
  {
    name: 'Shashidhar Kulkarni',
    img: '/images/SirStudentShashidhar.jpg',
    role: 'Secretary',
    org: 'Laya Sangeeta Pratishthana · Basaveshwara International Public School, Mudhol',
    quoteTitle: 'Life Values in Tabla',
    quote: 'While I went to him to learn the art of the tabla, he gently revealed the deeper rhythm of life — where every beat carried a value, and every pause held wisdom woven into the timeless heritage of Indian music.',
    badge: 'Founding Secretary',
  },
  {
    name: 'Dr Dundayyaswami',
    img: '/images/SirStudentDundayyaPujar.jpg',
    role: 'Assistant Professor & HoD, Performing Arts',
    org: 'SSSUHE, Kalaburagi, Karnataka',
    quoteTitle: 'Path of Wisdom',
    quote: "My Guruji's very structured lessons illuminate the path of learning, guiding us with clarity and wisdom. His passion for reciting Tabla bols in class inspires dedication and deepens my musical journey.",
    badge: 'Academic Leader',
  },
  {
    name: 'Shrihari Diggavi',
    img: '/images/SirStudentShrihariDiggaviPhoto.jpeg',
    role: 'Classical Artist & Teacher',
    org: 'Continuing the musical teaching tradition',
    quoteTitle: 'Living the Legacy',
    quote: "Guruji's teachings remain a constant companion — in every performance, in every lesson taught, in every note resonated. His spirit lives in the rhythm we carry forward.",
    badge: 'Classical Artist',
  },
  {
    name: 'Jayateerth Panchamukhi',
    img: '/images/SirStudentJayateerth.jpeg',
    role: 'Classical Artist & Teacher',
    org: 'Continuing the musical teaching tradition',
    quoteTitle: 'The Rhythmic Path',
    quote: "Every stroke on the Tabla carries the imprint of Guruji's teaching. He didn't just teach us bols — he taught us how to listen, how to feel, how to speak through rhythm.",
    badge: 'Classical Artist',
    imgPosition: 'left',
  },
]

function StudentCard({ student, index }) {
  return (
    <FadeIn delay={index * 0.08} className="h-full">
      <motion.div
        className="bg-white border border-gold/12 rounded-sm overflow-hidden h-full flex flex-col hover:border-gold/30 hover:shadow-gold transition-all duration-400 group"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Photo */}
        <div className="relative aspect-square overflow-hidden bg-brown-dark/10">
          {student.img ? (
            <img
              src={student.img}
              alt={student.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              style={{ objectPosition: student.imgPosition === 'left' ? 'left center' : student.imgPosition === 'center' ? 'center center' : 'center top', transform: 'scale(1.02)' }}
              onLoad={e => e.target.style.transform = 'scale(1)'}
            />
          ) : (
            <InitialsAvatar name={student.name} />
          )}
          {/* Gold overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
          {/* Badge */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brown-dark/80 to-transparent p-3">
            <span className="font-sans text-xs tracking-widest uppercase text-gold/80">{student.badge}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="mb-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-serif text-brown-dark text-lg font-semibold leading-tight">{student.name}</h3>
              {student.externalLink && (
                <a
                  href={student.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit website"
                  className="text-gold/50 hover:text-gold transition-colors duration-200 shrink-0 mt-1"
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
            <p className="font-sans text-maroon text-xs font-semibold tracking-wide mt-1">{student.role}</p>
            <p className="font-sans text-brown-light/80 text-xs mt-0.5 leading-snug">{student.org}</p>
          </div>

          <div className="gold-line w-full mb-4" />

          {/* Quote */}
          <div className="relative flex-1">
            <Quote className="text-gold/25 absolute -top-1 -left-1" size={24} />
            <div className="pl-4">
              <p className="font-serif text-sm text-gold mb-2 font-semibold italic">{student.quoteTitle}</p>
              <p className="font-serif italic text-brown-light text-sm leading-relaxed">
                "{student.quote}"
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  )
}

export default function Students() {
  return (
    <PageTransition>
      <Helmet>
        <title>Students of Guruji | Laya Sangeeta Pratishthana</title>
        <meta name="description" content="Meet the devoted students of Pandit H. Somashekhar who carry forward his rhythmic legacy across India." />
      </Helmet>

      {/* ───────── HERO ───────── */}
      <section className="relative h-[50vh] min-h-[340px] flex items-end overflow-hidden">
        <img
          src="/images/PHOTO-2022-07-03-23-40-43.jpg"
          alt="Students of Guruji"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '50% 30%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown-deeper/40 via-brown-deeper/55 to-brown-deeper" />
        <div className="relative z-10 container-custom pb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-sans text-xs tracking-[0.35em] uppercase text-gold mb-3"
          >
            Disciples · Artists · Teachers
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="font-serif text-ivory font-semibold"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}
          >
            Guruji's Students
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7 }}
            className="gold-line w-20 mt-4"
          />
        </div>
      </section>

      {/* ───────── INTRO ───────── */}
      <section className="py-16 bg-ivory tabla-pattern">
        <div className="container-custom max-w-3xl text-center">
          <FadeIn>
            <p className="font-devanagari text-gold text-xl mb-2">गुरु-शिष्य परम्परा</p>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold/60 mb-6">The Guru-Shishya Tradition</p>
            <p className="font-serif text-brown-dark text-xl leading-relaxed">
              Pandit H. Somashekhar guided a vast number of students through the sacred art of Tabla. Many of them continue to serve music, education, and cultural life today.
            </p>
            <Divider variant="tabla" className="my-6" />
            <p className="font-sans text-brown-light leading-relaxed">
              The Guru-Shishya tradition is the heart of Indian classical music. It is not merely the transfer of technique but the passing of a living flame — from one devoted heart to another. Each student here carries within them a spark of Guruji's eternal rhythm.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ───────── STUDENT GRID ───────── */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <FadeIn>
            <SectionHeader
              eyebrow="The Shishyas"
              title="Students & Disciples"
              subtitle="Artists who continue to honor Guruji's legacy through music, teaching, and cultural service"
            />
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((student, i) => (
              <StudentCard key={student.name} student={student} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── ORGANISATION FORMATION DAY ───────── */}
      <section className="section-padding bg-brown-dark relative overflow-hidden">
        <div className="absolute inset-0 tabla-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px gold-line" />
        <div className="container-custom relative">
          <FadeIn>
            <SectionHeader
              eyebrow="A Historic Moment"
              title="The Day It All Began"
              subtitle="The founding members of Laya Sangeeta Pratishthana — students of Guruji — on the day the organisation was formed in his honour"
              light
            />
          </FadeIn>

          <FadeIn delay={0.15} className="mt-10">
            <div className="relative rounded-sm overflow-hidden shadow-gold-lg group max-w-4xl mx-auto">
              <img
                src="/images/OrganisationFormationDay.jpg"
                alt="Laya Sangeeta Pratishthana — Organisation Formation Day with Guruji and Students"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ maxHeight: '560px', objectPosition: 'top' }}
              />
              {/* Gold frame accents */}
              <div className="absolute top-4 left-4 w-14 h-14 border-t-2 border-l-2 border-gold/50" />
              <div className="absolute top-4 right-4 w-14 h-14 border-t-2 border-r-2 border-gold/50" />
              <div className="absolute bottom-16 left-4 w-14 h-14 border-b-2 border-l-2 border-gold/50" />
              <div className="absolute bottom-16 right-4 w-14 h-14 border-b-2 border-r-2 border-gold/50" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brown-deeper/90 to-transparent py-5 px-6">
                <p className="font-serif text-ivory text-base md:text-lg">Guruji with his devoted students</p>
                <p className="font-sans text-gold/80 text-xs tracking-widest uppercase mt-1">
                  Laya Sangeeta Pratishthana — Organisation Formation Day
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.25} className="mt-8 text-center max-w-2xl mx-auto">
            <p className="font-serif italic text-ivory/70 text-lg leading-relaxed">
              Bound together by devotion to Guruji and a shared love for the sacred art of Tabla, these students came together to ensure that his legacy would live on — not just in memory, but in music, in teaching, and in cultural celebration for generations to come.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ───────── JOIN LEGACY ───────── */}
      <section className="py-16 bg-brown-dark text-center">
        <div className="container-custom max-w-2xl">
          <FadeIn>
            <p className="font-sans text-xs tracking-[0.35em] uppercase text-gold/70 mb-4">The Tradition Continues</p>
            <h2 className="font-serif text-ivory text-3xl font-semibold mb-4">Become Part of the Legacy</h2>
            <p className="font-serif italic text-ivory/60 mb-8">
              The music of Guruji lives on in every student, every performance, every beat that resonates with truth and devotion. We welcome all who seek to learn, preserve, and celebrate this timeless heritage.
            </p>
            <Link to="/contact" className="btn-gold">
              Connect with Us
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  )
}
