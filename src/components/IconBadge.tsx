import type { IconTraitsEntry } from '../data/iconTraits'

function getInitials(name: string) {
  const clean = name.replace(/\s*\(.*\)\s*$/, '')
  const parts = clean.split(/\s+/).filter(Boolean)
  const firstTwo = parts.slice(0, 2).map((p) => p[0]?.toUpperCase() ?? '')
  return firstTwo.join('').slice(0, 2) || '?'
}

export default function IconBadge({
  entry,
  size = 'md',
}: {
  entry: IconTraitsEntry
  size?: 'sm' | 'md'
}) {
  const hue = (entry.score * 37) % 360
  const initials = getInitials(entry.name)

  return (
    <div
      className={`iconBadge iconBadge--${size}`}
      style={{
        background: `radial-gradient(circle at 30% 30%, hsla(${hue}, 90%, 70%, 0.9), hsla(${hue}, 70%, 45%, 0.9))`,
      }}
      aria-label={`Icon: ${entry.name}`}
    >
      <div className="iconBadge__letters">{initials}</div>
      <div className="iconBadge__meta">
        <div className="iconBadge__name">{entry.name}</div>
        <div className="iconBadge__source">{entry.source}</div>
      </div>
    </div>
  )
}

