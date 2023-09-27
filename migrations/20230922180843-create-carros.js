'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      Modelo_ID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Modelos', // Tabela de referência
          key: 'id' // Coluna de referência
        },
        onUpdate: 'CASCADE', // Ação a ser tomada na atualização da referência
        onDelete: 'CASCADE' // Ação a ser tomada na exclusão da referência
      },
      Versao_ID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Versoes', // Tabela de referência
          key: 'id' // Coluna de referência
        },
        onUpdate: 'CASCADE', // Ação a ser tomada na atualização da referência
        onDelete: 'CASCADE' // Ação a ser tomada na exclusão da referência
      },
      Quilometragem: {
        type: Sequelize.INTEGER
      },
      Cor: {
        type: Sequelize.STRING
      },
      Carroceria: {
        type: Sequelize.STRING
      },
      Cambio: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING
      },
      anoFabricacao: {
        type: Sequelize.INTEGER
      },
      anoModelo: {
        type: Sequelize.INTEGER
      },
      Combustivel: {
        type: Sequelize.STRING
      },
      Localidade: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Carros');
  }
};