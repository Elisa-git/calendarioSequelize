module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Instrutores', [{

      nomeInstrutor: 'Lucas Tessinari',
      abreviacao: 'Lucas T.',
      email: 'lucastessinari@autoglass.com.br',
      disponibilidade: 'Disponivel',
      pilares_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomeInstrutor: 'Eliza Mesquita',
      abreviacao: 'Eliza M.',
      email: 'elizamesquita@autoglass.com.br',
      disponibilidade: 'Disponivel',
      pilares_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomeInstrutor: 'Gabriel Palhares',
      abreviacao: 'Gabriel P.',
      email: 'gabrielpalhares@autoglass.com.br',
      disponibilidade: 'Férias',
      pilares_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]

    );

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Instrutores');

  }
};

