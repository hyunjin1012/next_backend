'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Response extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const Form = models.Form
      Form.hasMany(Response)
      Response.belongsTo(Form)
      const Answer = models.Answer
      Answer.belongsTo(Response)
      Response.hasMany(Answer)
      // const User = models.User
      // User.hasMany(Response)
      // Response.belongsTo(User)
      // const Question = models.Question
      // Question.belongsTo(Response)
      // Response.belongsTo(Question)
      // define association here
    }
  }
  Response.init({
    // id:{
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   allowNull: false,
    //   primaryKey: true
    // },
    // userId: DataTypes.INTEGER,
    formId: DataTypes.INTEGER,
    formUuid: DataTypes.UUID,
    formTitle: DataTypes.STRING,
    formDesc: DataTypes.STRING,
    uuid: DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'Response',
  });
  return Response;
};