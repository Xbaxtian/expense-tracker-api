'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    icon: DataTypes.STRING
  }, {});
  Category.associate = function (models) {
    Category.hasMany(models.Expense, {
      foreignKey: 'categoryId'
    });
  };
  return Category;
};