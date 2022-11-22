
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SelectOption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const Question = models.Question
      Question.hasMany(SelectOption)
      SelectOption.belongsTo(Question)
      const Form = models.Form
      Form.hasMany(SelectOption)
      SelectOption.belongsTo(Form)
      // define association here
    }
  }
  SelectOption.init({
    title: DataTypes.STRING,
    desc: DataTypes.STRING,
    uuid: DataTypes.UUID,
    questionId: DataTypes.INTEGER,
    qTitle: DataTypes.STRING,
    qDesc: DataTypes.STRING,
    qUuid: DataTypes.UUID,
    formUuid: DataTypes.UUID,
    formId: DataTypes.INTEGER,
    qQType: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'SelectOption',
  });
  return SelectOption;
};