module.exports = (sequelize, DataTypes) => {
  const cardapio = sequelize.define(
    "cardapio",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
      },
      produto: DataTypes.TEXT,
      preco: DataTypes.DECIMAL(10,2),
      descricao: DataTypes.TEXT,
      categoria: DataTypes.TEXT
    },
    {
      tableName: 'cardapio',
      underscored: true,
      paranoid: true,
      timestamps: false
    }
  );

  cardapio.associate = model => {
    cardapio.hasMany(model.mesaCardapio, {
      foreignKey: 'idCardapio'
    });
  };

  return cardapio;

};
