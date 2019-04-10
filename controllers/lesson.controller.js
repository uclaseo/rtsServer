const { getCollection } = require('../connections/mongoConnection');

const LessonController = {
  joinLesson: async (req, res) => {
    console.log('joinLesson called');
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

      const newList = coach.students.list.slice();
      const newCount = coach.students.count + 1;
      const index = newList.findIndex((student) => {
        return student.name === user.name && student.email === user.email;
      });

      if (index >= 0) {
        return res.send({
          success: false,
          message: 'You are already registered to the coach',
        });
      }
      newList.push({
        name: user.name,
        email: user.email,
      });

      const collection = getCollection('user');
      const updatedCoach = await collection.findOneAndUpdate(
        { name: coach.name, email: coach.email },
        {
          $set: {
            students: {
              list: newList,
              count: newCount,
            },
          },
          // $push: { students: { list: user } },
        },
        {
          returnOriginal: false,
        },
      );
      if (!updatedCoach.ok) {
        return res.send({
          success: false,
          message: 'The coach is not updated correctly',
        });
      }


      const updatedUser = await collection.findOneAndUpdate(
        { name: user.name, email: user.email },
        {
          $set: {
            coach: {
              coach: updatedCoach.value,
              isRegistered: true,
            },
          },
        },
        {
          returnOriginal: false,
        },
      );

      if (!updatedUser.ok) {
        return res.send({
          success: false,
          message: 'The user is not updated correctly',
        });
      }

      return res.send({
        success: true,
        user: updatedUser.value,
        coach: updatedCoach.value,
      });

    } catch (error) {
      return console.error('joinLesson error: ', error);
    }
  },
};

module.exports = LessonController;
