'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Versoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Associação de Versoes com Modelos
     Versoes.belongsTo(models.Modelos, { foreignKey: 'Modelo_ID', as: 'modelos' })
    }
  }
  Versoes.init({
    NomeVersao: DataTypes.STRING,
    Modelo_ID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Versoes',
  });
  return Versoes;
};