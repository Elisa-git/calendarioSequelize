'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Turmas', [
      {
        // id = 1
        nomeTurma: "Autoplay 2T2021",
        dataInicio: '03-03-2021',
        dataFim: '07-07-2021',
        numAlunos: 15,
        pilares_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id = 2
        nomeTurma: "Autocode 1T2022",
        dataInicio: '08-08-2022',
        dataFim: '09-09-2022',
        numAlunos: 30,
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
