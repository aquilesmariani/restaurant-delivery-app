'use strict'
module.exports = (sequelize, DataTypes) => {
  var Restaurant = sequelize.define('Restaurant', {
    logo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    legalName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.REAL,
      validate: { min: 1, max: 5 }
    },
    commercialEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    adminNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Location: {
      type: DataTypes.JSONB,
      allowNull: false
    }
  })

  Restaurant.associate = (models) => {
    Restaurant.hasMany(models.Meal, { foreignKey: 'restaurantId', as: 'meals' })
    Restaurant.hasMany(models.Review, { foreignKey: 'restaurantId', as: 'reviews' })
  }
  return Restaurant
}
