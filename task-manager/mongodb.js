const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';


MongoClient.connect(connectionUrl, {useNewUrlParser: true}, (err, cli) => {
    if(err) {
      return  console.log(err)
    }
    const db = cli.db(database);
   /* db.collection('users').insertOne({
        name: 'Artashes',
        age: 30
    })
        .then(data => console.log(data))
        .catch(err => console.log(err))*/
  /* db.collection('users').insertMany([
       {
           name: 'Jane',
           age: 28
       },
       {
           name: 'Guner',
           age: 100
       }
   ], (err, data) => {
       if(err) {
           return console.log(err)
       }
       console.log(data.ops)
   })*/

  db.collection('tasks').insertMany(
      [
          {
              description: "Buy Grocery",
              completed: true,
          },
          {
              description: "Go to the town",
              completed: false,
          },
          {
              description: "Finish the tasks",
              completed: true
          }
      ],
      (error, result) => {
          if(error) {
              return console.log(err)
          }
          console.log(result.ops)
      }
  )

})