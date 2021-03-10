const config = require(__dirname + '/../../db/config.js');
const path = require('path');
const fs = require('fs');
const Sequelize = require('sequelize');

const db = {};

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {

  sequelize = new Sequelize(config.database, config.username, config.password, config);

}

const modelUser = require('./curso');
db.curso = modelUser(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;