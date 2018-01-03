'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Meals', [{
      name: 'McCheese',
      description: 'Bread with cheese and tiny burger',
      price: 2.50,
      restaurantId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Quarter',
      description: 'Bread with cheese and a bit bigger burger',
      price: 3.90,
      restaurantId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Stacker',
      description: 'Meat burger',
      price: 3.50,
      restaurantId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Meals', null, {})
  }
}
