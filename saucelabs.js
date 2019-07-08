/*var request = require('request');

exports = module.exports = {
  init(){
    let username = process.env.SAUCE_USERNAME;
    let accessKey = process.env.SAUCE_ACCESS_KEY;
    var options = {
      url: 'https://${username}:${accessKey}@saucelabs.com/rest/v1/users/YOUR_SAUCE_USERNAME'
    };

    function callback(error, response, body) {
      if (!error && response.statusCode == 200){
        console.log(body);
      }
    }

    request(options, callback);

  }
}*/