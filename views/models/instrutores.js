'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instrutores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      //Um para muitos
      
      Instrutores.hasMany(models.Reservas, {
        foreignKey: 'instrutores_fk'
      })

      //Muitos para um

      Instrutores.belongsTo(models.Pilares, {
        foreignKey: 'pilares_id'
      })
    }
  };
  Instrutores.init({
    nomeInstrutor: DataTypes.STRING,
    abreviacao: DataTypes.STRING,
    email: DataTypes.STRING,
    disponibilidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Instrutores',
  });
  return Instrutores;
};