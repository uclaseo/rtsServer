const { getMongoDatabase } = require('../connections/mongoConnection');

const LessonController = {
  joinLesson: async (req, res) => {
    try {
      const {
        user,
        coach,
      } = req.body;

      if (!coach.role.isCoach) {
        return res.send({
          success: false,
          message: 'The selected person is not a coach',
        });
      }

      const db = getMongoDatabase();
      const collection = db.collection('user');
      const updatedCoach = await collection.findOneAndUpdate(
        { name: coach.name, email: coach.email },
        {
          $set: { students: coach.students + 1 },
        },
        {
          returnOriginal: false,
        },
      );
      if (!updatedCoach.ok) {
        res.send({
          success: false,
          message: 'The coach is not updated correctly',
        });
      }

      return res.send({
        success: true,
        coach: updatedCoach.value,
      });

    } catch (error) {
      console.error('joinLesson error: ', error);
    }
  },
};

module.exports = LessonController;
