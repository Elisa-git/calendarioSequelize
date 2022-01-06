'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Pilares', [
      {
        //id = 1
        nomePilar: "EAD/Ti",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        //id = 2
        nomePilar: "Serviços",
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
