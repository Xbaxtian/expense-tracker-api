'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    butget: {
      allowNull: true,
      type: DataTypes.FLOAT
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};