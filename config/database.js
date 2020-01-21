const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('./index');

let sequelize;
if (config.dialect === "test") {
  sequelize = new Sequelize(config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

if (env === 'development') {
  sequelize.sync();
}

module.exports = sequelize;