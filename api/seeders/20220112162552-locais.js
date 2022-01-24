'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Locais', [
      {
        nomeLocal: 'Sala 1',
        sistemas: 1,
        capacidade: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeLocal: 'Sala 2',
        sistemas: 0,
        capacidade: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeLocal: 'Sala 3',
        sistemas: 0,
        capacidade: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeLocal: 'Sala 4',
        sistemas: 1,
        capacidade: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeLocal: 'Área Externa 1',
        sistemas: 0,
        capacidade: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeLocal: 'Área Externa 2',
        sistemas: 0,
        capacidade: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
