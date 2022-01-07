'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Reservas', [
      {
        title: "Aula 1",
        start: "2022-01-06",
        end: "2022-01-06",
        color: "#ffff",
        instrutores_id: 1,
        pilares_id: 1,
        turmas_id: 1,
        disciplinas_id: 1,
        locais_id: 1,
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
