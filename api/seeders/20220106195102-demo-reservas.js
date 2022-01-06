'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Reservas', [
      {
        //id = 1
        title: "Aula 1",
        start: '03-03-2022',
        end: '03-03-2022',
        color: "#2596be",
        instrutores_id: 1,
        pilares_id: 2,
        turmas_id: 1,
        disciplinas_id: 1,
        locais_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        //id = 2
        title: "Ana Victoria Santos",
        start: '03-04-2022',
        end: '03-03-2022',
        color: "#2596be",
        instrutores_id: 1,
        pilares_id: 2,
        turmas_id: 1,
        disciplinas_id: 1,
        locais_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
