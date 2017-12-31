'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      review: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER,
        validate: { min: 1, max: 5 }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      restaurantId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Restaurants',
          key: 'id',
          as: 'restaurantId'
        }
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reviews')
  }
}
