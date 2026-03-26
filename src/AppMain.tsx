import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import QuestionnairePage from './pages/QuestionnairePage'
import ResultsPage from './pages/ResultsPage'
import LandingPage from './pages/LandingPage'
import './styles/wellbeing.css'

function AppRoutes() {
  const location = useLocation()
  const isLanding = location.pathname === '/'

  return (
    <>
      {!isLanding ? (
        <div className="topbar">
          <div className="topbar__inner">
            <Link to="/" className="topbar__brand">
              WHO-5 Well-Being Index
            </Link>
            <div className="topbar__hint">Questionnaire + score dashboard</div>
          </div>
        </div>
      ) : null}

      {isLanding ? (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quiz" element={<QuestionnairePage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      ) : (
        <main className="page">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/quiz" element={<QuestionnairePage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </main>
      )}
    </>
  )
}

export default function AppMain() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

