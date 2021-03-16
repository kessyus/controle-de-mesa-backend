const mesa = require("./mesa");

module.exports = (sequelize, DataTypes) => {
  const mesaCardapio = sequelize.define(
    "mesaCardapio",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
      },
      dateTime: DataTypes.DATE,
      status: DataTypes.BOOLEAN
    },
    {
      tableName: 'mesaCardapio',
      underscored: true,
      paranoid: true,
      timestamps: false
    }
  );

  mesaCardapio.associate = model => {
    mesaCardapio.belongsTo(model.mesa, {
      foreignKey: 'idMesa'
    });
    mesaCardapio.belongsTo(model.cardapio, {
      foreignKey: 'idCardapio'
    });
  };

  return mesaCardapio;

};
