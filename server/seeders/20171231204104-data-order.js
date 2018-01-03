'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [{
      address: '200 S Rengstorff Ave Mountain View, CA 94040',
      totalCost: 15.4,
      latLng: '{ "lat": "37.401152", "lng": "-122.098614" }',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      address: '959 San Pierre Way Mountain View, CA 94043',
      totalCost: 9,
      latLng: '{ "lat": "37.406407", "lng": "-122.082123" }',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      address: '621 Tennyson Ave Palo Alto, CA 94301',
      totalCost: 12.5,
      latLng: '{ "lat": "37.438880", "lng": "-122.142171" }',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {})
  }
}
