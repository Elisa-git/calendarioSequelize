'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Instrutores', [
      {
        nomeInstrutor: "Daniel",
        ativo: 1,
        abreviacao: "Dani",
        email: "Dani@email.com",
        disponibilidade: "Disponível",
        pilares_id: 1,
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
