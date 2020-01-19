const { User } = require('../models');
const bcrypt = require('bcrypt');

class UserService {
  async getAll() {
    try {
      const userRecords = await User.findAll()
      return { users: userRecords };
    } catch (e) {
      throw e;
    }
  }

  async signUp(user) {
    try {
      const userRecord = User.build(user);
      userRecord.password = await bcrypt.hash(user.password, 10);
      await userRecord.save();

      return { user: userRecord.toJSON() };
    } catch (e) {
      throw e;
    }
  }
}

module.exports = new UserService();
