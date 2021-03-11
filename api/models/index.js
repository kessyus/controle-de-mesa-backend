const config = require(__dirname + '/../../db/config.js');
const Sequelize = require('sequelize');
const modelCurso = require('./curso');
const modelMesa = require('./mesa');

const db = {};

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// chamando o model
db.curso = modelCurso(sequelize, Sequelize.DataTypes);
db.mesa = modelMesa(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;