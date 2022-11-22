'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.changeColumn('Questions', 'formId', {
      type: DataTypes.INTEGER});
    await queryInterface.changeColumn('Questions', 'id', {
      type: DataTypes.INTEGER});
    await queryInterface.changeColumn('Responses', 'formId', {
      type: DataTypes.INTEGER});
    await queryInterface.changeColumn('Responses', 'id', {
      type: DataTypes.INTEGER});
    await queryInterface.changeColumn('SelectOptions', 'QuestionId', {
      type: DataTypes.INTEGER});
    await queryInterface.changeColumn('SelectOptions', 'id', {
      type: DataTypes.INTEGER});
    await queryInterface.changeColumn('Forms', 'id', {
      type: DataTypes.INTEGER});
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
