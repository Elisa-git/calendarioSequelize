'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Reservas', [
      {
        title: "Autoplay",
        start: "2021-12-27 12:30:00",
        end: "2021-12-27 18:00:00",
        color: "#2596be",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Autocode",
        start: "2021-12-27 15:30:00",
        end: "2021-12-27 18:00:00",
        color: "#2596be",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      // {
      //   title: "Autocode",
      //   start: "2021-12-27 12:30:00",
      //   end: "2021-12-27 18:00:00",
      //   color: "#2596be",
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reservas', null, {});
  }
};
