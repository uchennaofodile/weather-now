// all packages we're using

require('dotenv').config()
const express = require('express')

// initiate app
const app = express();
// const app2 = express();

//assign api key to env var
const apiKey = process.env.APIKEY;

const bodyParser = require('body-parser');
const request = require('request');


// setting view engine
app.set('view engine', 'ejs');

//middleware (app or route)

//app middleware
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}));

/*
    ROUTES
*/

//GET request for root = by default browser does get request/
app.get('/', function (req, res) {
  res.render('home.ejs',{ weather: null, error: null }); //both are null because we don't know them at the beginning
});

//handling post request for forward slash
app.post('/', function (req, res) {


  let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + req.body.city + '&units=imperial&APPID='+apiKey;
  
  request(url, function (error, response, body) {
    if(error){
      res.render('home.ejs',{ weather: weatherNow, error: "Error, please try again" });
    } else {
      let weather = JSON.parse(body);
      if (weather.main == undefined){
        res.render('home.ejs',{ weather: weatherNow, error: "Error, please try again" });
      } else {
        let weatherNow = "The weather in " + req.body.city + ' is ' + weather.main.temp + " degrees F."
        res.render('home.ejs',{ weather: weatherNow, error: null });
      }
    }
  });
 });

 
app.listen(3000, function(){
    console.log('server is live on port: 3000');});