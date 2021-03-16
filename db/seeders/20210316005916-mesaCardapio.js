'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('mesaCardapio', [
      {
        idMesa: 1,
        idCardapio: 2,
        datetime: '2021-03-15 18:32:17'
      },
      {
        idMesa: 1,
        idCardapio: 7,
        datetime: '2021-03-15 19:20:10'
      },
      {
        idMesa: 1,
        idCardapio: 11,
        datetime: '2021-03-15 19:20:58'
      },
      {
        idMesa: 1,
        idCardapio: 18,
        datetime: '2021-03-15 18:42:00'
      },
      {
        idMesa: 1,
        idCardapio: 20,
        datetime: '2021-03-15 18:43:17'
      },
      {
        idMesa: 10,
        idCardapio: 20,
        datetime: '2021-03-15 19:00:00'
      },
      {
        idMesa: 10,
        idCardapio: 20,
        datetime: '2021-03-15 19:01:05'
      },
      {
        idMesa: 10,
        idCardapio: 3,
        datetime: '2021-03-15 19:10:30'
      },
      {
        idMesa: 10,
        idCardapio: 16,
        datetime: '2021-03-15 20:22:22'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('mesaCardapio', null, {});
  }
};