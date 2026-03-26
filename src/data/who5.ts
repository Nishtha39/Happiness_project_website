export type Who5Option = { value: number; label: string }

export type Who5Question = {
  id: 'q1' | 'q2' | 'q3' | 'q4' | 'q5'
  statement: string
}

export const WHO5_OPTIONS: Who5Option[] = [
  { value: 5, label: 'All of the time' },
  { value: 4, label: 'Most of the time' },
  { value: 3, label: 'More than half of the time' },
  { value: 2, label: 'Less than half of the time' },
  { value: 1, label: 'Some of the time' },
  { value: 0, label: 'At no time' },
]

export const WHO5_QUESTIONS: Who5Question[] = [
  { id: 'q1', statement: 'I have felt cheerful and in good spirits' },
  { id: 'q2', statement: 'I have felt calm and relaxed' },
  { id: 'q3', statement: 'I have felt active and vigorous' },
  { id: 'q4', statement: 'I woke up feeling fresh and rested' },
  { id: 'q5', statement: 'My daily life has been filled with things that interest me' },
]

