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
      ambiente: DataTypes.STRING
    },
    {
      tableName: 'mesas',
      underscored: true,
      paranoid: true,
      timestamps: false
    }
  );

  return mesas;

};