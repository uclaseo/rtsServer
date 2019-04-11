const { getCollection } = require('../connections/mongoConnection');

const AdminController = {
  // purgeCollections: async (req, res) => {
  //   console.log('purgeCollections called');
  //   try {
  //     const collection = getCollection('user');
  //     const { result } = await collection.deleteMany({});
  //     if (!result.ok) {
  //       return res.send({
  //         success: false,
  //         message: 'purgeCollections did not correctly purge all collections',
  //       });
  //     }
  //     return res.send({
  //       success: true,
  //     });
  //   } catch (error) {
  //     return console.error('purgeCollections error: ', error);
  //   }
  // },
  purgeUserCollection: async (req, res) => {
    console.log('purgeUserCollection called');
    try {
      const collection = getCollection('user');
      const { result } = await collection.deleteMany({});
      if (!result.ok) {
        return res.send({
          success: false,
          message: 'purgeUserCollection did not correctly purge user collection',
        });
      }
      return res.send({
        success: true,
      });
    } catch (error ) {
      return console.error('purgeUserCollection error: ', error);
    }
  },
  purgeVoteCollection: async (req, res) => {
    console.log('purgeVoteCollection called');
    try {
      const collection = getCollection('vote');
      const { result } = await collection.deleteMany({});
      if (!result.ok) {
        return res.send({
          success: false,
          message: 'purgeVoteCollection did not correctly purge vote collection',
        });
      }
      return res.send({
        success: true,
      });
    } catch (error) {
      return console.error('purgeVoteCollection error: ', error);
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
          message: 'insertDummyData did not correctly insert',
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
