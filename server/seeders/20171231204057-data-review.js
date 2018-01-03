'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [{
      name: 'Nice',
      review: 'Fast service',
      rating: 4,
      restaurantId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Good for a low price',
      review: 'Fast service',
      rating: 3,
      restaurantId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Awesome!',
      review: 'Fast service',
      rating: 5,
      restaurantId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Good',
      review: 'Fast service',
      rating: 3,
      restaurantId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {})
  }
}
