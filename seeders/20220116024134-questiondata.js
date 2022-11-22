'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Questions', [{
      title: "gogo",
      desc: "yes",
      qType:"checkbox",
      uuid: "uuid",
      formId:"asf"
    },{
      title: "gogo",
      desc: "yes",
      qType:"checkbox",
      uuid: "uui",
      formId:"asf"
    },{
      title: "gogo",
      desc: "yes",
      qType:"checkbox",
      uuid: "uu",
      formId:"asf"
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
