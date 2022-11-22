'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.removeColumn('Forms', 'uuid');
    // await queryInterface.removeColumn('Questions', 'uuid');
    // await queryInterface.removeColumn('SelectOptions', 'uuid');
    // await queryInterface.removeColumn('Responses', 'uuid');
    // await queryInterface.removeColumn('Users', 'uuid');
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
