const Meal = require('../models').Meal

module.exports = {
  create (req, res) {
    return Meal
      .create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        restaurantId: req.params.restaurantId
      })
      .then(meal => res.status(201).send(meal))
      .catch(error => res.status(400).send(error))
  }
}
