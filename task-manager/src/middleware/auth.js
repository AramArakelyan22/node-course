const jwt = require('jsonwebtoken');
const User = require('../models/user');
const auth = async(req, resp, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        console.log(token);
        const decoded = jwt.verify(token, 'thisismynewcourse');
        console.log('decoded', decoded);
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token})
        if(!user) {
            throw new Error()
        }
        req.user = user
        next();
    }catch(er) {
        resp.status(401).send({error: 'Please auth'})
    }

};

module.exports = auth;