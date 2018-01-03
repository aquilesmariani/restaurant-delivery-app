'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Restaurants', [{
      logo: 'http://loremipsum.com/40/40',
      legalName: 'Mc Donalds',
      rating: 3,
      commercialEmail: 'mcdonalds@mailinator.com',
      adminNumber: '+13191203',
      address: '593 Carrollton St, Temple, GA 30179, EE. UU.',
      Location: '{ "lat": "33.4426886", "lng": "-84.7096135" }',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      logo: 'http://loremipsum.com/40/40',
      legalName: 'BK',
      rating: 5,
      commercialEmail: 'bk@mailinator.com',
      adminNumber: '+123191203',
      address: 'Unnamed road',
      Location: '{ "lat": "37.394470", "lng": "-122.084022" }',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Restaurants', null, {})
  }
}
