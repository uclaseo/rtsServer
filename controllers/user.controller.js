const { getMongoDatabase } = require('../connections/mongoConnection');

const UserController = {
  getUser: async (req, res) => {
    const db = getMongoDatabase();
    const collection = db.collection('user');
    res.send('get user');
  },
};

module.exports = UserController;
