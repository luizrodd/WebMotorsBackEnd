'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const carrosData = [
      // Carro da BMW Série 3
      {
        Marca_ID: 1, // BMW
        Modelo_ID: 1, // Série 3
        Versao_ID: 1, // BMW Série 3 320i
        Quilometragem: 50000,
        Cor: 'Azul',
        Carroceria: 'Sedan',
        Cambio: 'Automático',
        foto: 'bmw320i.jpg',
        anoFabricacao: 2020,
        anoModelo: 2021,
        preco:50000,
        Combustivel: 'Gasolina',
        Localidade: 'São Paulo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Carro da Porsche 911
      {
        Marca_ID: 2, // Porsche
        Modelo_ID: 3, // 911
        Versao_ID: 3, // Porsche 911 Carrera
        Quilometragem: 20000,
        Cor: 'Vermelho',
        Carroceria: 'Coupé',
        Cambio: 'Manual',
        foto: 'porsche911.jpg',
        anoFabricacao: 2022,
        anoModelo: 2023,
        preco:10000,
        Combustivel: 'Gasolina',
        Localidade: 'Los Angeles',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Carro da Volkswagen Golf
      {
        Marca_ID: 3, // Volkswagen
        Modelo_ID: 5, // Golf
        Versao_ID: 6, // Volkswagen Golf GTI
        Quilometragem: 15000,
        Cor: 'Branco',
        Carroceria: 'Hatchback',
        Cambio: 'Automático',
        foto: 'vwgolf.jpg',
        anoFabricacao: 2021,
        anoModelo: 2022,
        preco:30000,
        Combustivel: 'Gasolina',
        Localidade: 'Berlim',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Marca_ID: 3, // Volkswagen
        Modelo_ID: 6, // Golf
        Versao_ID: 6, // Volkswagen Golf GTI
        Quilometragem: 15000,
        Cor: 'Branco',
        Carroceria: 'Sedan',
        Cambio: 'Automático',
        foto: 'vwgolf.jpg',
        anoFabricacao: 2021,
        anoModelo: 2022,
        preco:50000,
        Combustivel: 'Gasolina',
        Localidade: 'Matão',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Adicione mais carros, se necessário
    ];

    await queryInterface.bulkInsert('Carros', carrosData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Carros', null, {});
  }
};
