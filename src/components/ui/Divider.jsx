export default function Divider({ variant = 'default', className = '' }) {
  if (variant === 'tabla') {
    return (
      <div className={`flex items-center justify-center gap-4 my-8 ${className}`}>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/30" />
        <div className="relative flex items-center justify-center">
          <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border border-gold/60 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gold/80" />
            </div>
          </div>
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/30" />
      </div>
    )
  }

  if (variant === 'wave') {
    return (
      <div className={`flex items-center justify-center gap-2 my-6 ${className}`}>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="flex items-center gap-1">
          {[1, 2, 3, 2, 1].map((h, i) => (
            <div
              key={i}
              className="w-0.5 bg-gold/60 rounded-full"
              style={{ height: `${h * 4}px` }}
            />
          ))}
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-3 my-6 ${className}`}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
      <span className="text-gold/60 text-xs">✦</span>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
    </div>
  )
}
