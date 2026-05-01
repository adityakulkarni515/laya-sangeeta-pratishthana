import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  const textAlign =
    align === 'center' ? 'text-center items-center' :
    align === 'right' ? 'text-right items-end' :
    'text-left items-start'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`flex flex-col ${textAlign} ${className}`}
    >
      {eyebrow && (
        <p className={`font-sans text-xs tracking-[0.35em] uppercase font-semibold mb-3 ${light ? 'text-gold/80' : 'text-gold'}`}>
          {eyebrow}
        </p>
      )}

      <h2 className={`font-serif font-semibold leading-tight ${light ? 'text-ivory' : 'text-brown-dark'}`}
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
      >
        {title}
      </h2>

      {/* Ornamental divider */}
      <div className={`flex items-center gap-3 mt-4 mb-4 ${align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start'}`}>
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/70" />
        <span className="text-gold text-xs">◆</span>
        <div className="h-px w-24 bg-gold/50" />
        <span className="text-gold text-xs">◆</span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/70" />
      </div>

      {subtitle && (
        <p className={`font-serif italic leading-relaxed max-w-2xl ${light ? 'text-ivory/70' : 'text-brown-light'}`}
          style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
