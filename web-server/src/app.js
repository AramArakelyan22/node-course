const express = require('express');
const path = require('path');
const hbs = require('hbs');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
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
    const { address } = req.query;
    if ( !address ) {
        return res.send({
            error: 'You must provide address.'
        })
    }

    geocode(address, (err, data = {}) => {
        if(err) {
            res.send({
                err
            })
        }
        else {
            const { longtitude, latitude, placeName } = data
            forecast(longtitude , latitude , (err, data) => {

                if(err) {
                    res.send({
                        err
                    })
                }
                if(data) {
                    res.send({
                        address,
                        data
                    })
                }
            })
        }
    })
});


app.get('/products', (req, res) => {
    const { search } = req.query
    if(!search) {
        return res.send({
            error: 'You must provide search term!'
        })
    }
    res.send({
        products: []
    })
})

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