const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/database.json')[env];

let sequelize;
if (config.dialect === "sqlite") {
  sequelize = new Sequelize(config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

if (env !== 'production') {
  sequelize.sync();
}

module.exports = sequelize;