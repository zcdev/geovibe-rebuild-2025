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
        { label: 'Black or African American', value: percent(blackPopulation, totalRaceData) },
        { label: 'American Indian and Alaska Native', value: percent(nativeAmericanPopulation, totalRaceData) },
        { label: 'Asian', value: percent(asianPopulation, totalRaceData) },
        { label: 'Native Hawaiian and Other Pacific Islander', value: percent(pacificIslanderPopulation, totalRaceData) },
        { label: 'Other races', value: percent(otherRaces, totalRaceData) }
    ];

    const hispanicPercent = percent(hispanicPopulation, totalPopulation)

    return (
        <div>
            <h2>The vibe at {yourState}:</h2>
            <p>Total population: {totalPopulation}</p>
            <p>Median income: ${medianIncome}</p>
            <p>Median age: {medianAge} years</p>
            <h3>Gender Breakdown:</h3>
            <ul>
                {genderBreakdown.map((item) => (
                    <li key={item.label}>{item.label}: {item.value}%</li>
                ))}
            </ul>
            <h3>Race Breakdown:</h3>
            <ul>
                {raceBreakdown.map((item) => (
                    <li key={item.label}>{item.label}: {item.value}%<br /></li>
                ))}
            </ul>
            <h3>Ethnicity:</h3>
            <ul>
                <li>Hispanic or Latino: {hispanicPercent}%</li>
            </ul>
            <p className="data-note">
                Note: The U.S. Census defines "Hispanic or Latino" as an ethnicity, not a race.<br />
                Individuals may identify as both Hispanic and any race.<br />
                Percentages may overlap or not total 100%.
            </p>
        </div>
    )
}