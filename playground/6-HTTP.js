const https = require('https');
const url = 'https://api.darksky.net/forecast/db49b2308dc20f5a5b0b0a23f58d435f/40,-75?units=si';

const request = https.request(url, response => {

    let data = '';

    response.on('data', chunk => {
        data = data + chunk
    })

    response.on('end', () => {
        console.log(JSON.parse(data))
    })
});

request.end()