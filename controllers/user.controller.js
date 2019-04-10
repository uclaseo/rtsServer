const { getCollection } = require('../connections/mongoConnection');

const UserController = {
  getUserByEmail: async (req, res) => {
    try {
      const { email } = req.params;
      const collection = getCollection('user');
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
  
      const collection = getCollection('user');
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
      const collection = getCollection('user');
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
