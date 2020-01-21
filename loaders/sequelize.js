const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config');

module.exports = async () => {
  let sequelize;

  try {
    if (env === "test") {
      sequelize = await new Sequelize({
        dialect: "sqlite",
        storage: "./test.sqlite"
      });
    } else {
      sequelize = await new Sequelize(config.database, config.username, config.password, config);
    }

    if (env === 'development') {
      sequelize.sync();
    }
    
    return sequelize;
  } catch (error) {
    throw error;
  }
};