const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');

const router = new express.Router();

router.get('/users/me',auth , async (req, resp) => {
    resp.send(req.user)
})

router.get('/users/:id', async (req, resp) => {
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
});

router.post('/users/login', async (req, resp) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        resp.status(200).send({user, token})
    }
    catch (er) {
        resp.status(500).send({erroro: er})
    }
})

router.post('/user', async (req, resp) => {
    const newUser =  new User(req.body);

    try{
        const savedUser = await newUser.save();
        const token = await savedUser.generateAuthToken();
        resp.status(200).send({ savedUser, token})
    }
    catch(er) {
        resp.status(400).send(er);
    }
});

router.patch('/users/:id', async(req, resp) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidate = updates.every(update => allowedUpdates.includes(update));
    if(!isValidate) {
        return resp.status(400).send({err: 'Invalid update data'})
    }
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        updates.forEach(update => user[update] = req.body[update]);
        await user.save();
        if(!user) {
            return resp.status(404).send()
        }
        resp.status(200).send(user)
    }
    catch(e) {
        resp.status(500).send(e)
    }
});

router.delete('/users/:id', async(req, resp) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if(!user) {
            return resp.status(404).send({err: 'Task is not found'})
        }
        resp.status(200).send(user)
    }
    catch(e){
        resp.status(400).send(e)
    }
});

module.exports = router;