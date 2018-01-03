'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OrderMeals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      orderId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Orders',
          key: 'id',
          as: 'orderId'
        }
      },
      mealId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Meals',
          key: 'id',
          as: 'mealId'
        }
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OrderMeals')
  }
}
