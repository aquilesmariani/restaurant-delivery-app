const Restaurant = require('../models').Restaurant
const Meal = require('../models').Meal
const Review = require('../models').Review

// updates restaurant's rating on every new review
const setRating = async (req, res) => {
  const ratings = await Review.findAll({ attributes: ['rating'], where: { restaurantId: req.params.restaurantId } })
  let sum = 0
  ratings.forEach((rating) => {
    sum += rating.rating
    return sum
  })
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
const create = (req, res) => {
  try {
    Restaurant
      .create({
        logo: req.body.logo,
        legalName: req.body.legalName,
        rating: req.body.rating,
        commercialEmail: req.body.commercialEmail,
        adminNumber: req.body.adminNumber,
        address: req.body.address,
        Location: req.body.Location
      })
      .then(post => res.status(201).send(post))
  } catch (err) {
    res.status(400).send(err)
  }
}

// GET request
const list = (req, res) => {
  try {
    Restaurant
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
      .then((restaurantList) => {
        return res.status(200).send([...restaurantList])
      })
  } catch (err) {
    res.status(400).send(err)
  }
}

// UPDATE request
const update = (req, res) => {
  try {
    return Restaurant
      .findById(req.params.restaurantId)
      .then(restById => {
        if (!restById) {
          return res.status(404).send({
            message: 'Restaurant Not Found'
          })
        }

        return restById.update({
          logo: req.body.logo || restById.logo,
          legalName: req.body.legalName || restById.legalName,
          rating: req.body.rating || restById.rating,
          commercialEmail: req.body.commercialEmail || restById.commercialEmail,
          adminNumber: req.body.adminNumber || restById.adminNumber,
          address: req.body.address || restById.address,
          Location: req.body.Location || restById.Location
        })
          .then(() => res.status(200).send(restById))
      })
  } catch (err) {
    res.status(400).send({...err})
  }
}

// DELETE request
const destroy = (req, res) => {
  try {
    Restaurant
      .findById(req.params.restaurantId)
      .then(restById => {
        if (!restById) {
          return res.status(400).send({
            message: 'Restaurant Not Found'
          })
        }
        restById.destroy()
          .then(() => res.status(200).send('Deleted! '))
      })
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
