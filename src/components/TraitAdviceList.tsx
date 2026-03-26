import type { TraitAdvice } from '../data/iconTraits'

export default function TraitAdviceList({
  title,
  items,
}: {
  title: string
  items: TraitAdvice[]
}) {
  return (
    <div className="traitBlock">
      <h3 className="traitBlock__title">{title}</h3>
      <ol className="traitBlock__list">
        {items.map((it) => (
          <li key={it.trait} className="traitBlock__item">
            <div className="traitBlock__trait">{it.trait}</div>
            <div className="traitBlock__advice">{it.advice}</div>
          </li>
        ))}
      </ol>
    </div>
  )
}

