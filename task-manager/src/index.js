const express = require('express');
const path = require('path');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const app = express();
const port = process.env.PORT || 3000;

//This method will automatically parse the incoming data
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);



app.listen(port, () => {
 console.log(`Server is up on port ${port}`)
});

const bcrypt = require('bcrypt');

const myFunc = async () => {
 const password = 'Yellow1235';
 const hashPass = await bcrypt.hash(password, 8)
 console.log(hashPass);
 const isMatch = await bcrypt.compare('Yellow1235', hashPass);
 console.log(isMatch)
}


myFunc()