'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Disciplinas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      //Um para muitos
    
      Disciplinas.hasMany(models.Reservas, {
        foreignKey: 'disciplinas_id'
      })

      //Muitos para um

      Disciplinas.belongsTo(models.Pilares, {
        foreignKey: 'pilares_id'
      })
    }
  };
  Disciplinas.init({
    nomeDisciplina: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Disciplinas',
  });
  return Disciplinas;
};