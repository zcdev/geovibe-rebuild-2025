# GeoVibe

**Get the <em>vibe</em> of your state.**

GeoVibe lets you explore U.S. Census data to better understand the population, income, age, and diversity across all 50 states.

🔗 **Live Demo:** [https://geovibe.vercel.app](https://geovibe.vercel.app)

## Overview

GeoVibe is a single-page application that displays demographic data from the U.S. Census Bureau. Users can enter the name of any U.S. state at the form to view statistics on population, median income, age distribution, gender breakdown, and racial diversity.

The project is a complete rebuild of an [earlier JavaScript-based version](https://github.com/zcdev/GeoVibe-old), modernized now using React and Vite. It’s designed to be simple, responsive, and accessible to make geodemographical insights approachable for everyday users.

The custom background artwork was also designed specifically for this app to reflect the theme of diversity, community, and geography.

## Features

🔍 **State-based input with autocomplete**
<br />Enter the name of any U.S. state at the form to retrieve data instantly

🌐 **Census API integration**
<br />Retrieves official 2023 American Community Survey (ACS) data in real time from the U.S. Census Bureau

📊 **Key demographic insights**
<br />Total population, median income, age, gender, and race/ethnicity breakdowns

🎨 **Custom background artwork**
<br />Designed to reflect the theme of community, diversity, and geography

🌙 **Dark mode friendly**
<br />Adapts to system preferences for improved accessibility with eye comfort

📱 **Responsive & accessible design**
<br />Optimized for desktop and mobile with keyboard-friendly form

⚠️ **Error handling**
<br />Gracefully notifies users of invalid input or fetch issues

## Tech Stack & Creative Tools

- **React** – Component-based UI library
- **Vite** – Fast dev server and bundler
- **JavaScript (ES6+)** – App logic and interactivity
- **HTML5** - For semantic structure and datalist
- **CSS3** – Custom styles, responsive layout, and theming
- **U.S. Census Bureau API** – ACS 2023 demographic data source
- **Vercel** – Hosting and deployment
- **Sketch App** - For vector graphic illustrations
- **Photoshop** - For app background image production

## Getting Started (for Dev)

To run GeoVibe locally:

1. **Clone the repo**
`git clone https://github.com/zcdev/geovibe.git` and then `cd geovibe`

2. **Install dependencies**
`npm install`

3. **Start the dev server**
`npm run dev`

4. Visit http://localhost:5173 in your browser

⚠️ Requires Node.js v18+ and Internet connection to fetch data from the U.S. Census API.

## Metrics & Privacy

GeoVibe uses Vercel Web Analytics and Speed Insights to help monitor app performance and user behavior.

No personal data is collected.  
No cookies are used.  
Only anonymous, aggregate usage information is tracked — strictly for improving accessibility and user experience.

## Acknowledgements

- **[U.S. Census Bureau API](https://www.census.gov/data.html)** – American Community Survey (2023) data
- **[Vecteezy.com](https://www.vecteezy.com)** – Resource for the vector graphic assets
- **[OpenAI's ChatGPT](https://chatgpt.com)** – Assisted with design feedback, code reviews, best practices, and copywriting

Created by ZCDEV — Designed, developed, and deployed with ❤️‍🔥