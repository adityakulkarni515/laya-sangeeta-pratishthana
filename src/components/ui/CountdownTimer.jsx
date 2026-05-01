import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function pad(n) {
  return String(n).padStart(2, '0')
}

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(null)

  useEffect(() => {
    function calc() {
      const diff = new Date(targetDate) - new Date()
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      const days    = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      setTimeLeft({ days, hours, minutes, seconds })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  if (!timeLeft) return null

  const units = [
    { label: 'Days',    value: timeLeft.days },
    { label: 'Hours',   value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div className="flex items-center justify-center gap-3 md:gap-5">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-3 md:gap-5">
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-brown-dark/60 border border-gold/30 rounded flex items-center justify-center">
              <span className="font-serif text-2xl md:text-3xl font-semibold text-gold leading-none">
                {pad(unit.value)}
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />
            </div>
            <span className="font-sans text-xs tracking-widest uppercase text-ivory/50 mt-2">
              {unit.label}
            </span>
          </div>
          {i < 3 && (
            <motion.span
              className="font-serif text-gold/60 text-2xl mb-5"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
            >
              :
            </motion.span>
          )}
        </div>
      ))}
    </div>
  )
}
