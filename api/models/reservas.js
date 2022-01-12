'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      Reservas.belongsTo(models.Instrutores, {
        foreignKey: 'instrutores_id'
      });
      Reservas.belongsTo(models.Turmas, {
        foreignKey: 'turmas_id'
      });
      Reservas.belongsTo(models.Disciplinas, {
        foreignKey: 'disciplinas_id'
      });
      Reservas.belongsTo(models.Locais, {
        foreignKey: 'locais_id'
      });
    }
  };
  Reservas.init({
    nomeReserva: DataTypes.STRING,
    descricao: DataTypes.STRING,
    dataInicio: DataTypes.DATE,
    dataFim: DataTypes.DATE,
    hrInicio: DataTypes.TIME,
    hrFim: DataTypes.TIME,
    cor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reservas',
  });
  return Reservas;
};