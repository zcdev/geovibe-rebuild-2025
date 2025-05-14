import { useState } from 'react'
import './App.css'

function App() {
  // Controlled input for capturing user state query
  const [stateQuery, setStateQuery] = useState('')

  // Handles form submission
  function handleSubmit(event) {
    event.preventDefault()
    console.log(stateQuery) // Will be used to look up Census data
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
    </>
  )
}

export default App
