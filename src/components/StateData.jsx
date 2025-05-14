export default function StateData({ stateData }) {
    // Destructure the Census data array into named variables
    const [
        yourState,
        totalPopulation,
        medianIncome,
        medianAge,
        malePopulation,
        femalePopulation,
        whitePopulation,
        blackPopulation,
        nativeAmericanPopulation,
        asianPopulation,
        pacificIslanderPopulation,
        hispanicPopulation,
        otherRaces,
        totalRaceData
    ] = stateData

    // Calculates percentage
    const percent = (num, total) => ((Number(num) / Number(total)) * 100).toFixed(2);

    const genderBreakdown = [
        { label: 'Male', value: percent(malePopulation, totalPopulation) },
        { label: 'Female', value: percent(femalePopulation, totalPopulation) }
    ];

    const raceBreakdown = [
        { label: 'White', value: percent(whitePopulation, totalRaceData) },
        { label: 'Black', value: percent(blackPopulation, totalRaceData) },
        { label: 'Native American', value: percent(nativeAmericanPopulation, totalRaceData) },
        { label: 'Asian', value: percent(asianPopulation, totalRaceData) },
        { label: 'Pacific Islander', value: percent(pacificIslanderPopulation, totalRaceData) },
        { label: 'Hispanic', value: percent(hispanicPopulation, totalRaceData) },
        { label: 'Others', value: percent(otherRaces, totalRaceData) }
    ];

    return (
        <div>
            <h2>The vibe at {yourState}:</h2>
            <p>Total population: {totalPopulation}</p>
            <p>Median income: {medianIncome}</p>
            <p>Median age: {medianAge} years</p>
            <p>Gender Breakdown:</p>
            <ul>
                {genderBreakdown.map((item) => (
                    <li key={item.label}>{item.label}: {item.value}%</li>
                ))}
            </ul>
            <p>Race data:</p>
            <ul>
                {raceBreakdown.map((item) => (
                    <li key={item.label}>{item.label}: {item.value}%<br /></li>
                ))}
            </ul>
        </div>
    )
}