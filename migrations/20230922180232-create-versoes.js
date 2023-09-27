'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Versoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NomeVersao: {
        type: Sequelize.STRING
      },
      Modelo_ID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Modelos', // Tabela de referência
          key: 'id' // Coluna de referência
        },
        onUpdate: 'CASCADE', // Ação a ser tomada na atualização da referência
        onDelete: 'CASCADE' // Ação a ser tomada na exclusão da referência
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Versoes');
  }
};