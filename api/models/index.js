const config = require(__dirname + '/../../db/config.js');
const Sequelize = require('sequelize');
const modelMesa = require('./mesa');
const modelCardapio = require('./cardapio');
const modelMesaCardapio = require('./mesaCardapio');

const db = {};

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// chamando o model
db.mesa = modelMesa(sequelize, Sequelize.DataTypes);
db.cardapio = modelCardapio(sequelize, Sequelize.DataTypes);
db.mesaCardapio = modelMesaCardapio(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;