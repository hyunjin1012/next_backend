'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn('Questions', 'formId', {
      type: DataTypes.STRING,});
    queryInterface.changeColumn('Responses', 'formId', {
      type: DataTypes.STRING,});
    queryInterface.changeColumn('SelectOptions', 'questionId', {
      type: DataTypes.STRING,});
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
