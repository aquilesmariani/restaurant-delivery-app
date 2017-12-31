'use strict'
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1, max: 5 }
    }
  })

  Review.associate = (models) => {
    Review.belongsTo(models.Restaurant, {
      foreignKey: 'restaurantId',
      onDelete: 'CASCADE'
    })
  }
  return Review
}
