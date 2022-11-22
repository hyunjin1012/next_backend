'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const Form = models.Form
      User.hasMany(Form)
      Form.belongsTo(User)
      // const Response = models.Response
      // User.hasMany(Response)
      // Response.belongsTo(User)
      // const Answer = models.Answer
      // Answer.belongsTo(User)
      // User.hasMany(Answer)
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};