'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Carros.belongsTo(models.Marcas, { foreignKey: 'Marca_ID', as: 'marcas' });
      Carros.belongsTo(models.Modelos, { foreignKey: 'Modelo_ID', as: 'modelos' });
      Carros.belongsTo(models.Versoes, { foreignKey: 'Versao_ID', as: 'versoes' });

    }
  }
  Carros.init({
    Marca_ID: DataTypes.INTEGER,
    Modelo_ID: DataTypes.INTEGER,
    Versao_ID: DataTypes.INTEGER,
    Quilometragem: DataTypes.INTEGER,
    Cor: DataTypes.STRING,
    Carroceria: DataTypes.STRING,
    Cambio: DataTypes.STRING,
    foto: DataTypes.STRING,
    preco: DataTypes.INTEGER,
    anoFabricacao: DataTypes.INTEGER,
    anoModelo: DataTypes.INTEGER,
    Combustivel: DataTypes.STRING,
    Localidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Carros',
  });
  return Carros;
};