'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const Form = models.Form
      Form.hasMany(Question)
      Question.belongsTo(Form)
      const SelectOption=models.SelectOption
      Question.hasMany(SelectOption)
      SelectOption.belongsTo(Question)
      // const Answer = models.Answer
      // Question.hasMany(Answer)
      // Answer.belongsTo(Question)
 
      // define association here
    }
  }
  Question.init({
    // id:{
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   allowNull: false,
    //   primaryKey: true
    // },
    title: DataTypes.STRING,
    desc: DataTypes.STRING,
    formId: DataTypes.INTEGER,
    formUuid: DataTypes.UUID,
    qType: DataTypes.STRING,
    uuid: DataTypes.UUID,
    // UserId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};