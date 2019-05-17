const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();


//Define paths
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')

//Set up static di
app.use(express.static(path.join(__dirname, '../public')));

app.set('views', viewPath);
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)


app.get('', (req, res) => {
    res.render('index', {
        name: "Aram",
        title: "weather app"
    })
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        message: 'We will try to be helpful'
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Aram'
    })
});

app.get('/weather', (req, res) => {
    res.send({
        location: "Yerevan",
        forecast: "Its not hot"
    })
});

app.listen(8080, () => {console.log('server started at port 8080')});