'use strict';


module.exports = {
  async up (queryInterface, DataTypes, Sequelize) {
    
    await queryInterface.changeColumn('Questions', 'id', {
      type: DataTypes.INTEGER,
      autoIncrement: true});
    
    await queryInterface.changeColumn('Responses', 'id', {
      type: DataTypes.INTEGER,
      autoIncrement: true});
   
    await queryInterface.changeColumn('SelectOptions', 'id', {
      type: DataTypes.INTEGER,
      autoIncrement: true});
    await queryInterface.changeColumn('Forms', 'id', {
      type: DataTypes.INTEGER,
      autoIncrement: true});
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
