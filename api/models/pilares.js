'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pilares extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      //Um para muitos

      Pilares.hasMany(models.Disciplinas, {
        foreignKey: 'pilares_fk'
      })
      Pilares.hasMany(models.Turmas, {
        foreignKey: 'pilares_fk'
      })
      Pilares.hasMany(models.Instrutores, {
        foreignKey: 'pilares_fk'
      })
    }
  };
  Pilares.init({
    nomePilar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pilares',
  });
  return Pilares;
};