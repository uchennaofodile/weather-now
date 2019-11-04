const express = require('express')

const app = express();
// const app2 = express();

// setting view engine
app.set('view engine0', 'ejs');

/*
    ROUTES
*/

//GET /
app.get('/', function (req, res) {
  res.render('home.ejs');
})
 
app.listen(3000, function(){
    console.log('server is live on port: 3000');});