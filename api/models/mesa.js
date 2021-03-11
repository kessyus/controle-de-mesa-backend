module.exports = (sequelize, DataTypes) => {
  const mesa = sequelize.define(
    "mesa",
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
      ambiente: DataTypes.STRING
    },
    {
      tableName: 'mesa',
      underscored: true,
      paranoid: true,
      timestamps: false
    }
  );

  return mesa;

};