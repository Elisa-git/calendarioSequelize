'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Reservas', [
      {
        nomeReserva: 'Formação Autoplay',
        descricao: 'Formação dos alunos da Autoplay 20202/1',
        dataInicio: '2021-06-05',
        dataFim: '2022-01-05',
        hrInicio: '11:00:00',
        hrFim: '17:00:00',
        cor: '#F4A460',
        instrutores_id: 1,
        turmas_id: 1,
        disciplinas_id: 1,
        locais_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeReserva: 'Formação Autocode',
        descricao: 'Formação dos alunos da Autocode 20202/1',
        dataInicio: '2022-01-05',
        dataFim: '2022-03-07',
        hrInicio: '11:00:00',
        hrFim: '17:00:00',
        cor: '#F4A460',
        instrutores_id: 2,
        turmas_id: 1,
        disciplinas_id: 1,
        locais_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeReserva: 'Formação Autoautendimento',
        descricao: 'Formação dos alunos da Autoatendimento 20202/1',
        dataInicio: '2022-01-05',
        dataFim: '2022-03-07',
        hrInicio: '11:00:00',
        hrFim: '17:00:00',
        cor: '#F4A460',
        instrutores_id: 3,
        turmas_id: 2,
        disciplinas_id: 2,
        locais_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeReserva: 'Party',
        descricao: 'Formação dos alunos da Autocode 20202/1',
        dataInicio: '2022-01-05',
        dataFim: '2022-03-07',
        hrInicio: '11:00:00',
        hrFim: '17:00:00',
        cor: '#F4A460',
        instrutores_id: 3,
        turmas_id: 2,
        disciplinas_id: 2,
        locais_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeReserva: 'Nome',
        descricao: 'Formação dos alunos da Autocode 20202/1',
        dataInicio: '2022-01-05',
        dataFim: '2022-03-07',
        hrInicio: '11:00:00',
        hrFim: '17:00:00',
        cor: '#F4A460',
        instrutores_id: 2,
        turmas_id: 1,
        disciplinas_id: 2,
        locais_id: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeReserva: 'Formação Autocode',
        descricao: 'Formação dos alunos da Autocode 20202/1',
        dataInicio: '2022-01-05',
        dataFim: '2022-03-07',
        hrInicio: '11:00:00',
        hrFim: '17:00:00',
        cor: '#F4A460',
        instrutores_id: 3,
        turmas_id: 1,
        disciplinas_id: 1,
        locais_id: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeReserva: 'Formação Autocode',
        descricao: 'Formação dos alunos da Autocode 20202/1',
        dataInicio: '2022-01-05',
        dataFim: '2022-03-07',
        hrInicio: '11:00:00',
        hrFim: '17:00:00',
        cor: '#F4A460',
        instrutores_id: 2,
        turmas_id: 1,
        disciplinas_id: 1,
        locais_id: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
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
