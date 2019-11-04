const express = require('express')

const app = express();
// const app2 = express();
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000, function(){
    console.log('server is live on port: 3000');});