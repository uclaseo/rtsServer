const { getCollection } = require('../connections/mongoConnection');

const VoteController = {
  getOpenVotes: async (req, res) => {
    console.log('getOpenVotes called');
    try {
      res.send('hi')
    } catch (error) {
      return console.error('getOpenVotes error: ', error);
    }
  },
  getClosedVotes: async (req, res) => {
    console.log('getClosedVotes called');
    try {
      res.send('bye')

    } catch (error) {
      return console.error('getClosedVotes error: ', error);
    }
  },
};

module.exports = VoteController;
