import { useState } from 'react'
import './App.css'
import StateForm from './components/StateForm'
import StateData from './components/StateData'

function App() {
  // Controlled input for capturing user state query
  const [stateQuery, setStateQuery] = useState('')
  // Stores the full matched state row
  const [stateData, setStateData] = useState(null)

  return (
    <>
      <StateForm
        stateQuery={stateQuery}
        setStateQuery={setStateQuery}
        stateData={stateData}
        setStateData={setStateData}
      />
      {stateData && <StateData stateData={stateData} />}
    </>
  )
}

export default App
