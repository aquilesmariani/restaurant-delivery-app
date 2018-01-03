'use strict'

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    totalCost: {
      type: DataTypes.REAL,
      allowNull: false
    },
    latLng: {
      type: DataTypes.JSONB,
      allowNull: false
    }
  })

  Order.associate = (models) => {
    Order.hasMany(models.OrderMeal)
  }

  return Order
}
