import { useMemo, type CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'

type BubbleSpec = {
  size: number
  left: number
  top: number
  opacity: number
  duration: number
  delay: number
  dx1: number
  dy1: number
  dx2: number
  dy2: number
}

function makeBubbles(): BubbleSpec[] {
  // Static specs (no RNG) to keep animations consistent.
  return [
    { size: 26, left: 44, top: 52, opacity: 0.55, duration: 9, delay: -2, dx1: 18, dy1: -28, dx2: -14, dy2: 22 },
    { size: 34, left: 58, top: 48, opacity: 0.38, duration: 12, delay: -6, dx1: -22, dy1: -22, dx2: 20, dy2: 28 },
    { size: 22, left: 50, top: 40, opacity: 0.5, duration: 10, delay: -3, dx1: 10, dy1: 30, dx2: -16, dy2: -18 },
    { size: 40, left: 46, top: 44, opacity: 0.3, duration: 14, delay: -7, dx1: 24, dy1: 18, dx2: -26, dy2: 26 },
    { size: 18, left: 62, top: 58, opacity: 0.55, duration: 8, delay: -1, dx1: -10, dy1: 26, dx2: 16, dy2: -22 },
    { size: 30, left: 52, top: 60, opacity: 0.35, duration: 11, delay: -5, dx1: 22, dy1: -12, dx2: -18, dy2: 20 },
    { size: 24, left: 40, top: 50, opacity: 0.45, duration: 13, delay: -8, dx1: 30, dy1: 8, dx2: -24, dy2: -16 },
    { size: 36, left: 66, top: 44, opacity: 0.25, duration: 16, delay: -10, dx1: -30, dy1: 18, dx2: 26, dy2: -28 },
    { size: 20, left: 36, top: 60, opacity: 0.48, duration: 9, delay: -4, dx1: 18, dy1: 26, dx2: -20, dy2: -14 },
    { size: 28, left: 54, top: 34, opacity: 0.42, duration: 12, delay: -6, dx1: -16, dy1: 30, dx2: 20, dy2: -22 },
    { size: 16, left: 60, top: 36, opacity: 0.55, duration: 7, delay: -2, dx1: -8, dy1: 26, dx2: 12, dy2: -20 },
    { size: 32, left: 48, top: 36, opacity: 0.33, duration: 15, delay: -9, dx1: 16, dy1: 20, dx2: -26, dy2: -22 },
  ]
}

export default function LandingPage() {
  const navigate = useNavigate()
  const bubbles = useMemo(() => makeBubbles(), [])

  return (
    <div className="landing" role="main">
      <div className="landing__bubbles" aria-hidden="true">
        {bubbles.map((b, idx) => (
          (() => {
            type BubbleStyle = CSSProperties & Record<`--${string}`, string>
            const style: BubbleStyle = {
              width: b.size,
              height: b.size,
              left: `${b.left}%`,
              top: `${b.top}%`,
              opacity: b.opacity,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
              ['--dx1']: `${b.dx1}px`,
              ['--dy1']: `${b.dy1}px`,
              ['--dx2']: `${b.dx2}px`,
              ['--dy2']: `${b.dy2}px`,
            }

            return (
          <span
            key={idx}
            className="bubble"
            style={style}
          />
            )
          })()
        ))}
      </div>

      <div className="landing__content">
        <h1 className="landing__title">Your wellness matters</h1>
        <button
          type="button"
          className="btn btn--primary landing__cta"
          onClick={() => navigate('/quiz')}
        >
          Take to know
        </button>
      </div>
    </div>
  )
}

