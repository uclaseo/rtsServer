const { MongoClient, ObjectId } = require('mongodb');
const config = require('../config.json');

let _db;

const initializeMongo = () => new Promise((resolve, reject) => {
  if (_db) {
    console.log('Database already exists');
    return resolve();
  }

  return MongoClient.connect(config.development.mongoAddress, config.development.mongoConfig)
    .then((client) => {
      _db = client.db('rts');
      return resolve();
    })
    .catch((error) => {
      return reject(error);
    });
});

const getMongoDatabase = () => _db;

const getCollection = (collectionName) => {
  const db = getMongoDatabase();
  const collection = db.collection(collectionName);
  return collection;
};

const getObjectId = (id) => {
  return ObjectId(id);
}

module.exports = {
  initializeMongo,
  getMongoDatabase,
  getCollection,
  getObjectId,
};