const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '../public')));

app.get('', (req, res) => {
    res.send("<h1>Barev ashxarsh</h1>")
});

app.get('/help', (req, res) => {
    res.send(express.static(path.join(__dirname, '../help')))
});

app.get('/about', (req, res) => {
    res.send("<h1>About</h1>")
});

app.get('/weather', (req, res) => {
    res.send({
        location: "Yerevan",
        forecast: "Its not hot"
    })
});

app.listen(8080, () => {console.log('server started')});