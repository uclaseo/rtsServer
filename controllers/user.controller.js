const { getCollection } = require('../connections/mongoConnection');

const UserController = {
  getUserByEmail: async (req, res) => {
    console.log('getUserByEmail called');
    try {
      const { email } = req.params;
      const collection = getCollection('user');
      const user = await collection.findOne({ email });
      return res.send({
        success: true,
        user,
      });
    } catch (error) {
      return console.error('getUserByEmail error: ', error);
    }
  },
  createUser: async (req, res) => {
    console.log('createUser called');
    try {
      const { user } = req.body;
  
      const collection = getCollection('user');
      await collection.insertOne(user);
      return res.send({
        success: true,
      });
    } catch (error) {
      return console.error('createUser error: ', error);
    }
  },
  getCoaches: async (req, res) => {
    console.log('getCoaches called');
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
      return res.send({
        success: true,
        coaches,
      });
    } catch (error) {
      return console.error('getCoaches error: ', error);
    }
  },
};

module.exports = UserController;
