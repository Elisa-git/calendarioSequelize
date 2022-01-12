'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Disciplinas', [{

      nomeDisciplina: 'Front-End',
      pilares_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomeDisciplina: 'Back-End',
      pilares_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomeDisciplina: 'Git',
      pilares_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Disciplinas');
  }
};

