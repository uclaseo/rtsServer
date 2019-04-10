const express = require('express');
const AdminController = require('../controllers/admin.controller');

const router = express.Router();

router.route('/admin/purgeDatabase')
  .get(AdminController.purgeDatabase);

router.route('/admin/insertDummyData')
  .get(AdminController.insertDummyData);

module.exports = router;
