'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeReserva: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      dataInicio: {
        type: Sequelize.DATEONLY
      },
      dataFim: {
        type: Sequelize.DATEONLY
      },
      hrInicio: {
        type: Sequelize.TIME
      },
      hrFim: {
        type: Sequelize.TIME
      },
      cor: {
        type: Sequelize.STRING
      },
      instrutores_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Instrutores', key: 'id'}
      },
      turmas_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Turmas', key: 'id'}
      },
      disciplinas_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Disciplinas', key: 'id'}
      },
      locais_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Locais', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Reservas');
  }
};