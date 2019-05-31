const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';
const objectId = mongodb.ObjectID;
/*const id = new objectId();
console.log(id);
console.log(id.getTimestamp());*/
MongoClient.connect(connectionUrl, {useNewUrlParser: true}, (err, cli) => {
    if(err) {
      return  console.log(err)
    }
    const db = cli.db(database);
    /*db.collection('users').findOne({_id: '5cf0b4b4e416f514f195818c'}, (error, user) => {
        if(err) {
            return console.log(error)
        }
        console.log(user)
    })*/
    db.collection('users').find({age: 30}).toArray((err, users) => {
        if(err) {
            return console.log(err)
        }
        console.log(users)
    })
    
})