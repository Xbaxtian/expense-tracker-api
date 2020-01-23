'use strict';
module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define('Expense', {
    description: DataTypes.TEXT,
    amount: DataTypes.FLOAT
  }, {});
  Expense.associate = function(models) {
    Expense.belongsTo(models.Account, {
      foreignKey: 'accountId'
    });
    Expense.belongsTo(models.Category, {
      foreignKey: 'categoryId'
    });
  };
  return Expense;
};