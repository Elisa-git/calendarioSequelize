'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Instrutores', [
      {
        // id = 1
        nomeInstrutor: "Daniel Gramlich",
        ativo: true,
        abreviacao: "Dani",
        email: "daniel.gramlich@email.com",
        disponibilidade: "Disponível",
        pilares_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id = 2
        nomeInstrutor: "Silvio Santos",
        ativo: true,
        abreviacao: "Silvao",
        email: "silvio.santos@email.com",
        disponibilidade: "Férias",
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
