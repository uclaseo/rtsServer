const { getCollection } = require('../connections/mongoConnection');

const AdminController = {
  purgeDatabase: async (req, res) => {
    console.log('purgeDatabase called');
    try {
      const collection = getCollection('user');
      const { result } = await collection.remove({});
      console.log(result);
      if (!result.ok) {
        return res.send({
          success: false,
          message: 'purgeDatabase did not correctly removed database',
        });
      }
      return res.send({
        success: true,
      });
    } catch (error) {
      return console.error('purgeDatabase error: ', error);
    }
  },
  insertDummyUsers: async (req, res) => {
    console.log('insertDummyUsers called');
    try {
      const dummyUsers = [
        {
          name: 'Jeff Lee',
          email: 'Jeffjlee91@yahoo.com',
          role: {
            isMember: false,
            isCoach: true,
          },
          students: {
            list: [],
            count: 0,
          }
        },
        {
          name: 'Eddie Choi',
          email: 'Eddiechoi12@gmail.com',
          role: {
            isMember: false,
            isCoach: true,
          },
          students: {
            list: [],
            count: 0,
          }
        },
        {
          name: 'Sang Hyuk Yoon',
          email: ' DennyYoon91@gmail.com',
          role: {
            isMember: false,
            isCoach: true,
          },
          students: {
            list: [],
            count: 0,
          }
        },
        {
          name: 'Dong Koon Yoo',
          email: 'Dongkoon.Yoon@gmail.com',
          role: {
            isMember: false,
            isCoach: true,
          },
          students: {
            list: [],
            count: 0,
          }
        },
        {
          name: 'Hyun Soo Jo',
          email: 'hyunsu913@gmail.com',
          role: {
            isMember: false,
            isCoach: true,
          },
          students: {
            list: [],
            count: 0,
          }
        },
        {
          name: 'Daero',
          email: 'derowon@gmail.com',
          role: {
            isMember: false,
            isCoach: true,
          },
          students: {
            list: [],
            count: 0,
          }
        },
      ];
      const collection = getCollection('user');
      const { result } = await collection.insertMany(dummyUsers);
      if (!result.ok) {
        return res.send({
          success: false,
          message: 'insertDummyData did not insert correctly',
        });
      }
      return res.send({
        success: true,
      });
    } catch (error) {
      return console.error('insertDummyUsers error: ', error);
    }
  },
  resetToDummyUsers: async (req, res) => {
    console.log('resetToDummyUsers called');
    try {
      AdminController.purgeDatabase();
      AdminController.insertDummyUsers();
      return res.send({
        success: true,
      });
    } catch (error) {
      return console.error('resetToDummyUsers error: ', error);
    }
  }
};

module.exports = AdminController;
