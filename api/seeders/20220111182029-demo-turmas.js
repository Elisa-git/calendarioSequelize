module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Turmas', [{

      nomeTurma: 'Autoplay',
      codTurma: '20212',
      dataInicio: '2021-01-20',
      dataFim: '2022-03-28',
      numAlunos: '20',
      especializacoes_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomeTurma: 'Formação Autoplay',
      codTurma: '20212',
      dataInicio: '2021-06-20',
      dataFim: '2022-03-28',
      numAlunos: '30',
      especializacoes_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomeTurma: 'Formação Autocode',
      codTurma: '20212',
      dataInicio: '2022-01-20',
      dataFim: '2022-03-28',
      numAlunos: '25',
      especializacoes_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Turmas');
  }
};
