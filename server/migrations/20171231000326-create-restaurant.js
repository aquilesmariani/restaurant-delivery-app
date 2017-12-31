'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      logo: {
        type: Sequelize.STRING
      },
      legalName: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.REAL,
        validate: { min: 1, max: 5 }
      },
      commercialEmail: {
        type: Sequelize.STRING
      },
      adminNumber: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      Location: {
        type: Sequelize.JSONB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Restaurants')
  }
}
