'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.changeColumn('Questions', 'uuid', {
      type: DataTypes.UUID,
      });
    
    await queryInterface.changeColumn('Responses', 'uuid', {
      type: DataTypes.UUID,
      });
   
    await queryInterface.changeColumn('SelectOptions', 'uuid', {
      type: DataTypes.UUID,
      });
    await queryInterface.changeColumn('Forms', 'uuid', {
      type: DataTypes.UUID,
      });
    await queryInterface.changeColumn('Questions', 'formUuid', {
      type: DataTypes.UUID,
      });
    await queryInterface.changeColumn('SelectOptions', 'qUuid', {
      type: DataTypes.UUID,
      });
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
