const Business = require('../models/Business')
const errors = require('../infrastructure/errors')
const { sendMessage } = require('../infrastructure/request')

async function sendMessageBusinessController(req, res) {
  try {
    const { businessId } = req.params
    const { text, attachments } = req.body
    if (!text) return res.status(400).send(errors.emptyMessage)
    const business = await Business.findById(businessId).exec()
    for (let channel of business.channels) {
      const ret = await sendMessage(channel.id, text, attachments)
      if (!ret.ok) throw new Error(errors.wrong)
    }
    res.send({ success: true })
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = sendMessageBusinessController