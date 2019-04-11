const { getCollection } = require('../connections/mongoConnection');

const VoteController = {
  createVote: async (req, res) => {
    console.log('createVote calaled');
    try {
      console.log('req.body', req.body);
      const { body } = req;
      const collection = getCollection('vote');
      const result = await collection.insertOne({
        ...body,
      });
      if (!result.ok) {
        return res.send({
          success: false,
          message: 'createVote did not currectly create a vote',
        });
      }
      return res.send({
        success: true,
      });
    } catch (error) {
      return console.error('createVote error: ', error);
    }
  },
  getOpenVotes: async (req, res) => {
    console.log('getOpenVotes called');
    try {
      const collection = getCollection('vote');
      res.send('hi')
    } catch (error) {
      return console.error('getOpenVotes error: ', error);
    }
  },
  getClosedVotes: async (req, res) => {
    console.log('getClosedVotes called');
    try {
      const collection = getCollection('vote');

      res.send('bye')

    } catch (error) {
      return console.error('getClosedVotes error: ', error);
    }
  },
};

module.exports = VoteController;
