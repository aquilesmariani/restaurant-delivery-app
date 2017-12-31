const Review = require('../models').Review

const create = async (req, res) => {
  try {
    const post = await Review
      .create({
        name: req.body.name,
        review: req.body.review,
        rating: req.body.rating,
        restaurantId: req.params.restaurantId
      })
    res.status(201).send(post)
  } catch (err) {
    console.log('kepasooo2 ', err)
    const msg = err.errors[0].path === 'rating' ? 'Rating must be between 1 and 5' : null
    res.status(400).send(msg || err)
  }
}

// GET request
const list = async (req, res) => {
  try {
    const restaurantList = await Review.findAll({ where: { restaurantId: req.params.restaurantId } })
    getRating(req.params.restaurantId)
    res.status(200).send(restaurantList)
  } catch (err) {
    console.log('curratin', err)
    res.status(400).send(err)
  }
}

const getRating = async (restaurantId) => {
  console.log('naranja')
  const ratings = await Review.findAll({ attributes: ['rating'], where: { restaurantId: restaurantId } })
  let sum = 0
  ratings.map((rating) => {
    console.log('ratin', rating.rating)
    sum += rating.rating
    return sum
  })
  console.log(sum)
  const rating = sum / ratings.length
  console.log(Math.round(rating * 100) / 100)
  return rating
}

module.exports = {
  create,
  list,
  getRating
}
