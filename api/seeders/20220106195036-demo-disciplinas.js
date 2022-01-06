'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Disciplinas', [
      {
        // id = 1
        nomeDisciplina: "Banco de dados",
        pilares_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id = 2
        nomeDisciplina: "Sequelize",
        pilares_id: 2,
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
