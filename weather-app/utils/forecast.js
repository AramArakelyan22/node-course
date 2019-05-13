const request = require('request');

const forecast = (long, lat, callback) => {
  const url = 'https://api.darksky.net/forecast/db49b2308dc20f5a5b0b0a23f58d435f/' + long + ',' + lat +'?units=si';
  request({url: url, json: true}, (err, data) => {
    if(err) {
      callback('Unable to connect to weather service!', undefined)
    }
    else if (data.body.error) {
      callback(error, undefined)
    }
    else {
      const {currently: { temperature, precipIntensity } } = data.body;
    callback(undefined, 'It is currently ' + temperature + ' degrees out. There is a ' + precipIntensity + '% chance of rain.')
    }
  })

}

module.exports = forecast