'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Modelos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NomeModelo: {
        type: Sequelize.STRING
      },
      Marca_ID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Marcas', // Tabela de referência
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
    await queryInterface.dropTable('Modelos');
  }
};