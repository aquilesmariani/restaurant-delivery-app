const Order = require('../models').Order
const Restaurant = require('../models').Restaurant
const orderMeal = require('./ordermeals')
const messaging = require('./messaging')
const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCxcu9THMzMIu4pNEIbbKRafiEvsK7iT7g'
})

module.exports = {
  create (req, res) {
    let clientLocation = req.body.location
    let eta = '0 mins'
    console.log(orderMeal)
    Restaurant.findById(req.params.restaurantId)
      .then(restById => {
        googleMapsClient.directions({
          origin: restById.get().Location,
          destination: clientLocation,
          mode: 'driving',
          departure_time: new Date(),
          traffic_model: 'optimistic'
        }, (err, response) => {
          if (!err) {
            const legs = response.json.routes[0].legs[0]

            eta = legs.duration_in_traffic ? legs.duration_in_traffic.text : legs.duration.text

            return Order
              .create({
                address: req.body.address,
                totalCost: req.body.totalCost,
                latLng: req.body.location
              })
              .then(order =>
                orderMeal.create(order.id, req.body.meals)
                  .then((a) => {
                    messaging.sendMessage(`Order created with id: ${order.id}, ETA: ${eta}`)
                    return res.status(201).send({
                      eta: eta
                    })
                  })
              )
              .catch(error => {
                return res.status(400).send({
                  message: error.message
                })
              })
          }
        })
      })
      .catch(err => res.status(400).send({
        ...err,
        message: 'Error trying to create order'
      })
      )
  }
}
