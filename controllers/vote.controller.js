const { getCollection, getObjectId } = require('../connections/mongoConnection');

const VoteController = {
  createVote: async (req, res) => {
    console.log('createVote called');
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
      const openVotes = await collection
        .find({
          isOpen: true,
        })
        .toArray();
        return res.send({
          success: true,
          openVotes
        });
    } catch (error) {
      return console.error('getOpenVotes error: ', error);
    }
  },
  getClosedVotes: async (req, res) => {
    console.log('getClosedVotes called');
    try {
      const collection = getCollection('vote');
      const closedVotes = await collection
        .find({
          isOpen: false,
        })
        .toArray();
        return res.send({
          success: true,
          closedVotes
        });
    } catch (error) {
      return console.error('getClosedVotes error: ', error);
    }
  },
  vote: async (req, res) => {
    console.log('vote');
    // test
    //test
    try {
      const { user, voteId, voteOption } = req.body;
      const { id: voteOptionId } = voteOption;
      const collection = getCollection('vote');
      const vote = await collection.findOne(
        { _id: getObjectId(voteId) },
      );
      let totalVotes = 0;
      const updatedVoteOptions = vote.options.map((option) => {
        if (option.id === voteOptionId) {
          option.votedUsers.push({
            _id: user._id,
            name: user.name,
            email: user.email,
          });
        }
        totalVotes += option.votedUsers.length;
        return option;
      });

      const updatedVote = await collection.findOneAndUpdate(
        { _id: getObjectId(voteId) },
        {
          $set: {
            options: updatedVoteOptions,
            voteCount: totalVotes,
          },
        },
        {
          returnOriginal: false,
        },
      );

      if (!updatedVote.ok) {
        return res.send({
          success: false,
          message: 'The vote is not updated correctly',
        });
      }

      return res.send({
        success: true,
        vote: updatedVote.value,
      });


    } catch (error) {
      return console.error('vote error: ', error);
    }
  },
};

module.exports = VoteController;
