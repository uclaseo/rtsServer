const { getMongoDatabase } = require('../connections/mongoConnection');

const LessonController = {
  joinLesson: async (req, res) => {
    try {
      const {
        user: {
          _id,
          name,
          email,
          role: {
            isMember,
            isCoach,
          },
        },
        coachName,
      } = req.body;
      const db = getMongoDatabase();
      const collection = db.collection('user');
      // const coach = await collection.findOne({ _id, name, email });
      const coach = await collection.findOne({ name: 'Inseok Seo', email: 'illhvhlda@hotmail.com' });
      const updatedCoach = {
        ...coach,
        students: coach.students += 1,
      };
      console.log('coach', coach);
      console.log('updatedCoach', updatedCoach);
      res.send(user);
    } catch (error) {
      console.error('joinLesson error: ', error);
    }
  },
};

module.exports = LessonController;
