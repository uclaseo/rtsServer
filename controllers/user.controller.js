const { getMongoDatabase } = require('../connections/mongoConnection');

const UserController = {
  getUserByEmail: async (req, res) => {
    try {
      const { email } = req.params;
      const db = getMongoDatabase();
      const collection = db.collection('user');
      const user = await collection.findOne({ email });
      res.send({
        success: true,
        user,
      });
    } catch (error) {
      console.error('getUserByEmail error: ', error);
    }
  },
  createUser: async (req, res) => {
    try {
      const { user } = req.body;
  
      const db = getMongoDatabase();
      const collection = db.collection('user');
      await collection.insertOne(user);
      res.send({
        success: true,
      });
    } catch (error) {
      console.error('createUser error: ', error);
    }
  },
  getCoaches: async (req, res) => {
    try {
      const db = getMongoDatabase();
      const collection = db.collection('user');
      const coaches = await collection
        .find({
          role: {
            isMember: false,
            isCoach: true,
          },
        })
        .toArray();
      res.send({
        success: true,
        coaches,
      });
    } catch (error) {
      console.error('getCoaches error: ', error);
    }
  },
};

module.exports = UserController;
