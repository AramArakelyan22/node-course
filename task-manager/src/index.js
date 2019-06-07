const express = require('express');
const path = require('path');
require('./db/mongoose');
const User = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

//This method will automatically parse the incoming data
app.use(express.json())

app.post('/user', (req, resp) => {
 new User(req.body).save()
     .then(data => {
       resp.status(200).send(data)
     })
     .catch(err => {
      resp.status(500).send(err)
     })
})

app.listen(port, () => {
 console.log(`Server is up on port ${port}`)
});