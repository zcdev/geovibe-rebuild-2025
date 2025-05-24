import { useState } from 'react'
import './App.css'
import StateForm from './components/StateForm'
import StateData from './components/StateData'

export default function App() {
  // Controlled input for capturing user state query
  const [stateQuery, setStateQuery] = useState('')
  // Stores the full matched state row
  const [stateData, setStateData] = useState(null)
  // Error handling
  const [error, setError] = useState('');

  return (
    <div className="app-style">
      <main>
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
      </main>
      {error && <p role="alert" className="error-message">{error}</p>}
      {stateData && <StateData stateData={stateData} />}
    </div>
  )
}