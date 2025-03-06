# AWS Savings Dashboard

This project is a case study for designing and implementing a dashboard to visualize AWS savings data. It was built using SvelteKit, Highcharts, and Tailwind CSS.

## Features

* Fetches AWS savings data from an API endpoint.
* Displays an overview of total savings, current month savings, and percentage change.
* Visualizes savings trends over time using a Highcharts line chart.
* Shows a breakdown of savings by category using a Highcharts bar chart.
* Provides a detailed table of savings data with date, service, and amount.
* Responsive design that adapts to different screen sizes.

## Technologies Used

* **SvelteKit:** A framework for building web applications with Svelte.
* **Highcharts:** A JavaScript charting library for creating interactive charts.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development.

## Installation

1. Clone the repository: `git clone https://github.com/jeckox/aws-savings-dashboard.git`
2. Install dependencies: `yarn`
3. Replace API endpoint and token in `.env` with your actual values.
4. Start the development server: `yarn run dev`
5. Navigate to http://localhost:5173/

## .env file example
APIKEY=AUTHENTICATHIONTOKEN

APIURL=URL

## Usage

1. Open the application in your web browser.
2. The dashboard will display the fetched AWS savings data.
3. Interact with the charts and table to explore the data.


## License

This project is licensed under the MIT License.