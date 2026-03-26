import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { WHO5_OPTIONS, WHO5_QUESTIONS } from '../data/who5'

type QuestionId = (typeof WHO5_QUESTIONS)[number]['id']
type AnswerMap = Partial<Record<QuestionId, number>>

export default function QuestionnairePage() {
  const navigate = useNavigate()
  const [answers, setAnswers] = useState<AnswerMap>({})
  const [error, setError] = useState<string | null>(null)

  const answeredCount = useMemo(
    () => WHO5_QUESTIONS.filter((q) => answers[q.id] !== undefined).length,
    [answers],
  )

  const currentPartialScore = useMemo(() => {
    // For a partial score preview, treat unanswered items as 0.
    return WHO5_QUESTIONS.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0)
  }, [answers])

  function handleChange(questionId: QuestionId, value: number) {
    setError(null)
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    for (const q of WHO5_QUESTIONS) {
      if (answers[q.id] === undefined) {
        setError('Please answer all 5 questions before submitting.')
        return
      }
    }

    const total = WHO5_QUESTIONS.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0)
    sessionStorage.setItem('who5_answers', JSON.stringify(answers))
    sessionStorage.setItem('who5_total', String(total))
    navigate('/results')
  }

  return (
    <div className="card">
      <header className="card__header">
        <h1>WHO-5 Well-Being Index</h1>
        <p className="subtext">
          Please indicate for each of the five statements which is closest to how you have been feeling over the last two weeks.
          Higher numbers mean better well-being.
        </p>
      </header>

      <div className="progressRow" aria-live="polite">
        <div className="progressRow__pill">
          Answered: {answeredCount}/5
        </div>
        <div className="progressRow__pill">
          Current (preview): {currentPartialScore}/25
        </div>
      </div>

      {error ? (
        <div className="banner banner--error" role="alert">
          {error}
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <div className="questionGrid">
          {WHO5_QUESTIONS.map((q, idx) => (
            <fieldset
              key={q.id}
              className={`questionCard questionCard--${idx + 1}`}
            >
              <legend className="questionCard__legend">
                {idx + 1}. {q.statement}
              </legend>

              <div className="radioGrid" role="radiogroup" aria-label={q.statement}>
                {WHO5_OPTIONS.map((opt) => (
                  <label key={opt.value} className="radioOption">
                    <input
                      type="radio"
                      name={q.id}
                      value={opt.value}
                      checked={answers[q.id] === opt.value}
                      onChange={(ev) => handleChange(q.id, Number(ev.target.value))}
                    />
                    <span className="radioOption__label">{opt.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
        </div>

        <div className="actions">
          <button type="submit" className="btn btn--primary">
            Calculate my score
          </button>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => {
              setAnswers({})
              setError(null)
            }}
          >
            Reset
          </button>
        </div>
      </form>

      <div className="fineprint">
        This tool is intended for self-assessment and does not replace professional mental health advice.
      </div>
    </div>
  )
}

