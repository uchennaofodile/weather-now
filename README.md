# weather-now

**"Weather Now"** is a web-based application built with Node.js, Express.js, and EJS, which allows users to search for current weather
information by city name, using the OpenWeatherMap API. The application utilizes middleware such as body-parser and request, and
uses dotenv for environment variable management to securely handle the API key. It also implements a simple post-response flow and
error handling, providing rendered EJS views with data obtained from the API response.<br>
**Technologies: JavaScript, Node.js, Express.js, EJS, Body-Parser, Dotenv, Request, Nodemon**


get user input of city

get weather for city
    if err let the user know there was an err
    if there is no weather available err 
    else store the weather for the user city
show weather or show err


