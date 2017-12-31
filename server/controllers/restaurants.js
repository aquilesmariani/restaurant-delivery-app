const Restaurant = require('../models').Restaurant
const Meal = require('../models').Meal
const Review = require('../models').Review

module.exports = {

  // POST request
  async create (req, res) {
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
  },

  // GET request
  async list (req, res) {
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
  },

  // UPDATE request
  async update (req, res) {
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
  },

  // DELETE request
  async destroy (req, res) {
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
}
