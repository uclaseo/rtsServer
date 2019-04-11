const express = require('express');
const VoteController = require('../controllers/vote.controller');

const router = express.Router();

router.route('/vote/create')
  .post(VoteController.createVote);

router.route('/vote/openVotes')
  .get(VoteController.getOpenVotes);

router.route('/vote/closedVotes')
  .get(VoteController.getClosedVotes);

module.exports = router;
