'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Locais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      //Um para muitos
    
      Locais.hasMany(models.Reservas, {
        foreignKey: 'locais_id'
      })
      
    }
  };
  Locais.init({
    nomeLocal: DataTypes.STRING,
    sistemas: DataTypes.BOOLEAN,
    capacidade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Locais',
    paranoid: true
  });
  return Locais;
};