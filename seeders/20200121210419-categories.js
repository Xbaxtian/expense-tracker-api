'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Categories', [
      {
        name: 'House',
        color: 'red',
        icon: 'house.svg'
      },
      {
        name: 'Transport',
        color: 'red',
        icon: 'house.svg'
      },
      {
        name: 'Food',
        color: 'red',
        icon: 'house.svg'
      },
      {
        name: 'Health',
        color: 'red',
        icon: 'house.svg'
      },
      {
        name: 'Taxi',
        color: 'red',
        icon: 'house.svg'
      },
      {
        name: 'Phone',
        color: 'red',
        icon: 'house.svg'
      },
      {
        name: 'Clothes',
        color: 'red',
        icon: 'house.svg'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
