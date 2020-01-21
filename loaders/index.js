const sequelizeLoader = require('./sequelize');
const expressLoader = require('./express');

module.exports = async ({ expressApp }) => {
  // const sequelize = await sequelizeLoader();
  // console.log('✌️  DB loaded and connected!');

  await expressLoader({ app: expressApp });
  console.log('✌️ Express loaded');
}