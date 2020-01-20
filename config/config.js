

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/database.json')[env];

module.exports = config;