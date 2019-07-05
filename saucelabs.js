'use strict';
const http = require('http');
const SauceLabs = require('saucelabs').default;

exports = module.exports = {
	async init () {
        let username = process.env.SAUCE_USERNAME;
        let accessKey = process.env.SAUCE_ACCESS_KEY;
        var token;
        var sauceUrl = "https://saucelabs.com/rest/v1/analytics/trends/tests";
        /*
        ?interval=1h&start=2017-03-01T12:00:00Z&end=2017-03-02T12:00:00Z&os=Linux&pretty
        */
       var request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                console.log(xmlHttp.responseText);
        }
        xmlHttp.open("GET", sauceUrl, true); // true for asynchronous 
        xmlHttp.send(null);
        
    }
}
