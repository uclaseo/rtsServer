const express = require('express');
const LessonController = require('../controllers/lesson.controller');

const router = express.Router();

router.route('/lesson/join')
  .post(LessonController.joinLesson);

module.exports = router;
