import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { WHO5_OPTIONS, WHO5_QUESTIONS } from '../data/who5'
import { ICON_TRAITS_BY_SCORE } from '../data/iconTraits'
import IconBadge from '../components/IconBadge'
import TraitAdviceList from '../components/TraitAdviceList'

type QuestionId = (typeof WHO5_QUESTIONS)[number]['id']
type AnswerMap = Partial<Record<QuestionId, number>>

export default function ResultsPage() {
  const [total, setTotal] = useState<number | null>(null)
  const [answers, setAnswers] = useState<AnswerMap>({})

  useEffect(() => {
    const rawTotal = sessionStorage.getItem('who5_total')
    const rawAnswers = sessionStorage.getItem('who5_answers')

    if (!rawTotal) return
    const parsedTotal = Number(rawTotal)
    if (!Number.isFinite(parsedTotal)) return

    let parsedAnswers: AnswerMap = {}
    if (rawAnswers) {
      try {
        parsedAnswers = JSON.parse(rawAnswers) as AnswerMap
      } catch {
        parsedAnswers = {}
      }
    }

    // External read from sessionStorage - safe to set local state here.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTotal(parsedTotal)
    setAnswers(parsedAnswers)
  }, [])

  const entry = total !== null ? ICON_TRAITS_BY_SCORE[total] : undefined

  const idealTargetScore = useMemo(() => {
    if (total === null) return null
    return total <= 13 ? 25 - total : null
  }, [total])

  const idealEntry =
    idealTargetScore !== null ? ICON_TRAITS_BY_SCORE[idealTargetScore] : undefined

  const totalValid = total !== null && Number.isFinite(total) && total >= 0 && total <= 25

  const scoreLabel = useMemo(() => {
    if (total === null) return ''
    if (total <= 13) return 'Low well-being tendency'
    return 'Higher well-being tendency'
  }, [total])

  return (
    <div className="card">
      <header className="card__header">
        <h1>Your Well-Being Dashboard</h1>
        <p className="subtext">
          Your answers are used to calculate the WHO-5 raw score (0 to 25).
        </p>
      </header>

      {!totalValid ? (
        <>
          <div className="banner banner--warn">
            No results found. Start the questionnaire first.
          </div>
          <div className="actions actions--center">
            <Link to="/quiz" className="btn btn--primary">
              Go to questionnaire
            </Link>
          </div>
        </>
      ) : null}

      {totalValid && entry ? (
        <>
          <div className="dashboardTop">
            <div className="scoreCard">
              <div className="scoreCard__label">Total score</div>
              <div className="scoreCard__value">
                {entry.score} / 25
              </div>
              <div className="scoreCard__hint">{scoreLabel}</div>
            </div>

            <IconBadge entry={entry} />
          </div>

          <section className="section">
            <h2 className="section__title">Your questionnaire scores</h2>
            <ol className="questionReview">
              {WHO5_QUESTIONS.map((q, idx) => {
                const v = answers[q.id]
                const opt = WHO5_OPTIONS.find((o) => o.value === v)
                return (
                  <li key={q.id} className="questionReview__item">
                    <div className="questionReview__top">
                      <div className="questionReview__idx">{idx + 1}.</div>
                      <div className="questionReview__statement">{q.statement}</div>
                    </div>
                    <div className="questionReview__score">
                      Selected: <b>{v ?? '-'}</b>{' '}
                      {opt ? <span className="questionReview__label">({opt.label})</span> : null}
                    </div>
                  </li>
                )
              })}
            </ol>
          </section>

          <div className="grid2">
            <TraitAdviceList title="How to maximise your positives" items={entry.positives} />
            <TraitAdviceList title="How to minimise your negatives" items={entry.negatives} />
          </div>

          {idealEntry && idealTargetScore !== null && total !== null && total <= 13 ? (
            <section className="section section--highlight">
              <h2 className="section__title">
                Low score guidance (target the opposite score)
              </h2>
              <p className="section__text">
                Your score is <b>{total}</b> out of <b>25</b>. To maximise your well-being, aim to reach the ideal type at the corresponding opposite score: <b>{idealTargetScore}</b> out of <b>25</b>.
              </p>
              <div className="idealBlock">
                <div className="idealBlock__label">Ideal target icon</div>
                <IconBadge entry={idealEntry} size="sm" />
              </div>
              <div className="idealTips">
                <TraitAdviceList
                  title="What to focus on (from the ideal type)"
                  items={idealEntry.positives}
                />
              </div>
            </section>
          ) : null}

          {total !== null && total >= 14 ? (
            <section className="section section--highlight">
              <h2 className="section__title">High score balance</h2>
              <p className="section__text">
                Your score is <b>{total}</b> out of <b>25</b>, which suggests relatively strong well-being.
                Keep maximising your strengths while maintaining balance by applying the minimisation tips for the negatives linked to your icon.
              </p>
            </section>
          ) : null}

          <section className="disclaimer">
            <h2 className="disclaimer__title">Disclaimer</h2>
            <p className="disclaimer__text">
              This is for infotainment purposes only. For sincere medical diagnosis, support and advice, seek professional help.
            </p>
          </section>

          <div className="actions actions--center">
            <Link to="/quiz" className="btn btn--ghost">
              Retake questionnaire
            </Link>
          </div>
        </>
      ) : null}
    </div>
  )
}

