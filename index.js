const express = require('express');
const bodyParser = require('body-parser');
const { initializeMongo } = require('./connections/mongoConnection');

const userRouter = require('./routes/user.routes');
const lessonRouter = require('./routes/lesson.routes');

const routers = [
  userRouter,
  lessonRouter,
];

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routers);

const PORT = 3000;

app.post('/', (req, res) => {
  console.log('req.body', req.body);
  res.send('Hello World!');
});

app.listen(PORT, () => {
  initializeMongo()
    .then(() => {
      console.log('MongoDB connected');
    })
    .catch((error) => {
      console.error('MongoDB connection error: ', error);
    });
  console.log(`App is listening on port ${PORT}`);
});
