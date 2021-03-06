'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Instrutores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeInstrutor: {
        type: Sequelize.STRING
      },
      abreviacao: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      disponibilidade: {
        type: Sequelize.STRING
      },
      pilares_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Pilares', key: 'id'}
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Instrutores');
  }
};