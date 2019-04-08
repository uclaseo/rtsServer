const { getMongoDatabase } = require('../connections/mongoConnection');

const UserController = {
  getUserByEmail: async (req, res) => {
    const { email } = req.params;
    const db = getMongoDatabase();
    const collection = db.collection('user');
    const user = await collection.findOne({ email });
    res.send(user);
  },
};

module.exports = UserController;
