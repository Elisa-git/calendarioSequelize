'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Turmas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeTurma: {
        type: Sequelize.STRING
      },
      codTurma: {
        type: Sequelize.STRING
      },
      dataInicio: {
        type: Sequelize.DATEONLY
      },
      dataFim: {
        type: Sequelize.DATEONLY
      },
      numAlunos: {
        type: Sequelize.INTEGER
      },
      especializacoes_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Especializacoes', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Turmas');
  }
};