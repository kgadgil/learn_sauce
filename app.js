'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
const saucelabs = require('./saucelabs.js');
const port = 3000;

app.use(bodyParser.json());

//saucelabs.init();

app.get('/', function (request, response) {
	//response.send('Hello World!');
	(async () => {
    try {
        const response = await got('sindresorhus.com');
        console.log(response.body);
        //=> '<!doctype html> ...'
    } catch (error) {
        console.log(error.response.body);
        //=> 'Internal server error ...'
    }
})();
});

app.listen(port, function(error) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Listening on port ${port}`);
    }
  });