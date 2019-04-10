const express = require('express');
const UserController = require('../controllers/user.controller');

const router = express.Router();

router.route('/user/:email')
  .get(UserController.getUserByEmail);

router.route('/user/create')
  .post(UserController.createUser);

router.route('/user/coach/getCoaches')
  .get(UserController.getCoaches);

module.exports = router;
