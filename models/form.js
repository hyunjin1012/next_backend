'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Form extends Model {
    
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const Question = models.Question
      Question.belongsTo(Form)
      Form.hasMany(Question)
      const Response = models.Response
      Response.belongsTo(Form)
      Form.hasMany(Response)
      const SelectOption = models.SelectOption
      SelectOption.belongsTo(Form)
      const User = models.User
      User.hasMany(Form)
      Form.belongsTo(User)
      // const User = model.User
      // Form.belongsTo(User)
      // User.hasMany(Form)
      // define association here
    }
  }
  Form.init({
    // UserId: DataTypes.INTEGER,
    formTitle: DataTypes.STRING,
    formDesc: DataTypes.STRING,
    uuid: DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'Form',
  });
  return Form;
};