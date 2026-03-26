export type TraitAdvice = {
  trait: string
  advice: string
}

export type IconTraitsEntry = {
  score: number
  name: string
  source: 'Pop-Culture' | 'Indian Film'
  positives: TraitAdvice[]
  negatives: TraitAdvice[]
}

export const ICON_TRAITS_BY_SCORE: Record<number, IconTraitsEntry> = {
  0: {
    score: 0,
    name: 'Devdas (Indian Film)',
    source: 'Indian Film',
    positives: [
      { trait: 'Deep Passion', advice: 'Channel into creative arts.' },
      { trait: 'Loyalty', advice: 'Focus on building healthy bonds.' },
      { trait: 'Introspection', advice: 'Use for self-growth/journaling.' },
    ],
    negatives: [
      { trait: 'Self-Destruction', advice: 'Seek professional therapy.' },
      { trait: 'Addiction', advice: 'Follow a professional detox plan.' },
      {
        trait: 'Total Despair',
        advice: 'Set one tiny, achievable daily goal.',
      },
    ],
  },
  1: {
    score: 1,
    name: 'Squidward (Pop-Culture)',
    source: 'Pop-Culture',
    positives: [
      { trait: 'Artistic Talent', advice: 'Dedicate daily time to a craft.' },
      { trait: 'Sophisticated', advice: 'Join niche clubs/communities.' },
      { trait: 'Disciplined', advice: 'Use routine to maintain stability.' },
    ],
    negatives: [
      { trait: 'Chronic Cynicism', advice: 'Practice daily gratitude.' },
      { trait: 'Irritability', advice: 'Socialize in small, timed bursts.' },
      { trait: 'Apathy', advice: 'Identify one new hobby to try.' },
    ],
  },
  2: {
    score: 2,
    name: 'Kabir Singh (Indian Film)',
    source: 'Indian Film',
    positives: [
      { trait: 'Brilliant Mind', advice: 'Focus on professional/work wins.' },
      { trait: 'Intensity', advice: 'Use high energy for physical fitness.' },
      { trait: 'Honesty', advice: 'Channel raw truth into the healing process.' },
    ],
    negatives: [
      { trait: 'Volatile Anger', advice: 'Enroll in anger management.' },
      { trait: 'Impulsivity', advice: 'Practice the "10-second pause" rule.' },
      { trait: 'Isolation', advice: 'Reconnect with trusted family members.' },
    ],
  },
  3: {
    score: 3,
    name: 'Charlie Brown (Pop-Culture)',
    source: 'Pop-Culture',
    positives: [
      { trait: 'Persistence', advice: 'Keep trying despite small failures.' },
      { trait: 'Kindness', advice: 'Volunteer to help those in need.' },
      { trait: 'Reflective', advice: 'Use self-reflection for clarity.' },
    ],
    negatives: [
      { trait: 'Insecurity', advice: 'Use positive self-affirmations.' },
      { trait: 'Anxiety', advice: 'Practice mindfulness exercises.' },
      { trait: 'Gloominess', advice: 'Intentionally celebrate "small wins."' },
    ],
  },
  4: {
    score: 4,
    name: 'Piku (Indian Film)',
    source: 'Indian Film',
    positives: [
      { trait: 'Responsibility', advice: 'Delegate tasks to reduce load.' },
      { trait: 'Independence', advice: 'Schedule solo "me-time" breaks.' },
      { trait: 'Pragmatism', advice: 'Use logic to solve life problems.' },
    ],
    negatives: [
      { trait: 'Chronic Irritability', advice: 'Prioritize 8 hours of sleep.' },
      { trait: 'Overwhelmed', advice: 'Set firm personal boundaries.' },
      { trait: 'Physical Tension', advice: 'Practice daily Yoga or stretching.' },
    ],
  },
  5: {
    score: 5,
    name: 'Batman (Pop-Culture)',
    source: 'Pop-Culture',
    positives: [
      { trait: 'Resourceful', advice: 'Use tools/skills to help others.' },
      { trait: 'Focused', advice: 'Set specific, mission-oriented goals.' },
      { trait: 'Brave', advice: 'Face fears in controlled environments.' },
    ],
    negatives: [
      { trait: 'Isolation', advice: 'Trust a small "inner circle" of peers.' },
      { trait: 'Obsessive', advice: 'Schedule mandatory "off-duty" rest.' },
      { trait: 'Cynicism', advice: 'Focus on small civilian successes.' },
    ],
  },
  6: {
    score: 6,
    name: 'Aditya (Indian Film)',
    source: 'Indian Film',
    positives: [
      { trait: 'Intellectual', advice: 'Apply mind to new business ventures.' },
      { trait: 'Calm Presence', advice: 'Use silence for meditation.' },
      { trait: 'Resilient', advice: 'Reflect on your history of survival.' },
    ],
    negatives: [
      { trait: 'Feeling Lost', advice: 'Travel to gain new perspectives.' },
      { trait: 'Heartbroken', advice: 'Engage in social/hobby groups.' },
      { trait: 'Passive', advice: 'Take one bold, calculated risk weekly.' },
    ],
  },
  7: {
    score: 7,
    name: 'Holden Caulfield (Pop-Culture)',
    source: 'Pop-Culture',
    positives: [
      { trait: 'Observant', advice: 'Write down your daily observations.' },
      { trait: 'Protective', advice: 'Mentor younger siblings or peers.' },
      { trait: 'Idealistic', advice: 'Work toward a noble social cause.' },
    ],
    negatives: [
      { trait: 'Judgemental', advice: 'Look for 3 "good" traits in others.' },
      { trait: 'Alienated', advice: 'Reach out to one old friend today.' },
      { trait: 'Restless', advice: 'Take long, mindful walks in nature.' },
    ],
  },
  8: {
    score: 8,
    name: 'Ved (Indian Film)',
    source: 'Indian Film',
    positives: [
      { trait: 'Creative', advice: 'Participate in storytelling/theatre.' },
      { trait: 'Imaginative', advice: 'Use imagination for problem-solving.' },
      {
        trait: 'Empathetic',
        advice: 'Connect with other creative "misfits."',
      },
    ],
    negatives: [
      { trait: 'Conforming', advice: 'Set aside "unfiltered freedom" hours.' },
      { trait: 'Boredom', advice: 'Frequently change your surroundings.' },
      { trait: 'Repression', advice: 'Express emotions through art/music.' },
    ],
  },
  9: {
    score: 9,
    name: 'Shrek (Pop-Culture)',
    source: 'Pop-Culture',
    positives: [
      { trait: 'Self-Sufficient', advice: 'Build a secure, private home.' },
      { trait: 'Genuine', advice: 'Stay authentic to your true self.' },
      { trait: 'Physically Strong', advice: 'Assist others with heavy tasks.' },
    ],
    negatives: [
      { trait: 'Defensive', advice: 'Gradually allow trusted people in.' },
      { trait: 'Grumpiness', advice: 'Spend time with humorous friends.' },
      {
        trait: 'Reclusive',
        advice: 'Host very small, intimate gatherings.',
      },
    ],
  },
  10: {
    score: 10,
    name: 'Elsa (Pop-Culture)',
    source: 'Pop-Culture',
    positives: [
      { trait: 'Powerful', advice: 'Use your unique talent for good.' },
      { trait: 'Protective', advice: 'Deeply care for family/inner circle.' },
      { trait: 'Regal', advice: 'Lead others with a calm authority.' },
    ],
    negatives: [
      { trait: 'Fearful', advice: 'Distinguish real vs. imagined fears.' },
      { trait: 'Emotionally Hidden', advice: 'Use music for expression.' },
      { trait: 'Lonely', advice: 'Allow one person to see your true self.' },
    ],
  },
  11: {
    score: 11,
    name: 'Bilbo Baggins (Pop-Culture)',
    source: 'Pop-Culture',
    positives: [
      { trait: 'Hospitable', advice: 'Host friends and family often.' },
      { trait: 'Latent Bravery', advice: 'Step slightly out of comfort zones.' },
      { trait: 'Witty', advice: 'Share life stories and jokes.' },
    ],
    negatives: [
      { trait: 'Overly Fussy', advice: 'Practice "going with the flow."' },
      { trait: 'Stressed', advice: 'Use deep-breathing techniques.' },
      { trait: 'Homesick', advice: 'Bring comforts of home to work/travel.' },
    ],
  },
  12: {
    score: 12,
    name: 'Milkha Singh (Indian Film)',
    source: 'Indian Film',
    positives: [
      { trait: 'Determined', advice: 'Set a massive physical/career goal.' },
      { trait: 'Service-Oriented', advice: 'Engage in community service.' },
      { trait: 'Athletic', advice: 'Maintain a high-discipline sports routine.' },
    ],
    negatives: [
      { trait: 'Haunted', advice: 'Engage in CBT (Cognitive Therapy).' },
      { trait: 'Rigid', advice: 'Learn a relaxing, non-competitive hobby.' },
      { trait: 'Competitive', advice: 'Focus on the "joy" of the process.' },
    ],
  },
  13: {
    score: 13,
    name: 'The Dude (Pop-Culture)',
    source: 'Pop-Culture',
    positives: [
      { trait: 'Extremely Calm', advice: 'Guide others during crises.' },
      { trait: 'Easygoing', advice: 'Advocate for a simple, honest life.' },
      { trait: 'Present-Minded', advice: 'Practice mindful living.' },
    ],
    negatives: [
      { trait: 'Lazy', advice: 'Set 3 "non-negotiable" daily tasks.' },
      { trait: 'Aimless', advice: 'Create a simple 1-year bucket list.' },
      { trait: 'Passive', advice: 'Stand up for one core personal belief.' },
    ],
  },
  14: {
    score: 14,
    name: 'Munna Bhai (Indian Film)',
    source: 'Indian Film',
    positives: [
      { trait: 'Compassionate', advice: 'Spread joy (the "Jadoo ki Jhappi").' },
      { trait: 'Charismatic', advice: 'Lead group social activities.' },
      { trait: 'Solution-Focused', advice: 'Simplify complex issues.' },
    ],
    negatives: [
      { trait: 'Dishonest', advice: 'Practice radical, daily honesty.' },
      { trait: 'Unfocused', advice: 'Use a daily task-planner app.' },
      {
        trait: 'Impulsive',
        advice: 'Consult a trusted mentor before acting.',
      },
    ],
  },
  15: {
    score: 15,
    name: 'Harry Potter (Pop-Culture)',
    source: 'Pop-Culture',
    positives: [
      { trait: 'Loyal', advice: 'Strengthen your core "inner circle".' },
      { trait: 'Courageous', advice: 'Stand up for ethical principles.' },
      { trait: 'Adaptable', advice: 'Learn new survival/life skills fast.' },
    ],
    negatives: [
      { trait: 'Traumatized', advice: 'Seek professional counseling.' },
      { trait: 'Reckless', advice: "Always consider the team's safety." },
      { trait: 'Burdened', advice: 'Delegate chores and responsibilities.' },
    ],
  },
  16: {
    score: 16,
    name: 'Bajirao (Indian Film)',
    source: 'Indian Film',
    positives: [
      { trait: 'Strategic', advice: 'Plan long-term professional moves.' },
      { trait: 'Fearless', advice: 'Take calculated financial/life risks.' },
      { trait: 'Passionate', advice: 'Devote energy to your partner/goals.' },
    ],
    negatives: [
      { trait: 'Aggressive', advice: 'Use martial arts for discipline.' },
      { trait: 'Stubborn', advice: 'Actively listen to opposing views.' },
      {
        trait: 'Physical Tension',
        advice: 'Schedule regular massage/rest.',
      },
    ],
  },
  17: {
    score: 17,
    name: 'Ted Lasso (Pop-Culture)',
    source: 'Pop-Culture',
    positives: [
      { trait: 'Optimistic', advice: 'Spread a "Believe" culture.' },
      { trait: 'Forgiving', advice: 'Release old, toxic grudges.' },
      { trait: 'Curious', advice: 'Ask more questions than you answer.' },
    ],
    negatives: [
      { trait: 'People-Pleasing', advice: 'Say "No" to one request daily.' },
      {
        trait: 'Anxious',
        advice: 'Conduct regular mental health check-ins.',
      },
      {
        trait: 'Self-Sacrificing',
        advice: 'Prioritize your own happiness.',
      },
    ],
  },
  18: {
    score: 18,
    name: 'Aisha (Indian Film)',
    source: 'Indian Film',
    positives: [
      { trait: 'Organized', advice: 'Help others structure their lives.' },
      { trait: 'Ambitious', advice: 'Aim for a specific career promotion.' },
      { trait: 'Supportive', advice: 'Be the "anchor" for a struggling friend.' },
    ],
    negatives: [
      { trait: 'Controlling', advice: 'Allow others to lead periodically.' },
      { trait: 'Materialistic', advice: 'Practice a week of minimalism.' },
      { trait: 'Judgemental', advice: 'Practice non-biased observation.' },
    ],
  },
  19: {
    score: 19,
    name: 'Leslie Knope (Pop-Culture)',
    source: 'Pop-Culture',
    positives: [
      { trait: 'High Energy', advice: 'Lead a large community project.' },
      { trait: 'Caring', advice: "Celebrate friends' personal wins." },
      { trait: 'Visionary', advice: 'Draft a 5-year personal roadmap.' },
    ],
    negatives: [
      { trait: 'Workaholic', advice: 'Set a strict 6:00 PM "log-off" time.' },
      { trait: 'Overbearing', advice: 'Ask for peer feedback regularly.' },
      {
        trait: 'Intense',
        advice: 'Take a "low-energy" nature vacation.',
      },
    ],
  },
  20: {
    score: 20,
    name: 'Raj (Indian Film)',
    source: 'Indian Film',
    positives: [
      { trait: 'Romantic', advice: 'Plan a surprise for a loved one.' },
      { trait: 'Joyful', advice: 'Organize a social party or event.' },
      { trait: 'Charming', advice: 'Use charm to resolve team conflicts.' },
    ],
    negatives: [
      { trait: 'Immature', advice: 'Take on one major life responsibility.' },
      { trait: 'Over-Confident', advice: 'Always seek a second opinion.' },
      { trait: 'Distracted', advice: 'Use time-blocking for focus.' },
    ],
  },
  21: {
    score: 21,
    name: 'Superman (Pop-Culture)',
    source: 'Pop-Culture',
    positives: [
      { trait: 'Principled', advice: 'Mentor others in ethical living.' },
      { trait: 'Altruistic', advice: 'Volunteer for a global charity.' },
      { trait: 'Calm Under Pressure', advice: 'Practice zen in crises.' },
    ],
    negatives: [
      { trait: 'Perfectionist', advice: 'Accept "good enough" results.' },
      { trait: 'Burdened', advice: 'Share your struggles with a peer.' },
      {
        trait: 'Emotionally Distant',
        advice: 'Engage in "human" hobbies.',
      },
    ],
  },
  22: {
    score: 22,
    name: 'Simran (Indian Film)',
    source: 'Indian Film',
    positives: [
      { trait: 'Visionary', advice: 'Turn your dreams into a project.' },
      { trait: 'Bold', advice: "Travel to a city you've never visited." },
      { trait: 'Respected', advice: 'Accept a leadership role at work.' },
    ],
    negatives: [
      { trait: 'Feeling Restricted', advice: 'Negotiate your boundaries.' },
      { trait: 'Hesitant', advice: 'Make one quick decision today.' },
      { trait: 'Too Quiet', advice: 'Practice public speaking/assertion.' },
    ],
  },
  23: {
    score: 23,
    name: 'Joy (Pop-Culture)',
    source: 'Pop-Culture',
    positives: [
      { trait: 'Radiant', advice: 'Host a "positivity" workshop.' },
      { trait: 'Resourceful', advice: 'Find a "way out" of any crisis.' },
      { trait: 'Motivating', advice: 'Give a pep talk to a colleague.' },
    ],
    negatives: [
      { trait: 'Dismissive', advice: "Truly listen to others' sadness." },
      { trait: 'Controlling', advice: "Let others' emotions guide at times." },
      { trait: 'Hyperactive', advice: 'Practice slow, deep meditation.' },
    ],
  },
  24: {
    score: 24,
    name: 'Pushpa (Indian Film)',
    source: 'Indian Film',
    positives: [
      { trait: 'Self-Confident', advice: 'Lead a large organization.' },
      { trait: 'Hardworking', advice: 'Execute a massive, complex task.' },
      { trait: 'Fearless', advice: 'Speak truth to those in power.' },
    ],
    negatives: [
      { trait: 'Defiant', advice: 'Learn when to collaborate/compromise.' },
      { trait: 'Reckless', advice: 'Perform a risk-benefit check daily.' },
      { trait: 'Arrogant', advice: 'Practice one act of humility daily.' },
    ],
  },
  25: {
    score: 25,
    name: 'SpongeBob (Pop-Culture)',
    source: 'Pop-Culture',
    positives: [
      { trait: 'Enthusiastic', advice: 'Volunteer for tough tasks.' },
      { trait: 'Loyal', advice: 'Support your friends unconditionally.' },
      { trait: 'Resilient', advice: 'Bounce back instantly from a "No."' },
    ],
    negatives: [
      { trait: 'Naive', advice: 'Ask a mentor for a "reality check."' },
      { trait: 'Overly Loud', advice: 'Learn the power of quiet focus.' },
      { trait: 'Over-Sensitive', advice: 'Build healthy emotional armor.' },
    ],
  },
}

