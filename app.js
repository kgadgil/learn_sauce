'use strict';

const app = require('express')();
const saucelabs = require('./saucelabs.js');
const port = 3000;
app.get('/', (req, res) => res.send('Hello World!'))

/*app.listen(port, () => console.log(`Example app listening on port ${port}!`));*/
app.get('/', function(request, response) {
    response.send("Say nice");
  });
saucelabs.init();
app.listen(port, function(error) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Listening on port ${port}`);
    }
  });