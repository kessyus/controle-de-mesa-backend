const cardapio = require("./cardapio");

module.exports = (sequelize, DataTypes) => {
  const mesas = sequelize.define(
    "mesas",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
      },
      numero: DataTypes.INTEGER,
      qtd_cadeiras: DataTypes.INTEGER,
      ambiente: DataTypes.TEXT
    },
    {
      tableName: 'mesas',
      underscored: true,
      paranoid: true,
      timestamps: false
    }
  );

  mesas.associate = model => {
    mesas.hasMany(model.mesaCardapio, {
      foreignKey: 'idMesa'
    });
  };

  return mesas;

};
