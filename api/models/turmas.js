'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      //Um para muitos
    
      Turmas.hasMany(models.Reservas, {
        foreignKey: 'disciplinas_fk'
      })

      //Muitos para um

      Turmas.belongsTo(models.Especializacoes, {
        foreignKey: 'especializacoes_id'
      })
    }
  };
  Turmas.init({
    nomeTurma: DataTypes.STRING,
    codTurma: DataTypes.STRING,
    dataInicio: DataTypes.DATE,
    dataFim: DataTypes.DATE,
    numAlunos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Turmas',
  });
  return Turmas;
};