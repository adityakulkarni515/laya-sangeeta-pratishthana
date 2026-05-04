import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Helmet } from 'react-helmet-async'
import { Mail, MapPin, Facebook, Youtube, Send, CheckCircle, AlertCircle } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import SectionHeader from '../components/ui/SectionHeader'
import Divider from '../components/ui/Divider'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xykokjob'

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

function FormField({ label, id, type = 'text', required, textarea, value, onChange, placeholder }) {
  return (
    <div className="group">
      <label htmlFor={id} className="block font-sans text-xs tracking-widest uppercase text-brown-light/80 mb-2">
        {label} {required && <span className="text-maroon">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={5}
          className="w-full px-4 py-3 bg-white border border-gold/20 rounded-sm font-sans text-sm text-brown-dark placeholder-brown-light/40 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/20 transition-all duration-200 resize-none"
        />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-3 bg-white border border-gold/20 rounded-sm font-sans text-sm text-brown-dark placeholder-brown-light/40 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/20 transition-all duration-200"
        />
      )}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', type: 'general', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name:         form.name,
          email:        form.email,
          subject:      form.subject || `${form.type} enquiry`,
          enquiry_type: form.type,
          message:      form.message,
        }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        const data = await res.json()
        setError(data?.errors?.[0]?.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <PageTransition>
      <Helmet>
        <title>Contact Us | Laya Sangeeta Pratishthana</title>
        <meta name="description" content="Get in touch with Laya Sangeeta Pratishthana for sponsorships, event enquiries, and cultural collaborations." />
      </Helmet>

      {/* ───────── HERO ───────── */}
      <section className="relative bg-brown-deeper pt-32 pb-16">
        <div className="absolute inset-0 tabla-pattern opacity-20 pointer-events-none" />
        <div className="relative container-custom text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-xs tracking-[0.35em] uppercase text-gold mb-3"
          >
            Reach Out · Collaborate · Support
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="font-serif text-ivory font-semibold"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}
          >
            Contact Us
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6 }}
            className="gold-line w-20 mt-4 mx-auto"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="font-serif italic text-ivory/60 mt-5 max-w-xl mx-auto text-lg"
          >
            We welcome sponsors, patrons, fellow artists, and all who wish to be part of preserving this musical heritage.
          </motion.p>
        </div>
      </section>

      {/* ───────── MAIN CONTENT ───────── */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-2">
              <FadeIn>
                <SectionHeader
                  eyebrow="Get in Touch"
                  title="We'd Love to Hear from You"
                  align="left"
                />
              </FadeIn>

              <FadeIn delay={0.15} className="mt-6 space-y-5">
                <div className="flex items-start gap-4 p-4 bg-white border border-gold/15 rounded-sm hover:border-gold/30 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-maroon/10 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-maroon" />
                  </div>
                  <div>
                    <p className="font-sans text-xs tracking-widest uppercase text-gold mb-1">Location</p>
                    <p className="font-serif text-brown-dark">Karnataka, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white border border-gold/15 rounded-sm hover:border-gold/30 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-maroon/10 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-maroon" />
                  </div>
                  <div>
                    <p className="font-sans text-xs tracking-widest uppercase text-gold mb-1">Email</p>
                    <a
                      href="mailto:layasangeetapratishtana@gmail.com"
                      className="font-serif text-brown-dark hover:text-maroon transition-colors duration-200 break-all text-sm"
                    >
                      layasangeetapratishtana@gmail.com
                    </a>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.25} className="mt-6">
                <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/SomashekharSirFanClub' },
                    { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@LayaSangeetaPratishtana' },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-brown-light hover:text-maroon hover:border-maroon/50 transition-all duration-300 bg-white"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.1}>
                <div className="bg-white border border-gold/10 rounded-sm p-6 md:p-8 shadow-elegant">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10"
                    >
                      <CheckCircle className="text-gold mx-auto mb-4" size={48} />
                      <h3 className="font-serif text-brown-dark text-2xl font-semibold mb-3">Message Received</h3>
                      <p className="font-serif italic text-brown-light">
                        Thank you for reaching out. We will get back to you shortly.
                      </p>
                      <Divider className="my-6" />
                      <p className="font-devanagari text-gold/70 text-lg">नमस्ते</p>
                    </motion.div>
                  ) : (
                    <>
                      <p className="font-serif text-brown-dark text-xl font-semibold mb-1">Send a Message</p>
                      <p className="font-sans text-brown-light/70 text-xs mb-6">All fields marked * are required</p>

                      {/* Enquiry type selector */}
                      <div className="mb-6">
                        <p className="font-sans text-xs tracking-widest uppercase text-brown-light/80 mb-2">Enquiry Type</p>
                        <div className="flex flex-wrap gap-2">
                          {[
                            { value: 'general',     label: 'General' },
                            { value: 'sponsorship', label: 'Sponsorship' },
                            { value: 'event',       label: 'Event' },
                            { value: 'media',       label: 'Media' },
                          ].map(opt => (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => setForm(f => ({ ...f, type: opt.value }))}
                              className={`px-4 py-2 font-sans text-xs tracking-wider uppercase rounded-sm border transition-all duration-200 ${
                                form.type === opt.value
                                  ? 'bg-maroon text-ivory border-maroon'
                                  : 'bg-transparent text-brown-light border-gold/20 hover:border-gold/50'
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {error && (
                        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-sm p-4 mb-5">
                          <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                          <p className="font-sans text-red-600 text-sm">{error}</p>
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <FormField label="Full Name" id="name" required value={form.name} onChange={handleChange} placeholder="Your name" />
                          <FormField label="Email Address" id="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" />
                        </div>
                        <FormField label="Subject" id="subject" value={form.subject} onChange={handleChange} placeholder="How can we help?" />
                        <FormField label="Message" id="message" textarea required value={form.message} onChange={handleChange} placeholder="Tell us about your enquiry, sponsorship interest, or how you would like to collaborate..." />

                        <motion.button
                          type="submit"
                          disabled={submitting}
                          className="btn-gold w-full justify-center gap-2 inline-flex items-center disabled:opacity-70 disabled:cursor-not-allowed"
                          whileHover={{ scale: submitting ? 1 : 1.01 }}
                          whileTap={{ scale: submitting ? 1 : 0.99 }}
                        >
                          {submitting ? (
                            <>
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                                className="inline-block w-4 h-4 border-2 border-brown-dark/30 border-t-brown-dark rounded-full"
                              />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send size={15} />
                              Send Message
                            </>
                          )}
                        </motion.button>
                      </form>
                    </>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
