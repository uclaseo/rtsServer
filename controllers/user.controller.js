const { getMongoDatabase } = require('../connections/mongoConnection');

const UserController = {
  getUserByEmail: async (req, res) => {
    try {
      const { email } = req.params;
      const db = getMongoDatabase();
      const collection = db.collection('user');
      const user = await collection.findOne({ email });
      res.send(user);
    } catch (error) {
      console.error('getUserByEmail error: ', error);
    }
  },
  createUser: async (req, res) => {
    try {
      const {
        name,
        email,
        role,
      } = req.body;
  
      const db = getMongoDatabase();
      const collection = db.collection('user');
      await collection.insertOne({
        name,
        email,
        role,
      });
      res.send('createdUser');
    } catch (error) {
      console.error('createUser error: ', error);
    }
  },
};

module.exports = UserController;
