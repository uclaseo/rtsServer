const express = require('express');
const AdminController = require('../controllers/admin.controller');

const router = express.Router();

// router.route('/admin/purgeCollections')
//   .get(AdminController.purgeCollections);

router.route('/admin/purgeUserCollection')
  .get(AdminController.purgeUserCollection);

router.route('/admin/purgeVoteCollection')
  .get(AdminController.purgeVoteCollection);

router.route('/admin/insertDummyUsers')
  .get(AdminController.insertDummyUsers);

router.route('/admin/resetToDummyUsers')
  .get(AdminController.resetToDummyUsers);

module.exports = router;
