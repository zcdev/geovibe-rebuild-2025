import { useState } from 'react'
import './App.css'
import StateForm from './components/StateForm'
import StateData from './components/StateData'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  // Capture user state query by controlled input
  const [stateQuery, setStateQuery] = useState('')
  // Store the matched state row from data table
  const [stateData, setStateData] = useState(null)
  // Error handling
  const [error, setError] = useState('');

  return (
    <div className="app-style">
      <main>
      <div className="form-card">
        <header>
          <h1>GeoVibe</h1>
          <p>Getting a sense of the people around you.</p>
        </header>
        <StateForm
          stateQuery={stateQuery}
          setStateQuery={setStateQuery}
          setStateData={setStateData}
          setError={setError}
        />
      </div>
      {error && <p role="alert" className="error-message">{error}</p>}
      {stateData && <StateData stateData={stateData} />}
      </main>
      {stateData &&
        <footer>
          <small>This app collects anonymous usage data to help improve performance and accessibility.</small>
        </footer>}
      <SpeedInsights />
      <Analytics />
    </div>
  )
}