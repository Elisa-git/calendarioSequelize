'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Especializacoes extends Model {
    static associate(models) {

      //Um para muitos

      Especializacoes.hasMany(models.Turmas, {
        foreignKey: 'especializacoes_id'
      })

      //Muitos para um

      Especializacoes.belongsTo(models.Pilares, {
        foreignKey: 'pilares_id'
      })
    }
  };
  Especializacoes.init({
    nomeEspecializacoes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Especializacoes',
  });
  return Especializacoes;
};