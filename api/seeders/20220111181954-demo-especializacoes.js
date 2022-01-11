'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Especializacoes', [{

      nomeEspecializacoes: 'Autoplay',
      pilares_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomeEspecializacoes: 'Autocode',
      pilares_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomeEspecializacoes: 'Autoatendimento',
      pilares_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Especializacoes');
  }
};
