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
    await queryInterface.bulkInsert('mesa_cardapios', [
      {
        id_mesa: 1,
        id_cardapio: 2,
        date_time: '2021-03-15 18:32:17'
      },
      {
        id_mesa: 1,
        id_cardapio: 7,
        date_time: '2021-03-15 19:20:10'
      },
      {
        id_mesa: 1,
        id_cardapio: 11,
        date_time: '2021-03-15 19:20:58'
      },
      {
        id_mesa: 1,
        id_cardapio: 18,
        date_time: '2021-03-15 18:42:00'
      },
      {
        id_mesa: 1,
        id_cardapio: 20,
        date_time: '2021-03-15 18:43:17'
      },
      {
        id_mesa: 10,
        id_cardapio: 20,
        date_time: '2021-03-15 19:00:00'
      },
      {
        id_mesa: 10,
        id_cardapio: 20,
        date_time: '2021-03-15 19:01:05'
      },
      {
        id_mesa: 10,
        id_cardapio: 3,
        date_time: '2021-03-15 19:10:30'
      },
      {
        id_mesa: 10,
        id_cardapio: 16,
        date_time: '2021-03-15 20:22:22'
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
    await queryInterface.bulkDelete('mesa_cardapios', null, {});
  }
};