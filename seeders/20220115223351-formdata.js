'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Forms', [{
     uuid: "sea",
      formTitle: "gogo",
      formDesc: "asd",
   
      
      
    },{
      uuid: "sef",
      formTitle: "gogo",
      formDesc: "asd",
   

    },{
      uuid: "ser",
      formTitle: "gogo",
      formDesc: "asd",


    }], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
