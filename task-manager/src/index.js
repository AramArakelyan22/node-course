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

const jwt = require('jsonwebtoken');


const myFunc = async () => {
 const token = jwt.sign({_id: 'abc123'}, 'thisismynewcourse', {expiresIn: '7 days'});
 console.log(token)
 const data =jwt.verify(token, 'thisismynewcourse' );
 console.log(data);
}


myFunc()