const OrderMeal = require('../models').OrderMeal
const Meal = require('../models').Meal

module.exports = {
  create (orderId, meals) {
    const promises = []
    meals.forEach((meal, index) => {
      promises[index] = new Promise((resolve, reject) => {
        Meal.findById(meal.id)
          .then(mealById => {
            if (mealById) {
              OrderMeal
                .create({
                  orderId,
                  mealId: meal.id,
                  quantity: meal.quantity
                })
                .then((orderMeal) => resolve(orderMeal))
            } else {
              reject(new Error(`Meal with ID=${meal.id} doesn't exist`))
            }
          })
          .catch(err => {
            reject(
              new Error(err)
            )
          })
      })
    })
    return Promise.all(promises)
  }
}
