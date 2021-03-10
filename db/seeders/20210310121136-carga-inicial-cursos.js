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

     await queryInterface.bulkInsert('cursos',
     [
       {
         coordinator: 'Elberth Morais',
         name: 'Curso de Java',
         start_date: '2021-04-01',
         status: true,
       },
       {
         coordinator: 'Elberth Morais',
         name: 'Curso de Ruby',
         start_date: '2021-04-01',
         status: true,
       },
       {
         coordinator: 'Elberth Morais',
         name: 'Curso de C++',
         start_date: '2021-04-01',
         status: true,
       },
       {
         coordinator: 'Elberth Morais',
         name: 'Curso de C#',
         start_date: '2021-04-01',
         status: true,
       },
       {
         coordinator: 'Elberth Morais',
         name: 'Curso de Python',
         start_date: '2021-04-01',
         status: true,
       },
       {
         coordinator: 'Elberth Morais',
         name: 'Curso de NodeJs',
         start_date: '2021-04-01',
         status: true,
       },
     ],
     {
       updateOnDuplicate: ['name', 'coordinator', 'start_date', 'status'],
       ignoreDuplicates: true
     }
   )

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('cursos', null, {});
  }
};
