'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Pilares', [{

      nomePilar: 'EAD',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomePilar: 'TI',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomePilar: 'Engenharia',
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pilares');
  }
};
