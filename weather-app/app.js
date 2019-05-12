const request = require('request');
const API = 'https://api.darksky.net/forecast/db49b2308dc20f5a5b0b0a23f58d435f/40.210306,44.528572?units=si';
const geoAPI = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXJhbWFyYWtlbHlhbjIyIiwiYSI6ImNqdmVyeTkzbDF6ZXo0M3J4eHluamtvNXUifQ.nPXWvzgb9liHi1kci0G-dA';
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
/*
const weatherRequest = (lan, lon) => request({url: 'https://api.darksky.net/forecast/db49b2308dc20f5a5b0b0a23f58d435f/' + lan + ',' + lon + '?units=si', json: true}, (error, response) => {
    //console.log(response.body.currently)
    if(error) {
        console.log(error)
    }
    else if(response.body.error) {
        console.log('The place is not found')
    }
    else {
        const currentTemp = response.body.currently.temperature;
        const rainForecast = response.body.currently.precipProbability;
        console.log(response.body)
        console.log('It is currently ' + currentTemp + ' degrees out. There is a ' + rainForecast + '% chance of rain.')
    }
})*/




geocode('montgomery', (err, data) => {
    if (err) {
        console.log(err)
    }
    else {
      const { longtitude, latitude } = data
      forecast(longtitude, latitude, (err, data) => {

  if(err) {
    console.log(err)
  }
  if(data) {
    console.log(data)
  }
})
    }
})