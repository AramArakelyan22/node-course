const express = require('express');
const Task = require('../models/task');

const router = new express.Router();

router.post('/task', async (req, resp) => {
    const task =  new Task(req.body);
    try {
        await task.save();
        resp.status(200).send(task)
    }
    catch(e) {
        resp.status(400).send(e)
    }
})



router.get('/tasks', async (req, resp) => {
    try {
        const tasks = await Task.find();
        resp.status(200).send(tasks);
    }
    catch(e) {
        resp.status(400).send(e)
    }

});




router.get('/tasks/:id', async (req, resp) => {
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

router.patch('/tasks/:id', async (req, resp) => {
    const {body, params: { id }} = req;
    const commingData = Object.keys(body);
    const validators = ['description', 'complete'];
    const isValidData = commingData.every(validator => validators.includes(validator));
    if(!isValidData) {
        return resp.status(400).send({err: "Not Updatable data"})
    }
    try {
        //const task = await Task.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        const task = await Task.findById(id);
        commingData.forEach(update => task[update] = req.body[update]);
        await task.save();
        if(!task) {
            return resp.status(404).send()
        }
        resp.status(200).send(task)
    }
    catch(e) {
        resp.status(500).send(e);
    }
});


router.delete('/tasks/:id', async(req, resp) => {
    const { id } = req.params;
    try {
        const task = await Task.findByIdAndDelete(id);
        if(!task) {
            return resp.status(404).send({err: 'Task is not found'})
        }
        resp.status(200).send(task)
    }
    catch(e){
        resp.status(400).send(e)
    }
})

module.exports = router;