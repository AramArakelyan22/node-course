const request = require('request');
const API = 'https://api.darksky.net/forecast/db49b2308dc20f5a5b0b0a23f58d435f/40.210306,44.528572';

request({url: API}, (error, response) => {
    console.log(JSON.parse(response.body))
})