'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const Response = models.Response
      Response.hasMany(Answer)
      Answer.belongsTo(Response)
      // const User = models.User
      // Answer.belongsTo(User)
      // User.hasMany(Answer)
      // const Question = models.Question
      // Question.hasMany(Answer)
      // Answer.belongsTo(Question)
      // define association here
    }
  }
  Answer.init({
    responseId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    desc: DataTypes.STRING,
    uuid: DataTypes.UUID,
    qUuid: DataTypes.UUID,
    responseUuid: DataTypes.UUID,
    formUuid: DataTypes.UUID,
    checked: DataTypes.BOOLEAN,
    qTitle: DataTypes.STRING,
    qDesc: DataTypes.STRING,
    qQType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};