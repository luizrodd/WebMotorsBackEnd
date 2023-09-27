'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Marcas', 'foto', {
      type: Sequelize.STRING, // Substitua pelo tipo de dados desejado
      allowNull: true, // Defina como true ou false conforme necessário
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
