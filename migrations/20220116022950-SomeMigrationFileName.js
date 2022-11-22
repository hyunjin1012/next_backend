'use strict';
const {
  Model
} = require('sequelize');


module.exports = {
  async up (queryInterface, DataTypes) {

    await queryInterface.changeColumn('Questions', 'formId', {
      type: DataTypes.STRING});
    await queryInterface.changeColumn('Responses', 'formId', {
      type: DataTypes.STRING});
    await queryInterface.changeColumn('SelectOptions', 'questionId', {
      type: DataTypes.STRING});
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
