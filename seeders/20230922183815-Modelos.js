'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const modelosData = [
      // Modelos da BMW
      { NomeModelo: 'Série 3', Marca_ID: 1, createdAt: new Date(), updatedAt: new Date() },
      { NomeModelo: 'Série 5', Marca_ID: 1, createdAt: new Date(), updatedAt: new Date() },
      
      // Modelos da Porsche
      { NomeModelo: '911', Marca_ID: 2, createdAt: new Date(), updatedAt: new Date() },
      { NomeModelo: 'Cayenne', Marca_ID: 2, createdAt: new Date(), updatedAt: new Date() },
      
      // Modelos da Volkswagen
      { NomeModelo: 'Golf', Marca_ID: 3, createdAt: new Date(), updatedAt: new Date() },
      { NomeModelo: 'Passat', Marca_ID: 3, createdAt: new Date(), updatedAt: new Date() },
    ];

    await queryInterface.bulkInsert('Modelos', modelosData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Modelos', null, {});
  }
};
