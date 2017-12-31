const Restaurant = require('../models').Restaurant
const Meal = require('../models').Meal
const Review = require('../models').Review

// updates restaurant's rating on every new review
const setRating = async (req, res) => {
  const ratings = await Review.findAll({ attributes: ['rating'], where: { restaurantId: req.params.restaurantId } })
  let sum = 0
  ratings.forEach((rating) => {
    console.log('ratin', rating.rating)
    sum += rating.rating
    return sum
  })
  console.log(sum)
  const rating = sum / ratings.length
  await Restaurant
    .update({
      rating: Math.round(rating * 100) / 100
    }, {
      where: {
        id: req.params.restaurantId
      }
    })
  return rating
}

// POST request
const create = async (req, res) => {
  try {
    const post = await Restaurant
      .create({
        title: req.body.title,
        logo: req.body.logo,
        legalName: req.body.legalName,
        rating: req.body.rating,
        commercialEmail: req.body.commercialEmail,
        adminNumber: req.body.adminNumber,
        address: req.body.address,
        Location: req.body.Location
      })
    res.status(201).send(post)
  } catch (err) {
    res.status(400).send(err)
  }
}

// GET request
const list = async (req, res) => {
  try {
    const restaurantList = await Restaurant
      .findAll({
        include: [{
          model: Meal,
          as: 'meals'
        }, {
          model: Review,
          as: 'reviews'
        } ],
        order: [
          ['rating', 'DESC']
        ]
      })
    res.status(201).send(restaurantList)
  } catch (err) {
    console.log(err)
    res.status(400).send(err)
  }
}

// UPDATE request
const update = async (req, res) => {
  try {
    const restById = await Restaurant
      .findById(req.params.restaurantId)
    if (!restById) {
      return res.status(400).send({
        message: 'Restaurant Not Found'
      })
    }
    restById.update({
      title: req.body.title || restById.title,
      logo: req.body.logo || restById.logo,
      legalName: req.body.legalName || restById.legalName,
      rating: req.body.rating || restById.rating,
      commercialEmail: req.body.commercialEmail || restById.commercialEmail,
      adminNumber: req.body.adminNumber || restById.adminNumber,
      address: req.body.address || restById.address,
      Location: req.body.Location || restById.Location
    })
    res.status(200).send(restById)
  } catch (err) {
    res.status(400).send(err)
  }
}

// DELETE request
const destroy = async (req, res) => {
  try {
    const restById = await Restaurant
      .findById(req.params.restaurantId)
    if (!restById) {
      return res.status(400).send({
        message: 'Restaurant Not Found'
      })
    }
    restById.destroy()
    res.status(201).send('Deleted! ')
  } catch (err) {
    res.status(400).send(err)
  }
}

module.exports = {
  create,
  list,
  update,
  destroy,
  setRating
}
