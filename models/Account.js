'use strict';
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    name: DataTypes.STRING,
  }, {});
  Account.associate = function(models) {
    Account.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    Account.hasMany(models.Expense, {
      foreignKey: 'accountId'
    });
  };
  return Account;
};