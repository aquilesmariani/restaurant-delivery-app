
const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')

chai.use(chaiHttp)
let expect = chai.expect // eslint-disable-line no-unused-vars
let should = chai.should() // eslint-disable-line no-unused-vars

describe('Restaurants', () => {
  describe('/GET restaurants', () => {
    it('it should GET all the restaurants', (done) => {
      chai.request(app)
        .get('/restaurants')
        .end((err, res) => {
          if (err) {

          }
          res.should.have.status(200)
          res.body.should.be.a('array')
          done()
        })
    })
  })
  describe('/POST restaurant', () => {
    it('it should not POST a restaurant without legal name', (done) => {
      let restaurant = {
        title: 'Newa',
        logo: 'urltologo',
        rating: 4,
        commercialEmail: 'test@mailinator.com',
        adminNumber: '3124213',
        address: 'false st 00',
        Location: {
          lat: -32.931,
          lng: 33.999
        }
      }
      chai.request(app)
        .post('/restaurants')
        .send(restaurant)
        .end((err, res) => {
          if (err) {

          }
          res.should.have.status(400)
          res.body.should.be.a('object')
          res.body.should.have.property('errors')
          res.body.errors[0].should.have.property('path').eql('legalName')
          res.body.errors[0].should.have.property('type').eql('notNull Violation')
          done()
        })
    })
  })
})
