const mongoose = require('mongoose');
const { isEmail } = require('validator');
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
});

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
    }
});

const me = new User({
    name: '      Aram    ',
    email: '    ARAM@gmail.com'
});

me.save()
    .then(data => console.log(data))
    .catch(err => console.log(err))
/*
const Task = mongoose.model('Tasks', {
    description: {
        type: String
    },
    complete: {
        type: Boolean
    }
})

const task = new Task({
    description: 'Bay fruits',
    complete: false
})

task.save()
    .then(data => console.log(data))
    .catch(err => console.log(err));*/
