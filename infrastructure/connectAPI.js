const routes = require('../infrastructure/routes')
const addBusiness = require('../controllers/addBusinessController')
const removeBusiness = require('../controllers/removeBusinessController')
const addChannel = require('../controllers/addChannelController')
const removeChannel = require('../controllers/removeChannelController')
const sendMessageBusiness = require('../controllers/sendMessageBusinessController')
const sendMessageChannel = require('../controllers/sendMessageChannelController')

function connectAPI(app) {
  app.get(routes.addBusiness, addBusiness)
  app.get(routes.removeBusiness, removeBusiness)
  app.get(routes.addChannel, addChannel)
  app.get(routes.removeChannel, removeChannel)
  app.post(routes.sendMessageBusiness, sendMessageBusiness)
  app.post(routes.sendMessageChannel, sendMessageChannel)
}

module.exports = connectAPI