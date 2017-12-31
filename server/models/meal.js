'use strict'
module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.REAL,
      allowNull: false
    }
  })

  Meal.associate = (models) => {
    Meal.belongsTo(models.Restaurant, {
      foreignKey: 'restaurantId',
      onDelete: 'CASCADE'
    })
  }
  return Meal
}
