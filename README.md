# GeoVibe

**Get the <em>vibe</em> of your state.**

GeoVibe lets you explore U.S. Census data to better understand the population, income, age, and diversity across all 50 states.

🔗 **Live Demo:** [https://geovibe.vercel.app](https://geovibe.vercel.app)

## Overview

GeoVibe is a single-page application that displays demographic data from the U.S. Census Bureau.  
Users can enter any U.S. state to view statistics on population, median income, age distribution, gender breakdown, and racial diversity.

The project is a complete rebuild of an earlier JavaScript-based version — now modernized using React and Vite. It’s designed to be simple, responsive, and accessible — making geodemographic insights approachable for everyday users.

The custom background illustration was also created specifically for this app to reflect themes of diversity, community, and geography.

## Features

🔍 **State-based input with autocomplete**
<br />Enter any U.S. state to retrieve data instantly

🌐 **Census API integration**
<br />Retrieves official 2019 American Community Survey (ACS) data in real time from the U.S. Census Bureau

📊 **Key demographic insights**
<br />Total population, median income, age, gender, and race/ethnicity breakdowns

🎨 **Custom background artwork**
<br />Designed to highlight themes of community and diversity

🌙 **Dark mode friendly**
<br />Adapts to system preferences for improved accessibility and eye comfort

📱 **Responsive & accessible design**
<br />Optimized for desktop and mobile with keyboard-friendly forms

⚠️ **Error handling**
<br />Gracefully notifies users of bad input or fetch issues

## Tech Stack & Creative Tools

- **React** – Component-based UI library
- **Vite** – Fast dev server and bundler
- **JavaScript (ES6+)** – App logic and interactivity
- **HTML5** - For semantic structure and datalist
- **CSS3** – Custom styles, responsive layout, and theming
- **U.S. Census Bureau API** – ACS 2019 demographic data source
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

⚠️ Requires Node.js v18+ and internet connection to fetch data from the U.S. Census API.

## Acknowledgements

- **U.S. Census Bureau API** – American Community Survey (2019) data
- **Vecteezy.com** – Resource for the vector graphic assets
- **OpenAI's ChatGPT** – Assisted with design feedback, code reviews, best practices, and copywriting

Created by ZCDEV — Designed, built, and deployed with ❤️‍🔥