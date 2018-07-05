# WeatherBoss

Check a variety of forecasts anywhere in the world. Save locations, choose measurement preferences, and receive alerts for special weather conditions.

## About

This is the frontend for WeatherBoss. The backend is handled via a [seperate server folder](https://github.com/daviddinnison/weatherboss-front). Install the server first before proceeding through this tutorial.

## Table of Contents

- [Installation](#installation)
- [Working on the project](#working-on-the-project)

### Installation

- Clone this repository: `git clone https://github.com/daviddinnison/weatherboss-front`
- Move into project directory: `cd weatherboss-front`
- Install dependencies: `npm i`
- Create an account with https://www.wunderground.com/weather/api/ and get an API Key. Note that as of the time of writing, Weather Underground has shifted for free codes to a subscription model. When this project was created free API keys were still being issued. At some point in the future WeatherBoss may be refactored to use a different API.
- Create a .env file in the root folder. Make sure you have an API key, which you will paste within the parens.
  ```
  REACT_APP_API_BASEURL=http://localhost:3000
  REACT_APP_WUNDERGROUND_API_KEY=(weather underground API key)
  ```

### Working on the project

- Start the client with `npm start` at http://localhost:3000
