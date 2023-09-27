'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Carros', 'preco', {
      type: Sequelize.INTEGER, // Substitua pelo tipo de dados desejado
      allowNull: false, // Defina como true ou false conforme necessário
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
