'use strict';


module.exports = {
  async up (queryInterface, DataTypes, Sequelize) {
    await queryInterface.changeColumn('Questions', 'formId', {
      type: DataTypes.UUID});
    await queryInterface.changeColumn('Questions', 'id', {
      type: DataTypes.UUID});
    await queryInterface.changeColumn('Responses', 'formId', {
      type: DataTypes.UUID});
    await queryInterface.changeColumn('Responses', 'id', {
      type: DataTypes.UUID});
    await queryInterface.changeColumn('SelectOptions', 'QuestionId', {
      type: DataTypes.UUID});
    await queryInterface.changeColumn('SelectOptions', 'id', {
      type: DataTypes.UUID});
    await queryInterface.changeColumn('Forms', 'id', {
      type: DataTypes.UUID});
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
