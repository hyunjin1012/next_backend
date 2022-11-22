'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('SelectOptions', 'qUuid', {type: Sequelize.STRING})
    await queryInterface.addColumn('SelectOptions', 'checked', {type: Sequelize.BOOLEAN})
    await queryInterface.addColumn('SelectOptions', 'qQType', {type: Sequelize.STRING})
    await queryInterface.addColumn('Questions', 'formUuid', {type: Sequelize.STRING})
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
