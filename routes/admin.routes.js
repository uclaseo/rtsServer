const express = require('express');
const AdminController = require('../controllers/admin.controller');

const router = express.Router();

router.route('/admin/purgeDatabase')
  .get(AdminController.purgeDatabase);

router.route('/admin/insertDummyUsers')
  .get(AdminController.insertDummyUsers);

router.route('/admin/resetToDummyUsers')
  .get(AdminController.resetToDummyUsers);

module.exports = router;
