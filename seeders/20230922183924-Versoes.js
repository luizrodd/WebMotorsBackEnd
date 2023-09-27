'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const versoesData = [
      // Versões para o modelo BMW Série 3
      { NomeVersao: 'BMW Série 3 320i', Modelo_ID: 1, createdAt: new Date(), updatedAt: new Date() },
      { NomeVersao: 'BMW Série 3 330i', Modelo_ID: 1, createdAt: new Date(), updatedAt: new Date() },
      
      // Versões para o modelo Porsche 911
      { NomeVersao: 'Porsche 911 Carrera', Modelo_ID: 3, createdAt: new Date(), updatedAt: new Date() },
      { NomeVersao: 'Porsche 911 Turbo', Modelo_ID: 3, createdAt: new Date(), updatedAt: new Date() },
      
      // Versões para o modelo Volkswagen Golf
      { NomeVersao: 'Volkswagen Passat Comfortline', Modelo_ID: 6, createdAt: new Date(), updatedAt: new Date() },
      { NomeVersao: 'Volkswagen Golf GTI', Modelo_ID: 5, createdAt: new Date(), updatedAt: new Date() },
    ];

    await queryInterface.bulkInsert('Versoes', versoesData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Versoes', null, {});
  }
};
