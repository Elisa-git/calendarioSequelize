'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservas extends Model {
    static associate(models) {
      Reservas.belongsTo(models.Instrutores, {
        foreignKey: 'instrutores_id'
      });
      Reservas.belongsTo(models.Disciplinas, {
        foreignKey: 'disciplinas_id'
      });
      Reservas.belongsTo(models.Turmas, {
        foreignKey: 'turmas_id'
      });
      Reservas.belongsTo(models.Locais, {
        foreignKey: 'locais_id'
      });
    }
  };
  Reservas.init({
    title: DataTypes.STRING,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reservas',
  });
  return Reservas;
};