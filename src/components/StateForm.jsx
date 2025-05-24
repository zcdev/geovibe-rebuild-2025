export default function StateForm({ stateQuery, setStateQuery, setStateData, setError }) {
    // US Census 2019 API endpoints
    const CENSUS_API_URL = 'https://api.census.gov/data/2019/acs/acsse?get=NAME,K200101_001E,K201904_001E,K200103_001E,K200101_002E,K200101_003E,K200201_002E,K200201_003E,K200201_004E,K200201_005E,K200201_006E,K200301_003E,K200201_007E,K200201_001E&for=state:*';

    // Handles form submission
    async function handleSubmit(event) {

        event.preventDefault()

        try {
            // Fetch data from Census API
            const response = await fetch(CENSUS_API_URL)

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()
            const states = data.slice(1) // Remove headers
            const match = states.find(row => row[0].toLowerCase() === stateQuery.toLowerCase().trim())

            // Check user input and handle error messages
            if (match) {
                setStateData(match)
                setStateQuery('')
                setError('')
            } else {
                setError('We couldn’t find that state. Please try again.')
            }

            // console.log('User submitted:', stateQuery)

        } catch (error) {

            setError('Unable to load data at this time.')
            // console.error('An error occurred:', error)

        }
    }

    return (
        <form className="state-form" onSubmit={handleSubmit}>
            <input
                placeholder="Enter your state"
                aria-label="Enter your state"
                type="text"
                value={stateQuery}
                onChange={(event) => setStateQuery(event.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    )
}