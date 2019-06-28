const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
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
})

userSchema.pre('save', async function(next) {
    const user = this;
    console.log('just before');
    if(user.isModified('password')) {
        console.log(user)
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

const User = mongoose.model('User', userSchema);

module.exports = User;