require('../src/db/mongoose');
const Task = require('../src/models/task');
Task.findByIdAndDelete('5cf4a815c2165c18c7cd174d')
    .then(data => {
    return Task.countDocuments({complete: false})
    }).then (data => console.log(data))
.catch(err => console.log(err));