import { useState } from 'react'
import './App.css'

function App() {
  // Controlled input for capturing user state query
  const [stateQuery, setStateQuery] = useState('')
  // Stores the full matched state row
  const [stateData, setStateData] = useState(null)
  // Fetch data from Census API
  const CENSUS_API_URL = 'https://api.census.gov/data/2019/acs/acsse?get=NAME,K200101_001E,K201904_001E,K200103_001E,K200101_002E,K200101_003E,K200201_002E,K200201_003E,K200201_004E,K200201_005E,K200201_006E,K200301_003E,K200201_007E,K200201_001E&for=state:*';


  // Handles form submission
  async function handleSubmit(event) {
    event.preventDefault()

    const response = await fetch(CENSUS_API_URL)
    const data = await response.json()
    const states = data.slice(1) // Remove headers
    const match = states.find(row => row[0].toLowerCase().includes(stateQuery.toLowerCase()))

    setStateData(match)

    console.log('User submitted:', stateQuery);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={stateQuery}
          onChange={(event) => setStateQuery(event.target.value)}
          placeholder="Enter your state"
        />
        <button type="submit">Submit</button>
      </form>
      {stateData && (
        <div>
          <h2>The vibe at {stateData[0]}:</h2>
          <p>Total population: {stateData[1]}</p>
        </div>
      )}
    </>
  )
}

export default App
