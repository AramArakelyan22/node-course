const mongoose = require('mongoose');
const { isEmail } = require('validator');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            const realEmail = isEmail(value)
            if(!realEmail) {
                throw new Error('Email is not valid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error("The age could not be negative number")
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if(value.length < 6 ){
                throw new Error('The password must have more tha 6 characters')
            }
            if(value === 'password') {
                throw new Error('The use another password')
            }
        }
    }
});

module.exports = User