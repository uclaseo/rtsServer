const express = require('express');
const UserController = require('../controllers/user.controller');

const router = express.Router();

router.route('/user/:email')
  .get(UserController.getUserByEmail);

module.exports = router;
