'use strict'

module.exports = (sequelize, DataTypes) => {
  const OrderMeal = sequelize.define('OrderMeal', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })

  OrderMeal.associate = (models) => {
    OrderMeal.belongsTo(models.Order, {
      foreignKey: 'orderId',
      onDelete: 'CASCADE'
    })
    OrderMeal.belongsTo(models.Meal, {
      foreignKey: 'mealId',
      onDelete: 'CASCADE'
    })
  }

  return OrderMeal
}
