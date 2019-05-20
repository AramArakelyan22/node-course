const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();


//Define paths
const publicDirection = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


// Setup handlers engine and views location
app.set('views', viewPath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);


//Set up static directory
app.use(express.static(publicDirection));

app.get('', (req, res) => {
    res.render('index', {
        name: "Aram",
        title: "Weather app"
    })
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
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

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Aram',
        errorMessage: 'Help article not found!'
    })
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Aram',
        errorMessage: 'Page not found!'
    })
})

app.listen(8080, () => {console.log('server started at port 8080')});