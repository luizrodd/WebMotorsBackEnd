'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Modelos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Associação de Modelos com Marcas
  Modelos.belongsTo(models.Marcas, { foreignKey: 'Marca_ID', as: 'marcas' });
  // Associação de Modelos com Versoes
  Modelos.hasMany(models.Versoes, { foreignKey: 'Modelo_ID', as: 'versoes' });
    }
  }
  Modelos.init({
    NomeModelo: DataTypes.STRING,
    Marca_ID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Modelos',
  });
  return Modelos;
};