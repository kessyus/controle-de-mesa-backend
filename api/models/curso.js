module.exports = (sequelize, DataTypes) => {
  const cursos = sequelize.define(
    "cursos",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
      },
      coordinator: DataTypes.TEXT,
      name: DataTypes.TEXT,
      start_date: DataTypes.DATE,
      status: DataTypes.BOOLEAN,
    },
    {
      tableName: 'cursos',
      underscored: true,
      paranoid: true,
      timestamps: false
    }
  );

  return cursos;

};