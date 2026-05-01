import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[100] bg-brown-deeper flex flex-col items-center justify-center"
    >
      {/* Tabla circle animation */}
      <div className="relative w-32 h-32 mb-8">
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-gold/20"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        />
        {/* Middle ring */}
        <motion.div
          className="absolute inset-3 rounded-full border-2 border-gold/40"
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 0.15 }}
        />
        {/* Inner ring */}
        <motion.div
          className="absolute inset-6 rounded-full border-2 border-gold/60"
          animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 0.3 }}
        />
        {/* Center dot */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <div className="w-8 h-8 rounded-full bg-gold/30 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-gold" />
          </div>
        </motion.div>
      </div>

      <motion.p
        className="font-devanagari text-gold text-3xl font-semibold"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        लय संगीत प्रतिष्ठान
      </motion.p>

      <motion.p
        className="font-serif text-ivory/50 text-xs tracking-[0.3em] uppercase mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Laya Sangeeta Pratishthana
      </motion.p>

      {/* Loading bar */}
      <div className="mt-10 w-48 h-px bg-gold/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gold rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}
