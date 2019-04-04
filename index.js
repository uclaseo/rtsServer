const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectID } = require('mongodb');
const config = require('./config.json');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3000;

app.post('/', (req, res) => {
  console.log('req.body', req.body);
  res.send('Hello World!');
});

app.listen(PORT, () => {
  // const client = new MongoClient(config.development.mongo, { useNewUrlParser: true });
  // console.log('config mongo', config.mongo);
  // client.connect((error) => {
  //   console.log(`connected to mongo`);
  //   if (error) {
  //     return console.error('mongo connection error: ', error);
  //   }

  //   const database = client.db('rts');
  //   const collection = database.collection('user');
  //   collection.insertMany([
  //     { user: 'inseok' },
  //     { user: 'jeff ' },
  //   ], (error, result) => {
  //     if (error) {
  //       return console.error('insertMany error: ', error);
  //     }
  //     console.log('result', result);
  //   });

  // });
  console.log(`App is listening on port ${PORT}`);
});
