const Business = require('../models/Business')

function sendMessageBusinessController(req, res) {
  try {
    const { businessId } = req.params
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = sendMessageBusinessController