const express = require('express');
const path = require('path');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/Task');

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
      resp.status(400).send({err})
     })
})


app.post('/task', (req, resp) => {
    new Task(req.body).save()
        .then(data => {
            resp.status(200).send(data)
        })
        .catch(err => {
            resp.status(400).send(err)
        })
})

app.get('/users', (req, resp) => {
    User.find()
        .then(data => resp.status(200).send(data))
        .catch(err => resp.status(500).send(err))
})

app.get('/users/:id', (req, resp) => {
    const _id = req.params.id;
    User.findById( _id)
        .then(data => {
            console.log(data);
            if(!data) {
                resp.status(404).send('User did not find!')
            }
            resp.status(200).send(data)
        })
        .catch(err => resp.status(500).send(err))
})

app.get('/tasks', (req, resp) => {
    Task.find()
        .then(tasks => resp.status(200).send(tasks))
        .catch(err => resp.status(500).send(err))
})

app.get('/tasks/:id', (req, resp) => {
    const id = req.params.id;
    Task.findById(id)
        .then(tasks => resp.status(200).send(tasks))
        .catch(err => resp.status(500).send(err))
})

app.listen(port, () => {
 console.log(`Server is up on port ${port}`)
});