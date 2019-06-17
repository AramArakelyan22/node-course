const express = require('express');
const path = require('path');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/Task');

const app = express();
const port = process.env.PORT || 3000;

//This method will automatically parse the incoming data
app.use(express.json())

app.post('/user', async (req, resp) => {
 const newUser =  new User(req.body);

 try{
     await newUser.save();
     resp.status(200).send(newUser)
 }
 catch(er) {
    resp.status(400).send(er);
 }
})


app.post('/task', async (req, resp) => {
   const task =  new Task(req.body);
    try {
      await task.save();
       resp.status(200).send(task)
    }
    catch(e) {
        resp.status(400).send(e)
    }
})

app.get('/users', async (req, resp) => {
    try {
        const users = await User.find();
        resp.status(200).send(users)
    }
    catch(er) {
        resp.status(400).send(er)
    }
})

app.get('/users/:id', async (req, resp) => {
    try {
        const _id = req.params.id;
        const user = await User.findById(_id);
        if(!user) {
           return resp.status(404).send()
        }
        resp.status(200).send(user);
    }
    catch(e) {
        resp.status(400).send(e)
    }
})

app.get('/tasks', async (req, resp) => {
    try {
        const tasks = await Task.find();
        resp.status(200).send(tasks);
    }
    catch(e) {
        resp.status(400).send(e)
    }

})

app.get('/tasks/:id', async (req, resp) => {
    const id = req.params.id;
    try {
        const task = await Task.findById(id);
        if(!task) {
            return resp.status(404).send()
        }
        resp.status(200).send(task)
    }
    catch(e) {
        resp.status(400).send(e)
    }


})

app.listen(port, () => {
 console.log(`Server is up on port ${port}`)
});