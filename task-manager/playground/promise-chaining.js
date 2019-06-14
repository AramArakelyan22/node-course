require('../src/db/mongoose');
const User = require('../src/models/user');

//5cf4a5e3b2ac451418412d94
/*
User.findByIdAndUpdate('5cf4a5e3b2ac451418412d94', {age: 14})
.then(user => {
    console.log(user);
    return User.countDocuments({age: 14})
})
.then(
    data => console.log(data)
).catch(err => {
    console.log(err)
    return err
})*/

const userUpdate = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age});
    const count = await User.countDocuments({age})
    return count
}
userUpdate('5cf4a5e3b2ac451418412d94', 10)
.then(data => console.log(data));