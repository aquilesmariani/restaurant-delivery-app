'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OrderMeals', [{
      quantity: 2,
      orderId: 1,
      mealId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      quantity: 2,
      orderId: 1,
      mealId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      quantity: 3,
      orderId: 2,
      mealId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      quantity: 4,
      orderId: 3,
      mealId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('OrderMeals', null, {})
  }
}
