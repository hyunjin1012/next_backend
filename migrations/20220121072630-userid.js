'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'firstName', {type: Sequelize.STRING})
    await queryInterface.removeColumn('Users', 'lastName', {type: Sequelize.STRING})
    await queryInterface.removeColumn('Users', 'imageUrl', {type: Sequelize.FLOAT})
    await queryInterface.removeColumn('Users', 'birthday', {type: Sequelize.STRING})
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
