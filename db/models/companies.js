'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Companies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Companies.init({
    companyId: DataTypes.STRING,
    address: DataTypes.STRING,
    sector: DataTypes.STRING,
    name: DataTypes.STRING,
    tags: DataTypes.ARRAY(DataTypes.STRING),
    ceo: DataTypes.STRING,
    numberEmployees: DataTypes.INTEGER,
    score: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Companies',
  });
  return Companies;
};