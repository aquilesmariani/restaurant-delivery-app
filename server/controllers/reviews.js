const Review = require('../models').Review

const create = (req, res, next) => {
  try {
    Review
      .create({
        name: req.body.name,
        review: req.body.review,
        rating: req.body.rating,
        restaurantId: req.params.restaurantId
      })
      .then(post => res.status(201).send(post))
    next()
  } catch (err) {
    const msg = err.errors[0].path === 'rating' ? 'Rating must be between 1 and 5' : null
    res.status(400).send(msg || err)
  }
}

// GET request
const list = (req, res, next) => {
  try {
    Review.findAll({ where: { restaurantId: req.params.restaurantId } })
      .then(restaurantReviews => res.status(200).send(restaurantReviews))
    next()
  } catch (err) {
    res.status(400).send(err)
  }
}

module.exports = {
  create,
  list
}
