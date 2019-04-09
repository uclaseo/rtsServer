const express = require('express');
const UserController = require('../controllers/user.controller');

const router = express.Router();

router.route('/user/:email')
  .get(UserController.getUserByEmail);

router.route('/user')
  .post(UserController.createUser);

module.exports = router;
