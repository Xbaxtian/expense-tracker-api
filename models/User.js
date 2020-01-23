'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {
    async validPassword(password) {
      return await bcrypt.compare(password, this.password)
    };
  }

  User.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    butget: {
      allowNull: true,
      type: DataTypes.FLOAT
    }
  }, { sequelize });

  User.associate = function(models) {
    User.hasMany(models.Account, {
      foreignKey: 'userId'
    });
  };
  return User;
};