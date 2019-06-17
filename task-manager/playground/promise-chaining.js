require('../src/db/mongoose');
const User = require('../src/models/user');
const Task = require('../src/models/task');

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

/*
const userUpdate = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age});
    const count = await User.countDocuments({age})
    return count
}
userUpdate('5cf4a5e3b2ac451418412d94', 10)
.then(data => console.log(data));*/

const findTaskAndDelete = async (id) => {
    await Task.findByIdAndDelete(id);
    return await Task.countDocuments();

}

findTaskAndDelete('5cf9fd6eb170e635520e3c95')
.then(data => console.log(data))