'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Locais', [
      {
        // id = 1
        nomeLocal: "Sala 1",
        Sistemas: 0,
        capacidade: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id = 2
        nomeLocal: "Sala 2",
        Sistemas: 1,
        capacidade: 25,
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
