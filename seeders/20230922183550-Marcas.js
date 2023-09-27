"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const marcasData = [
      {
        NomeMarca: "BMW",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        NomeMarca: "Porsche",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        NomeMarca: "Volkswagen",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Marcas", marcasData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Marcas", null, {});
  },
};
